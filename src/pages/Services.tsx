
import Header from "@/components/Header";
import { 
  Database, 
  HardDrive, 
  MessageSquare, 
  Users, 
  Network, 
  Smartphone, 
  Shield, 
  Server,
  Sun,
  Settings,
  Calendar,
  GraduationCap
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: "I.T Setups",
      description: "Complete IT infrastructure setup and network support solutions for modern businesses."
    },
    {
      icon: <HardDrive className="w-8 h-8 text-orange-500" />,
      title: "Computer Hardware Annual Maintenance",
      description: "Comprehensive maintenance contracts for all your hardware needs with guaranteed uptime."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
      title: "Interactive Whiteboard",
      description: "Advanced interactive whiteboards with multi-touch integration and data interactivity."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Consulting Services",
      description: "Expert IT consulting to help you make informed technology investment decisions."
    },
    {
      icon: <Network className="w-8 h-8 text-orange-500" />,
      title: "Existing IT Infrastructure Maintenance",
      description: "Professional maintenance support for hardware from all contractors and vendors."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: "PC Rental Services",
      description: "Flexible PC rental solutions for short-term projects and temporary workforce expansion."
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Security Services",
      description: "Enterprise security solutions including firewall, web security, and network protection."
    },
    {
      icon: <Server className="w-8 h-8 text-orange-500" />,
      title: "Data Center Setups",
      description: "Complete data center architecture from basic setups to Tier IV compliant solutions."
    },
    {
      icon: <Sun className="w-8 h-8 text-orange-500" />,
      title: "Indux Solar",
      description: "Comprehensive solar energy solutions for residential, commercial, and industrial applications."
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      title: "Indux Technology",
      description: "Advanced IoT implementations, automation systems, and cutting-edge technology integrations."
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
      title: "Indux Properties",
      description: "Real estate and property management with integrated technology infrastructure solutions."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-orange-500" />,
      title: "Internsland",
      description: "Professional internship and training programs to develop skilled IT professionals for the industry."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Services Header */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Installation & Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Network Installation & Support</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Hardware & Software Installation */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hardware & Software Installation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team of certified engineering and technical support staff has sound 
                  experience in installing and supporting Windows and Linux networks. 
                  We understand and tailor networking solutions to your company's 
                  specific needs.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Structured Cabling</h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide solutions for Data, Voice and Surveillance Networks based 
                  on office premises over the area by LAN (Local Area Networks) and 
                  WAN (Wide Area Networks).
                </p>
              </div>
            </div>

            {/* VPN & Wireless Network */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">VPN: Virtual Private Networks</h3>
                <p className="text-gray-600 leading-relaxed">
                  VPN extends a private network across public networks like the Internet, 
                  enabling secure data transmission with all the functionality, security and 
                  management policies of a private network.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wireless Network</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wireless networks are powerful tools for boosting productivity and 
                  encouraging information sharing, providing constant access to 
                  documents, emails, and applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
