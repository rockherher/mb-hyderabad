import { features } from '@/constant/text';
import Banner from '../assets/imported/express.png';

const ExpressService = () => {
  return (
    <section className="relative w-full min-h-125 md:h-155 overflow-hidden">
      <img
        src={Banner}
        alt="Service Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12">
        <h2 className="text-white text-3xl sm:text-3xl md:text-5xl font-serif mb-4 md:mb-6">
          Premier Express Prime Service
        </h2>

        <p className="text-[#00AEEF] text-sm sm:text-base md:text-[18px] mt-2 tracking-wide uppercase">
          Quality Service Faster Than You Can Think
        </p>

        <p className="text-white text-sm sm:text-base md:text-[16px] max-w-5xl mt-4 leading-relaxed">
          Get your Mercedes-Benz serviced within 180 minutes or the service is
          complimentary. With no minimum time and hassle-free servicing,
          experience the ultimate in premium convenience. Our trained
          technicians bring complete focus on speed, precision and teamwork.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:flex justify-center items-start gap-8 sm:gap-12 md:gap-20 mt-8 md:mt-10">
          {features.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col items-center max-w-36 sm:max-w-65  cursor-pointer"
            >
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full 
                flex items-center justify-center mb-3 
                bg-transparent border-2 border-white
                transition-all duration-300
              group-hover:bg-[#bfe6f7] group-hover:border-transparent"
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain 
                  brightness-0 invert sepia saturate-600 hue-rotate-190
                  transition-all duration-300 
                  group-hover:invert-0 group-hover:brightness-0 group-hover:scale-105 "
                />
              </div>

              <p className="text-xs sm:text-sm md:text-[16px] text-white leading-snug whitespace-pre-line text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <span className="absolute bottom-3 right-4 sm:right-6 text-[10px] text-gray-400">
          T&C Apply*
        </span>
      </div>
    </section>
  );
};

export default ExpressService;
