'use client'
import React, { useState } from 'react';
import { BlogComment } from '@/lib/blog/types';

interface CommentSectionProps {
  postSlug: string;
  comments: BlogComment[];
  onAddComment: (comment: { name: string; email: string; content: string }) => void;
  onAddReply: (parentId: string, reply: { name: string; email: string; content: string }) => void;
}

export default function CommentSection({ 
  comments, 
  onAddComment,
  onAddReply 
}: CommentSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !content.trim()) {
      return;
    }
    
    if (replyTo) {
      onAddReply(replyTo, { name, email, content });
      setReplyTo(null);
    } else {
      onAddComment({ name, email, content });
    }
    
    setName('');
    setEmail('');
    setContent('');
  };
  
  const Comment = ({ comment, isReply = false }: { comment: BlogComment, isReply?: boolean }) => (
    <div className={`mb-4 ${isReply ? 'ml-8 border-l-2 border-gray-200 pl-4' : ''}`}>
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center">
          {comment.name.charAt(0).toUpperCase()}
        </div>
        <div className="ml-2">
          <h4 className="font-medium">{comment.name}</h4>
          <span className="text-sm text-gray-500">
            {new Date(comment.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className="mt-2 mb-3">{comment.content}</div>
      <button 
        className="text-sm text-blue-600 hover:underline"
        onClick={() => setReplyTo(comment.id)}
      >
        Reply
      </button>
      
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-4">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} isReply={true} />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-2xl font-semibold mb-6">Comments ({comments.length})</h3>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <h4 className="text-lg font-medium mb-4">
          {replyTo ? 'Reply to comment' : 'Leave a comment'}
          {replyTo && (
            <button 
              type="button" 
              className="ml-2 text-sm text-gray-500"
              onClick={() => setReplyTo(null)}
            >
              (Cancel)
            </button>
          )}
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm">Name *</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm">Email *</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="content" className="block mb-1 text-sm">Comment *</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={4}
            className="w-full px-3 py-2 border rounded-md"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {replyTo ? 'Reply' : 'Post Comment'}
        </button>
      </form>
      
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
}