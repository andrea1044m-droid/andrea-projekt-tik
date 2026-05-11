import { motion } from "motion/react";
import { FACTS } from "../constants";

export default function Facts() {
  return (
    <section id="facts" className="py-32 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-4">
             <p className="text-blue-600 font-mono text-[10px] mb-4 tracking-[0.3em] uppercase font-bold">Kurioziteti Historik</p>
             <h2 className="text-5xl font-serif italic tracking-tight text-gray-900 leading-tight">
               Fakte <br /> <span className="not-italic font-black text-blue-600 uppercase">Interesante</span>
             </h2>
             <p className="mt-8 text-gray-500 font-light leading-relaxed">
               Detaje të vogla që tregojnë madhështinë e shpikjeve që ndryshuan rrugëtimin e njerëzimit.
             </p>
          </div>
          
          <div className="md:col-span-8">
            <ul className="space-y-12">
              {FACTS.map((fact, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-8 group"
                >
                  <span className="text-3xl font-serif italic font-bold text-blue-600/30 group-hover:text-blue-600 transition-colors">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <div className="pt-2 border-b border-gray-200 pb-10 flex-1">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">{fact.title}</h3>
                    <p className="text-lg text-gray-600 font-light leading-relaxed italic">{fact.content}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
