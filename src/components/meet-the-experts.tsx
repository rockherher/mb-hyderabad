import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Mail, Phone } from 'lucide-react';
import { experts } from '@/constant/text';

const ExpertProfile = ({
  name,
  role,
  email,
  phone,
  imageUrl,
}: {
  name: string;
  role: string;
  email: string;
  phone: string;
  imageUrl: string;
}) => (
  <div className="flex flex-col items-center text-center group">
    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full overflow-hidden mb-3 md:mb-4 group-hover:border-gray-200 transition-all duration-300 border-gray-500">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover object-top"
      />
    </div>

    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
      {name}
    </h3>

    <p className="text-xs sm:text-sm text-gray-500 font-medium mb-2 md:mb-3">
      {role}
    </p>

    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 text-gray-400 text-[10px] sm:text-xs">
      <div className="flex items-center gap-1">
        <Mail className="w-3 h-3" />
        <a
          href={`mailto:${email}`}
          className="hover:underline hover:text-black transition-colors"
        >
          {email}
        </a>
      </div>

      <div className="flex items-center gap-1">
        <Phone className="w-3 h-3" />
        <a
          href={`tel:${phone}`}
          className="hover:underline hover:text-black transition-colors"
        >
          {phone}
        </a>
      </div>
    </div>
  </div>
);

const useItemsPerSlide = () => {
  const getCount = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const [count, setCount] = useState(getCount);

  useEffect(() => {
    const onResize = () => setCount(getCount());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return count;
};

const MeetTheExperts = () => {
  const itemsPerSlide = useItemsPerSlide();
  const totalSlides = Math.ceil(experts.length / itemsPerSlide);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const safePage = page % totalSlides;

  const paginate = (dir: number) => {
    setDirection(dir);
    setPage((prev) => (prev + dir + totalSlides) % totalSlides);
  };

  const goTo = (next: number) => {
    setDirection(next > safePage ? 1 : -1);
    setPage(next);
  };

  const start = safePage * itemsPerSlide;
  const visible = experts.slice(start, start + itemsPerSlide);

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900">
            Meet the Experts
          </h2>
        </motion.div>

        <div className="relative">
          <button
            type="button"
            aria-label="Previous experts"
            onClick={() => paginate(-1)}
            className="cursor-pointer absolute left-0 sm:-left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:text-black hover:border-gray-400 transition-colors disabled:opacity-40"
            disabled={totalSlides <= 1}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            aria-label="Next experts"
            onClick={() => paginate(1)}
            className="cursor-pointer absolute right-0 sm:-right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:text-black hover:border-gray-400 transition-colors disabled:opacity-40"
            disabled={totalSlides <= 1}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden px-10 sm:px-12 md:px-14">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={safePage}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="grid gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-10"
                style={{
                  gridTemplateColumns: `repeat(${visible.length}, minmax(0, 1fr))`,
                }}
              >
                {visible.map((expert, index) => (
                  <ExpertProfile key={start + index} {...expert} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-10 md:mt-12">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${
                i === safePage ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheExperts;
