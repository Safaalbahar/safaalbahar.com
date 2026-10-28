
import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Globe, Rocket, Tag, FileSignature, Target } from 'lucide-react';

const models = [
  { icon: Star, title: "Exclusive Distribution", desc: "Sole rights to distribute your brand across Saudi Arabia with dedicated marketing.", color: "border-blue-200" },
  { icon: MapPin, title: "Regional Distribution", desc: "Targeted distribution in specific regions ensuring localized market penetration.", color: "border-teal-200" },
  { icon: Globe, title: "Import Partnership", desc: "Seamless import, customs clearance, and initial warehousing solutions.", color: "border-indigo-200" },
  { icon: Rocket, title: "Brand Launch", desc: "Comprehensive go-to-market strategy for introducing new brands.", color: "border-purple-200" },
  { icon: Tag, title: "Private Label", desc: "Collaborative development and distribution of white-label products.", color: "border-rose-200" },
  { icon: FileSignature, title: "Contract Distribution", desc: "Volume-based scheduled distribution for established HORECA suppliers.", color: "border-orange-200" },
  { icon: Target, title: "Market Development", desc: "Strategic expansion consulting and gradual market rollout support.", color: "border-amber-200" }
];

const PartnershipModelsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-4">Flexible Partnership Models</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We offer tailored distribution strategies to align with your brand's unique goals and market positioning.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white p-8 rounded-2xl border-t-4 ${model.color} shadow-lg hover-lift`}
            >
              <model.icon size={40} className="text-[hsl(var(--primary))] mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{model.title}</h3>
              <p className="text-gray-600 leading-relaxed">{model.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipModelsSection;
