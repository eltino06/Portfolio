'use client';

import { motion } from 'framer-motion';
import { Database, Server, Smartphone, ShieldCheck, Zap } from 'lucide-react';

interface ArchitectureDiagramProps {
    type: 'fullstack' | 'backend' | 'frontend';
}

export function ArchitectureDiagram({ type }: ArchitectureDiagramProps) {
    return (
        <div className="relative w-full h-full bg-[#050508] overflow-hidden flex items-center justify-center p-6 select-none">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90(#4f46e5 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                }}
            />

            {/* Scanning Line Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-hex)]/10 to-transparent h-1/2 w-full"
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />

            <div className="relative flex items-center gap-12 z-10">
                {/* Client / UI Node */}
                {(type === 'fullstack' || type === 'frontend') && (
                    <Node icon={<Smartphone size={18} />} label="CLIENT / UI" sub="REACT / NEXT" />
                )}

                {/* Data Flow Line 1 */}
                {(type === 'fullstack' || type === 'frontend') && <FlowLine active />}

                {/* API / Server Node */}
                <Node
                    icon={type === 'frontend' ? <Zap size={18} /> : <Server size={18} />}
                    label={type === 'frontend' ? "VITE / SSG" : "REST API"}
                    sub={type === 'frontend' ? "CDN EDGE" : "SPRING BOOT"}
                    highlight
                />

                {/* Data Flow Line 2 */}
                {(type === 'fullstack' || type === 'backend') && <FlowLine active />}

                {/* Database Node */}
                {(type === 'fullstack' || type === 'backend') && (
                    <Node icon={<Database size={18} />} label="PERSISTENCE" sub="POSTGRESQL" />
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
            className={`flex flex-col items-center gap-2`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${highlight ? 'bg-[var(--accent-hex)]/20 border-[var(--accent-hex)] shadow-[0_0_15px_var(--accent-glow)]' : 'bg-white/5 border-white/10'}`}>
                {icon}
            </div>
            <div className="flex flex-col items-center">
                <span className="text-[9px] font-bold tracking-tighter text-white/90">{label}</span>
                <span className="text-[7px] font-mono text-[var(--accent-hex)] opacity-70 uppercase tracking-widest">{sub}</span>
            </div>
        </motion.div>
    );
}

function FlowLine({ active }: { active?: boolean }) {
    return (
        <div className="relative w-8 h-[2px] bg-white/10 overflow-hidden">
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
