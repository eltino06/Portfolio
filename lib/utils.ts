import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes safely (handles conflicts)
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

/**
 * Stagger delay for Framer Motion animations
 */
export function staggerDelay(index: number, base: number = 0.1): number {
    return index * base;
}

/**
 * Clamp a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

/**
 * Generate a range array [0, 1, 2, ..., n-1]
 */
export function range(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
}

/**
 * Custom smooth scroll with relaxing cubic easing
 */
export function smoothScrollTo(targetId: string, duration: number = 1200): void {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const startPosition = window.scrollY;
    // Calculate target position, accounting for globals.css scroll-padding-top (80px) check
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = targetPosition - 80;

    const distance = offsetPosition - startPosition;
    let startTime: number | null = null;

    // easeInOutCubic curve for a very fluid, relaxed motion
    const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
    };

    const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;

        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        } else {
            // Snap to exact position at the very end to avoid sub-pixel precision issues
            window.scrollTo(0, offsetPosition);
        }
    };

    requestAnimationFrame(animation);
}
