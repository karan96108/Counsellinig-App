
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    program: "BCA Student",
    quote: "The counseling I received helped me choose the perfect BCA program that aligned with my career goals in software development. I'm now at my dream university!",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Rahul Kapoor",
    program: "BTech Graduate",
    quote: "Thanks to PathwayGuide, I navigated the competitive BTech admissions process successfully. Their insights on which specialization to choose proved invaluable.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Ananya Desai",
    program: "MBA Candidate",
    quote: "The free MBA counseling was a game-changer for me. Their guidance on creating a standout application helped me secure a spot at a top business school.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Vikram Singh",
    program: "PGDM Student",
    quote: "I was confused between MBA and PGDM. The counselors explained the differences in detail and helped me make the right choice for my management career.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=150&q=80"
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-counseling-900">
            Success Stories
          </h2>
          <p className="text-lg text-gray-700">
            Hear from students who transformed their academic journey with our counseling.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg bg-counseling-50">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-20 h-20 rounded-full object-cover border-2 border-counseling-200"
                            />
                            <Quote className="absolute -bottom-2 -right-2 h-8 w-8 text-counseling-600 bg-white rounded-full p-1" />
                          </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                          <p className="font-semibold text-counseling-800">{testimonial.name}</p>
                          <p className="text-sm text-counseling-600">{testimonial.program}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-counseling-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-5 w-5 text-counseling-700" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-counseling-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-5 w-5 text-counseling-700" />
          </button>
          
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-counseling-600" : "bg-counseling-200"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
