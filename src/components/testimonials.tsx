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
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl md:text-[34px] font-serif mb-8 md:mb-12.5 text-black">
          Trusted by Mercedes-Benz Owners Across Hyderabad
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {reviews.map((item, i) => (
            <div
              key={i}
              className="rounded-md p-4 sm:p-4.5 bg-[#f5f5f5] border hover:border-[#0067B1] duration-200 hover:shadow"
            >
              <Stars />

              <p className="text-base sm:text-lg md:text-[20px] text-black font-medium mb-2">
                {item.name}
              </p>

              <p className="text-xs sm:text-sm md:text-[14px] text-[#555] leading-[1.55]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
