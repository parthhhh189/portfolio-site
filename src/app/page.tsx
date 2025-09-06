"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown, FileText } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "EMR (Electronic Medical Records)",
      description:
        "A secure EMR system to digitize patient records, improve accessibility, and streamline healthcare workflows with real-world hospital deployment potential.",
    },
    {
      title: "AR/VR Tourism Website",
      description:
        "An immersive tourism platform using AR/VR to let users explore cultural heritage sites and destinations virtually with interactive 360° experiences.",
    },
    {
      title: "Intraday Trade Detection Bot",
      description:
        "A Python-based bot for real-time stock and crypto intraday trading using technical indicators and automated buy/sell signals.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gray-50 text-gray-900"
      style={{
        backgroundImage: "url('/bg.jpg')", // ✅ use the file name and extension here
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="bg-black bg-opacity-70 min-h-screen">
        {/* Hero Section */}
        <section className="text-center py-20 text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            Parthasarathi Adak
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Passionate Full Stack Developer | Biotechnology Engineer | Building scalable apps & innovative real-world solutions.
          </motion.p>

          {/* Social + CV Buttons */}
          <div className="flex justify-center flex-wrap gap-6 mt-6">
            <a
              href="mailto:sarathipartha2077@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/parthasarathi-adak-415204233"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/parthhhh189"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>

            {/* ✅ Download CV button */}
            <a
              href="/Parthasarathi-Adak-CV.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition"
            >
              <FileDown className="w-5 h-5" />
              Download CV
            </a>

            {/* ✅ View CV Online button */}
            <a
              href="/Parthasarathi-Adak-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-xl hover:bg-green-700 transition"
            >
              <FileText className="w-5 h-5" />
              View CV Online
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-center"
          >
            About Me
          </motion.h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            I am a passionate software developer with a strong foundation in biotechnology (B.E., Chandigarh University).
            Skilled in C, C++, Java, JavaScript, Python, Node.js, React, and database management. Currently working as a Backend Developer at Value Kare Technologies, contributing to AI-powered EMR & healthcare platforms.
          </p>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-6 bg-gray-100 bg-opacity-90">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-10 text-center"
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
              >
                <div className="shadow-lg rounded-2xl hover:shadow-xl transition-shadow bg-white p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <button className="w-full py-2 px-4 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center bg-gray-800 text-gray-300">
          <p>© {new Date().getFullYear()} Parthasarathi Adak. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
