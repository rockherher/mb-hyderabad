import { services } from '@/constant/text';
import { cn } from '@/lib/utils';

const ServicesGrid = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6" id="services">
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900">
          Our Complete Service Range
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={cn(
              'p-6 sm:p-8 md:p-12 flex flex-col items-center text-center space-y-4 md:space-y-6 border-gray-200',
              'sm:border-b md:border-b-0',
              'sm:border-r md:border-r-0',
              index < 3 && 'md:border-b-2',
              index % 3 !== 2 && 'md:border-r-2',
              index >= 3 && 'pt-10 md:pt-12',
            )}
          >
            <div className="w-10 h-10">
              <img
                src={service.image}
                alt={service.title}
                className={cn(
                  'w-12 sm:w-14 h-8 sm:h-10 object-contain transition-transform duration-300 cursor-pointer',
                  service.scale,
                )}
              />
            </div>

            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h4 className="text-base sm:text-lg md:text-xl font-medium text-gray-900 tracking-tight">
                {service.title}
              </h4>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
