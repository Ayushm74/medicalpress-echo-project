
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ChevronRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-medicalpress-dark-gray text-white">
      <div className="medical-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6">About MedicalPress</h3>
            <p className="text-gray-300 mb-6">
              MedicalPress is a leading healthcare provider committed to delivering exceptional medical services with compassion and care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-medicalpress-blue hover:bg-blue-600 text-white p-2 rounded-full transition">
                <Facebook size={16} />
              </a>
              <a href="#" className="bg-medicalpress-blue hover:bg-blue-600 text-white p-2 rounded-full transition">
                <Twitter size={16} />
              </a>
              <a href="#" className="bg-medicalpress-blue hover:bg-blue-600 text-white p-2 rounded-full transition">
                <Instagram size={16} />
              </a>
              <a href="#" className="bg-medicalpress-blue hover:bg-blue-600 text-white p-2 rounded-full transition">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition flex items-center">
                  <ChevronRight size={16} className="mr-2 text-medicalpress-blue" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition flex items-center">
                  <ChevronRight size={16} className="mr-2 text-medicalpress-blue" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-white transition flex items-center">
                  <ChevronRight size={16} className="mr-2 text-medicalpress-blue" />
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-gray-300 hover:text-white transition flex items-center">
                  <ChevronRight size={16} className="mr-2 text-medicalpress-blue" />
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-gray-300 hover:text-white transition flex items-center">
                  <ChevronRight size={16} className="mr-2 text-medicalpress-blue" />
                  Appointments
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition flex items-center">
                  <ChevronRight size={16} className="mr-2 text-medicalpress-blue" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/service/cardiology" className="text-gray-300 hover:text-white transition flex items-center">
                  <ChevronRight size={16} className="mr-2 text-medicalpress-blue" />
                  Cardiology
                </Link>
              </li>
              <li>
                <Link to="/service/neurology" className="text-gray-300 hover:text-white transition flex items-center">
                  <ChevronRight size={16} className="mr-2 text-medicalpress-blue" />
                  Neurology
                </Link>
              </li>
              <li>
                <Link to="/service/orthopedics" className="text-gray-300 hover:text-white transition flex items-center">
                  <ChevronRight size={16} className="mr-2 text-medicalpress-blue" />
                  Orthopedics
                </Link>
              </li>
              <li>
                <Link to="/service/pediatrics" className="text-gray-300 hover:text-white transition flex items-center">
                  <ChevronRight size={16} className="mr-2 text-medicalpress-blue" />
                  Pediatrics
                </Link>
              </li>
              <li>
                <Link to="/service/dental" className="text-gray-300 hover:text-white transition flex items-center">
                  <ChevronRight size={16} className="mr-2 text-medicalpress-blue" />
                  Dental Care
                </Link>
              </li>
              <li>
                <Link to="/service/laboratory" className="text-gray-300 hover:text-white transition flex items-center">
                  <ChevronRight size={16} className="mr-2 text-medicalpress-blue" />
                  Laboratory Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 text-medicalpress-blue" />
                <span className="text-gray-300">123 Main Street, Anytown, USA 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-medicalpress-blue" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-medicalpress-blue" />
                <a href="mailto:info@medicalpress.com" className="text-gray-300 hover:text-white">info@medicalpress.com</a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mt-1 mr-3 text-medicalpress-blue" />
                <div className="text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-black py-4">
        <div className="medical-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} MedicalPress. All Rights Reserved.
            </p>
            <div className="text-gray-400 text-sm">
              <span>Privacy Policy</span>
              <span className="mx-2">|</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
