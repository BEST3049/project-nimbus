// src/components/ErrorCard.tsx
import { motion } from "framer-motion";

type Props = {
  title: string;
  message: string;
};

export default function ErrorCard({ title, message }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="glass p-5 rounded-xl border border-red-500/30 shadow-md text-red-300"
    >
      <h2 className="text-lg font-bold mb-2">⚠️ {title}</h2>
      <p className="text-sm text-white/80">{message}</p>
    </motion.div>
  );
}
