'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

interface ClientLayoutProps {
    children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.98,
                    filter: 'blur(10px)',
                    y: 10
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0px)',
                    y: 0
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1
                }}
            >
                {children}
            </motion.div>
        </>
    );
}
