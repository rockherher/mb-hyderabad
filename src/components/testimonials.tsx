import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { reviews } from '@/constant/text';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Stars = () => (
  <div className="flex gap-0.5 mb-4 justify-center">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} className="fill-[#0078d6] text-[#0078d6]" />
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-900 text-[32px] md:text-[48px] lg:text-[56px] font-condensed text-center mb-6 md:mb-8"
        >
          Trusted by Mercedes-Benz Owners Across Hyderabad
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden px-4 md:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex flex-col items-center text-center bg-gray-100 p-4 rounded-xl"
              >
                <Stars />
                <blockquote className="text-lg sm:text-xl md:text-2xl font-serif text-gray-800 leading-relaxed mb-8 italic">
                  "{reviews[current].text}"
                </blockquote>
                <cite className="not-italic">
                  <span className="block text-xl font-bold text-[#0078d6] mb-1">
                    {reviews[current].name}
                  </span>
                  <span className="text-sm text-gray-500 tracking-widest uppercase">
                    Verified Customer
                  </span>
                </cite>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#0067B1] transition-colors hidden md:block"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#0067B1] transition-colors hidden md:block"
          >
            <ChevronRight size={32} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`group relative h-1 transition-all duration-500 overflow-hidden ${
                  current === i
                    ? 'w-12 bg-[#0078d6]/20'
                    : 'w-4 bg-gray-300 hover:bg-gray-400'
                }`}
              >
                {current === i && (
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '0%' }}
                    transition={{ duration: 6, ease: 'linear' }}
                    className="absolute inset-0 bg-[#0078d6]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
