import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import newsImage1 from "@/assets/news-graduation.jpg";
import newsImage2 from "@/assets/news-sports.jpg";
import newsImage3 from "@/assets/news-science.jpg";

const newsItems = [
  {
    image: newsImage1,
    date: "December 10, 2024",
    title: "Student Leaders Installation Ceremony 2024",
    excerpt: "The annual installation ceremony marked a powerful moment as new prefects took their oath of service...",
    category: "Events",
  },
  {
    image: newsImage2,
    date: "December 5, 2024",
    title: "Inter-School Athletics Championship Victory",
    excerpt: "Our athletics team brought home the championship trophy after an outstanding performance...",
    category: "Sports",
  },
  {
    image: newsImage3,
    date: "November 28, 2024",
    title: "Science Fair Showcases Student Innovation",
    excerpt: "Students presented groundbreaking projects at the annual science fair, demonstrating creativity...",
    category: "Academics",
  },
];

export function NewsSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="badge-accent mb-4">Stay Updated</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Events & Announcements
            </h2>
            <div className="divider-gold mt-4" />
          </div>
          <Link to="/news">
            <Button variant="outline" className="w-fit group rounded-full border-primary text-primary hover:bg-primary hover:text-white">
              View All News
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/20 shadow-soft hover:shadow-elevated transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs">
                    <Calendar size={12} />
                    {item.date}
                  </div>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {item.excerpt}
                </p>
                <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:text-gold transition-colors">
                  Read More
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}