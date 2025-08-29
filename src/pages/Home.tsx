import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, TrendingUp, Shield, FileText, Target } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Expert Guidance',
      description: 'Professional food safety consultation from industry experts with years of experience.'
    },
    {
      icon: Target,
      title: 'Customized Solutions',
      description: 'Tailored approaches that fit your specific business needs and regulatory requirements.'
    },
    {
      icon: CheckCircle,
      title: 'Risk Mitigation',
      description: 'Comprehensive risk assessment and management strategies to protect your business.'
    },
    {
      icon: Award,
      title: 'Enhanced Reputation',
      description: 'Build trust with customers through demonstrated commitment to food safety excellence.'
    }
  ];

  const stats = [
    { number: '100+', label: 'Clients Served' },
    { number: '50+', label: 'Successful Audits' },
    { number: '24/7', label: 'Support Available' },
    { number: '99%', label: 'Compliance Rate' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-teal-100 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
                Your Assurance in Food Compliance
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Partner in{' '}
                <span className="text-teal-600">Food Safety Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Ensuring your food products meet the highest standards of safety and compliance. 
                Where safety meets compliance for lasting business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-all duration-200 transform hover:scale-105 text-center"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-600 hover:text-white transition-all duration-200 text-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/heroimage.jpg"
                alt="Food safety inspection team at work"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Certified Excellence</p>
                    <p className="text-sm text-gray-600">GFSI Standards Compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Food Circle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep industry expertise with personalized service to ensure your food business meets and exceeds safety standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-teal-50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-700 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-teal-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Food Safety Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From consultation to compliance, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Food safety consultation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Consultancy Services</h3>
                <p className="text-gray-600 mb-4">
                  Expert guidance and tailored solutions for food safety compliance across all industry sectors.
                </p>
                <Link
                  to="/services"
                  className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-200"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/5327654/pexels-photo-5327654.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Documentation support"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Documentation Support</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive assistance with food safety documentation and risk management compliance.
                </p>
                <Link
                  to="/services"
                  className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-200"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Specialized programmes"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Programmes</h3>
                <p className="text-gray-600 mb-4">
                  Woolworths SEP, GFSI Standards, and Costco Supplier programmes with expert support.
                </p>
                <Link
                  to="/services"
                  className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-200"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Elevate Your Food Safety Standards?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses who trust Food Circle for their compliance and safety needs.
          </p>
          <Link
            to="/contact"
            className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-all duration-200 transform hover:scale-105 inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;