'use client'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { SearchResult } from '@/lib/blog/types';
import { getApiUrl } from '@/lib/blog/api';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // 点击外部关闭搜索结果
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleSearch = async () => {
    if (query.trim().length === 0) {
      setResults([]);
      setIsOpen(false);
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await fetch(`${getApiUrl('/blog/search')}?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      setResults(data);
      setIsOpen(true);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  
  return (
    <div className="relative" ref={searchRef}>
      <div className="flex items-center border rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-2 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
        >
          {isLoading ? (
            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          ) : (
            'Search'
          )}
        </button>
      </div>
      
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-md z-10 max-h-96 overflow-y-auto">
          <ul className="py-2 divide-y">
            {results.map((result) => (
              <li key={result.slug} className="hover:bg-gray-50">
                <Link href={`/blog/${result.slug}`} onClick={() => setIsOpen(false)}>
                  <div className="px-4 py-3">
                    <h4 className="font-medium">{result.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {result.excerpt.length > 120 
                        ? `${result.excerpt.substring(0, 120)}...` 
                        : result.excerpt}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-md z-10 p-4 text-center">
          No results found for {query}
        </div>
      )}
    </div>
  );
}