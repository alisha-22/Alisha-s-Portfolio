/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // Simple scroll-spy
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-deep-navy/80 backdrop-blur-xl border-b border-electric-blue py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-semibold text-electric-blue hover:text-white transition-colors duration-300">
          {PERSONAL_INFO.name}
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-300 hover:text-electric-blue ${
                activeSection === link.href.substring(1) ? 'text-electric-blue' : 'text-white'
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-electric-blue"
                />
              )}
            </a>
          ))}
          <a 
            href="#" 
            className="flex items-center gap-2 px-4 py-2 border border-white rounded-lg text-sm font-medium hover:bg-white hover:text-deep-navy transition-all duration-300 active:scale-95"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white hover:text-electric-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[60px] bg-midnight-teal flex flex-col p-8 lg:hidden z-40"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-medium text-white hover:text-electric-blue border-b border-white/10 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 px-6 py-4 bg-electric-blue text-white rounded-xl text-lg font-semibold hover:bg-white hover:text-electric-blue transition-all duration-300 shadow-xl"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
