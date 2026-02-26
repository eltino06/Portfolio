'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/lib/data';

export function ExperienceSection() {
    return (
        <Section id="experience">
            <SectionHeading
                label="Experiencia"
                title="Historial Laboral"
                subtitle="Mi trayectoria profesional y el impacto que he tenido en el camino."
            />

            <div className="relative max-w-3xl mx-auto">
                {/* Vertical line */}
                <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent-hex)] via-[hsl(var(--border))] to-transparent" />

                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        className="relative pl-12 lg:pl-20 pb-12 last:pb-0"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-1.5 lg:left-5.5 top-6 w-5 h-5 rounded-full bg-[var(--accent-hex)] shadow-[0_0_16px_var(--accent-glow)] flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white" />
                        </div>

                        {/* Card */}
                        <motion.div
                            className="glass rounded-2xl border border-[hsl(var(--border))] p-6 hover:border-[var(--accent-hex)] hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] transition-all duration-300"
                            whileHover={{ x: 4 }}
                        >
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                <div>
                                    <h3 className="text-lg font-bold">{exp.role}</h3>
                                    <p className="text-[var(--accent-hex)] font-semibold text-sm">{exp.company}</p>
                                </div>

                                <div className="flex flex-col gap-1.5 text-xs text-[hsl(var(--muted-foreground))] shrink-0">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={12} />
                                        {exp.startDate} — {exp.endDate}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <MapPin size={12} />
                                        {exp.location}
                                    </span>
                                    {exp.endDate === 'Actualidad' && (
                                        <Badge variant="accent" className="w-fit text-xs">Actual</Badge>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                                {exp.description}
                            </p>

                            {/* Achievements */}
                            <ul className="space-y-2 mb-4">
                                {exp.achievements.map((achievement, j) => (
                                    <motion.li
                                        key={j}
                                        className="flex items-start gap-2.5 text-sm"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: j * 0.08 }}
                                    >
                                        <CheckCircle
                                            size={15}
                                            className="text-[var(--accent-hex)] shrink-0 mt-0.5"
                                        />
                                        <span className="text-[hsl(var(--muted-foreground))]">{achievement}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-1.5">
                                {exp.technologies.map((tech) => (
                                    <Badge key={tech} variant="outline" className="text-xs">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
