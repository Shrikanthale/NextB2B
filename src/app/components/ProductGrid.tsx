"use client";

import { motion } from "framer-motion";
import Image from 'next/image'
export default function ProductGrid({ posts }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
            {posts?.map((product) => (
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    key={product.slug}
                    className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-pink-500/40"
                >
                    <Image
                        src={product.img}
                        alt="Picture of the author"
                        className="w-full h-52 object-cover rounded-t-3xl"
                    />
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-1 text-yellow-400">
                            {product.title}
                        </h2>
                        <p className="text-sm text-gray-300 mb-4">
                            {product.desc || "No description available."}
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold text-white">
                                ${Math.floor(Math.random() * 200 + 20)}.00
                            </span>
                            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold px-4 py-2 rounded-full shadow-md transition-all">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
