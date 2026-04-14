import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { BookOpen, Users, Trophy, ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    classLevel: '',
    subject: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Later we will integrate Firebase or an API. For now, just alert.
    alert("Enquiry submitted successfully! We will contact you soon.");
    setFormData({ name: '', classLevel: '', subject: '', phone: '' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-light text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-6 leading-tight">
              Unlock Your Child's <span className="text-trust-green">True Potential</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
              Personalized home tuition for Class 1 to 12 students in Jaipur right at your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Book Free Demo
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outlineWhite" size="lg" className="w-full sm:w-auto">
                  Explore Services
                </Button>
              </Link>
            </div>
        
          </div>
          
          {/* Quick Enquiry Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-white opacity-10 rounded-2xl transform rotate-3 scale-105"></div>
            <Card className="relative p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-sans">Quick Enquiry</h2>
              <p className="text-gray-600 mb-6">Fill out this form and we'll get back to you immediately to schedule a free demo.</p>
              
              <form onSubmit={handleSubmit}>
                <Input 
                  name="name"
                  placeholder="Parent / Student Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    name="classLevel"
                    placeholder="Class / Grade"
                    value={formData.classLevel}
                    onChange={handleChange}
                    required
                  />
                  <Input 
                    name="subject"
                    placeholder="Subject(s)"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input 
                  name="phone"
                  placeholder="Contact Number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <Button variant="primary" fullWidth type="submit" className="mt-2">
                  Submit Enquiry
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-clean-gray px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive educational support tailored to your child's unique needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow border-t-4 border-primary-blue">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-primary-blue mb-6">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Tuition</h3>
              <p className="text-gray-600 mb-6">One-on-one tuition at your home. Your child learns in a comfortable, familiar
environment no travel, no stress. Available for all major subjects, Class 1 to 12.</p>
              <Link to="/services" className="text-primary-blue font-semibold flex items-center hover:text-primary-light">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow border-t-4 border-trust-green">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-trust-green mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Spoken English</h3>
              <p className="text-gray-600 mb-6">Is your child hesitant to speak in English? Our interactive spoken English sessions
build confidence to speak, read and write English fluently.</p>
              <Link to="/services" className="text-trust-green font-semibold flex items-center hover:text-emerald-600">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow border-t-4 border-primary-light">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-primary-light mb-6">
                <Trophy size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Exams</h3>
              <p className="text-gray-600 mb-6">Preparing for NTSE, Olympiad, or board exams? Get focused coaching that covers
the exact topics that matter most in competitive tests.</p>
              <Link to="/services" className="text-primary-light font-semibold flex items-center hover:text-blue-400">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Parents Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real success stories from students who transformed their academic journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 relative">
              <div className="absolute top-4 right-4 text-gray-200">
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <p className="text-gray-700 italic mb-6 relative z-10">
                "He explains buisness studies & economics with such ease. The examples he gives are very practical and easy to understand."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary-blue font-bold text-xl mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Ankita Singh</h4>
                  <p className="text-sm text-gray-500">Class 12 Student</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 relative">
              <div className="absolute top-4 right-4 text-gray-200">
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <p className="text-gray-700 italic mb-6 relative z-10">
                "We tried two tutors before Ishant Sir. The difference in quality and commitment is night and day. I"m very happy with the results.👍"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-trust-green font-bold text-xl mr-4">
                  R
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Rahul Verma</h4>
                  <p className="text-sm text-gray-500">Parent of Class 8 Student</p>
                </div>
              </div>
            </Card>
              <Card className="p-8 relative">
              <div className="absolute top-4 right-4 text-gray-200">
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <p className="text-gray-700 italic mb-6 relative z-10">
                "I enrolled my kid for spoken english and the confidence boost we have seen in 3 months is just incredible."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary-blue font-bold text-xl mr-4">
                  N
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Naveen Mathur</h4>
                  <p className="text-sm text-gray-500">Parent of Spoken English Student</p>
                </div>
              </div>
            </Card>
            

            {/* Video Testimonial Placeholder
            <Card className="p-0 overflow-hidden group cursor-pointer">
              <div className="bg-gray-200 h-48 w-full flex items-center justify-center relative">
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-500" />
                <div className="relative z-10 text-white flex flex-col items-center">
                  <PlayCircle size={48} className="text-white drop-shadow-md mb-2 group-hover:text-primary-light transition-colors" />
                  <span className="font-semibold drop-shadow-md">Watch Success Story</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-1">Aman's Journey</h4>
                <p className="text-sm text-gray-500">Class 12 - Physics & Maths</p>
              </div>
            </Card> */}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="outline" size="lg">View All Testimonials</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-blue text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to see the difference?</h2>
          <p className="text-xl mb-8 text-blue-100">Join hundreds of successful students in Jaipur. Book your free demonstration session today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+919216697730">
              <Button variant="solidWhite" size="lg" className="w-full sm:w-auto">
                Call Now
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Book Trial Class
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
