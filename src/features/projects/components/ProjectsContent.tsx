'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { type Project, type ProjectCategory } from '../data/projects';

interface ProjectsContentProps {
    projects: Project[];
    dict: any;
}

const CATEGORIES: { id: ProjectCategory; labelKey: string }[] = [
    { id: 'Todas', labelKey: 'all' },
    { id: 'Frontend', labelKey: 'frontend' },
    { id: 'Backend', labelKey: 'backend' },
    { id: 'FullStack', labelKey: 'fullstack' },
];

export function ProjectsContent({ projects, dict }: ProjectsContentProps) {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory>('Todas');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filtered =
        activeFilter === 'Todas' ? projects : projects.filter((p) => p.category === activeFilter);

    return (
        <>
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 mb-8">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveFilter(cat.id)}
                        className={cn(
                            'px-4 py-2 text-xs font-mono rounded-md border transition-all duration-200',
                            activeFilter === cat.id
                                ? 'border-[var(--accent-hex)] text-[var(--accent-hex)] bg-[var(--accent-glow)]'
                                : 'border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)] hover:border-[var(--accent-hex)]'
                        )}
                    >
                        {dict[cat.labelKey]}
                        <span className="ml-1.5 opacity-50">
                            ({cat.id === 'Todas' ? projects.length : projects.filter((p) => p.category === cat.id).length})
                        </span>
                    </button>
                ))}
            </div>

            {/* Projects grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFilter}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {filtered.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={i}
                            dict={dict}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* Project detail modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        dict={dict}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
