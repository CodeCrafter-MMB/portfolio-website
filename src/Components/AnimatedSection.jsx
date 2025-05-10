import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection; 