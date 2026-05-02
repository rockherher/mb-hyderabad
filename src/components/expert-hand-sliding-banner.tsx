import { useEffect, useState } from 'react';

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
    text: `Modern service bays equipped with hydraulic lifts and specialized tools`,
  },
  {
    img: Img3,
    text: `Comfortable customer waiting lounge with complimentary refreshments`,
  },
  {
    img: Img4,
    text: `Extensive parts inventory worth ₹38+ crores`,
  },
];

const ExpertHandSliderBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-8 md:pt-10">
      <h2 className="text-center text-2xl sm:text-3xl md:text-[32px] font-serif">
        Your Car is in Expert Hands
      </h2>

      <div className="relative w-full h-100 sm:h-125 md:h-200 overflow-hidden mt-10 md:mt-20">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 h-full ${
              i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.img}
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-4 sm:left-8 md:left-40 max-w-[80%] sm:max-w-[70%] md:max-w-200">
              <p className="text-white text-lg sm:text-lg md:text-[36px] font-serif leading-snug whitespace-pre-line">
                {slide.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertHandSliderBanner;
