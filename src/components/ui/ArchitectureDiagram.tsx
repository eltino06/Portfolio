'use client';

import { motion } from 'framer-motion';
import { Database, Server, Smartphone, ShieldCheck, Zap } from 'lucide-react';

interface ArchitectureDiagramProps {
    type: 'fullstack' | 'backend' | 'frontend';
}

export function ArchitectureDiagram({ type }: ArchitectureDiagramProps) {
    return (
        <div className="relative w-full h-full bg-[hsl(var(--muted)/0.5)] dark:bg-[#050508] text-foreground overflow-hidden flex items-center justify-center p-3 sm:p-6 select-none">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.05] dark:opacity-10"
                style={{
                    backgroundImage: `linear-gradient(var(--accent-hex) 1px, transparent 1px), linear-gradient(90deg, var(--accent-hex) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                }}
            />

            {/* Scanning Line Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-hex)]/10 to-transparent h-1/2 w-full"
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />

            <div className="relative flex items-center gap-3 xs:gap-8 sm:gap-12 z-10 scale-[0.9] xs:scale-100 transition-transform duration-300">
                {/* Client / UI Node */}
                {(type === 'fullstack' || type === 'frontend') && (
                    <Node icon={<Smartphone className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-[18px] sm:h-[18px]" />} label="CLIENT / UI" sub="REACT / NEXT" />
                )}

                {/* Data Flow Line 1 */}
                {(type === 'fullstack' || type === 'frontend') && <FlowLine active />}

                {/* API / Server Node */}
                <Node
                    icon={type === 'frontend' ? <Zap className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-[18px] sm:h-[18px]" /> : <Server className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-[18px] sm:h-[18px]" />}
                    label={type === 'frontend' ? "VITE / SSG" : "REST API"}
                    sub={type === 'frontend' ? "CDN EDGE" : "SPRING BOOT"}
                    highlight
                />

                {/* Data Flow Line 2 */}
                {(type === 'fullstack' || type === 'backend') && <FlowLine active />}

                {/* Database Node */}
                {(type === 'fullstack' || type === 'backend') && (
                    <Node icon={<Database className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-[18px] sm:h-[18px]" />} label="PERSISTENCE" sub="POSTGRESQL" />
                )}
            </div>

            {/* Technical Labels */}
            <div className="absolute bottom-3 left-4 flex gap-4 opacity-40">
                <span className="text-[8px] font-mono uppercase tracking-widest text-[var(--accent-hex)] flex items-center gap-1">
                    <ShieldCheck size={8} /> AUTH: JWT/RBAC
                </span>
                <span className="text-[8px] font-mono uppercase tracking-widest text-[var(--accent-hex)] flex items-center gap-1">
                    <Zap size={8} /> 0% DOWNTIME
                </span>
            </div>
        </div>
    );
}

function Node({ icon, label, sub, highlight }: { icon: React.ReactNode, label: string, sub: string, highlight?: boolean }) {
    return (
        <motion.div
            className={`flex flex-col items-center gap-1.5 sm:gap-2`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <div className={`w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center border transition-colors ${highlight ? 'bg-[var(--accent-hex)]/20 border-[var(--accent-hex)] shadow-[0_0_15px_var(--accent-glow)]' : 'bg-foreground/5 border-foreground/10'}`}>
                {icon}
            </div>
            <div className="flex flex-col items-center">
                <span className="text-[7px] xs:text-[8px] sm:text-[9px] font-bold tracking-tighter text-foreground/90 whitespace-nowrap">{label}</span>
                <span className="text-[5px] xs:text-[6px] sm:text-[7px] font-mono text-[var(--accent-hex)] opacity-70 uppercase tracking-widest">{sub}</span>
            </div>
        </motion.div>
    );
}

function FlowLine({ active }: { active?: boolean }) {
    return (
        <div className="relative w-4 xs:w-6 sm:w-8 h-[2px] bg-foreground/10 overflow-hidden shrink-0">
            {active && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent-hex)] to-transparent w-4 h-full"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
            )}
        </div>
    );
}
