import { experts } from '@/constant/text';
import { Mail, Phone } from 'lucide-react';

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
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
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

const MeetTheExperts = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900">
            Meet the Experts
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-10 sm:gap-y-12 md:gap-y-16">
          {experts.map((expert, index) => (
            <ExpertProfile key={index} {...expert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheExperts;
