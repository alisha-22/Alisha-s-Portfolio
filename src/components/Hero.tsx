/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);

  const titles = PERSONAL_INFO.titles;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(40);
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(80);
      }

      if (!isDeleting && displayText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, titles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated BG Layer */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-electric-blue)_1px,_transparent_1px)] bg-[length:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-deep-navy to-midnight-teal" />
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-electric-blue font-medium mb-4 text-lg"
        >
          Hello, I'm
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-tight"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        <div className="h-12 md:h-16 mb-8 text-2xl md:text-4xl font-medium text-white/90">
          <span>I'm a </span>
          <span className="text-electric-blue underline underline-offset-8 decoration-electric-blue/30">
            {displayText}
          </span>
          <span className="typewriter-cursor inline-block w-1 ml-1">&nbsp;</span>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mx-auto text-slate-gray text-lg md:text-xl mb-12 leading-relaxed"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 bg-electric-blue text-white rounded-lg font-semibold text-lg shadow-xl hover:scale-105 hover:shadow-electric-blue/20 transition-all duration-300"
          >
            View My Projects
          </a>
          <a 
            href="#" 
            className="w-full sm:w-auto px-8 py-4 border-2 border-white/50 text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-deep-navy hover:border-white transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center gap-8"
        >
          {[
            { Icon: Github, href: PERSONAL_INFO.github, label: "GitHub" },
            { Icon: Linkedin, href: PERSONAL_INFO.linkedin, label: "LinkedIn" },
            { Icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a 
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white hover:text-electric-blue transform hover:scale-115 transition-all duration-300"
            >
              <Icon size={32} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
