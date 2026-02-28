'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

interface ClientLayoutProps {
    children: React.ReactNode;
    lang: string;
}

let isInitialLoad = typeof window !== 'undefined';

export function ClientLayout({ children, lang }: ClientLayoutProps) {
    const [isLoading, setIsLoading] = useState(isInitialLoad);

    useEffect(() => {
        if (!isInitialLoad) {
            setIsLoading(false);
        }
    }, [lang]);

    const handleLoadingComplete = () => {
        setIsLoading(false);
        isInitialLoad = false;
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
