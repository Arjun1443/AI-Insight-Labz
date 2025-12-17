import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { PROJECTS } from '../constants';
import { FolderGit2, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...PROJECTS.map(p => p.category)];

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div>
      <PageHeader 
        title="Student Projects" 
        subtitle="Innovative IEEE and Real-time projects across various domains." 
        image="https://picsum.photos/id/180/1920/600"
      />

      <section className="py-12 sm:py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Tabs - Horizontal scroll on very small screens if needed */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-lg scale-105" 
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {filteredProjects.map((categoryGroup, index) => (
              <div key={index} className="animate-fade-in-up">
                 {activeCategory === "All" && (
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 pl-4 border-l-4 border-primary">
                      {categoryGroup.category} Projects
                    </h3>
                 )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {categoryGroup.titles.map((title, idx) => (
                    <div key={idx} className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 group cursor-pointer flex items-start gap-4 h-full">
                      <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                        <FolderGit2 size={24} />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
                          {title}
                        </h4>
                        <p className="text-gray-500 text-xs sm:text-sm mb-3">
                          Complete source code, documentation, and explanation included.
                        </p>
                        <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                          View Details <ArrowRight size={14} className="ml-1" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-gray-600 mb-4 text-sm sm:text-base">Don't see what you're looking for? We have 100+ more titles.</p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-black transition-colors w-full sm:w-auto">
              Request Project List
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;