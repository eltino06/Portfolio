'use client';

import { motion } from 'framer-motion';

export function ProgressBar({ progress }: { progress: number }) {
    return (
        <motion.div
            className="h-full bg-gradient-to-r from-[var(--accent-hex)] to-purple-500 rounded-full shadow-[0_0_8px_var(--accent-glow)]"
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
        />
    );
}
