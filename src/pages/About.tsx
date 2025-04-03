
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, BookOpen, Trophy, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Student-Centered Approach",
      description: "We put students first, focusing on their unique needs, goals, and circumstances to provide personalized guidance."
    },
    {
      icon: BookOpen,
      title: "Educational Excellence",
      description: "We're committed to helping students find programs that offer quality education aligned with their career aspirations."
    },
    {
      icon: Trophy,
      title: "Integrity & Transparency",
      description: "We provide honest, factual information about institutions and programs without bias or hidden agendas."
    },
    {
      icon: Heart,
      title: "Accessibility",
      description: "We believe quality educational guidance should be available to all, regardless of financial background."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-counseling-700 to-counseling-800 py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-up">
                  About PathwayGuide
                </h1>
                <p className="text-lg md:text-xl text-counseling-100 mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
                  Dedicated to making higher education accessible through expert, free college admission counseling.
                </p>
              </div>
              <div className="flex-1 max-w-md mx-auto lg:mx-0 animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" 
                  alt="Education counselor at work" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-counseling-900">Our Story</h2>
              <p className="text-lg text-gray-700">
                PathwayGuide was founded with a simple yet powerful vision: to make quality higher education accessible to all by providing free, expert counseling for college admissions. 
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-counseling-800">How We Started</h3>
                <p className="text-gray-700 mb-4">
                  Our journey began when our founder, an education consultant, noticed that many students were making uninformed decisions about their education due to lack of proper guidance. 
                </p>
                <p className="text-gray-700">
                  Recognizing that quality counseling services were often expensive and inaccessible to many, we established PathwayGuide as a free resource to bridge this gap and ensure that all students have access to the guidance they need.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-counseling-800">Our Mission Today</h3>
                <p className="text-gray-700 mb-4">
                  Today, we've grown into a team of experienced education counselors who have helped thousands of students navigate the complex world of college admissions across various programs.
                </p>
                <p className="text-gray-700">
                  We remain committed to our core mission: empowering students with the information, guidance, and support they need to make informed decisions about their educational journey, completely free of charge.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-16 md:py-20 bg-counseling-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-counseling-900">Our Values</h2>
              <p className="text-lg text-gray-700">
                The principles that guide our counseling approach and commitment to students.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-counseling-100 p-3 rounded-full">
                        <value.icon className="h-6 w-6 text-counseling-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-counseling-800">{value.title}</h3>
                        <p className="text-gray-700">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Process Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-counseling-900">Our Counseling Process</h2>
              <p className="text-lg text-gray-700">
                A structured approach to guide you through your educational journey.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Process Steps */}
                {[
                  {
                    number: "01",
                    title: "Initial Consultation",
                    description: "We start by understanding your academic background, interests, and career aspirations."
                  },
                  {
                    number: "02",
                    title: "Program Exploration",
                    description: "Based on your profile, we discuss suitable programs and specializations that align with your goals."
                  },
                  {
                    number: "03",
                    title: "Institution Selection",
                    description: "We help you identify universities that offer quality education in your chosen field and match your profile."
                  },
                  {
                    number: "04",
                    title: "Application Strategy",
                    description: "We guide you through the application process, from document preparation to submission timelines."
                  },
                  {
                    number: "05",
                    title: "Ongoing Support",
                    description: "We provide continued assistance until you successfully secure admission to your preferred program."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex mb-8 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex-shrink-0 w-16 h-16 bg-counseling-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                      {step.number}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-semibold mb-2 text-counseling-800">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
                
                {/* Vertical Line */}
                <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-counseling-200 hidden md:block" style={{ transform: "translateX(-50%)" }}></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-counseling-600 to-counseling-700 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Educational Journey?</h2>
            <p className="text-lg text-counseling-100 max-w-2xl mx-auto mb-8">
              Get in touch with our counselors today and take the first step toward achieving your academic goals.
            </p>
            <a href="/contact" className="inline-block bg-white text-counseling-700 hover:bg-counseling-50 px-8 py-3 rounded-md font-medium transition-colors">
              Contact Us
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
