import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { ADDRESS, EMAIL_ADDRESS, PHONE_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you shortly.");
    setFormData({ name: '', mobile: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch for course details, project guidance, or any queries." 
        image="https://picsum.photos/id/48/1920/600"
      />

      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600 max-w-xs">{ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">{PHONE_NUMBER}</p>
                    <p className="text-gray-500 text-sm mt-1">Mon-Sat from 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600 break-all">{EMAIL_ADDRESS}</p>
                  </div>
                </div>
                 
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                    <MessageCircle size={24} />
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <a 
                        href={`https://wa.me/${PHONE_NUMBER.replace(/[^0-9]/g, '')}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-green-600 hover:text-green-700 font-medium"
                    >
                        Chat with us directly &rarr;
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-10 sm:mt-12 w-full h-56 sm:h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
                 <img src="https://picsum.photos/id/234/800/400" className="w-full h-full object-cover opacity-80" alt="Map Location" />
                 <div className="absolute inset-0 flex items-center justify-center bg-gray-900/10">
                    <span className="bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold">Google Map Integration</span>
                 </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-6 sm:p-12 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-base"
                    placeholder="+91 90000 00000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message / Inquiry</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-base"
                    placeholder="I'm interested in the Python Full Stack course..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3.5 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-lg touch-manipulation"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;