'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

interface ClientLayoutProps {
    children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />

            <AnimatePresence>
                {!isLoading && (
                    <>
                        <Navbar />
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.95,
                                filter: 'blur(20px)',
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                filter: 'blur(0px)',
                                y: 0
                            }}
                            transition={{
                                duration: 1.5,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.2 // Small gap for the splash exit to breathe
                            }}
                        >
                            {children}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
