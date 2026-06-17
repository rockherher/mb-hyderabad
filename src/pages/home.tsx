import { useNavigate } from 'react-router-dom';
import Hero from '../components/hero';
import BookingForm from '../components/booking-form';
import Features from '../components/features';
import ExpressService from '../components/express-service';
import ServicesGrid from '../components/services-grid';
import Testimonials from '../components/testimonials';
import MeetTheExperts from '../components/meet-the-experts';
import ExpertHandSliderBanner from '../components/expert-hand-sliding-banner';
import FAQ from '../components/faq';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      <BookingForm onSuccess={() => navigate('/thank-you')} />
      <Features />
      <ExpressService />
      <ServicesGrid />
      <Testimonials />
      <MeetTheExperts />
      <ExpertHandSliderBanner />
      <FAQ />
    </>
  );
};

export default Home;
