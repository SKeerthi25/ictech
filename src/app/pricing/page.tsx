import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter / Domestic",
      price: "Custom",
      description: "Perfect for smart home setups and small personal management applications.",
      features: [
        "Requirements gathering session",
        "Custom UI/UX design (Up to 5 screens)",
        "Basic smart home integration",
        "Mobile-responsive web app",
        "1 month post-launch support",
      ],
      highlighted: false,
    },
    {
      name: "Business Pro",
      price: "Custom",
      description: "Ideal for growing businesses needing CRMs, ERPs, or custom operational tools.",
      features: [
        "In-depth business workflow analysis",
        "Full custom software development",
        "Third-party API integrations",
        "Secure user authentication & roles",
        "Admin dashboard & analytics",
        "6 months priority support & SLA",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Retainer",
      description: "Dedicated development teams for large-scale, continuous software engineering.",
      features: [
        "Dedicated project manager",
        "Full-stack development team",
        "Enterprise-grade security audits",
        "High-availability architecture",
        "Continuous CI/CD deployment",
        "24/7 round-the-clock support",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Transparent, Tailored Pricing</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Because every project is unique, we provide bespoke quotes based on your specific requirements. Here are the typical package structures we offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`rounded-3xl p-8 transition-all duration-300 ${
                tier.highlighted 
                  ? "bg-gradient-to-b from-blue-900/40 to-slate-900 border border-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.2)] md:-translate-y-4" 
                  : "bg-slate-900/50 border border-slate-800 hover:border-slate-600"
              }`}
            >
              {tier.highlighted && (
                <span className="bg-blue-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-4 inline-block">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
              <p className="text-gray-400 mb-6 min-h-[48px]">{tier.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                {tier.price !== "Custom" && tier.price !== "Retainer" && <span className="text-gray-400">/project</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className={`w-5 h-5 mr-3 shrink-0 ${tier.highlighted ? "text-blue-400" : "text-gray-500"}`} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/contact" 
                className={`w-full block text-center py-4 rounded-xl font-bold transition-all ${
                  tier.highlighted
                    ? "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600"
                }`}
              >
                Request a Quote
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
