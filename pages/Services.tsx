import React from 'react';
import PageHeader from '../components/PageHeader';
import { SERVICES, PHONE_NUMBER } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div>
       <PageHeader 
        title="Our Services" 
        subtitle="From academic excellence to corporate solutions, we cover it all." 
        image="https://picsum.photos/id/3/1920/600"
      />

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                <div className="p-6 sm:p-8 flex-grow">
                  <div className="w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start sm:items-center text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 sm:mt-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 px-6 sm:px-8 py-4 border-t border-gray-100 mt-auto">
                  <a 
                    href={`https://wa.me/${PHONE_NUMBER.replace(/[^0-9]/g, '')}?text=Hi, I am interested in your ${service.title} service.`}
                    target="_blank" 
                    rel="noreferrer"
                    className="text-primary font-semibold hover:text-blue-700 text-sm uppercase tracking-wide inline-flex items-center"
                  >
                    Enquire Now &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Strip */}
      <section className="bg-gray-900 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Looking for Corporate Solutions?</h2>
            <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-sm sm:text-base">
              We offer tailored training programs and software development services for businesses of all sizes. 
              Let's discuss how we can help your organization grow.
            </p>
            <a href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors w-full sm:w-auto">
              Request a Proposal
            </a>
        </div>
      </section>
    </div>
  );
};

export default Services;