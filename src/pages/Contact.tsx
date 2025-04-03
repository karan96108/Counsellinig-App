import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Calendar, HelpCircle } from "lucide-react";

const Contact = () => {
  const faqItems = [
    {
      question: "Is your counseling service really free?",
      answer: "Yes, our counseling services are completely free. We believe that quality education guidance should be accessible to all students regardless of financial background."
    },
    {
      question: "How do I schedule a counseling session?",
      answer: "You can schedule a session by filling out the contact form on this page, calling us directly, or sending us an email. We'll get back to you within 24 hours to arrange a convenient time."
    },
    {
      question: "Do you provide guidance for international universities?",
      answer: "Yes, we provide counseling for both domestic and international university admissions, helping you navigate the application process for institutions worldwide."
    },
    {
      question: "Can you help with scholarship applications?",
      answer: "Absolutely! We provide information about available scholarships and guidance on preparing strong scholarship applications to help finance your education."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-counseling-700 to-counseling-800 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-up">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-counseling-100 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "100ms" }}>
              Have questions about your educational path? Reach out for personalized guidance from our counseling team.
            </p>
          </div>
        </section>
        
        {/* Contact Info Cards */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow animate-fade-up">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-counseling-50 p-3 rounded-full mb-4">
                    <MapPin className="h-6 w-6 text-counseling-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                  <p className="text-gray-600">
                    Jagat farm, <br />
                    Greater noida
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow animate-fade-up" style={{ animationDelay: "100ms" }}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-counseling-50 p-3 rounded-full mb-4">
                    <Clock className="h-6 w-6 text-counseling-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
                  <p className="text-gray-600">
                    Monday-Friday: 9:00 AM - 6:00 PM <br />
                    Saturday: 10:00 AM - 2:00 PM <br />
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow animate-fade-up" style={{ animationDelay: "200ms" }}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-counseling-50 p-3 rounded-full mb-4">
                    <Calendar className="h-6 w-6 text-counseling-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Appointments</h3>
                  <p className="text-gray-600">
                    In-person: By appointment only <br />
                    Virtual: Flexible scheduling <br />
                    Response time: Within 24 hours
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow animate-fade-up" style={{ animationDelay: "300ms" }}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-counseling-50 p-3 rounded-full mb-4">
                    <HelpCircle className="h-6 w-6 text-counseling-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Support</h3>
                  <p className="text-gray-600">
                    Email: karanj96108@gmail.com <br />
                    Phone: +91 6307 967 606 <br />
                    WhatsApp: Available for quick queries
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <ContactSection />
        
        {/* FAQ Section */}
        <section className="py-16 bg-counseling-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-counseling-900">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-700">
                Find answers to common questions about our counseling services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqItems.map((item, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-counseling-800">{item.question}</h3>
                    <p className="text-gray-700">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
