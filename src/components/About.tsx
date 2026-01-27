import { MapPin, Users, Heart, Shield, User } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  const values = [
    {
      icon: MapPin,
      title: "Local Focus",
      description:
        "Proudly based in London, Ontario. We know the local market and are always just a phone call (or a coffee) away.",
    },
    {
      icon: Users,
      title: "Partner, Not Vendor",
      description:
        "We don’t just build and disappear. We act as your long-term technical partner, invested in your continuous growth and stability.",
    },
    {
      icon: Heart,
      title: "Service-First Mindset",
      description:
        "We specialize in the unique workflows of service businesses—from contractors to consultants, clinics to coaches.",
    },
    {
      icon: Shield,
      title: "No-Nonsense Approach",
      description:
        "Clear communication, transparent pricing, and solutions that actually solve problems. No tech jargon or hidden fees.",
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
              Your local digital partner, not a <span className="text-gradient">faceless agency</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Forget about call centers and ticket numbers. We are a dedicated team right here in London, Ontario,
              building custom solutions for service providers like you. We don't just write code; we take the time to
              understand your business and help you grow.
            </p>

            {/* Photo Section */}
            <div className="mb-8 flex items-center gap-6">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-accent/20 bg-secondary flex items-center justify-center">
                {/* Replace this placeholder with your actual image */}
                {/* <img src="/your-photo.jpg" alt="Founder photo" className="w-full h-full object-cover" /> */}
                <User className="w-12 h-12 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Kelvin Carvalho</h3>
                <p className="text-muted-foreground">Founder & Lead Developer</p>
              </div>
            </div>

            {/* Stats 
            <div className="grid grid-cols-3 gap-6 py-8 border-y border-border">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">Custom Built</div>
                <div className="text-muted-foreground text-sm">Tailored solutions, no generic templates.</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">Direct Access</div>
                <div className="text-muted-foreground text-sm">No sales reps. You work directly with the expert.</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">100%</div>
                <div className="text-muted-foreground text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
            
            */}
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
