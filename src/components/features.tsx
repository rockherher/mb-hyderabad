import { featureData } from '@/constant/text';

const Features = () => {
  return (
    <section className="bg-white p-6 sm:py-16 md:py-20 px-4 sm:px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
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
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="relative bg-[#EAEAEA] p-6 sm:p-8 md:p-10 flex flex-col items-center text-center space-y-3 sm:space-y-4 group cursor-pointer justify-center w-full h-auto min-h-55 hover:bg-white hover:border-[#0067B1] hover:border-t hover:border-r hover:border-l transition-all duration-300"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-contain transition-all duration-300 brightness-0"
              />
            </div>

            <h4 className="text-base sm:text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#0067B1]">
              {feature.title}
            </h4>

            <p className="text-xs sm:text-sm text-gray-600 font-medium transition-colors duration-300 group-hover:text-[#0067B1]">
              {feature.subtitle}
            </p>

            <span className="absolute bottom-0 left-0 w-full h-0.75 bg-[#EAEAEA] duration-300 group-hover:bg-[#0067B1]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
