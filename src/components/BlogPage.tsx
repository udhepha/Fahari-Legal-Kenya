import React from 'react';
import { SectionHeading } from '../App';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'Understanding Land Tenure in Kenya',
    excerpt: 'A comprehensive guide to the different types of land ownership under the Land Act 2012 and how to protect your title.',
    category: 'Property Law',
    date: 'Feb 15, 2026',
    content: `
      <p>Land tenure in Kenya is a complex system, primarily governed by the Land Act 2012 and the Constitution of Kenya 2010. Understanding the different types of land ownership is crucial for any citizen to protect their property rights.</p>
      
      <h3>Types of Land Tenure:</h3>
      <ol>
        <li><strong>Freehold Tenure:</strong> This grants the holder the greatest rights over the land, including indefinite ownership. It is often referred to as 'fee simple absolute'. Freehold land can be transferred, leased, or charged without much restriction, subject to planning laws.</li>
        <li><strong>Leasehold Tenure:</strong> This is an interest in land for a specific period, granted by a lessor (landlord) to a lessee (tenant). The period can vary, commonly 33, 66, or 99 years. Upon expiry, the land reverts to the lessor unless renewed. This is common in urban areas.</li>
        <li><strong>Community Land:</strong> Recognized under Article 63 of the Constitution, this land is held by communities identified on the basis of ethnicity, culture, or similar community of interest. It is managed by community land management committees.</li>
        <li><strong>Public Land:</strong> This includes all land not classified as private or community land. It is held by the State on behalf of the people of Kenya and is administered by the National Land Commission. Examples include forests, national parks, and government institutions.</li>
      </ol>

      <h3>Protecting Your Title:</h3>
      <p>To safeguard your land title, it is essential to:</p>
      <ul>
        <li><strong>Conduct Due Diligence:</strong> Before purchasing land, always conduct a thorough search at the land registry to verify ownership and check for any encumbrances.</li>
        <li><strong>Obtain a Valid Title Deed:</strong> Ensure that the title deed issued to you is genuine and properly registered.</li>
        <li><strong>Fence and Utilize Your Land:</strong> Physical occupation and development of your land can deter potential grabbers.</li>
        <li><strong>Be Vigilant Against Fraud:</strong> Regularly check the status of your land at the land registry and report any suspicious activities immediately.</li>
        <li><strong>Seek Legal Counsel:</strong> Engage a qualified lawyer for all land transactions and disputes to ensure your interests are protected.</li>
      </ul>

      <p>Understanding these aspects of land tenure empowers you to navigate the legal landscape and secure your property rights effectively.</p>
    `
  },
  {
    id: '2',
    title: 'Your Rights During an Arrest',
    excerpt: 'What the Constitution says about your rights when confronted by law enforcement. Know your Article 49 rights.',
    category: 'Criminal Justice',
    date: 'Feb 10, 2026',
    content: `
      <p>Being arrested can be a frightening experience, but knowing your rights is your most powerful tool. Article 49 of the Constitution of Kenya 2010 outlines fundamental rights of arrested persons, ensuring fair treatment and due process.</p>

      <h3>Key Rights During an Arrest:</h3>
      <ol>
        <li><strong>Right to be Informed:</strong> You have the right to be informed promptly, in a language you understand, of the reason for your arrest, the right to remain silent, and the consequences of not remaining silent.</li>
        <li><strong>Right to Remain Silent:</strong> You are not obliged to say anything that might incriminate you. Anything you say can be used against you in court.</li>
        <li><strong>Right to Legal Representation:</strong> You have the right to communicate with an advocate and to have an advocate present during questioning. If you cannot afford one, the State should provide one.</li>
        <li><strong>Right to Contact Family/Friends:</strong> You have the right to communicate with a relative or another person of your choice.</li>
        <li><strong>Right to be Brought to Court Promptly:</strong> An arrested person must be brought before a court as soon as reasonably possible, but not later than twenty-four hours after being arrested (or 14 days for certain serious offenses).</li>
        <li><strong>Right to be Released on Bail:</strong> Unless there are compelling reasons not to be released, an arrested person has the right to be released on bail or bond, with or without conditions.</li>
        <li><strong>Right to be Treated Humanely:</strong> You have the right to be treated with dignity and not to be subjected to torture or cruel, inhuman, or degrading treatment.</li>
        <li><strong>Right to Medical Attention:</strong> If you are injured or fall ill while in custody, you have the right to prompt medical treatment.</li>
      </ol>

      <h3>What to Do if Arrested:</h3>
      <ul>
        <li><strong>Stay Calm:</strong> Panicking can make the situation worse.</li>
        <li><strong>Do Not Resist Arrest:</strong> Even if you believe the arrest is unlawful, resisting can lead to further charges.</li>
        <li><strong>Ask Why You Are Being Arrested:</strong> Demand to know the reason for your arrest.</li>
        <li><strong>Do Not Answer Questions Without a Lawyer:</strong> Politely state that you wish to remain silent until you have consulted with an advocate.</li>
        <li><strong>Do Not Sign Anything:</strong> Do not sign any documents without reading them carefully and consulting your lawyer.</li>
        <li><strong>Document Everything:</strong> If possible, note down details of the arrest, including time, location, officers' names/numbers, and any witnesses.</li>
        <li><strong>Inform Your Family/Lawyer:</strong> As soon as you are allowed, contact your family or lawyer.</li>
      </ul>

      <p>Knowing and asserting these rights can significantly impact the outcome of an arrest. Fahari Legal is here to provide guidance and support if you or someone you know is arrested.</p>
    `
  },
  {
    id: '3',
    title: 'Navigating Family Law Procedures',
    excerpt: 'Step-by-step advice on filing for maintenance or custody in the Children\'s Court, ensuring the best interests of the child.',
    category: 'Family Law',
    date: 'Feb 5, 2026',
    content: `
      <p>Family law matters, especially those involving children, require sensitive and informed navigation through the legal system. In Kenya, the Children's Court is primarily responsible for handling issues related to child maintenance, custody, and guardianship, always prioritizing the best interests of the child.</p>

      <h3>Filing for Maintenance:</h3>
      <p>Child maintenance refers to the financial support provided by parents for the upkeep of their child. Here's a general procedure:</p>
      <ol>
        <li><strong>File a Complaint:</strong> The aggrieved party (usually the parent with custody) files a complaint at the Children's Court. This can be done with the help of a Children's Officer or a lawyer.</li>
        <li><strong>Summons Issued:</strong> The court will issue summons to the other parent, requiring them to appear in court on a specified date.</li>
        <li><strong>Court Hearing:</strong> Both parties present their cases, often including financial statements to determine the capacity of each parent to contribute.</li>
        <li><strong>Interim Orders:</strong> The court may issue interim maintenance orders while the case is ongoing.</li>
        <li><strong>Final Orders:</strong> Based on evidence and arguments, the court issues a final maintenance order, specifying the amount, frequency, and duration of payments.</li>
      </ol>

      <h3>Filing for Custody:</h3>
      <p>Child custody determines who has the legal and physical responsibility for a child. The court's primary consideration is the child's welfare.</p>
      <ol>
        <li><strong>File a Custody Application:</strong> An application is filed at the Children's Court, usually supported by an affidavit detailing why custody should be granted to the applicant.</li>
        <li><strong>Service of Documents:</strong> The application documents are served on the other parent.</li>
        <li><strong>Court Hearing and Mediation:</strong> The court will hear both parties. Mediation is often encouraged to reach an amicable agreement.</li>
        <li><strong>Children's Officer Report:</strong> The court may request a report from the Children's Officer to assess the living conditions and suitability of each parent.</li>
        <li><strong>Final Custody Orders:</strong> The court issues orders, which can include sole custody, joint custody, or visitation rights, always with the child's best interests at heart.</li>
      </ol>

      <h3>Key Considerations:</h3>
      <ul>
        <li><strong>Best Interests of the Child:</strong> This is the paramount principle in all Children's Court matters.</li>
        <li><strong>Legal Representation:</strong> While not mandatory, having a lawyer can significantly streamline the process and ensure your rights are protected.</li>
        <li><strong>Evidence:</strong> Gather all relevant evidence, including birth certificates, marriage certificates (if applicable), financial records, and any communication related to the child's welfare.</li>
      </ul>

      <p>Navigating family law can be emotionally challenging. Fahari Legal provides compassionate and expert guidance to help you through these procedures, ensuring the best outcome for your child.</p>
    `
  }
];

const BlogPage = () => {
  return (
    <section id="blog" className="py-24 bg-white pt-[100px]">
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
            <Link to={`/blog/${post.id}`} key={post.id} className="group cursor-pointer">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
