"use client";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    if (!form.current) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your project? Get in touch with us to discuss your software needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
            
            {submitStatus === "success" && (
              <div className="bg-green-500/20 border border-green-500/50 text-green-400 p-4 rounded-xl mb-8">
                Thank you! Your message has been sent successfully. We will get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-400 p-4 rounded-xl mb-8">
                Oops! Something went wrong. Please try again later.
              </div>
            )}

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="+44 7123 456789" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">Service of Interest</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                    <option value="">Select a service</option>
                    <option value="business">Business Software</option>
                    <option value="domestic">Domestic Solutions</option>
                    <option value="web">Custom Web Apps</option>
                    <option value="mobile">Mobile Apps</option>
                    <option value="consulting">IT Consulting</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button disabled={isSubmitting} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? "Sending..." : <><Send size={20} className="mr-2" /> Send Message</>}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mr-6 shrink-0 text-blue-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Our Location</h4>
                    <p className="text-gray-400 leading-relaxed">
                      19 Radnor Close, Worthing,<br />
                      BN13 1DJ, United Kingdom
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mr-6 shrink-0 text-blue-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Call Us</h4>
                    <a href="tel:07344860892" className="text-gray-400 hover:text-white transition-colors block">
                      07344 860892
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center mr-6 shrink-0 text-blue-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email Us</h4>
                    <a href="mailto:tech@ictechlimited.com" className="text-gray-400 hover:text-white transition-colors block mb-1">
                      tech@ictechlimited.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-64 bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.4853037388796!2d-0.413725!3d50.8406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875a25b3a3221b7%3A0xc66579fc2c4c6819!2s19%20Radnor%20Cl%2C%20Worthing%20BN13%201DJ%2C%20UK!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
