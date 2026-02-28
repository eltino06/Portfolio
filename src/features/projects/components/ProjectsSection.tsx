import { Section, SectionHeading } from '@/components/ui/Section';
import { projects } from '../data/projects';
import { ProjectsContent } from './ProjectsContent';

interface ProjectsSectionProps {
    dict: any;
}

export function ProjectsSection({ dict }: ProjectsSectionProps) {
    return (
        <Section id="projects" alternate>
            <SectionHeading
                label={dict.title}
                title={dict.subtitle}
                subtitle={dict.description}
            />

            <ProjectsContent projects={projects} dict={dict} />
        </Section>
    );
}
