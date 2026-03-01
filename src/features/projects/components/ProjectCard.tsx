'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import { ArchitectureDiagram } from '@/components/ui/ArchitectureDiagram';
import { type Project } from '../data/projects';

const cardBg = 'bg-[hsl(var(--muted)/0.3)] dark:bg-[#050508]';

interface ProjectCardProps {
    project: Project;
    index: number;
    dict: any;
    onClick: () => void;
}

export function ProjectCard({ project, index, dict, onClick }: ProjectCardProps) {
    return (
        <motion.article
            className="group relative h-full flex flex-col glass rounded-2xl border border-[hsl(var(--border))] overflow-hidden hover:border-[var(--accent-hex)] hover:shadow-[0_0_30px_var(--accent-glow)] transition-colors duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            onClick={onClick}
        >
            <div className={cn('relative h-44 shrink-0 overflow-hidden border-b border-[hsl(var(--border))] group-hover:border-[var(--accent-hex)]/30 transition-colors duration-300', cardBg)}>
                <ArchitectureDiagram type={project.category.toLowerCase() as any} />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <div className="relative bg-[var(--accent-hex)] px-5 py-2.5 rounded-xl text-[var(--accent-fg)] text-xs font-black border border-[var(--accent-hex)] shadow-[0_0_20px_var(--accent-glow)] overflow-hidden group/btn uppercase tracking-widest">
                        {dict.details}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-loop bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                    </div>
                </div>

                {project.featured && (
                    <div className="absolute top-3 left-3">
                        <Badge variant="accent" className="text-xs">⭐ {dict.featured}</Badge>
                    </div>
                )}
            </div>

            <div className="p-5 flex flex-col flex-1 gap-3">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-base group-hover:text-[var(--accent-hex)] transition-colors duration-200">
                        {dict.items[project.translationKey].title}
                    </h3>
                    <Badge variant="muted" className="shrink-0 text-xs">{dict[project.category.toLowerCase()]}</Badge>
                </div>

                <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed line-clamp-2">
                    {dict.items[project.translationKey].desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {project.stack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                        </Badge>
                    ))}
                    {project.stack.length > 4 && (
                        <Badge variant="muted" className="text-xs">+{project.stack.length - 4}</Badge>
                    )}
                </div>

                <div className="flex gap-2 pt-3 border-t border-[hsl(var(--border))/50] mt-1" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)] transition-colors duration-200"
                        >
                            <Github size={13} />
                            {dict.viewGithub}
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))] hover:text-[var(--accent-hex)] transition-colors duration-200"
                        >
                            <ExternalLink size={13} />
                            {dict.viewLive}
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}
