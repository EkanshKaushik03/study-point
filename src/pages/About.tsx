import React from 'react';
import { Card } from '../components/Card';
import { Award, BookOpen, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-clean-gray min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-blue mb-4">About Me</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about transforming education through personalized mentoring and dedicated guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hi, I'm Ishant</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              As the lead educator and founder of Ishant's Study Point, my mission is to provide high-quality, personalized education to students in Jaipur. I believe that every child has a unique learning style, and standard classroom settings often overlook individual potential.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              With a strong academic background and years of teaching experience, I have developed a unique pedagogy that focuses on conceptual clarity rather than rote memorization. When students understand 'why' something works, the 'how' becomes effortless.
            </p>
            <div className="flex gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex-1 text-center">
                <div className="text-2xl font-bold text-primary-blue mb-1">M.Sc.</div>
                <div className="text-sm text-gray-500">Qualification</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex-1 text-center">
                <div className="text-2xl font-bold text-trust-green mb-1">10+</div>
                <div className="text-sm text-gray-500">Years Exp</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-blue transform translate-x-4 translate-y-4 rounded-2xl opacity-20"></div>
              {/* Using a placeholder for Ishant's picture */}
              <div className="w-72 h-96 bg-gray-300 rounded-2xl relative z-10 overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Ishant - Lead Educator" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">My Teaching Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary-blue mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Goal Oriented</h3>
              <p className="text-gray-600">Setting clear milestones for each student and creating custom roadmaps to achieve them systematically.</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-trust-green mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Conceptual Clarity</h3>
              <p className="text-gray-600">Focusing on core concepts and practical applications rather than meaningless memorization.</p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary-light mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Confidence Building</h3>
              <p className="text-gray-600">Encouraging questioning and independent thinking to build self-reliance and academic confidence.</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
