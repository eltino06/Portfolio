export const translations = {
    es: {
        nav: {
            home: 'Inicio',
            about: 'Sobre mí',
            skills: 'Habilidades',
            projects: 'Proyectos',
            experience: 'Experiencia',
            contact: 'Contacto',
            downloadCV: 'Descargar CV',
            downloadConfirm: '¿Estás seguro que deseas descargar mi CV?',
            downloadCancel: 'Cancelar',
            downloadAccept: 'Sí, descargar',
        },
        hero: {
            greeting: 'SOFTWARE ENGINEER',
            subtitle: 'Diseñando arquitecturas backend resilientes y sistemas escalables orientados a resolver cuellos de botella y maximizar el impacto de negocio.',
            viewProjects: 'Explorar Casos de Estudio',
            viewExperience: 'o ver experiencia profesional ↓',
            contact: 'Contactar',
            scroll: 'EXPLORAR',
            roles: {
                java: 'Arquitectura Backend',
                fullstack: 'Ingeniería de Producto',
                backend: 'Sistemas Escalables',
                solver: 'Resolución de Problemas',
            }
        },
        stats: {
            exp: 'Año de Experiencia',
            projects: 'Proyectos Realizados',
            age: 'Años de Edad',
            career: 'Progreso de Carrera',
        },
        about: {
            title: 'Filosofía & Sobre Mí',
            subtitle: 'Ingeniería orientada a resultados',
            description: 'Un ingeniero de software apasionado por la escalabilidad técnica y el impacto en el negocio.',
            highlights: {
                location: 'Base de Operaciones',
                education: 'Formación Base',
                availability: 'Disponibilidad',
                languages: 'Idiomas',
                locValue: 'Santa Fe, Argentina (Remoto global)',
                eduValue: 'IES — Tecnicatura en Desarrollo de Software',
                availValue: 'Inmediata',
                langValue: 'Español (Nativo) | Inglés B2',
            },
            bio: [
                'Soy un Software Engineer enfocado en ecosistemas Java/Spring Boot y arquitecturas modernas. Disfruto desentramando complejidad técnica para entregar productos estables.',
                'Mi filosofía es que el buen código no solo corre rápido, sino que puede ser leído, mantenido y escalado por el equipo el día de mañana. Priorizo la fiabilidad del sistema (0% downtime) y arquitecturas resilientes.',
                'Busco unirme a equipos exigentes donde pueda aportar valor desde el diseño del sistema, optimizando procesos y construyendo API RESTful que soporten alta concurrencia y seguridad.',
            ],
        },
        skills: {
            title: 'Habilidades',
            subtitle: 'Stack Tecnológico',
            categories: {
                backend: 'Backend',
                frontend: 'Frontend',
                database: 'Bases de Datos',
                tools: 'Herramientas & DevOps',
            }
        },
        projects: {
            title: 'Proyectos',
            subtitle: 'Mis Trabajos Recientes',
            description: 'Una selección de proyectos que muestran mis habilidades en todo el stack.',
            all: 'Todas',
            frontend: 'Frontend',
            backend: 'Backend',
            fullstack: 'FullStack',
            viewGithub: 'Código',
            viewLive: 'En Vivo',
            details: 'Ver Detalles',
            featured: 'Destacado',
            items: {
                admin: {
                    title: 'Plataforma de Gestión Administrativa',
                    desc: 'Sistema integral para administración con backend en Spring Boot y frontend en React.',
                    long: 'Arquitectura backend con Spring Boot implementando una API REST completa, sistema de roles (RBAC), autenticación JWT y auditoría de acciones. Frontend desarrollado en React con control de accesos dinámico y dashboards administrativos. Desplegado bajo contenedores Docker.',
                },
                reg: {
                    title: 'Sistema de Registro Digital y Auditoría',
                    desc: 'Aplicación enfocada en trazabilidad y seguridad de datos operacionales.',
                    long: 'Diseño de arquitectura orientada a trazabilidad extrema: cada operación es registrada, versionada y auditable. Modelo de base de datos relacional avanzado diseñado para integridad referencial total y flujos de seguridad estrictos.',
                },
                port: {
                    title: 'Portfolio 2025',
                    desc: 'Mi carta de presentación digital construida con tecnologías de última generación.',
                    long: 'Portfolio profesional de alto impacto visual y técnico. Utiliza Next.js 14 para optimización extrema, Framer Motion para animaciones fluidas y micro-interacciones visuales.',
                }
            }
        },
        experience: {
            title: 'Experiencia',
            subtitle: 'Trayectoria Profesional',
            description: 'Mi trayectoria profesional y el impacto que he tenido en el camino.',
            present: 'Actualidad',
            items: {
                freelance: {
                    role: 'Desarrollador Full Stack',
                    company: 'Proyectos Independientes',
                    location: 'Remoto (Argentina)',
                    desc: 'Desarrollo end-to-end de aplicaciones web: diseño de arquitectura, implementación backend, modelado de bases de datos e integración con frontend.',
                    highlights: [
                        'Desarrollo de APIs REST con Spring Boot y Node.js (autenticación y roles)',
                        'Modelado y optimización de bases de datos relacionales con PostgreSQL',
                        'Implementación de sistemas de seguridad y registro de auditoría',
                        'Documentación técnica de endpoints y decisiones de diseño arquitectónico',
                        'Uso de entornos contenerizados con Docker para despliegues locales',
                    ]
                }
            }
        },
        education: {
            title: 'Educación',
            subtitle: 'Formación Académica',
            progress: 'Progreso',
            items: {
                ies: {
                    degree: 'Tecnicatura',
                    institution: 'IES (Instituto de Estudios Superiores)',
                    field: 'Desarrollo de Software',
                    desc: 'Formación técnica superior enfocada en algoritmos, POO, bases de datos y arquitectura. Nivel de inglés técnico B2 integrado.',
                    status: 'En curso',
                },
                secundario: {
                    degree: 'Nivel Primario y Secundario',
                    institution: 'Colegio local',
                    field: 'Educación Obligatoria',
                    desc: 'Educación primaria y secundaria con base sólida en ciencias y tecnología.',
                    status: 'Finalizado',
                }
            }
        },
        contact: {
            title: 'Contacto',
            subtitle: 'Trabajemos juntos',
            description: 'Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes.',
            details: 'Tanto si tienes un proyecto en mente, una pregunta o simplemente quieres saludar, mi bandeja de entrada está siempre abierta. Construyamos algo grandioso juntos.',
            infoEmail: 'Email',
            infoPhone: 'Número de Teléfono',
            infoLocation: 'Ubicación',
            name: 'Nombre',
            email: 'Correo Electrónico',
            subject: 'Asunto',
            message: 'Mensaje',
            send: 'Enviar Mensaje',
            sending: 'Enviando...',
        },
        footer: {
            navigation: 'Navegación',
            connect: 'Conectar',
            madeWith: 'Hecho con',
            backToTop: 'Volver arriba',
        },
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            experience: 'Experience',
            contact: 'Contact',
            downloadCV: 'Download CV',
            downloadConfirm: 'Are you sure you want to download my CV?',
            downloadCancel: 'Cancel',
            downloadAccept: 'Yes, download',
        },
        hero: {
            greeting: "SOFTWARE ENGINEER",
            subtitle: 'Designing resilient backend architectures and scalable systems focused on solving bottlenecks and maximizing business impact.',
            viewProjects: 'Explore Case Studies',
            viewExperience: 'or see professional experience ↓',
            contact: 'Contact Me',
            scroll: 'EXPLORE',
            roles: {
                java: 'Backend Architecture',
                fullstack: 'Product Engineering',
                backend: 'Scalable Systems',
                solver: 'Complex Problem Solving',
            }
        },
        stats: {
            exp: 'Year of Experience',
            projects: 'Projects Completed',
            age: 'Years Old',
            career: 'Career Progress',
        },
        about: {
            title: 'Philosophy & About Me',
            subtitle: 'Results-driven Engineering',
            description: 'A software engineer passionate about technical scalability and business impact.',
            highlights: {
                location: 'Base of Operations',
                education: 'Core Formation',
                availability: 'Availability',
                languages: 'Languages',
                locValue: 'Santa Fe, Argentina (Global Remote)',
                eduValue: 'IES — Software Development Degree',
                availValue: 'Immediate',
                langValue: 'Spanish (Native) | English B2',
            },
            bio: [
                'I am a Software Engineer focused on Java/Spring Boot ecosystems and modern architectures. I enjoy unraveling technical complexity to deliver stable products.',
                'My philosophy is that good code not only runs fast but can be read, maintained, and scaled by the team tomorrow. I prioritize system reliability (0% downtime) and resilient architectures.',
                'I seek to join demanding teams where I can add value from system design to building RESTful APIs that support high concurrency and strict security workflows.',
            ],
        },
        skills: {
            title: 'Skills',
            subtitle: 'Tech Stack',
            categories: {
                backend: 'Backend',
                frontend: 'Frontend',
                database: 'Databases',
                tools: 'Tools & DevOps',
            }
        },
        projects: {
            title: 'Projects',
            subtitle: 'My Recent Work',
            description: 'A selection of projects that showcase my skills across the stack.',
            all: 'All',
            frontend: 'Frontend',
            backend: 'Backend',
            fullstack: 'FullStack',
            viewGithub: 'Code',
            viewLive: 'Live Demo',
            details: 'View Details',
            featured: 'Featured',
            items: {
                admin: {
                    title: 'Administrative Management Platform',
                    desc: 'Integral administrative system with Spring Boot backend and React frontend.',
                    long: 'Backend architecture with Spring Boot implementing a complete REST API, role-based system (RBAC), JWT authentication, and action auditing. Frontend developed in React with dynamic access control and administrative dashboards. Deployed under Docker containers.',
                },
                reg: {
                    title: 'Digital Registration & Audit System',
                    desc: 'Application focused on traceability and security of operational data.',
                    long: 'Design of architecture oriented to extreme traceability: every operation is registered, versioned, and auditable. Advanced relational database model designed for total referential integrity and strict security flows.',
                },
                port: {
                    title: 'Portfolio 2025',
                    desc: 'My digital presentation letter built with next-generation technologies.',
                    long: 'Professional portfolio with high visual and technical impact. Uses Next.js 14 for extreme optimization, Framer Motion for smooth animations, and visual micro-interactions.',
                }
            }
        },
        experience: {
            title: 'Experience',
            subtitle: 'Professional Path',
            description: 'My professional career and the impact I\'ve had along the way.',
            present: 'Present',
            items: {
                freelance: {
                    role: 'Full Stack Developer',
                    company: 'Independent Projects',
                    location: 'Remote (Argentina)',
                    desc: 'End-to-end development of web applications: architecture design, backend implementation, database modeling, and frontend integration.',
                    highlights: [
                        'REST API development with Spring Boot and Node.js (auth & roles)',
                        'Relational database modeling and optimization with PostgreSQL',
                        'Implementation of security systems and audit logs',
                        'Technical documentation of endpoints and architectural design decisions',
                        'Use of containerized environments with Docker for local deployments',
                    ]
                }
            }
        },
        education: {
            title: 'Education',
            subtitle: 'Academic Background',
            progress: 'Progress',
            items: {
                ies: {
                    degree: "Associate's Degree",
                    institution: 'IES (Institute of Higher Studies)',
                    field: 'Software Development',
                    desc: 'Higher technical training focused on algorithms, OOP, databases, and architecture. Integrated B2 technical English level.',
                    status: 'In progress',
                },
                secundario: {
                    degree: 'Primary & Secondary Level',
                    institution: 'Local school',
                    field: 'Mandatory Education',
                    desc: 'Primary and secondary education with a solid foundation in science and technology.',
                    status: 'Completed',
                }
            }
        },
        contact: {
            title: 'Contact',
            subtitle: "Let's Work Together",
            description: "I'm always interested in new opportunities and exciting projects.",
            details: "Whether you have a project in mind, a question, or just want to say hi, my inbox is always open. Let's build something great together.",
            infoEmail: 'Email',
            infoPhone: 'Phone Number',
            infoLocation: 'Location',
            name: 'Name',
            email: 'Email',
            subject: 'Subject',
            message: 'Message',
            send: 'Send Message',
            sending: 'Sending...',
        },
        footer: {
            navigation: 'Navigation',
            connect: 'Connect',
            madeWith: 'Made with',
            backToTop: 'Back to top',
        },
    },
    pt: {
        nav: {
            home: 'Início',
            about: 'Sobre mim',
            skills: 'Habilidades',
            projects: 'Projetos',
            experience: 'Experiência',
            contact: 'Contato',
            downloadCV: 'Baixar CV',
            downloadConfirm: 'Tem certeza que deseja baixar meu CV?',
            downloadCancel: 'Cancelar',
            downloadAccept: 'Sim, baixar',
        },
        hero: {
            greeting: 'SOFTWARE ENGINEER',
            subtitle: 'Projetando arquiteturas backend resilientes e sistemas escaláveis com foco em resolver gargalos e maximizar o impacto nos negócios.',
            viewProjects: 'Explorar Casos de Estudo',
            viewExperience: 'ou ver experiência profissional ↓',
            contact: 'Contatar',
            scroll: 'EXPLORAR',
            roles: {
                java: 'Arquitetura Backend',
                fullstack: 'Engenharia de Produto',
                backend: 'Sistemas Escaláveis',
                solver: 'Resolução de Problemas',
            }
        },
        stats: {
            exp: 'Ano de Experiência',
            projects: 'Projetos Realizados',
            age: 'Anos de Idade',
            career: 'Progreso de Carreira',
        },
        about: {
            title: 'Filosofia & Sobre mim',
            subtitle: 'Engenharia orientada a resultados',
            description: 'Um engenheiro de software apaixonado pela escalabilidade técnica e impacto nos negócios.',
            highlights: {
                location: 'Base de Operações',
                education: 'Formação Base',
                availability: 'Disponibilidade',
                languages: 'Idiomas',
                locValue: 'Santa Fe, Argentina (Remoto global)',
                eduValue: 'IES — Tecnólogo em Desenvolvimento de Software',
                availValue: 'Imediata',
                langValue: 'Espanhol (Nativo) | Inglês B2',
            },
            bio: [
                'Sou um Software Engineer focado em ecossistemas Java/Spring Boot e arquiteturas modernas. Gosto de desvendar a complexidade técnica para entregar produtos estáveis.',
                'Minha filosofia é que um bom código não apenas roda rápido, mas pode ser lido, mantido e escalado pela equipe no futuro. Priorizo a confiabilidade do sistema (0% downtime) e arquiteturas resilientes.',
                'Busco me juntar a equipes exigentes onde possa agregar valor desde o design do sistema, otimizando processos e construindo APIs RESTful que suportem alta concorrência e segurança.',
            ],
        },
        skills: {
            title: 'Habilidades',
            subtitle: 'Stack Tecnológico',
            categories: {
                backend: 'Backend',
                frontend: 'Frontend',
                database: 'Bancos de Dados',
                tools: 'Ferramentas & DevOps',
            }
        },
        projects: {
            title: 'Projetos',
            subtitle: 'Meus Trabalhos Recentes',
            description: 'Uma seleção de projetos que mostram minhas habilidades em todo o stack.',
            all: 'Todas',
            frontend: 'Frontend',
            backend: 'Backend',
            fullstack: 'FullStack',
            viewGithub: 'Código',
            viewLive: 'Ao Vivo',
            details: 'Ver Detalhes',
            featured: 'Destaque',
            items: {
                admin: {
                    title: 'Plataforma de Gestão Administrativa',
                    desc: 'Sistema integral para administração com backend em Spring Boot e frontend em React.',
                    long: 'Arquitectura backend con Spring Boot implementando una API REST completa, sistema de roles (RBAC), autenticación JWT y auditoría de acciones. Frontend desarrollado en React con control de accesos dinámico y dashboards administrativos. Desplegado bajo contenedores Docker.',
                },
                reg: {
                    title: 'Sistema de Registro Digital e Auditoria',
                    desc: 'Aplicação focada em rastreabilidade e segurança de dados operacionais.',
                    long: 'Design de arquitetura orientada à rastreabilidade extrema: cada operação é registrada, versionada e auditável. Modelo de banco de datos relacional avançado projetado para integridade referencial total e fluxos de segurança rigorosos.',
                },
                port: {
                    title: 'Portfolio 2025',
                    desc: 'Minha carta de apresentação digital construída com tecnologias de última geração.',
                    long: 'Portfólio profissional de alto impacto visual e técnico. Utiliza Next.js 14 para otimização extrema, Framer Motion para animações fluidas e micro-interações visuais.',
                }
            }
        },
        experience: {
            title: 'Experiência',
            subtitle: 'Trajetória Profissional',
            description: 'Minha trajetória profissional e o impacto que tive ao longo do caminho.',
            present: 'Atualidade',
            items: {
                freelance: {
                    role: 'Desenvolvedor Full Stack',
                    company: 'Projetos Independentes',
                    location: 'Remoto (Argentina)',
                    desc: 'Desenvolvimento end-to-end de aplicações web: design de arquitetura, implementação backend, modelagem de bancos de datos e integração com frontend.',
                    highlights: [
                        'Desenvolvimento de APIs REST com Spring Boot e Node.js (autenticação e papéis)',
                        'Modelado e otimização de bancos de datos relacionais com PostgreSQL',
                        'Implementação de sistemas de segurança e registro de auditoria',
                        'Documentação técnica de endpoints e decisões de design arquitectónico',
                        'Uso de ambientes conteinerizados com Docker para implantações locais',
                    ]
                }
            }
        },
        education: {
            title: 'Educação',
            subtitle: 'Formação Acadêmica',
            progress: 'Progresso',
            items: {
                ies: {
                    degree: "Tecnólogo",
                    institution: 'IES (Instituto de Estudios Superiores)',
                    field: 'Desenvolvimento de Software',
                    desc: 'Formação técnica superior focada em algoritmos, POO, bancos de datos e arquitetura. Disponibilidade de nível de inglês técnico B2 integrado.',
                    status: 'Em curso',
                },
                secundario: {
                    degree: 'Nível Primário e Secundário',
                    institution: 'Escola local',
                    field: 'Educação Obrigatória',
                    desc: 'Educação primária e secundária com base sólida em ciências e tecnologia.',
                    status: 'Finalizado',
                }
            }
        },
        contact: {
            title: 'Contato',
            subtitle: 'Vamos trabalhar juntos',
            description: 'Sempre estou interessado em novas oportunidades e projetos emocionantes.',
            details: 'Se você tem um projeto em mente, uma pergunta ou apenas quer dizer olá, minha caixa de entrada está sempre aberta. Vamos construir algo incrível juntos.',
            infoEmail: 'E-mail',
            infoPhone: 'Número de Telefone',
            infoLocation: 'Localização',
            name: 'Nome',
            email: 'E-mail',
            subject: 'Assunto',
            message: 'Mensagem',
            send: 'Enviar Mensagem',
            sending: 'Enviando...',
        },
        footer: {
            navigation: 'Navegação',
            connect: 'Conectar',
            madeWith: 'Feito com',
            backToTop: 'Voltar ao topo',
        },
    },
    it: {
        nav: {
            home: 'Inizio',
            about: 'Su di me',
            skills: 'Competenze',
            projects: 'Progetti',
            experience: 'Esperienza',
            contact: 'Contatto',
            downloadCV: 'Scarica CV',
            downloadConfirm: 'Sei sicuro di voler scaricare il mio CV?',
            downloadCancel: 'Annulla',
            downloadAccept: 'Sì, scarica',
        },
        hero: {
            greeting: 'SOFTWARE ENGINEER',
            subtitle: 'Progettazione di architetture backend resilienti e sistemi scalabili focalizzati sulla risoluzione dei colli di bottiglia e sulla massimizzazione dell\'impatto aziendale.',
            viewProjects: 'Esplora Casi Studio',
            viewExperience: 'o vedi l\'esperienza professionale ↓',
            contact: 'Contattami',
            scroll: 'ESPLORARE',
            roles: {
                java: 'Architettura Backend',
                fullstack: 'Ingegneria di Prodotto',
                backend: 'Sistemi Scalabili',
                solver: 'Risoluzione Problemi',
            }
        },
        stats: {
            exp: 'Anno di Esperienza',
            projects: 'Progetti Realizzati',
            age: 'Anni di Età',
            career: 'Progresso di Carriera',
        },
        about: {
            title: 'Filosofia e Su di me',
            subtitle: 'Ingegneria orientata ai risultati',
            description: 'Un ingegnere del software appassionato di scalabilità tecnica e impatto sul business.',
            highlights: {
                location: 'Base Operativa',
                education: 'Formazione Base',
                availability: 'Disponibilità',
                languages: 'Lingue',
                locValue: 'Santa Fe, Argentina (Remoto Globale)',
                eduValue: 'IES — Tecnico in Sviluppo Software',
                availValue: 'Immediata',
                langValue: 'Spagnolo (Madrelingua) | Inglese B2',
            },
            bio: [
                'Sono un Software Engineer focalizzato sugli ecosistemi Java/Spring Boot e sulle architetture moderne. Mi piace svelare la complessità tecnica per fornire prodotti stabili.',
                'La mia filosofia è che un buon codice non solo viene eseguito velocemente, ma può essere letto, mantenuto e scalato dal team in futuro. Do priorità all\'affidabilità del sistema (0% downtime) e alle architetture resilienti.',
                'Cerco di unirmi a team esigenti dove posso aggiungere valore dalla progettazione del sistema, ottimizzando i processi e costruendo API RESTful che supportino elevata concorrenza e rigorosa sicurezza.',
            ],
        },
        skills: {
            title: 'Competenze',
            subtitle: 'Tech Stack',
            categories: {
                backend: 'Backend',
                frontend: 'Frontend',
                database: 'Database',
                tools: 'Strumenti & DevOps',
            }
        },
        projects: {
            title: 'Progetti',
            subtitle: 'I miei lavori recenti',
            description: 'Una selezione di progetti che mostrano le mie competenze in tutto lo stack.',
            all: 'Tutto',
            frontend: 'Frontend',
            backend: 'Backend',
            fullstack: 'FullStack',
            viewGithub: 'Codice',
            viewLive: 'Live Demo',
            details: 'Vedi Dettagli',
            featured: 'In evidenza',
            items: {
                admin: {
                    title: 'Piattaforma di Gestione Amministrativa',
                    desc: 'Sistema amministrativo integrale con backend in Spring Boot e frontend in React.',
                    long: 'Architettura backend con Spring Boot che implementa un\'API REST completa, sistema di ruoli (RBAC), autenticazione JWT e auditing delle azioni. Frontend sviluppato in React con controllo d\'accesso dinamico e dashboard amministrative. Distribuito sotto container Docker.',
                },
                reg: {
                    title: 'Sistema di Registrazione Digitale e Audit',
                    desc: 'Applicazione focalizzata sulla tracciabilità e la sicurezza dei dati operativi.',
                    long: 'Design dell\'architettura orientata alla tracciabilità estrema: ogni operazione viene registrata, versata e controllabile. Modello di database relazionale avanzato progettato per la totale integrità referenziale e flussi di sicurezza rigorosi.',
                },
                port: {
                    title: 'Portfolio 2025',
                    desc: 'La mia lettera di presentazione digitale costruita con tecnologie di nuova generazione.',
                    long: 'Portfolio professionale ad alto impatto visivo e tecnico. Utilizza Next.js 14 per un\'ottimizzazione estrema, Framer Motion per animazioni fluide e micro-interazioni visive.',
                }
            }
        },
        experience: {
            title: 'Esperienza',
            subtitle: 'Percorso Professionale',
            description: 'La mia carriera professionale e l\'impatto che ho avuto lungo il percorso.',
            present: 'Attualità',
            items: {
                freelance: {
                    role: 'Sviluppatore Full Stack',
                    company: 'Progetti Indipendenti',
                    location: 'Remoto (Argentina)',
                    desc: 'Sviluppo end-to-end di applicazioni web: progettazione dell\'architettura, implementazione backend, modellazione di database e integrazione con il frontend.',
                    highlights: [
                        'Sviluppo di API REST con Spring Boot e Node.js (auth e ruoli)',
                        'Modellazione e ottimizzazione di database relazionali con PostgreSQL',
                        'Implementazione di sistemi di sicurezza e log di audit',
                        'Documentazione tecnica degli endpoint e decisioni di progettazione architettonica',
                        'Utilizzo di ambienti containerizzati con Docker per implementazioni locali',
                    ]
                }
            }
        },
        education: {
            title: 'Istruzione',
            subtitle: 'Percorso Accademico',
            progress: 'Progresso',
            items: {
                ies: {
                    degree: "Laurea Tecnica",
                    institution: 'IES (Istituto di Studi Superiori)',
                    field: 'Sviluppo Software',
                    desc: 'Formazione tecnica superiore focalizzata su algoritmi, OOP, database e architettura. Livello di inglese tecnico B2 integrato.',
                    status: 'In corso',
                },
                secundario: {
                    degree: 'Livello Primario e Secondario',
                    institution: 'Scuola locale',
                    field: 'Istruzione Obbligatoria',
                    desc: 'Istruzione primaria e secondaria con una solida base in scienza e tecnologia.',
                    status: 'Completato',
                }
            }
        },
        contact: {
            title: 'Contatto',
            subtitle: 'Lavoriamo Insieme',
            description: 'Sono sempre interessato a nuove opportunità e progetti entusiasmanti.',
            details: 'Sia che tu abbia un progetto in mente, una domanda o semplicemente voglia salutarmi, la mia casella di posta è sempre aperta. Costruiamo qualcosa di grande insieme.',
            infoEmail: 'Email',
            infoPhone: 'Numero di Telefono',
            infoLocation: 'Posizione',
            name: 'Nome',
            email: 'Email',
            oggeto: 'Oggetto',
            message: 'Messaggio',
            send: 'Invia Messaggio',
            sending: 'Invio in corso...',
        },
        footer: {
            navigation: 'Navigazione',
            connect: 'Connettiti',
            madeWith: 'Realizzato con',
            backToTop: 'Torna su',
        },
    },
};

export type TranslationKey = string;
