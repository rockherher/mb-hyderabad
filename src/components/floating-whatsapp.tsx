import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919281443894?text=Hi"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default FloatingWhatsApp;
