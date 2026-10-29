import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import BrochureDownloadForm from '@/components/BrochureDownloadForm';
import BrochureFooterNote from '@/components/BrochureFooterNote';

const BrochureDownloadSection = () => {
  const bulletPoints = [
    "Frozen & Chilled Distribution",
    "Seafood & Meat Categories",
    "HORECA & Key Accounts",
    "Multi-Branch Operations",
    "Quality & Compliance Standards"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-[#e5e7eb] rounded-2xl shadow-sm p-6 md:p-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Image & Info */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <motion.div
                whileHover={{ y: -5 }}
                className="relative mx-auto w-full max-w-[340px] mb-8 lg:mb-12 shadow-2xl rounded-xl border border-gray-200 overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80" 
                  alt="Safa Al Bahar Trading Company Cold Storage and Logistics Headquarters" 
                  className="w-full h-auto object-cover rounded-xl" 
                />
                <div className="absolute top-4 right-[-10px] bg-[#0B2C4D] text-amber-400 text-xs font-bold px-3 py-1.5 rounded shadow-md border border-amber-400/30">
                  2026 Official Edition
                </div>
              </motion.div>

              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2C4D] mb-3">
                  Download Official Company Profile
                </h2>
                <h3 className="text-xl font-medium text-[#1a2a4a] mb-4">
                  Complete HORECA Supply Portfolio & Corporate Overview
                </h3>
                <p className="text-[#1a2a4a] leading-relaxed mb-6">
                  Discover our comprehensive range of premium food products, stringent quality control measures, and expansive logistics network. Get all the insights you need to partner with SAFA AL BAHAR.
                </p>

                <ul className="space-y-3 mb-8">
                  {bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[#1a2a4a] font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#0B2C4D] flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:w-1/2">
              <BrochureDownloadForm />
              <BrochureFooterNote />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureDownloadSection;