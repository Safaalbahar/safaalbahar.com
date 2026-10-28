import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Hotel, Building, ShoppingCart, Store, Factory, UserCheck, ChefHat } from 'lucide-react';
import CustomerAudienceCard from './CustomerAudienceCard';

const AudienceSupportSection = () => {
  const audiences = [
    { 
      icon: ChefHat, 
      title: "HORECA Sector", 
      desc: "Complete food service solutions tailored for hospitality professionals.",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=85"
    },
    { 
      icon: UtensilsCrossed, 
      title: "Restaurants", 
      desc: "Reliable ingredient supply ensuring your menu never falls short.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=85"
    },
    { 
      icon: Hotel, 
      title: "Hotels & Resorts", 
      desc: "Premium bulk provisions for large-scale guest dining experiences.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=85"
    },
    { 
      icon: Building, 
      title: "Catering Companies", 
      desc: "Mass-scale operational supply for events and corporate dining.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=85"
    },
    { 
      icon: ShoppingCart, 
      title: "Supermarkets", 
      desc: "Retail-ready consumer packaging for consistent shelf stocking.",
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=85"
    },
    { 
      icon: Store, 
      title: "Retailers", 
      desc: "Flexible supply lines designed to keep local store shelves full.",
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=85"
    },
    { 
      icon: Factory, 
      title: "Wholesalers", 
      desc: "Massive volume distribution leveraging our direct importer status.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=85"
    },
    { 
      icon: UserCheck, 
      title: "B2C Customers", 
      desc: "Direct home delivery services bringing premium foods to doorsteps.",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=85"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="py-24 relative bg-gray-50 overflow-hidden">
      {/* Subtle Premium Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[hsl(var(--primary))] via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block px-4 py-1.5 rounded-full bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/20 text-[hsl(var(--primary))] font-bold text-sm mb-4"
          >
            Specialized Support
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient-primary"
          >
            Who We Serve
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-slate-600 max-w-2xl mx-auto font-medium"
          >
            Customized supply chain solutions engineered to meet the unique demands of various industry sectors with premium reliability.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {audiences.map((item, idx) => (
            <CustomerAudienceCard key={idx} item={item} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AudienceSupportSection;