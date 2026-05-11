import { motion } from "motion/react";
import { TIMELINE_DATA } from "../constants";

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-10">
        <div className="mb-20">
          <p className="text-blue-600 font-mono text-[10px] mb-4 tracking-[0.3em] uppercase font-bold">Inovacioni Ndër Vite</p>
          <h2 className="text-6xl font-serif italic tracking-tight text-gray-900 border-b border-gray-200 pb-10">
            Timeline e <span className="not-italic font-black text-blue-600 uppercase">Evolucionit</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {TIMELINE_DATA.map((item) => (
            <motion.div
              key={item.year}
              whileHover={{ backgroundColor: "#f8fafc" }}
              className="bg-white p-8 space-y-6"
            >
              <div className="border-l-2 border-blue-600 pl-4 h-full">
                <span className="text-4xl font-serif italic font-bold text-gray-900 leading-none">
                  {item.year}
                </span>
                <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {item.description}
                </p>
                <div className="mt-6 aspect-[4/3] bg-gray-50 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
