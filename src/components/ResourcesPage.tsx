import React from 'react';
import { SectionHeading } from '../App'; // Assuming SectionHeading is exported from App.tsx

const ResourcesPage = () => {
  return (
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
                {/* Icon */}
              </button>
              <button className="w-full text-left p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-accent transition-all flex justify-between items-center group">
                <span className="font-bold">AU African Charter</span>
                {/* Icon */}
              </button>
              <button className="w-full text-left p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-accent transition-all flex justify-between items-center group">
                <span className="font-bold">Legal Aid Act 2016</span>
                {/* Icon */}
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100">
              {/* Icon */}
              <h3 className="text-xl font-bold mb-4">Rights Guides</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-2"> Arrest & Detention Rights</li>
                <li className="flex items-center gap-2"> Gender-Based Violence Redress</li>
                <li className="flex items-center gap-2"> Land Ownership Verification</li>
                <li className="flex items-center gap-2"> Labor Rights for Informal Workers</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900 text-white">
              {/* Icon */}
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
  );
};

export default ResourcesPage;
