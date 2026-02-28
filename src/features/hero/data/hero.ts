export const personalInfo = {
    name: 'Santino Bondioni',
    firstName: 'Santino',
    title: 'Software Engineer & Backend Architect',
    roles: ['hero.roles.java', 'hero.roles.fullstack', 'hero.roles.backend', 'hero.roles.solver'],
    bio: ['about.bio.0', 'about.bio.1', 'about.bio.2'],
    location: 'Santa Fe, Argentina',
    email: 'santibon12345@gmail.com',
    phone: '+54 3446377968',
    resumeUrl: '/assets/cv-santino-bondioni.pdf',
    avatarUrl: null as string | null,
    initials: 'SB',
    socials: {
        github: 'https://github.com/eltino06',
        linkedin: 'https://www.linkedin.com/in/santino-bondioni-283a11305/',
        instagram: 'https://www.instagram.com/santinobondioni/',
    },
} as const;

export const stats = [
    { value: 1, suffix: '+', label: 'stats.exp' },
    { value: 5, suffix: '+', label: 'stats.projects' },
    { value: 20, suffix: '', label: 'stats.age' },
    { value: 70, suffix: '%', label: 'stats.career' },
] as const;
