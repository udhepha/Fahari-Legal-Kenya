import React, { useState } from 'react';
import { SectionHeading } from '../App';
import { Phone, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';

const ContactPage = () => {
  const [subjectArea, setSubjectArea] = useState('Family Law');
  const [urgency, setUrgency] = useState('Low');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call for anonymous submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form fields after submission
      setSubjectArea('Family Law');
      setUrgency('Low');
      setMessage('');
    }, 2000); // Simulate 2-second API call
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white pt-[100px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Get Anonymous Help
            </h2>
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
                  <p className="mt-2 font-mono text-accent">Email: faharilegal.ke@gmail.com</p>
                  <p className="font-mono text-accent">Phone: +254 717 347 020</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Subject Area</label>
                  <select 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
                    value={subjectArea}
                    onChange={(e) => setSubjectArea(e.target.value)}
                    disabled={isSubmitting}
                  >
                    <option className="bg-slate-900">Family Law</option>
                    <option className="bg-slate-900">Land Dispute</option>
                    <option className="bg-slate-900">Human Rights Violation</option>
                    <option className="bg-slate-900">Employment Issue</option>
                    <option className="bg-slate-900">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Urgency</label>
                  <select 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    disabled={isSubmitting}
                  >
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <p className="text-xs text-amber-200/80 leading-relaxed">
                  <strong>Privacy Notice:</strong> We do not store IP addresses or browser metadata. Your anonymity is protected by end-to-end encryption.
                </p>
              </div>
              {isSubmitted ? (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex gap-3 items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="text-sm text-green-200/80 leading-relaxed">
                    Your anonymous message has been sent successfully. We will review it and get back to you within 48 hours.
                  </p>
                </div>
              ) : (
                <button 
                  type="submit"
                  className="w-full bg-accent hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting || !message.trim()}
                >
                  {isSubmitting ? 'Sending...' : 'Send Anonymous Message'}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
