import React, { useState, useEffect } from 'react';
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
import Markdown from 'react-markdown';
import { cn } from './lib/utils';

// --- Types ---

interface NavItem {
  label: string;
  href: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  alignment: string;
}

interface CaseStudy {
  id: string;
  title: string;
  problem: string;
  steps: string;
  outcome: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

// --- Constants ---

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Resources', href: '#resources' },
  { label: 'Success Stories', href: '#stories' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES: Service[] = [
  {
    id: 'family-law',
    title: 'Family Law',
    icon: <Users className="w-6 h-6" />,
    description: 'Comprehensive legal support for matters of marriage, divorce, custody, and inheritance.',
    alignment: 'Aligned with Article 45 of the Kenyan Constitution (Family) and the African Charter on the Rights and Welfare of the Child.'
  },
  {
    id: 'land-disputes',
    title: 'Land & Property Disputes',
    icon: <Landmark className="w-6 h-6" />,
    description: 'Expert guidance on land tenure, boundary disputes, and property rights protection.',
    alignment: 'Grounded in Article 40 (Protection of Right to Property) and Article 60 (Principles of Land Policy) of the Constitution.'
  },
  {
    id: 'employment-issues',
    title: 'Employment Law',
    icon: <Briefcase className="w-6 h-6" />,
    description: 'Advocacy for fair labor practices, wrongful dismissal, and workplace discrimination.',
    alignment: 'Upholding Article 41 (Labour Relations) and the ILO conventions ratified by Kenya.'
  },
  {
    id: 'human-rights',
    title: 'Human Rights Advocacy',
    icon: <Gavel className="w-6 h-6" />,
    description: 'Defending fundamental freedoms and seeking redress for rights violations.',
    alignment: 'Rooted in the Bill of Rights (Chapter 4) and the African Charter on Human and Peoples\' Rights.'
  }
];

const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Protecting Ancestral Land Rights',
    problem: 'A widow in Kwale County faced eviction from her ancestral land by a private developer claiming ownership through irregular titles.',
    steps: 'Fahari Legal provided anonymous consultation, helped her gather historical occupancy evidence, and connected her with a pro-bono litigator to file a constitutional petition.',
    outcome: 'The court issued a permanent injunction against the developer, recognizing the widow\'s right to property under Article 40.'
  },
  {
    id: '2',
    title: 'Securing Fair Compensation',
    problem: 'An informal sector worker was summarily dismissed without notice or pay after three years of service.',
    steps: 'We guided the worker through the process of filing a claim with the Labor Office and drafted a demand letter citing Article 41 rights.',
    outcome: 'The employer agreed to a settlement covering all terminal dues and a certificate of service, avoiding a lengthy court battle.'
  }
];

const BLOG_POSTS: BlogPost[] = [
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

// --- Components ---

const SectionHeading = ({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={cn("mb-12", centered && "text-center")}>
    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h2>
    {subtitle && <p className="text-slate-600 max-w-2xl mx-auto text-lg">{subtitle}</p>}
    <div className={cn("h-1 w-20 bg-accent mt-4", centered && "mx-auto")} />
  </div>
);

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
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={cn(
        "fixed w-full z-50 transition-all duration-300 border-b",
        scrolled ? "bg-white/90 backdrop-blur-md py-3 border-slate-200 shadow-sm" : "bg-transparent py-5 border-transparent"
      )}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Scale className="w-8 h-8 text-accent" />
            <span className="text-xl font-serif font-bold tracking-tight text-primary">FAHARI LEGAL</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-sm font-medium text-slate-600 hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-accent text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200"
            >
              Get Help Now
            </a>
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
                <a 
                  key={item.href} 
                  href={item.href} 
                  className="text-xl font-medium text-slate-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-accent text-white text-center py-4 rounded-xl font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Anonymous Help
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-slate-50 to-white" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6">
                  Rights-Based Legal Advocacy
                </span>
                <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight mb-8">
                  Dignity, Justice, and <span className="text-accent italic">Fahari</span> for All.
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                  Fahari Legal Kenya provides secure, anonymous legal guidance to protect your rights under the Kenyan Constitution and international human rights standards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                    Seek Anonymous Help <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#resources" className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-accent hover:text-accent transition-all">
                    Explore Resources
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading 
                  title="Our Mission & Vision" 
                  subtitle="Empowering Kenyans through accessible, rights-based legal support."
                />
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-accent">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">The Mission</h3>
                      <p className="text-slate-600">To provide a safe, anonymous bridge between the law and those who need it most, ensuring that every Kenyan can claim their constitutional rights without fear.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-accent">
                      <Scale className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">The Vision</h3>
                      <p className="text-slate-600">A Kenya where justice is not a privilege of the few, but a lived reality for all, anchored in the principles of human dignity and equality.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Landmark className="text-accent" /> Legal Alignment
                </h3>
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p>
                    Fahari Legal operates in strict alignment with the <strong>Constitution of Kenya (2010)</strong>, specifically Chapter 4: The Bill of Rights. We believe that every citizen is entitled to the protection of the law and the right to a fair hearing.
                  </p>
                  <p>
                    Our work is further guided by the <strong>African Union (AU)</strong> human rights instruments, including the <em>African Charter on Human and Peoples' Rights</em>. We advocate for the domestic implementation of these continental standards to ensure comprehensive protection for all.
                  </p>
                  <div className="pt-4 border-t border-slate-200">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium">
                      <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-4 h-4 text-accent" /> Article 48: Access to Justice</li>
                      <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-4 h-4 text-accent" /> Article 50: Fair Hearing</li>
                      <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-4 h-4 text-accent" /> AU Agenda 2063</li>
                      <li className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="w-4 h-4 text-accent" /> Maputo Protocol</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading 
              title="Our Services" 
              subtitle="Expert legal guidance across critical areas of Kenyan law."
              centered
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service) => (
                <motion.div 
                  key={service.id}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-accent">Legal Alignment</p>
                    <p className="text-xs text-slate-500 mt-1 italic">{service.alignment}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Your safety and anonymity are our top priorities. Here is how you can get help.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Submit Inquiry",
                  desc: "Use our encrypted form to describe your legal challenge. No personal identification is required."
                },
                {
                  step: "02",
                  title: "Expert Review",
                  desc: "Our legal team reviews your case against Kenyan law and human rights standards within 48 hours."
                },
                {
                  step: "03",
                  title: "Receive Guidance",
                  desc: "Get a detailed response with actionable steps, relevant laws, and referrals to safe partner organizations."
                }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <span className="text-8xl font-serif font-bold text-white/5 absolute -top-10 -left-4 select-none">
                    {item.step}
                  </span>
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm">{idx + 1}</span>
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden md:block" />
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <SectionHeading 
                  title="Resources" 
                  subtitle="Essential tools and guides for understanding your rights."
                />
                <div className="space-y-4">
                  <button className="w-full text-left p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-accent transition-all flex justify-between items-center group">
                    <span className="font-bold">The Constitution of Kenya</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-accent" />
                  </button>
                  <button className="w-full text-left p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-accent transition-all flex justify-between items-center group">
                    <span className="font-bold">AU African Charter</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-accent" />
                  </button>
                  <button className="w-full text-left p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-accent transition-all flex justify-between items-center group">
                    <span className="font-bold">Legal Aid Act 2016</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-accent" />
                  </button>
                </div>
              </div>
              
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100">
                  <BookOpen className="w-10 h-10 text-accent mb-6" />
                  <h3 className="text-xl font-bold mb-4">Rights Guides</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent" /> Arrest & Detention Rights</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent" /> Gender-Based Violence Redress</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent" /> Land Ownership Verification</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent" /> Labor Rights for Informal Workers</li>
                  </ul>
                </div>
                <div className="p-8 rounded-3xl bg-slate-900 text-white">
                  <Shield className="w-10 h-10 text-accent mb-6" />
                  <h3 className="text-xl font-bold mb-4">Safe Organizations</h3>
                  <p className="text-slate-400 text-sm mb-6">We partner with verified organizations that provide physical protection and legal representation.</p>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li>• Kenya National Commission on Human Rights</li>
                    <li>• FIDA Kenya (Federation of Women Lawyers)</li>
                    <li>• Kituo Cha Sheria</li>
                    <li>• Independent Policing Oversight Authority (IPOA)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section id="stories" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading 
              title="Success Stories" 
              subtitle="Anonymized case studies of how we've helped Kenyans secure justice."
              centered
            />
            <div className="grid md:grid-cols-2 gap-8">
              {CASE_STUDIES.map((study) => (
                <div key={study.id} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-primary">{study.title}</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">The Challenge</p>
                      <p className="text-slate-700 leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">Our Intervention</p>
                      <p className="text-slate-700 leading-relaxed">{study.steps}</p>
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-emerald-600 mb-1">Outcome</p>
                      <p className="text-emerald-900 font-medium">{study.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-24 bg-white">
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

        {/* Newsletter Section */}
        <section className="py-20 bg-emerald-600 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Informed, Stay Protected</h2>
              <p className="text-emerald-100 mb-10 text-lg">
                Join our monthly newsletter for legal insights, rights guides, and updates on the Kenyan legal landscape.
              </p>
              
              <AnimatePresence mode="wait">
                {!subscribed ? (
                  <motion.form 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleNewsletterSubmit}
                    className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                  >
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="flex-grow bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-emerald-200 focus:outline-none focus:bg-white/20 transition-all"
                    />
                    <button className="bg-white text-emerald-600 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all shadow-lg">
                      Subscribe
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/10 border border-white/20 rounded-2xl p-8 max-w-lg mx-auto"
                  >
                    <CheckCircle2 className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">You're Subscribed!</h3>
                    <p className="text-emerald-100 text-sm">
                      Check your inbox for a welcome message. We've sent you a guide on your basic constitutional rights to get started.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <p className="mt-8 text-xs text-emerald-200/60 italic">
                * We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
          
          {/* Decorative background patterns */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </section>

        {/* Contact/Help Section */}
        <section id="contact" className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">Get Anonymous Help</h2>
                <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                  If you are facing a legal challenge or a rights violation, reach out to us. Your message is encrypted and we do not track your identity.
                </p>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Emergency Contacts</h4>
                      <p className="text-slate-400 text-sm">Available 24/7 for urgent rights violations.</p>
                      <div className="mt-2 space-y-1">
                        <p className="font-mono text-accent">Police Oversight (IPOA): 1559</p>
                        <p className="font-mono text-accent">Legal Aid Hotline: 0800 720 640</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Secure Messaging</h4>
                      <p className="text-slate-400 text-sm">Response time: Within 48 hours.</p>
                      <p className="mt-2 font-mono text-accent">Signal/WhatsApp: +254 7XX XXX XXX</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Subject Area</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent">
                        <option className="bg-slate-900">Family Law</option>
                        <option className="bg-slate-900">Land Dispute</option>
                        <option className="bg-slate-900">Human Rights Violation</option>
                        <option className="bg-slate-900">Employment Issue</option>
                        <option className="bg-slate-900">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Urgency</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent">
                        <option className="bg-slate-900">Low</option>
                        <option className="bg-slate-900">Medium</option>
                        <option className="bg-slate-900">High (Urgent)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Your Message</label>
                    <textarea 
                      rows={5}
                      placeholder="Describe your situation in detail. Do not include names or addresses if you wish to remain anonymous."
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent placeholder:text-slate-500"
                    ></textarea>
                  </div>
                  <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <p className="text-xs text-amber-200/80 leading-relaxed">
                      <strong>Privacy Notice:</strong> We do not store IP addresses or browser metadata. Your anonymity is protected by end-to-end encryption.
                    </p>
                  </div>
                  <button className="w-full bg-accent hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-900/20">
                    Send Anonymous Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Scale className="w-6 h-6 text-accent" />
              <span className="text-lg font-serif font-bold tracking-tight text-white">FAHARI LEGAL</span>
            </div>
            
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
            
            <p className="text-xs">
              © 2026 Fahari Legal Kenya. All rights reserved. Built for Justice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
