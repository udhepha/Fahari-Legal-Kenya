import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { BLOG_POSTS } from './BlogPage'; // Assuming BLOG_POSTS is exported from BlogPage

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <section className="py-24 bg-white pt-[100px] min-h-screen">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Post Not Found</h2>
          <p className="text-slate-600 mb-8">The blog post you are looking for does not exist.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-accent font-bold hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white pt-[100px] min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-accent font-bold hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
        <p className="text-sm text-slate-500 mb-6">{post.date} &bull; {post.category}</p>

        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default BlogPostPage;
