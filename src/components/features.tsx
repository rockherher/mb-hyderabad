import { motion } from 'framer-motion';
import { featureData } from '@/constant/text';

const Features = () => {
  return (
    <section className="bg-white p-6 sm:py-16 md:py-20 px-4 sm:px-6 font-sans overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-12 md:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900 mb-4 md:mb-6">
          Why Choose Landmark Cars Mercedes-Benz Service?
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-xs sm:text-sm md:text-base">
          Since 1998, Group Landmark has been a leader in India's premium and
          luxury automotive retail industry. With 125 facilities across 32
          cities, we've built a strong legacy of trust, excellence and
          customer-first service. As India's first multi-brand luxury automobile
          dealership listed on the BSE (Dec 2023), we have delivered 193,000+
          luxury vehicles and serviced over 300,000 cars.
        </p>
      </motion.div>

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
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
      >
        {featureData.map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="relative bg-[#EAEAEA] p-6 sm:p-8 md:p-10 flex flex-col items-center text-center space-y-1 sm:space-y-1 group cursor-pointer justify-center w-full h-auto min-h-55 hover:bg-white hover:border-[#0067B1] hover:border-t hover:border-r hover:border-l transition-all duration-300 hover:border-b-4"
          >
            <div className="w-16 h-16 sm:w-16 sm:h-16 flex items-center justify-center mb-4">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-contain transition-all duration-300 brightness-0"
              />
            </div>
            <h4 className="text-base sm:text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#0067B1]">
              {feature.title}
            </h4>

            <p className="text-md sm:text-md text-gray-600 font-medium transition-colors duration-300 group-hover:text-[#0067B1]">
              {feature.subtitle}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
