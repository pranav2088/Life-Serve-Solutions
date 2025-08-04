import React from 'react';
import { Heart, Users, Award, Clock, Target, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10+', label: 'Years of Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Professional Caregivers' },
    { number: '24/7', label: 'Available Support' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every client with genuine care and empathy, understanding that each person has unique needs and deserves to be treated with dignity.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building trust through transparency, reliability, and consistent quality care. Our clients and their families can depend on us completely.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, continuously improving our services and maintaining the highest standards of care.'
    },
    {
      icon: Users,
      title: 'Family',
      description: 'We treat our clients as family members, creating warm, supportive relationships that enhance their quality of life and well-being.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'With 15 years of experience in healthcare management, Sarah founded LifeServe Solutions to provide compassionate, personalized care to families in need.'
    },
    {
      name: 'Michael Chen',
      role: 'Director of Care',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Michael oversees our care operations and ensures that every client receives the highest quality of service from our professional caregivers.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Client Relations Manager',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Emily works closely with clients and families to develop personalized care plans that meet each individual\'s specific needs and preferences.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      {/* Header */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About LifeServe Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded with a mission to provide exceptional home care services, LifeServe Solutions has been serving 
              families with compassion, professionalism, and dedication for over a decade.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                LifeServe Solutions was born out of a personal experience. Our founder, Sarah Johnson, witnessed firsthand 
                the challenges families face when caring for aging parents. She realized there was a need for compassionate, 
                professional home care services that truly understood the unique needs of each family.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small home care agency has grown into a trusted partner for hundreds of families across 
                the region. We've built our reputation on the foundation of trust, quality care, and genuine compassion 
                for those we serve.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to honor that original vision by providing personalized care that allows individuals 
                to maintain their independence and dignity in the comfort of their own homes.
              </p>
            </div>
            <div className="lg:text-right">
              <img
                src="https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Story"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To provide exceptional, compassionate home care services that enhance the quality of life for our clients 
                while giving families peace of mind. We're committed to helping individuals maintain their independence 
                and dignity in the comfort of their own homes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the leading provider of home care services, recognized for our commitment to excellence, compassionate 
                care, and innovative solutions that meet the evolving needs of our clients and their families.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape the way we interact with our clients, families, and team members.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-full flex-shrink-0">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who lead LifeServe Solutions with passion, expertise, and commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the LifeServe Difference?</h2>
          <p className="text-lg md:text-xl mb-8">
            Contact us today to learn more about how we can help you or your loved one live comfortably at home.
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
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;