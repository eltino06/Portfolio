export interface Experience {
    id: string;
    translationKey: string;
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
    achievements: string[];
    logo?: string;
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        id: 'freelance-fullstack',
        translationKey: 'freelance',
        company: 'Proyectos Independientes',
        role: 'Desarrollador Full Stack',
        startDate: '2024',
        endDate: 'Actualidad',
        location: 'Remoto (Argentina)',
        description: 'Desarrollo end-to-end de aplicaciones web: diseño de arquitectura, implementación backend, modelado de bases de datos e integración con frontend.',
        achievements: [
            'Desarrollo de APIs REST con Spring Boot y Node.js (autenticación y roles)',
            'Modelado y optimización de bases de datos relacionales con PostgreSQL',
            'Implementación de sistemas de seguridad y registro de auditoría',
            'Documentación técnica de endpoints y decisiones de diseño arquitectónico',
            'Uso de entornos contenerizados con Docker para despliegues locales',
        ],
        technologies: ['Spring Boot', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'TypeScript'],
    },
];
