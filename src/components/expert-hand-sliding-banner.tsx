import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Img0 from '@/assets/img-vid/03-section-waiting-lounge.jpg';
import Img1 from '@/assets/img-vid/slider-image/img-01.jpg';
import Img2 from '@/assets/img-vid/slider-image/img-02.jpg';
import Img3 from '@/assets/img-vid/slider-image/img-03.jpg';
import Img4 from '@/assets/img-vid/slider-image/img-04.jpg';
import Img5 from '@/assets/img-vid/slider-image/img-05.jpg';
import Img6 from '@/assets/img-vid/slider-image/img-06.jpg';
import Img7 from '@/assets/img-vid/slider-image/img-07.jpg';

const slides = [
  { img: Img0 },
  { img: Img1 },
  { img: Img2 },
  { img: Img3 },
  { img: Img4 },
  { img: Img5 },
  { img: Img6 },
  { img: Img7 },
];

const imageVariants = {
  initial: { opacity: 0, scale: 1.1 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.05 },
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
        className="text-gray-900 text-[32px] md:text-[48px] lg:text-[56px] font-condensed text-center"
      >
        Your Car is in Expert Hands
      </motion.h2>

      <div className="relative w-full h-100 sm:h-125 md:h-200 overflow-hidden mt-10 md:mt-20 bg-black">
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
          </motion.div>
        </AnimatePresence>

        {/* Navigation Slider Bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className="group relative h-[2px] w-8 md:w-12 bg-white/20 transition-all overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-white/10 transition-all duration-300 ${
                  current === index
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-40'
                }`}
              />
              {current === index && (
                <motion.div
                  key={`bar-${index}`}
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 5, ease: 'linear' }}
                  className="absolute inset-0 bg-white"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertHandSliderBanner;
