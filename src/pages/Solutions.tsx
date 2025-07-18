
import Header from "../components/Header";
import { Target, Users, Truck, Shield, CheckCircle } from "lucide-react";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h1>
          <p className="text-lg text-gray-600">Constructive and collaborative approach to solving IT challenges</p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Approach</h2>
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-gray-700 leading-relaxed">
              We at Megabyte Systems adopt a constructive and collaborative approach to solving our clients IT challenges. 
              Our success is our ability to design systems that are well balanced in terms of compute power, data 
              management and power consumption.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We understand the demands and design systems that are optimised to the requirements of the applications. We 
              prefer where possible to build our solutions upon <span className="text-orange-500 font-semibold">IBM/Dell/HP servers & storage technology</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Capabilities</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <Target className="w-8 h-8 text-orange-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Business-Driven Approach</h3>
                <p className="text-gray-700">We see beyond technology to help you truly benefit from your IT investment</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Users className="w-8 h-8 text-orange-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Specialist Engineers</h3>
                <p className="text-gray-700">All system engineers and support staff are specialists with sound technical experience</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Truck className="w-8 h-8 text-orange-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Delivery</h3>
                <p className="text-gray-700">On-time and on-budget delivery with world-class proven technology</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-orange-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Risk Mitigation</h3>
                <p className="text-gray-700">Trust our proven ability and quality of service for business and IT change</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partnership Model Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Partnership Model</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Network augmented by products from other leading hardware and 
                software technology vendors and services from our experienced and 
                qualified engineers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By working closely with our partners and our clients, we are able to 
                design tailor-made, best-of-breed solutions to meet requirements.
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What You Get</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Well balanced, cost effective systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Industry leading components</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Experienced integration team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Tailor-made support arrangements</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Delivery Promise Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Delivery Promise</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">World Class Technology</h3>
              <p className="text-orange-100">Proven technology to support your business processes</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Risk Mitigation</h3>
              <p className="text-orange-100">Comfortable assurance for business and IT change</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Guaranteed Delivery</h3>
              <p className="text-orange-100">On time and to budget, every time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborative Results Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Collaborative Results</h2>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed">
              Our collaborative model results in customers receiving a well balanced, cost effective system built from industry 
              leading components, integrated by our experienced team and delivered with tailor-made support arrangements 
              to guarantee maximum utilisation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
