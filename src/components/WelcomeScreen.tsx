import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Music, FileHeart } from "lucide-react";

interface WelcomeScreenProps {
  onOpen: () => void;
}

export default function WelcomeScreen({ onOpen }: WelcomeScreenProps) {
  const groom = "JESÚS MANUEL";
  const bride = "NURI AYDEE";

  const backgroundImages = [
    "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968213/02_uy15wq.jpg",
    "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968212/22_wynwmc.jpg",
    "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968211/21_jt3htx.jpg",
    "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968211/20_b1j6c3.jpg",
    "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968210/18_rr2ly3.jpg",
    "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968210/19_iish3a.jpg"
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  // Framer Motion letter physics for elegant letter-by-letter reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.4,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#1a1a1a] font-sans">
      {/* Gold Border Accents - Geometric Balance Theme */}
      <div className="absolute inset-4 border border-[#D4AF37] opacity-30 pointer-events-none z-20"></div>
      <div className="absolute inset-8 border border-[#D4AF37] opacity-10 pointer-events-none z-20"></div>

      {/* Background Cinematic Image with heavy soft vignette */}
      <div className="absolute inset-0 select-none overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentBg}
            src={backgroundImages[currentBg]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.35, scale: 1.01 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            alt="Jesús & Nuri"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        {/* Soft elegant gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#1a1a1a]/70 to-[#1a1a1a]/40 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette from-transparent via-black/30 to-black/80 z-10 pointer-events-none" />
      </div>

      {/* Floating subtle spark effects */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#D4AF37]/40 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[#C5A059]/40 rounded-full animate-ping" style={{ animationDuration: "4s" }} />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-[#D4AF37]/40 rounded-full animate-ping" style={{ animationDuration: "3.5s" }} />
      </div>

      {/* Content Area */}
      <div className="relative z-10 text-center max-w-lg px-6 flex flex-col items-center justify-between h-5/6">
        {/* Monograma Superior */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center mt-4"
        >
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full border border-[#D4AF37]/40 bg-black/40 backdrop-blur-md">
            <span className="font-serif text-3xl font-light text-[#D4AF37] tracking-wide">J & N</span>
            {/* Elegant outer rings */}
            <div className="absolute inset-[-4px] rounded-full border border-[#D4AF37]/10 animate-spin" style={{ animationDuration: "40s" }} />
            <div className="absolute inset-[-8px] rounded-full border border-[#C5A059]/5 animate-spin" style={{ animationDuration: "60s", animationDirection: "reverse" }} />
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mt-4 font-semibold italic">
            Nuestra Unión
          </span>
        </motion.div>

        {/* Nombres de los novios con reveal cinematográfico */}
        <div className="my-auto py-8">
          {/* Groom's Name */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-serif text-4xl sm:text-5xl lg:text-5xl font-light text-cream-100 tracking-[0.15em] flex flex-wrap justify-center gap-x-3 gap-y-1 mb-2"
          >
            {groom.split(" ").map((word, wIdx) => (
              <span key={wIdx} className="flex no-wrap">
                {word.split("").map((letter, lIdx) => (
                  <motion.span key={lIdx} variants={letterVariants}>
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          {/* Amperstand connector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex items-center justify-center my-4 overflow-visible"
          >
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold-400/40" />
            <span className="font-serif text-3xl text-gold-300 font-light italic mx-4">y</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold-400/40" />
          </motion.div>

          {/* Bride's Name */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-serif text-4xl sm:text-5xl lg:text-5xl font-light text-cream-100 tracking-[0.15em] flex flex-wrap justify-center gap-x-3 gap-y-1"
          >
            {bride.split(" ").map((word, wIdx) => (
              <span key={wIdx} className="flex no-wrap">
                {word.split("").map((letter, lIdx) => (
                  <motion.span key={lIdx} variants={letterVariants}>
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          {/* Fecha elegida */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 2.2, duration: 1.5 }}
            className="text-gold-200 font-light tracking-[0.2em] text-xs sm:text-sm mt-6 uppercase"
          >
            05 de Septiembre de 2026
          </motion.p>
        </div>

        {/* Botón de ingreso */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center mb-6 w-full"
        >
          {/* Subtle note about music */}
          <div className="flex items-center gap-2 text-[#C5A059]/80 text-[10px] uppercase tracking-widest mb-4">
            <Music className="w-3.5 h-3.5" />
            <span className="font-light">Incluye música de fondo</span>
          </div>

          <button
            id="btn-abrir-invitacion"
            onClick={onOpen}
            className="relative overflow-visible group cursor-pointer focus:outline-none"
          >
            {/* Pulsing glow underneath */}
            <div className="absolute inset-x-2 inset-y-1 rounded-sm bg-[#D4AF37]/20 blur-md group-hover:bg-[#D4AF37]/30 transition-all duration-500 animate-pulse" />

            {/* Main elegant button */}
            <div className="relative flex items-center justify-center gap-3 px-10 py-4 rounded-sm border border-[#D4AF37]/40 bg-[#C5A059] hover:bg-[#B49048] text-white font-sans text-xs tracking-[0.25em] uppercase font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg">
              <FileHeart className="w-4 h-4 text-white" />
              <span>Abrir Invitación</span>
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
