import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { EntryGate } from "@/components/missyou/EntryGate";
import { Experience } from "@/components/missyou/Experience";
import { BackgroundMusic } from "@/components/missyou/BackgroundMusic";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    // 1. The floating text & hearts logic
    const createFloatingText = (e: MouseEvent) => {
      const text = document.createElement("div");
      text.innerText = "mein tera ♡";
      text.style.position = "fixed";
      text.style.left = `${e.clientX}px`;
      text.style.top = `${e.clientY}px`;
      text.style.color = "white";
      text.style.fontSize = "20px";
      text.style.fontFamily = "cursive";
      text.style.fontWeight = "bold";
      text.style.pointerEvents = "none";
      text.style.zIndex = "9999";
      text.style.transition = "all 1s ease-out";
      text.style.textShadow = "0 0 10px rgba(255,255,255,0.8)";

      document.body.appendChild(text);

      // floating hearts
      for (let i = 0; i < 5; i++) {
        const heart = document.createElement("div");
        heart.innerText = "♡";
        heart.style.position = "fixed";
        heart.style.left = `${e.clientX + (Math.random() * 60 - 30)}px`;
        heart.style.top = `${e.clientY + (Math.random() * 40 - 20)}px`;
        heart.style.color = "#ffc0cb";
        heart.style.fontSize = `${12 + Math.random() * 10}px`;
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";
        heart.style.transition = "all 1s ease-out";
        heart.style.opacity = "1";

        document.body.appendChild(heart);

        setTimeout(() => {
          heart.style.transform = `
            translateY(-60px)
            translateX(${Math.random() * 60 - 30}px)
            rotate(${Math.random() * 90 - 45}deg)
          `;
          heart.style.opacity = "0";
        }, 10);

        setTimeout(() => {
          heart.remove();
        }, 1000);
      }

      setTimeout(() => {
        text.style.transform = "translateY(-50px)";
        text.style.opacity = "0";
      }, 10);

      setTimeout(() => {
        text.remove();
      }, 1000);
    };

    // 2. Attach the listener to the whole window
    window.addEventListener("click", createFloatingText);

    // 3. Cleanup when the component is destroyed
    return () => window.removeEventListener("click", createFloatingText);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-#0a0a0a">
      <AnimatePresence mode="wait">
        {!unlocked ? (
          <EntryGate key="gate" onUnlock={() => setUnlocked(true)} />
        ) : (
          <>
          <BackgroundMusic/>
          <Experience key="exp" />
        </>
        )}
      </AnimatePresence>
    </div>
  );
}