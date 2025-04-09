"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function AuthPage() {
  const [mode, setMode] = useState("signin");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#0f172a" : "#f8fafc";
  }, [darkMode]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className={`min-h-screen flex items-center justify-center font-[Inter] relative overflow-hidden transition-all duration-500 ${
          darkMode ? "bg-[#0f172a] text-white" : "bg-slate-100 text-gray-800"
        }`}
      >
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-500 animate-[spin_20s_linear_infinite] opacity-20 blur-[160px]"></div>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-6 right-6 z-20 px-4 py-2 rounded-full text-sm font-semibold shadow-md backdrop-blur-lg bg-white/10 hover:bg-white/20"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl px-10 py-12 w-full max-w-md"
        >
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 text-white text-4xl rounded-full shadow-xl animate-bounce">
            🚀
          </div>

          <h1 className="text-3xl font-bold text-center">
            {mode === "signin" ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-center text-sm text-gray-300 mt-2">
            {mode === "signin"
              ? "Login to your account"
              : "Sign up to get started"}
          </p>

          <div className="flex justify-center gap-4 my-6">
            <button
              onClick={() => setMode("signin")}
              className={`px-5 py-2 text-sm rounded-full transition-all duration-300 font-semibold shadow-sm ${
                mode === "signin"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg text-white"
                  : "bg-white/5 hover:bg-white/10 text-white"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`px-5 py-2 text-sm rounded-full transition-all duration-300 font-semibold shadow-sm ${
                mode === "signup"
                  ? "bg-gradient-to-r from-pink-600 to-yellow-500 shadow-lg text-white"
                  : "bg-white/5 hover:bg-white/10 text-white"
              }`}
            >
              Sign Up
            </button>
          </div>

          <motion.form
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {mode === "signup" && (
              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder:text-gray-300 outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Enter your name"
                />
              </div>
            )}

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder:text-gray-300 outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder:text-gray-300 outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 transition-all rounded-full text-white font-semibold shadow-xl"
            >
              {mode === "signin" ? "Sign In" : "Sign Up"}
            </button>
          </motion.form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-300 mb-2">or continue with</p>
            <div className="flex justify-center gap-4">
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full font-semibold shadow-md">
                Google
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full font-semibold shadow-md">
                GitHub
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-300">
            {mode === "signin" ? "Don’t have an account?" : "Already a user?"} {" "}
            <span
              className="text-pink-400 hover:underline cursor-pointer font-semibold"
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            >
              {mode === "signin" ? "Sign up" : "Sign in"}
            </span>
          </p>
        </motion.div>
      </div>
    </>
  );
}
