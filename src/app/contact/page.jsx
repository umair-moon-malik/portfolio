"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Send, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

import Container from "@/components/layout/Container";
import Heading from "@/components/layout/Heading";

import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const GITHUB_URL = "https://github.com/umair-moon-malik";
  const LINKEDIN_URL = "https://linkedin.com/in/umairmalik01";
  const EMAIL = "umairmalik0@proton.me";

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending || !formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      formRef.current.reset();

      toast.success("Message sent successfully.");
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container className="mt-16 mb-24">
          <Heading heading="Contact Me" />

          <div className="mt-8 flex flex-col gap-6">
            <div className="flex gap-3">
              <a
                href={`mailto:${EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 flex-1 items-center justify-center gap-2 border border-white/5 bg-white/3 text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/20 hover:bg-white/[0.06] hover:text-teal-400"
              >
                <Mail size={16} />
                <span className="font-inter text-sm">Email</span>
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 flex-1 items-center justify-center gap-2 border border-white/5 bg-white/3 text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/20 hover:bg-white/[0.06] hover:text-teal-400"
              >
                <FaGithub size={16} />
                <span className="font-inter text-sm">GitHub</span>
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 flex-1 items-center justify-center gap-2 border border-white/5 bg-white/3 text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/20 hover:bg-white/[0.06] hover:text-teal-400"
              >
                <FaLinkedin size={16} />
                <span className="font-inter text-sm">LinkedIn</span>
              </a>
            </div>

            <div className="border border-white/5 bg-white/3 p-6 backdrop-blur-sm">
              <h2 className="mb-6 font-syne text-xl font-bold text-zinc-100">
                Send a Message
              </h2>

              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-4"
              >
                <div>
                  <label className="mb-2 block font-inter text-sm text-zinc-400">
                    Name
                  </label>

                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Your Name"
                    className="w-full border border-white/5 bg-black/20 px-4 py-3 font-inter text-zinc-200 outline-none transition-all placeholder:text-zinc-500 focus:border-teal-400/30 focus:ring-1 focus:ring-teal-400/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-inter text-sm text-zinc-400">
                    Email
                  </label>

                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="you@example.com"
                    className="w-full border border-white/5 bg-black/20 px-4 py-3 font-inter text-zinc-200 outline-none transition-all placeholder:text-zinc-500 focus:border-teal-400/30 focus:ring-1 focus:ring-teal-400/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-inter text-sm text-zinc-400">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject"
                    className="w-full border border-white/5 bg-black/20 px-4 py-3 font-inter text-zinc-200 outline-none transition-all placeholder:text-zinc-500 focus:border-teal-400/30 focus:ring-1 focus:ring-teal-400/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-inter text-sm text-zinc-400">
                    Message
                  </label>

                  <textarea
                    rows={7}
                    name="message"
                    required
                    placeholder="Write your message..."
                    className="w-full resize-none border border-white/5 bg-black/20 p-4 font-inter text-zinc-200 outline-none transition-all placeholder:text-zinc-500 focus:border-teal-400/30 focus:ring-1 focus:ring-teal-400/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="flex w-full items-center justify-center gap-2 bg-teal-500 py-3 font-inter font-semibold text-black transition-colors duration-200 hover:bg-teal-400 disabled:cursor-not-allowed disabled:bg-teal-500/60"
                >
                  {isSending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </Container>
      </motion.div>

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        toastClassName="!bg-zinc-900 !border !border-white/10 !text-zinc-200"
        progressClassName="!bg-teal-400"
      />
    </>
  );
}