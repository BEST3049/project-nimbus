// src/components/StockCard.tsx
import { motion } from "framer-motion";

type Props = {
  name: string;
  ticker: string;
  price: number;
  change: string;
};

export default function StockCard({ name, ticker, price, change }: Props) {
  const isPositive = change.startsWith("+");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`glass p-6 rounded-2xl border-l-4 ${
        isPositive ? "border-green-400" : "border-red-400"
      } shadow-xl`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{name}</h2>
        <span className="text-xs bg-black/30 px-2 py-1 rounded text-white font-mono">
          {ticker}
        </span>
      </div>
      <p className="text-3xl font-bold text-white">₹ {price.toFixed(2)}</p>
      <p className={`mt-2 text-sm ${isPositive ? "text-green-400" : "text-red-400"}`}>
        {isPositive ? "▲" : "▼"} {change}
      </p>
    </motion.div>
  );
}
