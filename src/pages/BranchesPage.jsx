
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import BranchCard from '@/components/BranchCard';

const branchesData = [
  {
    locationName: "Safa Al Bahar Jeddah Head Office",
    mapsUrl: "https://maps.app.goo.gl/qVixUXX4yj83iq3f7",
    address: "Al Sarwath - Al Kumra, As Sarawat, Jeddah 22524",
    phone: "+966 55 997 7206",
    badge: "Kingdom Headquarters",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85",
    workingHours: "Sun - Thu: 8:00 AM - 6:00 PM"
  },
  {
    locationName: "Safa Al Bahar Western Logistics Hub",
    mapsUrl: "https://maps.app.goo.gl/Pc86sXrjhpFUoeKU8",
    address: "Jeddah Islamic Port Industrial Zone, Saudi Arabia",
    phone: "+966 55 997 7206",
    badge: "Port & Cold Chain Center",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=85",
    workingHours: "24/7 Cold Chain Operations"
  },
  {
    locationName: "Naqa Al Bahar Yanbu Distribution",
    mapsUrl: "https://maps.app.goo.gl/dxASnSy92ZAtnwQ36",
    address: "Industrial Area, Yanbu, Saudi Arabia",
    phone: "+966 55 997 7206",
    badge: "Regional Distribution Hub",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=85",
    workingHours: "Sat - Thu: 7:30 AM - 5:30 PM"
  },
  {
    locationName: "Naqa Al Bahar Madinah Branch",
    mapsUrl: "https://maps.app.goo.gl/pSgdH4L6vtNkgoJt8",
    address: "Central Commercial Area, Madinah, Saudi Arabia",
    phone: "+966 55 997 7206",
    badge: "Holy City HORECA Hub",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=85",
    workingHours: "Sat - Thu: 8:00 AM - 6:00 PM"
  }
];

const BranchesPage = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="w-full flex flex-col">
      <Helmet>
        <title>Safa Al Bahar Branch Locations | Food Supplier Saudi Arabia</title>
        <meta name="description" content="Find our 4 branch locations in Jeddah, Yanbu, and Madinah. Professional food supplier and HORECA distributor across Saudi Arabia." />
        <link rel="canonical" href="https://safa.safaalbahar.net/branches" />
        <meta property="og:title" content="Safa Al Bahar Branch Locations | Food Supplier Saudi Arabia" />
        <meta property="og:description" content="Find our 4 branch locations in Jeddah, Yanbu, and Madinah. Professional food supplier and HORECA distributor across Saudi Arabia." />
        <meta property="og:url" content="https://safa.safaalbahar.net/branches" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1a2a4a] to-[#253b66]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}
          >
            Our Branch Locations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Visit us at any of our branches across Saudi Arabia. We are your trusted partner in food supply and HORECA distribution.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-4">Find Us Near You</h2>
            <p className="text-gray-600">Explore our distribution centers and offices in Jeddah, Yanbu, and Madinah.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branchesData.map((branch, index) => (
              <BranchCard key={index} {...branch} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BranchesPage;
