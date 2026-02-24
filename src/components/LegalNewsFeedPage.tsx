import React, { useState, useMemo } from 'react';
import { SectionHeading } from '../App';
import { Search, Filter, CalendarDays, Tag, ChevronRight, ArrowRight, Info } from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: string;
  author: string;
  imageUrl: string;
}

const MOCK_NEWS_ARTICLES: NewsArticle[] = [
  {
    id: '1',
    title: 'New Bill on Digital Privacy Passed',
    summary: 'A landmark bill aimed at protecting digital privacy has been passed by the parliament, introducing stricter data protection regulations.',
    content: 'The Digital Privacy Act of 2026, passed with overwhelming support, mandates new standards for data collection, storage, and usage by corporations and government agencies. It includes provisions for individual data rights, such as the right to access, rectify, and erase personal data. Legal experts anticipate significant implications for tech companies operating within the country, requiring them to overhaul their data handling practices to ensure compliance. Public awareness campaigns are expected to follow to inform citizens of their new rights.',
    date: '2026-02-20',
    category: 'Legislation',
    author: 'Legal Times Staff',
    imageUrl: 'https://picsum.photos/seed/digitalprivacy/800/400?blur=2',
  },
  {
    id: '2',
    title: 'Supreme Court Rules on Environmental Protection Case',
    summary: 'The Supreme Court has delivered a crucial ruling in favor of environmental protection, setting a precedent for future cases involving corporate responsibility.',
    content: 'In a highly anticipated decision, the Supreme Court sided with environmental activists in a case against a major industrial conglomerate. The ruling emphasizes the constitutional right to a clean and healthy environment, and it imposes stricter liabilities on corporations for ecological damage. This judgment is seen as a significant victory for environmental law and is expected to influence policy-making and corporate governance across various sectors. Lawyers specializing in environmental law are already analyzing the full implications for their clients.',
    date: '2026-02-18',
    category: 'Judiciary',
    author: 'Environmental Law Review',
    imageUrl: 'https://picsum.photos/seed/environmentcase/800/400?blur=2',
  },
  {
    id: '3',
    title: 'Human Rights Commission Investigates Police Brutality Claims',
    summary: 'The National Human Rights Commission has launched an investigation into multiple reports of police brutality during recent public protests.',
    content: 'Following widespread public outcry and numerous documented incidents, the Human Rights Commission has initiated a formal inquiry into allegations of excessive force used by law enforcement during recent demonstrations. The investigation will examine evidence, interview witnesses, and assess compliance with international human rights standards. This move comes amidst growing calls for police reform and accountability, with civil society organizations providing legal support to victims and advocating for justice. The findings of the commission are expected to be released in the coming months.',
    date: '2026-02-15',
    category: 'Human Rights',
    author: 'Civil Liberties Watch',
    imageUrl: 'https://picsum.photos/seed/policebrutality/800/400?blur=2',
  },
  {
    id: '4',
    title: 'New Guidelines for Land Dispute Resolution Introduced',
    summary: 'The Ministry of Lands has unveiled new guidelines aimed at streamlining and expediting the resolution of land disputes across the country.',
    content: 'The updated guidelines introduce a multi-tiered approach to land dispute resolution, emphasizing mediation and alternative dispute resolution mechanisms before resorting to lengthy court battles. The goal is to reduce the backlog of land cases, promote equitable access to justice, and prevent land-related conflicts. Training programs for local administrators and community leaders are being rolled out to facilitate the implementation of these new procedures. Legal practitioners specializing in property law are advising clients on the implications of these changes.',
    date: '2026-02-12',
    category: 'Policy',
    author: 'Government Gazette',
    imageUrl: 'https://picsum.photos/seed/landdispute/800/400?blur=2',
  },
  {
    id: '5',
    title: 'Tech Law Conference Highlights AI and Ethics',
    summary: 'Legal professionals and tech innovators gathered at the annual Tech Law Conference to discuss the ethical and regulatory challenges posed by artificial intelligence.',
    content: 'The conference featured keynote speeches and panel discussions on topics such as AI accountability, data privacy in AI systems, and the future of intellectual property in the age of generative AI. Experts emphasized the need for robust legal frameworks to govern AI development and deployment, ensuring ethical considerations are at the forefront. The discussions highlighted the growing importance of interdisciplinary collaboration between legal scholars, technologists, and policymakers to navigate the complex landscape of emerging technologies.',
    date: '2026-02-10',
    category: 'Technology Law',
    author: 'Tech Legal Insights',
    imageUrl: 'https://picsum.photos/seed/techlaw/800/400?blur=2',
  },
];

const LegalNewsFeedPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const allCategories = MOCK_NEWS_ARTICLES.map(article => article.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, []);

  const filteredArticles = useMemo(() => {
    let articles = MOCK_NEWS_ARTICLES;

    if (selectedCategory !== 'All') {
      articles = articles.filter(article => article.category === selectedCategory);
    }

    if (searchTerm) {
      articles = articles.filter(
        article => 
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return articles;
  }, [searchTerm, selectedCategory]);

  return (
    <section className="py-16 bg-slate-950 text-white min-h-screen pt-[100px]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Legal News Feed" subtitle="Stay updated with the latest legal developments." centered />

        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-grow w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search news articles..."
              className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent placeholder:text-slate-500"
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
            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 rotate-90 pointer-events-none" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map(article => (
              <div key={article.id} className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-white/10 flex flex-col">
                <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
                    <CalendarDays className="w-4 h-4" />
                    <span>{article.date}</span>
                    <Tag className="w-4 h-4 ml-auto" />
                    <span>{article.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">{article.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 flex-grow">{article.summary}</p>
                  <a href="#" className="text-accent hover:underline text-sm font-medium flex items-center gap-1 mt-auto">
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-slate-500 py-10">
              <Info className="w-10 h-10 mx-auto mb-4 text-slate-600" />
              <p>No news articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LegalNewsFeedPage;
