/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyUnitas from './components/WhyUnitas';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BlogPreview from './components/BlogPreview';
import BlogListing from './components/BlogListing';
import BlogDetail from './components/BlogDetail';
import Contact from './components/Contact';
import SchedulerDashboard from './components/SchedulerDashboard';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import MobileBottomBar from './components/MobileBottomBar';
import RulesRegulations from './components/RulesRegulations';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { Inquiry, Room } from './types';
import { BLOG_POSTS } from './blogData';
import { FAQS_DATA } from './data';
import { BookVisitModal, ReserveRoomModal } from './components/BookingModals';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showDashboard, setShowDashboard] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  // Modals state management
  const [isBookVisitOpen, setIsBookVisitOpen] = useState(false);
  const [isReserveRoomOpen, setIsReserveRoomOpen] = useState(false);
  const [contactActiveTab, setContactActiveTab] = useState<'Inquiry' | 'Schedule Visit' | 'Reserve Room'>('Inquiry');
  
  // Manage inquiries locally, with local storage fallback
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  // Track popstate to support browser navigation (back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      setShowDashboard(false);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    setShowDashboard(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic SEO Page Title, Meta Description, Canonical, OG and Twitter Tag Updates
  useEffect(() => {
    let title = 'Unitas Home | Premium PG for Students & Working Professionals in Dehradun';
    let description = 'Experience premium PG in Dehradun with fully furnished rooms, homestyle meals, high-speed Wi-Fi, 24×7 security, zero brokerage, and flexible room options.';
    let imageUrl = 'https://unitashome.in/og-image.jpg?v=3';
    const baseUrl = 'https://unitashome.in';
    let urlPath = currentPath;

    if (showDashboard) {
      title = 'My Virtual Walkthrough Pass | Unitas Home Dashboard';
      description = 'View and manage your active virtual walkthrough passes, booking applications, and schedule of visits for Unitas Home in Dehradun.';
    } else if (currentPath === '/blog') {
      title = 'Student Living Blog | Unitas Home Dehradun';
      description = 'Explore original, high-quality living guides, security checklists, food reviews, and budget advice for students and professionals in Dehradun.';
    } else if (currentPath === '/privacy-policy') {
      title = 'Privacy Policy | Unitas Home';
      description = 'Learn how Unitas Home collects, stores, protects, and uses your personal information when you browse our website, book a visit, reserve a room, or contact our team.';
    } else if (currentPath === '/terms-of-service') {
      title = 'Terms of Service | Unitas Home';
      description = 'Read the official Terms of Service governing the use of the Unitas Home website, booking requests, and related services.';
    } else if (currentPath === '/rules-regulations') {
      title = 'Rules & Regulations | Resident Handbook - Unitas Home';
      description = 'Read our Resident Handbook containing co-living guidelines, house rules, and community guidelines for Unitas Home residents in Dehradun.';
    } else if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.substring('/blog/'.length);
      const post = BLOG_POSTS.find(p => p.slug === slug);
      if (post) {
        title = `${post.title} | Unitas Home Blog`;
        description = post.metaDescription;
        imageUrl = post.image || imageUrl;
      }
    }

    // Set page title
    document.title = title;

    // Helper function to update/create meta tag
    const updateMeta = (name: string, value: string, isProperty: boolean = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) {
          el.setAttribute('property', name);
        } else {
          el.setAttribute('name', name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // Update standard tags
    updateMeta('description', description);
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${baseUrl}${urlPath === '/' ? '' : urlPath}`);

    // Determine custom image alt text (blog posts use their own alt, default uses building description)
    let imageAlt = 'Unitas Home – Premium PG for Students & Working Professionals in Dehradun';
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.substring('/blog/'.length);
      const post = BLOG_POSTS.find(p => p.slug === slug);
      if (post && post.imageAlt) {
        imageAlt = post.imageAlt;
      }
    }

    // Update Open Graph tags
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:url', `${baseUrl}${urlPath === '/' ? '' : urlPath}`, true);
    updateMeta('og:image', imageUrl, true);
    updateMeta('og:image:secure_url', imageUrl, true);
    updateMeta('og:image:width', '1200', true);
    updateMeta('og:image:height', '630', true);
    updateMeta('og:image:type', (imageUrl.includes('.webp') || imageUrl.split('?')[0].endsWith('.webp')) ? 'image/webp' : 'image/jpeg', true);
    updateMeta('og:image:alt', imageAlt, true);

    // Update Twitter Card tags
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', imageUrl);

    // ==========================================
    // Dynamic Structured Data (JSON-LD)
    // ==========================================
    const updateJsonLd = (id: string, data: any) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('id', id);
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    const removeJsonLd = (id: string) => {
      const script = document.getElementById(id);
      if (script) {
        script.remove();
      }
    };

    // 1. Dynamic Breadcrumb Schema
    let activePostTitle = '';
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.substring('/blog/'.length);
      const post = BLOG_POSTS.find(p => p.slug === slug);
      if (post) activePostTitle = post.title;
    }

    const breadcrumbList = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://unitashome.in"
      }
    ];
    
    if (currentPath === '/blog') {
      breadcrumbList.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Student Living Blog",
        "item": "https://unitashome.in/blog"
      });
    } else if (currentPath.startsWith('/blog/')) {
      breadcrumbList.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Student Living Blog",
        "item": "https://unitashome.in/blog"
      });
      breadcrumbList.push({
        "@type": "ListItem",
        "position": 3,
        "name": activePostTitle || "Blog Article",
        "item": `https://unitashome.in${currentPath}`
      });
    } else if (currentPath === '/privacy-policy') {
      breadcrumbList.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": "https://unitashome.in/privacy-policy"
      });
    } else if (currentPath === '/terms-of-service') {
      breadcrumbList.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Terms of Service",
        "item": "https://unitashome.in/terms-of-service"
      });
    } else if (currentPath === '/rules-regulations') {
      breadcrumbList.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Rules & Regulations",
        "item": "https://unitashome.in/rules-regulations"
      });
    }

    updateJsonLd('breadcrumb-schema', {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbList
    });

    // 2. FAQ Schema (where applicable)
    if (currentPath === '/' && !showDashboard) {
      updateJsonLd('faq-schema', {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS_DATA.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      });
      removeJsonLd('blog-faq-schema');
    } else if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.substring('/blog/'.length);
      const post = BLOG_POSTS.find(p => p.slug === slug);
      if (post && post.faqs && post.faqs.length > 0) {
        updateJsonLd('blog-faq-schema', {
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
        });
      } else {
        removeJsonLd('blog-faq-schema');
      }
      removeJsonLd('faq-schema');
    } else {
      removeJsonLd('faq-schema');
      removeJsonLd('blog-faq-schema');
    }

    // 3. BlogPosting Schema (for blog articles)
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.substring('/blog/'.length);
      const post = BLOG_POSTS.find(p => p.slug === slug);
      if (post) {
        const parseBlogDate = (dateStr: string) => {
          try {
            const date = new Date(dateStr);
            if (!isNaN(date.getTime())) {
              return date.toISOString().split('T')[0];
            }
          } catch (e) {}
          return "2026-07-12";
        };

        updateJsonLd('blog-posting-schema', {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.metaDescription,
          "image": post.image,
          "datePublished": parseBlogDate(post.date),
          "dateModified": parseBlogDate(post.lastUpdated || post.date),
          "author": {
            "@type": "Organization",
            "name": post.author || "Unitas Home Editorial Team",
            "url": "https://unitashome.in"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Unitas Home",
            "logo": {
              "@type": "ImageObject",
              "url": "https://unitashome.in/apple-touch-icon.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://unitashome.in/blog/${post.slug}`
          }
        });
      } else {
        removeJsonLd('blog-posting-schema');
      }
    } else {
      removeJsonLd('blog-posting-schema');
    }

  }, [currentPath, showDashboard]);

  // Pre-seed a beautiful default pass so the dashboard isn't empty on first glance!
  useEffect(() => {
    const stored = localStorage.getItem('unitas_inquiries');
    if (stored) {
      try {
        setInquiries(JSON.parse(stored));
      } catch (e) {
        console.error('Error parsing stored inquiries', e);
      }
    } else {
      const defaultPasses: Inquiry[] = [
        {
          id: 'UT-7052',
          name: 'Aditya Kumar',
          phone: '+91 96755 91951',
          email: 'in.adityakumarr@gmail.com',
          roomType: 'single-sharing',
          moveInDate: '2026-07-15',
          message: 'Looking for a quiet room close to Mahant Indresh Hospital, pre-wired with high-speed Wi-Fi.',
          status: 'Confirmed',
          type: 'Schedule Visit',
          timestamp: new Date().toLocaleDateString()
        }
      ];
      setInquiries(defaultPasses);
      localStorage.setItem('unitas_inquiries', JSON.stringify(defaultPasses));
    }
  }, []);

  // Update intersection observers to highlight nav item on scroll
  useEffect(() => {
    if (showDashboard || (currentPath !== '/' && currentPath !== '/index.html')) return;

    const sections = ['home', 'why-unitas', 'rooms', 'amenities', 'gallery', 'reviews', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Find all intersecting sections
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // If multiple are visible, pick the one with the highest intersection ratio
          const primaryEntry = visibleEntries.reduce((prev, curr) => 
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          setActiveSection(primaryEntry.target.id);
        }
      },
      { 
        rootMargin: '-10% 0px -45% 0px',
        threshold: [0.05, 0.2, 0.4, 0.6, 0.8, 1.0] 
      }
    );

    sections.forEach((secId) => {
      const el = document.getElementById(secId);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [showDashboard, currentPath]);

  const handleNavigate = (sectionId: string) => {
    setShowDashboard(false);
    
    if (sectionId === 'blog') {
      navigateTo('/blog');
      return;
    }

    if (sectionId === 'rules' || sectionId === 'rules-regulations') {
      navigateTo('/rules-regulations');
      return;
    }

    if (sectionId === 'privacy' || sectionId === 'privacy-policy') {
      navigateTo('/privacy-policy');
      return;
    }

    if (sectionId === 'terms' || sectionId === 'terms-of-service') {
      navigateTo('/terms-of-service');
      return;
    }

    if (sectionId === 'contact') {
      setContactActiveTab('Inquiry');
    }
    
    // If we are not on the homepage, navigate to homepage first
    if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
      window.history.pushState({}, '', '/');
      setCurrentPath('/');
      
      setTimeout(() => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      setActiveSection(sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleSelectRoomForBooking = (room: Room) => {
    setSelectedRoomId(room.id);
    setIsBookVisitOpen(true);
  };

  const handleSelectRoomForReserve = (room: Room) => {
    setSelectedRoomId(room.id);
    setIsReserveRoomOpen(true);
  };

  const handleToggleDashboard = () => {
    setShowDashboard((prev) => !prev);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddInquiryFromModal = (newInq: Omit<Inquiry, 'id' | 'timestamp' | 'status'>) => {
    const fullInq: Inquiry = {
      ...newInq,
      id: `UT-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'Confirmed',
      timestamp: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updated = [fullInq, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('unitas_inquiries', JSON.stringify(updated));
  };

  const handleAddInquiry = (newInq: Omit<Inquiry, 'id' | 'timestamp' | 'status'>) => {
    const fullInq: Inquiry = {
      ...newInq,
      id: `UT-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'Confirmed', // Instantly confirm the ticket for high satisfaction/interactivity!
      timestamp: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updated = [fullInq, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('unitas_inquiries', JSON.stringify(updated));

    // Redirect to dashboard so they can print/view their newly created pass instantly!
    setTimeout(() => {
      setShowDashboard(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const handleCancelInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    setInquiries(updated);
    localStorage.setItem('unitas_inquiries', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-bg-warm flex flex-col justify-between relative selection:bg-primary/20 selection:text-primary-dark">
      
      {/* Header component */}
      <Header
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookVisitOpen(true)}
        onToggleDashboard={handleToggleDashboard}
        showDashboard={showDashboard}
        activeSection={activeSection}
      />

      {/* Main Page Area */}
      <main className="flex-grow">
        {showDashboard ? (
          <SchedulerDashboard
            inquiries={inquiries}
            onCancelInquiry={handleCancelInquiry}
          />
        ) : currentPath === '/rules-regulations' ? (
          <RulesRegulations
            onBookVisit={() => setIsBookVisitOpen(true)}
            onNavigateToHome={() => navigateTo('/')}
          />
        ) : currentPath === '/privacy-policy' ? (
          <PrivacyPolicy
            onBookVisit={() => setIsBookVisitOpen(true)}
            onNavigateToHome={() => navigateTo('/')}
          />
        ) : currentPath === '/terms-of-service' ? (
          <TermsOfService
            onBookVisit={() => setIsBookVisitOpen(true)}
            onNavigateToHome={() => navigateTo('/')}
          />
        ) : currentPath === '/blog' ? (
          <BlogListing
            onNavigateToHome={() => navigateTo('/')}
            onNavigateToArticle={(slug) => navigateTo('/blog/' + slug)}
          />
        ) : currentPath.startsWith('/blog/') ? (
          (() => {
            const slug = currentPath.substring('/blog/'.length);
            const post = BLOG_POSTS.find((p) => p.slug === slug);
            if (post) {
              return (
                <BlogDetail
                  post={post}
                  onBackToListing={() => navigateTo('/blog')}
                  onNavigateToArticle={(slug) => navigateTo('/blog/' + slug)}
                  onNavigateToHomeSection={handleNavigate}
                />
              );
            } else {
              // Fallback to resources if post not found
              setTimeout(() => navigateTo('/blog'), 0);
              return null;
            }
          })()
        ) : (
          <>
            {/* Immersive Hero Header */}
            <Hero
              onBookVisit={() => setIsBookVisitOpen(true)}
              onNavigate={handleNavigate}
            />

            {/* Dynamic Counters and Stats */}
            <Stats />

            {/* Why Unitas Section */}
            <WhyUnitas
              onNavigate={handleNavigate}
              onBookVisit={() => setIsBookVisitOpen(true)}
            />

            {/* Premium Room Showcase */}
            <Rooms 
              onSelectRoom={handleSelectRoomForBooking} 
              onReserveRoom={handleSelectRoomForReserve}
            />

            {/* Categorized Amenities */}
            <Amenities
              onNavigate={handleNavigate}
              onBookVisit={() => setIsBookVisitOpen(true)}
            />

            {/* Luxury Masonry Lightbox Gallery */}
            <Gallery onBookVisit={() => setIsBookVisitOpen(true)} />

            {/* Perfectly Located Map section */}
            <Location />

            {/* Authenticated Resident Testimonials */}
            <Testimonials />

            {/* Smooth FAQs accordion */}
            <FAQ />

            {/* Unitas Journal & Blog */}
            <BlogPreview
              onNavigateToResources={() => navigateTo('/blog')}
              onNavigateToArticle={(slug) => navigateTo('/blog/' + slug)}
            />

            {/* Double Column Reservation Inquiry Form */}
            <Contact
              initialRoomId={selectedRoomId}
              onSubmitInquiry={handleAddInquiry}
              activeTab={contactActiveTab}
              onTabChange={(tab) => setContactActiveTab(tab)}
            />
          </>
        )}
      </main>

      {/* Floating Action Shortcuts */}
      <FloatingActions />

      {/* Sticky Bottom Action Bar for Mobile */}
      <MobileBottomBar onBookVisit={() => setIsBookVisitOpen(true)} />

      {/* Styled Scandinavian Brand Footer */}
      <Footer
        onNavigate={handleNavigate}
        onToggleDashboard={handleToggleDashboard}
        showDashboard={showDashboard}
        onBookVisit={() => setIsBookVisitOpen(true)}
      />

      {/* Reusable Booking and Reservation Modals */}
      <AnimatePresence>
        {isBookVisitOpen && (
          <BookVisitModal
            isOpen={isBookVisitOpen}
            onClose={() => setIsBookVisitOpen(false)}
            onSubmit={handleAddInquiryFromModal}
            onExploreRooms={() => handleNavigate('rooms')}
          />
        )}
        {isReserveRoomOpen && (
          <ReserveRoomModal
            isOpen={isReserveRoomOpen}
            onClose={() => setIsReserveRoomOpen(false)}
            onSubmit={handleAddInquiryFromModal}
            initialRoomId={selectedRoomId}
            onBookVisit={() => {
              setIsReserveRoomOpen(false);
              setIsBookVisitOpen(true);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
