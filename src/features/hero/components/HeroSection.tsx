import { personalInfo, stats } from '../data/hero';
import { HeroContent } from './HeroContent';

interface HeroSectionProps {
    dict: any;
    statsDict: any;
}

export function HeroSection({ dict, statsDict }: HeroSectionProps) {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
        >
            <HeroContent
                personalInfo={personalInfo}
                stats={stats}
                dict={dict}
                statsDict={statsDict}
            />
        </section >
    );
}
