import Header from "../components/Header";
import { Building, Building2, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Clientele = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Clientele</h1>
          <p className="text-lg text-gray-600">Trusted by leading organizations across various sectors</p>
        </div>
      </section>

      {/* Our Valuable Customers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Our Valuable Customers</h2>
          <p className="text-center text-gray-600 mb-12">
            We are proud to serve a diverse range of clients from government institutions to private enterprises, educational institutions, and various other sectors.
          </p>

          {/* Government Sectors */}
          <div className="mb-8">
            <div className="bg-orange-500 text-white px-6 py-4 rounded-t-lg flex items-center">
              <Building className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold">Government Sectors</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-b-lg p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-gray-700 font-medium mb-2">Indian Air Force 9 BRD, Viman Nagar, Pune</p>
                  <p className="text-gray-700 font-medium mb-2">R & D, Dighi, Pune</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium mb-2">Indian Air Force 2 Wing, Lohegaon, Pune</p>
                  <p className="text-gray-700 font-medium mb-2">ESSL, Kharadi, Pune</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium mb-2">ARDE, Pashan, Pune</p>
                </div>
              </div>
            </div>
          </div>

          {/* Public Sectors & Private Sectors */}
          <div className="mb-8">
            <div className="bg-orange-500 text-white px-6 py-4 rounded-t-lg flex items-center">
              <Building2 className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold">Public Sectors & Private Sectors</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-b-lg p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">M/s Bharat Forge Ltd, Mundhwa, Pune</p>
                  <p className="text-gray-700 font-medium">M/s CHRB Hyderabad and Pune</p>
                  <p className="text-gray-700 font-medium">M/s Oriental Rubber Industries Ltd., Pune</p>
                  <p className="text-gray-700 font-medium">M/s Centro Combustion India Pvt. Ltd</p>
                  <p className="text-gray-700 font-medium">M/s Sandhar Technologies India Pvt. Ltd</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">M/s Symantec Software India Pvt. Ltd</p>
                  <p className="text-gray-700 font-medium">M/s Fujifilm Sericol India Pvt. Ltd.</p>
                  <p className="text-gray-700 font-medium">M/s Hyundai Construction Equipment Pvt. Ltd, Pune</p>
                  <p className="text-gray-700 font-medium">M/s LAL Group, Sanaswadi, Pune</p>
                  <p className="text-gray-700 font-medium">M/s Stanton India Pvt. Ltd</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">M/s Sapeno Technologies India Pvt. Ltd, Hyderabad</p>
                  <p className="text-gray-700 font-medium">M/s Gita IT, Pune</p>
                  <p className="text-gray-700 font-medium">M/s Wika Instruments India Pvt. Ltd, Pune</p>
                  <p className="text-gray-700 font-medium">M/s Miltech India Pvt. Ltd</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Sectors */}
          <div className="mb-8">
            <div className="bg-orange-500 text-white px-6 py-4 rounded-t-lg flex items-center">
              <GraduationCap className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold">Education Sectors</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-b-lg p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">Rai Institute of Management Studies, Pune</p>
                  <p className="text-gray-700 font-medium">Kendriya Vidyalaya No. 1, Pune</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">Lexicon International School, Pune</p>
                  <p className="text-gray-700 font-medium">Poona College, Pune</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">Air Force School, Pune</p>
                </div>
              </div>
            </div>
          </div>

          {/* Others */}
          <div className="mb-12">
            <div className="bg-orange-500 text-white px-6 py-4 rounded-t-lg flex items-center">
              <Users className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold">Others</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-b-lg p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">M/s Fujifilm Sericol India Pvt. Ltd</p>
                  <p className="text-gray-700 font-medium">M/s Punjab and Sindh Bank Ltd</p>
                  <p className="text-gray-700 font-medium">M/s Zamil IT Solutions Pvt. Ltd</p>
                  <p className="text-gray-700 font-medium">M/s Aaya Global India Pvt. Ltd, Magarpatta City, Pune</p>
                  <p className="text-gray-700 font-medium">Ip Access Pvt. Ltd</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">M/s Cell Tech India Pvt. Ltd</p>
                  <p className="text-gray-700 font-medium">M/s Standard Charted Bank., JM Rd., Pune</p>
                  <p className="text-gray-700 font-medium">M/s Zamil Steel Pvt. Ltd</p>
                  <p className="text-gray-700 font-medium">M/s RSB Transmission Pvt. Ltd, Pune</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">M/s Global Properties Pvt. Ltd</p>
                  <p className="text-gray-700 font-medium">M/s Shanno Vithal Co., Opp Bank, Pune</p>
                  <p className="text-gray-700 font-medium">M/s General Energy Management Service Pvt. Ltd</p>
                  <p className="text-gray-700 font-medium">M/s Dental Pvt. Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Track Record Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Our Track Record</h2>
          <p className="text-gray-300 text-center mb-12">Numbers that speak for our commitment to excellence</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">100+</div>
              <div className="text-white">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">90%+</div>
              <div className="text-white">Uptime Record</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-white">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-white">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Growing Family Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Growing Family</h2>
          <p className="text-gray-600 mb-8">Ready to experience the same level of service that our clients trust?</p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Clientele;
