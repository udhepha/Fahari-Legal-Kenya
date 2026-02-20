import React from 'react';
import { SectionHeading } from '../App';

const SuccessStoriesPage = () => {
  const CASE_STUDIES = [
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

  return (
    <section id="stories" className="py-24 bg-slate-50 pt-[100px]">
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
  );
};

export default SuccessStoriesPage;
