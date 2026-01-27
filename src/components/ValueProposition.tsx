import { Clock, Sparkles, TrendingUp } from "lucide-react";

const ValueProposition = () => {
  const cards = [
    {
      icon: Clock,
      title: "Stop Wasting Time",
      problem: "Manual admin tasks eating your day",
      solution: "Automated workflows that run while you sleep",
      accent: "bg-accent",
    },
    {
      icon: Sparkles,
      title: "Look Professional",
      problem: "Outdated website hurting credibility",
      solution: "Modern, high-performance sites that impress",
      accent: "bg-cta",
    },
    {
      icon: TrendingUp,
      title: "Grow Faster",
      problem: "Missing opportunities to capture leads",
      solution: "Data-driven features that convert visitors",
      accent: "bg-accent",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            An inefficient website is <span className="text-gradient">slowing you down</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Most small business websites are just digital brochures. We build custom solutions designed to optimize your
            workflow, eliminate manual tasks, and help your business grow.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Accent Top Border */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${card.accent}`} />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${card.accent} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon className={`w-7 h-7 ${card.accent === "bg-accent" ? "text-accent" : "text-cta"}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4">{card.title}</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-destructive mt-1">✕</span>
                  <p className="text-muted-foreground">{card.problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <p className="text-foreground font-medium">{card.solution}</p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
