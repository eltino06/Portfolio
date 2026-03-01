'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { type Project } from '../data/projects';

const cardBg = 'bg-[#FFF9E6]/45 backdrop-blur-sm';

interface ProjectModalProps {
    project: Project;
    dict: any;
    onClose: () => void;
}

export function ProjectModal({ project, dict, onClose }: ProjectModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
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
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            <motion.div
                className="relative w-full max-w-4xl glass rounded-2xl border border-[hsl(var(--border))] shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-full"
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                <div className={cn('h-32 md:h-auto md:w-1/3 flex flex-col items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-[hsl(var(--border))]', cardBg)}>
                    <span className="text-[var(--accent-hex)] text-5xl md:text-7xl font-bold opacity-60 mb-2">
                        {project.title.charAt(0)}
                    </span>
                    <Badge variant="accent" className="hidden md:flex">{dict[project.category.toLowerCase()]}</Badge>
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-8 h-8 rounded-full bg-[hsl(var(--muted))] flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent-opacity))] transition-colors"
                >
                    <X size={16} />
                </button>

                <div className="flex-1 p-6 md:p-8 overflow-y-auto custom-scrollbar flex flex-col gap-6">
                    <div className="space-y-1 pr-8">
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight">{dict.items[project.translationKey].title}</h3>
                        <p className="text-[hsl(var(--muted-foreground))] text-base">
                            {dict.items[project.translationKey].desc}
                        </p>
                        <Badge variant="accent" className="md:hidden mt-3">{dict[project.category.toLowerCase()]}</Badge>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                        <div className="space-y-2">
                            <h4 className="text-[11px] font-semibold tracking-wider text-[hsl(var(--foreground))] uppercase flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-hex)]" />
                                {dict.caseStudy.context}
                            </h4>
                            <p className="text-[hsl(var(--muted-foreground))] text-base leading-relaxed pl-3.5 border-l border-[hsl(var(--border))]">
                                {dict.items[project.translationKey].context}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-[11px] font-semibold tracking-wider text-[hsl(var(--foreground))] uppercase flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                {dict.caseStudy.challenge}
                            </h4>
                            <p className="text-[hsl(var(--muted-foreground))] text-base leading-relaxed pl-3.5 border-l border-[hsl(var(--border))]">
                                {dict.items[project.translationKey].challenge}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-[11px] font-semibold tracking-wider text-[hsl(var(--foreground))] uppercase flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                {dict.caseStudy.solution}
                            </h4>
                            <p className="text-[hsl(var(--muted-foreground))] text-base leading-relaxed pl-3.5 border-l border-[hsl(var(--border))]">
                                {dict.items[project.translationKey].solution}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-[11px] font-semibold tracking-wider text-[hsl(var(--foreground))] uppercase flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                {dict.caseStudy.impact}
                            </h4>
                            <p className="text-[hsl(var(--muted-foreground))] text-base leading-relaxed pl-3.5 border-l border-[hsl(var(--border))]">
                                {dict.items[project.translationKey].impact}
                            </p>
                        </div>
                    </div>

                    <div className="pt-2">
                        <h4 className="text-[10px] font-bold tracking-widest text-[hsl(var(--muted-foreground))] uppercase mb-3">
                            {dict.caseStudy.stack}
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
                                    {dict.viewGithub}
                                </Button>
                            </a>
                        )}
                        {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                                <Button variant="primary" className="w-full gap-2 py-5 border border-transparent hover:border-[var(--accent-hex)] transition-colors">
                                    <ExternalLink size={16} />
                                    {dict.viewLive}
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
