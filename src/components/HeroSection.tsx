
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#0a0f1f] via-[#1b1e2f] to-[#4a1d0d] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-4">Megabyte Systems</h1>
          <h2 className="text-3xl text-orange-400 mb-8">Provides Excellence</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Expert IT solutions including System Integration, Server & PC Solutions, Storage
            Solutions, Business Software Solutions and comprehensive IT services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium">
              Our Services →
            </Button>
            <Button variant="outline" className="border-white text-orange-500 hover:bg-white hover:text-orange-400 px-8 py-3 rounded-md">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
