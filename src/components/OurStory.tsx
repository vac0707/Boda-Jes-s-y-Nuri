import { motion } from "motion/react";
import { Milestone } from "../types";
import { Heart, Stars } from "lucide-react";

export default function OurStory() {
  const milestones: Milestone[] = [
    {
      id: "1",
      date: "14 de Febrero de 2021",
      title: "El Comienzo de Todo",
      text: "Aquel primer café donde una mirada tímida se convirtió en una conversación de horas. Había algo mágico en el ambiente, una conexión inexplicable. Ese día supimos que nuestras vidas cambiarían para siempre y que empezábamos a escribir nuestro propio destino.",
      imageUrl: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968212/01_ymkvet.jpg",
    },
    {
      id: "2",
      date: "22 de Julio de 2022",
      title: "Aventuras de Dos",
      text: "Viajes espontáneos, atardeceres contemplados en silencio y risas descontroladas compartidas bajo la lluvia. Cada kilómetro recorrido, cada melodía descubierta y cada obstáculo superado consolidó un amor maduro, lleno de complicidad y confianza mutua.",
      imageUrl: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968214/04_jafhgb.jpg",
    },
    {
      id: "3",
      date: "11 de Noviembre de 2023",
      title: "Nuestra Complicidad",
      text: "En los días ordinarios también encontramos magia. El café de las mañanas, el apoyo incondicional en los momentos de cansancio y el refugio cálido de nuestros abrazos nos demostraron que el amor real se construye en los pequeños detalles que hacen la vida hermosa.",
      imageUrl: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968214/05_nxuzj3.jpg",
    },
    {
      id: "4",
      date: "25 de Diciembre de 2024",
      title: "La Propuesta",
      text: "Con el corazón latiendo acelerado y bajo un cielo estrellado y luces de colores navideñas, llegó la pregunta más importante y deseada de nuestras vidas. Un 'SÍ, ACEPTO' que resonó como una hermosa melodía que selló nuestra promesa eterna frente al mundo.",
      imageUrl: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968205/06_po8nhb.jpg",
    },
    {
      id: "5",
      date: "30 de Junio de 2025",
      title: "Preparando el Gran Día",
      text: "Entre preparativos, decisiones compartidas e ilusiones desbordantes, construimos día a día el inicio de lo que será nuestro hogar. Cada detalle es pensado para celebrar nuestra unión en compañía de las personas que más amamos y respetamos en esta vida.",
      imageUrl: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968205/08_tritav.jpg",
    },
    {
      id: "6",
      date: "05 de Septiembre de 2026",
      title: "Nuestro 'Para Siempre'",
      text: "El inicio formal de nuestra unión matrimonial. Frente a Dios y a nuestros seres queridos, sellamos una alianza sagrada guiada por la fe, el respeto y la devoción eterna. Este paso es la cumbre de nuestra valiosa historia de amor y el amanecer de una nueva vida.",
      imageUrl: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968206/10_cuonxy.jpg",
    },
  ];

  return (
    <section id="nuestra-historia" className="relative py-28 px-6 bg-[#FAF9F6] overflow-hidden">
      {/* Decorative luxury patterns */}
      <div className="absolute top-10 left-10 text-[#C5A059]/10 pointer-events-none select-none">
        <Stars className="w-48 h-48 rotate-12" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <Heart className="w-5 h-5 text-[#C5A059] mb-4" />
            <span className="font-sans text-xs tracking-[0.3em] text-[#8A9A5B] uppercase font-bold">
              Nuestra Historia
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#333] tracking-wide font-light mt-3 mb-4">
              El Camino Hacia el "Sí"
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37]" />
            <p className="text-[#777] text-sm font-light italic mt-6 max-w-lg">
              "Cada momento vivido nos trajo hasta aquí, y cada latido afirma que fuiste, eres y siempre serás tú."
            </p>
          </motion.div>
        </div>

        {/* Timeline body */}
        <div className="relative">
          {/* Centered vertical line with luxurious gradient */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-4 bottom-4 w-[1px] bg-[linear-gradient(to_bottom,rgba(229,225,216,0.3)_0%,#D4AF37_50%,rgba(229,225,216,0.3)_100%)]" />

          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row mb-20 md:mb-28 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Visual marker dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-8 md:top-20 z-20 flex items-center justify-center w-8 h-8 rounded-sm bg-white border border-[#E5E1D8] shadow-sm">
                  <div className="w-3 h-3 rounded-sm bg-[#8A9A5B] animate-pulse" />
                </div>

                {/* Imagery panel */}
                <div className="w-full md:w-[46%] pl-12 md:pl-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative overflow-hidden rounded-sm aspect-[4/3] group border border-[#E5E1D8] shadow-sm"
                  >
                    {/* Golden accent corners */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#D4AF37] z-10 opacity-70" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#D4AF37] z-10 opacity-70" />

                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover select-none pointer-events-none transform transition-transform duration-[10000ms] group-hover:scale-110 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </motion.div>
                </div>

                {/* Empty block for layout gap */}
                <div className="w-full md:w-[8%]" />

                {/* Narrative content block */}
                <div className="w-full md:w-[46%] pl-12 md:pl-0 mt-6 md:mt-0 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -45 : 45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white border border-[#E5E1D8] rounded-sm p-6 sm:p-8 shadow-sm hover:border-[#D4AF37]/50 hover:shadow-md transition-all duration-300 cursor-default relative overflow-hidden"
                  >
                    {/* Internal Double Geometric Outline */}
                    <div className="absolute inset-1.5 border border-[#D4AF37]/5 pointer-events-none" />

                    {/* Delicate Background overlay */}
                    <div className="absolute right-0 top-0 opacity-5 font-serif text-[12rem] font-bold text-[#D4AF37] leading-none select-none translate-x-8 -translate-y-6">
                      {index + 1}
                    </div>

                    <span className="font-serif text-xs italic font-semibold text-[#8A9A5B] uppercase border-b border-[#D4AF37]/35 pb-0.5 inline-block mb-4 tracking-wider">
                      {item.date}
                    </span>

                    <h4 className="font-serif text-2xl text-[#333] tracking-wide font-normal mb-3">
                      {item.title}
                    </h4>

                    <p className="text-[#555] font-light text-sm leading-relaxed text-justify relative z-10">
                      {item.text}
                    </p>
                  </motion.div>
                </div>
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
      className="w-5 h-5 text-[#C5A059]"
    >
      <path d="M12 2v20M2 12h20M5.87 5.87l12.26 12.26M18.13 5.87L5.87 18.13" />
    </svg>
  );
}
