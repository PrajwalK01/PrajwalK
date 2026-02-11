'use client';

import { motion } from 'framer-motion';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-10 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold sm:text-4xl neon-text">{title}</h2>
      {subtitle ? <p className="mt-4 text-slate-300">{subtitle}</p> : null}
    </motion.div>
  );
}
