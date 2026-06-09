import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import WelcomeScreen from "./components/WelcomeScreen";
import AudioPlayer from "./components/AudioPlayer";
import Hero from "./components/Hero";
import FamilyTribute from "./components/FamilyTribute";
import OurStory from "./components/OurStory";
import EventsAndMaps from "./components/EventsAndMaps";
import Schedule from "./components/Schedule";
import DressCode from "./components/DressCode";
import PhotoGallery from "./components/PhotoGallery";
import Gifts from "./components/Gifts";
import Countdown from "./components/Countdown";
import RSVPForm from "./components/RSVPForm";
import RomanticQuote from "./components/RomanticQuote";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import FloatingLeaves from "./components/FloatingLeaves";
import FooterRefined from "./components/FooterRefined";
import { useLanguage } from "./hooks/useLanguage";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const { lang } = useLanguage();

  // Scroll restore on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleUnlock = () => {
    setUnlocked(true);
    // Add brief smooth scroll trigger
    setTimeout(() => {
      const heroSec = document.getElementById("inicio");
      if (heroSec) {
        heroSec.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="relative min-h-screen w-full bg-cream-100 overflow-x-hidden select-none">
      {/* Cinematic Curtain Transition */}
      <AnimatePresence mode="wait">
        {!unlocked && (
          <motion.div
            key="welcome-curtain"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.05,
              transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
            }}
            className="fixed inset-0 z-50 overflow-hidden"
          >
            <WelcomeScreen onOpen={handleUnlock} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Wedding Invitation Page */}
      {unlocked && (
        <motion.main
          key="wedding-invitation-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
          className="relative w-full"
        >
          {/* Subtle Ambient Falling Leaves & Sparkles */}
          <FloatingLeaves />

          {/* Persistent Background Music Controller */}
          <AudioPlayer systemUnlocked={unlocked} />

          {/* Persistent Floating Chat Widget */}
          <FloatingWhatsapp systemUnlocked={unlocked} />

          {/* Fullscreen Parallax Header */}
          <Hero />

          {/* Separator Romantic Quote Panel 1 */}
          <RomanticQuote
            quote={lang === "es"
              ? "Dos almas con un solo pensamiento, dos corazones que laten como uno solo."
              : "Two souls with but a single thought, two hearts that beat as one."}
            author="Friedrich Halm"
            bgType="sage"
          />

          {/* Parents & Godparents Family Presentation */}
          <FamilyTribute />

          {/* Cinematic Love Journey Timeline */}
          <OurStory />

          {/* Separator Romantic Quote Panel 2 */}
          <RomanticQuote
            quote={lang === "es"
              ? "El amor nos encontró, decidió quedarse, y nosotros decidimos caminar de la mano para siempre."
              : "Love found us, decided to stay, and we decided to walk hand in hand forever."}
            bgType="dark"
          />

          {/* Church and Banquet cards + Maps interactive Tab */}
          <EventsAndMaps />

          {/* Timeline Process of the Day */}
          <Schedule />

          {/* Attire Etiquette specifications */}
          <DressCode />

          {/* Non-overlapping visual grid / touch slider */}
          <PhotoGallery />

          {/* Gift table / Cash Contributions options */}
          <Gifts />

          {/* Countdown Clock & Monthly Calendar Reference */}
          <Countdown />

          {/* Interactive registration book connected to WhatsApp */}
          <RSVPForm />

          {/* Cinematic End Banner */}
          <FooterRefined />
        </motion.main>
      )}
    </div>
  );
}
