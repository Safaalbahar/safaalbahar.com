import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Phone, Clock, Building2 } from 'lucide-react';

const BranchCard = ({ locationName, mapsUrl, address, phone, badge, image, workingHours }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-lg border border-slate-200/80 overflow-hidden flex flex-col group hover:shadow-2xl hover:border-[hsl(var(--accent))]/50 transition-all duration-300"
    >
      {/* Branch Image Banner */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden bg-slate-900">
          <img 
            src={image} 
            alt={locationName} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
          
          {badge && (
            <span className="absolute top-4 left-4 rtl:left-auto rtl:right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(var(--primary))]/90 text-white text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md border border-white/20 shadow-md">
              <Building2 className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
              {badge}
            </span>
          )}

          <div className="absolute bottom-3 left-4 right-4 rtl:left-auto rtl:right-4 text-white">
            <h3 className="text-lg font-black leading-tight drop-shadow-md text-white">
              {locationName}
            </h3>
          </div>
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {!image && (
          <h3 className="text-xl font-bold text-slate-900 mb-3">{locationName}</h3>
        )}
        
        {address && (
          <p className="text-slate-600 mb-3 flex items-start gap-2.5 text-sm">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[hsl(var(--secondary))]" />
            <span className="leading-relaxed">{address}</span>
          </p>
        )}
        
        {workingHours && (
          <p className="text-slate-500 mb-3 flex items-center gap-2.5 text-xs font-semibold">
            <Clock className="w-4 h-4 shrink-0 text-slate-400" />
            <span>{workingHours}</span>
          </p>
        )}

        {phone && (
          <p className="text-slate-700 mb-6 flex items-center gap-2.5 text-sm font-bold">
            <Phone className="w-4 h-4 text-[hsl(var(--accent))]" />
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-[hsl(var(--primary))] transition-colors" dir="ltr">
              {phone}
            </a>
          </p>
        )}
        
        <div className="mt-auto pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 w-full">
          <a 
            href={`tel:${(phone || '').replace(/\s+/g, '')}`} 
            className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 px-3 rounded-xl transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
            Call Hub
          </a>
          <a 
            href={mapsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors shadow-sm"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Directions
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default BranchCard;
