/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'advanced' | 'beginner'>('advanced');

  const filteredProjects = PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-soft-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl text-electric-blue font-display font-bold mb-8 inline-block relative"
          >
            My Projects
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-electric-blue mx-auto right-0" />
          </motion.h2>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-deep-navy/5 p-1 rounded-xl flex gap-2 w-full max-w-md">
              <button 
                onClick={() => setActiveTab('advanced')}
                className={`flex-1 py-3 px-6 rounded-lg font-bold transition-all duration-300 relative ${
                  activeTab === 'advanced' ? 'text-white' : 'text-slate-gray hover:text-deep-navy'
                }`}
              >
                {activeTab === 'advanced' && (
                  <motion.div 
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-deep-navy rounded-lg shadow-md"
                  />
                )}
                <span className="relative z-10">Advanced ML</span>
              </button>
              <button 
                onClick={() => setActiveTab('beginner')}
                className={`flex-1 py-3 px-6 rounded-lg font-bold transition-all duration-300 relative ${
                  activeTab === 'beginner' ? 'text-white' : 'text-slate-gray hover:text-deep-navy'
                }`}
              >
                {activeTab === 'beginner' && (
                  <motion.div 
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-gold-accent rounded-lg shadow-md"
                  />
                )}
                <span className="relative z-10">Dashboards & SQL</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-2 p-8 h-full border-l-[6px] ${
                  activeTab === 'advanced' 
                    ? 'bg-gradient-to-br from-deep-navy to-midnight-teal border-electric-blue text-white' 
                    : 'bg-white border-gold-accent text-deep-navy'
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className={`text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-wider ${
                        activeTab === 'advanced' 
                          ? 'bg-deep-navy text-electric-blue border border-electric-blue/20' 
                          : 'bg-soft-white text-gold-accent border border-gold-accent/20'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-electric-blue transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className={`line-clamp-3 mb-8 leading-relaxed ${
                    activeTab === 'advanced' ? 'text-slate-gray/80' : 'text-slate-gray'
                  }`}>
                    {project.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-current/10 flex items-center justify-between">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 font-bold transition-all duration-300 px-4 py-2 rounded-lg border-2 ${
                        activeTab === 'advanced'
                          ? 'border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white'
                          : 'border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-white'
                      }`}
                    >
                      <Github size={18} />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
