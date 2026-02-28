import { Suspense } from 'react';
import { HeroSection } from '@/features/hero/components/HeroSection';
import { AboutSection } from '@/features/about/components/AboutSection';
import { SkillsSection } from '@/features/skills/components/SkillsSection';
import { ProjectsSection } from '@/features/projects/components/ProjectsSection';
import { ExperienceSection } from '@/features/experience/components/ExperienceSection';
import { ArchitectureSection } from '@/features/architecture/components/ArchitectureSection';
import { ContactSection } from '@/features/contact/components/ContactSection';
import { getDictionary, Locale } from '@/lib/i18n';

export default async function Home({ params }: { params: { lang: string } }) {
    const lang = params.lang as Locale;
    const dict = await getDictionary(lang);

    return (
        <main className="flex flex-col w-full overflow-x-hidden">
            <HeroSection dict={dict.hero} statsDict={dict.stats} />
            <AboutSection dict={dict.about} />

            <Suspense fallback={<div className="h-96" />}>
                <SkillsSection dict={dict.skills} />
            </Suspense>

            <Suspense fallback={<div className="h-96" />}>
                <ExperienceSection dict={dict.experience} />
            </Suspense>

            <Suspense fallback={<div className="h-96" />}>
                <ArchitectureSection dict={dict.architecture} />
            </Suspense>

            <Suspense fallback={<div className="h-96" />}>
                <ProjectsSection dict={dict.projects} />
            </Suspense>

            <ContactSection dict={dict.contact} />
        </main>
    );
}
