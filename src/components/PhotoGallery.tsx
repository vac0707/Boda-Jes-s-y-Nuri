import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GalleryImage } from "../types";
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles, SlidersHorizontal, Grid } from "lucide-react";

export default function PhotoGallery() {
  const images: GalleryImage[] = [
    { id: "g1", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968212/22_wynwmc.jpg" },
    { id: "g2", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968211/21_jt3htx.jpg" },
    { id: "g3", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968211/20_b1j6c3.jpg" },
    { id: "g4", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968210/18_rr2ly3.jpg" },
    { id: "g5", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968210/19_iish3a.jpg" },
    { id: "g6", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968209/17_haxco8.jpg" },
    { id: "g7", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968208/15_t6ytut.jpg" },
    { id: "g8", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968208/14_e9ahwa.jpg" },
    { id: "g9", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968207/13_kxohl4.jpg" },
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [layoutMode, setLayoutMode] = useState<"grid" | "carousel">("grid");
  const carouselRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section id="galeria" className="relative py-28 px-4 sm:px-6 bg-[#FAF9F6] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-[#E5E1D8]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Box */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <Sparkles className="w-5 h-5 text-[#C5A059] mb-4 animate-spin" style={{ animationDuration: "16s" }} />
            <span className="font-sans text-xs tracking-[0.3em] text-[#8A9A5B] uppercase font-bold">
              Nuestros Recuerdos
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#333] tracking-wide font-light mt-3 mb-4">
              Galería de Fotos
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37]" />
            <p className="text-[#777] text-sm font-light mt-4 max-w-md">
              Un vistazo a nuestras risas preferidas y tiernas miradas, curadas especialmente al estilo de una revista de modas.
            </p>
          </motion.div>

          {/* Layout Mode Control */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <span className="text-[10px] uppercase tracking-wider text-[#8A9A5B] font-bold mr-2">Estilo de Galería:</span>
            <div className="p-1 bg-[#F1EFE9] rounded-sm border border-[#E5E1D8]/50 flex">
              <button
                onClick={() => setLayoutMode("grid")}
                className={`p-2 rounded-sm transition-all cursor-pointer ${
                  layoutMode === "grid" ? "bg-[#C5A059] text-white shadow-sm" : "text-[#777] hover:text-[#333]"
                }`}
                title="Diseño Editorial Grid"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayoutMode("carousel")}
                className={`p-2 rounded-sm transition-all cursor-pointer ${
                  layoutMode === "carousel" ? "bg-[#C5A059] text-white shadow-sm" : "text-[#777] hover:text-[#333]"
                }`}
                title="Carrusel Cinematográfico"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Display Render */}
        <AnimatePresence mode="wait">
          {layoutMode === "grid" ? (
            <motion.div
              key="grid-layout"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
            >
              {images.map((img, idx) => (
                <motion.div
                  key={img.id}
                  onClick={() => openLightbox(idx)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
                  className="break-inside-avoid relative overflow-hidden rounded-sm group border border-[#E5E1D8] shadow-sm cursor-pointer bg-[#F1EFE9]"
                >
                  {/* Image tag with lazy-loading */}
                  <img
                    src={img.url}
                    alt="Colección de amor Jesús y Nuri"
                    loading="lazy"
                    className="w-full object-cover rounded-sm select-none pointer-events-none transform transition-all duration-700 group-hover:scale-105 filter group-hover:brightness-95"
                    referrerPolicy="no-referrer"
                  />

                  {/* Elegant Golden Frame Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#333]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="absolute inset-4 border border-[#D4AF37]/60 rounded-sm transform scale-95 group-hover:scale-100 transition-transform duration-500" />
                    <motion.div
                      className="p-3.5 rounded-sm bg-white text-[#333] border border-[#D4AF37]/45 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <Maximize2 className="w-4 h-4 text-[#C5A059]" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="carousel-layout"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="relative w-full"
            >
              {/* Carousel container with touch overflow scrolling */}
              <div
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto pb-8 scrollbar-none px-4 scroll-smooth snap-x snap-mandatory"
                style={{ scrollbarWidth: "none" }}
              >
                {images.map((img, idx) => (
                  <div
                    key={img.id}
                    onClick={() => openLightbox(idx)}
                    className="flex-none w-[280px] sm:w-[360px] aspect-[4/5] snap-center rounded-sm overflow-hidden bg-white border border-[#E5E1D8] shadow-sm cursor-pointer group relative"
                  >
                    <img
                      src={img.url}
                      alt="Colección de amor Jesús y Nuri"
                      loading="lazy"
                      className="w-full h-full object-cover select-none pointer-events-none transform transition-transform duration-[8000ms] group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Overlay effects */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#333]/60 to-transparent pointer-events-none" />
                    <div className="absolute top-4 right-4 p-2 rounded-sm bg-white/90 text-[#C5A059] border border-[#E5E1D8]/40">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Arrow Controls */}
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={scrollLeft}
                  className="p-3.5 rounded-sm border border-[#E5E1D8] bg-[#FAF9F6] text-[#555] hover:text-[#C5A059] shadow-sm hover:scale-105 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollRight}
                  className="p-3.5 rounded-sm border border-[#E5E1D8] bg-[#FAF9F6] text-[#555] hover:text-[#C5A059] shadow-sm hover:scale-105 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Lightbox Popup */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 select-none"
              onClick={closeLightbox}
            >
              {/* Floating stars details */}
              <div className="absolute top-6 left-6 text-[#C5A059]/20 pointer-events-none">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>

              {/* Action buttons */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-3 rounded-sm bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10 cursor-pointer"
                title="Cerrar Galería"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Button */}
              <button
                onClick={showPrev}
                className="absolute left-4 p-4 rounded-sm bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Expanded Image Box */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="max-w-4xl max-h-[85vh] px-4 overflow-hidden relative flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[lightboxIndex].url}
                  alt="Expanded Jesús & Nuri wedding moments"
                  className="max-w-full max-h-[80vh] object-contain rounded-sm border border-[#D4AF37]/35 shadow-2xl"
                  referrerPolicy="no-referrer"
                />

                {/* Subtitle image index tracker */}
                <span className="absolute bottom-[-32px] text-white/80 text-xs tracking-widest font-bold uppercase font-sans">
                  Fotografía {lightboxIndex + 1} de {images.length}
                </span>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={showNext}
                className="absolute right-4 p-4 rounded-sm bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
