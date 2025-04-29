import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-background/60 backdrop-blur-sm w-full text-center">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6">
          <p className="text-mt space-y-1">
            © {new Date().getFullYear()} <span className="text-primary">Zuo Yi</span>. All rights reserved.
          </p>
          <p className="text-mt text-black-400">Made with ❤️ using Next.js and React.js</p>
      </div>
    </footer>
  );
};

export default Footer;