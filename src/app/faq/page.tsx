"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What types of software does IC TECH develop?",
      answer: "We develop a wide range of software, including enterprise-level business applications, custom web platforms, mobile applications (iOS/Android), and bespoke domestic/smart home solutions."
    },
    {
      question: "How long does a typical software project take?",
      answer: "Project timelines vary greatly depending on complexity. A simple web application might take 4-6 weeks, while a complex enterprise ERP system could take 4-8 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance packages to ensure your software remains secure, up-to-date, and performs optimally as your business grows."
    },
    {
      question: "How do you handle software security?",
      answer: "Security is a top priority. We follow industry best practices, implement robust encryption, conduct regular security audits, and ensure compliance with relevant data protection regulations (like GDPR)."
    },
    {
      question: "Will I own the source code?",
      answer: "Yes, once the project is completed and fully paid for, all intellectual property rights and the complete source code are transferred to you, unless a different licensing agreement was specifically requested."
    },
    {
      question: "What is your pricing structure?",
      answer: "We typically work on a fixed-price model for well-defined projects, or a time-and-materials (hourly/daily rate) basis for ongoing or highly agile projects. We provide detailed, transparent quotes before any work begins."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-400">
            Find answers to common questions about our services, process, and policies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-500 shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-gray-500 shrink-0" size={24} />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-400 leading-relaxed border-t border-slate-800 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
