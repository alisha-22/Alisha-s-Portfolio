/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CERTIFICATIONS } from '../constants';
import { Award, ExternalLink, Box } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-soft-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl text-electric-blue font-display font-bold mb-16 inline-block relative"
        >
          Certifications & Learning
          <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-electric-blue mx-auto right-0" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-2xl shadow-xl h-full flex flex-col transition-all duration-300 border-b-8 ${
                cert.status === 'completed' 
                  ? 'bg-soft-white border-electric-blue' 
                  : 'bg-[#F0FFF5] border-success-green'
              }`}
            >
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-2xl ${
                  cert.status === 'completed' ? 'bg-electric-blue/10' : 'bg-success-green/10'
                }`}>
                   <Award className={cert.status === 'completed' ? 'text-electric-blue' : 'text-success-green'} size={40} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-deep-navy mb-2 min-h-14 flex items-center justify-center">
                {cert.title}
              </h3>
              
              <div className="text-slate-gray font-medium mb-1 flex items-center justify-center gap-2">
                <span>{cert.issuer}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-gray/30" />
                <span>{cert.year}</span>
              </div>

              <p className="text-sm text-slate-gray/60 mb-8 font-medium">
                {cert.status === 'completed' ? 'Professional Certificate' : 'Currently Enrolled'}
              </p>

              <div className="mt-auto">
                {cert.status === 'completed' ? (
                  <a 
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-electric-blue font-bold hover:underline"
                  >
                    Verify Certificate
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-success-green font-bold">
                    <div className="w-2 h-2 rounded-full bg-success-green pulse-dot" />
                    In Progress
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
