import React from 'react';
import { Metadata } from 'next';
import { getAllCategories } from '@/lib/blog/mdx';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog Categories | My Website',
  description: 'Browse all blog categories',
};

export default async function CategoriesPage() {
  const categories = await getAllCategories();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">All Categories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.slug} 
              href={`/blog/categories/${category.slug}`}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
              <p className="text-gray-600">{category.count} post{category.count !== 1 ? 's' : ''}</p>
            </Link>
          ))}
        </div>
        
        {categories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No categories found.</p>
          </div>
        )}
      </div>
    </div>
  );
}