import { Code, Smartphone, Briefcase, Server, ShieldCheck, HeartPulse } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Business Software Development",
      description: "Custom ERPs, CRMs, and operational tools to streamline your business workflow and boost productivity.",
      icon: <Briefcase size={32} className="text-blue-500" />
    },
    {
      title: "Custom Web Applications",
      description: "Scalable, secure, and lightning-fast web applications built with modern technologies.",
      icon: <Code size={32} className="text-indigo-500" />
    },
    {
      title: "Domestic & Home Solutions",
      description: "Smart home integrations, personal management apps, and tech solutions for everyday life.",
      icon: <HeartPulse size={32} className="text-teal-500" />
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      icon: <Smartphone size={32} className="text-purple-500" />
    },
    {
      title: "IT Consulting",
      description: "Expert advice on technology strategy, digital transformation, and system architecture.",
      icon: <Server size={32} className="text-yellow-500" />
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support, security updates, and performance optimization for your software.",
      icon: <ShieldCheck size={32} className="text-green-500" />
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive software solutions designed to solve complex problems. 
            Whether you need an enterprise system or a smart home application, we've got you covered.
          </p>
        </div>
        
        <div className="mb-20 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
          <img src="/mobile_app.png" alt="Smart Home Mobile Application" className="w-full h-[400px] object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 z-20 w-full md:w-1/2">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Smart Solutions for Modern Living</h3>
            <p className="text-gray-300 text-lg">We bring intuitive, beautifully designed applications to both business operations and domestic smart home environments.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)]">
              <div className="w-16 h-16 bg-slate-950 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center transition-colors">
                Request a Quote <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technologies We Master</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We use the best-in-class modern tech stacks to deliver highly scalable, secure, and performant solutions.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React / Next.js', 'Node.js / Express', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'AWS Cloud', 'Docker', 'React Native'].map((tech, idx) => (
              <div key={idx} className="flex items-center justify-center p-6 bg-slate-900/30 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-colors">
                <span className="font-semibold text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 p-12 rounded-3xl text-center border border-blue-800/50">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We specialize in bespoke software development tailored to unique requirements.
          </p>
          <Link href="/contact" className="inline-flex w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 rounded-full bg-white text-blue-900 font-bold transition-all hover:scale-105 shadow-lg items-center justify-center text-base md:text-lg">
            Let's Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
