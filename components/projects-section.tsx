'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const projects = [
  {
    title: 'Orbital SaaS Dashboard',
    description: 'Analytics-driven SaaS control center with authentication, role-aware routes, and advanced reporting.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'MySQL'],
    github: 'https://github.com/PrajwalK01/orbital-saas-dashboard',
    demo: 'https://example.com/demo1',
  },
  {
    title: 'Quantum API Engine',
    description: 'High-performance backend architecture with observability and Docker-based deployment.',
    stack: ['Node.js', 'Express', 'Docker', 'MySQL'],
    github: 'https://github.com/PrajwalK01/quantum-api-engine',
    demo: 'https://example.com/demo2',
  },
  {
    title: 'Cosmic Commerce Platform',
    description: 'Scalable e-commerce stack with modular services and secure payment workflow integrations.',
    stack: ['React', 'Java', 'Spring', 'PostgreSQL'],
    github: 'https://github.com/PrajwalK01/cosmic-commerce-platform',
    demo: 'https://example.com/demo3',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Projects" subtitle="Selected builds that combine product design and engineering depth." />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass-card flex flex-col p-6 transition duration-300 hover:-translate-y-2 hover:border-cosmic-blue/70 hover:shadow-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-cosmic-blue">{project.title}</h3>
              <p className="mt-4 flex-1 text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-cosmic-purple/60 px-3 py-1 text-xs text-cosmic-purple">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cosmic-blue/60 px-4 py-2 text-sm text-cosmic-blue transition hover:bg-cosmic-blue/15">
                  <Github size={16} /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cosmic-purple/60 px-4 py-2 text-sm text-cosmic-purple transition hover:bg-cosmic-purple/15">
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
