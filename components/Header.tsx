'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-[#121212]/50 border-b border-white/5"
    >
      <div className="flex items-center gap-2 text-white/90 font-medium tracking-wide">
        <span className="text-xl font-bold tracking-tighter">BHASKAR NAIK.</span>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
      </nav>

      <a 
        href="mailto:example@example.com"
        className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-neutral-200 transition-colors"
      >
        Get in touch
      </a>
    </motion.header>
  );
}
