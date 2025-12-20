import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, FileText, Calendar, CreditCard, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Admissions = () => {
  const admissionSteps = [
    {
      step: 1,
      icon: FileText,
      title: "Submit Application",
      description: "Complete the application form with all required documents.",
    },
    {
      step: 2,
      icon: Calendar,
      title: "Schedule Assessment",
      description: "Book an appointment for the pupil's assessment (for Primary classes).",
    },
    {
      step: 3,
      icon: Users,
      title: "Interview",
      description: "Meet with the admissions team and tour the school.",
    },
    {
      step: 4,
      icon: CreditCard,
      title: "Complete Enrollment",
      description: "Pay fees and complete the registration process.",
    },
  ];

  const requirements = {
    nursery: [
      "Birth certificate (certified copy)",
      "4 passport-size photographs",
      "Immunization card",
      "Parent/Guardian ID copy",
    ],
    primary: [
      "Birth certificate (certified copy)",
      "4 passport-size photographs",
      "Previous school report card",
      "Transfer letter (if applicable)",
      "Parent/Guardian ID copy",
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Join the Bright Angels family. We welcome learners who are eager to grow and excel.
            </p>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold font-medium uppercase tracking-wider text-sm">How To Apply</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Admission Process
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {admissionSteps.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <item.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold font-medium uppercase tracking-wider text-sm">What You Need</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Admission Requirements
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-background p-8 rounded-lg shadow-lg border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Nursery Section</h3>
                <ul className="space-y-3">
                  {requirements.nursery.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-lg border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Primary Section</h3>
                <ul className="space-y-3">
                  {requirements.primary.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Ready to Apply?
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Take the first step towards giving your child a bright future. Contact us today to 
                begin the admission process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="gold" size="lg">
                    Contact Admissions
                  </Button>
                </Link>
                <a
                  href="https://wa.me/256782785342?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20admissions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
