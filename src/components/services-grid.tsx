import { motion } from 'framer-motion';
import { services } from '@/constant/text';
import { cn } from '@/lib/utils';

const ServicesGrid = () => {
  return (
    <section
      className="bg-white py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
      id="services"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-12 md:mb-16"
      >
        <h2 className="text-gray-900 text-[32px] md:text-[48px] lg:text-[56px] font-condensed">
          Our Complete Service Range
        </h2>
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
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className={cn(
              'p-6 sm:p-8 md:p-12 flex flex-col items-center text-center space-y-4 md:space-y-6 border-gray-200 border-l border-r border-t border-b py-12',

              // Mobile tweaks
              index === 0 && 'border-t-0 md:border-t-0',
              index === services.length - 1 && 'border-b-0 md:border-b-0',

              // 🔥 IMPORTANT: reset ALL borders on md+
              'md:border-0',

              // Then apply desktop grid borders only
              index < 3 && 'md:border-b-2',
              index % 3 !== 2 && 'md:border-r-2',

              index >= 3 && 'pt-10 md:pt-12',
            )}
          >
            <div className="w-16 h-16 mb-1 sm:mb-8">
              <img
                src={service.image}
                alt={service.title}
                className={cn(
                  'w-16 sm:w-16 h-10 sm:h-16 object-contain transition-transform duration-300 cursor-pointer',
                  service.scaleMobile,
                  service.scaleWeb,
                )}
              />
            </div>

            <div className="space-y-1 sm:space-y-3 md:space-y-2">
              <p className="text-lg sm:text-xl md:text-xl font-medium text-gray-900 tracking-tight">
                {service.title}
              </p>

              <p className="text-gray-600 text-sm sm:text-sm leading-relaxed max-w-xs mx-auto">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesGrid;
