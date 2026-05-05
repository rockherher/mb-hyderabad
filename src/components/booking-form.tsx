import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

type FormDataType = {
  fullName: string;
  mobileNumber: string;
  carModel: string;
  serviceType: string;
  preferredDate: string;
  expressService: boolean;
};

type ErrorType = {
  fullName: string;
  mobileNumber: string;
  preferredDate: string;
};

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    fullName: '',
    mobileNumber: '',
    carModel: '',
    serviceType: '',
    preferredDate: '',
    expressService: false,
  });

  const [errors, setErrors] = useState<ErrorType>({
    fullName: '',
    mobileNumber: '',
    preferredDate: '',
  });

  const handleChange = (field: keyof FormDataType, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const newErrors: ErrorType = {
      fullName: '',
      mobileNumber: '',
      preferredDate: '',
    };

    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = 'Minimum 3 characters required';
      isValid = false;
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required';
      isValid = false;
    } else if (!mobileRegex.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Invalid mobile number';
      isValid = false;
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Date is required';
      isValid = false;
    } else if (new Date(formData.preferredDate) < new Date()) {
      newErrors.preferredDate = 'Date must be in future';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // ✅ Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    e.currentTarget.submit(); // only submit if valid
  };

  return (
    <section className="container bg-white p-5 sm:py-16 sm:px-10" id="book-now">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-gray-900 text-[32px] md:text-[48px] lg:text-[56px] font-condensed ">
          Get Your Slot in Minutes
        </h2>
        <p className="text-gray-600 font-light text-md sm:text-lg">
          Fill in your details and we'll confirm your appointment
        </p>
      </div>

      <div className="mx-auto bg-[#F8F8F8] rounded-2xl p-4 md:p-8 border border-gray-300">
        <form
          onSubmit={handleSubmit}
          action="https://script.google.com/macros/s/AKfycbzcZozvQtDM7G4Eu1-o3z539aDmoogiK5N134HadcT0jdx_6I1sHjBXbFSsQwAg1b2W9w/exec"
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4"
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
              className="w-full px-6 py-4 rounded-full border-2 border-gray-300 bg-white"
              onChange={(e) => handleChange('fullName', e.target.value)}
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm ml-2">
                {errors.fullName}
              </span>
            )}
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
              className="w-full px-6 py-4 rounded-full border-2 border-gray-300 bg-white"
              onChange={(e) =>
                handleChange(
                  'mobileNumber',
                  e.target.value.replace(/\D/g, '').slice(0, 10),
                )
              }
            />
            {errors.mobileNumber && (
              <span className="text-red-500 text-sm ml-2">
                {errors.mobileNumber}
              </span>
            )}
          </div>

          {/* Car Model */}
          <div className="flex flex-col space-y-2">
            <label className="text-md font-medium text-gray-700 ml-2">
              Car Model
            </label>

            <div className="relative">
              <select
                name="carModel"
                value={formData.carModel}
                onChange={(e) => handleChange('carModel', e.target.value)}
                className="appearance-none w-full px-6 py-4 rounded-full text-gray-600 border-2 border-gray-300 bg-white cursor-pointer pr-12"
              >
                <option value="c-class" defaultChecked>
                  C-Class
                </option>
                <option value="e-class">E-Class</option>
                <option value="s-class">S-Class</option>
                <option value="glc">GLC</option>
                <option value="others">Others</option>
              </select>

              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>

          {/* Service Type */}
          <div className="flex flex-col space-y-2">
            <label className="text-md font-medium text-gray-700 ml-2">
              Service Type
            </label>

            <div className="relative">
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={(e) => handleChange('serviceType', e.target.value)}
                className="appearance-none w-full px-6 py-4 rounded-full border-2 border-gray-300 bg-white cursor-pointer pr-12"
              >
                <option value="periodic" defaultChecked>
                  Periodic Maintenance
                </option>
                <option value="repair">General Repair</option>
                <option value="body">Body & Paint</option>
                <option value="others">Others</option>
              </select>

              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>

          {/* Date */}
          <div className="flex flex-col space-y-2">
            <label className="text-md font-medium text-gray-700 ml-2">
              Preferred Date
            </label>
            <input
              name="preferredDate"
              value={formData.preferredDate}
              type="date"
              className="w-full px-6 py-4 rounded-full border-2 border-gray-300 bg-white"
              onChange={(e) => handleChange('preferredDate', e.target.value)}
            />
            {errors.preferredDate && (
              <span className="text-red-500 text-sm ml-2">
                {errors.preferredDate}
              </span>
            )}
          </div>

          {/* Checkbox */}
          <div className="flex items-end pb-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                name="expressService"
                type="checkbox"
                checked={formData.expressService}
                className="w-5 h-5 accent-[#0078d6]"
                onChange={(e) =>
                  handleChange('expressService', e.target.checked)
                }
              />
              <span className="text-md text-gray-600">
                Express Service Required
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="w-full md:w-1/4 py-4 rounded-full border border-black hover:bg-[#0078d6] hover:text-white transition-all font-medium cursor-pointer"
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
