import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface RomanticQuoteProps {
  quote: string;
  author?: string;
  bgType?: "dark" | "light" | "sage";
}

export default function RomanticQuote({ quote, author, bgType = "light" }: RomanticQuoteProps) {
  const getBgClass = () => {
    switch (bgType) {
      case "dark":
        return "bg-[#1a1a1a] text-white py-24 select-none relative overflow-hidden";
      case "sage":
        return "bg-[#8A9A5B] text-white py-24 select-none relative overflow-hidden";
      default:
        return "bg-[#FAF9F6] text-[#333] py-24 select-none relative overflow-hidden";
    }
  };

  return (
    <div className={getBgClass()}>
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gold-400/10 filter blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        {/* Subtle decorative gold line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="w-8 h-[1px] bg-[#D4AF37]" />
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
          <div className="w-8 h-[1px] bg-[#D4AF37]" />
        </motion.div>

        {/* Core quote text with custom typography */}
        <motion.blockquote
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-2xl sm:text-3.5xl lg:text-4xl italic font-light tracking-wide leading-relaxed max-w-2xl text-balance"
        >
          "{quote}"
        </motion.blockquote>

        {author && (
          <motion.cite
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="block text-xs uppercase tracking-[0.25em] text-gold-400 font-medium not-italic mt-6"
          >
            — {author}
          </motion.cite>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="w-12 h-[1px] bg-gold-400/40 mt-8"
        />
      </div>
    </div>
  );
}
