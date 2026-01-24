import { Globe, Code2, Workflow, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "High-converting landing pages and professional institutional websites that establish your digital presence and capture leads.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Lead Capture Forms"],
    },
    {
      icon: Code2,
      title: "Custom Apps & Functionalities",
      description: "Client portals, booking systems, and dashboards tailored to your specific business needs and workflows.",
      features: ["Client Portals", "Booking Systems", "Custom Dashboards", "Payment Integration"],
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Connect your tools and automate repetitive tasks to streamline operations and free up your valuable time.",
      features: ["Tool Integration", "Automated Workflows", "Email Sequences", "Data Sync"],
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
            Everything you need to <span className="text-gradient">grow online</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From stunning websites to powerful automations, we provide end-to-end digital solutions for service businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-border hover:border-accent/30"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-accent-gradient flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="outline" className="w-full group/btn">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Not sure what you need? Let's talk about your goals.</p>
          <Button variant="cta" size="lg" asChild>
            <a href="#contact">
              Schedule a Free Consultation
              <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
