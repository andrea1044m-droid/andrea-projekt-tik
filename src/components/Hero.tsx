import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="pt-40 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-blue-600 font-mono text-[10px] mb-6 tracking-[0.3em] uppercase font-bold">
                Udhëtimi drejt Inteligjencës
              </p>
              <h1 className="text-6xl md:text-8xl font-serif italic leading-[0.9] tracking-tight text-gray-900 mb-8">
                Lindja e <br />
                <span className="text-blue-600 not-italic font-black -tracking-widest">MAKINERISË</span> <br />
                së Mendimit
              </h1>
              <p className="max-w-xl text-gray-500 text-xl leading-relaxed font-light">
                Nga mjetet e thjeshta të llogaritjes te arkitekturat komplekse të sotme. 
                Një histori inovacionesh që ndryshuan botën përgjithmonë.
              </p>
            </motion.div>
          </div>
          
          <div className="md:col-span-4 pb-2">
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-400">Pikëpamja Globale</h3>
              <p className="text-sm text-gray-600 leading-snug">
                Eksploroni se si kompjutimi evoluoi nga një nevojë matematikore në një shtyllë të ekzistencës njerëzore.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#birth" className="text-xs font-bold uppercase tracking-widest border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition-colors">
                  Lexo Historinë
                </a>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 aspect-[21/9] bg-gray-100 rounded-sm overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920"
            alt="Historical Machine"
            className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
