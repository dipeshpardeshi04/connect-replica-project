
import Header from "@/components/Header";
import { Target, Users, Shield, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Megabyte Systems</h1>
          <p className="text-lg text-gray-600">Your trusted partner in comprehensive IT solutions and services</p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Who We Are</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Megabyte Systems is a leading provider of comprehensive IT solutions, specializing in IT Facility Management, 
              System Integration, Network Solutions, and Business Software Development. With years of experience serving 
              diverse sectors including government, private enterprises, and educational institutions, we have established 
              ourselves as a trusted technology partner.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our expertise spans across Hardware Solutions, Communication Solutions, Networks, and cutting-edge software 
              development, making us your one-stop solution for all IT needs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide cutting-edge IT solutions that empower businesses to achieve 
                their goals efficiently and effectively.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Team</h3>
              <p className="text-gray-600">
                Experienced professionals with deep expertise in various IT domains, 
                committed to delivering excellence.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                We maintain the highest standards of quality in all our services and 
                solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock support to ensure your business operations never come 
                to a halt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Solutions</h3>
                  <p className="text-gray-600">
                    From hardware to software, we provide end-to-end IT solutions under 
                    one roof.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">
                    Over 90% uptime and 100% client satisfaction across all our projects.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Brand Support</h3>
                  <p className="text-gray-600">
                    We maintain equipment from all major brands including HP, IBM, Dell, 
                    and more.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
              <p className="text-gray-600 italic leading-relaxed">
                "We are not elitist! We maintain all the equipment we supply 
                as well as the stuff supplied by third parties. Our commitment 
                is to ensure your business operations run smoothly, regardless 
                of the equipment's origin."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">90%+</div>
              <p className="text-orange-100 text-lg">System Uptime</p>
            </div>
            
            <div>
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <p className="text-orange-100 text-lg">Client Satisfaction</p>
            </div>
            
            <div>
              <div className="text-5xl font-bold text-white mb-2">100+</div>
              <p className="text-orange-100 text-lg">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
