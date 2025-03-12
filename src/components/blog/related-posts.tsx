'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog/types';

interface RelatedPostsProps {
  posts: Omit<BlogPost, 'content'>[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold mb-6">Related Posts</h3>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="flex group items-start hover:bg-gray-50 p-2 rounded-md transition-colors">
              {post.image && (
                <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
              )}
              <div className={post.image ? "ml-4" : ""}>
                <h4 className="font-medium group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h4>
                <div className="text-sm text-gray-500 mt-1">
                  {new Date(post.date).toLocaleDateString()} • {post.readingTime}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}