import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';

export default function HomePage() {
  return (
    <main className="relative overflow-x-clip bg-cosmic-bg">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
