import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import newsGraduation from "@/assets/news-graduation.jpg";
import newsScience from "@/assets/news-science.jpg";
import newsSports from "@/assets/news-sports.jpg";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Outstanding PLE Results for 2024",
      excerpt: "Our Primary 7 candidates achieved exceptional results in the 2024 Primary Leaving Examinations, with 95% passing in Division One and Two.",
      date: "December 15, 2024",
      category: "Academics",
      image: newsGraduation,
    },
    {
      id: 2,
      title: "Science Fair Winners",
      excerpt: "Bright Angels pupils impressed judges at the regional science fair with innovative projects on renewable energy and water purification.",
      date: "November 28, 2024",
      category: "Events",
      image: newsScience,
    },
    {
      id: 3,
      title: "Inter-School Sports Championship",
      excerpt: "Our school emerged champions in the annual inter-school athletics competition, winning gold medals in multiple categories.",
      date: "November 10, 2024",
      category: "Sports",
      image: newsSports,
    },
  ];

  const upcomingEvents = [
    {
      title: "Term 1 2025 Begins",
      date: "February 3, 2025",
      description: "New academic term commences for all classes.",
    },
    {
      title: "Parents' Meeting",
      date: "February 15, 2025",
      description: "General meeting to discuss term goals and activities.",
    },
    {
      title: "Cultural Day",
      date: "March 8, 2025",
      description: "Celebrating Uganda's rich cultural heritage.",
    },
    {
      title: "Mid-Term Break",
      date: "April 14-18, 2025",
      description: "Short break for pupils to rest and recharge.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Stay updated with the latest happenings at Bright Angels School.
            </p>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold font-medium uppercase tracking-wider text-sm">Latest Updates</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                School News
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-background rounded-lg overflow-hidden shadow-lg border border-border group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-medium text-gold uppercase">{article.category}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold font-medium uppercase tracking-wider text-sm">Mark Your Calendar</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Upcoming Events
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="bg-background p-6 rounded-lg shadow border border-border flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <div className="sm:w-32 shrink-0">
                      <div className="flex items-center gap-2 text-primary">
                        <Calendar className="w-5 h-5" />
                        <span className="font-semibold text-sm">{event.date}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{event.title}</h3>
                      <p className="text-muted-foreground text-sm">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
