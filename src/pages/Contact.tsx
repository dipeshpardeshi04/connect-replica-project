
import Header from "../components/Header";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with our team for all your IT solution needs</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Office Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Offices</h2>
              
              {/* Head Office - PUNE */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-orange-500 mb-4">Head Office - PUNE</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                    <p className="text-gray-700">Survey No 5/2, Ground Floor Geeta Paradise, Opp IT Tower Zensar, Nr Sai Shrusti Society, Kharadi, Pune - 411014 (Maharashtra) India.</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <div className="text-gray-700">
                      <p>+91-20-27001514</p>
                      <p>+91-20-27015514</p>
                      <p>+91-8554008004</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <div className="text-gray-700">
                      <p>admin@megabytegroup.in</p>
                      <p>accounts@megabytegroup.in</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PUNE Branch Office */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-orange-500 mb-4">PUNE Branch Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                    <p className="text-gray-700">5 D Lunkad Garden, Viman Nagar, Pune - 411014 (Maharashtra) India.</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <p className="text-gray-700">+91-9766281622</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <p className="text-gray-700">info@megabytegroup.in</p>
                  </div>
                </div>
              </div>

              {/* Hyderabad Branch Office */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-orange-500 mb-4">Hyderabad Branch Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                    <p className="text-gray-700">Plot No 6/3 Road No 14, Nachram, Hyderabad, (Telangana) India.</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <p className="text-gray-700">+91-7225871877</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <p className="text-gray-700">admin@megabytegroup.in</p>
                  </div>
                </div>
              </div>

              {/* Jaipur Branch Office */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-orange-500 mb-4">Jaipur Branch Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                    <p className="text-gray-700">Vidhyakar nagar, Sikar Road, Jaipur (Rajasthan) India</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <p className="text-gray-700">+91-9850281622</p>
                  </div>
                </div>
              </div>

              {/* Delhi Office */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-orange-500 mb-4">Delhi Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                    <p className="text-gray-700">Naraina, New Delhi, India</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <div className="text-gray-700">
                      <p>+91-7709181818</p>
                      <p>+91-9850-281622</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700">Name *</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter Here"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">E-Mail *</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="Enter Here"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="mobile" className="text-gray-700">Mobile No. *</Label>
                  <Input 
                    id="mobile" 
                    placeholder="Enter Here"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="enquiry" className="text-gray-700">Your Enquiry</Label>
                  <Textarea 
                    id="enquiry" 
                    placeholder="Enter Here"
                    className="mt-2 min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
