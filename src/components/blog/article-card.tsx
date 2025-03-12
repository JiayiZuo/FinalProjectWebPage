'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog/types';

interface ArticleCardProps {
  post: Omit<BlogPost, 'content'>;
  featured?: boolean;
}

export default function ArticleCard({ post, featured = false }: ArticleCardProps) {
  return (
    <article className={`mb-8 rounded-lg overflow-hidden shadow-md ${featured ? 'border-2 border-blue-500' : ''}`}>
      <Link href={`/blog/${post.slug}`}>
        <div className="group cursor-pointer">
          {post.image && (
            <div className="relative w-full h-48 overflow-hidden">
              <Image 
                src={post.image} 
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {featured && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 text-sm rounded-full">
                  Featured
                </div>
              )}
            </div>
          )}
          
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-2">
              {post.categories.map((category) => (
                <span 
                  key={category} 
                  className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-700"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
            
            <p className="text-gray-600 mb-4">{post.description}</p>
            
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}