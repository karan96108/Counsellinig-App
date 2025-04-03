
import { Book, BookOpen, GraduationCap, School, FileText, BarChart2, Monitor } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    description: "Launch your IT career with a strong foundation in computer science, programming, and software development.",
    icon: BookOpen,
    level: "Bachelor's",
    link: "/programs#bca"
  },
  {
    title: "Bachelor of Technology (BTech)",
    description: "Pursue engineering excellence with specialized technical knowledge and hands-on project experience.",
    icon: School,
    level: "Bachelor's",
    link: "/programs#btech"
  },
  {
    title: "Bachelor of Business Administration (BBA)",
    description: "Develop core business management skills and prepare for leadership roles in various industries.",
    icon: BarChart2,
    level: "Bachelor's",
    link: "/programs#bba"
  },
  {
    title: "Bachelor of Commerce (BCOM)",
    description: "Build a strong foundation in accounting, finance, economics, and business management principles.",
    icon: FileText,
    level: "Bachelor's",
    link: "/programs#bcom"
  },
  {
    title: "Master of Business Administration (MBA)",
    description: "Elevate your management skills and prepare for leadership roles with advanced business knowledge.",
    icon: GraduationCap,
    level: "Master's",
    link: "/programs#mba"
  },
  {
    title: "Master of Computer Applications (MCA)",
    description: "Advance your IT career with specialized knowledge in software development and computer applications.",
    icon: Monitor,
    level: "Master's",
    link: "/programs#mca"
  },
  {
    title: "Post Graduate Diploma in Management (PGDM)",
    description: "Accelerate your career with industry-focused management expertise and practical business skills.",
    icon: Book,
    level: "Master's",
    link: "/programs#pgdm"
  }
];

const ProgramsSection = () => {
  return (
    <section className="section-padding bg-white" id="programs">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-counseling-900">
            Programs We Offer Guidance For
          </h2>
          <p className="text-lg text-gray-600">
            Expert counseling tailored to your academic journey, from undergraduate to postgraduate programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                <div className="bg-counseling-50 p-2 rounded-md">
                  <program.icon className="h-6 w-6 text-counseling-600" />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-xl font-semibold">{program.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-counseling-500">
                    {program.level} Program
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Button variant="link" className="text-counseling-600 p-0 h-auto font-medium">
                  <Link to={program.link}>Learn more →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-counseling-600 hover:bg-counseling-700">
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
