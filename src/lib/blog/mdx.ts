import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import readingTime from 'reading-time';
import { BlogPost, TableOfContents } from './types';

// MDX 文件所在路径
const POSTS_PATH = path.join(process.cwd(), 'content', 'posts');

// 获取所有MDX文件的路径
export const getPostFilePaths = (): string[] => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path));
};

// 读取单个文章内容
export const getPost = async (slug: string): Promise<BlogPost | null> => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  
  if (!fs.existsSync(postFilePath)) {
    return null;
  }
  
  const source = fs.readFileSync(postFilePath, 'utf8');
  const { content, data } = matter(source);
  const stats = readingTime(content);
  
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
    scope: data,
  });

  return {
    slug,
    title: data.title || 'Untitled',
    description: data.description || '',
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    content: mdxSource.compiledSource,
    readingTime: stats.text,
    categories: data.categories || [],
    tags: data.tags || [],
    featured: data.featured || false,
    draft: data.draft || false,
    image: data.image || undefined,
  };
};

// 获取所有文章
export const getAllPosts = async (): Promise<BlogPost[]> => {
  const filePaths = getPostFilePaths();
  const posts = await Promise.all(
    filePaths.map(async (filePath) => {
      const slug = filePath.replace(/\.mdx?$/, '');
      const post = await getPost(slug);
      return post;
    })
  );
  
  // 过滤掉null值和草稿文章（生产环境）
  return posts
    .filter((post): post is BlogPost => 
      post !== null && (process.env.NODE_ENV !== 'production' || !post.draft)
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// 提取文章中的目录
export const extractTableOfContents = (content: string): TableOfContents[] => {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc: TableOfContents[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

    toc.push({
      id,
      text,
      level,
    });
  }

  return toc;
};

// 获取所有分类
export const getAllCategories = async () => {
  const posts = await getAllPosts();
  const categoriesMap = new Map();

  posts.forEach((post) => {
    post.categories.forEach((category) => {
      const slug = category.toLowerCase().replace(/\s+/g, '-');
      const current = categoriesMap.get(slug) || { name: category, slug, count: 0 };
      categoriesMap.set(slug, { ...current, count: current.count + 1 });
    });
  });

  return Array.from(categoriesMap.values());
};

// 获取所有标签
export const getAllTags = async () => {
  const posts = await getAllPosts();
  const tagsMap = new Map();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      const slug = tag.toLowerCase().replace(/\s+/g, '-');
      const current = tagsMap.get(slug) || { name: tag, slug, count: 0 };
      tagsMap.set(slug, { ...current, count: current.count + 1 });
    });
  });

  return Array.from(tagsMap.values());
};

// 按分类获取文章
export const getPostsByCategory = async (categorySlug: string) => {
  const posts = await getAllPosts();
  return posts.filter((post) => 
    post.categories.some((category) => 
      category.toLowerCase().replace(/\s+/g, '-') === categorySlug
    )
  );
};

// 按标签获取文章
export const getPostsByTag = async (tagSlug: string) => {
  const posts = await getAllPosts();
  return posts.filter((post) => 
    post.tags.some((tag) => 
      tag.toLowerCase().replace(/\s+/g, '-') === tagSlug
    )
  );
};

// 获取相关文章
export const getRelatedPosts = async (currentPost: BlogPost, limit = 3) => {
  const allPosts = await getAllPosts();
  
  // 排除当前文章
  const otherPosts = allPosts.filter((post) => post.slug !== currentPost.slug);
  
  // 计算相关性分数
  const scoredPosts = otherPosts.map((post) => {
    let score = 0;
    
    // 相同分类加分
    currentPost.categories.forEach((category) => {
      if (post.categories.includes(category)) score += 2;
    });
    
    // 相同标签加分
    currentPost.tags.forEach((tag) => {
      if (post.tags.includes(tag)) score += 1;
    });
    
    return { post, score };
  });
  
  // 按相关性排序，取前几个
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
};