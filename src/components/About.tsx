/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, STATS } from '../constants';
import { GraduationCap, MapPin, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-soft-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Illustration/Photo Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 aspect-square relative"
          >
            <div className="absolute inset-0 bg-electric-blue/10 rounded-3xl rotate-3 transform z-0" />
            <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl z-10 flex items-center justify-center p-8">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-electric-blue/20 to-midnight-teal/10 flex items-center justify-center border-2 border-dashed border-electric-blue/30 overflow-hidden">
                 {/* This would be Alisha's profile photo */}
                 <div className="text-center">
                    <div className="w-48 h-48 rounded-full bg-electric-blue/10 mx-auto mb-4 p-8">
                      <Briefcase size={80} className="text-electric-blue w-full h-full" />
                    </div>
                    <p className="text-slate-gray font-medium">Data Analyst @ Faisalabad</p>
                 </div>
              </div>
            </div>
            {/* Status Decoration */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-success-green pulse-dot" />
              <p className="text-deep-navy font-semibold text-sm">Open to Work</p>
            </div>
          </motion.div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl text-electric-blue font-display font-bold mb-2 inline-block relative">
                About Me
                <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-electric-blue" />
              </h2>
              
              <p className="mt-8 text-slate-gray leading-relaxed text-lg mb-8">
                {PERSONAL_INFO.bio}
              </p>

              {/* Education Block */}
              <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 border-l-4 border-electric-blue">
                <h3 className="text-xl font-bold text-deep-navy mb-4 flex items-center gap-3">
                  <GraduationCap className="text-electric-blue" />
                  Education
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-deep-navy">{PERSONAL_INFO.education.degree}</h4>
                    <p className="text-slate-gray text-sm">{PERSONAL_INFO.education.institution}</p>
                    <p className="text-electric-blue font-medium mt-1">Class of {PERSONAL_INFO.education.year}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 content-start">
                    {PERSONAL_INFO.education.coursework.map(course => (
                      <span key={course} className="text-[11px] font-mono bg-soft-white text-electric-blue px-2 py-1 rounded border border-electric-blue/10">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-md text-center border-b-4 border-electric-blue/20 hover:border-electric-blue transition-all duration-300">
                    <p className="text-3xl font-bold text-deep-navy mb-1">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-gray font-bold">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-midnight-teal text-white px-4 py-2 rounded-full text-sm">
                  <MapPin size={16} />
                  {PERSONAL_INFO.location}
                </div>
                <div className="flex items-center gap-2 bg-electric-blue text-white px-4 py-2 rounded-full text-sm">
                  <GraduationCap size={16} />
                  BS Computer Science
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
