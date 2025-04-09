"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function CartPage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#0f172a" : "#f8fafc";
  }, [darkMode]);

  const cartItems = [
    {
      id: 1,
      title: "Wireless Headphones",
      desc: "High-fidelity wireless sound with noise cancellation.",
      price: "$99.99",
      img: "https://images.unsplash.com/photo-1585386959984-a4155224a1a1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Smart Watch",
      desc: "Track your fitness and notifications on the go.",
      price: "$149.99",
      img: "https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.slice(1)), 0).toFixed(2);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className={`min-h-screen p-10 font-[Inter] transition-all duration-500 relative ${
          darkMode ? "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white" : "bg-slate-100 text-gray-900"
        }`}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-6 right-6 z-20 px-4 py-2 rounded-full text-sm font-semibold shadow-md backdrop-blur-lg bg-white/10 hover:bg-white/20"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-12 text-center text-pink-400 drop-shadow-xl"
        >
          🛒 Your Cart
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {cartItems.map((item) => (
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              key={item.id}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl overflow-hidden hover:shadow-pink-500/50 transition-all"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover rounded-t-3xl"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-yellow-400 mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-300 mb-4">
                  {item.desc}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-white">
                    {item.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl font-semibold mb-4 text-white">
            Total: <span className="text-green-400">${total}</span>
          </p>
          <button className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 hover:from-pink-500 hover:to-yellow-400 text-white font-bold px-10 py-4 rounded-full shadow-lg text-xl transition-all">
            🚀 Checkout Now
          </button>
        </motion.div>
      </div>
    </>
  );
}
