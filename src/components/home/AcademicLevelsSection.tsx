import { Button } from "@/components/ui/button";
import { ArrowRight, Baby, BookOpen, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const levels = [
  {
    icon: Baby,
    title: "Nursery Section",
    ages: "Ages 3-5",
    classes: ["Baby Class", "Middle Class", "Top Class"],
    description: "A nurturing environment where little ones learn through play, discovery, and creative activities.",
    color: "bg-pink-500",
    lightColor: "bg-pink-50",
    textColor: "text-pink-600",
  },
  {
    icon: BookOpen,
    title: "Lower Primary",
    ages: "Ages 6-9",
    classes: ["P.1", "P.2", "P.3"],
    description: "Building strong foundations in literacy, numeracy, and essential life skills.",
    color: "bg-primary",
    lightColor: "bg-primary/5",
    textColor: "text-primary",
  },
  {
    icon: GraduationCap,
    title: "Upper Primary",
    ages: "Ages 10-13",
    classes: ["P.4", "P.5", "P.6 (2027)", "P.7 (2028)"],
    description: "Advanced learning and preparation for national examinations (PLE).",
    color: "bg-gold",
    lightColor: "bg-gold/10",
    textColor: "text-gold-dark",
  },
];

export function AcademicLevelsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-accent mb-4">Academic Levels</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Education for Every Stage
          </h2>
          <div className="divider-gold mx-auto mb-4" />
          <p className="text-muted-foreground">
            From nursery to upper primary, we guide your child's journey of learning and growth
          </p>
        </div>

        {/* Levels Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated"
            >
              {/* Top colored bar */}
              <div className={`h-2 ${level.color}`} />
              
              <div className="p-8">
                <div className={`w-16 h-16 ${level.lightColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <level.icon className={`w-8 h-8 ${level.textColor}`} />
                </div>
                
                <h3 className="font-bold text-xl text-foreground mb-1">
                  {level.title}
                </h3>
                <span className={`text-sm font-medium ${level.textColor}`}>{level.ages}</span>
                
                <p className="text-muted-foreground text-sm mt-4 mb-6">
                  {level.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {level.classes.map((cls, idx) => (
                    <span 
                      key={idx} 
                      className={`text-xs font-medium px-3 py-1 rounded-full ${level.lightColor} ${level.textColor}`}
                    >
                      {cls}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to="/academics" 
                  className={`inline-flex items-center text-sm font-semibold ${level.textColor} hover:gap-3 transition-all`}
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/academics">
            <Button size="lg" className="bg-primary hover:bg-forest-light text-white font-semibold px-8 rounded-full">
              View Full Curriculum
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}