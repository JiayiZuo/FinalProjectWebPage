'use client'
import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog/types';

interface PostNavigationProps {
  prevPost?: Omit<BlogPost, 'content'> | null;
  nextPost?: Omit<BlogPost, 'content'> | null;
}

export default function PostNavigation({ prevPost, nextPost }: PostNavigationProps) {
  if (!prevPost && !nextPost) {
    return null;
  }

  return (
    <nav className="border-t border-b border-gray-200 py-6 my-8">
      <div className="flex flex-col sm:flex-row justify-between">
        {prevPost ? (
          <Link href={`/blog/${prevPost.slug}`} className="group mb-4 sm:mb-0">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Previous</span>
              <span className="font-medium group-hover:text-blue-600 transition-colors">
                {prevPost.title}
              </span>
            </div>
          </Link>
        ) : (
          <div></div>
        )}

        {nextPost && (
          <Link href={`/blog/${nextPost.slug}`} className="group text-right">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Next</span>
              <span className="font-medium group-hover:text-blue-600 transition-colors">
                {nextPost.title}
              </span>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}