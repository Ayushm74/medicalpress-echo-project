
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=500&q=80',
    title: 'Medical Excellence',
    subtitle: 'The Right Choice For Your Health',
    description: 'Our medical team consists of top professionals ready to provide you with the best care.',
    buttonText: 'Our Services',
    buttonLink: '/services'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&h=500&q=80',
    title: 'Patient-Centered Care',
    subtitle: 'Committed To Your Health',
    description: 'We offer personalized healthcare focused on your specific needs and wellness goals.',
    buttonText: 'Learn More',
    buttonLink: '/about'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&h=500&q=80',
    title: 'State-Of-The-Art Facilities',
    subtitle: 'Advanced Medical Technology',
    description: 'Our modern facilities are equipped with the latest technology for accurate diagnostics and treatment.',
    buttonText: 'Our Facilities',
    buttonLink: '/facilities'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="medical-container h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h2 className="text-lg md:text-xl mb-2 font-light">{slide.subtitle}</h2>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-base md:text-lg mb-6 max-w-lg">{slide.description}</p>
              <Button className="bg-medicalpress-blue hover:bg-medicalpress-dark-blue text-white px-6 py-2">
                {slide.buttonText}
              </Button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prevSlide}
          className="rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-8 rounded-full transition-colors ${
                index === currentSlide ? 'bg-medicalpress-blue' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
