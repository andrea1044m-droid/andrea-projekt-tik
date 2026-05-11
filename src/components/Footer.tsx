export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200 px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
        <div>
           Projekti Edukativ: Historia e Teknologjisë
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <span className="text-gray-900 font-black uppercase">Punoi: Andrea Mbyeti</span>
          <span className="text-gray-900 font-black">Referencat: Computer History Museum</span>
          <span>Zhvilluar për Eksplorim Digjital</span>
        </div>
        <div className="text-gray-900 font-black">
          © {new Date().getFullYear()} Digital Evolution
        </div>
      </div>
    </footer>
  );
}
