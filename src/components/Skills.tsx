/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../constants';
import * as Icons from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-deep-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl text-electric-blue font-display font-bold mb-4 inline-block relative"
          >
            Technical Skills
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-electric-blue mx-auto right-0" />
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="bg-midnight-teal/40 border-t-2 border-electric-blue p-8 rounded-2xl glow-on-hover transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => {
                  const LucideIcon = (Icons as any)[skill.iconName.charAt(0).toUpperCase() + skill.iconName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())] || Icons.Code;
                  
                  return (
                    <div key={skillIdx}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                           <span className="text-white font-medium text-sm">{skill.name}</span>
                        </div>
                        <span className="text-electric-blue font-mono text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-deep-navy rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-electric-blue shadow-[0_0_8px_var(--color-electric-blue)]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                 {category.skills.map(s => (
                   <span key={s.name} className="text-[10px] font-mono border border-electric-blue/30 text-electric-blue px-3 py-1 rounded-full uppercase tracking-widest bg-deep-navy">
                     {s.name}
                   </span>
                 ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
