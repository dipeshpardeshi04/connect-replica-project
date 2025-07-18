
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-orange-400 to-orange-600 py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
        <p className="text-xl mb-8 opacity-90">
          Our Annual Maintenance Contracts serve organizations, large and small
        </p>
        <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg">
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
