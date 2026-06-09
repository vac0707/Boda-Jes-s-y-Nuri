import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  systemUnlocked: boolean;
}

export default function AudioPlayer({ systemUnlocked }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize the Audio object once on mount
  useEffect(() => {
    const audioUrl = "https://res.cloudinary.com/dcnynnstm/video/upload/v1780968603/Pablo_Heredia_feat_Flavia_Laos_-_AMOR_INFINITO_jlhgfp.mp3";
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.volume = 0.55; // perfect balanced volume
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // When welcome screen is unlocked, auto-start playback
  useEffect(() => {
    if (systemUnlocked && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Autoplay was prevented by client configuration:", error);
            setIsPlaying(false);
          });
      }
    }
  }, [systemUnlocked]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Playback failed:", err);
        });
    }
  };

  if (!systemUnlocked) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 select-none">
      <button
        id="btn-toggle-musica"
        onClick={togglePlay}
        className="relative group flex items-center justify-center p-3 rounded-sm border border-[#D4AF37]/50 bg-[#1a1a1a]/95 text-[#D4AF37] hover:text-[#C5A059] shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 pointer-events-auto"
        title={isPlaying ? "Silenciar Música" : "Reproducir Música"}
      >
        {/* Absolute pulse glow when playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-sm border border-[#D4AF37]/40 animate-ping opacity-60 pointer-events-none" />
        )}

        {/* Visualizer effect container */}
        <div className="flex items-center gap-2">
          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-3.5 px-0.5 w-4 pointer-events-none">
              <span className="w-[2px] bg-[#D4AF37] animate-bar-tall origin-bottom rounded-sm-none" />
              <span className="w-[2px] bg-[#C5A059] animate-bar-medium origin-bottom rounded-sm-none" style={{ animationDelay: "0.2s" }} />
              <span className="w-[2px] bg-[#8A9A5B] animate-bar-short origin-bottom rounded-sm-none" style={{ animationDelay: "0.4s" }} />
              <span className="w-[2px] bg-white animate-bar-medium origin-bottom rounded-sm-none" style={{ animationDelay: "0.1s" }} />
            </div>
          ) : (
            <div className="flex items-end gap-0.5 h-3.5 px-0.5 w-4 pointer-events-none">
              <span className="w-[2px] h-1.5 bg-[#D4AF37]/50 rounded-sm-none" />
              <span className="w-[2px] h-3 bg-[#D4AF37]/50 rounded-sm-none" />
              <span className="w-[2px] h-1 bg-[#D4AF37]/50 rounded-sm-none" />
              <span className="w-[2px] h-2 bg-[#D4AF37]/50 rounded-sm-none" />
            </div>
          )}

          {/* Simple state icon */}
          <span className="border-l border-[#D4AF37]/30 pl-2">
            {isPlaying ? (
              <Volume2 className="w-4 h-4 text-[#D4AF37]" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#C5A059]" />
            )}
          </span>
        </div>
      </button>

      {/* Styled custom animations inside a utility style tag */}
      <style>{`
        @keyframes bar-tall {
          0%, 100% { height: 4px; }
          50% { height: 14px; }
        }
        @keyframes bar-medium {
          0%, 100% { height: 3px; }
          50% { height: 10px; }
        }
        @keyframes bar-short {
          0%, 100% { height: 2px; }
          50% { height: 7px; }
        }
        .animate-bar-tall {
          animation: bar-tall 1s ease-in-out infinite;
        }
        .animate-bar-medium {
          animation: bar-medium 1.1s ease-in-out infinite;
        }
        .animate-bar-short {
          animation: bar-short 0.9s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
