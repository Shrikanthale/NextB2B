"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function ReportPage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#0f172a" : "#f8fafc";
  }, [darkMode]);

  const reports = [
    {
      id: 1,
      title: "Monthly Sales",
      desc: "Overview of this month's product sales and performance.",
      date: "March 2025",
      img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "User Growth",
      desc: "Insights into user acquisition and retention trends.",
      date: "March 2025",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className={`min-h-screen p-6 md:p-12 font-[Outfit] transition-all duration-500 relative ${
          darkMode ? "bg-[#0f172a] text-white" : "bg-slate-50 text-slate-900"
        }`}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-6 right-6 z-20 px-4 py-2 rounded-full text-sm font-semibold shadow-lg bg-white/10 hover:bg-white/20 backdrop-blur-md"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold mb-12 text-center"
        >
          📊 Reports Dashboard
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        >
          {reports.map((report) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              key={report.id}
              className="rounded-xl overflow-hidden shadow-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all"
            >
              <img
                src={report.img}
                alt={report.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-1 text-slate-800 dark:text-white">
                  {report.title}
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
                  {report.desc}
                </p>
                <p className="text-xs text-pink-500 font-semibold">
                  {report.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="z-10 mt-16 text-center"
        >
          <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white hover:from-purple-500 hover:to-indigo-500 transition-all px-8 py-3 rounded-full shadow-lg font-bold text-lg">
            📥 Download Full Report
          </button>
        </motion.div>
      </div>
    </>
  );
}