import { motion } from "motion/react";

const navItems = [
  { name: "Hyrja", href: "#home" },
  { name: "Lindja", href: "#birth" },
  { name: "Evolucioni", href: "#timeline" },
  { name: "Galeria", href: "#gallery" },
  { name: "Quiz", href: "#quiz" },
  { name: "Kontakt", href: "#contact" },
];

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 font-bold text-gray-900 text-xl tracking-tighter uppercase"
        >
          <div className="w-6 h-6 bg-blue-600 rounded-sm" />
          <span>Evolucioni i Kompjuterit</span>
        </motion.div>
        
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ color: "#2563eb" }}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
}
