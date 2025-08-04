import React from 'react';
import { Heart, Users, Home, Clock, Shield, Star, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Personal Care Services',
      description: 'Comprehensive personal care assistance including bathing, dressing, grooming, and mobility support.',
      features: ['Bathing and hygiene assistance', 'Dressing and grooming', 'Mobility support', 'Medication reminders'],
      price: 'Starting at $25/hour'
    },
    {
      icon: Home,
      title: 'Homemaker Services',
      description: 'Complete household management including cleaning, cooking, and maintaining a safe living environment.',
      features: ['Light housekeeping', 'Meal preparation', 'Laundry services', 'Grocery shopping'],
      price: 'Starting at $20/hour'
    },
    {
      icon: Users,
      title: 'Companion Care',
      description: 'Social interaction and emotional support to enhance quality of life and reduce isolation.',
      features: ['Social interaction', 'Recreational activities', 'Transportation assistance', 'Emotional support'],
      price: 'Starting at $18/hour'
    },
    {
      icon: Clock,
      title: '24/7 Live-in Care',
      description: 'Round-the-clock care for clients who need continuous support and supervision.',
      features: ['24-hour supervision', 'Personal care assistance', 'Household management', 'Emergency response'],
      price: 'Starting at $200/day'
    },
    {
      icon: Shield,
      title: 'Specialized Care',
      description: 'Expert care for clients with specific medical conditions like dementia, Alzheimer\'s, or disabilities.',
      features: ['Dementia care', 'Alzheimer\'s support', 'Disability assistance', 'Post-hospital care'],
      price: 'Starting at $30/hour'
    },
    {
      icon: Star,
      title: 'Respite Care',
      description: 'Temporary care services to give family caregivers a break while ensuring continued quality care.',
      features: ['Short-term care', 'Flexible scheduling', 'Family caregiver support', 'Peace of mind'],
      price: 'Starting at $22/hour'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      {/* Header */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LifeServe Solutions offers comprehensive home care services designed to meet the unique needs of each client. 
              Our professional caregivers are trained to provide compassionate, reliable care that enhances quality of life 
              and promotes independence.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-lg font-semibold text-blue-600">{service.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose LifeServe Solutions?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional care that makes a real difference in our clients' lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">All our caregivers are licensed, bonded, and fully insured for your protection.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Experienced Team</h3>
              <p className="text-gray-600">Our caregivers have years of experience in providing quality home care services.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-fit mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">We're available round the clock to provide care when you need it most.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-fit mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassionate Care</h3>
              <p className="text-gray-600">We treat every client with dignity, respect, and genuine compassion.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8">
            Contact us today to discuss your care needs and create a personalized care plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Call (123) 456-7890
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;