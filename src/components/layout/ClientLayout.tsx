'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

interface ClientLayoutProps {
    children: React.ReactNode;
    lang: string;
}

export function ClientLayout({ children, lang }: ClientLayoutProps) {
    const [isLoading, setIsLoading] = useState(() => {
        if (typeof window !== 'undefined') {
            return !sessionStorage.getItem('has-loaded');
        }
        return true;
    });

    const handleLoadingComplete = () => {
        setIsLoading(false);
        sessionStorage.setItem('has-loaded', 'true');
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
