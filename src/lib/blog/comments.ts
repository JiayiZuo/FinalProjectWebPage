import { BlogComment } from './types';

// 由于没有数据库，使用内存存储暂时保存评论
const comments: BlogComment[] = [];

// 获取文章评论
export const getComments = (postSlug: string): BlogComment[] => {
  return comments
    .filter(comment => comment.postSlug === postSlug)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

// 添加评论
export const addComment = (comment: Omit<BlogComment, 'id' | 'createdAt'>): BlogComment => {
  const newComment: BlogComment = {
    ...comment,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  
  comments.push(newComment);
  return newComment;
};

// 添加回复
export const addReply = (
  parentId: string, 
  reply: Omit<BlogComment, 'id' | 'createdAt'>
): BlogComment | null => {
  const parentComment = comments.find(c => c.id === parentId);
  
  if (!parentComment) {
    return null;
  }
  
  const newReply: BlogComment = {
    ...reply,
    id: `${parentId}-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  
  parentComment.replies = parentComment.replies || [];
  parentComment.replies.push(newReply);
  
  return newReply;
};