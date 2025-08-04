import React from 'react';
import { Users, Heart, Award, Clock, CheckCircle, Star, Shield } from 'lucide-react';

const Staffing = () => {
  const qualifications = [
    'Certified Nursing Assistant (CNA) certification',
    'Home Health Aide (HHA) certification',
    'CPR and First Aid certification',
    'Background check and drug screening',
    'Excellent communication skills',
    'Compassionate and caring personality',
    'Reliable transportation',
    'Flexible scheduling availability'
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Competitive Compensation',
      description: 'We offer competitive wages with opportunities for advancement and performance-based bonuses.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Choose from full-time, part-time, or per-diem positions that fit your lifestyle and availability.'
    },
    {
      icon: Award,
      title: 'Professional Development',
      description: 'Ongoing training and education opportunities to enhance your skills and advance your career.'
    },
    {
      icon: Shield,
      title: 'Comprehensive Benefits',
      description: 'Health insurance, paid time off, and retirement savings plans for eligible employees.'
    }
  ];

  const positions = [
    {
      title: 'Certified Nursing Assistant (CNA)',
      type: 'Full-time / Part-time',
      description: 'Provide personal care assistance including bathing, dressing, grooming, and mobility support.',
      requirements: ['Active CNA license', '1+ years experience preferred', 'Excellent communication skills']
    },
    {
      title: 'Home Health Aide (HHA)',
      type: 'Full-time / Part-time',
      description: 'Assist clients with daily activities, medication reminders, and light housekeeping duties.',
      requirements: ['HHA certification', 'Compassionate personality', 'Reliable transportation']
    },
    {
      title: 'Companion Caregiver',
      type: 'Part-time / Per-diem',
      description: 'Provide companionship, social interaction, and assistance with daily activities.',
      requirements: ['High school diploma', 'Previous caregiving experience', 'Patience and empathy']
    },
    {
      title: 'Live-in Caregiver',
      type: 'Full-time',
      description: 'Provide 24-hour care and supervision for clients requiring continuous support.',
      requirements: ['CNA or HHA certification', '2+ years experience', 'Ability to work extended hours']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      {/* Header */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make a difference in people's lives while building a rewarding career. LifeServe Solutions is always 
              looking for compassionate, dedicated professionals to join our team of caregivers.
            </p>
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work With LifeServe Solutions?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in supporting our team members so they can provide the best possible care to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Openings */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our current job opportunities and find the perfect position that matches your skills and career goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {position.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Requirements:</h4>
                  {position.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Qualifications */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">General Qualifications</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're looking for dedicated professionals who share our commitment to providing exceptional care. 
                While specific requirements vary by position, here are the general qualifications we seek:
              </p>
              <div className="space-y-3">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:text-right">
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional Caregiver"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined application process makes it easy to join our team and start making a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600">Submit your application and resume through our online portal.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600">Participate in a comprehensive interview to discuss your experience and goals.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Background Check</h3>
              <p className="text-gray-600">Complete background verification and reference checks.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Onboarding</h3>
              <p className="text-gray-600">Complete orientation and training to begin your career with us.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg md:text-xl mb-8">
            Join our team of compassionate professionals and start a rewarding career in home care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Apply Now
            </a>
            <a
              href="tel:+1234567890"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Call (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staffing;