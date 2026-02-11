'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { StarField } from '@/components/star-field';

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden section-padding" id="hero">
      <StarField />
      <motion.div
        className="relative z-10 max-w-3xl text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
          Hi, I&apos;m <span className="neon-text">Prajwal</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-300 sm:text-2xl">
          Believe in me. I build ideas into reality.
        </p>
        <Link
          href="#projects"
          className="mt-10 inline-flex items-center justify-center rounded-full border border-cosmic-blue/70 bg-cosmic-blue/10 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-cosmic-blue transition hover:scale-105 hover:bg-cosmic-blue/25 hover:shadow-glow"
        >
          Explore My Work
        </Link>
      </motion.div>
    </section>
  );
}
