import React from 'react';
import { SectionHeading } from '../App'; // Assuming SectionHeading is exported from App.tsx

const AboutPage = () => {
  return (
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
                  {/* Icon for Mission */}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The Mission</h3>
                  <p className="text-slate-600">To provide a safe, anonymous bridge between the law and those who need it most, ensuring that every Kenyan can claim their constitutional rights without fear.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-accent">
                  {/* Icon for Vision */}
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
              {/* Icon for Legal Alignment */} Legal Alignment
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
                  <li className="flex items-center gap-2">Article 48: Access to Justice</li>
                  <li className="flex items-center gap-2">Article 50: Fair Hearing</li>
                  <li className="flex items-center gap-2">AU Agenda 2063</li>
                  <li className="flex items-center gap-2">Maputo Protocol</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
