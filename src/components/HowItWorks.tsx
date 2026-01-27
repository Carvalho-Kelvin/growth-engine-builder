import { Phone, Laptop, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Discovery Call",
      description:
        "We meet (virtually or locally) to map out your bottlenecks and identify where you're losing time and money.",
    },
    {
      number: "02",
      icon: Laptop,
      title: "Build & Automate",
      description:
        "We design your website and set up the custom tools tailored to your workflow. You focus on your business while we handle the tech.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Launch & Training",
      description:
        "We launch your new system and teach you exactly how to use it. You get full control and ownership from day one.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Simple Process, <span className="text-gradient">Serious Results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started is easy. We've streamlined our process to get you up and running quickly.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8 px-3 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <step.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
