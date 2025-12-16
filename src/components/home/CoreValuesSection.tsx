import { Sparkles, Heart, Scale, Clock, Award, Link2 } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Striving for the highest standards in all endeavors",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "Caring for others with empathy and kindness",
  },
  {
    icon: Scale,
    title: "Integrity",
    description: "Acting with honesty, fairness, and moral uprightness",
  },
  {
    icon: Clock,
    title: "Discipline",
    description: "Commitment to punctuality and self-regulation",
  },
  {
    icon: Award,
    title: "Respect",
    description: "Valuing diversity and treating all with dignity",
  },
  {
    icon: Link2,
    title: "Perseverance",
    description: "Persistence in achieving goals despite challenges",
  },
];

export function CoreValuesSection() {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-gold font-medium tracking-wider text-sm uppercase">Our Foundation</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Core Values
          </h2>
          <div className="divider-gold mx-auto mb-4" />
          <p className="text-muted-foreground">
            The principles that guide our community and shape the character of every Victoria High student
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="card-heritage p-6 text-center group hover:border-gold/50"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <value.icon className="w-8 h-8 text-primary group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-serif font-semibold text-xl text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
