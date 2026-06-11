"use client";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import Heading from "../layout/Heading";
import certs from "@/data/certs.json";


const badgeColor = (badge) => {
  if (badge === "Elite + Gold")
    return "bg-yellow-400/10 text-yellow-400 border-yellow-400/20";
  return "bg-teal-400/10 text-teal-400 border-teal-400/10";
};

export default function Certificates() {
  return (
    <Container className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >

        <Heading heading="Certifications" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col gap-4 p-5 border border-white/5 bg-white/3 backdrop-blur-sm hover:border-teal-400/20 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="p-2 rounded-xl border border-white/5 bg-white/3 min-w-9 flex items-center justify-center">
                  <span className="text-xs font-mono font-bold text-teal-400">
                    {cert.initial}
                  </span>
                </div>
                <span
                  className={`text-xs font-mono px-2 py-1 rounded-full border ${badgeColor(cert.badge)}`}
                >
                  {cert.badge}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold font-syne text-zinc-100 mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-inter text-teal-400 mb-1">
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-3">
                  {cert.score && (
                    <span className="text-xs font-mono text-zinc-400">
                      Score: {cert.score}
                    </span>
                  )}
                  {cert.period && (
                    <span className="text-xs font-mono text-zinc-500">
                      {cert.period}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
}
