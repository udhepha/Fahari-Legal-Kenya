import React from 'react';
import { SectionHeading } from '../App';
import { ChevronRight, ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: '1',
    title: 'Understanding Land Tenure in Kenya',
    excerpt: 'A comprehensive guide to the different types of land ownership under the Land Act 2012 and how to protect your title.',
    category: 'Property Law',
    date: 'Feb 15, 2026'
  },
  {
    id: '2',
    title: 'Your Rights During an Arrest',
    excerpt: 'What the Constitution says about your rights when confronted by law enforcement. Know your Article 49 rights.',
    category: 'Criminal Justice',
    date: 'Feb 10, 2026'
  },
  {
    id: '3',
    title: 'Navigating Family Law Procedures',
    excerpt: 'Step-by-step advice on filing for maintenance or custody in the Children\'s Court, ensuring the best interests of the child.',
    category: 'Family Law',
    date: 'Feb 5, 2026'
  }
];

const BlogPage = () => {
  return (
    <section id="blog" className="py-24 bg-white pt-[100px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <SectionHeading 
            title="Legal Insights" 
            subtitle="Stay informed about your rights and the changing legal landscape in Kenya."
          />
          <a href="#" className="hidden md:flex items-center gap-2 text-accent font-bold hover:underline mb-12">
            View All Posts <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-video bg-slate-100 rounded-2xl mb-6 overflow-hidden relative">
                <img 
                  src={`https://picsum.photos/seed/${post.id}/800/600`} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">
                    {post.category}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-2">{post.date}</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-sm font-bold flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
