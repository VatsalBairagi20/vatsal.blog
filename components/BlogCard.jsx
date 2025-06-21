import Link from 'next/link';
import './BlogCard.css';

export default function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <Link href={`/blog/${post.slug}`}>
        <img src={post.image} alt={post.title} className="blog-card-image" />
      </Link>
      <p className="blog-card-title">{post.title}</p>
    </div>
  );
}
