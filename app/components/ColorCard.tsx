"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ColorCardProps {
  hex: string;
  name?: string;
  onCopy: (hex: string) => void;
}

export default function ColorCard({ hex, name, onCopy }: ColorCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    onCopy(hex);
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-sm border border-gray-800/50 backdrop-blur-sm"
      style={{
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.2)",
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Color Swatch */}
      <div
        className="h-32 w-full"
        style={{ backgroundColor: hex }}
      />

      {/* Card Content */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            {name && (
              <p className="text-sm font-medium text-gray-300 mb-1">{name}</p>
            )}
            <p className="text-sm font-mono text-gray-400">{hex.toUpperCase()}</p>
          </div>
        </div>

        {/* Copy Button */}
        <motion.button
          onClick={handleCopy}
          className="w-full py-2 px-4 rounded-lg text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 transition-colors duration-200 border border-gray-700/50"
          whileTap={{ scale: 0.98 }}
        >
          Copy
        </motion.button>
      </div>
    </motion.div>
  );
}
