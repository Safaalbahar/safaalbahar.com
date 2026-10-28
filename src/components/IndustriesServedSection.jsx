
import React from 'react';
import { motion } from 'framer-motion';
import { Hotel, Utensils, Coffee, ChefHat, ShoppingCart, ShoppingBag, Store, Warehouse, Factory, Landmark } from 'lucide-react';

const industries = [
  { icon: Hotel, title: "Hotels & Resorts" },
  { icon: Utensils, title: "Restaurants" },
  { icon: Coffee, title: "Cafés" },
  { icon: ChefHat, title: "Catering Companies" },
  { icon: ShoppingCart, title: "Hypermarkets" },
  { icon: ShoppingBag, title: "Supermarkets" },
  { icon: Store, title: "Retail Stores" },
  { icon: Warehouse, title: "Wholesale Markets" },
  { icon: Factory, title: "Food Manufacturers" },
  { icon: Landmark, title: "Government & Institutional Supply" }
];

const IndustriesServedSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-4">Industries We Serve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive distribution channels capturing maximum market share across all major food sectors in Saudi Arabia.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 rounded-2xl border border-gray-100 hover:border-[hsl(var(--secondary))] hover:shadow-xl transition-all duration-300 group bg-gray-50 flex items-center gap-4"
            >
              <div className="p-3 bg-white rounded-xl text-[hsl(var(--primary))] group-hover:bg-[hsl(var(--primary))] group-hover:text-white transition-colors shadow-sm">
                <industry.icon size={24} />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-[hsl(var(--primary))] transition-colors">{industry.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServedSection;
