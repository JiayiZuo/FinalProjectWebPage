const siteConfig = {
    title: '我的博客',
    description: '分享技术、生活和思考',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    locale: 'en',
    author: {
      name: '博主',
      email: 'example@example.com',
    },
    navLinks: [
      { title: '首页', path: '/' },
      { title: '博客', path: '/blog' },
      { title: '分类', path: '/blog/categories' },
      { title: '标签', path: '/blog/tags' },
      { title: '归档', path: '/blog/archive' },
    ],
    socialLinks: {
      twitter: 'https://twitter.com/username',
      github: 'https://github.com/username',
    },
  };
  
  export default siteConfig;