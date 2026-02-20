import React from 'react';
import { SectionHeading } from '../App';

const HowItWorksPage = () => {
  return (
    <section id="how-it-works" className="py-24 bg-primary text-white overflow-hidden relative pt-[100px]">
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
  );
};

export default HowItWorksPage;
