'use client'
import React from 'react';
import ArticleCard from './article-card';
import { BlogPost } from '@/lib/blog/types';

interface ArticleListProps {
  posts: Omit<BlogPost, 'content'>[];
  title?: string;
  showFeatured?: boolean;
}

export default function ArticleList({ posts, title, showFeatured = true }: ArticleListProps) {
  const featuredPosts = showFeatured ? posts.filter(post => post.featured) : [];
  const regularPosts = showFeatured 
    ? posts.filter(post => !post.featured)
    : posts;

  if (posts.length === 0) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">No posts found</h2>
        <p className="text-gray-600">Check back later for new content.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {title && (
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
      )}

      {featuredPosts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <ArticleCard key={post.slug} post={post} featured={true} />
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularPosts.map(post => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}