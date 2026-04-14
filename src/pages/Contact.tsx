import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Input, TextArea } from '../components/Input';
import { Button } from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'student' | 'teacher'>('student');

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Parent/Student enquiry submitted successfully! We'll contact you soon.");
  };

  const handleTeacherSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted! We will review your profile and get back to you.");
  };

  return (
    <div className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-blue mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you are looking for guidance for your child or looking to join our team of expert educators, we're here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-8">
            <Card className="p-8 border-t-4 border-primary-blue">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Reach Out Direct</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="text-trust-green mr-4 flex-shrink-0" size={24} />
                  <div>
                    <span className="font-semibold block text-gray-900">Location</span>
                    <span className="text-gray-600">Jaipur, Rajasthan, India</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="text-trust-green mr-4 flex-shrink-0" size={24} />
                  <div>
                    <span className="font-semibold block text-gray-900">Phone & WhatsApp</span>
                    <span className="text-gray-600">92166 97730</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="text-trust-green mr-4 flex-shrink-0" size={24} />
                  <div>
                    <span className="font-semibold block text-gray-900">Email</span>
                    <span className="text-gray-600">ishantshrimal404@gmail.com</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="text-trust-green mr-4 flex-shrink-0" size={24} />
                  <div>
                    <span className="font-semibold block text-gray-900">Working Hours</span>
                    <span className="text-gray-600">Mon - Sun: 8:00 AM - 10:00 PM</span>
                  </div>
                </li>
              </ul>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="p-8">
              <div className="flex border-b mb-8">
                <button 
                  className={`flex-1 py-4 text-center font-bold text-lg transition-colors ${activeTab === 'student' ? 'border-b-4 border-primary-blue text-primary-blue' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('student')}
                >
                  Student Enquiry
                </button>
                <button 
                  className={`flex-1 py-4 text-center font-bold text-lg transition-colors ${activeTab === 'teacher' ? 'border-b-4 border-trust-green text-trust-green' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('teacher')}
                >
                  Work With Us (Tutors)
                </button>
              </div>

              {activeTab === 'student' && (
                <form onSubmit={handleStudentSubmit} className="space-y-4 animate-in fade-in">
                  <h3 className="text-xl font-bold mb-4">Book a Free Demo</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Student Name" placeholder="Enter student's name" required />
                    <Input label="Parent Name" placeholder="Enter parent's name" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Class / Grade" placeholder="e.g. Class 10" required />
                    <Input label="School" placeholder="e.g. IIS School" required />
                    <Input label="Subject(s)" placeholder="e.g. Maths, Science" required />
                  </div>
                  <Input label="Contact Number" type="tel" placeholder="Your mobile number" required />
                  <TextArea label="Message or Specific Requirements" rows={4} placeholder="Tell us more about the student's needs..." />
                  <Button type="submit" size="lg" fullWidth className="mt-4">
                    Submit Counselling Request
                  </Button>
                </form>
              )}

              {activeTab === 'teacher' && (
                <form onSubmit={handleTeacherSubmit} className="space-y-4 animate-in fade-in">
                  <h3 className="text-xl font-bold mb-4">Join Our Educational Team</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Full Name" placeholder="Your full name" required />
                    <Input label="Contact Number" type="tel" placeholder="Your mobile number" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Highest Qualification" placeholder="e.g. M.Sc. Mathematics" required />
                    <Input label="Years of Experience" type="number" placeholder="e.g. 5" required />
                  </div>
                  <Input label="Subjects & Classes You Can Teach" placeholder="e.g. Physics for 11th & 12th" required />
                  <TextArea label="Brief Profile & Achievements" rows={4} placeholder="Highlight your academic journey and teaching methods..." required />
                  <Button type="submit" size="lg" variant="secondary" fullWidth className="mt-4 bg-trust-green hover:bg-emerald-600 text-white">
                    Submit Teacher Application
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
