import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import logo from '../assets/react.svg'
import '../App.css'

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About Me' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="flex relative py-14 items-center justify-between px-4 md:px-8  border-b border-border bg-background  z-20">
      {/* Left: Logo */}
      <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
        <Link to="/" className="flex items-center gap-2">
          {/* <img src={logo} alt="Logo" className="w-10 h-10 bg-primary/10 rounded-lg" /> */}
          <span className="text-2xl font-semibold tracking-wide">Mubashir</span>
        </Link>
      </div>
      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-lg font-medium">
        {navLinks.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? 'hover:text-primary border-b-2 border-primary pb-1 transition-all duration-300'
                : 'hover:text-primary pb-1 transition-all duration-300'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      {/* Right: Hire Me + Theme Toggle (Desktop) */}
      <div className="hidden md:flex items-center gap-4">
        <NavLink to="/contact" className={({ isActive }) => isActive ? "px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90  border-b-2 border-primary transition-all duration-300" : "px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition duration-300"}>Hire Me</NavLink>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
      {/* Hamburger Button (Mobile) */}
      <button
        className="md:hidden p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col justify-start items-start gap-8 px-8 py-10 animate-slideDown shadow-2xl md:hidden">
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 shadow-md transition"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {navLinks.map((link, idx) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                (isActive
                  ? 'block w-full text-left py-3 px-2 rounded-lg bg-primary/10 text-primary font-semibold border-l-4 border-primary transition-all duration-300 text-lg'
                  : 'block w-full text-left py-3 px-2 rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 font-medium text-lg')
                + (idx === 0 ? ' mt-12' : '')
              }
              style={{ letterSpacing: '0.02em' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "block w-full text-left px-2 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 border-l-4 border-primary transition-all duration-300 text-lg"
                : "block w-full text-left px-2 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition duration-300 text-lg"
            }
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </NavLink>
          <button
            onClick={toggleTheme}
            className="mt-4 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition shadow"
          >
            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
