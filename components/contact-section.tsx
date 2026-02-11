'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const links = [
  { label: 'Email', href: 'mailto:prajwal.k@abhyudayakkss.org', icon: Mail },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/prajwalk', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/PrajwalK01', icon: Github },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-padding pb-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Contact" subtitle="Let&apos;s connect and launch the next constellation of ideas." />

        <div className="glass-card grid gap-6 p-10 sm:grid-cols-3">
          {links.map(({ label, href, icon: Icon }, index) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
              className="group flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-center transition hover:border-cosmic-blue/70 hover:shadow-glow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <span className="rounded-full border border-cosmic-purple/60 p-4 text-cosmic-purple transition group-hover:text-cosmic-blue">
                <Icon size={24} />
              </span>
              <span className="font-semibold">{label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
