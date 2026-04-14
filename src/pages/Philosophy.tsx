import React from 'react';
import { Card } from '../components/Card';
import { Lightbulb, Target, Users, Sparkles, Quote } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-blue to-primary-light text-white py-24 px-4 sm:px-6 lg:px-8 pb-32">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white opacity-5 mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-5 mix-blend-overlay"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Sparkles className="w-12 h-12 mx-auto mb-6 text-yellow-300 opacity-90 drop-shadow-lg animate-pulse" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-6 leading-tight drop-shadow-md">
            Our Teaching Philosophy
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto font-light tracking-wide">
            Why we do what we do.
          </p>
        </div>
      </section>

      {/* Philosophy Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 -mt-20 relative z-20">
        <div className="max-w-5xl mx-auto">
          
          {/* Main Hero Card / Quote */}
          <Card className="p-8 md:p-14 shadow-2xl mb-16 bg-white border-t-8 border-trust-green rounded-3xl">
            <div className="text-center max-w-3xl mx-auto">
              <Quote className="w-12 h-12 mx-auto mb-6 text-gray-200 rotate-180" />
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-relaxed">
                At Ishant's Study Point, we believe marks are a result, not the goal.
                <span className="text-primary-blue block mt-3 text-3xl md:text-5xl">The real goal is understanding.</span>
              </h2>
            </div>
          </Card>

          {/* Detailed Points */}
          <div className="space-y-12">
            
            {/* Point 1 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col md:flex-row gap-8 items-center cursor-default">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center text-primary-blue shadow-inner group-hover:scale-110 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500">
                  <Target size={56} />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 inline-flex items-center gap-3">
                  Beyond Memorization
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  When a child truly understands a concept — not just memorizes it — they can solve any question, handle any exam, and carry that knowledge for life. True learning happens when curiosity meets clarity.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col md:flex-row-reverse gap-8 items-center cursor-default">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-green-50 rounded-full flex items-center justify-center text-trust-green shadow-inner group-hover:scale-110 group-hover:bg-trust-green group-hover:text-white transition-all duration-500">
                  <Lightbulb size={56} />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-right">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center md:justify-end gap-3 w-full">
                  Personalized Approach
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  We don't believe in one-size-fits-all teaching. Every child has a different pace, a different strength, and a different way of thinking. Our job is to <span className="font-semibold text-trust-green bg-green-50 px-2 py-1 rounded">find that way</span> and teach accordingly.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col md:flex-row gap-8 items-center cursor-default">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center text-primary-light shadow-inner group-hover:scale-110 group-hover:bg-primary-light group-hover:text-white transition-all duration-500">
                  <Users size={56} />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 inline-flex items-center gap-3">
                  Focused Attention
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  This is why we limit our batches, keep sessions one-on-one, and always involve parents in their child's progress. We work as a collaborative team to nurture your child's continuous academic and personal growth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
