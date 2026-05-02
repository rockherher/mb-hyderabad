import HeroBanner from '../assets/img-vid/01-hero-section-banner.jpg';

const Hero = () => {
  return (
    <section className="relative w-full min-h-125 md:min-h-175 lg:min-h-220 overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={HeroBanner}
          alt="Mercedes-Benz Showroom"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-white">
        <div className="max-w-5xl space-y-6 md:space-y-10">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Authorised Mercedes-Benz <br />
              Landmark Cars Service in Hyderabad
            </h1>
          </div>

          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-sans tracking-wide">
            Expert Technicians, Genuine Parts, Hassle-Free Pickup & Drop
          </p>

          <p className="text-xs sm:text-sm font-sans tracking-wider text-gray-300">
            Mercedes-Benz Authorised Service Partner
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 md:pt-4">
            <button className="px-6 sm:px-8 py-3 border border-white text-white font-sans text-xs sm:text-sm font-medium hover:bg-[#0067B1] hover:text-white transition-all rounded-md hover:border-[#0067B1]">
              Book Your Service
            </button>

            <button className="px-6 sm:px-8 py-3 sm:py-5 bg-[#0067B1] text-white font-sans text-xs sm:text-sm font-medium hover:bg-[#005694] transition-all rounded-md">
              Schedule a Pickup
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
