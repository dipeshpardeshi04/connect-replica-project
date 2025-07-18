
const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">All Makes & Models Repaired</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Experts at handling projects for the building and setting up of Hardware
              Solutions, Communication Solutions, Networks, and so on, we may be
              just the thing you are looking for to get your concern going or making it
              more efficient!
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We also deal in Computers, Printers, Modems, Scanners, Monitors, Multi-
              Media Kits and peripherals from such names as <span className="text-orange-500 font-semibold">Wipro-Acer, HP, IBM,
              Epson, Multitech, Hayes, UMAX, and Creative.</span>
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">90%+</div>
                <p className="text-gray-600">Uptime Track Record</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
            <p className="text-gray-600 leading-relaxed">
              We maintain all the equipment we supply as well as the stuff supplied by
              third parties. We are not elitist!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
