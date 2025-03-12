import { NextRequest, NextResponse } from 'next/server';
import { getComments, addComment, addReply } from '@/lib/blog/comments';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const postSlug = searchParams.get('slug');
  
  if (!postSlug) {
    return NextResponse.json(
      { error: 'Post slug is required' },
      { status: 400 }
    );
  }
  
  const comments = getComments(postSlug);
  return NextResponse.json(comments);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.postSlug || !body.name || !body.email || !body.content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    if (body.parentId) {
      const reply = addReply(body.parentId, {
        postSlug: body.postSlug,
        name: body.name,
        email: body.email,
        content: body.content,
      });
      
      if (!reply) {
        return NextResponse.json(
          { error: 'Parent comment not found' },
          { status: 404 }
        );
      }
      
      return NextResponse.json(reply);
    } else {
      const comment = addComment({
        postSlug: body.postSlug,
        name: body.name,
        email: body.email,
        content: body.content,
      });
      
      return NextResponse.json(comment);
    }
  } catch {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}