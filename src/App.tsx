import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {
  Scale,
  Shield,
  BookOpen,
  MessageSquare,
  Phone,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Landmark,
  Users,
  Briefcase,
  Gavel,
  AlertCircle,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

// Import page components
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import HowItWorksPage from './components/HowItWorksPage';
import ResourcesPage from './components/ResourcesPage';
import SuccessStoriesPage from './components/SuccessStoriesPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import CivicLensPage from './components/CivicLensPage';

// --- Types ---

interface NavItem {
  label: string;
  path: string;
}

// --- Constants ---

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Resources', path: '/resources' },
  { label: 'Success Stories', path: '/stories' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  { label: 'CivicLens AI', path: '/civiclense' },
];

// --- Components ---

export const SectionHeading = ({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={cn("mb-12", centered && "text-center")}>
    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h2>
    {subtitle && <p className="text-slate-600 max-w-2xl mx-auto text-lg">{subtitle}</p>}
    <div className={cn("h-1 w-20 bg-accent mt-4", centered && "mx-auto")} />
  </div>
);

export { Scale, Shield, BookOpen, MessageSquare, Phone, ChevronRight, Menu, X, ArrowRight, Landmark, Users, Briefcase, Gavel, AlertCircle, CheckCircle2, ExternalLink };

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      // In a real app, this would call an API
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className={cn(
          "fixed w-full z-50 transition-all duration-300 border-b",
          scrolled ? "bg-white/90 backdrop-blur-md py-3 border-slate-200 shadow-sm" : "bg-transparent py-5 border-transparent"
        )}>
          <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <Scale className="w-8 h-8 text-accent" />
              <span className="text-xl font-serif font-bold tracking-tight text-primary">FAHARI LEGAL</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className="text-sm font-medium text-slate-600 hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="bg-accent text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200"
              >
                Get Help Now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
            >
              <div className="flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className="text-xl font-medium text-slate-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link 
                  to="/contact" 
                  className="bg-accent text-white text-center py-4 rounded-xl font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Anonymous Help
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex-grow pt-[80px]"> {/* Adjust padding-top for fixed nav */}
          <Routes>
            <Route path="/" element={<HomePage 
              newsletterEmail={newsletterEmail}
              setNewsletterEmail={setNewsletterEmail}
              subscribed={subscribed}
              handleNewsletterSubmit={handleNewsletterSubmit}
            />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/stories" element={<SuccessStoriesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/civiclense" element={<CivicLensPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-slate-950 text-slate-500 py-12 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <Link to="/" className="flex items-center gap-2">
                <Scale className="w-6 h-6 text-accent" />
                <span className="text-lg font-serif font-bold tracking-tight text-white">FAHARI LEGAL</span>
              </Link>
              
              <div className="flex gap-8 text-sm">
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
              </div>
              
              <p className="text-xs">
                © 2026 Fahari Legal Kenya. All rights reserved. Built for Justice.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
