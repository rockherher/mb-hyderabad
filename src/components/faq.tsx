import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/constant/text';

const FAQ = () => {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (i: number) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="py-12 md:py-20 overflow-hidden" id="faqs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center  text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900 mb-4 md:mb-8"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((item, i) => {
            const isOpen = active === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="pb-3 sm:pb-4"
              >
                <button onClick={() => toggle(i)} className="w-full text-left">
                  <div className="flex items-center justify-between gap-4 cursor-pointer ">
                    <span
                      className={`text-md sm:text-md md:text-lg tracking-wide transition-colors duration-200 ${
                        isOpen ? 'text-[#0067B1] font-bold' : 'text-black'
                      }`}
                    >
                      {item.q}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 shrink-0 ${
                        isOpen
                          ? 'rotate-180 text-[#0067B1]'
                          : 'rotate-0 text-black'
                      }`}
                    />
                  </div>

                  <div
                    className={`mt-2 sm:mt-3 h-px w-full transition-colors duration-200 ${
                      isOpen ? 'bg-[#0067B1]' : 'bg-gray-300'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm sm:text-md text-black leading-relaxed pr-2 sm:pr-6 mt-2 sm:mt-3">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
