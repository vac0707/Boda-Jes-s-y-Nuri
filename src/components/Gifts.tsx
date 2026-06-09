import { useState } from "react";
import { motion } from "motion/react";
import { Gift, CreditCard, Clipboard, Check, HelpCircle } from "lucide-react";

export default function Gifts() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const bcpAccount = "215-98765432-0-89";
  const bcpCci = "002-2159876543208945";
  const interbankAccount = "310-456789123-01";
  const interbankCci = "003-3104567891230112";

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedAccount(type);
      setTimeout(() => setCopiedAccount(null), 2500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section id="regalos" className="relative py-28 px-6 bg-[#FAF9F6] overflow-hidden">
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
            <Gift className="w-5 h-5 text-[#C5A059] mb-4" />
            <span className="font-sans text-xs tracking-[0.3em] text-[#8A9A5B] uppercase font-bold">
              Detalles de Aprecio
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#333] tracking-wide font-light mt-3 mb-4">
              Mesa de Regalos
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37]" />
            <p className="text-[#777] text-sm font-light mt-4 max-w-md">
              Su presencia en nuestro día de bodas es el regalo más grande. No obstante, si desean realizarnos un obsequio, les brindamos estas opciones:
            </p>
          </motion.div>
        </div>

        {/* Gift Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Card 1: Envelope gift */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-white border border-[#E5E1D8] rounded-sm p-8 sm:p-10 shadow-sm relative flex flex-col items-center text-center hover:border-[#D4AF37]/50 transition-all duration-300"
          >
            <div className="absolute inset-1.5 border border-[#D4AF37]/5 pointer-events-none" />

            <div className="w-16 h-16 bg-[#F1EFE9] rounded-sm flex items-center justify-center mb-6 border border-[#E5E1D8]/40">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                className="w-8 h-8 text-[#C5A059]"
              >
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2M22 6v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6M22 6l-10 7L2 6" />
              </svg>
            </div>

            <h3 className="font-serif text-2xl text-[#333] font-normal tracking-wide mb-1">
              Lluvia de Sobres
            </h3>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold mb-4">
              Tradición en Efectivo
            </span>
            
            <p className="text-[#555] text-xs sm:text-sm font-light leading-relaxed max-w-xs mt-2">
              Dispondremos de un cofre especial para depositar sus sobres de felicitación y palabras de aliento el día del evento en la recepción de 
              <strong> Casa Babilonia</strong>.
            </p>
          </motion.div>

          {/* Card 2: Bank Transfers */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="bg-white border border-[#E5E1D8] rounded-sm p-8 sm:p-10 shadow-sm relative flex flex-col items-center hover:border-[#8A9A5B]/50 transition-all duration-300"
          >
            <div className="absolute inset-1.5 border border-[#8A9A5B]/5 pointer-events-none" />

            <div className="w-16 h-16 bg-[#F1EFE9] rounded-sm flex items-center justify-center mb-6 border border-[#E5E1D8]/40">
              <CreditCard className="w-8 h-8 text-[#C5A059]" strokeWidth={1.25} />
            </div>

            <h3 className="font-serif text-2xl text-[#333] font-normal tracking-wide mb-1 text-center">
              Cuentas Bancarias
            </h3>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A9A5B] font-bold mb-4 text-center">
              Transferencia Directa
            </span>

            {/* List of banking accounts */}
            <div className="w-full space-y-4 text-left">
              {/* BCP Account */}
              <div className="border border-[#E5E1D8] rounded-sm p-4 bg-[#FAF9F6]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase text-[#333] tracking-widest">
                    Banco BCP Soles
                  </span>
                  <span className="text-[9px] font-light text-gray-400">Jesús Prado</span>
                </div>
                <div className="flex flex-col gap-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-light text-gray-500">Nº Cuenta:</span>
                    <button
                      onClick={() => copyToClipboard(bcpAccount, "bcpAcct")}
                      className="flex items-center gap-1.5 font-mono text-[#333] hover:text-[#C5A059] font-bold transition-all text-[11px] cursor-pointer"
                    >
                      {bcpAccount}
                      {copiedAccount === "bcpAcct" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Clipboard className="w-3.5 h-3.5 text-gray-400" />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-light text-gray-500">Nº CCI:</span>
                    <button
                      onClick={() => copyToClipboard(bcpCci, "bcpCci")}
                      className="flex items-center gap-1.5 font-mono text-[#333] hover:text-[#C5A059] font-bold transition-all text-[10px] cursor-pointer"
                    >
                      {bcpCci}
                      {copiedAccount === "bcpCci" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Clipboard className="w-3.5 h-3.5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Interbank Account */}
              <div className="border border-[#E5E1D8] rounded-sm p-4 bg-[#FAF9F6]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase text-[#333] tracking-widest">
                    Interbank Soles
                  </span>
                  <span className="text-[9px] font-light text-gray-400">Nuri Aydee</span>
                </div>
                <div className="flex flex-col gap-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-light text-gray-500">Nº Cuenta:</span>
                    <button
                      onClick={() => copyToClipboard(interbankAccount, "intAcct")}
                      className="flex items-center gap-1.5 font-mono text-[#333] hover:text-[#C5A059] font-bold transition-all text-[11px] cursor-pointer"
                    >
                      {interbankAccount}
                      {copiedAccount === "intAcct" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Clipboard className="w-3.5 h-3.5 text-gray-400" />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-light text-gray-500">Nº CCI:</span>
                    <button
                      onClick={() => copyToClipboard(interbankCci, "intCci")}
                      className="flex items-center gap-1.5 font-mono text-[#333] hover:text-[#C5A059] font-bold transition-all text-[10px] cursor-pointer"
                    >
                      {interbankCci}
                      {copiedAccount === "intCci" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Clipboard className="w-3.5 h-3.5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
