
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Search, HeartHandshake as Handshake, ClipboardCheck, Rocket, Map, LineChart } from 'lucide-react';

const steps = [
  { icon: MessageSquare, title: "Initial Discussion", desc: "Understanding your brand, capacity, and Saudi market ambitions." },
  { icon: FileText, title: "NDA & Business Review", desc: "Secure information exchange and comprehensive portfolio analysis." },
  { icon: Search, title: "Product Evaluation", desc: "Market fit assessment, compliance check, and tasting sessions." },
  { icon: Handshake, title: "Commercial Agreement", desc: "Finalizing pricing, volumes, and partnership models." },
  { icon: ClipboardCheck, title: "Import Registration", desc: "SFDA compliance, customs clearing, and documentation." },
  { icon: Rocket, title: "Market Launch", desc: "Strategic rollout into targeted HORECA and retail channels." },
  { icon: Map, title: "Nationwide Distribution", desc: "Scaling supply chain across major Saudi cities." },
  { icon: LineChart, title: "Business Growth", desc: "Ongoing marketing, performance tracking, and expansion." }
];

const BusinessProcessTimeline = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-4">Partnership Journey</h2>
          <p className="text-gray-600">A clear, structured path to launching and scaling your brand in Saudi Arabia.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2 rounded-full"></div>
          
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex items-center flex-col md:flex-row gap-6 relative ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="w-full md:w-1/2"></div>
                  
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(var(--secondary))] border-4 border-white shadow-md z-10 text-[hsl(var(--primary))]">
                    <step.icon size={18} />
                  </div>

                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <span className="text-sm font-bold text-[hsl(var(--secondary))] mb-1 block">Step {idx + 1}</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessProcessTimeline;
