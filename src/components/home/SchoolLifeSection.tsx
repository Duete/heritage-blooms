import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import sportsImage from "@/assets/school-sports.jpg";
import artsImage from "@/assets/school-arts.jpg";
import clubsImage from "@/assets/school-clubs.jpg";

const activities = [
  {
    image: sportsImage,
    title: "Games & Sports",
    description: "We offer a wide array of sports including netball, athletics, football, and swimming. Participation is encouraged at all levels, promoting competitive excellence and lifelong fitness.",
  },
  {
    image: artsImage,
    title: "Arts & Culture",
    description: "Our vibrant arts program nurtures creativity through music, drama, dance, and visual arts. Students regularly showcase their talents at festivals and competitions.",
  },
  {
    image: clubsImage,
    title: "Clubs & Societies",
    description: "From debate club to environmental conservation, our diverse clubs provide platforms for students to explore interests and develop leadership skills.",
  },
];

export function SchoolLifeSection() {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-gold font-medium tracking-wider text-sm uppercase">Beyond the Classroom</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-4">
            School Life
          </h2>
          <div className="divider-gold mx-auto mb-4" />
          <p className="text-primary-foreground/80">
            Building a vibrant community of confident, capable, and accomplished students
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/5]">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-serif font-semibold text-xl text-cream mb-2">
                  {activity.title}
                </h3>
                <p className="text-cream/80 text-sm mb-4 line-clamp-3">
                  {activity.description}
                </p>
                <span className="text-gold text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="heroGold" className="group">
            Discover School Life
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
