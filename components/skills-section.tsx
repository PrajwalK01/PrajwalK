'use client';

import { SectionHeading } from '@/components/section-heading';

const skills = ['React', 'Node.js', 'TypeScript', 'Java', 'Python', 'MySQL', 'Docker'];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Skills Orbit" subtitle="Technologies revolving around every mission I launch." />

        <div className="relative mx-auto mt-10 flex h-[380px] w-[380px] items-center justify-center rounded-full border border-cosmic-purple/30 bg-cosmic-purple/5">
          <div className="absolute h-28 w-28 rounded-full border border-cosmic-blue/50 bg-cosmic-blue/10 shadow-glow" />
          <span className="absolute text-lg font-semibold text-cosmic-blue">Core</span>

          {skills.map((skill, index) => (
            <div
              key={skill}
              className="absolute left-1/2 top-1/2 h-0 w-0"
              style={{
                transform: `rotate(${(360 / skills.length) * index}deg)`,
              }}
            >
              <span
                className="block -translate-x-1/2 rounded-full border border-cosmic-blue/40 bg-white/10 px-4 py-2 text-sm font-medium shadow-glow backdrop-blur-sm animate-orbit"
                style={{ animationDelay: `-${index * 1.2}s` }}
              >
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
