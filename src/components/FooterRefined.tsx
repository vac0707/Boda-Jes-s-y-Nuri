import { useState } from "react";
import { motion } from "motion/react";
import { Heart, Share2, Check } from "lucide-react";

export default function FooterRefined() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Boda de Jesús & Nuri",
      text: "Te invitamos con mucha alegría a acompañarnos en nuestra boda este 05 de septiembre de 2026. ¡Confirma tu asistencia!",
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Sharing cancelled or blocked:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        console.error("Clipboard copy failed:", err);
      }
    }
  };

  return (
    <footer className="relative bg-[#1a1a1a] text-white py-20 px-6 overflow-hidden border-t border-[#E5E1D8]/20">
      {/* Decorative Gold Filigree Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#D4AF37] rounded-sm animate-spin" style={{ animationDuration: "120s" }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Monogram Box Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center w-16 h-16 rounded-sm border border-[#D4AF37]/45 bg-[#252525] mb-6"
        >
          <span className="font-serif text-xl font-light text-[#D4AF37] select-none">J & N</span>
          <div className="absolute inset-[-4px] rounded-sm border border-[#D4AF37]/10 animate-spin" style={{ animationDuration: "50s" }} />
        </motion.div>

        {/* Heart icon */}
        <Heart className="w-4 h-4 text-[#C5A059] mb-6 animate-pulse" />

        {/* Main message */}
        <h3 className="font-serif text-2xl sm:text-3xl font-light text-white tracking-wide max-w-xl mb-4 leading-relaxed whitespace-pre-line">
          "Gracias por acompañarnos en el día más importante de nuestras vidas."
        </h3>

        <p className="text-[#8A9A5B] text-xs tracking-widest font-bold uppercase mb-8">
          Jesús Manuel & Nuri Aydee — Septiembre 2026
        </p>

        {/* Discreet Share Invitation Button */}
        <div className="mb-8">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-5 py-2.5 rounded-sm border border-[#D4AF37]/30 bg-[#252525]/80 hover:bg-[#252525] text-[10px] font-bold text-gray-300 hover:text-white uppercase tracking-widest transition-all cursor-pointer shadow-md active:scale-95"
            title="Copiar o compartir enlace de la invitación"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-bold">¡Enlace Copiado!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="font-bold">Compartir Invitación</span>
              </>
            )}
          </button>
        </div>

        {/* Delicate divider and developer signature */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mb-6" />

        <p className="text-[10px] text-gray-400 uppercase tracking-[0.25em] font-light">
          Arequipa, Perú | Todos los derechos reservados © 2026
        </p>
      </div>
    </footer>
  );
}
