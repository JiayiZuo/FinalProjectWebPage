'use client'
import React from 'react';
import Link from 'next/link';
import { BlogCategory } from '@/lib/blog/types';

interface CategoryListProps {
  categories: BlogCategory[];
  title?: string;
}

export default function CategoryList({ categories, title = 'Categories' }: CategoryListProps) {
  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/blog/categories/${category.slug}`}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm inline-flex items-center transition-colors"
          >
            {category.name}
            <span className="ml-1 text-xs bg-gray-200 px-1.5 py-0.5 rounded-full">
              {category.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}