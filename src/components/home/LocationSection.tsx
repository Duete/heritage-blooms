import { MapPin, Phone, Mail, Clock } from "lucide-react";

const LocationSection = () => {
  const latitude = 1.100087;
  const longitude = 34.176747;
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Find Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit our campus and experience our vibrant learning environment firsthand.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    P.O. Box 123<br />
                    Bungoma, Kenya
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground text-sm">
                    +254 700 123 456<br />
                    +254 733 456 789
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm">
                    info@schoolname.ac.ke<br />
                    admissions@schoolname.ac.ke
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon - Fri: 8:00 AM - 5:00 PM<br />
                    Sat: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden h-full min-h-[400px]">
              <iframe
                title="School Location"
                width="100%"
                height="100%"
                style={{ minHeight: '400px', border: 0 }}
                loading="lazy"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01}%2C${latitude - 0.01}%2C${longitude + 0.01}%2C${latitude + 0.01}&layer=mapnik&marker=${latitude}%2C${longitude}`}
              />
            </div>
            <p className="text-center mt-3 text-sm text-muted-foreground">
              <a 
                href={`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=15/${latitude}/${longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Larger Map →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
