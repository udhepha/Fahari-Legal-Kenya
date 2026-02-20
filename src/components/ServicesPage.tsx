import React from 'react';
import { SectionHeading } from '../App';
import { motion } from 'motion/react';
import { Users, Landmark, Briefcase, Gavel } from 'lucide-react';
import { cn } from '../lib/utils';

const SERVICES = [
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

const ServicesPage = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 pt-[100px]">
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
  );
};

export default ServicesPage;
