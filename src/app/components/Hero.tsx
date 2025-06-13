import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Make the Web Better, Together
          </motion.h1>
          <p className="text-xl mb-8 text-blue-100">
            Report bugs, earn rewards, and help improve websites worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/dashboard" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
              Get Started
            </Link>
            <Link href="/features" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
              How It Works
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="bg-black/20 rounded-xl border border-blue-300/30 aspect-video flex items-center justify-center">
            <span className="text-blue-200">Platform Demo</span>
          </div>
        </div>
      </div>
    </section>
  );
}