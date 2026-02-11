'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="About" subtitle="Engineering robust systems with a physics mindset." />
        <motion.div
          className="glass-card p-8 sm:p-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg leading-relaxed text-slate-200">
            I&apos;m a full-stack developer focused on creating products that scale. I design intuitive React experiences,
            architect resilient backend services, and build SaaS platforms that turn ambitious ideas into dependable
            digital reality. From APIs and databases to deployment pipelines, I love solving complex problems with
            clean, maintainable systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
