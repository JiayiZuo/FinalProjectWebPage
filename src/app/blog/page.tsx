import React from 'react';
import { Metadata } from 'next';
import ArticleList from '@/components/blog/article-list';
import SearchBar from '@/components/blog/search-bar';
import CategoryList from '@/components/blog/category-list';
import TagList from '@/components/blog/tag-list';
import { getAllPosts, getAllCategories, getAllTags } from '@/lib/blog/mdx';

export const metadata: Metadata = {
  title: 'Blog | My Website',
  description: 'Read the latest articles and insights from our blog.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();
  const tags = await getAllTags();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600 mb-8">
          Explore the latest articles, tutorials, and insights from our team.
        </p>
        <SearchBar />
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          <ArticleList posts={posts} showFeatured={true} />
        </div>
        
        <div className="w-full lg:w-1/3">
          <CategoryList categories={categories} />
          <TagList tags={tags} />
        </div>
      </div>
    </div>
  );
}