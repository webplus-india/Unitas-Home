import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

// Polyfills for ES modules if needed
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_POSTS_METADATA = [
  {
    slug: 'choose-right-pg-near-college-dehradun',
    title: 'How to Choose the Right PG Near Your College in Dehradun',
    description: 'Find the ultimate guide to selecting the best paying guest (PG) accommodation near major colleges in Dehradun. Discover key tips on security, meal plans, and student amenities.'
  },
  {
    slug: 'things-student-check-before-renting-pg-dehradun',
    title: '10 Things Every Student Should Check Before Renting a PG',
    description: 'Read the complete checklist of 10 essential things to verify before renting a Paying Guest (PG) accommodation in Dehradun. Prevent hidden costs and bad food.'
  },
  {
    slug: 'pg-vs-hostel-better-for-students-dehradun',
    title: 'PG vs Hostel: Which is Better for Students?',
    description: 'Objective comparison between college hostels and premium paying guest (PG) accommodations in Dehradun. Compare privacy, study facilities, meal quality, and rules.'
  },
  {
    slug: 'hostel-living-tips-first-year-students-dehradun',
    title: 'Hostel Living Tips for First-Year Students',
    description: 'Discover the top hostel living tips for first-year college students in Dehradun. Learn how to adapt to shared spaces, manage study schedules, and stay healthy.'
  },
  {
    slug: 'balance-studies-and-pg-life-successfully',
    title: 'How to Balance Studies and PG Life Successfully',
    description: 'Get expert advice on balancing college studies, social activities, and paying guest (PG) life in Dehradun. Master time management and maximize focus.'
  },
  {
    slug: 'what-every-parent-should-check-before-choosing-pg-dehradun',
    title: 'What Every Parent Should Check Before Choosing a PG',
    description: 'A comprehensive parent guide on what to check before finalizing a Paying Guest (PG) or student hostel in Dehradun. Ensure safety, fresh food, and comfort.'
  },
  {
    slug: 'essential-safety-features-student-pg-should-have-dehradun',
    title: 'Essential Safety Features Every Student PG Should Have',
    description: 'Discover the absolute must-have security and safety features for student PG accommodations. Learn about biometric locks, CCTV, fire safety, and guard logs.'
  },
  {
    slug: 'safe-girls-pg-dehradun',
    title: 'How to Find a Safe Girls PG in Dehradun',
    description: 'Find the best tips and features to look for when choosing a secure girls PG or hostel in Dehradun. Learn about biometric access, wardens, and location safety.'
  },
  {
    slug: 'best-pg-options-working-professionals-dehradun',
    title: 'Best PG Options for Working Professionals in Dehradun',
    description: 'Discover the top features that working professionals and medical interns should expect in a premium co-living PG in Dehradun. Learn about high-speed internet, power backup, and quiet environments.'
  },
  {
    slug: 'perfect-pg-for-night-shifts-hybrid-jobs-dehradun',
    title: 'How to Choose the Perfect PG if You Work Night Shifts or Hybrid Jobs',
    description: 'Find the ultimate PG guide for night shift employees and hybrid workers in Dehradun. Learn how to verify gate policies, quiet study hours, and meal flexibility.'
  }
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  // 1. Health check route
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Setup Vite dev server or static middleware
  let vite: any;
  if (process.env.NODE_ENV !== 'production') {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files from dist directory
    app.use(express.static(path.join(process.cwd(), 'dist'), { index: false }));
  }

  // Helper to determine SEO metadata for current path
  const getMetaForPath = (pathname: string, origin: string) => {
    // Default Home Page Metadata
    let title = 'Unitas Home | Premium PG for Students & Working Professionals in Dehradun';
    let description = 'Experience premium student & working professional PG in Dehradun with fully furnished rooms, homestyle meals, high-speed Wi-Fi, 24×7 security, zero brokerage, and flexible room options.';
    let image = `${origin}/og-image.jpg?v=3`;
    let imageAlt = 'Unitas Home – Premium PG for Students & Working Professionals in Dehradun';
    const canonical = `${origin}${pathname === '/' ? '' : pathname}`;

    if (pathname === '/blog') {
      title = 'Student Living Blog | Unitas Home Dehradun';
      description = 'Explore original, high-quality living guides, security checklists, food reviews, and budget advice for students and professionals in Dehradun.';
    } else if (pathname === '/privacy-policy') {
      title = 'Privacy Policy | Unitas Home';
      description = 'Learn how Unitas Home collects, stores, protects, and uses your personal information when you browse our website, book a visit, reserve a room, or contact our team.';
    } else if (pathname === '/terms-of-service') {
      title = 'Terms of Service | Unitas Home';
      description = 'Read the official Terms of Service governing the use of the Unitas Home website, booking requests, and related services.';
    } else if (pathname === '/rules-regulations') {
      title = 'Rules & Regulations | Resident Handbook - Unitas Home';
      description = 'Read our Resident Handbook containing co-living guidelines, house rules, and community guidelines for Unitas Home residents in Dehradun.';
    } else if (pathname.startsWith('/blog/')) {
      const slug = pathname.substring('/blog/'.length).split('?')[0];
      const post = BLOG_POSTS_METADATA.find(p => p.slug === slug);
      if (post) {
        title = `${post.title} | Unitas Home Blog`;
        description = post.description;
      }
    }

    return { title, description, image, imageAlt, url: canonical, origin };
  };

  // Helper to perform meta tags replacement inside the HTML
  const replaceMetaTags = (html: string, meta: ReturnType<typeof getMetaForPath>) => {
    let replaced = html;

    // Replace Title
    replaced = replaced.replace(/<title>.*?<\/title>/gi, `<title>${meta.title}</title>`);

    // Replace meta description
    replaced = replaced.replace(/<meta name="description" content=".*?"\s*\/?>/gi, `<meta name="description" content="${meta.description}" />`);

    // Replace og:title
    replaced = replaced.replace(/<meta property="og:title" content=".*?"\s*\/?>/gi, `<meta property="og:title" content="${meta.title}" />`);

    // Replace og:description
    replaced = replaced.replace(/<meta property="og:description" content=".*?"\s*\/?>/gi, `<meta property="og:description" content="${meta.description}" />`);

    // Replace og:url
    replaced = replaced.replace(/<meta property="og:url" content=".*?"\s*\/?>/gi, `<meta property="og:url" content="${meta.url}" />`);

    // Replace og:image
    replaced = replaced.replace(/<meta property="og:image" content=".*?"\s*\/?>/gi, `<meta property="og:image" content="${meta.image}" />`);

    // Replace og:image:secure_url
    replaced = replaced.replace(/<meta property="og:image:secure_url" content=".*?"\s*\/?>/gi, `<meta property="og:image:secure_url" content="${meta.image}" />`);

    // Replace og:image:alt
    replaced = replaced.replace(/<meta property="og:image:alt" content=".*?"\s*\/?>/gi, `<meta property="og:image:alt" content="${meta.imageAlt}" />`);

    // Replace twitter:title
    replaced = replaced.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/gi, `<meta name="twitter:title" content="${meta.title}" />`);

    // Replace twitter:description
    replaced = replaced.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/gi, `<meta name="twitter:description" content="${meta.description}" />`);

    // Replace twitter:image
    replaced = replaced.replace(/<meta name="twitter:image" content=".*?"\s*\/?>/gi, `<meta name="twitter:image" content="${meta.image}" />`);

    // Replace link canonical
    replaced = replaced.replace(/<link rel="canonical" href=".*?"\s*\/?>/gi, `<link rel="canonical" href="${meta.url}" />`);

    // Rewrite base domain occurrences inside json-ld structures as well
    replaced = replaced.replace(/https:\/\/unitashome\.in/g, meta.origin);

    return replaced;
  };

  // Serve the SPA template with injected SEO tags
  app.get('*', async (req, res, next) => {
    // Skip static assets
    if (req.url.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|json|woff|woff2|xml|txt)$/)) {
      return next();
    }

    try {
      const pathname = req.path;
      // Resolve dynamic hostname (respects custom domain or live preview URLs)
      const isCustomDomain = req.get('host')?.includes('unitashome.in');
      const protocol = req.secure || req.headers['x-forwarded-proto'] === 'https' ? 'https' : 'http';
      const origin = isCustomDomain ? 'https://unitashome.in' : `${protocol}://${req.get('host')}`;

      // 1. Get correct metadata values for the active request path
      const meta = getMetaForPath(pathname, origin);

      // 2. Read index.html template
      let html = '';
      if (process.env.NODE_ENV !== 'production') {
        const rawHtml = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        html = await vite.transformIndexHtml(req.url, rawHtml);
      } else {
        html = fs.readFileSync(path.resolve(__dirname, 'dist', 'index.html'), 'utf-8');
      }

      // 3. Inject fully pre-rendered SEO & Open Graph meta tags
      const renderedHtml = replaceMetaTags(html, meta);

      // 4. Send response
      res.status(200).set({ 'Content-Type': 'text/html' }).end(renderedHtml);
    } catch (e: any) {
      if (process.env.NODE_ENV !== 'production' && vite) {
        vite.ssrFixStacktrace(e);
      }
      console.error('Prerender error:', e);
      next(e);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
