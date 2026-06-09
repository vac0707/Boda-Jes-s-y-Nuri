import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[140vh] lg:min-h-screen lg:h-screen w-full flex flex-col lg:flex-row overflow-hidden font-sans bg-[#FAF9F6] text-[#333]">
      {/* Gold Border Accents for Geometric Balance Theme */}
      <div className="absolute inset-4 border border-[#D4AF37] opacity-30 pointer-events-none z-20 hidden lg:block"></div>
      <div className="absolute inset-8 border border-[#D4AF37] opacity-10 pointer-events-none z-20 hidden lg:block"></div>

      {/* Left Column: Cinematic Hero */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative overflow-hidden flex flex-col justify-end p-8 lg:p-16">
        <div className="absolute inset-0 select-none">
          <div 
            className="w-full h-[120%] bg-cover bg-center"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dcnynnstm/image/upload/v1780968213/02_uy15wq.jpg')",
              transform: `translateY(${scrollY * 0.15}px)`,
              transition: "transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#1a1a1a]/30 to-black/20" />
          </div>
        </div>
        
        {/* Cinematic Content overlay */}
        <div className="relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs mb-3 font-semibold italic"
          >
            Nuestra Unión
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white font-serif text-4xl lg:text-7xl leading-tight mb-2 drop-shadow-md"
          >
            Jesús Manuel<br/>
            <span className="text-[#D4AF37] italic font-light">&</span> Nuri Aydee
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-[1px] bg-[#D4AF37] my-5"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.85 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/80 text-sm lg:text-lg font-light tracking-wide max-w-sm"
          >
            "El amor nos encontró y decidió quedarse para siempre."
          </motion.p>
        </div>
      </div>

      {/* Right Column: Interactive Details */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col justify-between">
        
        {/* Top Segment: Event Countdown & Date */}
        <div className="p-8 lg:p-12 flex flex-col justify-center border-b border-[#E5E1D8] bg-[#FAF9F6] h-1/3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8A9A5B] font-bold mb-2">Cuándo</p>
              <p className="font-serif text-2xl lg:text-3xl text-[#333]">05 de Septiembre, 2026</p>
              <p className="text-sm text-[#777]">Sábado • 12:00 PM</p>
            </div>
            
            <div className="text-left sm:text-right">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-bold mb-2">Lugar</p>
              <p className="font-serif text-2xl lg:text-3xl text-[#333]">Arequipa, Perú</p>
              <p className="text-sm text-[#777]">Ciudad Blanca</p>
            </div>
          </div>
          
          {/* Locations Mini Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E5E1D8]/40">
            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-[#F1EFE9] rounded-full mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#8A9A5B] font-bold">Ceremonia</p>
                <p className="text-xs font-semibold text-[#555] leading-tight">Parroquia Santísima Cruz</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-[#F1EFE9] rounded-full mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#8A9A5B] font-bold">Recepción</p>
                <p className="text-xs font-semibold text-[#555] leading-tight">Casa Babilonia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Segment: Visual Story Timeline Teaser */}
        <div className="bg-[#F1EFE9] p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden select-none h-1/3">
          <div className="flex items-center gap-4 lg:gap-6">
            <div 
              className="w-20 h-28 lg:w-32 lg:h-44 flex-shrink-0 border-4 border-white shadow-md -rotate-3 bg-cover bg-center cursor-pointer hover:rotate-0 transition-transform duration-300" 
              style={{ backgroundImage: "url('https://res.cloudinary.com/dcnynnstm/image/upload/v1780968212/01_ymkvet.jpg')" }}
              onClick={() => scrollToSection("nuestra-historia")}
            />
            <div 
              className="w-20 h-28 lg:w-32 lg:h-44 flex-shrink-0 border-4 border-white shadow-md rotate-6 translate-y-2 bg-cover bg-center cursor-pointer hover:rotate-0 transition-transform duration-300" 
              style={{ backgroundImage: "url('https://res.cloudinary.com/dcnynnstm/image/upload/v1780968214/05_nxuzj3.jpg')" }}
              onClick={() => scrollToSection("nuestra-historia")}
            />
            <div className="ml-2 lg:ml-4">
              <p className="font-serif italic text-[#C5A059] text-base lg:text-xl mb-1">Nuestra Historia</p>
              <p className="text-[10px] lg:text-xs leading-relaxed text-[#555] max-w-[190px]">
                Un recorrido visual por los momentos mágicos que nos trajeron hasta aquí.
              </p>
              <button 
                onClick={() => scrollToSection("nuestra-historia")}
                className="mt-2 lg:mt-3 text-[10px] uppercase tracking-widest font-bold border-b border-[#D4AF37] pb-1 cursor-pointer transition-colors hover:text-[#C5A059]"
              >
                Ver línea de tiempo
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Segment: Dress Code & RSVP Quick Actions */}
        <div className="p-8 lg:p-12 flex flex-col justify-between bg-[#FAF9F6] gap-6 h-1/3">
          <div className="bg-white border border-[#E5E1D8] p-5 flex items-center justify-between shadow-sm rounded-sm">
            <div>
              <p className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-[#8A9A5B]">Código de Vestimenta</p>
              <p className="text-xs lg:text-sm italic font-serif text-[#555]">Formal / White Tie</p>
            </div>
            
            <div className="h-10 w-[1px] bg-[#E5E1D8]" />
            
            <div>
              <button 
                onClick={() => scrollToSection("confirmacion")}
                className="bg-[#C5A059] text-white px-4 lg:px-8 py-3 rounded-sm text-[10px] lg:text-xs font-bold uppercase tracking-widest shadow-md hover:bg-[#B49048] transition-colors cursor-pointer"
              >
                Asistir
              </button>
            </div>
          </div>

          <div className="flex justify-between items-end text-[#777] text-[10px]">
            <div className="flex gap-2">
              <span className="px-2 py-0.5 bg-[#F1EFE9] border border-[#E5E1D8]/40 rounded-sm font-semibold text-[#8A9A5B]">05.09.26</span>
              <span className="px-2 py-0.5 bg-[#F1EFE9] border border-[#E5E1D8]/40 rounded-sm font-semibold text-[#C5A059]">AREQUIPA</span>
            </div>
            <p className="uppercase tracking-widest text-right leading-relaxed">
              J&N • Arequipa, Perú
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Floating Indicator for mobile */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex lg:hidden flex-col items-center pointer-events-none opacity-50">
        <ChevronDown className="w-4 h-4 text-[#333]" />
      </div>
    </section>
  );
}
