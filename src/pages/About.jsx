import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiFirebase,
  SiFigma,
} from "react-icons/si";

const About = () => {
  const skills = [
    { name: "HTML", icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS", icon: SiCss3, color: "text-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "React", icon: SiReact, color: "text-cyan-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
    { name: "Git", icon: SiGit, color: "text-orange-600" },
    { name: "GitHub", icon: SiGithub, color: "text-black" },
    { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
    { name: "Figma", icon: SiFigma, color: "text-pink-500" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about me and my journey in web development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 animate-pulse" />
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl mt-5 font-semibold">
                Front-End Developer
              </h3>
              <p className="text-muted-foreground">
                I’m Muhammad Mubashir, a passionate front-end developer focused
                on building responsive and accessible web interfaces. My journey
                into web development began through self-learning and later
                advanced with hands-on training at SMIT (Saylani Mass IT
                Training), where I honed my skills in HTML, CSS, JavaScript, and
                React.js. I’ve built a variety of projects, including a
                Foodpanda clone, a Netflix clone, and several responsive landing
                pages. These experiences helped me develop a strong
                understanding of real-world UI challenges, performance
                optimization, and writing clean, reusable code.
              </p>
              <p className="text-muted-foreground">
                My current focus is on building dynamic web applications using
                tools like Tailwind CSS, Git, Firebase, and modern JavaScript
                libraries. I take pride in transforming ideas into functional
                and visually appealing products that work seamlessly across
                devices. I thrive in environments where continuous learning,
                feedback, and collaboration are encouraged. Currently, I’m
                actively seeking an internship opportunity where I can apply my
                skills, grow with a team, and contribute to meaningful digital
                solutions.
              </p>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-semibold text-center mb-8">
              My Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-card rounded-xl p-6 text-center border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <skill.icon
                    className={`w-8 h-8 mx-auto mb-3 ${skill.color}`}
                  />
                  <h4 className="font-medium">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
