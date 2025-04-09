import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fancy Store",
  description: "A sleek and modern web experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white`}
      >
        <header className="backdrop-blur-xl bg-white/10 shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 text-transparent bg-clip-text animate-text">
              🛒 FancyStore
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 text-lg font-medium">
              <FancyLink href="/">Home</FancyLink>
              <FancyLink href="/cart">Cart</FancyLink>
              <FancyLink href="/reports">Report</FancyLink>
              <FancyLink href="/onboard">Register</FancyLink>
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </header>

        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}

function FancyLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative group transition duration-300"
    >
      <span className="group-hover:text-pink-400">{children}</span>
      <span className="block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-300 bg-pink-400"></span>
    </Link>
  );
}

function MobileMenu() {
  return (
    <details className="relative group">
      <summary className="text-xl cursor-pointer">☰</summary>
      <div className="absolute right-0 mt-2 w-40 bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden animate-fade-down text-white z-50">
        <Link href="/" className="block px-4 py-3 hover:bg-white/20 transition">Home</Link>
        <Link href="/cart" className="block px-4 py-3 hover:bg-white/20 transition">Cart</Link>
        <Link href="/reports" className="block px-4 py-3 hover:bg-white/20 transition">Report</Link>
        <Link href="/onboard" className="block px-4 py-3 hover:bg-white/20 transition">Register</Link>
      </div>
    </details>
  );
}
