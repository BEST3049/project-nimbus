// src/components/JokeCard.tsx
import { motion } from "framer-motion";

type Props = {
  setup: string;
  punchline: string;
};

export default function JokeCard({ setup, punchline }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="glass p-6 rounded-2xl shadow-md border border-yellow-300/30"
    >
      <div className="text-lg font-medium text-yellow-300 mb-2">😂 A Joke For You</div>
      <p className="text-white">{setup}</p>
      <p className="text-cyan-300 mt-2 font-bold">{punchline}</p>
    </motion.div>
  );
}
