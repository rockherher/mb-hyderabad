import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Img1 from '../assets/img-vid/03-section-trained-work-v2.jpg';
import Img2 from '../assets/img-vid/03-section-parts-inventory.jpg';
import Img3 from '../assets/img-vid/03-section-waiting-lounge.jpg';
import Img4 from '../assets/img-vid/03-section-diagnostic.jpg';

const slides = [
  {
    img: Img1,
    text: 'State-of-the-art service facility\nwith latest diagnostic equipment',
  },
  {
    img: Img2,
    text: 'Modern service bays equipped with hydraulic lifts and specialized tools',
  },
  {
    img: Img3,
    text: 'Comfortable customer waiting lounge with complimentary refreshments',
  },
  {
    img: Img4,
    text: 'Extensive parts inventory worth ₹38+ crores',
  },
];

const imageVariants = {
  initial: { opacity: 0, scale: 1.1 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.05 },
};

const textVariants = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 },
};

const ExpertHandSliderBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-8 md:pt-10 overflow-hidden">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900 mb-4 md:mb-6 text-center"
      >
        Your Car is in Expert Hands
      </motion.h2>

      <div className="relative w-full h-100 sm:h-125 md:h-200 overflow-hidden mt-10 md:mt-20 bg-black">
        {/* FIX: mode="wait" prevents overlap glitch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={slides[current].img}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* TEXT */}
            <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-4 sm:left-8 md:left-40 max-w-[80%] sm:max-w-[70%] md:max-w-200">
              <AnimatePresence mode="wait">
                <motion.p
                  key={slides[current].text}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.6 }}
                  className="text-white text-lg sm:text-lg md:text-[36px] font-serif leading-snug whitespace-pre-line"
                >
                  {slides[current].text}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExpertHandSliderBanner;
