 import blogData from '@/data/blogData';
import Header from '@/components/Header';
import BlogCard from '@/components/BlogCard';
import styles from './page.module.css'; // ✅ Proper module import

export default function BlogPage() {
  if (!blogData || blogData.length === 0) {
    return (
      <>
        <Header />
        <main className={styles.container}>
          <h2>No posts yet.</h2>
        </main>
      </>
    );
  }

  const [latestPost, ...otherPosts] = blogData;

  return (
    <>
      <Header />
      <main className={styles.container}>
        {/* 🔥 Latest Post */}
        <section className={styles['latest-post']}>
          <a href={`/blog/${latestPost.slug}`}>
            <img src={latestPost.image} alt={latestPost.title} className={styles['latest-image']} />
          </a>
          <h2 className={styles['latest-title']}>{latestPost.title}</h2>
          <p className={styles['latest-description']}>{latestPost.description}</p>
          <p className={styles['latest-date']}>{latestPost.date}</p>
        </section>

        {/* 📚 Other Posts */}
        <h3 className={styles['other-posts-heading']}>Other posts</h3>
        <div className={styles['other-posts-grid']}>
          {otherPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}
