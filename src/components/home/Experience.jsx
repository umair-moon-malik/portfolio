"use client";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import Heading from "../layout/Heading";
import experience from "@/data/experience";


export default function Experience() {
  return (
    <section id="experience">
      <Container className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >

          <Heading heading="Experience" />

          <div className="flex flex-col gap-6">
            {experience.map((exp) => (
              <div
                key={exp.role}
                className="relative p-6 border border-white/5 bg-white/3 backdrop-blur-sm hover:border-teal-400/20 hover:bg-white/[0.06] transition-all duration-300"
              >
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-base font-bold font-syne text-zinc-100">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-inter text-teal-400 mt-0.5">
                      {exp.org}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 shrink-0">
                    {exp.period}
                  </span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/5 mb-4" />

                {exp.images.length > 0 && (
                  <div className="flex gap-3 mb-4 overflow-x-auto pb-1">
                    {exp.images.map((src, i) => (
                      <div
                        key={i}
                        className="shrink-0 rounded-xl overflow-hidden border border-white/5 w-[40%] relative"
                      >
                        <img
                          src={src}
                          alt={`${exp.org} ${i + 1}`}
                          className="w-full h-full object-cover object-top opacity-60"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Points */}
                <ul className="flex flex-col gap-2">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm font-inter text-zinc-400 flex gap-3 leading-relaxed"
                    >
                      <span className="text-teal-400 shrink-0 mt-0.5">→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
