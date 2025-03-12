'use client'
import React from 'react';
import Link from 'next/link';
import { BlogTag } from '@/lib/blog/types';

interface TagListProps {
  tags: BlogTag[];
  title?: string;
}

export default function TagList({ tags, title = 'Tags' }: TagListProps) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag.slug}
            href={`/blog/tags/${tag.slug}`}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm inline-flex items-center transition-colors"
          >
            #{tag.name}
            <span className="ml-1 text-xs bg-gray-200 px-1.5 py-0.5 rounded-full">
              {tag.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}