import React, { useState } from "react";
import { motion } from "motion/react";
import { MessageSquarePlus, Milestone, HelpCircle, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function RSVPForm() {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: "",
    asistentes: "1",
    mensaje: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const phoneNum = "51926263277";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre.trim()) return;

    // Formatting the message template for luxurious delivery on WhatsApp based on language
    const msgTemplate = lang === "es"
      ? `¡Hola Jesús y Nuri! ✨💍\n\nConfirmo con mucha alegría mi asistencia a su hermosa boda este 05 de septiembre.\n\n*Detalles de Confirmación:*\n👤 *Nombre:* ${formData.nombre.trim()}\n👥 *Asistentes:* ${formData.asistentes}\n✉️ *Mensaje Especial:* "${formData.mensaje.trim() || '¡Muchas felicidades y bendiciones!'}"\n\n¡Nos vemos pronto para celebrar juntos! 🎉`
      : `Hello Jesús and Nuri! ✨💍\n\nI am very happy to confirm my assistance to your beautiful wedding this September 5th.\n\n*Confirmation Details:*\n👤 *Name:* ${formData.nombre.trim()}\n👥 *Guests:* ${formData.asistentes}\n✉️ *Special Message:* "${formData.mensaje.trim() || 'Congratulations and best wishes!'}"\n\nSee you soon to celebrate together! 🎉`;

    const encodedText = encodeURIComponent(msgTemplate);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNum}&text=${encodedText}`;

    // Mark as local success to provide visual triumph feedback!
    setIsSuccess(true);

    // Open link in a blank window context safely
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="confirmacion" className="relative py-28 px-6 bg-[#FAF9F6] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-[#E5E1D8]" />

      <div className="max-w-xl mx-auto relative z-10">
        {/* Header Title Block */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <HelpCircle className="w-5 h-5 text-[#C5A059] mb-4" />
            <span className="font-sans text-xs tracking-[0.3em] text-[#8A9A5B] uppercase font-bold">
              {t("rsvp.label")}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#333] tracking-wide font-light mt-3 mb-4">
              {t("rsvp.title")}
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37]" />
            <p className="text-[#777] text-sm font-light mt-4 max-w-sm">
              {t("rsvp.subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Real Dynamic RSVP Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white border border-[#E5E1D8] rounded-sm p-8 sm:p-10 shadow-sm relative overflow-hidden"
        >
          {/* Internal Geometric Outline */}
          <div className="absolute inset-1.5 border border-[#D4AF37]/10 pointer-events-none" />

          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-[#F1EFE9] rounded-sm flex items-center justify-center mb-6 border border-[#D4AF37]/35">
                <CheckCircle2 className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-2xl text-[#333] font-light mb-3">
                {t("rsvp.success_title")}
              </h3>
              <p className="text-[#555] text-xs sm:text-sm font-light max-w-xs leading-relaxed mb-6">
                {t("rsvp.success_desc")}
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-xs uppercase tracking-widest font-bold border border-[#E5E1D8] text-[#555] bg-transparent hover:bg-[#F1EFE9] px-6 py-3 rounded-sm transition-all cursor-pointer"
              >
                {t("rsvp.btn_back")}
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Field 1: Name */}
              <div>
                <label htmlFor="nombre" className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#8A9A5B] mb-2">
                  {t("rsvp.label_name")}
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder={t("rsvp.placeholder_name")}
                  className="w-full px-5 py-3.5 rounded-sm border border-[#E5E1D8] bg-[#FAF9F6] focus:bg-white text-[#333] text-sm font-light select-text outline-none transition-all focus:border-[#D4AF37] focus:ring-0"
                />
              </div>

              {/* Field 2: Comps count */}
              <div>
                <label htmlFor="asistentes" className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#8A9A5B] mb-2">
                  {t("rsvp.label_guests")}
                </label>
                <div className="relative">
                  <select
                    id="asistentes"
                    name="asistentes"
                    value={formData.asistentes}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-sm border border-[#E5E1D8] bg-[#FAF9F6] focus:bg-white text-[#333] text-sm font-light outline-none transition-all cursor-pointer focus:border-[#D4AF37] focus:ring-0 appearance-none"
                  >
                    <option value="1">{t("rsvp.option_1")}</option>
                    <option value="2">{t("rsvp.option_2")}</option>
                    <option value="3">{t("rsvp.option_3")}</option>
                    <option value="4">{t("rsvp.option_4")}</option>
                    <option value="5">{t("rsvp.option_5")}</option>
                  </select>
                  {/* Custom select arrow overlay */}
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#C5A059]">
                    <Milestone className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Field 3: Custom message */}
              <div>
                <label htmlFor="mensaje" className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#8A9A5B] mb-2">
                  {t("rsvp.label_message")}
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={3}
                  placeholder={t("rsvp.placeholder_message")}
                  className="w-full px-5 py-3.5 rounded-sm border border-[#E5E1D8] bg-[#FAF9F6] focus:bg-white text-[#333] text-sm font-light select-text outline-none transition-all focus:border-[#D4AF37] focus:ring-0 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-sm font-sans text-xs tracking-[0.2em] uppercase font-bold text-white bg-[#C5A059] hover:bg-[#B49048] border border-[#D4AF37]/35 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 shadow-md"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>{t("rsvp.btn_send")}</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
