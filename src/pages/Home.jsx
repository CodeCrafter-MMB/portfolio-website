import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent animate-pulse" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-2">
              Hi, I'm Muhammad Mubashir 
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Front-End Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              I create beautiful and functional web experiences with modern technologies.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/projects" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Contact Me
              </button>
            </Link>
          </motion.div>
          {/* Social Links */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-8"
          >
            <a 
              href="https://github.com/CodeCrafter-MMB" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-7 h-7" />
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-mubashir-60a90430a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a 
              href="mailto:mubashirbehlum606@example.com" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-7 h-7" />
            </a>
          </motion.div> */}
        </div>
      </div>
          
        
      

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/95 to-transparent" />
    </motion.section>
  )
}

export default Home
