import blogData from '@/data/blogData';
import Header from '@/components/Header';
import Image from 'next/image';
import './post.css';

export default function BlogPost({ params }) {
  const slug = params?.slug;

  const post = blogData.find((item) => item.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
        <main className="post-page">
          <h2>Post not found 😓</h2>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="post-page">
        <Image
          src={post.image}
          alt={post.title}
          className="post-banner"
          width={800}
          height={400}
          priority
        />
        <h1>{post.title}</h1>
        <p className="post-date">{post.date}</p>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>
    </>
  );
}
