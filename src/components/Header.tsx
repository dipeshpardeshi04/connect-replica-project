
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Megabyte Systems</h1>
              <p className="text-sm text-gray-600">IT Solutions & Services</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">HOME</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">ABOUT US</a>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-orange-500 flex items-center">
                SERVICES
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <a href="#" className="text-gray-700 hover:text-orange-500">CLIENTELE</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">SOLUTIONS</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">SOFTWARE</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">CONTACT</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
