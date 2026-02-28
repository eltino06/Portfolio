'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects, type Project, type ProjectCategory } from '@/lib/data';
import { cn } from '@/lib/utils';

// Project soft cream background (balanced for legibility)
const cardBg = 'bg-[#FFF9E6]/45 backdrop-blur-sm';

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
    const { t } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Prevent background scrolling while modal is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    if (!mounted) return null;

    return createPortal(
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <motion.div
                className="relative w-full max-w-4xl glass rounded-2xl border border-[hsl(var(--border))] shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-full"
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                {/* Image header - Move to left side for desktop */}
                <div className={cn('h-32 md:h-auto md:w-1/3 flex flex-col items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-[hsl(var(--border))]', cardBg)}>
                    <span className="text-[var(--accent-hex)] text-5xl md:text-7xl font-bold opacity-60 mb-2">
                        {project.title.charAt(0)}
                    </span>
                    <Badge variant="accent" className="hidden md:flex">{t(`projects.${project.category.toLowerCase()}`)}</Badge>
                </div>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-8 h-8 rounded-full bg-[hsl(var(--muted))] flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent-opacity))] transition-colors"
                    aria-label="Close"
                >
                    <X size={16} />
                </button>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 overflow-y-auto custom-scrollbar flex flex-col gap-6">
                    <div className="space-y-1 pr-8">
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight">{t(`projects.items.${project.translationKey}.title`)}</h3>
                        <p className="text-[hsl(var(--muted-foreground))] text-sm">
                            {t(`projects.items.${project.translationKey}.desc`)}
                        </p>
                        <Badge variant="accent" className="md:hidden mt-3">{t(`projects.${project.category.toLowerCase()}`)}</Badge>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                        <div className="space-y-2">
                            <h4 className="text-[11px] font-semibold tracking-wider text-[hsl(var(--foreground))] uppercase flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-hex)]" />
                                {t('projects.caseStudy.context')}
                            </h4>
                            <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed pl-3.5 border-l border-[hsl(var(--border))]">
                                {t(`projects.items.${project.translationKey}.context`)}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-[11px] font-semibold tracking-wider text-[hsl(var(--foreground))] uppercase flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                {t('projects.caseStudy.challenge')}
                            </h4>
                            <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed pl-3.5 border-l border-[hsl(var(--border))]">
                                {t(`projects.items.${project.translationKey}.challenge`)}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-[11px] font-semibold tracking-wider text-[hsl(var(--foreground))] uppercase flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                {t('projects.caseStudy.solution')}
                            </h4>
                            <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed pl-3.5 border-l border-[hsl(var(--border))]">
                                {t(`projects.items.${project.translationKey}.solution`)}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-[11px] font-semibold tracking-wider text-[hsl(var(--foreground))] uppercase flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                {t('projects.caseStudy.impact')}
                            </h4>
                            <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed pl-3.5 border-l border-[hsl(var(--border))]">
                                {t(`projects.items.${project.translationKey}.impact`)}
                            </p>
                        </div>
                    </div>

                    <div className="pt-2">
                        <h4 className="text-[10px] font-bold tracking-widest text-[hsl(var(--muted-foreground))] uppercase mb-3">
                            {t('projects.caseStudy.stack')}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                            {project.stack.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4 mt-auto border-t border-[hsl(var(--border))]">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                                <Button variant="secondary" className="w-full gap-2 py-5">
                                    <Github size={16} />
                                    {t('projects.viewGithub')}
                                </Button>
                            </a>
                        )}
                        {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                                <Button variant="primary" className="w-full gap-2 py-5 border border-transparent hover:border-[var(--accent-hex)] transition-colors">
                                    <ExternalLink size={16} />
                                    {t('projects.viewLive')}
                                </Button>
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>,
        document.body
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
    const { t } = useLanguage();

    return (
        <motion.article
            className="group relative glass rounded-2xl border border-[hsl(var(--border))] overflow-hidden hover:border-[var(--accent-hex)] hover:shadow-[0_0_30px_var(--accent-glow)] transition-colors duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            onClick={onClick}
        >
            {/* Image / header */}
            <div className={cn('relative h-44 overflow-hidden', cardBg)}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[var(--accent-hex)] text-6xl font-bold opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                        {project.title.charAt(0)}
                    </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <div className="relative glass px-4 py-2 rounded-xl text-white text-sm font-medium border border-white/20 overflow-hidden group/btn">
                        {t('projects.details')}
                        {/* Interactive subtle reflection - constant loop */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-loop bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
                    </div>
                </div>

                {project.featured && (
                    <div className="absolute top-3 left-3">
                        <Badge variant="accent" className="text-xs">⭐ {t('projects.featured')}</Badge>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-base group-hover:text-[var(--accent-hex)] transition-colors duration-200">
                        {t(`projects.items.${project.translationKey}.title`)}
                    </h3>
                    <Badge variant="muted" className="shrink-0 text-xs">{t(`projects.${project.category.toLowerCase()}`)}</Badge>
                </div>

                <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed line-clamp-2">
                    {t(`projects.items.${project.translationKey}.desc`)}
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
                            {t('projects.viewGithub')}
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)] transition-colors duration-200"
                            aria-label={`Demo en vivo de ${t(`projects.items.${project.translationKey}.title`)}`}
                        >
                            <ExternalLink size={13} />
                            {t('projects.viewLive')}
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}

const CATEGORIES: ProjectCategory[] = ['Todas', 'Frontend', 'Backend', 'FullStack'];

import { useLanguage } from '@/context/LanguageContext';

export function ProjectsSection() {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState<ProjectCategory>('Todas');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filtered =
        activeFilter === 'Todas' ? projects : projects.filter((p) => p.category === activeFilter);

    const translatedCategories = [
        { id: 'Todas', label: t('projects.all') },
        { id: 'Frontend', label: t('projects.frontend') },
        { id: 'Backend', label: t('projects.backend') },
        { id: 'FullStack', label: t('projects.fullstack') },
    ];

    return (
        <>
            <Section id="projects" alternate>
                <SectionHeading
                    label={t('projects.title')}
                    title={t('projects.subtitle')}
                    subtitle={t('projects.description')}
                />

                {/* Filter buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {translatedCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveFilter(cat.id as ProjectCategory)}
                            className={cn(
                                'px-5 py-2 rounded-xl text-sm font-medium border transition-all duration-200',
                                activeFilter === cat.id
                                    ? 'bg-[var(--accent-hex)] text-[var(--accent-fg)] font-bold border-transparent shadow-[0_0_20px_var(--accent-glow)]'
                                    : 'bg-[hsl(var(--muted)/0.5)] border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:border-[hsl(var(--border))]'
                            )}
                        >
                            {cat.label}
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
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </Section>

            {/* Project detail modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </>
    );
}
