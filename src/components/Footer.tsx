/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-midnight-teal py-12 border-t border-white/5 relative">
      <div className="container mx-auto px-6 text-center">
        <p className="text-white/80 font-medium mb-4">
          © 2026 {PERSONAL_INFO.name} · Data Analyst · Faisalabad, Pakistan
        </p>
        
        <p className="text-slate-gray text-sm mb-8 flex items-center justify-center gap-2">
          Designed & built with <Heart size={14} className="text-red-400 fill-red-400" /> — Open to opportunities
        </p>

        <div className="flex justify-center gap-6 mb-8">
           {[
            { Icon: Github, href: PERSONAL_INFO.github, label: "GitHub" },
            { Icon: Linkedin, href: PERSONAL_INFO.linkedin, label: "LinkedIn" },
            { Icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a 
              key={label}
              href={href}
              className="text-slate-gray hover:text-white transition-colors duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Scroll Top Button */}
        {showScroll && (
          <button 
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-10 right-10 p-4 bg-electric-blue text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 z-50 animate-in fade-in slide-in-from-bottom-5"
          >
            <ArrowUp size={24} />
          </button>
        )}
      </div>
    </footer>
  );
}
