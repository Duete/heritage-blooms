import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeHelp, ClipboardList, Mail, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const questions = [
  "The current fee schedule for the class you are considering",
  "Payment deadlines and any charges beyond tuition",
  "Accepted payment methods and how to obtain a receipt",
  "Whether any fees or requirements differ by class or term",
];

const Fees = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
            Parent Information
          </span>
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Fees &amp; Payments</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Get the latest fee information directly from Demere’s Bright Angels Nursery &amp; Primary School.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid max-w-5xl gap-10 px-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-gold">Before making a payment</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Ask the school for its current fee schedule
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Fees and payment arrangements can change. Contact the school to confirm the current amounts and instructions for your child’s class before making a payment. This page does not list prices or provide bank or mobile-money details.
            </p>
            <div className="mt-8 rounded-xl border border-border bg-muted/40 p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <ClipboardList className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">What to confirm</h3>
              </div>
              <ul className="space-y-3">
                {questions.map((question) => (
                  <li key={question} className="flex items-start gap-3 text-muted-foreground">
                    <BadgeHelp className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8" aria-labelledby="contact-fees-heading">
            <span className="text-sm font-medium uppercase tracking-wider text-gold">Need details?</span>
            <h2 id="contact-fees-heading" className="mt-2 font-serif text-2xl font-bold text-foreground">
              Contact the school
            </h2>
            <p className="mt-3 text-muted-foreground">
              The school office can provide current information and answer questions about fees and payment arrangements.
            </p>
            <div className="mt-6 space-y-4">
              <a href="tel:+256782785342" className="flex items-center gap-3 text-foreground hover:text-primary">
                <Phone className="h-5 w-5 text-primary" />
                <span>+256 782 785 342</span>
              </a>
              <a href="mailto:info@demeresbrightangels.ac.ug" className="flex items-center gap-3 break-all text-foreground hover:text-primary">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span>info@demeresbrightangels.ac.ug</span>
              </a>
            </div>
            <div className="mt-7 flex flex-col gap-3">
              <Button asChild className="w-full bg-[#25D366] text-white hover:bg-[#20BA5A]">
                <a
                href="https://wa.me/256782785342?text=Hello%2C%20I%20would%20like%20to%20ask%20about%20school%20fees%20and%20payment%20arrangements"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Ask on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/admissions">
                  View Admissions Information
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Fees;
