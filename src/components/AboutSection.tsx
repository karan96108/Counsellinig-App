
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const counselingBenefits = [
    "Personalized program selection based on your interests and strengths",
    "Comprehensive university selection guidance",
    "Application process assistance and documentation review",
    "Interview preparation and skill development",
    "Scholarship and financial aid advisory",
    "Career path insights and industry connections"
  ];

  return (
    <section className="section-padding bg-counseling-50" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 order-2 lg:order-1 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-counseling-900">
              Expert Guidance, Personalized For Your Future
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              With years of experience in higher education admissions, our counselors provide free, tailored advice to help you navigate the complex world of college admissions, program selection, and application procedures.
            </p>
            
            <div className="space-y-3 mb-8">
              {counselingBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-counseling-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <p className="italic text-gray-600">
                "Our mission is to make quality education accessible by removing barriers to college admissions through free, expert guidance for all students."
              </p>
              <p className="mt-3 font-medium text-counseling-800">
                Our Commitment to You
              </p>
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80" 
              alt="Education counselor helping a student" 
              className="rounded-lg shadow-xl max-w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
