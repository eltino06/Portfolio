'use client';

import { motion } from 'framer-motion';

export function ProgressBar({ progress }: { progress: number }) {
    return (
        <motion.div
            className="h-full bg-gradient-to-r from-gray-300 via-gray-500 to-black dark:from-gray-800 dark:via-gray-400 dark:to-white rounded-full shadow-[0_0_8px_var(--accent-glow)]"
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
        />
    );
}
