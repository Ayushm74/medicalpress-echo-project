
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Appointment from '@/components/Appointment';
import Testimonials from '@/components/Testimonials';
import News from '@/components/News';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Appointment />
        <Testimonials />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
