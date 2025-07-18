
import { 
  Database, 
  Network, 
  Layers, 
  Shield, 
  Monitor, 
  Headphones 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: "IT Facility Management",
      description: "Complete IT infrastructure management and support services"
    },
    {
      icon: <Network className="w-8 h-8 text-orange-500" />,
      title: "LAN/WAN Management",
      description: "Network setup, configuration and ongoing management"
    },
    {
      icon: <Layers className="w-8 h-8 text-orange-500" />,
      title: "System Integration",
      description: "Seamless integration of hardware and software solutions"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Security Solutions",
      description: "Enterprise security and surveillance systems"
    },
    {
      icon: <Monitor className="w-8 h-8 text-orange-500" />,
      title: "Office Automation",
      description: "LCD Monitors, Projectors and Video Wall solutions"
    },
    {
      icon: <Headphones className="w-8 h-8 text-orange-500" />,
      title: "AV Integration",
      description: "Audio visual and environment control solutions"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600">We provide comprehensive IT solutions for businesses of all sizes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
