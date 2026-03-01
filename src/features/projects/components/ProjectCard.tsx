'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { type Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
    index: number;
    dict: any;
    onClick: () => void;
}

export function ProjectCard({ project, index, dict, onClick }: ProjectCardProps) {
    return (
        <motion.article
            className="group relative h-full flex flex-col p-6 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[var(--accent-hex)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            onClick={onClick}
        >
            {/* Header row */}
            <div className="flex items-center justify-between mb-6">
                <Folder size={36} className="text-[var(--accent-hex)]" />
                <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)] transition-colors"
                            aria-label={dict.viewGithub}
                        >
                            <Github size={18} />
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)] transition-colors"
                            aria-label={dict.viewLive}
                        >
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-[hsl(var(--foreground))] group-hover:text-[var(--accent-hex)] transition-colors mb-2">
                {dict.items[project.translationKey].title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed line-clamp-3 flex-1 mb-5">
                {dict.items[project.translationKey].desc}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-auto pt-3 border-t border-[hsl(var(--border))]">
                {project.stack.slice(0, 5).map((tech) => (
                    <span key={tech} className="text-[11px] font-mono text-[hsl(var(--muted-foreground))]">
                        {tech}
                    </span>
                ))}
            </div>
        </motion.article>
    );
}
