import React from 'react';
import { Card } from '../components/Card';


export const Testimonials: React.FC = () => {
  const writtenReviews = [
    { name: 'Ishan Sharma', role: 'Class 10 Student', review: '"I was Ishant sir’s student back when he had just started teaching. At that time also, the dedication was the same, he would explain things until every single student in the room understood, not just the toppers. That quality is rare. Most teachers teach for the smart kids and ignore the rest. Ishant Sir was never like that."', initial: 'I' },
    { name: 'Rahul Verma', role: 'Parent of Class 6 Student', review: '"We tried two tutors before Ishant Sir. The difference in quality and commitment is night and day. I"m very happy with the results.👍"', initial: 'R' },
    { name: 'Ankita Singh', role: 'Class 12 Student', review: '"He explains buisness studies & economics with such ease. The examples he gives are very practical and easy to understand."', initial: 'A' },
    { name: 'Naveen Mathur', role: 'Parent of Spoken English Student', review: '"I enrolled my kid for spoken english and the confidence boost we have seen in 3 months is just incredible."', initial: 'N' }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-blue mb-4">Success Stories</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from students and parents whose lives have been transformed through our mentoring.
          </p>
        </div>
{/* 
        <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b pb-2">Video Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="p-0 overflow-hidden group cursor-pointer shadow-md fade-in">
              <div className="bg-gray-800 h-56 w-full flex items-center justify-center relative">
                <img src={`https://images.unsplash.com/photo-15${item}0894539-7473b9e4ecda?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} alt="Video testimonial" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500" />
                <div className="relative z-10 text-white flex flex-col items-center">
                  <PlayCircle size={48} className="text-white drop-shadow-lg mb-2 group-hover:text-primary-light transition-colors" />
                </div>
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-bold text-gray-900">Student Success #{item}</h4>
                <p className="text-sm text-gray-500">Board Exam Achiever</p>
              </div>
            </Card>
          ))}
        </div> */}

        <h2 className="text-2xl font-bold mb-8 text-gray-900 border-b pb-2 mt-12">Written Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {writtenReviews.map((review, index) => (
            <Card key={index} className="p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary-blue font-bold text-xl mr-4 flex-shrink-0">
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                {review.review}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
