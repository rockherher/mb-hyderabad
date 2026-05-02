import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/constant/text';

const FAQ = () => {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (i: React.SetStateAction<number | null>) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="py-12 md:py-20" id="faqs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif mb-10 md:mb-14">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((item, i) => {
            const isOpen = active === i;

            return (
              <div key={i} className="pb-3 sm:pb-4">
                <button onClick={() => toggle(i)} className="w-full text-left">
                  <div className="flex items-center justify-between gap-4 cursor-pointer ">
                    <span
                      className={`text-lg sm:text-[17px] md:text-[18px] tracking-wide transition-colors duration-200 ${
                        isOpen ? 'text-[#0067B1] font-bold' : 'text-black'
                      }`}
                    >
                      {item.q}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 shrink-0 ${
                        isOpen
                          ? 'rotate-180 text-[#0067B1]'
                          : 'rotate-0 text-black'
                      }`}
                    />
                  </div>

                  <div
                    className={`mt-2 sm:mt-3 h-px w-full transition-colors duration-200 ${
                      isOpen ? 'bg-[#0067B1]' : 'bg-gray-300'
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'max-h-125 md:max-h-100 mt-2 sm:mt-3 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-md sm:text-sm text-black leading-relaxed pr-2 sm:pr-6">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
