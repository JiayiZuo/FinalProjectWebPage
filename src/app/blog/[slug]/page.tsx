
import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { 
  getPost, 
  getAllPosts, 
  extractTableOfContents, 
  getRelatedPosts 
} from '@/lib/blog/mdx';
import ShareButtons from '@/components/blog/share-buttons';
import Toc from '@/components/blog/toc';
import TagList from '@/components/blog/tag-list';
import PostNavigation from '@/components/blog/post-navigation';
import RelatedPosts from '@/components/blog/related-posts';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Your Name'],
      images: post.image ? [post.image] : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    notFound();
  }
  
  const toc = extractTableOfContents(post.content);
  const allPosts = await getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const relatedPosts = await getRelatedPosts(post);
  
  
  const tags = post.tags.map(tag => ({
    name: tag,
    slug: tag.toLowerCase().replace(/\s+/g, '-'),
    count: 1
  }));
  
  
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-5xl mx-auto">
        <header className="mb-8">
          <div className="mb-6">
            {post.categories.map((category) => (
              <span 
                key={category} 
                className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2"
              >
                {category}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{post.readingTime}</span>
          </div>
          
          {post.image && (
            <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
              <Image 
                src={post.image} 
                alt={post.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              <Toc toc={toc} />
              <ShareButtons url={`https://example.com/blog/${post.slug}`} title={post.title} />
            </div>
          </aside>
          
          <div className="lg:w-3/4 order-1 lg:order-2">
            {/* <div className="prose prose-lg max-w-none mb-10">
              <MDXRemote {...post.content} />
            </div> */}
            
            <div className="mb-8">
              <TagList tags={tags} />
            </div>
            
            <PostNavigation prevPost={prevPost} nextPost={nextPost} />
            
            {/* <CommentSection 
              postSlug={post.slug}
              comments={comments}
              onAddComment={handleAddComment}
              onAddReply={handleAddReply}
            /> */}
          </div>
        </div>
      </article>
      
      <div className="max-w-5xl mx-auto mt-12">
        <RelatedPosts posts={relatedPosts} />
      </div>
    </div>
  );
}