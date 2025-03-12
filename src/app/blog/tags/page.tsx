import React from 'react';
import { Metadata } from 'next';
import { getAllTags } from '@/lib/blog/mdx';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog Tags | My Website',
  description: 'Browse all blog tags',
};

export default async function TagsPage() {
  const tags = await getAllTags();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">All Tags</h1>
        
        <div className="flex flex-wrap gap-4">
          {tags.map((tag) => (
            <Link 
              key={tag.slug} 
              href={`/blog/tags/${tag.slug}`}
              className="bg-white shadow-md rounded-full px-6 py-3 hover:shadow-lg transition-shadow"
            >
              <span className="font-medium">#{tag.name}</span>
              <span className="ml-2 text-gray-600">({tag.count})</span>
            </Link>
          ))}
        </div>
        
        {tags.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No tags found.</p>
          </div>
        )}
      </div>
    </div>
  );
}