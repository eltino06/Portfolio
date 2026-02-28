import { useEffect, useState } from 'react';

export function useTypewriter(words: readonly string[], speed = 100, pause = 2000) {
    const [displayed, setDisplayed] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                const nextDisplayed = currentWord.slice(0, displayed.length + 1);
                setDisplayed(nextDisplayed);
                if (nextDisplayed.length === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), pause);
                }
            } else {
                const nextDisplayed = currentWord.slice(0, displayed.length - 1);
                setDisplayed(nextDisplayed);
                if (nextDisplayed.length === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => prev + 1);
                }
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, wordIndex, words, speed, pause]);

    return displayed;
}
