
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, BookOpen, School, GraduationCap, Book, BarChart2, FileText, Monitor } from "lucide-react";

const Programs = () => {
  const [activeTab, setActiveTab] = useState("bachelor");
  
  const programFeatures = [
    "Comprehensive university selection guidance",
    "Application process assistance",
    "Documentation review and refinement",
    "Interview preparation",
    "Scholarship information",
    "Career path counseling"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-counseling-700 to-counseling-800 py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-up">
              Programs We Offer Counseling For
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-counseling-100 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Detailed guidance for bachelor's and master's programs to help you make informed decisions about your academic future.
            </p>
          </div>
        </section>
        
        {/* Programs Tabs Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="bachelor" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 w-[400px]">
                  <TabsTrigger value="bachelor">Bachelor Programs</TabsTrigger>
                  <TabsTrigger value="master">Master Programs</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="bachelor" className="space-y-12">
                {/* BCA Section */}
                <div id="bca" className="scroll-mt-24">
                  <Card className="overflow-hidden border-none shadow-lg">
                    <div className="flex flex-col lg:flex-row">
                      <div className="bg-counseling-600 lg:w-1/3 p-6 lg:p-8 flex flex-col justify-center text-white">
                        <div className="mb-4 bg-white/10 inline-flex p-3 rounded-full w-fit">
                          <BookOpen className="h-8 w-8" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Bachelor of Computer Applications</h2>
                        <p className="text-counseling-100">
                          Launch your career in the IT industry with a strong foundation in computer science.
                        </p>
                      </div>
                      <div className="lg:w-2/3 p-6 lg:p-8">
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Program Overview</h3>
                        <p className="text-gray-700 mb-6">
                          BCA is an undergraduate degree program focused on computer applications and software development. Our counseling helps you find the right BCA program aligned with your career aspirations in the technology sector.
                        </p>
                        
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Our Counseling Services</h3>
                        <ul className="space-y-3 mb-6">
                          {programFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-counseling-600 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Common Questions</h3>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="text-left">
                              What are the career prospects after BCA?
                            </AccordionTrigger>
                            <AccordionContent>
                              BCA graduates can pursue careers as software developers, web developers, database administrators, system analysts, and more. Many also continue to MCA for advanced opportunities.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger className="text-left">
                              What are the eligibility criteria for BCA?
                            </AccordionTrigger>
                            <AccordionContent>
                              Typically, candidates need to have completed 10+2 with mathematics as a subject from a recognized board. Some universities conduct entrance exams for admission.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger className="text-left">
                              Is coding knowledge required before joining BCA?
                            </AccordionTrigger>
                            <AccordionContent>
                              Prior coding knowledge is helpful but not mandatory. BCA programs are designed to teach programming from basics to advanced levels.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* BTech Section */}
                <div id="btech" className="scroll-mt-24">
                  <Card className="overflow-hidden border-none shadow-lg">
                    <div className="flex flex-col lg:flex-row">
                      <div className="bg-counseling-700 lg:w-1/3 p-6 lg:p-8 flex flex-col justify-center text-white">
                        <div className="mb-4 bg-white/10 inline-flex p-3 rounded-full w-fit">
                          <School className="h-8 w-8" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Bachelor of Technology</h2>
                        <p className="text-counseling-100">
                          Pursue engineering excellence with specialized technical knowledge and practical skills.
                        </p>
                      </div>
                      <div className="lg:w-2/3 p-6 lg:p-8">
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Program Overview</h3>
                        <p className="text-gray-700 mb-6">
                          BTech is a professional undergraduate engineering degree that provides students with technical knowledge and skills in various engineering disciplines. Our counseling helps you select the right specialization based on your interests and career goals.
                        </p>
                        
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Our Counseling Services</h3>
                        <ul className="space-y-3 mb-6">
                          {programFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-counseling-600 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Common Questions</h3>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="text-left">
                              Which BTech specialization has the best job prospects?
                            </AccordionTrigger>
                            <AccordionContent>
                              Computer Science, Electrical Engineering, and Mechanical Engineering typically have excellent job prospects, but the best choice depends on your interests and skills. Our counselors can help you evaluate options based on current industry trends.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger className="text-left">
                              How important are entrance exams for BTech admission?
                            </AccordionTrigger>
                            <AccordionContent>
                              Very important. Most reputable engineering colleges admit students based on their performance in entrance exams like JEE Main, JEE Advanced, or state-level engineering entrance tests.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger className="text-left">
                              Can I switch specializations during my BTech program?
                            </AccordionTrigger>
                            <AccordionContent>
                              Some universities allow branch changes after the first year, typically based on academic performance. However, policies vary significantly between institutions, and the process can be competitive.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* BBA Section */}
                <div id="bba" className="scroll-mt-24">
                  <Card className="overflow-hidden border-none shadow-lg">
                    <div className="flex flex-col lg:flex-row">
                      <div className="bg-counseling-600 lg:w-1/3 p-6 lg:p-8 flex flex-col justify-center text-white">
                        <div className="mb-4 bg-white/10 inline-flex p-3 rounded-full w-fit">
                          <BarChart2 className="h-8 w-8" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Bachelor of Business Administration</h2>
                        <p className="text-counseling-100">
                          Develop core business management skills for diverse industry roles.
                        </p>
                      </div>
                      <div className="lg:w-2/3 p-6 lg:p-8">
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Program Overview</h3>
                        <p className="text-gray-700 mb-6">
                          BBA is an undergraduate business degree that provides a comprehensive foundation in business management principles. Our counseling helps you identify the right specialization and institution aligned with your career goals.
                        </p>
                        
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Our Counseling Services</h3>
                        <ul className="space-y-3 mb-6">
                          {programFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-counseling-600 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Common Questions</h3>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="text-left">
                              What specializations are available in BBA programs?
                            </AccordionTrigger>
                            <AccordionContent>
                              Common BBA specializations include Finance, Marketing, Human Resources, Operations Management, International Business, and Entrepreneurship. The availability may vary by institution.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger className="text-left">
                              What are the career opportunities after BBA?
                            </AccordionTrigger>
                            <AccordionContent>
                              BBA graduates can work in various roles such as management trainee, business analyst, marketing executive, HR coordinator, financial analyst, and more. Many also pursue MBA for advanced career growth.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger className="text-left">
                              Is an entrance exam required for BBA admission?
                            </AccordionTrigger>
                            <AccordionContent>
                              Many top universities conduct entrance exams for BBA admission. Common tests include IPMAT, SET, NPAT, and university-specific entrance exams. Some institutions also consider 12th-grade marks for admission.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* BCOM Section */}
                <div id="bcom" className="scroll-mt-24">
                  <Card className="overflow-hidden border-none shadow-lg">
                    <div className="flex flex-col lg:flex-row">
                      <div className="bg-counseling-700 lg:w-1/3 p-6 lg:p-8 flex flex-col justify-center text-white">
                        <div className="mb-4 bg-white/10 inline-flex p-3 rounded-full w-fit">
                          <FileText className="h-8 w-8" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Bachelor of Commerce</h2>
                        <p className="text-counseling-100">
                          Build expertise in finance, accounting, and business economics.
                        </p>
                      </div>
                      <div className="lg:w-2/3 p-6 lg:p-8">
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Program Overview</h3>
                        <p className="text-gray-700 mb-6">
                          BCOM is an undergraduate commerce degree focusing on accounting, finance, economics, and business laws. Our counseling helps you choose between different BCOM variants and specializations based on your career aspirations.
                        </p>
                        
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Our Counseling Services</h3>
                        <ul className="space-y-3 mb-6">
                          {programFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-counseling-600 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Common Questions</h3>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="text-left">
                              What is the difference between BCom and BCom (Hons)?
                            </AccordionTrigger>
                            <AccordionContent>
                              BCom is a three-year general commerce degree, while BCom (Hons) is more specialized with in-depth coursework in a specific area like Accounting or Finance. BCom (Hons) is generally considered more prestigious and may offer better career opportunities.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger className="text-left">
                              What professional certifications can I pursue after BCom?
                            </AccordionTrigger>
                            <AccordionContent>
                              After BCom, you can pursue various professional certifications such as CA (Chartered Accountant), CMA (Cost and Management Accountant), CS (Company Secretary), CFA (Chartered Financial Analyst), or CFP (Certified Financial Planner).
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger className="text-left">
                              What are the eligibility requirements for BCom?
                            </AccordionTrigger>
                            <AccordionContent>
                              Typically, candidates need to have completed 10+2 in any stream (Commerce preferred) from a recognized board. For BCom (Hons), many universities require a minimum percentage in 12th grade and may conduct entrance exams.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="master" className="space-y-12">
                {/* MBA Section */}
                <div id="mba" className="scroll-mt-24">
                  <Card className="overflow-hidden border-none shadow-lg">
                    <div className="flex flex-col lg:flex-row">
                      <div className="bg-counseling-800 lg:w-1/3 p-6 lg:p-8 flex flex-col justify-center text-white">
                        <div className="mb-4 bg-white/10 inline-flex p-3 rounded-full w-fit">
                          <GraduationCap className="h-8 w-8" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Master of Business Administration</h2>
                        <p className="text-counseling-100">
                          Advance your career with comprehensive business knowledge and leadership skills.
                        </p>
                      </div>
                      <div className="lg:w-2/3 p-6 lg:p-8">
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Program Overview</h3>
                        <p className="text-gray-700 mb-6">
                          MBA is a postgraduate degree program that provides a strong foundation in business management principles. Our counseling helps you identify the right MBA specialization and institution based on your career goals and background.
                        </p>
                        
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Our Counseling Services</h3>
                        <ul className="space-y-3 mb-6">
                          {programFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-counseling-600 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Common Questions</h3>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="text-left">
                              Is work experience necessary before pursuing an MBA?
                            </AccordionTrigger>
                            <AccordionContent>
                              While some programs accept fresh graduates, many top MBA programs prefer candidates with 2-5 years of work experience. Work experience helps you contribute meaningfully to class discussions and apply theoretical concepts to real-world scenarios.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger className="text-left">
                              What entrance exams are required for MBA admission?
                            </AccordionTrigger>
                            <AccordionContent>
                              Common entrance exams include CAT, MAT, XAT, GMAT, and CMAT. The specific requirements depend on the institutions you're applying to. Our counselors can help you prepare an exam strategy based on your target schools.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger className="text-left">
                              Which MBA specialization should I choose?
                            </AccordionTrigger>
                            <AccordionContent>
                              The best specialization depends on your career goals, previous experience, and interests. Popular options include Finance, Marketing, Human Resources, Operations, and Information Technology. Our counselors will help you evaluate which aligns best with your career path.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* MCA Section */}
                <div id="mca" className="scroll-mt-24">
                  <Card className="overflow-hidden border-none shadow-lg">
                    <div className="flex flex-col lg:flex-row">
                      <div className="bg-counseling-600 lg:w-1/3 p-6 lg:p-8 flex flex-col justify-center text-white">
                        <div className="mb-4 bg-white/10 inline-flex p-3 rounded-full w-fit">
                          <Monitor className="h-8 w-8" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Master of Computer Applications</h2>
                        <p className="text-counseling-100">
                          Advance your IT career with specialized software development expertise.
                        </p>
                      </div>
                      <div className="lg:w-2/3 p-6 lg:p-8">
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Program Overview</h3>
                        <p className="text-gray-700 mb-6">
                          MCA is a postgraduate degree program focused on advanced computer applications, software development, and IT management. Our counseling helps you find the right MCA program aligned with your career goals in the technology sector.
                        </p>
                        
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Our Counseling Services</h3>
                        <ul className="space-y-3 mb-6">
                          {programFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-counseling-600 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Common Questions</h3>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="text-left">
                              What's the difference between MCA and MSc Computer Science?
                            </AccordionTrigger>
                            <AccordionContent>
                              MCA is more application-oriented, focusing on software development and business applications of computing, while MSc Computer Science is more theoretical with a focus on computing concepts and research. MCA is typically a 2-year program (previously 3 years), whereas MSc is usually a 2-year program.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger className="text-left">
                              What are the eligibility requirements for MCA?
                            </AccordionTrigger>
                            <AccordionContent>
                              Candidates typically need a bachelor's degree in any discipline with Mathematics as a subject at the 10+2 level or graduate level. Many institutions require a minimum percentage in the bachelor's degree and conduct entrance exams for admission.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger className="text-left">
                              What career opportunities are available after MCA?
                            </AccordionTrigger>
                            <AccordionContent>
                              MCA graduates can pursue careers as software developers, system analysts, database administrators, project managers, IT consultants, and more. The program prepares you for both technical and managerial roles in the IT sector.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* PGDM Section */}
                <div id="pgdm" className="scroll-mt-24">
                  <Card className="overflow-hidden border-none shadow-lg">
                    <div className="flex flex-col lg:flex-row">
                      <div className="bg-counseling-600 lg:w-1/3 p-6 lg:p-8 flex flex-col justify-center text-white">
                        <div className="mb-4 bg-white/10 inline-flex p-3 rounded-full w-fit">
                          <Book className="h-8 w-8" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Post Graduate Diploma in Management</h2>
                        <p className="text-counseling-100">
                          Develop practical business skills with industry-oriented management education.
                        </p>
                      </div>
                      <div className="lg:w-2/3 p-6 lg:p-8">
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Program Overview</h3>
                        <p className="text-gray-700 mb-6">
                          PGDM is an industry-oriented management program focused on practical business education. Our counseling helps you understand the differences between PGDM and MBA, and identify the right program based on your career aspirations.
                        </p>
                        
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Our Counseling Services</h3>
                        <ul className="space-y-3 mb-6">
                          {programFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-counseling-600 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h3 className="text-xl font-semibold mb-4 text-counseling-800">Common Questions</h3>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="text-left">
                              What's the difference between PGDM and MBA?
                            </AccordionTrigger>
                            <AccordionContent>
                              While both are postgraduate management programs, MBA is a degree awarded by universities, whereas PGDM is a diploma offered by autonomous institutions. PGDM programs are often more industry-oriented and updated regularly to match industry requirements.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger className="text-left">
                              Is PGDM valuable for higher education abroad?
                            </AccordionTrigger>
                            <AccordionContent>
                              Yes, PGDM from reputed institutions is recognized globally. However, if you're specifically planning for higher education abroad, you should verify the recognition of your target PGDM program in the country where you plan to study.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger className="text-left">
                              What are the career opportunities after PGDM?
                            </AccordionTrigger>
                            <AccordionContent>
                              PGDM graduates can pursue careers in various sectors like consulting, banking, marketing, operations, human resources, and entrepreneurship. The industry connections and placement support of your institution play a crucial role in career outcomes.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Programs;
