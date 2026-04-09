import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Home Tuition",
      description: "Personalized one-on-one sessions at your home. Available for Class 1 to 12 across all major boards (CBSE, RBSE, ICSE).",
      features: ["Customized Study Plans", "Regular Assessments", "Doubt Clearing Sessions", "Parent Progress Reports"],
      color: "border-primary-blue"
    },
    {
      title: "Spoken English",
      description: "Interactive classes designed to improve fluency, vocabulary, and public speaking confidence for students and professionals.",
      features: ["Conversational Practice", "Grammar Fundamentals", "Group Discussions", "Interview Preparation"],
      color: "border-trust-green"
    },
    {
      title: "Summer Camps",
      description: "Engaging holistic development programs during summer breaks focusing on skill building and creative learning.",
      features: ["Coding Basics", "Personality Development", "Creative Writing", "Vedic Math"],
      color: "border-primary-light"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-clean-gray min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-blue mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive educational solutions designed to cater to the unique needs of every learner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`p-8 border-t-4 ${service.color} flex flex-col h-full`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="text-trust-green mr-2 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link to="/contact" className="mt-auto">
                <Button fullWidth variant="outline" className={`hover:bg-gray-50`}>
                  Enquire Now
                </Button>
              </Link>
            </Card>
          ))}
        </div>
        
        <div className="bg-primary-blue rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Study Plan?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Every student is different. Contact us to discuss your specific requirements and we will design a personalized curriculum just for you.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100 font-bold">
              Schedule a Counseling Session
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
