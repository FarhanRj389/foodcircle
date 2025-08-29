import React from 'react';
import { CheckCircle, Users, Target, Award, Shield, Globe, TrendingUp, FileText } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Expert Guidance',
      description: 'Seasoned professionals with deep knowledge of food safety regulations and best practices.'
    },
    {
      icon: Target,
      title: 'Customized Solutions',
      description: 'Tailored approaches that address your unique business challenges and requirements.'
    },
    {
      icon: CheckCircle,
      title: 'Risk Mitigation',
      description: 'Proactive strategies to identify, assess, and minimize food safety risks in your operations.'
    },
    {
      icon: Award,
      title: 'Enhanced Reputation',
      description: 'Build customer trust and market credibility through demonstrated safety excellence.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Food Circle is your trusted partner in achieving and maintaining excellence in food safety and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Food safety team"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Excellence Since 2024
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Food Circle is a highly esteemed food safety solutions provider based in New Zealand, 
                serving clients since 2024. We specialize in Food Control Plans, Risk Programmes, 
                and comprehensive quality assurance systems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our team of dedicated professionals brings together years of industry experience, 
                regulatory knowledge, and practical insights to help your business thrive in today's 
                competitive food safety landscape.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">New Zealand Based</h4>
                  <p className="text-gray-600">Serving clients nationwide and internationally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
            To be the trusted partner for food businesses worldwide, offering reliable, efficient, 
            and cost-effective consultation that ensures compliance, reduces risk, and enhances 
            operational excellence in food safety management.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full group-hover:bg-teal-600 transition-colors duration-300">
                    <value.icon className="h-6 w-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Excellence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Industry-Leading Expertise
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our team consists of certified food safety professionals, regulatory experts, 
                and industry veterans who understand the complexities of modern food business operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">HACCP Certified Professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">GFSI Standards Experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">Regulatory Compliance Specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">Audit and Assessment Professionals</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8844066/pexels-photo-8844066.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional team meeting"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Quality control inspection"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Commitment to Quality
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                We don't just help you meet standards – we help you exceed them. Our comprehensive 
                approach ensures that your food safety systems are robust, sustainable, and designed 
                for long-term success in an ever-evolving regulatory environment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-teal-400" />
                  <span className="text-gray-300">ISO Standards Compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-teal-400" />
                  <span className="text-gray-300">Experienced Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-teal-400" />
                  <span className="text-gray-300">Proven Results</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-teal-400" />
                  <span className="text-gray-300">Comprehensive Documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;