import Navbar from './components/navbar';
import Hero from './components/hero';
import BookingForm from './components/booking-form';
import Features from './components/features';
import ExpressService from './components/express-service';
import ServicesGrid from './components/services-grid';
import Testimonials from './components/testimonials';
import MeetTheExperts from './components/meet-the-experts';
import ExpertHandSliderBanner from './components/expert-hand-sliding-banner';
import FAQ from './components/faq';
import Footer from './components/footer';
import FloatingWhatsApp from './components/floating-whatsapp';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BookingForm />
      <Features />
      <ExpressService />
      <ServicesGrid />
      <Testimonials />
      <MeetTheExperts />
      <ExpertHandSliderBanner />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default App;
