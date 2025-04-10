
import { useState } from 'react';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="bg-medicalpress-light-gray py-3">
        <div className="medical-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center text-sm text-medicalpress-dark-gray">
                <Phone size={16} className="mr-2 text-medicalpress-blue" />
                <span>Call us: (123) 456-7890</span>
              </div>
              <div className="flex items-center text-sm text-medicalpress-dark-gray">
                <Clock size={16} className="mr-2 text-medicalpress-blue" />
                <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
            <div className="flex items-center text-sm text-medicalpress-dark-gray">
              <MapPin size={16} className="mr-2 text-medicalpress-blue" />
              <span>123 Main Street, Anytown, USA</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="medical-container">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-bold text-medicalpress-dark-blue">Medical<span className="text-medicalpress-blue">Press</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-medicalpress-dark-gray focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden bg-white w-full shadow-md transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="medical-container py-4">
          <NavLinks mobile />
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
}

const NavLinks = ({ mobile }: NavLinksProps) => {
  const linkStyle = mobile
    ? "block py-2 text-medicalpress-dark-gray hover:text-medicalpress-blue transition-colors"
    : "text-medicalpress-dark-gray hover:text-medicalpress-blue transition-colors";

  return (
    <nav className={mobile ? "flex flex-col" : "flex space-x-8"}>
      <Link to="/" className={cn(linkStyle, "font-medium")}>
        Home
      </Link>
      <Link to="/about" className={linkStyle}>
        About Us
      </Link>
      <Link to="/doctors" className={linkStyle}>
        Doctors
      </Link>
      <Link to="/services" className={linkStyle}>
        Services
      </Link>
      <Link to="/departments" className={linkStyle}>
        Departments
      </Link>
      <Link to="/blog" className={linkStyle}>
        Blog
      </Link>
      <Link to="/contact" className={linkStyle}>
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
