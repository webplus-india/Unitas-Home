/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  ChevronLeft, 
  MessageSquare, 
  Share2, 
  Copy, 
  Check, 
  Phone,
  Facebook,
  Linkedin,
  Twitter,
  ShieldCheck,
  User,
  ArrowRight,
  Tag,
  BookOpenText,
  BookmarkCheck
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../blogData';

interface BlogDetailProps {
  post: BlogPost;
  onBackToListing: () => void;
  onNavigateToArticle: (slug: string) => void;
  onNavigateToHomeSection: (sectionId: string) => void;
}

export default function BlogDetail({
  post,
  onBackToListing,
  onNavigateToArticle,
  onNavigateToHomeSection
}: BlogDetailProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setOpenFAQIndex(null); // Reset FAQ expansion
  }, [post]);

  // Active TOC Section Observer
  useEffect(() => {
    if (!post.tableOfContents || post.tableOfContents.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -40% 0px', // Activated when section enters the viewport
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    post.tableOfContents.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [post]);

  // SEO Metas, Canonicals and Structured Data Dynamic Head Injection
  useEffect(() => {
    // 1. Update Document Title
    document.title = `${post.title} | Student Living Blog | Unitas Home`;

    // Helper to get or create meta tags
    const getOrCreateMeta = (attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
      return element;
    };

    // 2. Meta description
    getOrCreateMeta('name', 'description', post.metaDescription);

    // 3. Canonical Link (Point to /blog/ instead of /resources/)
    const canonicalUrl = `${window.location.origin}/blog/${post.slug}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Open Graph Tags
    getOrCreateMeta('property', 'og:title', post.title);
    getOrCreateMeta('property', 'og:description', post.metaDescription);
    getOrCreateMeta('property', 'og:image', post.image);
    getOrCreateMeta('property', 'og:url', canonicalUrl);
    getOrCreateMeta('property', 'og:type', 'article');
    getOrCreateMeta('property', 'og:site_name', 'Unitas Home');

    // 5. Twitter Card Tags
    getOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    getOrCreateMeta('name', 'twitter:title', post.title);
    getOrCreateMeta('name', 'twitter:description', post.metaDescription);
    getOrCreateMeta('name', 'twitter:image', post.image);

    // 6. JSON-LD Structured Data (Article, Breadcrumb, FAQ)
    const structuredDataId = 'json-ld-structured-data-detail';
    let scriptTag = document.getElementById(structuredDataId) as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = structuredDataId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "headline": post.title,
      "image": [post.image],
      "datePublished": "2026-07-05T08:00:00+05:30",
      "dateModified": "2026-07-08T10:00:00+05:30",
      "author": {
        "@type": "Organization",
        "name": post.author,
        "url": window.location.origin
      },
      "publisher": {
        "@type": "Organization",
        "name": "Unitas Home",
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}/assets/logo.png`
        }
      },
      "description": post.metaDescription
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": window.location.origin
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": `${window.location.origin}/blog`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": canonicalUrl
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": post.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    scriptTag.text = JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]);

    return () => {
      if (scriptTag) scriptTag.remove();
    };
  }, [post]);

  const handleCopyLink = () => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

  const handleTOCClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 110; // Account for sticky menu header
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSectionId(id);
    }
  };

  const handleBodyClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    if (anchor) {
      const href = anchor.getAttribute('href');
      if (href) {
        if (href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const isTOC = post.tableOfContents?.some(item => item.id === targetId);
          if (isTOC) {
            handleTOCClick(e as any, targetId);
          } else {
            onNavigateToHomeSection(targetId);
          }
        }
      }
    }
  };

  // Get exactly 4 related articles (same category, or filled with others to prevent duplicates)
  const getRelatedArticles = (): BlogPost[] => {
    let related = BLOG_POSTS.filter(
      (p) => p.id !== post.id && p.category === post.category
    );
    if (related.length < 4) {
      const remaining = BLOG_POSTS.filter(
        (p) => p.id !== post.id && p.category !== post.category
      );
      related = [...related, ...remaining.slice(0, 4 - related.length)];
    }
    return related.slice(0, 4);
  };

  // Get Category counts for Sidebar filtration quick links
  const categoriesList = Array.from(new Set(BLOG_POSTS.map(p => p.category)));

  const getCategoryCount = (catName: string) => {
    return BLOG_POSTS.filter(p => p.category === catName).length;
  };

  // Find previous and next articles
  const currentIdx = BLOG_POSTS.findIndex((p) => p.id === post.id);
  const prevArticle = currentIdx > 0 ? BLOG_POSTS[currentIdx - 1] : null;
  const nextArticle = currentIdx < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIdx + 1] : null;

  return (
    <section className="pt-28 pb-24 bg-[#FAF9F6] relative min-h-screen overflow-hidden">
      {/* Background Visual Ambient Blur */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-primary/2 opacity-25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-[#2D6A4F]/2 opacity-25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumbs (SEO Compliant, Updated labels to 'Blog') */}
          <nav className="flex items-center space-x-2 text-[11px] sm:text-xs font-semibold text-slate-gray/80 mb-5">
            <button onClick={() => onNavigateToHomeSection('home')} className="hover:text-primary transition-colors cursor-pointer">Home</button>
            <span>/</span>
            <button onClick={onBackToListing} className="hover:text-primary transition-colors cursor-pointer">Blog</button>
            <span>/</span>
            <span className="text-charcoal/90 truncate max-w-[150px] sm:max-w-xs">{post.title}</span>
          </nav>

          {/* Back Navigation Button */}
          <button
            onClick={onBackToListing}
            className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-slate-gray hover:text-[#2D6A4F] mb-8 cursor-pointer group transition-colors focus:outline-hidden"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to All Articles</span>
          </button>

          {/* Title and Top E-E-A-T Author Card Grid (Desktop focused & clean) */}
          <div className="mb-8">
            <span className="inline-block text-[10px] font-extrabold text-[#2D6A4F] tracking-widest uppercase bg-[#2D6A4F]/5 px-3.5 py-1.5 rounded-full border border-[#2D6A4F]/15 mb-4">
              {post.category}
            </span>
            <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-charcoal leading-tight tracking-tight mb-6">
              {post.title}
            </h1>

            {/* Premium E-E-A-T Co-author & Reviewer Row */}
            <div className="bg-white border border-border-light rounded-2xl p-5 shadow-3xs flex flex-col md:flex-row md:items-center justify-between gap-4 font-sans text-xs">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center text-[#2D6A4F] font-bold border border-[#2D6A4F]/20">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-slate-gray font-bold text-[10px] uppercase tracking-wider">Written By</span>
                    <span className="text-charcoal font-extrabold">{post.author}</span>
                  </div>
                </div>

                <div className="hidden sm:block h-8 w-px bg-gray-100" />

                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold border border-emerald-100">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-slate-gray font-bold text-[10px] uppercase tracking-wider">Reviewed By</span>
                    <span className="text-charcoal font-extrabold text-emerald-700 flex items-center">
                      {post.reviewedBy}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-slate-gray border-t md:border-t-0 pt-3 md:pt-0 border-gray-100">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Updated: {post.lastUpdated}</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Grid Layout: Article Content (8 Cols) + Sticky Workspace Sidebar (4 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Full-length Article Content */}
            <div className="lg:col-span-8 bg-white rounded-[24px] border border-border-light p-5 sm:p-8 md:p-10 shadow-3xs">
              
              {/* Hero Banner Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] rounded-[24px] overflow-hidden mb-8 border border-border-light bg-gray-100 shadow-2xs">
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  title={post.imageAlt || post.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Inline Table of Contents for Mobile Viewports (Hidden on Desktop) */}
              {post.tableOfContents && post.tableOfContents.length > 0 && (
                <div className="lg:hidden bg-[#FAF9F6] border border-border-light rounded-[24px] p-5 mb-8">
                  <h4 className="font-display font-extrabold text-xs sm:text-sm text-charcoal tracking-wide uppercase mb-3 flex items-center space-x-1.5">
                    <BookOpen className="w-4 h-4 text-[#2D6A4F]" />
                    <span>Table of Contents</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm font-semibold">
                    {post.tableOfContents.map((item) => (
                      <li key={item.id} className="pl-3 border-l-2 border-primary-light text-slate-gray hover:text-primary">
                        <a href={`#${item.id}`} onClick={(e) => handleTOCClick(e, item.id)}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Core Rendered Content Block */}
              <div 
                onClick={handleBodyClick}
                className="font-sans text-sm sm:text-base text-charcoal/95 leading-relaxed max-w-none space-y-6"
              >
                {post.content}
              </div>

              {/* Mobile CTA (shown on mobile, hidden on desktop) */}
              <div className="lg:hidden mt-8 bg-neutral-50 border border-border-light rounded-[24px] p-6 shadow-3xs">
                <span className="text-[10px] font-extrabold text-[#2D6A4F] tracking-widest uppercase bg-[#2D6A4F]/5 px-2.5 py-1 rounded-md border border-[#2D6A4F]/10">
                  Secure Booking
                </span>
                <h3 className="font-display font-extrabold text-base text-charcoal mt-3 mb-2.5 leading-snug tracking-tight">
                  Relocating to Dehradun?
                </h3>
                <p className="font-sans text-xs text-slate-gray mb-5 leading-relaxed font-semibold">
                  Schedule a personalized on-site room tour or a live video walkthrough with our warden.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => onNavigateToHomeSection('contact')}
                    className="flex-1 bg-[#2D6A4F] hover:bg-[#0D7A7C] text-white font-sans font-extrabold text-xs py-3.5 rounded-[18px] shadow-2xs hover:shadow-xs transition-all duration-300 cursor-pointer text-center block"
                  >
                    Schedule Room Tour
                  </button>
                  <a 
                    href="https://wa.me/919675591951?text=Hi%20Unitas%20Home%2C%20I%20would%20like%20to%20schedule%20a%20live%20walkthrough%20of%20the%20property."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white hover:bg-emerald-50 text-emerald-600 border border-emerald-500/30 font-sans font-extrabold text-xs py-3.5 rounded-[18px] transition-all duration-300 cursor-pointer flex items-center justify-center space-x-1.5 shadow-3xs"
                    aria-label="Request a WhatsApp Video Tour"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-emerald-600" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp Video Tour</span>
                  </a>
                </div>
              </div>

              {/* Premium FAQ Visual Accordion Section */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-14 pt-10 border-t border-gray-100">
                  <div className="flex items-center space-x-2.5 mb-6">
                    <BookmarkCheck className="w-5 h-5 text-[#2D6A4F]" />
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-charcoal tracking-tight">
                      Guides & FAQ Registry
                    </h3>
                  </div>
                  <div className="space-y-3.5">
                    {post.faqs.map((faq, idx) => {
                      const isOpen = openFAQIndex === idx;
                      return (
                        <div 
                          key={idx} 
                          className={`border rounded-[24px] transition-all duration-300 ${
                            isOpen 
                              ? 'border-[#2D6A4F] bg-[#2D6A4F]/2 shadow-3xs' 
                              : 'border-border-light bg-[#FAF9F6] hover:bg-white'
                          }`}
                        >
                          <button
                            onClick={() => setOpenFAQIndex(isOpen ? null : idx)}
                            className="w-full text-left p-4.5 flex items-center justify-between font-display font-bold text-xs sm:text-sm text-charcoal cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <span className={`text-[#2D6A4F] transition-transform duration-300 text-base font-extrabold ${isOpen ? 'rotate-180' : ''}`}>
                              ▾
                            </span>
                          </button>
                          
                          {isOpen && (
                            <div className="px-4.5 pb-4.5 pt-1 text-xs sm:text-sm text-slate-gray leading-relaxed font-semibold border-t border-gray-100/50">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Social Share Controls & Copy Link */}
              <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs font-bold text-slate-gray flex items-center space-x-1.5 font-sans">
                  <Share2 className="w-4 h-4 text-slate-gray" />
                  <span>Share this editorial guide:</span>
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center space-x-1 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-charcoal text-xs font-extrabold px-3.5 py-1.5 rounded-full cursor-pointer transition-colors"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Copied URL' : 'Copy Link'}</span>
                  </button>
                  
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - Read here: ${window.location.origin}/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20C45A] text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 cursor-pointer transition-all duration-300 shadow-3xs"
                    aria-label="Share on WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white text-white" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${window.location.origin}/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-black hover:bg-neutral-800 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 cursor-pointer transition-all duration-300 shadow-3xs"
                  >
                    <Twitter className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>X</span>
                  </a>

                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${window.location.origin}/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#1877F2] hover:bg-[#1565C0] text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 cursor-pointer transition-all duration-300 shadow-3xs"
                  >
                    <Facebook className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Facebook</span>
                  </a>

                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${window.location.origin}/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 cursor-pointer transition-all duration-300 shadow-3xs"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Internal Quick Navigation Footnote */}
              <div className="bg-neutral-50 rounded-[24px] p-4.5 mt-8 text-[11px] sm:text-xs text-slate-gray font-semibold flex flex-wrap gap-x-4 gap-y-2 justify-center border border-border-light">
                <span>Quick Navigation Links:</span>
                <button onClick={() => onNavigateToHomeSection('rooms')} className="text-primary hover:underline cursor-pointer">Rooms</button>
                <span>•</span>
                <button onClick={() => onNavigateToHomeSection('amenities')} className="text-primary hover:underline cursor-pointer">Amenities</button>
                <span>•</span>
                <button onClick={() => onNavigateToHomeSection('gallery')} className="text-primary hover:underline cursor-pointer">Gallery</button>
                <span>•</span>
                <button onClick={() => onNavigateToHomeSection('faq')} className="text-primary hover:underline cursor-pointer">FAQ Center</button>
                <span>•</span>
                <button onClick={() => onNavigateToHomeSection('contact')} className="text-primary hover:underline cursor-pointer">Book a Visit</button>
              </div>

              {/* Prev / Next Article Bar */}
              <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between gap-6 font-sans">
                {prevArticle ? (
                  <button
                    onClick={() => onNavigateToArticle(prevArticle.slug)}
                    className="text-left group flex flex-col max-w-xs focus:outline-hidden cursor-pointer"
                  >
                    <span className="text-[10px] font-extrabold text-slate-gray tracking-widest uppercase mb-1">← Previous Article</span>
                    <span className="text-xs sm:text-sm font-display font-extrabold text-charcoal group-hover:text-[#2D6A4F] transition-colors line-clamp-1">{prevArticle.title}</span>
                  </button>
                ) : <div className="hidden sm:block" />}

                {nextArticle ? (
                  <button
                    onClick={() => onNavigateToArticle(nextArticle.slug)}
                    className="text-right group flex flex-col items-end max-w-xs focus:outline-hidden cursor-pointer"
                  >
                    <span className="text-[10px] font-extrabold text-slate-gray tracking-widest uppercase mb-1">Next Article →</span>
                    <span className="text-xs sm:text-sm font-display font-extrabold text-charcoal group-hover:text-[#2D6A4F] transition-colors line-clamp-1">{nextArticle.title}</span>
                  </button>
                ) : <div className="hidden sm:block" />}
              </div>

              {/* Bottom Brand Conversion Footer */}
              <div className="mt-12 pt-8 border-t border-border-light text-center max-w-2xl mx-auto">
                <span className="text-[10px] font-extrabold text-[#2D6A4F] tracking-widest uppercase">
                  Co-Living Reservation Desk
                </span>
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-charcoal mt-2 mb-3 tracking-tight">
                  Still looking for a premium PG in Dehradun?
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-gray mb-6 leading-relaxed font-semibold">
                  Unitas Home offers Dehradun's finest luxury student & working professional rooms, incorporating gourmet nutrition, top-tier security, and chore-free living.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-2.5">
                  {/* Primary CTA */}
                  <button
                    onClick={() => onNavigateToHomeSection('contact')}
                    className="bg-[#2D6A4F] hover:bg-[#0D7A7C] text-white font-sans font-extrabold text-xs px-6 py-3.5 rounded-[18px] shadow-2xs hover:shadow-xs transition-all duration-300 cursor-pointer"
                  >
                    Schedule a Visit
                  </button>

                  {/* Secondary CTA */}
                  <a
                    href="https://wa.me/919675591951?text=Hi%20Unitas%20Home%2C%20I%20just%20read%20your%20expert%20article%20on%20your%20blog%20and%20want%20to%20book%20a%20visit."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1.5 bg-white hover:bg-emerald-50 text-emerald-600 border border-emerald-500/30 font-sans font-extrabold text-xs px-6 py-3.5 rounded-[18px] transition-all duration-300 cursor-pointer shadow-3xs"
                    aria-label="Chat with us on WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-emerald-600" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </a>

                  {/* Tertiary CTA */}
                  <a
                    href="tel:+919675591951"
                    className="inline-flex items-center justify-center space-x-1.5 border border-neutral-200 bg-white hover:bg-neutral-50 text-charcoal font-sans font-extrabold text-xs px-6 py-3.5 rounded-[18px] transition-all duration-300 cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-gray" />
                    <span>Call Helpline</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Premium Sticky Sidebar (TOC, Reservation Box, 4 Related, Categories) */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 pb-12">
              
              {/* 1. Table of Contents in Sticky Sidebar (Desktop Only) */}
              {post.tableOfContents && post.tableOfContents.length > 0 && (
                <div className="hidden lg:block bg-white border border-border-light rounded-[24px] p-6 shadow-3xs">
                  <h4 className="font-display font-extrabold text-xs text-charcoal tracking-wider uppercase mb-4 flex items-center space-x-1.5 border-b border-gray-100 pb-3">
                    <BookOpenText className="w-4 h-4 text-[#2D6A4F]" />
                    <span>In This Article</span>
                  </h4>
                  <ul className="space-y-3 text-xs font-semibold">
                    {post.tableOfContents.map((item) => {
                      const isActive = activeSectionId === item.id;
                      return (
                        <li 
                          key={item.id} 
                          className={`transition-all duration-300 pl-3.5 border-l-2 ${
                            isActive 
                              ? 'border-[#2D6A4F] text-[#2D6A4F] translate-x-1 font-bold' 
                              : 'border-transparent text-slate-gray hover:text-charcoal'
                          }`}
                        >
                          <a 
                            href={`#${item.id}`} 
                            onClick={(e) => handleTOCClick(e, item.id)}
                            className="block"
                          >
                            {item.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* 2. Sticky Reservation CTA Box */}
              <div className="hidden lg:block bg-white border border-border-light rounded-[24px] p-6 shadow-3xs">
                <span className="text-[10px] font-extrabold text-[#2D6A4F] tracking-widest uppercase bg-[#2D6A4F]/5 px-2.5 py-1 rounded-md border border-[#2D6A4F]/10">
                  Secure Booking
                </span>
                <h3 className="font-display font-extrabold text-base text-charcoal mt-3 mb-2.5 leading-snug tracking-tight">
                  Relocating to Dehradun?
                </h3>
                <p className="font-sans text-xs text-slate-gray mb-5 leading-relaxed font-semibold">
                  Schedule a personalized on-site room tour or a live video walkthrough with our warden.
                </p>
                <div className="space-y-3">
                  <button 
                    onClick={() => onNavigateToHomeSection('contact')}
                    className="w-full bg-[#2D6A4F] hover:bg-[#0D7A7C] text-white font-sans font-extrabold text-xs py-3 rounded-[18px] shadow-2xs hover:shadow-xs transition-all duration-300 cursor-pointer text-center block"
                  >
                    Schedule Room Tour
                  </button>
                  <a 
                    href="https://wa.me/919675591951?text=Hi%20Unitas%20Home%2C%20I%20would%20like%20to%20schedule%20a%20live%20walkthrough%20of%20the%20property."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white hover:bg-emerald-50 text-emerald-600 border border-emerald-500/30 font-sans font-extrabold text-xs py-3 rounded-[18px] transition-all duration-300 cursor-pointer flex items-center justify-center space-x-1.5 shadow-3xs"
                    aria-label="Request a WhatsApp Video Tour"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-emerald-600" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp Video Tour</span>
                  </a>
                </div>

                {/* E-E-A-T trust signals */}
                <div className="mt-5 pt-4 border-t border-neutral-100 space-y-2.5 font-sans text-[11px] font-semibold text-slate-gray">
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Trusted by 150+ Parents & Interns</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Response Time &lt; 10 Minutes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Transparent Legal Leases & Refund</span>
                  </div>
                </div>
              </div>

              {/* 3. Related Articles Section (Strictly 4 as requested) */}
              <div className="bg-white border border-border-light rounded-[24px] p-6 shadow-3xs">
                <h4 className="font-display font-extrabold text-xs text-charcoal tracking-wider uppercase mb-4 border-b border-gray-100 pb-3 flex items-center space-x-1.5">
                  <Tag className="w-4 h-4 text-[#2D6A4F]" />
                  <span>Popular Articles</span>
                </h4>
                <div className="space-y-4">
                  {getRelatedArticles().map((relatedPost) => (
                    <div 
                      key={relatedPost.id} 
                      onClick={() => onNavigateToArticle(relatedPost.slug)}
                      className="flex items-center space-x-3 group cursor-pointer"
                    >
                      <div className="w-14 h-14 rounded-[16px] overflow-hidden border border-border-light shrink-0 relative aspect-square bg-gray-50">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.imageAlt || relatedPost.title} 
                          title={relatedPost.imageAlt || relatedPost.title} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="min-w-0 flex-grow">
                        <span className="text-[9px] font-extrabold text-[#2D6A4F] uppercase tracking-wide block">
                          {relatedPost.category}
                        </span>
                        <h5 className="font-display font-bold text-xs text-charcoal group-hover:text-[#2D6A4F] transition-colors leading-snug line-clamp-2">
                          {relatedPost.title}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Quick Category Filters list with counters */}
              <div className="bg-white border border-border-light rounded-[24px] p-6 shadow-3xs">
                <h4 className="font-display font-extrabold text-xs text-charcoal tracking-wider uppercase mb-3 border-b border-gray-100 pb-3">
                  Browse by Category
                </h4>
                <div className="space-y-2.5 text-xs font-semibold">
                  {categoriesList.map((cat) => (
                    <button
                      key={cat}
                      onClick={onBackToListing}
                      className="w-full flex items-center justify-between text-slate-gray hover:text-primary transition-colors cursor-pointer text-left"
                    >
                      <span>{cat}</span>
                      <span className="bg-gray-100 text-charcoal text-[10px] px-2 py-0.5 rounded-full font-bold">
                        {getCategoryCount(cat)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
