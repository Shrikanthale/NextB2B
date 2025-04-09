"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function ProductPage() {
 
  const productData = [
    {
      id: 1,
      title: "Wireless Headphones",
      desc: "High-fidelity wireless sound with noise cancellation.",
      price: "$99.99",
      img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80"

    },
    {
      id: 2,
      title: "Smart Watch",
      desc: "Track your fitness and notifications on the go.",
      price: "$149.99",
      img: "https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Portable Speaker",
      desc: "Powerful sound in a compact design.",
      price: "$59.99",
      img: "https://images.unsplash.com/photo-1585386959984-2288c4f34b25?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className={`min-h-screen p-10 font-[Inter] relative overflow-hidden transition-all duration-500 ${ "bg-[#0f172a] text-white" 
        }`}
      >
      {/* {
        data?.map((item)=>{
          return(
            <>
            
            </>
          )
        })
      } */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {productData.map((product) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              key={product.id}
              className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-pink-500/40"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-52 object-cover rounded-t-3xl"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-1 text-yellow-400">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-300 mb-4">
                  {product.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">
                    {product.price}
                  </span>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold px-4 py-2 rounded-full shadow-md transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch("")
//   const data = await res.json()

//   return {
//     props : {
//       data : data
//     }
//   }
// }