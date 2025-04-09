"use client";

import { motion } from "framer-motion";
import { Product } from "./types";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-pink-500/40"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-52 object-contain bg-white p-4 rounded-t-3xl"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-1 text-yellow-400">
          {product.title}
        </h2>
        <p className="text-sm text-gray-300 mb-4 line-clamp-3">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-white">
            ${product.price}
          </span>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold px-4 py-2 rounded-full shadow-md transition-all">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
