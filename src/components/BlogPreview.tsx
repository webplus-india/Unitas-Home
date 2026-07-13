/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, Clock, ArrowUpRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../blogData';

interface BlogPreviewProps {
  onNavigateToResources: () => void;
  onNavigateToArticle: (slug: string) => void;
}

export default function BlogPreview({
  onNavigateToResources,
  onNavigateToArticle
}: BlogPreviewProps) {
  // Take exactly the latest 3 articles
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog" className="py-24 bg-[#FAF9F6] relative scroll-mt-12 overflow-hidden">
      {/* Background Visual Accent */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-primary/2 opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-[#0F8B8D]/2 opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <span className="inline-block text-[10px] uppercase tracking-widest text-[#0F8B8D] font-extrabold bg-[#0F8B8D]/5 px-3.5 py-1.5 rounded-full border border-[#0F8B8D]/15 font-sans">
              Student Living Blog
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-charcoal mt-4 mb-3 tracking-tight">
              Student Living Guides
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-gray leading-relaxed font-semibold">
              Helpful articles for students, medical interns, working professionals, and parents to make living in Dehradun easier, safer, and more comfortable.
            </p>
          </div>

          <button
            onClick={onNavigateToResources}
            className="shrink-0 flex items-center space-x-2 text-[10px] font-extrabold text-[#0F8B8D] tracking-wide uppercase border border-[#0F8B8D]/15 bg-white hover:bg-neutral-50 px-5.5 py-3.5 rounded-[18px] cursor-pointer transition-colors shadow-3xs"
          >
            <BookOpen className="w-4 h-4 text-[#0F8B8D]" />
            <span>Browse All Articles</span>
          </button>
        </div>

        {/* Grid of 3 Featured Articles (Consistent layout heights prevent card shifting) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onNavigateToArticle(post.slug)}
              className="group bg-white rounded-[24px] overflow-hidden border border-border-light shadow-2xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer h-full"
            >
              <div className="flex flex-col flex-1">
                {/* Cover Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-50 border-b border-gray-50">
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    title={post.imageAlt || post.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-white text-charcoal font-display font-bold text-[9px] tracking-widest uppercase px-3 py-1.5 rounded-full shadow-2xs border border-gray-100">
                    {post.category}
                  </span>
                </div>

                {/* Content Excerpt Box */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center space-x-3 text-[10px] sm:text-xs text-slate-gray mb-3 font-sans font-bold">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-charcoal mb-2.5 leading-snug group-hover:text-[#0F8B8D] transition-colors duration-250 tracking-tight line-clamp-2 min-h-[2.75rem] sm:min-h-[3.25rem]">
                    {post.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-gray leading-relaxed font-semibold line-clamp-3 min-h-[3.25rem] sm:min-h-[3.75rem]">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Strip */}
              <div className="flex flex-col">
                {/* Bottom Action Row */}
                <div className="mx-6 pb-6 pt-5 border-t border-gray-50 flex items-center justify-between">
                  <span className="font-sans font-extrabold text-[10px] tracking-wider text-[#0F8B8D] uppercase group-hover:translate-x-0.5 transition-transform">
                    Read Article
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-charcoal group-hover:bg-[#0F8B8D] group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
