import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { EntryGate } from "@/components/missyou/EntryGate";
import { Experience } from "@/components/missyou/Experience";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [unlocked, setUnlocked] = useState(false);
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!unlocked ? (
          <EntryGate key="gate" onUnlock={() => setUnlocked(true)} />
        ) : (
          <Experience key="exp" />
        )}
      </AnimatePresence>
    </div>
  );
}
