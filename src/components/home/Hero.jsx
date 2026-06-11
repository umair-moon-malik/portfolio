"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-4 max-w-6xl mx-auto">
      <motion.p
        className="text-zinc-200 text-sm font-mono mb-3 tracking-widest uppercase"
        {...fadeUp(0.1)}
      >
        Hi, I'm
      </motion.p>

      <motion.h1
        className="text-5xl sm:text-7xl font-bold font-syne  text-zinc-100 tracking-tight leading-none mb-4"
        {...fadeUp(0.2)}
      >
        Umair Malik
      </motion.h1>

      <motion.p
        className="text-xl font-inter sm:text-2xl text-zinc-300 font-medium mb-4 max-w-2xl"
        {...fadeUp(0.3)}
      >
        Full-Stack Developer building{" "}
        <span className="text-teal-400">scalable, production-ready</span> web
        applications.
      </motion.p>

      <motion.p
        className="text-zinc-300 font-inter text-base max-w-lg mb-10 leading-relaxed"
        {...fadeUp(0.4)}
      >
        Computer Science undergraduate at VIT Bhopal focused on modern web
        technologies, cloud infrastructure, and clean engineering.
      </motion.p>

      <motion.div className="flex gap-4 flex-wrap" {...fadeUp(0.5)}>
        <Link
          href="/projects"
          className="font-inter px-6 py-3 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-full transition-colors duration-200"
        >
          View Projects
        </Link>
        <Link
          href="#stack"
          className="font-inter px-6 py-3 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-full transition-colors duration-200"
        >
          View My Skills
        </Link>
        <a
          href="/Umair_Malik_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 rounded-full transition-colors duration-200"
        >
          My Resume
        </a>
      </motion.div>
    </section>
  );
}
