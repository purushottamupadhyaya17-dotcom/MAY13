import { useEffect, useRef } from "react";

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Sets volume to 40%
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked or failed:", err);
      });
    }
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/images/bg-music.mp3"
      loop
      className="hidden" // Keeps the player invisible
    />
  );
};