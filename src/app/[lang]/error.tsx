'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, RefreshCcw, Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log to an error reporting service if available
        console.error('Unhandled RSC Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[hsl(var(--background))]">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full glass p-8 rounded-2xl border border-red-500/20 text-center space-y-6"
            >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-400/10 text-red-400 mb-2">
                    <AlertCircle size={32} />
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">Arquitectura Interrumpida</h2>
                    <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                        Se ha detectado una excepción no controlada en el flujo de ejecución.
                        Este error ha sido registrado para su análisis técnico.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                        onClick={() => reset()}
                        variant="primary"
                        className="flex-1 gap-2"
                    >
                        <RefreshCcw size={16} />
                        Reintentar
                    </Button>
                    <Link href="/" className="flex-1">
                        <Button variant="secondary" className="w-full gap-2">
                            <Home size={16} />
                            Inicio
                        </Button>
                    </Link>
                </div>

                <div className="pt-4">
                    <p className="text-[10px] font-code text-[hsl(var(--muted-foreground))] opacity-50">
                        Error ID: {error.digest || 'Internal_System_Failure'}
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
