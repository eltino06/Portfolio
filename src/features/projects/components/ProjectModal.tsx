'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import { type Project } from '../data/projects';

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

    const caseStudySections = [
        { key: 'context', label: dict.caseStudy.context },
        { key: 'challenge', label: dict.caseStudy.challenge },
        { key: 'solution', label: dict.caseStudy.solution },
        { key: 'impact', label: dict.caseStudy.impact },
    ];

    return createPortal(
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div
                className="absolute inset-0 bg-[hsl(var(--background)/0.85)] backdrop-blur-md"
                onClick={onClose}
            />

            <motion.div
                className="relative w-full max-w-3xl bg-[hsl(var(--card))] rounded-md border border-[hsl(var(--border))] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                initial={{ scale: 0.97, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.97, y: 20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                {/* Header */}
                <div className="flex items-start justify-between p-6 pb-4 border-b border-[hsl(var(--border))]">
                    <div className="pr-8">
                        <span className="text-[10px] font-mono text-[var(--accent-hex)] uppercase tracking-widest">{dict[project.category.toLowerCase()]}</span>
                        <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mt-1">{dict.items[project.translationKey].title}</h3>
                        <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">
                            {dict.items[project.translationKey].desc}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-md flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] transition-colors shrink-0"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {caseStudySections.map((section) => (
                            <div key={section.key} className="space-y-2">
                                <h4 className="text-[10px] font-mono font-semibold tracking-widest text-[var(--accent-hex)] uppercase">
                                    {section.label}
                                </h4>
                                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed pl-3 border-l-2 border-[hsl(var(--border))]">
                                    {dict.items[project.translationKey][section.key]}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Stack */}
                    <div>
                        <h4 className="text-[10px] font-mono font-semibold tracking-widest text-[var(--accent-hex)] uppercase mb-3">
                            {dict.caseStudy.stack}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <span key={tech} className="text-xs font-mono text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))] px-2.5 py-1 rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex gap-3 p-6 pt-4 border-t border-[hsl(var(--border))]">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-md border border-[hsl(var(--border))] text-sm font-mono text-[hsl(var(--foreground))] hover:border-[var(--accent-hex)] hover:text-[var(--accent-hex)] transition-colors"
                        >
                            <Github size={16} />
                            {dict.viewGithub}
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-md border border-[var(--accent-hex)] text-sm font-mono text-[var(--accent-hex)] hover:bg-[var(--accent-glow)] transition-colors"
                        >
                            <ExternalLink size={16} />
                            {dict.viewLive}
                        </a>
                    )}
                </div>
            </motion.div>
        </motion.div>,
        document.body
    );
}
