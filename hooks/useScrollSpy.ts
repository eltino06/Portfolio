'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to track which section is currently visible.
 * Used by Navbar to highlight the active nav link.
 */
export function useScrollSpy(sectionIds: string[], offset: number = 100): string {
    const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? '');

    useEffect(() => {
        const handler = (): void => {
            const scrollPos = window.scrollY + offset;

            for (const id of [...sectionIds].reverse()) {
                const el = document.getElementById(id.replace('#', ''));
                if (el && el.offsetTop <= scrollPos) {
                    setActiveSection(id);
                    return;
                }
            }

            setActiveSection(sectionIds[0] ?? '');
        };

        window.addEventListener('scroll', handler, { passive: true });
        handler();
        return () => window.removeEventListener('scroll', handler);
    }, [sectionIds, offset]);

    return activeSection;
}
