import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Enterprise ERP System",
      category: "Business Software",
      description: "A comprehensive resource planning system developed for a manufacturing client, integrating inventory, HR, and finance modules.",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      imageColor: "bg-blue-900/30",
    },
    {
      title: "Smart Home Dashboard",
      category: "Domestic Solution",
      description: "A centralized control panel for managing IoT devices, security cameras, and energy consumption in modern homes.",
      tags: ["React", "IoT", "WebSockets"],
      imageColor: "bg-teal-900/30",
    },
    {
      title: "FinTech Analytics Platform",
      category: "Web Application",
      description: "A high-performance analytics dashboard processing real-time financial data with complex data visualization.",
      tags: ["Vue.js", "Python", "D3.js"],
      imageColor: "bg-indigo-900/30",
    },
    {
      title: "Logistics Delivery App",
      category: "Mobile App",
      description: "Cross-platform mobile application for delivery drivers featuring real-time routing, signature capture, and offline capabilities.",
      tags: ["React Native", "Firebase", "Maps API"],
      imageColor: "bg-purple-900/30",
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore a selection of our recent projects. From complex enterprise systems to elegant domestic applications, see how we deliver excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {projects.map((project, index) => (
            <div key={index} className="group rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/40 hover:border-blue-500/50 transition-all">
              <div className={`h-64 ${project.imageColor} w-full flex items-center justify-center relative overflow-hidden`}>
                {/* Abstract placeholder for project image */}
                <div className="absolute inset-0 opacity-50 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
                <span className="text-white/50 font-bold tracking-widest uppercase text-xl z-10 group-hover:scale-110 transition-transform duration-500">
                  {project.title}
                </span>
              </div>
              <div className="p-8">
                <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 text-xs text-gray-300 rounded-full border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center text-white hover:text-blue-400 transition-colors font-medium">
                  Discuss a similar project <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-16 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center max-w-4xl mx-auto">
            {[
              { stat: "99.9%", label: "Uptime Guaranteed" },
              { stat: "24/7", label: "Dedicated Support" }
            ].map((item, idx) => (
              <div key={idx} className="p-6">
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-2">
                  {item.stat}
                </div>
                <div className="text-gray-400 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
