"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function CartPage() {
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

      <div className="min-h-screen p-6 font-[Inter] transition-all duration-500 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-10 text-center text-pink-400 drop-shadow-xl"
        >
          🛒 Your Cart
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {cartItems.map((item) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              key={item.id}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg overflow-hidden hover:shadow-pink-500/40 transition-all"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-44 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-yellow-400 mb-1">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-300 mb-3">
                  {item.desc}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-base font-bold text-white">
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
          className="mt-12 text-center"
        >
          <p className="text-lg font-semibold mb-3 text-white">
            Total: <span className="text-green-400">${total}</span>
          </p>
          <button className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 hover:from-pink-500 hover:to-yellow-400 text-white font-bold px-8 py-3 rounded-full shadow-lg text-lg transition-all">
            🚀 Checkout Now
          </button>
        </motion.div>
      </div>
    </>
  );
}
