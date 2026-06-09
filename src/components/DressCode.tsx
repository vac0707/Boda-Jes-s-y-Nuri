import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function DressCode() {
  const { t, lang } = useLanguage();

  return (
    <section id="codigo-vestimenta" className="relative py-28 px-6 bg-[#FAF9F6] overflow-hidden text-center">
      <div className="absolute top-0 inset-x-0 h-px bg-[#E5E1D8]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <Sparkles className="w-5 h-5 text-[#C5A059] mb-4" />
            <span className="font-sans text-xs tracking-[0.3em] text-[#8A9A5B] uppercase font-bold">
              {t("dress.label")}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#333] tracking-wide font-light mt-3 mb-4">
              {t("dress.title")}
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37]" />
            <p className="text-[#777] text-sm font-light mt-4 max-w-md">
              {t("dress.subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Magazine Style Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Ladies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-white border border-[#E5E1D8] rounded-sm p-8 sm:p-10 shadow-sm relative flex flex-col items-center hover:border-[#D4AF37]/50 transition-all duration-300"
          >
            <div className="absolute inset-1.5 border border-[#D4AF37]/5 pointer-events-none" />

            {/* Custom SVG Elegant Dress */}
            <div className="w-20 h-20 bg-[#F1EFE9] rounded-sm flex items-center justify-center mb-6 border border-[#E5E1D8]/40">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="w-10 h-10 text-[#C5A059]"
              >
                <path d="M7 3h10s-1 4.5-3 6.5l3.5 11.5H6.5L10 9.5C8 7.5 7 3 7 3z" />
                <path d="M12 3v6.5" strokeDasharray="1 1" />
                <path d="M10 14h4" />
                <path d="M9 17h6" />
              </svg>
            </div>

            <h3 className="font-serif text-2xl text-[#333] font-normal tracking-wide mb-1">
              {t("dress.ladies_title")}
            </h3>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold mb-4">
              {t("dress.ladies_subtitle")}
            </span>
            <p className="text-[#555] text-xs sm:text-sm font-light leading-relaxed max-w-xs mb-6">
              {t("dress.ladies_desc")}
            </p>
            <span className="text-[10px] uppercase font-bold text-rose-700 bg-rose-50 border border-rose-100 px-3.5 py-1 rounded-sm tracking-wider mt-auto">
              {t("dress.ladies_avoid")}
            </span>
          </motion.div>

          {/* Gentlemen */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="bg-white border border-[#E5E1D8] rounded-sm p-8 sm:p-10 shadow-sm relative flex flex-col items-center hover:border-[#8A9A5B]/50 transition-all duration-300"
          >
            <div className="absolute inset-1.5 border border-[#8A9A5B]/5 pointer-events-none" />

            {/* Custom SVG Formal Suit */}
            <div className="w-20 h-20 bg-[#F1EFE9] rounded-sm flex items-center justify-center mb-6 border border-[#E5E1D8]/40">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="w-10 h-10 text-[#C5A059]"
              >
                <path d="M4 3h16l-3 12h-10l-3-12z" />
                <path d="M12 3l3 8h-6l3-8M12 11v10" />
                <path d="M9 21h6" />
                {/* Bow tie */}
                <path d="M10 5l4 2v-4l-4 2z" fill="currentColor" opacity="0.3" stroke="none" />
                <path d="M14 5l-4 2v-4l4 2z" fill="currentColor" opacity="0.3" stroke="none" />
              </svg>
            </div>

            <h3 className="font-serif text-2xl text-[#333] font-normal tracking-wide mb-1">
              {t("dress.gents_title")}
            </h3>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold mb-4">
              {t("dress.gents_subtitle")}
            </span>
            <p className="text-[#555] text-xs sm:text-sm font-light leading-relaxed max-w-xs mb-6">
              {t("dress.gents_desc")}
            </p>
            <span className="text-[10px] uppercase font-bold text-[#8A9A5B] bg-[#F1EFE9] border border-[#E5E1D8]/30 px-3.5 py-1 rounded-sm tracking-wider mt-auto">
              {t("dress.gents_avoid")}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
