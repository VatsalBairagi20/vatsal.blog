import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: "Vatsal Blog",
  description: 'Web development blog by Vatsal Bairagi, covering React, Next.js, TypeScript, and more.',
  openGraph: {
    title: "Vatsal Blog",
    description: 'Web development blog by Vatsal Bairagi, covering React, Next.js, TypeScript, and more.',
    url: 'https://vatsal-blog.vercel.app',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#fff8e1] text-[#1a2a44]">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-[#f4c430] focus:text-[#1a2a44]">
          Skip to content
        </a>
        <div className="sticky top-0 z-50 bg-[#f4c430] text-[#1a2a44] text-center py-2 font-bold text-base sm:text-lg">
          Check out my latest blog posts and projects!
        </div>
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
      </body>
    </html>
  );
}
