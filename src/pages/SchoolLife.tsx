import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Music, Palette, Trophy, Users, BookOpen, Heart } from "lucide-react";
import schoolSports from "@/assets/school-sports.jpg";
import schoolArts from "@/assets/school-arts.jpg";
import schoolClubs from "@/assets/school-clubs.jpg";

const SchoolLife = () => {
  const activities = [
    {
      icon: Trophy,
      title: "Sports & Games",
      description: "Football, netball, athletics, and indoor games to develop physical fitness and teamwork.",
      image: schoolSports,
    },
    {
      icon: Palette,
      title: "Arts & Crafts",
      description: "Creative expression through drawing, painting, music, and drama performances.",
      image: schoolArts,
    },
    {
      icon: Users,
      title: "Clubs & Societies",
      description: "Debate club, science club, environmental club, and more for holistic development.",
      image: schoolClubs,
    },
  ];

  const dailySchedule = [
    { time: "7:30 AM", activity: "Arrival & Morning Assembly" },
    { time: "8:00 AM", activity: "Classes Begin" },
    { time: "10:30 AM", activity: "Break Time" },
    { time: "11:00 AM", activity: "Classes Resume" },
    { time: "1:00 PM", activity: "Lunch Break" },
    { time: "2:00 PM", activity: "Afternoon Classes" },
    { time: "4:00 PM", activity: "Extra-Curricular Activities" },
    { time: "5:00 PM", activity: "Departure" },
  ];

  const facilities = [
    "Spacious classrooms with modern furniture",
    "Well-equipped library",
    "Playground and sports field",
    "Computer laboratory",
    "Science corner",
    "Sick bay with trained nurse",
    "Clean sanitation facilities",
    "Secure compound with perimeter fence",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">School Life</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Experience the vibrant community life at Bright Angels School.
            </p>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold font-medium uppercase tracking-wider text-sm">Beyond Academics</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Extra-Curricular Activities
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg overflow-hidden shadow-lg border border-border group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <activity.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{activity.title}</h3>
                    <p className="text-muted-foreground text-sm">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Schedule */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold font-medium uppercase tracking-wider text-sm">A Typical Day</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Daily Schedule
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-background rounded-lg shadow-lg border border-border overflow-hidden">
                {dailySchedule.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 ${
                      index !== dailySchedule.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <div className="w-24 shrink-0">
                      <span className="font-semibold text-primary">{item.time}</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-foreground">{item.activity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Campus</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                School Facilities
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-background p-4 rounded-lg shadow border border-border flex items-center gap-3"
                >
                  <Heart className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-foreground text-sm">{facility}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pastoral Care */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <span className="text-gold font-medium uppercase tracking-wider text-sm">Pupil Welfare</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Pastoral Care
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At Bright Angels, we believe that every child deserves to feel safe, valued, and 
                    supported. Our pastoral care program ensures that each pupil receives individual 
                    attention and guidance.
                  </p>
                  <p>
                    Our dedicated teachers and support staff work together to create a nurturing 
                    environment where children can thrive academically, socially, and emotionally.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background p-6 rounded-lg shadow border border-border text-center">
                  <BookOpen className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground">Guidance</h4>
                  <p className="text-muted-foreground text-xs mt-1">Academic & personal counseling</p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow border border-border text-center">
                  <Heart className="w-10 h-10 text-gold mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground">Care</h4>
                  <p className="text-muted-foreground text-xs mt-1">Emotional support & wellbeing</p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow border border-border text-center">
                  <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground">Community</h4>
                  <p className="text-muted-foreground text-xs mt-1">Inclusive & welcoming environment</p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow border border-border text-center">
                  <Music className="w-10 h-10 text-gold mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground">Expression</h4>
                  <p className="text-muted-foreground text-xs mt-1">Creative outlets & activities</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SchoolLife;
