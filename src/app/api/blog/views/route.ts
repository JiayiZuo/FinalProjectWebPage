import { NextRequest, NextResponse } from 'next/server';
import { getPostViews, incrementPostViews } from '@/lib/blog/api';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const slug = searchParams.get('slug');
  
  if (!slug) {
    return NextResponse.json(
      { error: 'Post slug is required' },
      { status: 400 }
    );
  }
  
  const views = getPostViews(slug);
  return NextResponse.json({ slug, views });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.slug) {
      return NextResponse.json(
        { error: 'Post slug is required' },
        { status: 400 }
      );
    }
    
    const views = incrementPostViews(body.slug);
    return NextResponse.json({ slug: body.slug, views });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}