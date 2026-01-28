import { Globe, Code2, Workflow, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Professional websites and high-converting landing pages designed to establish your brand and turn visitors into clients.",
      features: ["Mobile-First Design", "SEO Optimized", "Fast Loading", "Lead Capture Forms"],
    },
    {
      icon: Code2,
      title: "Custom Apps & Functionalities",
      description:
        "Client portals, booking systems, and dashboards tailored to your specific business needs and workflows.",
      features: [
        "Secure Client Portals",
        "Automated Booking Systems",
        "Custom Dashboards",
        "Online Payment Integration",
      ],
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description:
        "Connect your favorite tools to automate repetitive tasks, eliminate human error, and free up your valuable time.",
      features: ["Tool Integration", "Automated Workflows", "Smart Email Sequences", "Auto-Sync Data"],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple Tools for Complex Problems
          </h2>
          <p className="text-lg text-muted-foreground">
            From high-converting websites to time-saving automations, we provide the exact digital tools service
            businesses need to grow without the tech headache.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/5 hover:border-accent/50"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-foreground font-mono text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Let's talk about your goals!</p>
          <Button variant="cta" size="lg" asChild>
            <a href="#contact">
              Schedule a Free Strategy Session
              <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
