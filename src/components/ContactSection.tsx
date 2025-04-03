import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { submitToGoogleSheets } from "@/config/googleSheets";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    programInterest: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, programInterest: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = {
        ...formState,
        timestamp: new Date().toISOString(),
      };

      await submitToGoogleSheets(formData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll contact you shortly.",
        duration: 5000,
      });
      
      setFormState({
        name: "",
        email: "",
        phone: "",
        programInterest: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-counseling-700 to-counseling-800" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get Personalized Guidance
          </h2>
          <p className="text-lg text-counseling-100">
            Reach out for free counseling tailored to your academic aspirations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 animate-fade-up">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Fill in your details and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Your name" 
                        value={formState.name} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        value={formState.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="Your phone number" 
                        value={formState.phone} 
                        onChange={handleChange} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="programInterest">Program Interest</Label>
                      <Select
                        value={formState.programInterest}
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bca">BCA - Bachelor of Computer Applications</SelectItem>
                          <SelectItem value="btech">BTech - Bachelor of Technology</SelectItem>
                          <SelectItem value="mba">MBA - Master of Business Administration</SelectItem>
                          <SelectItem value="pgdm">PGDM - Post Graduate Diploma in Management</SelectItem>
                          <SelectItem value="other">Other / Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="message">How can we help you?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your educational goals and what you need help with..."
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-counseling-600 hover:bg-counseling-700"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-4 w-4" /> 
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-counseling-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Email Us</p>
                    <a href="mailto:karanj96108@gmail.com" className="text-gray-600 hover:text-counseling-600">
                      karanj96108@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-counseling-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Call Us</p>
                    <a href="tel:+916307967606" className="text-gray-600 hover:text-counseling-600">
                      +91 6307 967 606
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-counseling-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Office Address</p>
                    <p className="text-gray-600">
                      Jagat farm, <br />
                      Greater noida
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-counseling-50 rounded-b-lg">
                <p className="text-sm text-counseling-700">
                  Available for consultation: <br />
                  Monday-Friday: 9:00 AM - 6:00 PM <br />
                  Saturday: 10:00 AM - 2:00 PM <br />
                  WhatsApp: +91 6307 967 606 (Available for quick queries)
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
