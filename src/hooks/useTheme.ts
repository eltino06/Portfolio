'use client';

import { useTheme as useNextTheme } from 'next-themes';

/**
 * Thin wrapper around next-themes useTheme.
 * Returns theme, resolved theme, and setTheme.
 */
export function useTheme() {
    const { theme, resolvedTheme, setTheme } = useNextTheme();

    const isDark = resolvedTheme === 'dark';

    const toggleTheme = (): void => {
        setTheme(isDark ? 'light' : 'dark');
    };

    return { theme, resolvedTheme, setTheme, isDark, toggleTheme };
}
