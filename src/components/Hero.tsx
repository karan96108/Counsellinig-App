
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-counseling-50 to-counseling-100 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 max-w-2xl animate-fade-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-counseling-900 mb-6">
              Your Path to Academic Success Starts Here
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Get free, expert guidance for your college admissions journey. 
              Whether you're pursuing BCA, MBA, BTech, or PGDM, we're here to help.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-counseling-600 hover:bg-counseling-700 text-white px-6">
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-counseling-600 text-counseling-600 hover:bg-counseling-50">
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80" 
              alt="Student researching college options" 
              className="rounded-lg shadow-xl max-w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
