import blogData from '@/data/blogData';
import Header from '@/components/Header';
import BlogCard from '@/components/BlogCard';
import Image from 'next/image';
import Head from 'next/head';

export default function BlogPage() {
  if (!blogData || blogData.length === 0) {
    return (
      <>
        <Head>
          <title>No Posts - Vatsal Bairagi's Blog</title>
          <meta name="description" content="No blog posts available yet. Check back soon!" />
        </Head>
        <Header />
        <main className="min-h-screen bg-[#fff8e1] px-4 sm:px-6 lg:px-8 py-16">
          <div className="container">
            <h2 className="text-3xl sm:text-4xl text-[#1a2a44] font-bold text-center">No posts yet.</h2>
          </div>
        </main>
      </>
    );
  }

  const [latestPost, ...otherPosts] = blogData;

  return (
    <>
      <Head>
        <title>Vatsal Bairagi's Blog - Web Development Insights</title>
        <meta
          name="description"
          content="Explore Vatsal Bairagi's blog for insights on React, Next.js, TypeScript, and web development."
        />
        <meta property="og:title" content="Vatsal Bairagi's Blog - Web Development Insights" />
        <meta
          property="og:description"
          content="Explore Vatsal Bairagi's blog for insights on React, Next.js, TypeScript, and web development."
        />
        <meta property="og:image" content={latestPost.image} />
      </Head>
      <Header />
      <main className="min-h-screen bg-[#fff8e1] px-4 sm:px-6 lg:px-8 py-16">
        <div className="container">
          {/* Latest Post */}
          <section className="mb-12">
            <a href={`/blog/${latestPost.slug}`} aria-label={`Read more about ${latestPost.title}`}>
              <Image
                src={latestPost.image}
                alt={latestPost.title}
                layout="responsive"
                width={800}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </a>
            <h2 className="text-3xl sm:text-4xl text-[#1a2a44] font-bold mt-6 mb-2">{latestPost.title}</h2>
            <p className="text-base sm:text-lg text-[#1a2a44]/80 mb-4">{latestPost.description}</p>
            <p className="text-sm sm:text-base text-[#1a2a44]/60">{latestPost.date}</p>
          </section>

          {/* Other Posts */}
          {otherPosts.length > 0 && (
            <section>
              <h3 className="text-2xl sm:text-3xl text-[#1a2a44] font-bold text-center mb-8 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-[#f4c430] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2">
                Other Posts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPosts.map((post) => (
                  <div key={post.slug} className="other-post opacity-0 translate-y-10 transition-all duration-600">
                    <BlogCard post={post} />
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
