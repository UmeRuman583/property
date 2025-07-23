import AboutUs from "./About";

const steps = [
  {
    number: 1,
    title: "Get a Trust-Property offer",
    description: "Receive a data-driven property valuation within 24 hours — with zero obligation.",
  },
  {
    number: 2,
    title: "Sign the agreement",
    description: "Experience peace of mind through a transparent, digitally-signed contract process.",
  },
  {
    number: 3,
    title: "Get rent-ready",
    description: "We'll help prepare your property to attract top tenants and maximize appeal.",
  },
  {
    number: 4,
    title: "Receive monthly payments",
    description: "Relax with on-time, direct deposit payments — no stress, no delays.",
  },
];

const HowItWorks = () => {
  return (
    <>
      <section id="how-it-works" className="px-22 py-30 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {"How It Works"}
          </h2>
          <p className="text-gray-700 text-lg font-normal mb-12 max-w-3xl mx-auto">
            {"Our process is simple, transparent, and designed to make property management stress-free and efficient."}
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center px-4 relative"
              >
                <div className="w-16 h-16 rounded-full bg-[#0E2148] text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-sm">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-[#0E2148] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#0E2148] text-sm leading-relaxed font-normal max-w-xs">
                  {step.description}
                </p>

                {/* Vertical divider */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute right-[-24px] top-1/2 transform -translate-y-1/2">
                    <div className="w-px h-25 bg-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <AboutUs />
    </>
  );
};

export default HowItWorks;
