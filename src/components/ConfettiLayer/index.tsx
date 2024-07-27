"use client";
import { useRewardsContext } from "@/contexts/RewardsContext";
import Confetti from "react-confetti";

const ConfettiLayer = ({ children }: { children: React.ReactNode }) => {
  const { showConfetti, setShowConfetti } = useRewardsContext();
  return (
    <>
      {children}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          gravity={0.3}
          numberOfPieces={2400}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
    </>
  );
};

export default ConfettiLayer;
