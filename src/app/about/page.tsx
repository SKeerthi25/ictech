import { Users, Target, Rocket } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About IC TECH</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are a UK-based software development company driven by a passion for technology and a commitment to excellence. 
            From enterprise-grade business systems to innovative domestic solutions, we turn complex problems into elegant software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 rounded-full" />
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To empower businesses and individuals with cutting-edge, reliable, and scalable software solutions. We believe in bridging the gap between human potential and technological advancement.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mr-6 shrink-0 text-blue-500">
                <Target size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Precision Engineering</h4>
                <p className="text-gray-400">Every line of code we write is purposeful, ensuring high performance and maintainability.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-indigo-900/50 rounded-xl flex items-center justify-center mr-6 shrink-0 text-indigo-500">
                <Users size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Client-Centric Approach</h4>
                <p className="text-gray-400">We work closely with you at every step, ensuring the final product aligns perfectly with your vision.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-teal-900/50 rounded-xl flex items-center justify-center mr-6 shrink-0 text-teal-500">
                <Rocket size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Future-Ready Tech</h4>
                <p className="text-gray-400">We utilize modern tech stacks (React, Next.js, Node.js) so your software scales effortlessly as you grow.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide everything we build.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Innovation", desc: "Constantly pushing boundaries and adopting new technologies to build better software." },
              { title: "Integrity", desc: "Transparent communication, honest pricing, and ethical development practices." },
              { title: "Quality", desc: "Refusing to compromise on performance, security, or code maintainability." },
              { title: "Collaboration", desc: "Working as a unified team with our clients to ensure shared success." }
            ].map((value, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl text-center hover:border-blue-500/50 transition-colors">
                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline/History */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A brief look at how we've grown.</p>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {[
              { year: "2019", title: "Foundation", desc: "IC TECH LTD was established in Worthing, UK with a focus on local business software." },
              { year: "2021", title: "Expansion to Domestic Tech", desc: "Launched our smart home and domestic automation division to meet rising consumer demand." },
              { year: "2023", title: "Enterprise Scaling", desc: "Expanded our team to handle large-scale enterprise ERP systems and complex web applications." },
              { year: "2026", title: "Looking Forward", desc: "Continuing to pioneer AI integrations and modern tech stacks for a global client base." }
            ].map((item, idx) => (
              <div key={idx} className={`relative flex items-center md:justify-normal md:odd:flex-row-reverse group is-active`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div className="flex-1 ml-4 md:ml-0 md:w-[calc(50%-2.5rem)] md:flex-none bg-slate-900/50 border border-slate-800 p-5 md:p-6 rounded-2xl shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1 sm:gap-0">
                    <h4 className="font-bold text-white text-base md:text-lg">{item.title}</h4>
                    <span className="text-blue-400 font-mono font-bold text-sm">{item.year}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
