import React from 'react';
import { CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const About: React.FC = () => {
  const highlights = [
    "Industry Experts with 10+ years experience",
    "Hands-on project training methodology",
    "Dedicated Placement Support Cell",
    "End-to-end software development services",
    "Modern infrastructure & lab facilities",
    "Certification upon course completion"
  ];

  return (
    <div>
      <PageHeader 
        title="About Us" 
        subtitle="Driving innovation through education and technology." 
        image="https://picsum.photos/id/20/1920/600"
      />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            
            <div className="mb-12 lg:mb-0 relative">
               <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
               <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <img 
                src="https://picsum.photos/id/60/800/1000" 
                alt="Office working environment" 
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px] z-10"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs border border-gray-100 hidden md:block">
                <p className="text-4xl font-bold text-primary mb-2">500+</p>
                <p className="text-gray-600 font-medium">Students Placed in Top Companies</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                AI Insight Labz is a premier Edutech and Software Development firm dedicated to bridging the gap between academic learning and industry requirements. We were founded with a simple yet powerful mission: to empower the next generation of tech leaders.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize in cutting-edge technologies like Artificial Intelligence, Machine Learning, Full Stack Development, and Data Science. Beyond training, we function as a dedicated innovation hub, guiding students through complex projects and helping businesses build robust software solutions.
              </p>

              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mission & Vision</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Mission:</strong> To provide accessible, high-quality technical education and foster a culture of innovation.
                </p>
                <p className="text-gray-600">
                  <strong>Vision:</strong> To be the global leader in skill development and technological solutions.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;