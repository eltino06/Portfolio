'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

interface ClientLayoutProps {
    children: React.ReactNode;
    lang: string;
}

// Global variable preserved only within the active JavaScript context.
// Resets unconditionally on F5 (hard reload), but remains preserved on Next.js soft navigation (router.push)
let isFirstVisit = true;

export function ClientLayout({ children, lang }: ClientLayoutProps) {
    // Both Server and initial Client hydrate with `isFirstVisit = true` avoiding mismatch.
    // If the component remounts purely on client via Language change, it initializes to false.
    const [isLoading, setIsLoading] = useState(isFirstVisit);

    useEffect(() => {
        if (isFirstVisit) {
            window.history.scrollRestoration = 'manual';
            window.scrollTo(0, 0);
            isFirstVisit = false;
        }
    }, [lang]);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <LoadingScreen onLoadingComplete={handleLoadingComplete} />
                )}
            </AnimatePresence>

            <motion.div
                key={lang}
                className="overflow-x-hidden w-full relative"
                initial={{ opacity: 0, scale: 0.99, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.01, filter: 'blur(4px)' }}
                transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                {children}
            </motion.div>
        </>
    );
}
