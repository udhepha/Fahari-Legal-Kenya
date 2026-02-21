import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomePageProps {
  newsletterEmail: string;
  setNewsletterEmail: (email: string) => void;
  subscribed: boolean;
  handleNewsletterSubmit: (e: React.FormEvent) => void;
}

const HomePage: React.FC<HomePageProps> = ({ newsletterEmail, setNewsletterEmail, subscribed, handleNewsletterSubmit }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-[100px] pb-20 md:pt-48 md:pb-32 overflow-hidden">
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
                <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                  Seek Anonymous Help <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/resources" className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-accent hover:text-accent transition-all">
                  Explore Resources
                </Link>
                <Link to="/civiclense" className="bg-accent text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200">
                  CivicLens AI <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
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
    </>
  );
};

export default HomePage;
