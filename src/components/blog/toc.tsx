'use client'
import React from 'react';
import { TableOfContents } from '@/lib/blog/types';

interface TocProps {
  toc: TableOfContents[];
}

export default function Toc({ toc }: TocProps) {
  if (toc.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-24">
      <h3 className="text-xl font-semibold mb-4">Table of Contents</h3>
      <nav>
        <ul className="space-y-2">
          {toc.map((heading) => (
            <li 
              key={heading.id} 
              className={`pl-${(heading.level - 1) * 4}`}
              style={{ paddingLeft: `${(heading.level - 1) * 1}rem` }}
            >
              <a 
                href={`#${heading.id}`}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}