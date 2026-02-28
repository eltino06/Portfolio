'use client';

import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(var(--background))]">
            <div className="relative flex flex-col items-center gap-8">
                {/* Minimalist Staff-level Loader */}
                <div className="relative w-24 h-24">
                    <motion.div
                        className="absolute inset-0 border-2 border-[var(--accent-hex)] opacity-20 rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.1, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute inset-0 border-t-2 border-[var(--accent-hex)] rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center gap-1"
                >
                    <span className="text-xs font-code tracking-[0.3em] uppercase text-[hsl(var(--muted-foreground))]">
                        Loading
                    </span>
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[var(--accent-hex)] to-transparent" />
                </motion.div>
            </div>
        </div>
    );
}
