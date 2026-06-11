"use client";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import {
  SiNextdotjs, SiReact, SiNodedotjs, SiMongodb,
  SiDocker, SiSocketdotio, SiTailwindcss, SiTypescript,
  SiJavascript, SiPython, SiCplusplus, SiGit,
  SiLinux, SiPostman,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import Heading from "../layout/Heading";
import stack from "@/data/stack.json";

const iconMap = {
  SiNextdotjs, SiReact, SiNodedotjs, SiMongodb,
  SiDocker, SiSocketdotio, SiTailwindcss, SiTypescript,
  SiJavascript, SiPython, SiCplusplus, SiGit,
  SiLinux, SiPostman, FaJava, FaAws,
};

export default function Stack() {
  return (
    <section id="stack">
      <Container className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Heading heading="Tech Stack" />
          <div className="flex flex-col gap-10 text-center">
            {stack.map((group) => (
              <div key={group.category}>
                <p className="text-sm font-mono text-zinc-200 uppercase tracking-widest mb-5">
                  {group.category}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {group.items.map((item) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <div
                        key={item.name}
                        className="flex flex-col items-center justify-center gap-3 w-48 h-24 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm hover:border-teal-400/30 hover:bg-white/[0.06] transition-all duration-300 group"
                      >
                        {Icon && (
                          <Icon className="text-3xl text-zinc-400 group-hover:text-teal-400 transition-colors duration-300" />
                        )}
                        <span className="text-sm font-inter text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}