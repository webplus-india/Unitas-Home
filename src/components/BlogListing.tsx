/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Clock, Search, ArrowUpRight, Compass, ChevronLeft } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../blogData';
import { motion, AnimatePresence } from 'motion/react';

interface BlogListingProps {
  onNavigateToHome: () => void;
  onNavigateToArticle: (slug: string) => void;
}

export default function BlogListing({
  onNavigateToHome,
  onNavigateToArticle
}: BlogListingProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isFiltering, setIsFiltering] = useState(false);

  const categories = [
    'All',
    'Student Guide',
    'Parent Guide',
    'Working Professional',
    'Accommodation Tips',
    'Safety'
  ];

  const handleCategoryChange = (cat: string) => {
    setIsFiltering(true);
    setSelectedCategory(cat);
    setTimeout(() => setIsFiltering(false), 300);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFiltering(true);
    setSearchQuery(e.target.value);
    // Debounce the loader turning off
    setTimeout(() => setIsFiltering(false), 300);
  };

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 25 } }
  };

  const renderSkeletons = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((n) => (
        <div key={n} className="animate-pulse bg-white border border-border-light rounded-[24px] p-6 h-[480px] flex flex-col justify-between shadow-2xs">
          <div>
            <div className="bg-gray-100 aspect-[16/10] rounded-[24px] w-full mb-5" />
            <div className="h-3.5 bg-gray-100 rounded w-1/3 mb-4" />
            <div className="h-6 bg-gray-100 rounded w-5/6 mb-3" />
            <div className="h-3.5 bg-gray-100 rounded w-full mb-2" />
            <div className="h-3.5 bg-gray-100 rounded w-2/3" />
          </div>
          <div className="h-10 bg-gray-100 rounded-full w-full mt-6" />
        </div>
      ))}
    </div>
  );

  return (
    <section className="pt-28 pb-24 bg-[#FAF9F6] relative min-h-screen overflow-hidden">
      {/* Background Visual Accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-primary/2 opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-[#0F8B8D]/2 opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link and Page Intro */}
        <div className="mb-8">
          <button
            onClick={onNavigateToHome}
            className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-slate-gray hover:text-[#0F8B8D] mb-4 cursor-pointer group transition-colors focus:outline-hidden"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Homepage</span>
          </button>

          {/* Hero Content Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-block text-[10px] uppercase tracking-widest text-[#0F8B8D] font-extrabold bg-[#0F8B8D]/5 px-3.5 py-1.5 rounded-full border border-[#0F8B8D]/15 mb-3 font-sans">
                Student Living Blog
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-charcoal tracking-tight">
                Helpful Guides & Articles
              </h1>
              <p className="font-sans text-xs sm:text-sm text-slate-gray font-semibold mt-2 max-w-2xl leading-relaxed">
                Explore original, high-quality student living guides, safety checklists, meal timings, and expert parenting advice crafted by our editorial team.
              </p>
            </div>

            {/* Search Bar Input (Elegant & Compact width) */}
            <div className="relative shrink-0 w-full md:w-72">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-3.5 rounded-[16px] border border-border-light bg-white focus:outline-hidden focus:border-[#0F8B8D] text-xs sm:text-sm font-semibold text-charcoal shadow-3xs transition-colors duration-200"
              />
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-gray" />
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-gray-100">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4.5 py-2.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase transition-all duration-300 transform cursor-pointer ${
                  isActive
                    ? 'bg-[#0F8B8D] text-white shadow-md ring-2 ring-[#0F8B8D]/20 scale-102 border border-[#0F8B8D]'
                    : 'bg-white text-slate-gray border border-border-light hover:border-slate-gray/30 hover:text-charcoal hover:shadow-2xs shadow-3xs'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Matching Articles Display with Animated Transition */}
        {isFiltering ? (
          renderSkeletons()
        ) : filteredPosts.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <motion.article
                  layout
                  variants={itemVariants}
                  key={post.id}
                  onClick={() => onNavigateToArticle(post.slug)}
                  className="group bg-white rounded-[24px] overflow-hidden border border-border-light shadow-2xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer h-full"
                >
                  <div className="flex flex-col flex-1">
                    {/* Featured Image cover (Preserves aspect ratio and prevents layout shifts) */}
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
                      {/* Category badge overlay */}
                      <span className="absolute top-4 left-4 bg-white text-charcoal font-display font-bold text-[9px] tracking-widest uppercase px-3 py-1.5 rounded-full shadow-2xs border border-gray-100">
                        {post.category}
                      </span>
                    </div>

                    {/* Article Body Content */}
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

                      {/* Precise clumping and heights prevent grid misalignment */}
                      <h3 className="font-display font-bold text-base sm:text-lg text-charcoal mb-2.5 leading-snug group-hover:text-[#0F8B8D] transition-colors duration-250 tracking-tight line-clamp-2 min-h-[2.75rem] sm:min-h-[3.25rem]">
                        {post.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-slate-gray leading-relaxed font-semibold line-clamp-3 min-h-[3.25rem] sm:min-h-[3.75rem]">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer Actions Box */}
                  <div className="flex flex-col">
                    {/* Button and Arrow strip */}
                    <div className="mx-6 pb-6 pt-5 border-t border-gray-50 flex items-center justify-between">
                      <span className="font-sans font-extrabold text-[10px] tracking-wider text-[#0F8B8D] uppercase group-hover:translate-x-0.5 transition-transform">
                        Read Article
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-charcoal group-hover:bg-[#0F8B8D] group-hover:text-white transition-colors duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-white border border-border-light rounded-[24px]">
            <Compass className="w-10 h-10 text-slate-gray mx-auto mb-3" />
            <p className="font-display font-extrabold text-base text-charcoal">No matching articles found</p>
            <p className="font-sans text-xs text-slate-gray mt-1 max-w-sm mx-auto font-semibold">Try searching for other terms or selecting a different category filter.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 text-xs font-bold text-[#0F8B8D] underline cursor-pointer"
            >
              Reset Filters & Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
