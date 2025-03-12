import { getAllPosts } from './mdx';
import { SearchResult } from './types';

// 简单的搜索实现
export const searchPosts = async (query: string): Promise<SearchResult[]> => {
  const posts = await getAllPosts();
  
  if (!query || query.trim() === '') {
    return [];
  }
  
  const searchQuery = query.toLowerCase().trim();
  
  return posts
    .map((post) => {
      // 计算相关性分数
      let score = 0;
      let excerpt = '';
      
      // 标题匹配加高分
      if (post.title.toLowerCase().includes(searchQuery)) {
        score += 10;
        excerpt = post.title;
      }
      
      // 描述匹配加中分
      if (post.description.toLowerCase().includes(searchQuery)) {
        score += 5;
        excerpt = excerpt || post.description;
      }
      
      // 内容匹配加低分
      const contentLower = post.content.toLowerCase();
      if (contentLower.includes(searchQuery)) {
        score += 3;
        
        // 提取匹配的上下文作为摘要
        const index = contentLower.indexOf(searchQuery);
        const start = Math.max(0, index - 50);
        const end = Math.min(contentLower.length, index + searchQuery.length + 50);
        excerpt = excerpt || `...${post.content.substring(start, end)}...`;
      }
      
      // 标签和分类匹配加分
      if (post.tags.some(tag => tag.toLowerCase().includes(searchQuery))) {
        score += 2;
      }
      
      if (post.categories.some(category => category.toLowerCase().includes(searchQuery))) {
        score += 2;
      }
      
      return {
        slug: post.slug,
        title: post.title,
        description: post.description,
        excerpt: excerpt || post.description,
        score
      };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score);
};