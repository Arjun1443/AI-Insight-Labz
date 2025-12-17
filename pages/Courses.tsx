import React, { useState } from 'react';
import { Download, Clock, Zap, X, Send, BookOpen, User, Phone as PhoneIcon, Mail, Loader2, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { COURSES, PHONE_NUMBER } from '../constants';

// Modal Component
interface EnrollmentModalProps {
  courseTitle: string;
  onClose: () => void;
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ courseTitle, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    qualification: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Construct the WhatsApp Message
    const message = `*New Course Enrollment Inquiry*\n\n` +
      `*Course:* ${courseTitle}\n` +
      `*Name:* ${formData.name}\n` +
      `*Mobile:* ${formData.mobile}\n` +
      `*Email:* ${formData.email}\n` +
      `*Qualification:* ${formData.qualification || 'Not Specified'}`;
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
      
    // Show success state
    setStatus('success');
    
    // Close modal after success message
    setTimeout(() => {
      onClose();
      setStatus('idle');
    }, 2000);
  };

  return (
    // Backdrop and container: Fixed full screen with overflow-y-auto for scrollability on small screens/landscape
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fade-in" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
        
        {/* Modal Panel */}
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all w-full max-w-lg animate-scale-up my-8">
          
          {/* Modal Header */}
          <div className="bg-primary p-6 text-white relative">
            <button 
              onClick={onClose}
              disabled={status === 'submitting'}
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors disabled:opacity-50 touch-manipulation"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-bold" id="modal-title">Enrollment Form</h2>
            <p className="text-blue-100 text-sm mt-1">Join the {courseTitle} course today!</p>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8">
            {status === 'success' ? (
               <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Redirecting to WhatsApp...</h3>
                  <p className="text-gray-600">
                    Please click send on WhatsApp to complete your registration.
                  </p>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-base" /* text-base prevents iOS zoom */
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Mobile Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Mobile Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <PhoneIcon size={18} />
                    </div>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-base"
                      placeholder="+91 90000 00000"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-base"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Qualification Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Qualification</label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <BookOpen size={18} />
                    </div>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none bg-white text-base"
                    >
                      <option value="">Select your qualification</option>
                      <option value="B.Tech Student">B.Tech Student</option>
                      <option value="B.Tech Graduate">B.Tech Graduate</option>
                      <option value="M.Tech / MCA">M.Tech / MCA</option>
                      <option value="Degree Student">Degree Student</option>
                      <option value="Working Professional">Working Professional</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full py-3.5 rounded-xl font-bold text-lg text-white transition-all transform shadow-lg flex items-center justify-center gap-2 mt-4 
                    ${status === 'submitting' ? 'bg-blue-400 cursor-not-allowed' : 'bg-primary hover:bg-blue-600 hover:-translate-y-0.5'}`}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> Processing...
                    </>
                  ) : (
                    <>
                      Proceed to WhatsApp <Send size={18} />
                    </>
                  )}
                </button>
                
                <p className="text-xs text-center text-gray-500 mt-2">
                  This will open WhatsApp to send your details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Courses Page Component
const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const openEnrollModal = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
  };

  const closeEnrollModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div>
      <PageHeader 
        title="Our Courses" 
        subtitle="Upgrade your skills with our industry-designed curriculum." 
        image="https://picsum.photos/id/24/1920/600"
      />

      {selectedCourse && (
        <EnrollmentModal courseTitle={selectedCourse} onClose={closeEnrollModal} />
      )}

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-12">
            {COURSES.map((course, index) => (
              <div key={course.id} className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                
                {/* Image Side */}
                <div className="md:w-1/3 bg-gray-100 relative h-56 sm:h-64 md:h-auto">
                   <img 
                    src={`https://picsum.photos/seed/${course.id}/600/400`} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                   />
                   <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary uppercase shadow-sm">
                     Certification
                   </div>
                </div>

                {/* Content Side */}
                <div className="md:w-2/3 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{course.title}</h3>
                      <div className="flex items-center text-gray-500 bg-gray-50 px-3 py-1 rounded-lg text-sm font-medium">
                        <Clock size={16} className="mr-2" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-base sm:text-lg">
                      {course.overview}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3 flex items-center">
                        <Zap size={14} className="text-yellow-500 mr-2" />
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {course.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 border-t border-gray-100 mt-auto">
                    <button 
                      onClick={() => openEnrollModal(course.title)}
                      className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                    >
                       Enroll Now
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                      <Download size={18} />
                      Download Syllabus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;