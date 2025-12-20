import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { X } from "lucide-react";
import aboutStudents from "@/assets/about-students.jpg";
import heroSchool from "@/assets/hero-school.jpg";
import schoolSports from "@/assets/school-sports.jpg";
import schoolArts from "@/assets/school-arts.jpg";
import schoolClubs from "@/assets/school-clubs.jpg";
import newsGraduation from "@/assets/news-graduation.jpg";
import newsScience from "@/assets/news-science.jpg";
import newsSports from "@/assets/news-sports.jpg";
import ctaCampus from "@/assets/cta-campus.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: heroSchool, alt: "School campus view", category: "Campus" },
    { src: aboutStudents, alt: "Students learning", category: "Learning" },
    { src: schoolSports, alt: "Sports activities", category: "Sports" },
    { src: schoolArts, alt: "Arts and crafts", category: "Arts" },
    { src: schoolClubs, alt: "Club activities", category: "Clubs" },
    { src: newsGraduation, alt: "Graduation ceremony", category: "Events" },
    { src: newsScience, alt: "Science fair", category: "Events" },
    { src: newsSports, alt: "Sports day", category: "Sports" },
    { src: ctaCampus, alt: "Campus facilities", category: "Campus" },
  ];

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Explore our vibrant school life through pictures.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
