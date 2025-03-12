import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllCategories, getPostsByCategory } from '@/lib/blog/mdx';
import ArticleList from '@/components/blog/article-list';

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const categories = await getAllCategories();
  const category = categories.find(c => c.slug === params.category);
  
  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }
  
  return {
    title: `${category.name} | Blog Categories`,
    description: `Browse all posts in the ${category.name} category`,
  };
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const categories = await getAllCategories();
  const category = categories.find(c => c.slug === params.category);
  
  if (!category) {
    notFound();
  }
  
  const posts = await getPostsByCategory(params.category);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
        <p className="text-gray-600">
          Showing {posts.length} post{posts.length !== 1 ? 's' : ''} in this category
        </p>
      </div>
      
      <ArticleList posts={posts} showFeatured={false} />
    </div>
  );
}