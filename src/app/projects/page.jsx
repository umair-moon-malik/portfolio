"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import Container from "@/components/layout/Container";
import Heading from "@/components/layout/Heading";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh]"
    >
      <Container className="mt-16 flex flex-col items-center justify-center">
        <Heading heading="My Projects" />

        <div className="mt-16 text-center max-w-2xl">
          <h1 className="font-syne text-3xl md:text-4xl font-bold text-zinc-100">
            Projects Page Under Development
          </h1>

          <p className="mt-4 font-inter text-red-400 leading-relaxed">
            I&apos;m currently redesigning this page. In the meantime, you can view
            all featured projects on the homepage.
          </p>

          <Link
            href="/"
            className="inline-flex mt-8 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-black font-inter font-semibold transition-colors duration-200"
          >
            View Projects on Homepage
          </Link>
        </div>
      </Container>
    </motion.div>
  );
}