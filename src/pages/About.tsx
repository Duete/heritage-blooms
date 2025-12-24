import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BookOpen, Target, Eye, Heart, Users, Award } from "lucide-react";
import aboutStudents from "@/assets/about-students.jpg";
import leaderHeadteacher from "@/assets/leader-headteacher.jpg";
import leaderDeputyAcademics from "@/assets/leader-deputy-academics.jpg";
import leaderDeputyWelfare from "@/assets/leader-deputy-welfare.jpg";
import leaderDos from "@/assets/leader-dos.jpg";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const leaders = [
    {
      name: "Madam Demere Sarah",
      role: "Founder & Head Teacher",
      image: leaderHeadteacher,
      description: "Founded the school in 2013 with a vision to provide quality education. She leads with passion and dedication.",
    },
    {
      name: "Mr. John Wanyama",
      role: "Deputy Head - Academics",
      image: leaderDeputyAcademics,
      description: "Overseeing curriculum development and ensuring academic excellence across all classes.",
    },
    {
      name: "Mrs. Grace Nabwire",
      role: "Deputy Head - Welfare",
      image: leaderDeputyWelfare,
      description: "Dedicated to student wellbeing and creating a nurturing school environment.",
    },
    {
      name: "Mr. Peter Masaba",
      role: "Director of Studies",
      image: leaderDos,
      description: "Coordinating teaching activities and maintaining high educational standards.",
    },
  ];

  const coreValues = [
    {
      icon: BookOpen,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We nurture each child with love, care, and understanding.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We build strong partnerships with families and the community.",
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We uphold honesty and moral principles in all our actions.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Discover our story, mission, and the values that guide us in shaping young minds.
            </p>
          </div>
        </section>

        {/* History Section */}
        <section id="history" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-gold font-medium uppercase tracking-wider text-sm">Our History</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  A Legacy of Educational Excellence
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Demere's Bright Angels Nursery & Primary School was founded in 2013 by Madam Demere Sarah 
                    with a vision to provide quality education to children in Nkoma Northern City Division, Mbale City. 
                    What began as a small nursery school has grown through her dedication and commitment to 
                    educational excellence.
                  </p>
                  <p>
                    Over the years, we have expanded from nursery to include primary education, 
                    nurturing young minds and preparing them for success in their academic journey 
                    and beyond.
                  </p>
                  <p>
                    Today, under Madam Demere Sarah's continued leadership, we uphold our founding principles 
                    while embracing modern teaching methodologies to prepare our pupils for the challenges 
                    of the 21st century.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={aboutStudents}
                  alt="Students at Bright Angels School"
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-gold text-primary-foreground p-6 rounded-lg shadow-lg">
                  <p className="font-serif text-2xl font-bold">Since 2013</p>
                  <p className="text-sm">Founded by Madam Demere Sarah</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="mission" className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Purpose</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Mission & Vision
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-background p-8 rounded-lg shadow-lg border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide a nurturing and stimulating learning environment that develops each child's 
                  intellectual, social, emotional, and physical potential, preparing them to become 
                  responsible citizens and lifelong learners.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg shadow-lg border border-border">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading nursery and primary school in the region, recognized for academic 
                  excellence, character development, and producing well-rounded individuals who positively 
                  impact society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section id="values" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold font-medium uppercase tracking-wider text-sm">What We Believe</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Our Core Values
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-lg shadow-lg border border-border text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Team</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                School Leadership
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg overflow-hidden shadow-lg border border-border group"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-serif font-bold text-foreground">{leader.name}</h3>
                    <p className="text-gold text-sm mb-2">{leader.role}</p>
                    <p className="text-muted-foreground text-xs">{leader.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
