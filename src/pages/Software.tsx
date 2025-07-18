
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Code, ShoppingCart, Smartphone, Globe } from "lucide-react";

const Software = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Software Development</h1>
          <p className="text-lg text-gray-600">Comprehensive software solutions tailored to your business needs</p>
        </div>
      </section>

      {/* Software Development Science Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Software Development Science?</h2>
          <p className="text-gray-700 mb-12 leading-relaxed">
            All Megabyte Group Company develop customized software for users as per the requirements. We combine cutting-edge technology with 
            innovative design to deliver solutions that drive business growth and enhance user experience.
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Software Development */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <Code className="w-12 h-12 text-orange-500 mr-4" />
                <div>
                  <p className="text-sm text-orange-500 uppercase tracking-wide">Custom Solutions for Corporate Level</p>
                  <h3 className="text-xl font-bold text-gray-900">Software Development</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you are at corporate level you are at the right place to get your 
                customized Megabyte Group is a fast progressing end-to-end 
                technology services company based in Pune, India. We offer an 
                extensive range of software development, study cloud, mobile 
                applications, Software development to the global clients.
              </p>
              <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">Learn More →</a>
            </div>

            {/* Ecommerce */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <ShoppingCart className="w-12 h-12 text-orange-500 mr-4" />
                <div>
                  <p className="text-sm text-orange-500 uppercase tracking-wide">World-Class Ecommerce Platforms</p>
                  <h3 className="text-xl font-bold text-gray-900">Ecommerce, Done Right!</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We have developed some world best ecommerce sites 
                optimized enterprise platform with cutting-edge technology and 
                user-friendly interfaces.
              </p>
              <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">Learn More →</a>
            </div>

            {/* Mobile App Development */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <Smartphone className="w-12 h-12 text-orange-500 mr-4" />
                <div>
                  <p className="text-sm text-orange-500 uppercase tracking-wide">Mobile App Specialists</p>
                  <h3 className="text-xl font-bold text-gray-900">iPhone/Android App Development</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our Android/IOS App Development team is there to make an app 
                as per your requirements with modern design principles and 
                optimal performance.
              </p>
              <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">Learn More →</a>
            </div>

            {/* Web Development */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-4">
                <Globe className="w-12 h-12 text-orange-500 mr-4" />
                <div>
                  <p className="text-sm text-orange-500 uppercase tracking-wide">Creative Web Solutions</p>
                  <h3 className="text-xl font-bold text-gray-900">Dream Website Development</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your dream, our work! We will provide you websites or 
                applications with best creative designing using latest technologies 
                including CSS4 and responsive frameworks.
              </p>
              <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-slate-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Technologies We Work With</h2>
          <p className="text-gray-300 mb-12">We use the latest technologies to build robust and scalable solutions</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-orange-500 font-bold text-lg">React</h3>
            </div>
            <div className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-orange-500 font-bold text-lg">Angular</h3>
            </div>
            <div className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-orange-500 font-bold text-lg">Node.js</h3>
            </div>
            <div className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-orange-500 font-bold text-lg">Python</h3>
            </div>
            <div className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-orange-500 font-bold text-lg">Java</h3>
            </div>
            <div className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-orange-500 font-bold text-lg">PHP</h3>
            </div>
            <div className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-orange-500 font-bold text-lg">iOS</h3>
            </div>
            <div className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-orange-500 font-bold text-lg">Android</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-orange-100 mb-8">Let's discuss how we can bring your software vision to life</p>
          <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Software;
