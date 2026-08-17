import Link from "next/link";
import { ArrowRight, Code, Smartphone, Briefcase, Zap, Shield, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 md:mb-8">
              Empowering Future With <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Premium Software
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-10 leading-relaxed px-2">
              Business and domestic software solutions crafted with precision. From enterprise systems to smart home automation, we build tech that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full px-4 sm:px-0">
              <Link href="/contact" className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center">
                Get a Quote <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all hover:scale-105 border border-slate-700 flex items-center justify-center">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              End-to-end software development tailored to your specific needs, whether you're scaling a business or automating your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
              <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Briefcase className="text-blue-400 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Business Software</h3>
              <p className="text-gray-400 leading-relaxed">
                Custom enterprise solutions, CRM systems, and operational tools designed to streamline your business processes.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
              <div className="w-14 h-14 bg-indigo-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <Code className="text-indigo-400 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Web Apps</h3>
              <p className="text-gray-400 leading-relaxed">
                Scalable, secure, and lightning-fast web applications built with cutting-edge technologies like React and Next.js.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
              <div className="w-14 h-14 bg-teal-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                <Smartphone className="text-teal-400 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Domestic Solutions</h3>
              <p className="text-gray-400 leading-relaxed">
                Smart home integrations, personal management apps, and tailored tech solutions for your day-to-day life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section with Image */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Innovating the Future of Software</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                At IC TECH LTD, we don't just write code—we engineer solutions that drive real-world impact. Whether you're modernizing legacy business systems or pioneering new smart home applications, our holistic approach ensures scalability and performance.
              </p>
              <ul className="space-y-4 mb-8">
                {['Cloud-Native Architectures', 'AI & Machine Learning Integrations', 'Real-time Data Processing'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="text-blue-500 mr-3" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center transition-colors">
                Learn more about our team <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.15)] border border-slate-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay z-10" />
              <img src="/business_software.png" alt="Modern enterprise software interface" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">Why Choose IC TECH?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <Zap className="text-yellow-500 mb-6" size={48} />
              <h4 className="text-xl font-semibold mb-3">High Performance</h4>
              <p className="text-gray-400">Optimized code and infrastructure ensuring your software runs at lightning speed.</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="text-green-500 mb-6" size={48} />
              <h4 className="text-xl font-semibold mb-3">Secure by Design</h4>
              <p className="text-gray-400">Enterprise-grade security practices embedded from the first line of code.</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="text-blue-500 mb-6" size={48} />
              <h4 className="text-xl font-semibold mb-3">Reliable Support</h4>
              <p className="text-gray-400">Dedicated maintenance and support to keep your systems running smoothly.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We follow a streamlined, agile methodology to ensure your software is delivered on time, within budget, and to your exact specifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We learn about your goals, requirements, and the specific challenges you want to overcome." },
              { step: "02", title: "Design & Architecture", desc: "Our team creates wireframes, UI/UX designs, and scalable system architectures." },
              { step: "03", title: "Development", desc: "We build your software iteratively, providing regular updates and early access for feedback." },
              { step: "04", title: "Launch & Support", desc: "After rigorous testing, we deploy your software and provide ongoing maintenance." }
            ].map((item, index) => (
              <div key={index} className="relative p-6 border border-slate-800 rounded-2xl bg-slate-900/40 hover:bg-slate-800/60 transition-colors">
                <span className="text-5xl font-extrabold text-slate-800 absolute -top-4 right-4">{item.step}</span>
                <h4 className="text-xl font-bold mb-3 mt-4 text-white relative z-10">{item.title}</h4>
                <p className="text-gray-400 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Client Testimonials</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Here's what our partners have to say about working with IC TECH.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { role: "CEO, RetailCorp", quote: "IC TECH completely transformed our inventory management. The new ERP system saves us hours every single day." },
              { role: "Private Homeowner", quote: "The smart home integration they built for my property is flawless. Everything from lighting to security is now controlled via one elegant app." },
              { role: "Operations Director", quote: "Professional, responsive, and highly skilled. They delivered our logistics mobile app ahead of schedule and under budget." }
            ].map((testimonial, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col">
                <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center pt-6 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.role.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">{testimonial.role}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">Ready to transform your ideas into reality?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10 px-2">
            Let's discuss how our bespoke software solutions can elevate your business or home.
          </p>
          <Link href="/contact" className="inline-flex w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 rounded-full bg-white text-blue-900 font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] items-center justify-center text-base md:text-lg">
            Start Your Project Today
          </Link>
        </div>
      </section>
    </>
  );
}
