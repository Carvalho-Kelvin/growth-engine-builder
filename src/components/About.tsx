import { MapPin, Users, Heart, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: MapPin,
      title: "Local Focus",
      description: "Based in London, Ontario. We understand the local market and are always a phone call away.",
    },
    {
      icon: Users,
      title: "Partner, Not Vendor",
      description: "We don't just build and disappear. We're invested in your long-term success and growth.",
    },
    {
      icon: Heart,
      title: "Service-First Mindset",
      description: "We specialize in service businesses—from contractors to consultants, clinics to coaches.",
    },
    {
      icon: Shield,
      title: "No-Nonsense Approach",
      description: "Clear communication, fair pricing, and solutions that actually work. No tech jargon or hidden fees.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your local digital partner, not a{" "}
              <span className="text-gradient">faceless agency</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're not a massive agency that treats you like a ticket number. We're a dedicated team 
              right here in London, Ontario, focused on helping service providers like you succeed online. 
              When you work with us, you get a real partner who understands your business.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8 border-y border-border">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">5+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">50+</div>
                <div className="text-muted-foreground text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">100%</div>
                <div className="text-muted-foreground text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300 border border-transparent hover:border-accent/20"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
