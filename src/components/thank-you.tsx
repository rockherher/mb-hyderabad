import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type ThankYouProps = {
  redirectAfterMs?: number;
};

const ThankYou: React.FC<ThankYouProps> = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'auto' });
  //   const timer = window.setTimeout(() => navigate('/'), redirectAfterMs);
	// 	return () => window.clearTimeout(timer);
  // }, [navigate, redirectAfterMs]);
  const redirectPage = () =>{
		navigate('/');
	}


  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
  }, []);

  return (
    <section className="bg-white flex items-center justify-center px-5 py-20 sm:py-28 md:py-36 min-h-[60vh]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-gray-900 text-[40px] md:text-[56px] lg:text-[64px] font-condensed mb-6">
          Thank You !
        </h1>
        <h2 className="text-gray-800 text-[22px] md:text-[28px] lg:text-[42px] font-condensed mb-6">
          For Contacting Mercedes-Benz Landmark Cars Hyderabad.
        </h2>
        <p className=" font-light text-sm sm:text-base md:text-2xl">
          Our representative will connect with you shortly. We look forward to
          serving you.
        </p>
				<button
          onClick={redirectPage}
          className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Home
        </button>
      </div>
    </section>
  );
};

export default ThankYou;
