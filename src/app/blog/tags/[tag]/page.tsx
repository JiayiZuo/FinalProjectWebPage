import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllTags, getPostsByTag } from '@/lib/blog/mdx';
import ArticleList from '@/components/blog/article-list';

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tags = await getAllTags();
  const tag = tags.find(t => t.slug === params.tag);
  
  if (!tag) {
    return {
      title: 'Tag Not Found',
    };
  }
  
  return {
    title: `#${tag.name} | Blog Tags`,
    description: `Browse all posts tagged with #${tag.name}`,
  };
}

export async function generateStaticParams() {
  const tags = await getAllTags();
  
  return tags.map((tag) => ({
    tag: tag.slug,
  }));
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const tags = await getAllTags();
  const tag = tags.find(t => t.slug === params.tag);
  
  if (!tag) {
    notFound();
  }
  
  const posts = await getPostsByTag(params.tag);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-4">#{tag.name}</h1>
        <p className="text-gray-600">
          Showing {posts.length} post{posts.length !== 1 ? 's' : ''} with this tag
        </p>
      </div>
      
      <ArticleList posts={posts} showFeatured={false} />
    </div>
  );
}