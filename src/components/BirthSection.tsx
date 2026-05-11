import { motion } from "motion/react";

export default function BirthSection() {
  return (
    <section id="birth" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="border-t border-gray-200 pt-20 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-1">
              <span className="text-xs font-black text-blue-600 rotate-0 md:-rotate-90 origin-left block whitespace-nowrap tracking-widest uppercase">
                Pionierët
              </span>
            </div>
            <div className="md:col-span-6 space-y-10">
              <h2 className="text-5xl font-serif italic tracking-tight text-gray-900 leading-none">
                Charles Babbage: <br />
                <span className="not-italic font-bold text-3xl uppercase tracking-tighter">Babai i Kompjuterit</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                <p>
                  Në mesin e viteve 1800, Charles Babbage projektoi atë që njihet si "Makina Analitike". 
                  Ky ishte plani i parë për një kompjuter gjeneral që mund të programohej.
                </p>
                <p>
                  Edhe pse nuk u ndërtua plotësisht gjatë jetës së tij, vizioni i tij vuri themelet 
                  e arkitekturës së kompjuterëve që përdorim sot. Imagjinoni një makinë që jo vetëm llogarit, 
                  por edhe arsyeton mbi numrat.
                </p>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="aspect-[4/5] bg-gray-50 overflow-hidden rounded-sm border border-gray-100">
                <img 
                  src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/charles-babbage-1791-1871-english-science-source.jpg" 
                  alt="Charles Babbage Portrait" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-1">
              <span className="text-xs font-black text-blue-600 rotate-0 md:-rotate-90 origin-left block whitespace-nowrap tracking-widest uppercase">
                Epoka Elektronike
              </span>
            </div>
            <div className="md:col-span-5">
              <div className="aspect-square bg-gray-100 overflow-hidden rounded-sm border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
                  alt="ENIAC Technology" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="md:col-span-6 space-y-10">
              <h2 className="text-5xl font-serif italic tracking-tight text-gray-900 leading-none">
                ENIAC: Gjiganti <br />
                <span className="not-italic font-bold text-3xl uppercase tracking-tighter">17,468 Tuba Vakumi</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                <p>
                  I ndërtuar në vitin 1945, ENIAC ishte kompjuteri i parë elektronik i programueshëm. 
                  I përdorur për llogaritje ushtarake, ai zinte një dhomë të tërë dhe peshonte mbi 27 ton.
                </p>
                <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200">
                   <div className="bg-white p-6">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Pesha</p>
                      <p className="text-2xl font-serif italic font-bold">27 Ton</p>
                   </div>
                   <div className="bg-white p-6">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Viti</p>
                      <p className="text-2xl font-serif italic font-bold">1945</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
