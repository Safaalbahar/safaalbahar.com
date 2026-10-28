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
                className="relative mx-auto w-full max-w-[340px] mb-8 lg:mb-12 shadow-2xl rounded-sm border border-gray-200"
              >
                <img 
                  src="https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/768a77c5d710ccd81a9b5e96723621ff.png" 
                  alt="Safa Al Bahar Trading Company facility showing warehouse building with delivery trucks, logistics hub, and company branding" 
                  className="w-full h-auto object-cover rounded-sm" 
                />
                <div className="absolute top-4 right-[-10px] bg-[#0B2C4D] text-white text-xs font-bold px-3 py-1.5 rounded shadow-md">
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