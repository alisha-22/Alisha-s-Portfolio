/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-deep-navy overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold mb-4 inline-block relative text-white"
          >
            Get In Touch
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-electric-blue mx-auto right-0" />
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-gray mb-2">Full Name*</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your full name"
                    className="w-full bg-midnight-teal/20 border border-white/10 rounded-xl px-5 py-4 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-gray mb-2">Email Address*</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                    className="w-full bg-midnight-teal/20 border border-white/10 rounded-xl px-5 py-4 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all text-white"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-gray mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="What's this about?"
                  className="w-full bg-midnight-teal/20 border border-white/10 rounded-xl px-5 py-4 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-gray mb-2">Message*</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Write your message here..."
                  className="w-full bg-midnight-teal/20 border border-white/10 rounded-xl px-5 py-4 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all text-white resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className={`w-full md:w-auto px-10 py-5 bg-electric-blue text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 shadow-xl hover:shadow-electric-blue/20 hover:-translate-y-1 ${
                  status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white hover:text-electric-blue'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 text-success-green bg-success-green/10 p-4 rounded-xl border border-success-green/20"
                >
                  <CheckCircle2 size={20} />
                  Your message was sent! I'll reply soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 text-red-400 bg-red-400/10 p-4 rounded-xl border border-red-400/20"
                >
                  <AlertCircle size={20} />
                  Something went wrong. Please email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5 space-y-10"
          >
            <div>
               <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>
               <div className="space-y-6">
                 {[
                   { Icon: Mail, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
                   { Icon: Phone, label: 'Phone', value: '+92 309-1523702', href: 'tel:+923091523702' },
                   { Icon: MapPin, label: 'Location', value: PERSONAL_INFO.location, href: null },
                 ].map(({ Icon, label, value, href }) => (
                   <div key={label} className="flex items-start gap-5">
                      <div className="p-3 bg-midnight-teal/30 rounded-xl text-electric-blue">
                         <Icon size={24} />
                      </div>
                      <div>
                        <p className="text-slate-gray text-xs uppercase tracking-widest font-bold mb-1">{label}</p>
                        {href ? (
                          <a href={href} className="text-white hover:text-electric-blue font-medium transition-colors">{value}</a>
                        ) : (
                          <p className="text-white font-medium">{value}</p>
                        )}
                      </div>
                   </div>
                 ))}
               </div>
            </div>

            <div>
               <h3 className="text-xl font-bold mb-6 text-white">Connect with Me</h3>
               <div className="flex gap-4">
                  {[
                    { Icon: Github, href: PERSONAL_INFO.github, label: "GitHub" },
                    { Icon: Linkedin, href: PERSONAL_INFO.linkedin, label: "LinkedIn" },
                    { Icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" },
                  ].map(({ Icon, href, label }) => (
                    <a 
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-midnight-teal/30 text-white rounded-2xl hover:bg-electric-blue hover:text-white hover:scale-110 hover:-translate-y-2 transition-all duration-300"
                    >
                      <Icon size={24} />
                    </a>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
