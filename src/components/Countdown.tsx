import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CountdownTime } from "../types";
import { Calendar } from "lucide-react";

export default function Countdown() {
  const targetDate = new Date("2026-09-05T12:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const blockVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const padZero = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <section id="cuenta-regresiva" className="relative py-24 px-6 bg-cream-100 flex flex-col items-center">
      {/* Decorative floral backgrounds */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />

      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center mb-10"
        >
          <Calendar className="w-6 h-6 text-gold-500 mb-4 animate-pulse" />
          <h3 className="font-serif text-3xl sm:text-4xl text-sage-900 tracking-wide font-light mb-3">
            Cada Segundo Nos Acerca Más
          </h3>
          <p className="text-sm font-light text-sage-600 tracking-widest max-w-md uppercase">
            Acompáñanos a iniciar la cuenta regresiva para nuestro gran día
          </p>
        </motion.div>

        {timeLeft.isCompleted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white border border-[#E5E1D8] rounded-sm py-10 px-8 max-w-xl mx-auto shadow-sm"
          >
            <p className="font-serif text-2xl text-[#C5A059] tracking-wider">
              ¡LLEGÓ EL GRAN DÍA!
            </p>
            <p className="text-[#333] text-sm font-light mt-2 uppercase tracking-wide">
              Hoy celebramos nuestro amor infinito
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {/* Days Block */}
            <motion.div
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-[#E5E1D8] rounded-sm py-8 px-4 flex flex-col items-center relative overflow-hidden group shadow-sm transition-all duration-300 hover:border-[#D4AF37]/40"
            >
              {/* Subtle inner gold geometric accent border */}
              <div className="absolute inset-1.5 border border-[#D4AF37]/10 group-hover:border-[#D4AF37]/25 transition-colors pointer-events-none" />
              <span className="font-serif text-4xl sm:text-5xl lg:text-5xl text-[#333] font-light leading-none mb-3 drop-shadow-sm select-none">
                {padZero(timeLeft.days)}
              </span>
              <span className="text-[10px] sm:text-xs text-[#8A9A5B] tracking-[0.2em] font-bold uppercase">
                Días
              </span>
            </motion.div>
 
            {/* Hours Block */}
            <motion.div
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-[#E5E1D8] rounded-sm py-8 px-4 flex flex-col items-center relative overflow-hidden group shadow-sm transition-all duration-300 hover:border-[#D4AF37]/40"
            >
              <div className="absolute inset-1.5 border border-[#D4AF37]/10 group-hover:border-[#D4AF37]/25 transition-colors pointer-events-none" />
              <span className="font-serif text-4xl sm:text-5xl lg:text-5xl text-[#333] font-light leading-none mb-3 drop-shadow-sm select-none">
                {padZero(timeLeft.hours)}
              </span>
              <span className="text-[10px] sm:text-xs text-[#8A9A5B] tracking-[0.2em] font-bold uppercase">
                Horas
              </span>
            </motion.div>
 
            {/* Minutes Block */}
            <motion.div
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-[#E5E1D8] rounded-sm py-8 px-4 flex flex-col items-center relative overflow-hidden group shadow-sm transition-all duration-300 hover:border-[#D4AF37]/40"
            >
              <div className="absolute inset-1.5 border border-[#D4AF37]/10 group-hover:border-[#D4AF37]/25 transition-colors pointer-events-none" />
              <span className="font-serif text-4xl sm:text-5xl lg:text-5xl text-[#333] font-light leading-none mb-3 drop-shadow-sm select-none">
                {padZero(timeLeft.minutes)}
              </span>
              <span className="text-[10px] sm:text-xs text-[#8A9A5B] tracking-[0.2em] font-bold uppercase">
                Minutos
              </span>
            </motion.div>
 
            {/* Seconds Block */}
            <motion.div
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-[#E5E1D8] rounded-sm py-8 px-4 flex flex-col items-center relative overflow-hidden group shadow-sm transition-all duration-300 hover:border-[#D4AF37]/40"
            >
              <div className="absolute inset-1.5 border border-[#D4AF37]/10 group-hover:border-[#D4AF37]/25 transition-colors pointer-events-none" />
              <span className="font-serif text-4xl sm:text-5xl lg:text-5xl text-[#C5A059] font-light leading-none mb-3 drop-shadow-sm select-none">
                {padZero(timeLeft.seconds)}
              </span>
              <span className="text-[10px] sm:text-xs text-[#8A9A5B] tracking-[0.2em] font-bold uppercase">
                Segundos
              </span>
            </motion.div>
          </div>
        )}

        {/* Visual Monthly Calendar Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-16 max-w-sm mx-auto bg-white border border-[#E5E1D8] rounded-sm p-6 sm:p-8 shadow-sm relative overflow-hidden"
        >
          {/* Outer elegant borders */}
          <div className="absolute inset-1.5 border border-[#D4AF37]/10 pointer-events-none" />

          {/* Month Header */}
          <div className="text-center mb-6">
            <span className="font-sans text-[10px] tracking-[0.25em] text-[#8A9A5B] font-bold uppercase block mb-1">
              Guarda la Fecha
            </span>
            <h4 className="font-serif text-xl text-[#333] tracking-[0.15em] font-light uppercase">
              Septiembre 2026
            </h4>
            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-2" />
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {/* Weekdays Header */}
            {["D", "L", "M", "M", "J", "V", "S"].map((day, idx) => (
              <span
                key={idx}
                className="text-[10px] uppercase tracking-wider font-bold text-[#8A9A5B] pb-2 font-mono"
              >
                {day}
              </span>
            ))}

            {/* Days list (September 2026 starts on Tuesday, has 30 days) */}
            {[
              { day: "", isPlaceholder: true }, // Sun
              { day: "", isPlaceholder: true }, // Mon
              { day: "1", isWeddingDay: false },
              { day: "2", isWeddingDay: false },
              { day: "3", isWeddingDay: false },
              { day: "4", isWeddingDay: false },
              { day: "5", isWeddingDay: true }, // The Big Day!
              { day: "6", isWeddingDay: false },
              { day: "7", isWeddingDay: false },
              { day: "8", isWeddingDay: false },
              { day: "9", isWeddingDay: false },
              { day: "10", isWeddingDay: false },
              { day: "11", isWeddingDay: false },
              { day: "12", isWeddingDay: false },
              { day: "13", isWeddingDay: false },
              { day: "14", isWeddingDay: false },
              { day: "15", isWeddingDay: false },
              { day: "16", isWeddingDay: false },
              { day: "17", isWeddingDay: false },
              { day: "18", isWeddingDay: false },
              { day: "19", isWeddingDay: false },
              { day: "20", isWeddingDay: false },
              { day: "21", isWeddingDay: false },
              { day: "22", isWeddingDay: false },
              { day: "23", isWeddingDay: false },
              { day: "24", isWeddingDay: false },
              { day: "25", isWeddingDay: false },
              { day: "26", isWeddingDay: false },
              { day: "27", isWeddingDay: false },
              { day: "28", isWeddingDay: false },
              { day: "29", isWeddingDay: false },
              { day: "30", isWeddingDay: false },
            ].map((item, idx) => {
              if (item.isPlaceholder) {
                return <div key={idx} className="aspect-square" />;
              }

              if (item.isWeddingDay) {
                return (
                  <div
                    key={idx}
                    className="aspect-square flex items-center justify-center relative select-none"
                  >
                    {/* Ring highlight pulse */}
                    <div className="absolute inset-0.5 rounded-full border-2 border-[#D4AF37] scale-105 pointer-events-none animate-ping opacity-60" style={{ animationDuration: "2.5s" }} />
                    <div className="absolute inset-0.5 rounded-full bg-[#C5A059] shadow-md z-0 transform scale-110" />

                    <div className="relative z-10 flex flex-col items-center justify-center text-white">
                      <span className="text-xs font-bold leading-none select-none">5</span>
                      <span className="text-[7px] font-bold tracking-tighter uppercase leading-none select-none mt-0.5 opacity-90">Boda</span>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className="aspect-square flex items-center justify-center rounded-full text-xs font-light text-[#555] hover:bg-[#F1EFE9] transition-colors cursor-default select-none relative"
                >
                  <span>{item.day}</span>
                </div>
              );
            })}
          </div>

          {/* Calendar Footer Info */}
          <div className="mt-6 pt-4 border-t border-[#E5E1D8]/50 text-center">
            <p className="text-xs font-light tracking-wide text-[#333]">
              Sábado, 5 de Septiembre • 12:00 PM
            </p>
            <p className="text-[10px] text-[#8A9A5B] uppercase tracking-[0.2em] font-bold mt-1">
              Cayma, Arequipa, Perú
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
    </section>
  );
}
