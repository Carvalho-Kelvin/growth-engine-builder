import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/3 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(152, 76%, 45%, 0.3) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(152, 76%, 45%, 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="section-container relative z-10 pt-24 pb-16 md:pt-0 md:pb-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - System Status */}
          <div
            className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-md bg-accent/10 border border-accent/20 mb-6 md:mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-accent font-mono text-[10px] md:text-xs font-medium uppercase tracking-wide">
              London, Ontario's Digital Partner
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 md:mb-6 opacity-0 animate-fade-in px-2"
            style={{ animationDelay: "0.2s" }}
          >
            Turn Your Systems Into <span className="text-gradient">Your Best Employees</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed opacity-0 animate-fade-in px-4"
            style={{ animationDelay: "0.3s" }}
          >
            We build websites and custom apps that help local businesses save time, automate tasks, and get more
            clients.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 opacity-0 animate-fade-in px-4"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="lg" className="w-full sm:w-auto md:text-base" asChild>
              <a href="#booking" className="group">
                Book Free Strategy Session
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto md:text-base" asChild>
              <a href="#contact">
                <Play size={16} className="mr-2" />
                Contact Us
              </a>
            </Button>
          </div>

          {/* Trust Indicators 
          <div
            className="mt-16 pt-8 border-t border-primary-foreground/10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-primary-foreground/50 text-sm mb-4">Trusted by local businesses</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {["50+ Projects", "5-Star Reviews", "24/7 Support", "100% Satisfaction"].map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-primary-foreground/70 font-medium">{stat}</span>
                </div>
              ))}
            </div>
          </div>    
          */}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
