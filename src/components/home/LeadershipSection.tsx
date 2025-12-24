import leader1 from "@/assets/leader-headteacher.jpg";
import leader2 from "@/assets/leader-deputy-academics.jpg";
import leader3 from "@/assets/leader-deputy-welfare.jpg";
import leader4 from "@/assets/leader-dos.jpg";

const leaders = [
  {
    image: leader1,
    name: "Madam Demere Sarah",
    role: "Founder & Head Teacher",
  },
  {
    image: leader2,
    name: "Mrs. Grace Mukasa",
    role: "Deputy HT - Academics",
  },
  {
    image: leader3,
    name: "Mr. Peter Ochieng",
    role: "Deputy HT - Welfare",
  },
  {
    image: leader4,
    name: "Mrs. Diana Akello",
    role: "Director of Studies",
  },
];

export function LeadershipSection() {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-gold font-medium tracking-wider text-sm uppercase">Our Leadership</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Meet Our Administrators
          </h2>
          <div className="divider-gold mx-auto mb-4" />
          <p className="text-muted-foreground">
            Dedicated leaders committed to nurturing the next generation
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="card-heritage overflow-hidden group text-center"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Info */}
              <div className="p-5">
                <h3 className="font-serif font-semibold text-lg text-foreground">
                  {leader.name}
                </h3>
                <p className="text-gold text-sm mt-1">
                  {leader.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
