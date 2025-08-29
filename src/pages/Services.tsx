import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Users, CheckCircle, Award, Target } from 'lucide-react';

const Services: React.FC = () => {
  const mainServices = [
    {
      icon: Shield,
      title: 'Consultancy Services',
      description: 'Expert guidance and tailored solutions for food safety compliance.',
      details: [
        'Food Control Plan Development',
        'HACCP Implementation',
        'Risk Assessment & Management',
        'Regulatory Compliance Guidance',
        'Quality System Development'
      ],
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: FileText,
      title: 'Eat Safe Documentation Support',
      description: 'Assistance with food safety documentation and risk management compliance.',
      details: [
        'Documentation Review & Development',
        'Risk Management Plans',
        'Compliance Auditing',
        'Training Materials Creation',
        'Standard Operating Procedures'
      ],
      image: 'https://images.pexels.com/photos/5327654/pexels-photo-5327654.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const specializedServices = [
    {
      title: 'Woolworths Supplier Excellence Programme (SEP) Consultation',
      description: 'Specialized consulting services aimed at assisting suppliers in meeting the stringent requirements and standards set forth by Woolworths, a major retailer in Australia',
      image: '/Woolworths Supplier.png'
    },
    {
      title: 'GSFI Standards (SQF & BRCGS) Consultation',
      description: 'Consultation involves helping suppliers implement and maintain GFSI-certified systems, such as SQF (Safe Quality Food), BRC (British Retail Consortium), or FSSC 22000 (Food Safety System Certification)',
      image: '/GSFI Standard.png',
      
    },
    {
      title: 'Costco Supplier Approved Programme',
      description: 'Focuses on meeting Costco’s specific requirements and standards for suppliers, including food safety, quality assurance, labeling, packaging, and other compliance aspects',
     image: '/Costco supplier.jpg'
    },
    {
      title: 'Hello Fresh Approved Supplier Programme',
      description: 'Consultancy service aimed at ensuring suppliers meet Hello Fresh’s requirements for quality, safety, and operational standards to supply ingredients or products for Hello Fresh meal kits',
      image: '/hello fresh.png'
    },
    {
      title: 'My Food Bag Approved Supplier Programme',
      description: 'Programme ensuring suppliers meet the specific standards and requirements set by My Food Bag for their meal kit ingredients or products',
      image: '/my food bag.jpg'
      
    },
    {
      title: 'Coles Approved Supplier Programme (CFMSR)',
      description: 'Helps suppliers comply with Coles’ standards under their Supplier Programme, which includes food safety, quality, traceability, sustainability, and ethical sourcing practices',
      image: '/coles approved.png'
     
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What We Offer?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive food safety solutions designed to protect your business and ensure regulatory compliance.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-teal-100 p-3 rounded-full w-fit mb-6">
                    <service.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-200 inline-block"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Specialized Supplier Programmes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert consultation for major retailer and industry-specific compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="bg-white p-4 rounded-full w-fit mx-auto mb-6 border border-transparent group-hover:border-black/20 transition-colors duration-300">
                  <img src={service.image} className="h-12 w-24 object-contain text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center mb-6">
                  {service.description}
                </p>
                {/* <div className="text-center">
                  <Link
                    to="/contact"
                    className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-200"
                  >
                    Learn More →
                  </Link>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Consultation Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to achieving food safety excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Assessment',
                description: 'Comprehensive evaluation of your current food safety systems and practices.'
              },
              {
                step: '02',
                title: 'Custom Planning',
                description: 'Development of tailored solutions that address your specific compliance needs.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Guided implementation with ongoing support and expert oversight.'
              },
              {
                step: '04',
                title: 'Ongoing Support',
                description: 'Continuous monitoring, updates, and support to maintain compliance excellence.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Enhance Your Food Safety Standards?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help your business achieve and maintain excellence in food safety compliance.
          </p>
          <Link
            to="/contact"
            className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-all duration-200 transform hover:scale-105 inline-block"
          >
            Start Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;