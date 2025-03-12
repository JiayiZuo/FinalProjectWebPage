import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import siteConfig from '@/config/site';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    locale: siteConfig.locale,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.locale}>
      <body className={inter.className}>
        <header className="border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <div>
                <Link href="/" className="text-2xl font-bold">
                  {siteConfig.title}
                </Link>
              </div>
              <nav>
                <ul className="flex space-x-6">
                  {siteConfig.navLinks.map((link) => (
                    <li key={link.path}>
                      <Link 
                        href={link.path}
                        className="hover:text-blue-600"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="min-h-screen py-8">
          {children}
        </main>
        <footer className="bg-gray-100 border-t">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>&copy; {new Date().getFullYear()} {siteConfig.title}. 保留所有权利。</p>
              </div>
              <div className="flex space-x-4">
                {Object.entries(siteConfig.socialLinks).map(([name, url]) => (
                  <a 
                    key={name} 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </a>
                ))}
                <Link href="/blog/rss.xml" className="hover:text-blue-600">
                  RSS
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}