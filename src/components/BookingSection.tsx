import { CheckCircle, Calendar } from "lucide-react";

const BookingSection = () => {
  const benefits = [
    "Free process audit — We'll identify where you're losing time",
    "Immediate insights — Walk away with actionable ideas",
    "No obligation — Just a conversation to explore possibilities",
  ];

  return (
    <section id="booking" className="py-20 md:py-32 bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-sm mb-4">
            Live Demo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience Automation: <span className="text-gradient">Book Your Strategy Call</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how easy this is? No back-and-forth emails. We can implement systems like this for your business too.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Side - Persuasive Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Let's Find the Bottlenecks in Your Business
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                This free 60-minute strategy call is designed to uncover the hidden inefficiencies costing you time and
                money. Whether it's manual scheduling, missed follow-ups, or an outdated website — we'll map it out
                together and show you a path forward.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
              <Calendar className="w-10 h-10 text-accent" />
              <div>
                <p className="font-semibold text-foreground">Pick a time that works for you</p>
                <p className="text-sm text-muted-foreground">Virtual meetings available across all time zones</p>
              </div>
            </div>
          </div>

          {/* Right Side - Calendar Embed */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/kelvin-kroc"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
