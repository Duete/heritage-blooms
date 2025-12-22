import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BookOpen, Users, GraduationCap, Award, Clock, CheckCircle } from "lucide-react";

const Academics = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const curriculumLevels = [
    {
      level: "Nursery Section",
      ages: "Ages 3-5",
      classes: ["Baby Class", "Middle Class", "Top Class"],
      focus: "Early childhood development through play-based learning, socialization, and foundational skills.",
    },
    {
      level: "Lower Primary",
      ages: "Ages 6-9",
      classes: ["Primary 1", "Primary 2", "Primary 3"],
      focus: "Building strong literacy, numeracy, and critical thinking foundations.",
    },
    {
      level: "Upper Primary",
      ages: "Ages 10-13",
      classes: ["Primary 4", "Primary 5"],
      comingSoon: ["Primary 6 (2027)", "Primary 7 (2028)"],
      focus: "Advanced learning and preparation for national examinations (PLE).",
    },
  ];

  const subjects = [
    "English Language",
    "Mathematics",
    "Science",
    "Social Studies",
    "Religious Education",
    "Creative Arts",
    "Physical Education",
    "Local Language",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Academics</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Discover our comprehensive curriculum designed to nurture young minds.
            </p>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Curriculum</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Learning Levels
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {curriculumLevels.map((level, index) => (
                <div
                  key={index}
                  className="bg-background p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{level.level}</h3>
                  <p className="text-gold text-sm mb-4">{level.ages}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Classes:</h4>
                    <ul className="space-y-1">
                      {level.classes.map((cls, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground text-sm">
                          <CheckCircle className="w-4 h-4 text-gold" />
                          {cls}
                        </li>
                      ))}
                      {level.comingSoon?.map((cls, idx) => (
                        <li key={`coming-${idx}`} className="flex items-center gap-2 text-muted-foreground/60 text-sm italic">
                          <Clock className="w-4 h-4 text-muted-foreground/60" />
                          {cls}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-muted-foreground text-sm">{level.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments/Subjects Section */}
        <section id="departments" className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold font-medium uppercase tracking-wider text-sm">What We Teach</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Subjects Offered
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="bg-background p-4 rounded-lg shadow border border-border flex items-center gap-3"
                >
                  <BookOpen className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-foreground">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Examinations Section */}
        <section id="exams" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold font-medium uppercase tracking-wider text-sm">Assessment</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Examinations
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-background p-8 rounded-lg shadow-lg border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Continuous Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  Regular tests and assignments throughout the term to monitor student progress and 
                  identify areas needing improvement.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold" />
                    Weekly class tests
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold" />
                    Monthly assessments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold" />
                    Project work
                  </li>
                </ul>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-lg border border-border">
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">National Examinations</h3>
                <p className="text-muted-foreground mb-4">
                  Our Primary 7 candidates sit for the Primary Leaving Examinations (PLE) administered 
                  by UNEB.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold" />
                    Intensive PLE preparation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold" />
                    Mock examinations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold" />
                    Career guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Academics;
