// 浏览量相关API
const viewsMap = new Map<string, number>();

export const getPostViews = (slug: string): number => {
  return viewsMap.get(slug) || 0;
};

export const incrementPostViews = (slug: string): number => {
  const currentViews = viewsMap.get(slug) || 0;
  const newViews = currentViews + 1;
  viewsMap.set(slug, newViews);
  return newViews;
};

// 用于构造API URL的辅助函数
export const getApiUrl = (path: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
  return `${baseUrl}/api${path}`;
};