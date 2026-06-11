"use client";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import Heading from "../layout/Heading";
import {
  SiNextdotjs, SiNodedotjs, SiMongodb, SiDocker,
  SiSocketdotio, SiJsonwebtokens, SiReact, SiExpress, SiCloudinary,
} from "react-icons/si";
import projects from "@/data/projects.json";

const iconMap = {
  SiNextdotjs, SiNodedotjs, SiMongodb, SiDocker,
  SiSocketdotio, SiJsonwebtokens, SiReact, SiExpress, SiCloudinary,
};

export default function Projects() {
  return (
    <Container className="mb-30">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <Heading heading="Featured Projects" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col justify-between p-6 border border-white/5 bg-white/3 backdrop-blur-sm hover:bg-white/4 hover:border-teal-400/20 transition-all duration-300"
            >
              <div>
                <h3 className="text-lg font-bold font-syne text-zinc-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-inter text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => {
                    const Icon = iconMap[tag.icon];
                    return (
                      <span
                        key={tag.name}
                        className="flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/10"
                        title={tag.name}
                      >
                        {Icon && <Icon className="text-sm" />}
                        {tag.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between mt-2">
                <span className="text-xs font-inter text-zinc-500">
                  {project.stat}
                </span>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-teal-400 hover:text-teal-300 transition-colors duration-200"
                    >
                      Live ↗
                    </a>
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