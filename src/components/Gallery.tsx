import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_ITEMS } from "../constants";

export default function Gallery() {
  const [filter, setFilter] = useState<"të gjitha" | "vjetër" | "modern">("të gjitha");

  const filteredItems = GALLERY_ITEMS.filter(item => 
    filter === "të gjitha" || item.category === filter
  );

  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="space-y-4">
            <p className="text-blue-600 font-mono text-[10px] tracking-[0.3em] uppercase font-bold">Arkiva Digitale</p>
            <h2 className="text-6xl font-serif italic tracking-tight text-gray-900 uppercase leading-none">
              Galeria <br /> <span className="not-italic font-black text-blue-600">Vizuale</span>
            </h2>
          </div>
          
          <div className="flex gap-1 bg-gray-50 border border-gray-200 p-1 rounded-sm">
            {["të gjitha", "vjetër", "modern"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-8 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                  filter === cat ? "bg-white text-blue-600 shadow-sm border border-gray-100" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group relative bg-gray-50 aspect-square overflow-hidden border border-gray-200 rounded-sm"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm border-t border-gray-200 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-1">{item.category}</p>
                  <h4 className="text-xs font-bold text-gray-900 tracking-tight">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
