import { Users, Shield, Heart, Award, Clock, BookOpen } from "lucide-react";

const promises = [
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Maximum 25 pupils per class for personalized attention",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Secure campus with trained staff and safety protocols",
  },
  {
    icon: Heart,
    title: "Caring Teachers",
    description: "Dedicated educators who nurture every child's potential",
  },
  {
    icon: Award,
    title: "Quality Education",
    description: "Uganda National Curriculum with enrichment activities",
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description: "Convenient school hours for working parents",
  },
  {
    icon: BookOpen,
    title: "Holistic Learning",
    description: "Academic, creative, and physical development focus",
  },
];

export function PromiseSection() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-primary mb-4">Our Promise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Why Parents Choose Us
          </h2>
          <div className="divider-gold mx-auto mb-4" />
          <p className="text-muted-foreground">
            We are committed to providing the best early childhood and primary education experience for your child
          </p>
        </div>

        {/* Promises Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 group border border-border hover:border-primary/20"
            >
              <div className="w-14 h-14 mb-5 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <promise.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                {promise.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {promise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}