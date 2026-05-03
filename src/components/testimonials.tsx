import { motion } from 'framer-motion';
import { reviews } from '@/constant/text';
import { Star } from 'lucide-react';

const Stars = () => (
  <div className="flex gap-0.5 mb-2">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={12} className="fill-[#f59e0b] text-[#f59e0b]" />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900  md:mb-10 text-center mb-6"
        >
          Trusted by Mercedes-Benz Owners Across Hyderabad
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {reviews.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: i % 2 === 0 ? -20 : 20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
              className="rounded-md p-4 sm:p-4.5 bg-[#f5f5f5] border hover:border-[#0067B1] duration-200 hover:shadow cursor-pointer"
            >
              <Stars />

              <p className="text-base sm:text-lg md:text-[20px] text-black font-medium mb-2">
                {item.name}
              </p>

              <p className="text-sm sm:text-sm md:text-[14px] text-[#555] leading-[1.55]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
