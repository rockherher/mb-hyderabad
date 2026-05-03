import { motion } from 'framer-motion';
import { handleScroll } from '@/lib/utils';
import HeroBanner from '../assets/img-vid/01-hero-section-banner.jpg';

const Hero = () => {
  return (
    <section className="relative w-full min-h-125 md:min-h-175 lg:min-h-220 overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src={HeroBanner}
          alt="Mercedes-Benz Showroom"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-white">
        <div className="max-w-5xl space-y-6 md:space-y-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Authorised Mercedes-Benz <br />
              Landmark Cars Service in Hyderabad
            </h1>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-lg md:text-xl lg:text-2xl font-sans tracking-wide"
          >
            Expert Technicians, Genuine Parts, Hassle-Free Pickup & Drop
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xs sm:text-sm font-sans tracking-wider text-gray-300"
          >
            Mercedes-Benz Authorised Service Partner
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 md:pt-4"
          >
            <button
              className="px-6 sm:px-8 py-3 border border-white text-white font-sans text-xs sm:text-sm font-medium hover:bg-[#0067B1] hover:text-white transition-all rounded-md hover:border-[#0067B1] cursor-pointer"
              onClick={(e) => handleScroll(e, '#book-now')}
            >
              Book Your Service
            </button>

            <button
              className="px-6 sm:px-8 py-3 sm:py-5 bg-[#0067B1] text-white font-sans text-xs sm:text-sm font-medium hover:bg-[#005694] transition-all rounded-md cursor-pointer"
              onClick={(e) => handleScroll(e, '#book-now')}
            >
              Schedule a Pickup
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
