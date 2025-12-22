import { Sparkles, Heart, Scale, Clock, Award, Link2 } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Striving for the highest standards in all endeavors",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "Caring for others with empathy and kindness",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  {
    icon: Scale,
    title: "Integrity",
    description: "Acting with honesty, fairness, and moral uprightness",
    color: "text-gold-dark",
    bg: "bg-gold/10",
  },
  {
    icon: Clock,
    title: "Discipline",
    description: "Commitment to punctuality and self-regulation",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Award,
    title: "Respect",
    description: "Valuing diversity and treating all with dignity",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Link2,
    title: "Perseverance",
    description: "Persistence in achieving goals despite challenges",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

export function CoreValuesSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-primary mb-4">Our Foundation</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Core Values
          </h2>
          <div className="divider-gold mx-auto mb-4" />
          <p className="text-muted-foreground">
            The principles that guide our community and shape the character of every Bright Angels pupil
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-2xl border border-border hover:border-primary/20 hover:shadow-elevated transition-all duration-300 group"
            >
              <div className={`w-14 h-14 mb-5 ${value.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <value.icon className={`w-7 h-7 ${value.color}`} />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}