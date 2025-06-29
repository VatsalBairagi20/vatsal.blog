import blogData from '@/data/blogData';
import Header from '@/components/Header';
import BlogCard from '@/components/BlogCard';
import Image from 'next/image';
import Head from 'next/head';

export default function BlogPost({ params }) {
  const slug = params?.slug;
  const post = blogData.find((item) => item.slug === slug);

  // Filter out the current post and limit to 3 related posts
  const otherPosts = blogData.filter((item) => item.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <>
        <Head>
          <title>Post Not Found - Vatsal Singh's Blog</title>
          <meta name="description" content="The requested blog post was not found." />
        </Head>
        <Header />
        <main className="min-h-screen bg-[#fff8e1] px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl text-[#1a2a44] font-bold">Post not found 😓</h2>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} - Vatsal Singh's Blog</title>
        <meta name="description" content={`${post.title} - Learn about web development, React, and Next.js.`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={`${post.title} - Learn about web development, React, and Next.js.`} />
        <meta property="og:image" content={post.image} />
      </Head>
      <Header />
      <main className="min-h-screen bg-[#fff8e1] px-4 sm:px-6 lg:px-8 py-16" role="main">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative mb-8">
            <Image
              src={post.image}
              alt={post.title}
              layout="responsive"
              width={800}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a44]/50 to-transparent rounded-lg"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#1a2a44] font-bold text-center mb-4">{post.title}</h1>
          <p className="text-base sm:text-lg text-[#1a2a44]/80 text-center mb-8">{post.date}</p>
          <div
            className="prose prose-lg max-w-none text-[#1a2a44] mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {otherPosts.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl sm:text-3xl text-[#1a2a44] font-bold text-center mb-8 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-[#f4c430] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2">
                Other Posts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPosts.map((otherPost) => (
                  <div key={otherPost.slug} className="opacity-0 translate-y-10 transition-all duration-600">
                    <BlogCard {...otherPost} />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
