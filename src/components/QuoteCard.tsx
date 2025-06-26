// src/components/QuoteCard.tsx
import { motion } from "framer-motion";

type Props = {
  text: string;
  author: string;
};

export default function QuoteCard({ text, author }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="glass p-6 rounded-2xl border-l-4 border-cyan-400 shadow-md"
    >
      <blockquote className="italic text-white mb-4 text-lg">“{text}”</blockquote>
      <p className="text-sm text-right text-cyan-300 font-medium">— {author}</p>
    </motion.div>
  );
}
