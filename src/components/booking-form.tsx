import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

type FormDataType = {
  fullName: string;
  mobileNumber: string;
  carModel: string;
  otherModel: string;
  serviceType: string;
  otherServiceType: string;
  preferredDate: string;
  expressService: boolean;
};

type ErrorType = {
  fullName: string;
  mobileNumber: string;
  preferredDate: string;
};

type BookingFormProps = {
  onSuccess?: () => void;
};

const BOOKING_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbzQUwiMezmCEbhG8Q87OwcUR1mcEl_8wKbJFvoHxeLokM8T46CbAVV0HYZ6CQwbwzyy/exec';

const BookingForm: React.FC<BookingFormProps> = ({ onSuccess }) => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    fullName: '',
    mobileNumber: '',
    carModel: 'a-class',
    otherModel: '',
    serviceType: 'periodic',
    otherServiceType: '',
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate() || submitting) return;

    const params = new URLSearchParams();
    new FormData(e.currentTarget).forEach((value, key) => {
      params.append(key, value.toString());
    });

    setSubmitting(true);
    try {
      await fetch(BOOKING_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: params,
      });
      onSuccess?.();
    } catch {
      onSuccess?.();
    } finally {
      setSubmitting(false);
    }
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
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4"
        >
          {/* Hidden inputs for carModel and serviceType to handle "Other" option */}
          <input
            type="hidden"
            name="carModel"
            value={
              formData.carModel === 'other'
                ? formData.otherModel
                : formData.carModel
            }
          />
          <input
            type="hidden"
            name="serviceType"
            value={
              formData.serviceType === 'other'
                ? formData.otherServiceType
                : formData.serviceType
            }
          />

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
                value={formData.carModel}
                onChange={(e) => handleChange('carModel', e.target.value)}
                className="appearance-none w-full px-6 py-4 rounded-full text-gray-600 border-2 border-gray-300 bg-white cursor-pointer pr-12"
              >
                <option value="a-class">A-Class</option>
                <option value="c-class">C-Class</option>
                <option value="e-class">E-Class</option>
                <option value="s-class">S-Class</option>
                <option value="gla">GLA</option>
                <option value="glb">GLB</option>
                <option value="glc">GLC</option>
                <option value="gle">GLE</option>
                <option value="gls">GLS</option>
                <option value="other">Other</option>
              </select>

              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>

            {formData.carModel === 'other' && (
              <div className="mt-2 flex flex-col space-y-2">
                <input
                  value={formData.otherModel}
                  type="text"
                  placeholder="Specify Car Model"
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-300 bg-white"
                  onChange={(e) => handleChange('otherModel', e.target.value)}
                  required
                />
              </div>
            )}
          </div>

          {/* Service Type */}
          <div className="flex flex-col space-y-2">
            <label className="text-md font-medium text-gray-700 ml-2">
              Service Type
            </label>

            <div className="relative">
              <select
                value={formData.serviceType}
                onChange={(e) => handleChange('serviceType', e.target.value)}
                className="appearance-none w-full px-6 py-4 rounded-full border-2 border-gray-300 bg-white cursor-pointer pr-12"
              >
                <option value="periodic">Periodic Maintenance</option>
                <option value="repair">General Repair</option>
                <option value="body">Body & Paint</option>
                <option value="ac">AC Check</option>
                <option value="tyre">Tyre Check</option>
                <option value="battery">Battery Check</option>
                <option value="other">Other</option>
              </select>

              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>

            {formData.serviceType === 'other' && (
              <div className="mt-2 flex flex-col space-y-2">
                <input
                  value={formData.otherServiceType}
                  type="text"
                  placeholder="Specify Service Type"
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-300 bg-white"
                  onChange={(e) =>
                    handleChange('otherServiceType', e.target.value)
                  }
                  required
                />
              </div>
            )}
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
            <label className="flex items-center space-x-3 cursor-pointer" style={{marginBottom:'3px'}}>
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
              disabled={submitting}
              className="w-full md:w-1/4 py-4 rounded-full border border-black hover:bg-[#0078d6] hover:text-white transition-all font-medium cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting…' : 'Book Now'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
