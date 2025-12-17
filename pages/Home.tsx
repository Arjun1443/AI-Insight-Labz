import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Users, BookOpen } from 'lucide-react';
import { TAGLINE, SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-8 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-blue-50 rounded-full">
                  Education Redefined
                </span>
                <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className="block xl:inline">{TAGLINE.split(',')[0]},</span>{' '}
                  <span className="block text-primary xl:inline">Projects & Innovations</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  We provide industry-ready online trainings, project guidance, corporate workshops, and complete software development solutions.
                </p>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start">
                  <Link
                    to="/courses"
                    className="flex items-center justify-center w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-600 md:py-4 md:text-lg transition-transform hover:scale-105 shadow-md"
                  >
                    Explore Courses
                  </Link>
                  <Link
                    to="/services"
                    className="flex items-center justify-center w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-blue-50 hover:bg-blue-100 md:py-4 md:text-lg transition-transform hover:scale-105"
                  >
                    Join Training
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://picsum.photos/id/4/1600/1200"
            alt="Students learning"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 lg:bg-gradient-to-r lg:from-white lg:via-white/50 lg:to-transparent"></div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <BookOpen className="text-primary" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Expert-Led Training</h3>
              <p className="text-gray-600 text-sm md:text-base">Learn from industry veterans with updated curriculum tailored for market needs.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Placement Support</h3>
              <p className="text-gray-600 text-sm md:text-base">Dedicated placement cell to help you secure jobs in top MNCs and startups.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Real-time Projects</h3>
              <p className="text-gray-600 text-sm md:text-base">Work on live projects to gain hands-on experience and build a strong portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 md:text-4xl">Our Expertise</h2>
            <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-500">Comprehensive solutions for students and businesses</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <div key={idx} className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-full opacity-50 blur-xl group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-50 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 2).map((feat, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500">
                      <CheckCircle2 size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="inline-flex items-center text-primary font-medium hover:text-blue-700 mt-auto">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block w-full sm:w-auto px-8 py-3 border border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to accelerate your career?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-base sm:text-lg">Join thousands of students who have transformed their careers with AI Insight Labz.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact" className="w-full sm:w-auto bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Contact Us Today
            </Link>
            <Link to="/projects" className="w-full sm:w-auto bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors shadow-lg border border-blue-600">
              Browse Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;