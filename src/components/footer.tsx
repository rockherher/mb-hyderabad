import { Phone, Mail } from 'lucide-react';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-[#6666666c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-8 md:mb-10">
          Get in Touch With Us
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0 text-sm tracking-wide">
          <div className="flex flex-col items-center md:items-start gap-2 px-4 md:px-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <p className="text-[10px] tracking-wider">PHONE</p>
            </div>
            <a
              href="tel:+917075651122"
              className="text-lg sm:text-[20px] hover:underline"
            >
              +91 7075651122
            </a>
          </div>

          <div className="hidden md:block h-10 w-px bg-gray-600/40" />

          <div className="flex flex-col items-center md:items-start gap-2 px-4 md:px-6">
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <p className="text-[10px] tracking-wider">EMAIL</p>
            </div>
            <a
              href="mailto:service@landmarkcarshyd.com"
              className="text-lg sm:text-[20px] hover:underline break-all"
            >
              service@landmarkcarshyd.com
            </a>
          </div>

          <div className="hidden md:block h-10 w-px bg-gray-600/40" />

          <div className="flex flex-col items-center md:items-start gap-2 px-4 md:px-6">
            <div className="flex items-center gap-2">
              <FaWhatsapp size={14} />
              <p className="text-[10px] tracking-wider">WHATSAPP</p>
            </div>
            <a
              href="https://wa.me/917075651122"
              target="_blank"
              className="text-lg sm:text-[20px] hover:underline"
            >
              Chat with us
            </a>
          </div>
        </div>

        <div className="border-t border-[#6666666c] mt-8 md:mt-10 pt-6 text-xs sm:text-sm">
          <p>
            NBR Projects, Prashant Colony, Vivekananda Nagar, Shivaramapally
            Jagir, Hyderabad, Telangana 500030
          </p>
        </div>

        <div className="border-t border-[#6666666c] mt-4 md:mt-6 pt-6 text-xs sm:text-sm">
          <p>Monday To Saturday: 09:30 AM - 06:30 PM | Closed On Sunday</p>
        </div>

        <div className="mt-6 pt-6">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <li>
              <a href="#" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Book Now
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="border-t border-[#6666666c] mt-8 md:mt-10 pt-6 md:pt-8 max-w-3xl mx-auto">
          <h3 className="text-base sm:text-2xl font-medium mb-3">
            About Landmark Cars
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed font-light">
            Landmark Cars Is A Premier Automotive Destination With A 25-Year
            Legacy Of Excellence In Authorized Dealerships & Service Centers. We
            Are Your Trusted Partner For All Mercedes-Benz Needs In Hyderabad.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-600/40 py-4 px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 max-w-7xl mx-auto">
        <p className="text-white text-center md:text-left ">
          © 2025 Landmark Cars. All Rights Reserved.
        </p>

        <div className="flex gap-3 sm:gap-4 mt-3 md:mt-0">
          <a className="w-8 h-8 border border-gray-600/40 rounded-full flex items-center justify-center bg-white">
            <FaInstagram size={16} color="#000" />
          </a>
          <a className="w-8 h-8 border border-gray-600/40 rounded-full flex items-center justify-center bg-white">
            <FaFacebookF size={16} color="#000" />
          </a>
          <a className="w-8 h-8 border border-gray-600/40 rounded-full flex items-center justify-center bg-white">
            <FaYoutube size={16} color="#000" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
