import { motion } from "motion/react";
import { ScheduleEvent } from "../types";
import { Church, GlassWater, Utensils, Award, Music4, FlameKindling } from "lucide-react";

export default function Schedule() {
  const scheduleEvents: ScheduleEvent[] = [
    {
      id: "1",
      time: "12:00 PM",
      title: "Ceremonia Religiosa",
      description: "El solemne encuentro espiritual en la Parroquia Santísima Cruz. El juramento eterno de amor y entrega sagrada.",
      icon: "church",
    },
    {
      id: "2",
      time: "02:00 PM",
      title: "Recepción",
      description: "Ingreso de los distinguidos invitados y esposos a la majestuosa Casa Babilonia para la copa inicial de bienvenida.",
      icon: "reception",
    },
    {
      id: "3",
      time: "03:00 PM",
      title: "Almuerzo de Bodas",
      description: "Un recorrido gastronómico gourmet especialmente preparado para homenajear a nuestros familiares y amigos más cercanos.",
      icon: "lunch",
    },
    {
      id: "4",
      time: "05:00 PM",
      title: "El Brindis de Honor",
      description: "Palabras sinceras de agradecimiento de parte de los consagrados novios y padres de familia del evento.",
      icon: "toast",
    },
    {
      id: "5",
      time: "08:00 PM",
      title: "La Gran Fiesta civil",
      description: "Apertura formal de la pista de baile, luces, cotillón exclusivo y diversión sin fronteras para festejar nuestro matrimonio.",
      icon: "party",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "church":
        return <Church className="w-5 h-5 text-[#C5A059]" />;
      case "reception":
        return <GlassWater className="w-5 h-5 text-[#C5A059]" />;
      case "lunch":
        return <Utensils className="w-5 h-5 text-[#C5A059]" />;
      case "toast":
        return <Award className="w-5 h-5 text-[#C5A059]" />;
      case "party":
        return <Music4 className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <FlameKindling className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="cronograma" className="relative py-28 px-6 bg-[#FAF9F6] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-[#E5E1D8]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title Block */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <StarsIcon />
            <span className="font-sans text-xs tracking-[0.3em] text-[#8A9A5B] uppercase font-bold">
              Protocolo
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#333] tracking-wide font-light mt-3 mb-4">
              Cronograma del Evento
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37]" />
            <p className="text-[#777] text-sm font-light italic mt-6 max-w-sm">
              Cada instante de nuestro día mágico está planeado para gozar de tu grata calidez y felicidad.
            </p>
          </motion.div>
        </div>

        {/* Visual vertical list */}
        <div className="relative">
          {/* Centered vertical bar line */}
          <div className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 top-2 bottom-2 w-[1px] bg-[linear-gradient(to_bottom,rgba(229,225,216,0.3)_0%,#D4AF37_50%,rgba(229,225,216,0.3)_100%)]" />

          {scheduleEvents.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col sm:flex-row mb-12 sm:mb-16 last:mb-0 ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Circle Milestone Badge */}
                <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 top-1.5 z-20 flex items-center justify-center w-10 h-10 rounded-sm bg-white border border-[#E5E1D8] shadow-sm group-hover:border-[#D4AF37]">
                  {getIcon(item.icon)}
                </div>

                {/* Sub-card box */}
                <div className="w-full sm:w-[45%] pl-16 sm:pl-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white border border-[#E5E1D8] rounded-sm p-6 shadow-sm hover:border-[#D4AF37]/50 hover:shadow-md transition-all duration-300"
                  >
                    {/* Time Indicator */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-serif italic font-semibold text-[#8A9A5B] text-xs tracking-wider border-b border-[#D4AF37]/30 pb-0.5">
                        {item.time}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg text-[#333] font-normal tracking-wide mb-2">
                      {item.title}
                    </h4>

                    <p className="text-[#555] text-xs font-light leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Placeholders */}
                <div className="hidden sm:block sm:w-[10%]" />
                <div className="hidden sm:block sm:w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Sparkle utility icon
function StarsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-5 h-5 text-[#C5A059] mb-4 animate-pulse"
    >
      <path d="M12 2v20M2 12h20M5.87 5.87l12.26 12.26M18.13 5.87L5.87 18.13" />
    </svg>
  );
}
