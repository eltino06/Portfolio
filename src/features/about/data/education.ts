export interface Education {
    id: string;
    translationKey: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    status: 'En curso' | 'Finalizado';
    description: string;
    progress: number;
}

export const education: Education[] = [
    {
        id: 'ies',
        translationKey: 'ies',
        institution: 'IES (Instituto de Estudios Superiores)',
        degree: 'Tecnicatura',
        field: 'Desarrollo de Software',
        startDate: '2024',
        endDate: '2026',
        status: 'En curso',
        description: 'Formación técnica superior enfocada en algoritmos, POO, bases de datos y arquitectura. Nivel de inglés técnico B2 integrado.',
        progress: 70,
    },
    {
        id: 'secundario',
        translationKey: 'secundario',
        institution: 'Educacion',
        degree: 'Nivel Primario y Secundario',
        field: 'Finalizado',
        startDate: '2012',
        endDate: '2023',
        status: 'Finalizado',
        description: 'Educación primaria y secundaria con base sólida en ciencias y tecnología.',
        progress: 100,
    },
];
