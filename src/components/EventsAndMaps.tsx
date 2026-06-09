import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, CalendarPlus, Church, Compass, GlassWater, Landmark } from "lucide-react";

export default function EventsAndMaps() {
  const [activeMap, setActiveMap] = useState<"iglesia" | "recepcion">("iglesia");

  const churchMapUrl = "https://maps.google.com/maps?q=Parroquia%20Sant%C3%ADsima%20Cruz%20de%20Acequia%20Alta,%20Cayma,%20Arequipa,%20Peru&t=&z=16&ie=UTF8&iwloc=&output=embed";
  const receptionMapUrl = "https://maps.google.com/maps?q=Casa%20Babilonia,%20Cayma,%20Arequipa,%20Peru&t=&z=16&ie=UTF8&iwloc=&output=embed";

  // Google Calendar integration links (UTC coordinates adjusted for Peruvian time zone)
  const calendarChurchUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda%20Jes%C3%BAs%20y%20Nuri%20-%20Ceremonia%20Religiosa&dates=20260905T170000Z/20260905T190000Z&details=Acomp%C3%A1%C3%B1anos%20a%20celebrar%20nuestro%20matrimonio%20religioso%20en%20la%20Parroquia%20Sant%C3%ADsima%20Cruz%20de%20Acequia%20Alta.&location=Parroquia%20Sant%C3%ADsima%20Cruz%20de%20Acequia%20Alta,%20Cayma,%20Arequipa";
  const calendarReceptionUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda%20Jes%C3%BAs%20y%20Nuri%20-%20Recepci%C3%B3n&dates=20260905T190000Z/20260906T040000Z&details=Celebremos%20juntos%20nuestra%20boda%20en%20Casa%20Babilonia.&location=Casa%20Babilonia,%20Cayma,%20Arequipa";

  const churchNavUrl = "https://maps.app.goo.gl/CajU7Uoy52AyyZxH6";
  const receptionNavUrl = "https://maps.app.goo.gl/mXmJju4NoMeNeCMo6";

  return (
    <section id="ceremonia-recepcion" className="relative py-28 px-6 bg-[#FAF9F6] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-[#E5E1D8]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <Compass className="w-5 h-5 text-[#C5A059] mb-4 animate-spin" style={{ animationDuration: "12s" }} />
            <span className="font-sans text-xs tracking-[0.3em] text-[#8A9A5B] uppercase font-bold">
              Detalles del Evento
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#333] tracking-wide font-light mt-3 mb-4">
              Ubicación y Horario
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37]" />
            <p className="text-[#777] text-sm font-light mt-4 max-w-md">
              Queremos que tu llegada sea súper sencilla. Encuentra aquí toda la información horaria y geográfica.
            </p>
          </motion.div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Card 1: Sacred Ceremony */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="bg-white border border-[#E5E1D8] rounded-sm shadow-sm relative overflow-hidden group hover:border-[#D4AF37]/50 transition-all duration-500"
          >
            {/* Top thematic gold border accent */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#D4AF37] z-20" />

            {/* Photographic Image Representative */}
            <div className="relative h-60 w-full overflow-hidden border-b border-[#E5E1D8] bg-[#F1EFE9]">
              <img
                src="https://res.cloudinary.com/dcnynnstm/image/upload/v1780970824/iglesia_moawnc.jpg"
                alt="Parroquia Santísima Cruz"
                className="w-full h-full object-cover transform transition-transform duration-[8000ms] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 text-white z-10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Ubicación de Ceremonia</span>
                <p className="font-serif text-lg font-light">Vista General</p>
              </div>
            </div>

            <div className="p-8 sm:p-10 relative">
              <div className="absolute inset-2 border border-[#D4AF37]/5 opacity-40 pointer-events-none" />

              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-sm bg-[#F1EFE9] text-[#C5A059] mb-6 group-hover:scale-105 transition-transform duration-500">
                  <Church className="w-8 h-8" />
                </div>

                <h3 className="font-serif text-2xl text-[#333] font-normal tracking-wide mb-1">
                  Ceremonia Religiosa
                </h3>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-bold mb-6">
                  El Voto Sagrado
                </span>

                {/* Ceremony Specs */}
                <div className="space-y-4 mb-8 w-full border-t border-b border-[#E5E1D8] py-6 text-[#555]">
                  <p className="text-sm font-light">
                    <strong className="block text-[#333] font-semibold tracking-wide">Hora:</strong>
                    12:00 PM
                  </p>
                  <p className="text-sm font-light">
                    <strong className="block text-[#333] font-semibold tracking-wide">Lugar:</strong>
                    Parroquia Santísima Cruz de Acequia Alta
                  </p>
                  <p className="text-xs font-semibold text-[#8A9A5B] uppercase tracking-wider px-4">
                    Cayma, Arequipa, Perú
                  </p>
                </div>

                {/* Buttons Row */}
                <div className="flex flex-wrap gap-3 justify-center w-full">
                  {/* View Location Map */}
                  <button
                    onClick={() => {
                      setActiveMap("iglesia");
                      document.getElementById("mapas-integrados")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-sm border border-[#E5E1D8] text-[#555] bg-transparent hover:bg-[#F1EFE9] transition-all text-xs font-semibold uppercase tracking-widest cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Ver Mapa</span>
                  </button>

                  {/* Google Calendar */}
                  <a
                    href={calendarChurchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#C5A059] hover:bg-[#B49048] text-white transition-all text-xs font-bold uppercase tracking-widest"
                  >
                    <CalendarPlus className="w-3.5 h-3.5" />
                    <span>Calendario</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Wedding Reception */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="bg-white border border-[#E5E1D8] rounded-sm shadow-sm relative overflow-hidden group hover:border-[#8A9A5B]/50 transition-all duration-500"
          >
            {/* Top thematic sage border accent */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#8A9A5B] z-20" />

            {/* Photographic Image Representative */}
            <div className="relative h-60 w-full overflow-hidden border-b border-[#E5E1D8] bg-[#F1EFE9]">
              <img
                src="https://res.cloudinary.com/dcnynnstm/image/upload/v1780970947/local_erxbym.jpg"
                alt="Casa Babilonia Recepción"
                className="w-full h-full object-cover transform transition-transform duration-[8000ms] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 text-white z-10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A9A5B] font-semibold">Ubicación de Recepción</span>
                <p className="font-serif text-lg font-light">Casa Babilonia</p>
              </div>
            </div>

            <div className="p-8 sm:p-10 relative">
              <div className="absolute inset-2 border border-[#8A9A5B]/5 opacity-40 pointer-events-none" />

              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-sm bg-[#F1EFE9] text-[#8A9A5B] mb-6 group-hover:scale-105 transition-transform duration-500">
                  <GlassWater className="w-8 h-8" />
                </div>

                <h3 className="font-serif text-2xl text-[#333] font-normal tracking-wide mb-1">
                  La Recepción
                </h3>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A9A5B] font-bold mb-6">
                  La Gran Celebración
                </span>

                {/* Reception Specs */}
                <div className="space-y-4 mb-8 w-full border-t border-b border-[#E5E1D8] py-6 text-[#555]">
                  <p className="text-sm font-light">
                    <strong className="block text-[#333] font-semibold tracking-wide">Hora:</strong>
                    02:00 PM (Inmediatamente después del oficio)
                  </p>
                  <p className="text-sm font-light">
                    <strong className="block text-[#333] font-semibold tracking-wide">Lugar:</strong>
                    Casa Babilonia
                  </p>
                  <p className="text-xs font-semibold text-[#8A9A5B] uppercase tracking-wider px-4">
                    Cayma, Arequipa, Perú
                  </p>
                </div>

                {/* Buttons Row */}
                <div className="flex flex-wrap gap-3 justify-center w-full">
                  {/* View Location Map */}
                  <button
                    onClick={() => {
                      setActiveMap("recepcion");
                      document.getElementById("mapas-integrados")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-sm border border-[#E5E1D8] text-[#555] bg-transparent hover:bg-[#F1EFE9] transition-all text-xs font-semibold uppercase tracking-widest cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Ver Mapa</span>
                  </button>

                  {/* Google Calendar */}
                  <a
                    href={calendarReceptionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#C5A059] hover:bg-[#B49048] text-white transition-all text-xs font-bold uppercase tracking-widest"
                  >
                    <CalendarPlus className="w-3.5 h-3.5" />
                    <span>Calendario</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Master Maps Embed Segment */}
        <div id="mapas-integrados" className="w-full relative rounded-sm overflow-hidden bg-white border border-[#E5E1D8] shadow-sm p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 border-b border-[#E5E1D8]/40 pb-4">
            <div className="flex items-center gap-2">
              <Landmark className="text-[#C5A059] w-5 h-5" />
              <span className="font-serif text-lg text-[#333] font-light select-none">
                Mapa Interactivo: {activeMap === "iglesia" ? "Parroquia Santísima Cruz" : "Casa Babilonia"}
              </span>
            </div>

            {/* Selection Tabs */}
            <div className="flex p-1 bg-[#F1EFE9] rounded-sm border border-[#E5E1D8]/50">
              <button
                onClick={() => setActiveMap("iglesia")}
                className={`px-4 py-1.5 rounded-sm text-[10px] uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  activeMap === "iglesia"
                    ? "bg-[#C5A059] text-white shadow-sm"
                    : "text-[#777] hover:text-[#333]"
                }`}
              >
                Iglesia
              </button>
              <button
                onClick={() => setActiveMap("recepcion")}
                className={`px-4 py-1.5 rounded-sm text-[10px] uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  activeMap === "recepcion"
                    ? "bg-[#C5A059] text-white shadow-sm"
                    : "text-[#777] hover:text-[#333]"
                }`}
              >
                Recepción
              </button>
            </div>
          </div>

          {/* Interactive Map Visualizer */}
          <div className="relative aspect-[16/10] sm:aspect-[16/8] w-full rounded-sm overflow-hidden bg-[#FAF9F6] border border-[#E5E1D8] group">
            <AnimatePresence mode="wait">
              {activeMap === "iglesia" ? (
                <motion.iframe
                  key="church-map"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={churchMapUrl}
                  width="100%"
                  height="100%"
                  className="absolute inset-0 border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  title="Ubicación Iglesia"
                />
              ) : (
                <motion.iframe
                  key="reception-map"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={receptionMapUrl}
                  width="100%"
                  height="100%"
                  className="absolute inset-0 border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  title="Ubicación Recepción"
                />
              )}
            </AnimatePresence>
          </div>

          {/* GPS Launcher Button */}
          <div className="mt-4 flex justify-end">
            <a
              href={activeMap === "iglesia" ? churchNavUrl : receptionNavUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-sm bg-[#333] text-white hover:bg-[#1a1a1a] border border-[#E5E1D8]/30 transition-all text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm"
            >
              <Compass className="w-4 h-4 text-[#C5A059]" />
              <span>Abrir en Google Maps / GPS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
