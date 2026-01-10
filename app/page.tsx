"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ColorCard from "./components/ColorCard";
import Toast from "./components/Toast";
import NavBar from "./components/NavBar";

interface Color {
  hex: string;
  name: string;
  category: "cool" | "warm" | "neutral";
}

const colors: Color[] = [
  // Cool tones
  { hex: "#B8D4E3", name: "Sky Blue", category: "cool" },
  { hex: "#A8D5BA", name: "Sage Green", category: "cool" },
  { hex: "#C4B5E8", name: "Lavender", category: "cool" },
  { hex: "#9BC4CB", name: "Aqua Mist", category: "cool" },
  { hex: "#B5C9E8", name: "Periwinkle", category: "cool" },
  { hex: "#A8D8D8", name: "Mint", category: "cool" },
  { hex: "#C8E6E8", name: "Powder Blue", category: "cool" },
  { hex: "#B0D4E6", name: "Baby Blue", category: "cool" },
  
  // Warm tones
  { hex: "#F4C2C2", name: "Dusty Rose", category: "warm" },
  { hex: "#F5D5C8", name: "Peach", category: "warm" },
  { hex: "#F0D4D4", name: "Blush", category: "warm" },
  { hex: "#F4E4C1", name: "Buttercream", category: "warm" },
  { hex: "#E8C4A8", name: "Apricot", category: "warm" },
  { hex: "#F2D2BD", name: "Vanilla", category: "warm" },
  
  // Neutral tones
  { hex: "#D4D4D4", name: "Cool Gray", category: "neutral" },
  { hex: "#E0E0E0", name: "Silver", category: "neutral" },
  { hex: "#D8D8D8", name: "Stone", category: "neutral" },
  { hex: "#E8E8E8", name: "Pearl", category: "neutral" },
  { hex: "#DCDCDC", name: "Ash", category: "neutral" },
];

type FilterType = "all" | "cool" | "warm" | "neutral";

export default function Home() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const filteredColors = useMemo(() => {
    if (filter === "all") return colors;
    return colors.filter((color) => color.category === filter);
  }, [filter]);

  const handleCopy = (hex: string) => {
    setToastMessage(`Copied ${hex.toUpperCase()} to clipboard`);
    setShowToast(true);
  };

  const filterButtons: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "Cool", value: "cool" },
    { label: "Warm", value: "warm" },
    { label: "Neutrals", value: "neutral" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <NavBar />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-light tracking-tight text-gray-900 mb-4">
            Pastel
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A curated collection of summer-inspired pastel colors
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterButtons.map((button) => (
            <motion.button
              key={button.value}
              onClick={() => setFilter(button.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === button.value
                  ? "bg-gray-900 text-white shadow-sm"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {button.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Color Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {filteredColors.map((color, index) => (
            <motion.div
              key={`${color.hex}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <ColorCard
                hex={color.hex}
                name={color.name}
                onCopy={handleCopy}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredColors.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">No colors found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
