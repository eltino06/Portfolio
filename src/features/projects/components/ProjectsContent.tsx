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
            <div className="flex flex-wrap justify-center gap-2 mb-10">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveFilter(cat.id)}
                        className={cn(
                            'px-5 py-2 rounded-xl text-sm font-medium border transition-all duration-200',
                            activeFilter === cat.id
                                ? 'bg-[var(--accent-hex)] text-[var(--accent-fg)] font-bold border-transparent shadow-[0_0_20px_var(--accent-glow)]'
                                : 'bg-[hsl(var(--muted)/0.5)] border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:border-[hsl(var(--border))]'
                        )}
                    >
                        {dict[cat.labelKey]}
                        <span className="ml-1.5 text-xs opacity-60">
                            ({cat.id === 'Todas' ? projects.length : projects.filter((p) => p.category === cat.id).length})
                        </span>
                    </button>
                ))}
            </div>

            {/* Projects grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFilter}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
