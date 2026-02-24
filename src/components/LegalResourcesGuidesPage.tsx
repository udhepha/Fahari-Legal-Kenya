import React, { useState, useMemo } from 'react';
import { SectionHeading } from '../App';
import { Search, Filter, BookOpen, ExternalLink, Info } from 'lucide-react';

interface LegalResource {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
}

const MOCK_LEGAL_RESOURCES: LegalResource[] = [
  {
    id: '1',
    title: 'Kenya Constitution 2010',
    description: 'The supreme law of the Republic of Kenya. All other laws must conform to the Constitution.',
    category: 'Constitution',
    link: 'https://www.kenyalaw.org/kl/index.php?id=398',
  },
  {
    id: '2',
    title: 'Civil Procedure Act Cap 21',
    description: 'An Act of Parliament to make provision for procedure in civil courts.',
    category: 'Legislation',
    link: 'https://www.kenyalaw.org/kl/index.php?id=398',
  },
  {
    id: '3',
    title: 'Criminal Procedure Code Cap 75',
    description: 'An Act of Parliament to make provision for procedure in criminal courts.',
    category: 'Legislation',
    link: 'https://www.kenyalaw.org/kl/index.php?id=398',
  },
  {
    id: '4',
    title: 'Employment Act, 2007',
    description: 'An Act of Parliament to declare and define the fundamental rights of employees, to provide for basic conditions of employment of employees, to regulate employment of children, and to provide for other connected purposes.',
    category: 'Legislation',
    link: 'https://www.kenyalaw.org/kl/index.php?id=398',
  },
  {
    id: '5',
    title: 'Marriage Act, 2014',
    description: 'An Act of Parliament to amend and consolidate the law relating to marriage; to provide for the law relating to marriage; to provide for the registration of marriages; and for connected purposes.',
    category: 'Legislation',
    link: 'https://www.kenyalaw.org/kl/index.php?id=398',
  },
  {
    id: '6',
    title: 'The Law of Succession Act Cap 160',
    description: 'An Act of Parliament to amend and consolidate the law relating to intestate and testamentary succession and the administration of estates of deceased persons; and for purposes connected therewith and incidental thereto.',
    category: 'Legislation',
    link: 'https://www.kenyalaw.org/kl/index.php?id=398',
  },
  {
    id: '7',
    title: 'National Gender and Equality Commission Act, 2011',
    description: 'An Act of Parliament to provide for the establishment of the National Gender and Equality Commission; to provide for its powers and functions; and for connected purposes.',
    category: 'Human Rights',
    link: 'https://www.kenyalaw.org/kl/index.php?id=398',
  },
  {
    id: '8',
    title: 'Kenya National Commission on Human Rights Act, 2011',
    description: 'An Act of Parliament to provide for the establishment of the Kenya National Commission on Human Rights; to provide for its powers and functions; and for connected purposes.',
    category: 'Human Rights',
    link: 'https://www.kenyalaw.org/kl/index.php?id=398',
  },
  {
    id: '9',
    title: 'Guide to Small Claims Court',
    description: 'A comprehensive guide for individuals navigating the Small Claims Court in Kenya.',
    category: 'Guides',
    link: 'https://www.judiciary.go.ke/wp-content/uploads/2021/07/Small-Claims-Court-Guide.pdf',
  },
  {
    id: '10',
    title: 'Understanding Your Rights: A Citizen\'s Handbook',
    description: 'An easy-to-understand handbook outlining fundamental rights and freedoms for Kenyan citizens.',
    category: 'Guides',
    link: 'https://www.knchr.org/index.php/download/file/NjQx',
  },
];

const LegalResourcesGuidesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const allCategories = MOCK_LEGAL_RESOURCES.map(resource => resource.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, []);

  const filteredResources = useMemo(() => {
    let resources = MOCK_LEGAL_RESOURCES;

    if (selectedCategory !== 'All') {
      resources = resources.filter(resource => resource.category === selectedCategory);
    }

    if (searchTerm) {
      resources = resources.filter(
        resource => 
          resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return resources;
  }, [searchTerm, selectedCategory]);

  return (
    <section className="py-16 bg-slate-950 text-white min-h-screen pt-[100px]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Legal Resources & Guides" subtitle="Access a comprehensive library of legal documents and guides." centered />

        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-grow w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search resources..."
              className="flex-grow bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent placeholder:text-slate-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative w-full md:w-auto">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <select
              className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent appearance-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-slate-900">
                  {category}
                </option>
              ))}
            </select>
            <ExternalLink className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 rotate-90 pointer-events-none" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.length > 0 ? (
            filteredResources.map(resource => (
              <div key={resource.id} className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-white/10 flex flex-col">
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
                    <BookOpen className="w-4 h-4" />
                    <span>{resource.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">{resource.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 flex-grow">{resource.description}</p>
                  <a 
                    href={resource.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent hover:underline text-sm font-medium flex items-center gap-1 mt-auto"
                  >
                    View Resource <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-slate-500 py-10">
              <Info className="w-10 h-10 mx-auto mb-4 text-slate-600" />
              <p>No legal resources or guides found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LegalResourcesGuidesPage;
