
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Patient',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    quote: 'The care I received at MedicalPress was exceptional. The doctors listened to my concerns and developed a treatment plan that worked for me.',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Patient',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    quote: 'I was impressed by the professionalism and friendliness of the entire staff. They made my hospital stay as comfortable as possible.',
    rating: 5
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Patient',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    quote: 'The medical team at MedicalPress is top-notch. They explained everything clearly and addressed all my questions and concerns.',
    rating: 4
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Patient',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    quote: 'I've been a patient at MedicalPress for years and have always received excellent care. The doctors and nurses are knowledgeable and compassionate.',
    rating: 5
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="medical-container">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block">What Our Patients Say</h2>
          <p className="text-medicalpress-dark-gray mt-6 max-w-2xl mx-auto">
            We take pride in providing outstanding healthcare services. 
            Here's what our patients have to say about their experiences with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-medicalpress-light-gray p-8 rounded-lg shadow-md">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-medicalpress-dark-gray">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-lg text-gray-700 italic">"{testimonial.quote}"</blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            disabled={isAnimating}
          >
            <ChevronLeft size={24} className="text-medicalpress-dark-gray" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            disabled={isAnimating}
          >
            <ChevronRight size={24} className="text-medicalpress-dark-gray" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-2 w-8 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-medicalpress-blue' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
