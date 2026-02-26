import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/About';
import { SkillsSection } from '@/components/sections/Skills';
import { ProjectsSection } from '@/components/sections/Projects';
import { ExperienceSection } from '@/components/sections/Experience';
import { ContactSection } from '@/components/sections/Contact';

/**
 * Main portfolio page — SPA-style, all sections on one page.
 * Data: edit /lib/data.ts to customize all content.
 */
export default function Home() {
    return (
        <>
            <Navbar />

            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ExperienceSection />
                <ContactSection />
            </main>

            <Footer />
        </>
    );
}
