'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects, type Project, type ProjectCategory } from '@/lib/data';
import { cn } from '@/lib/utils';

// Project gradient placeholders by index
const gradients = [
    'from-violet-600 to-indigo-600',
    'from-cyan-500 to-blue-600',
    'from-pink-500 to-rose-600',
    'from-amber-500 to-orange-600',
    'from-emerald-500 to-teal-600',
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <motion.div
                className="relative w-full max-w-2xl glass rounded-2xl border border-[hsl(var(--border))] overflow-hidden shadow-2xl"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                {/* Image header */}
                <div className={cn('h-48 bg-gradient-to-br flex items-center justify-center', gradients[0])}>
                    <span className="text-white text-5xl font-bold opacity-20">
                        {project.title.charAt(0)}
                    </span>
                </div>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                    aria-label="Close"
                >
                    <X size={16} />
                </button>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <Badge variant="accent">{project.category}</Badge>
                    </div>

                    <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                        {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                            <Badge key={tech} variant="outline">
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary" size="sm" className="gap-2">
                                    <Github size={15} />
                                    GitHub
                                </Button>
                            </a>
                        )}
                        {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <Button variant="primary" size="sm" className="gap-2">
                                    <ExternalLink size={15} />
                                    Demo en Vivo
                                </Button>
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function ProjectCard({
    project,
    index,
    onClick,
}: {
    project: Project;
    index: number;
    onClick: () => void;
}) {
    const gradient = gradients[index % gradients.length];

    return (
        <motion.article
            className="group relative glass rounded-2xl border border-[hsl(var(--border))] overflow-hidden hover:border-[var(--accent-hex)] hover:shadow-[0_0_30px_var(--accent-glow)] transition-colors duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            onClick={onClick}
        >
            {/* Image / gradient header */}
            <div className={cn('relative h-44 bg-gradient-to-br overflow-hidden', gradient)}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                        {project.title.charAt(0)}
                    </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <div className="glass px-4 py-2 rounded-xl text-white text-sm font-medium border border-white/20">
                        Ver Detalles
                    </div>
                </div>

                {project.featured && (
                    <div className="absolute top-3 left-3">
                        <Badge variant="accent" className="text-xs">⭐ Destacado</Badge>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-base group-hover:text-[var(--accent-hex)] transition-colors duration-200">
                        {project.title}
                    </h3>
                    <Badge variant="muted" className="shrink-0 text-xs">{project.category}</Badge>
                </div>

                <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed line-clamp-2">
                    {project.description}
                </p>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                        </Badge>
                    ))}
                    {project.stack.length > 4 && (
                        <Badge variant="muted" className="text-xs">+{project.stack.length - 4}</Badge>
                    )}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-1" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)] transition-colors duration-200"
                            aria-label={`GitHub de ${project.title}`}
                        >
                            <Github size={13} />
                            Código
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)] transition-colors duration-200"
                            aria-label={`Demo en vivo de ${project.title}`}
                        >
                            <ExternalLink size={13} />
                            En Vivo
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}

const CATEGORIES: ProjectCategory[] = ['Todas', 'Frontend', 'Backend', 'FullStack'];

export function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory>('Todas');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filtered =
        activeFilter === 'Todas' ? projects : projects.filter((p) => p.category === activeFilter);

    return (
        <Section id="projects" alternate>
            <SectionHeading
                label="Proyectos"
                title="Cosas que he Construido"
                subtitle="Una selección de proyectos que muestran mis habilidades en todo el stack."
            />

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={cn(
                            'px-5 py-2 rounded-xl text-sm font-medium border transition-all duration-200',
                            activeFilter === cat
                                ? 'bg-[var(--accent-hex)] text-white border-transparent shadow-[0_0_20px_var(--accent-glow)]'
                                : 'glass border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:border-[var(--accent-hex)] hover:text-[hsl(var(--foreground))]'
                        )}
                    >
                        {cat}
                        <span className="ml-1.5 text-xs opacity-60">
                            ({cat === 'Todas' ? projects.length : projects.filter((p) => p.category === cat).length})
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
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* Project detail modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </Section>
    );
}
