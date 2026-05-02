import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    carModel: '',
    serviceType: '',
    preferredDate: '',
    expressService: false,
  });

  return (
    <section className="container bg-white p-5 sm:py-16 sm:px-10" id="book-now">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
          Get Your Slot in Minutes
        </h2>
        <p className="text-gray-600 font-sans text-md sm:text-lg">
          Fill in your details and we'll confirm your appointment
        </p>
      </div>

      <div className="mx-auto bg-[#F8F8F8] rounded-2xl p-8 md:p-12 border border-gray-300">
        <form
          action="https://script.google.com/macros/s/AKfycbzcZozvQtDM7G4Eu1-o3z539aDmoogiK5N134HadcT0jdx_6I1sHjBXbFSsQwAg1b2W9w/exec"
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
        >
          {/* Full Name */}
          <div className="flex flex-col space-y-2">
            <label className="text-md font-medium text-gray-700 ml-2">
              Full Name
            </label>
            <input
              name="fullName"
              value={formData.fullName}
              type="text"
              placeholder="Enter your name"
              className="w-full px-6 py-4 rounded-full border border-gray-300 bg-white"
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>

          {/* Mobile */}
          <div className="flex flex-col space-y-2">
            <label className="text-md font-medium text-gray-700 ml-2">
              Mobile Number
            </label>
            <input
              name="mobileNumber"
              value={formData.mobileNumber}
              type="tel"
              placeholder="+91 xxxx xx xxxx"
              className="w-full px-6 py-4 rounded-full border border-gray-300 bg-white"
              onChange={(e) =>
                setFormData({ ...formData, mobileNumber: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-md font-medium text-gray-700 ml-2">
              Car Model
            </label>

            <div className="relative">
              <select
                name="carModel"
                value={formData.carModel}
                onChange={(e) =>
                  setFormData({ ...formData, carModel: e.target.value })
                }
                className="appearance-none w-full px-6 py-4 rounded-full border border-gray-300 bg-white cursor-pointer pr-12 focus:outline-none focus:ring-2 focus:ring-[#0067B1]"
              >
                <option value="c-class">C-Class</option>
                <option value="e-class">E-Class</option>
                <option value="s-class">S-Class</option>
                <option value="glc">GLC</option>
              </select>

              {/* Custom Arrow */}
              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-md font-medium text-gray-700 ml-2">
              Service Type
            </label>

            <div className="relative">
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={(e) =>
                  setFormData({ ...formData, serviceType: e.target.value })
                }
                className="appearance-none w-full px-6 py-4 rounded-full border border-gray-300 bg-white cursor-pointer pr-12"
              >
                <option value="periodic">Periodic Maintenance</option>
                <option value="repair">General Repair</option>
                <option value="body">Body & Paint</option>
              </select>

              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-md font-medium text-gray-700 ml-2">
              Preferred Date & Time
            </label>
            <input
              name="preferredDate"
              value={formData.preferredDate}
              type="datetime-local"
              className="w-full px-6 py-4 rounded-full border border-gray-300 bg-white cursor-pointer"
              onChange={(e) =>
                setFormData({ ...formData, preferredDate: e.target.value })
              }
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-end pb-4">
            <label className="flex items-center space-x-3 cursor-pointer group">
              <input
                name="expressService"
                type="checkbox"
                value="true"
                checked={formData.expressService}
                className="w-5 h-5 accent-[#005694] cursor-pointer"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    expressService: e.target.checked,
                  })
                }
              />
              <span className="text-md text-gray-600">
                Express Service Required
              </span>
            </label>
          </div>

          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="w-full md:w-1/2 py-4 rounded-full border border-black cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
