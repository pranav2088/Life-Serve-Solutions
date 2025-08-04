import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Users, Target, Award, Clock, ArrowRight, Heart, Star, Shield, CheckCircle } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.pexels.com/photos/7709178/pexels-photo-7709178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      title: 'Exceptional Home Care Services',
      subtitle: 'Compassionate care that enhances quality of life and promotes independence',
      cta: 'Discover Our Services'
    },
    {
      image: 'https://images.pexels.com/photos/5560019/pexels-photo-5560019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      title: 'Licensed & Trusted Caregivers',
      subtitle: 'Professional, compassionate support from certified healthcare professionals',
      cta: 'Meet Our Team'
    },
    {
      image: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      title: '24/7 Reliable Support',
      subtitle: 'Round-the-clock availability ensuring peace of mind for you and your family',
      cta: 'Contact Us Today'
    }
  ];

  const featuredServices = [
    {
      title: 'Personal Care Services',
      description: 'Comprehensive assistance with daily activities including bathing, dressing, grooming, and mobility support.',
      icon: Heart,
      features: ['Bathing & Hygiene', 'Medication Management', 'Mobility Assistance']
    },
    {
      title: 'Companion Care',
      description: 'Social interaction and emotional support to enhance quality of life and reduce isolation.',
      icon: Users,
      features: ['Social Activities', 'Transportation', 'Emotional Support']
    },
    {
      title: 'Specialized Care',
      description: 'Expert care for clients with specific medical conditions including dementia and Alzheimer\'s.',
      icon: Target,
      features: ['Dementia Care', 'Post-Hospital Care', 'Disability Support']
    },
    {
      title: 'Live-in Care',
      description: '24-hour comprehensive care for clients requiring continuous support and supervision.',
      icon: Shield,
      features: ['24/7 Supervision', 'Emergency Response', 'Household Management']
    }
  ];

  const goals = [
    {
      icon: Users,
      title: 'Personalized Care Plans',
      description: 'Tailored care solutions designed around each client\'s unique needs, preferences, and lifestyle.',
      stat: '500+ Satisfied Clients'
    },
    {
      icon: Target,
      title: 'Clinical Excellence',
      description: 'Maintaining the highest standards of care through continuous training and quality assurance.',
      stat: '98% Client Satisfaction'
    },
    {
      icon: Award,
      title: 'Licensed Professionals',
      description: 'All caregivers are licensed, bonded, and insured with extensive background screening.',
      stat: '50+ Certified Caregivers'
    },
    {
      icon: Clock,
      title: 'Emergency Response',
      description: 'Immediate response capabilities with 24/7 on-call support for urgent situations.',
      stat: '24/7 Availability'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <div className="relative h-screen overflow-hidden bg-gray-900">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-5xl px-4">
                  <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-12 leading-relaxed font-light max-w-3xl mx-auto">
                    {slide.subtitle}
                  </p>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 inline-flex items-center"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Featured Services */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Star className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold text-sm">FEATURED SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive Care Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional home care services designed to enhance independence, dignity, and quality of life for individuals and families.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-xl w-fit mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                <Heart className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-blue-600 font-semibold text-sm">ABOUT US</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Compassionate Care, <span className="text-blue-600">Professional Excellence</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over a decade of experience, LifeServe Solutions has been the trusted partner for families seeking 
                exceptional home care services. Our mission is to enhance quality of life while providing peace of mind.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Every individual deserves personalized care. Our certified professionals deliver exceptional service with 
                dignity, respect, and unwavering commitment to your family's well-being.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Happy Families</div>
                </div>
              </div>
              <Link
                to="/about"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
              >
                Learn More About Us
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="LifeServe Solutions"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl shadow-xl">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">5.0</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Target className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-600 font-semibold text-sm">OUR COMMITMENT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Excellence in Every Aspect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our unwavering commitment to quality care is reflected in everything we do, from initial consultation to ongoing support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl w-fit mx-auto mb-6 shadow-lg">
                  <goal.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{goal.stat}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{goal.title}</h3>
                <p className="text-gray-600 leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
              Experience the LifeServe difference. Contact us today for a free consultation and personalized care assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <a
                href="tel:+1234567890"
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                Call (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Message */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Thank You for Trusting LifeServe Solutions
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Your confidence in our services inspires us every day. We're honored to be part of your family's journey 
              and committed to providing exceptional care that makes a meaningful difference in your lives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;