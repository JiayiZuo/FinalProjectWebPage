import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog/mdx';

export const metadata: Metadata = {
  title: 'Blog Archive | My Website',
  description: 'Browse all blog posts by date',
};

export default async function ArchivePage() {
  const posts = await getAllPosts();
  
  // 按年份和月份组织文章
  const archiveMap = new Map<string, Map<string, typeof posts>>();
  
  posts.forEach(post => {
    const date = new Date(post.date);
    const year = date.getFullYear().toString();
    const month = date.toLocaleString('default', { month: 'long' });
    
    if (!archiveMap.has(year)) {
      archiveMap.set(year, new Map());
    }
    
    const yearMap = archiveMap.get(year)!;
    if (!yearMap.has(month)) {
      yearMap.set(month, []);
    }
    
    yearMap.get(month)!.push(post);
  });
  
  // 将 Map 转换为按年份排序的数组
  const archiveByYear = Array.from(archiveMap.entries())
    .sort((a, b) => Number(b[0]) - Number(a[0]))
    .map(([year, monthsMap]) => {
      // 按月份排序
      const months = Array.from(monthsMap.entries())
        .sort((a, b) => {
          const monthA = new Date(Date.parse(`${a[0]} 1, ${year}`)).getMonth();
          const monthB = new Date(Date.parse(`${b[0]} 1, ${year}`)).getMonth();
          return monthB - monthA;
        });
      
      return {
        year,
        months,
      };
    });
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog Archive</h1>
        
        {archiveByYear.map(({ year, months }) => (
          <div key={year} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{year}</h2>
            
            {months.map(([month, monthPosts]) => (
              <div key={month} className="mb-8">
                <h3 className="text-xl font-medium mb-4">{month}</h3>
                
                <ul className="space-y-3">
                  {monthPosts.map(post => (
                    <li key={post.slug} className="border-b border-gray-100 pb-3">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{post.title}</span>
                          <span className="text-sm text-gray-500">
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
        
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No posts found.</p>
          </div>
        )}
      </div>
    </div>
  );
}