'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to track which section is currently visible.
 * Used by Navbar to highlight the active nav link.
 */
export function useScrollSpy(sectionIds: string[], offset: number = 100): string {
    const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? '');

    // Stabilize dependency to avoid infinite resets
    const stableIds = sectionIds.join(',');

    useEffect(() => {
        let ticking = false;

        const handler = (): void => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // Using the offset parameter (default 100px down from top) instead of the middle of the screen
                    const scrollPos = window.scrollY + offset;

                    // If exactly at the top, default to first section to avoid hydration height bugs
                    if (window.scrollY === 0) {
                        setActiveSection(sectionIds[0] ?? '');
                        ticking = false;
                        return;
                    }

                    // Check if we reached the absolute bottom of the page
                    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
                        setActiveSection(sectionIds[sectionIds.length - 1] ?? '');
                        ticking = false;
                        return;
                    }

                    let foundSection = sectionIds[0] ?? '';
                    for (const id of [...sectionIds].reverse()) {
                        const el = document.getElementById(id.replace('#', ''));
                        if (el) {
                            // DOM read operation (now safe because of rAF)
                            const topPos = el.getBoundingClientRect().top + window.scrollY;
                            if (topPos <= scrollPos) {
                                foundSection = id;
                                break;
                            }
                        }
                    }

                    setActiveSection(foundSection);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handler, { passive: true });
        handler(); // init call
        return () => window.removeEventListener('scroll', handler);
    }, [stableIds]);

    return activeSection;
}
