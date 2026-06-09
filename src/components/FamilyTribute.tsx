import { motion } from "motion/react";
import { Heart, Users, Star } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function FamilyTribute() {
  const { t } = useLanguage();
  return (
    <section id="cortejo-familia" className="relative py-28 px-6 bg-[#FAF9F6] overflow-hidden text-center">
      <div className="absolute top-0 inset-x-0 h-px bg-[#E5E1D8]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <Users className="w-5 h-5 text-[#C5A059] mb-4" />
            <span className="font-sans text-xs tracking-[0.3em] text-[#8A9A5B] uppercase font-bold">
              {t("family.blessing")}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#333] tracking-wide font-light mt-3 mb-4">
              {t("family.title")}
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37]" />
            <p className="text-[#777] text-sm font-light italic mt-6 max-w-lg">
              {t("family.quote")}
            </p>
          </motion.div>
        </div>

        {/* Family Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Parents of the Bride */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="bg-white border border-[#E5E1D8] rounded-sm p-8 sm:p-10 shadow-sm relative flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all duration-300 group"
          >
            <div className="absolute inset-1.5 border border-[#D4AF37]/5 pointer-events-none" />
            
            <div className="flex flex-col items-center">
              <div className="p-3 bg-[#FAF9F6] rounded-full text-[#C5A059] mb-4 border border-[#E5E1D8]/40 group-hover:scale-105 transition-transform duration-300">
                <Heart className="w-5 h-5 fill-[#C5A059]/10" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A9A5B] font-bold mb-3 block">
                {t("family.bride_parents")}
              </span>
              <div className="w-8 h-[1px] bg-[#E5E1D8] mb-4" />
              
              <ul className="space-y-3">
                <li className="font-serif text-lg text-[#333] font-normal leading-tight">
                  Víctor Raúl Aydee Tapia
                </li>
                <li className="font-serif text-lg text-[#333] font-normal leading-tight">
                  Ana María Quispe de Aydee
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Godparents (Padrinos) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="bg-[#2a2a2a] border border-[#D4AF37]/30 rounded-sm p-8 sm:p-10 shadow-md relative flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300 group text-white"
          >
            <div className="absolute inset-1.5 border border-[#D4AF37]/10 pointer-events-none" />
            
            <div className="flex flex-col items-center">
              <div className="p-3 bg-[#333] rounded-full text-[#D4AF37] mb-4 border border-white/5 group-hover:scale-105 transition-transform duration-300 animate-pulse">
                <Star className="w-5 h-5 fill-[#D4AF37]/25" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold mb-3 block">
                {t("family.godparents")}
              </span>
              <div className="w-8 h-[1px] bg-[#D4AF37]/30 mb-4" />
              
              <ul className="space-y-3">
                <li className="font-serif text-lg text-white font-normal leading-tight">
                  Jorge Luis Alarcón Valdivia
                </li>
                <li className="font-serif text-lg text-white font-normal leading-tight">
                  Martha Cecilia de Alarcón
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Parents of the Groom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="bg-white border border-[#E5E1D8] rounded-sm p-8 sm:p-10 shadow-sm relative flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all duration-300 group"
          >
            <div className="absolute inset-1.5 border border-[#D4AF37]/5 pointer-events-none" />
            
            <div className="flex flex-col items-center">
              <div className="p-3 bg-[#FAF9F6] rounded-full text-[#C5A059] mb-4 border border-[#E5E1D8]/40 group-hover:scale-105 transition-transform duration-300">
                <Heart className="w-5 h-5 fill-[#C5A059]/10" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A9A5B] font-bold mb-3 block">
                {t("family.groom_parents")}
              </span>
              <div className="w-8 h-[1px] bg-[#E5E1D8] mb-4" />
              
              <ul className="space-y-3">
                <li className="font-serif text-lg text-[#333] font-normal leading-tight">
                  Carlos Manuel Prado Medina
                </li>
                <li className="font-serif text-lg text-[#333] font-normal leading-tight">
                  Elena Sofía Torres de Prado
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
