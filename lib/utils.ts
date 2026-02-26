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
