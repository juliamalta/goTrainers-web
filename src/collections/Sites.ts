import type { CollectionConfig, Where } from 'payload'

export const Sites: CollectionConfig = {
    slug: 'sites',

    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'template', 'user', 'published'],
    },

    access: {
        read: ({ req }) => {
            if (!req.user) {
                return {
                    published: {
                        equals: true,
                    },
                } as Where
            }

            return {
                user: {
                    equals: req.user.id,
                },
            } as Where
        },

        create: ({ req }) => Boolean(req.user),

        update: ({ req }) => {
            if (!req.user) {
                return false
            }

            return {
                user: {
                    equals: req.user.id,
                },
            } as Where
        },

        delete: ({ req }) => {
            if (!req.user) {
                return false
            }

            return {
                user: {
                    equals: req.user.id,
                },
            } as Where
        },
    },

    fields: [
        // =========================================================
        // INFORMAÇÕES DO SITE
        // =========================================================

        {
            name: 'name',
            type: 'text',
            required: true,
            label: 'Nome do site',

            admin: {
                position: 'sidebar',
                placeholder: 'Exemplo: Lucas Andrade Personal',
                description: 'Nome que será usado para identificar seu site.',
            },
        },

        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            required: false,
            label: 'Usuário',

            admin: {
                position: 'sidebar',
                description: 'Usuário responsável por este site.',
            },
        },

        {
            name: 'template',
            type: 'select',
            required: false,
            label: 'Template',
            defaultValue: 'template-1',

            options: [
                {
                    label: 'Template 1',
                    value: 'template-1',
                },
                {
                    label: 'Template 2',
                    value: 'template-2',
                },
                {
                    label: 'Template 3 - Clean',
                    value: 'template-3',
                },
            ],

            admin: {
                position: 'sidebar',
            },
        },

        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            label: 'Endereço do site',

            admin: {
                position: 'sidebar',
                placeholder: 'Exemplo: lucas-andrade',
                description: 'Seu endereço ficará parecido com /personal/lucas-andrade',
            },
        },

        {
            name: 'published',
            type: 'checkbox',
            required: false,
            defaultValue: false,
            label: 'Site publicado',

            admin: {
                position: 'sidebar',
                description: 'Enquanto estiver desativado, o site ficará apenas como prévia.',
            },
        },

        // =========================================================
        // TEMPLATE 1
        // =========================================================

        {
            name: 'template1',
            type: 'group',
            required: false,
            label: 'Template 1',

            admin: {
                condition: (_, siblingData) => siblingData?.template === 'template-1',
            },

            fields: [
                // =================================================
                // HERO
                // =================================================

                {
                    name: 'hero',
                    type: 'group',
                    required: false,
                    label: 'Apresentação',

                    admin: {
                        description: 'Já deixamos essa parte pronta. Altere apenas o que quiser.',
                    },

                    fields: [
                        {
                            name: 'titlePrimary',
                            type: 'text',
                            required: false,
                            label: 'Texto superior',
                            defaultValue: 'PROFISSIONALISMO QUE GERA RESULTADOS',

                            admin: {
                                description: 'Pequeno texto que aparece acima do título principal.',
                            },
                        },

                        {
                            name: 'title',
                            type: 'textarea',
                            required: false,
                            label: 'Título principal',
                            defaultValue: 'Transforme seu objetivo em',

                            admin: {
                                description: 'Essa será uma das primeiras mensagens vistas no seu site.',
                            },
                        },

                        {
                            name: 'titleHighlight',
                            type: 'text',
                            required: false,
                            label: 'Texto em destaque',
                            defaultValue: 'resultados reais.',

                            admin: {
                                description: 'Essa parte aparece destacada na cor principal do template.',
                            },
                        },

                        {
                            name: 'desc',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                            defaultValue:
                                'Ofereço um serviço personalizado, pensado para entender suas necessidades e entregar uma experiência de qualidade, com atenção aos detalhes e foco no que realmente importa para você.',
                        },

                        {
                            name: 'button1text',
                            type: 'text',
                            required: false,
                            label: 'Texto do botão',
                            defaultValue: 'Quero começar',
                        },

                        {
                            name: 'button1url',
                            type: 'text',
                            required: false,
                            defaultValue: '#contato',

                            admin: {
                                hidden: true,
                            },
                        },

                        {
                            name: 'img',
                            type: 'upload',
                            relationTo: 'media',
                            required: false,
                            label: 'Sua foto',

                            admin: {
                                description:
                                    'Opcional. Se você não enviar uma foto agora, usamos a imagem padrão do template.',
                            },
                        },
                    ],
                },

                // =================================================
                // MÉTRICAS
                // =================================================

                {
                    name: 'metrics',
                    type: 'array',
                    required: false,
                    maxRows: 4,
                    label: 'Seus números',

                    defaultValue: [
                        {
                            number: '+8',
                            text: 'Anos de experiência',
                        },
                        {
                            number: '+480',
                            text: 'Clientes atendidos',
                        },
                        {
                            number: '4.9',
                            text: 'Nota média dos clientes',
                        },
                        {
                            number: '+1mil',
                            text: 'Projetos realizados',
                        },
                    ],

                    admin: {
                        initCollapsed: false,
                        description:
                            'Já deixamos alguns exemplos. Troque apenas pelos números que representem sua experiência.',
                    },

                    fields: [
                        {
                            name: 'number',
                            type: 'text',
                            required: false,
                            label: 'Número',

                            admin: {
                                placeholder: 'Exemplo: +8',
                            },
                        },

                        {
                            name: 'text',
                            type: 'text',
                            required: false,
                            label: 'Descrição',

                            admin: {
                                placeholder: 'Exemplo: Anos de experiência',
                            },
                        },
                    ],
                },

                // =================================================
                // SERVIÇOS
                // =================================================

                {
                    name: 'services',
                    type: 'group',
                    required: false,
                    label: 'Seus serviços',

                    admin: {
                        description: 'Criamos três serviços como exemplo. Você pode alterar apenas o que precisar.',
                    },

                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: false,
                            label: 'Título',
                            defaultValue: 'Meus serviços',
                        },

                        {
                            name: 'desc',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                            defaultValue: 'Conheça as soluções que ofereço e escolha a opção ideal para você',
                        },

                        {
                            name: 'cards',
                            type: 'array',
                            required: false,
                            maxRows: 3,
                            label: 'Serviços',

                            defaultValue: [
                                {
                                    desc: 'Atendimento personalizado',
                                    title: 'Serviço Personalizado',
                                    text: 'Uma solução pensada de acordo com suas necessidades, objetivos e expectativas.',
                                    price: 'R$ 299,90',
                                    option: [
                                        {
                                            text: 'Atendimento personalizado',
                                        },
                                        {
                                            text: 'Solução sob medida',
                                        },
                                        {
                                            text: 'Acompanhamento completo',
                                        },
                                    ],
                                    link: '',
                                    featured: true,
                                },

                                {
                                    desc: 'Qualidade e atenção',
                                    title: 'Atendimento Completo',
                                    text: 'Conte com acompanhamento próximo e atenção em cada etapa do processo.',
                                    price: 'R$ 499,90/mês',
                                    option: [
                                        {
                                            text: 'Acompanhamento próximo',
                                        },
                                        {
                                            text: 'Suporte durante o processo',
                                        },
                                        {
                                            text: 'Atendimento completo',
                                        },
                                    ],
                                    link: '',
                                    featured: true,
                                },

                                {
                                    desc: 'Foco em resultados',
                                    title: 'Soluções Sob Medida',
                                    text: 'Estratégias e serviços desenvolvidos para entregar resultados que realmente fazem diferença.',
                                    price: 'R$ 799,90',
                                    option: [
                                        {
                                            text: 'Estratégia personalizada',
                                        },
                                        {
                                            text: 'Foco em resultados',
                                        },
                                        {
                                            text: 'Soluções sob medida',
                                        },
                                    ],
                                    link: '',
                                    featured: false,
                                },
                            ],

                            admin: {
                                initCollapsed: false,
                                description:
                                    'Os serviços já estão preenchidos. Personalize de acordo com o que você oferece.',
                            },

                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: false,
                                    label: 'Nome do serviço',
                                },

                                {
                                    name: 'desc',
                                    type: 'text',
                                    required: false,
                                    label: 'Descrição curta',
                                },

                                {
                                    name: 'text',
                                    type: 'textarea',
                                    required: false,
                                    label: 'Descrição',
                                },

                                {
                                    name: 'price',
                                    type: 'text',
                                    required: false,
                                    label: 'Preço',
                                },

                                {
                                    name: 'option',
                                    type: 'array',
                                    required: false,
                                    maxRows: 4,
                                    label: 'O que está incluso',

                                    fields: [
                                        {
                                            name: 'text',
                                            type: 'text',
                                            required: false,
                                            label: 'Benefício',
                                        },
                                    ],
                                },

                                {
                                    name: 'link',
                                    type: 'text',
                                    required: false,
                                    label: 'Link do serviço',
                                },

                                {
                                    name: 'featured',
                                    type: 'checkbox',
                                    required: false,
                                    defaultValue: false,
                                    label: 'Destacar este serviço',
                                },
                            ],
                        },
                    ],
                },

                // =================================================
                // SOBRE
                // =================================================

                {
                    name: 'about',
                    type: 'group',
                    required: false,
                    label: 'Sobre você',

                    fields: [
                        {
                            name: 'img',
                            type: 'upload',
                            relationTo: 'media',
                            required: false,
                            label: 'Sua foto',
                        },

                        {
                            name: 'title',
                            type: 'text',
                            required: false,
                            label: 'Título',
                            defaultValue: 'Experiência, dedicação e compromisso com você',
                        },

                        {
                            name: 'desc',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                            defaultValue:
                                'Meu objetivo é oferecer um serviço de qualidade, entender o que você precisa e buscar sempre a melhor solução. Trabalho com dedicação, profissionalismo e atenção aos detalhes para proporcionar uma experiência diferenciada.',
                        },

                        {
                            name: 'features',
                            type: 'array',
                            required: false,
                            maxRows: 4,
                            label: 'Seus diferenciais',

                            defaultValue: [
                                {
                                    title: 'Atendimento personalizado para cada cliente',
                                },
                                {
                                    title: 'Experiência e conhecimento na área',
                                },
                                {
                                    title: 'Acompanhamento próximo durante todo o processo',
                                },
                                {
                                    title: 'Compromisso com qualidade e bons resultados',
                                },
                            ],

                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: false,
                                    label: 'Diferencial',
                                },
                            ],
                        },
                    ],
                },

                // =================================================
                // DEPOIMENTOS
                // =================================================

                {
                    name: 'testimonials',
                    type: 'group',
                    required: false,
                    label: 'Depoimentos',

                    fields: [
                        {
                            name: 'enabled',
                            type: 'checkbox',
                            required: false,
                            defaultValue: true,
                            label: 'Mostrar depoimentos',
                        },

                        {
                            name: 'title',
                            type: 'text',
                            required: false,
                            label: 'Título',
                            defaultValue: 'O que meus clientes dizem?',
                        },

                        {
                            name: 'desc',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                            defaultValue: '',
                        },

                        {
                            name: 'cards',
                            type: 'array',
                            required: false,
                            maxRows: 4,
                            label: 'Depoimentos',

                            defaultValue: [
                                {
                                    name: 'Mariana Costa',
                                    text: 'Fiquei muito satisfeita com o atendimento. Desde o primeiro contato fui muito bem atendida e o resultado superou minhas expectativas.',
                                },
                                {
                                    name: 'Rafael Mendes',
                                    text: 'Profissional extremamente atencioso e comprometido. Entendeu exatamente o que eu precisava e entregou um ótimo resultado.',
                                },
                                {
                                    name: 'Camila Oliveira',
                                    text: 'O atendimento fez toda a diferença. Tive suporte durante todo o processo e fiquei muito satisfeita com o resultado final.',
                                },
                                {
                                    name: 'Bruno Almeida',
                                    text: 'Excelente profissional. Trabalho de qualidade, atendimento rápido e muita atenção aos detalhes. Recomendo muito.',
                                },
                            ],

                            fields: [
                                {
                                    name: 'name',
                                    type: 'text',
                                    required: false,
                                    label: 'Nome',
                                },

                                {
                                    name: 'text',
                                    type: 'textarea',
                                    required: false,
                                    label: 'Depoimento',
                                },
                            ],
                        },
                    ],
                },

                // =================================================
                // CONTATO
                // =================================================

                {
                    name: 'contact',
                    type: 'group',
                    required: false,
                    label: 'Contato',

                    fields: [
                        {
                            name: 'title',
                            type: 'textarea',
                            required: false,
                            label: 'Título',
                            defaultValue: 'Pronto para dar o próximo passo?',
                        },

                        {
                            name: 'titleHighlight',
                            type: 'text',
                            required: false,
                            label: 'Texto em destaque',
                            defaultValue: 'Entre em contato comigo.',
                        },

                        {
                            name: 'text',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                            defaultValue:
                                'Conte um pouco sobre o que você precisa e descubra como posso ajudar. Será um prazer conversar com você.',
                        },

                        {
                            name: 'buttontext',
                            type: 'text',
                            required: false,
                            label: 'Texto do botão',
                            defaultValue: 'Entre em contato',
                        },

                        {
                            name: 'buttonurl',
                            type: 'text',
                            required: false,
                            defaultValue: '',

                            admin: {
                                hidden: true,
                            },
                        },
                    ],
                },

                // =================================================
                // WHATSAPP
                // =================================================

                {
                    name: 'whatsapp',
                    type: 'group',
                    required: false,
                    label: 'WhatsApp',

                    fields: [
                        {
                            name: 'enabled',
                            type: 'checkbox',
                            required: false,
                            defaultValue: true,
                            label: 'Mostrar WhatsApp',
                        },

                        {
                            name: 'phone',
                            type: 'text',
                            required: false,
                            label: 'Seu WhatsApp',
                        },

                        {
                            name: 'message',
                            type: 'textarea',
                            required: false,
                            label: 'Mensagem automática',
                            defaultValue: 'Olá! Vi seu site e gostaria de saber mais sobre seus serviços.',
                        },
                    ],
                },
            ],
        },

        // =========================================================
        // TEMPLATE 2 - PREMIUM
        // =========================================================

        {
            name: 'template2',
            type: 'group',
            required: false,
            label: 'Template 2 - Premium',

            admin: {
                condition: (_, siblingData) => siblingData?.template === 'template-2',
            },

            fields: [
                // =================================================
                // HERO
                // =================================================

                {
                    name: 'hero',
                    type: 'group',
                    required: false,
                    label: 'Apresentação',

                    admin: {
                        description: 'Personalize a apresentação principal do seu site.',
                    },

                    fields: [
                        {
                            name: 'titlePrimary',
                            type: 'text',
                            required: false,
                            label: 'Texto superior',
                            defaultValue: 'PERSONAL TRAINING EXCLUSIVO',
                        },

                        {
                            name: 'title',
                            type: 'textarea',
                            required: false,
                            label: 'Título principal',
                            defaultValue: 'Transformação Física Performance para',
                        },

                        {
                            name: 'titleHighlight',
                            type: 'text',
                            required: false,
                            label: 'Texto em destaque',
                            defaultValue: 'Líderes de Alto Padrão.',
                        },

                        {
                            name: 'desc',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                            defaultValue:
                                'Metodologia científica individualizada, privacidade absoluta e acompanhamento sob medida para quem valoriza tempo, estética e saúde no mais alto nível.',
                        },

                        {
                            name: 'button1text',
                            type: 'text',
                            required: false,
                            label: 'Botão principal',
                            defaultValue: 'COMECE SUA TRANSFORMAÇÃO',
                        },

                        {
                            name: 'button2text',
                            type: 'text',
                            required: false,
                            label: 'Botão secundário',
                            defaultValue: 'CONHEÇA O MÉTODO',
                        },

                        {
                            name: 'img',
                            type: 'upload',
                            relationTo: 'media',
                            required: false,
                            label: 'Sua foto',

                            admin: {
                                description:
                                    'Opcional. Se nenhuma foto for enviada, usamos a imagem padrão do Template Premium.',
                            },
                        },

                        {
                            name: 'tags',
                            type: 'array',
                            required: false,
                            maxRows: 3,
                            label: 'Destaques',

                            defaultValue: [
                                {
                                    text: 'Vagas exclusivas',
                                },
                                {
                                    text: 'Apenas 8 clientes ativos',
                                },
                                {
                                    text: 'Acompanhamento individual',
                                },
                            ],

                            admin: {
                                initCollapsed: false,
                                description: 'Os ícones são definidos automaticamente pelo template.',
                            },

                            fields: [
                                {
                                    name: 'text',
                                    type: 'text',
                                    required: false,
                                    label: 'Texto',
                                },
                            ],
                        },

                        {
                            name: 'cardTitle',
                            type: 'text',
                            required: false,
                            label: 'Título do destaque',
                            defaultValue: 'VAGAS EXCLUSIVAS',
                        },

                        {
                            name: 'cardText',
                            type: 'text',
                            required: false,
                            label: 'Texto do destaque',
                            defaultValue: 'Apenas 8 Clientes Ativos',
                        },
                    ],
                },

                // =================================================
                // MÉTRICAS
                // =================================================

                {
                    name: 'metrics',
                    type: 'array',
                    required: false,
                    maxRows: 4,
                    label: 'Seus números',

                    defaultValue: [
                        {
                            number: '+8 anos',
                            text: 'de experiência prática em alta performance e biomecânica avançada.',
                        },
                        {
                            number: '+300',
                            text: 'alunos e executivos C-level transformados com longevidade.',
                        },
                        {
                            number: '95%',
                            text: 'de retenção e consistência ininterrupta a longo prazo.',
                        },
                        {
                            number: '1:1',
                            text: 'atendimento 100% individualizado, privativo e sem dispersão.',
                        },
                    ],

                    admin: {
                        initCollapsed: false,
                        description: 'Personalize os quatro números apresentados no site.',
                    },

                    fields: [
                        {
                            name: 'number',
                            type: 'text',
                            required: false,
                            label: 'Número',

                            admin: {
                                placeholder: 'Exemplo: +8 anos',
                            },
                        },

                        {
                            name: 'text',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                        },
                    ],
                },

                // =================================================
                // SERVIÇOS
                // =================================================

                {
                    name: 'services',
                    type: 'group',
                    required: false,
                    label: 'Treinamentos',

                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: false,
                            label: 'Título',
                            defaultValue: 'Treinamento pensado para você.',
                        },

                        {
                            name: 'desc',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                            defaultValue:
                                'Cada acompanhamento é minuciosamente calibrado para a sua rotina, objetivos biomecânicos e ritmo de vida executivo.',
                        },

                        {
                            name: 'cards',
                            type: 'array',
                            required: false,
                            maxRows: 3,
                            label: 'Treinamentos',

                            defaultValue: [
                                {
                                    desc: 'MÓDULO PRESENCIAL',
                                    title: 'Performance Privativa',
                                    text: 'Sessões 100% presenciais em estúdio privativo selecionado ou no conforto do seu condomínio com privacidade irrepreensível.',
                                    price: 'R$ 1.490/mês',
                                    option: [
                                        {
                                            text: 'Avaliação postural tridimensional completa',
                                        },
                                        {
                                            text: 'Periodização sob medida com foco estético e postural',
                                        },
                                        {
                                            text: 'Suporte contínuo para recuperação e sono',
                                        },
                                    ],
                                    link: '',
                                    featured: false,
                                },

                                {
                                    desc: 'CONCIERGE TOTAL',
                                    title: 'Concierge Executivo Full',
                                    text: 'Atendimento híbrido de máxima conveniência. Gestão atlética completa para quem viaja frequentemente e busca precisão cirúrgica.',
                                    price: 'R$ 2.990/mês',
                                    option: [
                                        {
                                            text: 'Alinhamento direto com seu médico e nutricionista',
                                        },
                                        {
                                            text: 'Planejamento de treinos em viagens internacionais',
                                        },
                                        {
                                            text: 'Monitoramento de biomarcadores e recuperação diária',
                                        },
                                        {
                                            text: 'Atendimento presencial prioritário flexível',
                                        },
                                    ],
                                    link: '',
                                    featured: true,
                                },

                                {
                                    desc: 'MÓDULO REMOTO',
                                    title: 'Consultoria Remota Elite',
                                    text: 'Prescrição estratégica remota para líderes que treinam com autonomia ao redor do mundo, sem prescindir do mais alto padrão técnico.',
                                    price: 'R$ 890/mês',
                                    option: [
                                        {
                                            text: 'Análise postural e biomecânica em vídeo semanal',
                                        },
                                        {
                                            text: 'Ajustes biomecânicos e progressão milimétrica de carga',
                                        },
                                        {
                                            text: 'Canal privativo prioritário via WhatsApp',
                                        },
                                    ],
                                    link: '',
                                    featured: false,
                                },
                            ],

                            admin: {
                                initCollapsed: false,
                                description:
                                    'Os três treinamentos já estão preenchidos. Personalize de acordo com o seu serviço.',
                            },

                            fields: [
                                {
                                    name: 'desc',
                                    type: 'text',
                                    required: false,
                                    label: 'Categoria',

                                    admin: {
                                        placeholder: 'Exemplo: MÓDULO PRESENCIAL',
                                    },
                                },

                                {
                                    name: 'title',
                                    type: 'text',
                                    required: false,
                                    label: 'Nome do treinamento',
                                },

                                {
                                    name: 'text',
                                    type: 'textarea',
                                    required: false,
                                    label: 'Descrição',
                                },

                                {
                                    name: 'price',
                                    type: 'text',
                                    required: false,
                                    label: 'Preço',

                                    admin: {
                                        placeholder: 'Exemplo: R$ 1.490/mês',
                                    },
                                },

                                {
                                    name: 'option',
                                    type: 'array',
                                    required: false,
                                    maxRows: 4,
                                    label: 'O que está incluso',

                                    admin: {
                                        initCollapsed: false,
                                    },

                                    fields: [
                                        {
                                            name: 'text',
                                            type: 'text',
                                            required: false,
                                            label: 'Benefício',
                                        },
                                    ],
                                },

                                {
                                    name: 'link',
                                    type: 'text',
                                    required: false,
                                    label: 'Link do serviço',

                                    admin: {
                                        description: 'Opcional. Se vazio, você pode usar o WhatsApp principal.',
                                    },
                                },

                                {
                                    name: 'featured',
                                    type: 'checkbox',
                                    required: false,
                                    defaultValue: false,
                                    label: 'Destacar este treinamento',
                                },
                            ],
                        },
                    ],
                },

                // =================================================
                // SOBRE / DIFERENCIAIS
                // =================================================

                {
                    name: 'about',
                    type: 'group',
                    required: false,
                    label: 'Sobre você',

                    fields: [
                        {
                            name: 'img',
                            type: 'upload',
                            relationTo: 'media',
                            required: false,
                            label: 'Sua foto',

                            admin: {
                                description: 'Opcional. Se nenhuma foto for enviada, usamos a imagem padrão.',
                            },
                        },

                        {
                            name: 'title',
                            type: 'text',
                            required: false,
                            label: 'Título',
                            defaultValue: 'Experiência, dedicação e compromisso com você',
                        },

                        {
                            name: 'desc',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                            defaultValue:
                                'Meu objetivo é oferecer um acompanhamento de alto nível, com estratégia, atenção individual e ajustes constantes para alcançar resultados consistentes.',
                        },

                        {
                            name: 'features',
                            type: 'array',
                            required: false,
                            maxRows: 4,
                            label: 'Diferenciais',

                            defaultValue: [
                                {
                                    number: '01',
                                    title: 'Estratégia Personalizada',
                                    desc: 'Periodização desenhada sob demanda metabólica específica, respeitando estresse diário e recuperação celular.',
                                },
                                {
                                    number: '02',
                                    title: 'Acompanhamento Individual',
                                    desc: 'Zero distrações ou academias lotadas. Foco 100% na qualidade da execução e segurança articular.',
                                },
                                {
                                    number: '03',
                                    title: 'Evolução Mensurável',
                                    desc: 'Métricas periódicas de composição corporal, mobilidade, VO2 estimado e força funcional quantificável.',
                                },
                                {
                                    number: '04',
                                    title: 'Ajustes Contínuos',
                                    desc: 'Adaptações em tempo real de volume e intensidade para acomodar semanas de reuniões críticas ou viagens.',
                                },
                            ],

                            admin: {
                                initCollapsed: false,
                                description: 'Os quatro diferenciais aparecem numerados no Template Premium.',
                            },

                            fields: [
                                {
                                    name: 'number',
                                    type: 'text',
                                    required: false,
                                    label: 'Número',

                                    admin: {
                                        placeholder: 'Exemplo: 01',
                                    },
                                },

                                {
                                    name: 'title',
                                    type: 'text',
                                    required: false,
                                    label: 'Título',
                                },

                                {
                                    name: 'desc',
                                    type: 'textarea',
                                    required: false,
                                    label: 'Descrição',
                                },
                            ],
                        },
                    ],
                },

                // =================================================
                // DEPOIMENTOS
                // =================================================

                {
                    name: 'testimonials',
                    type: 'group',
                    required: false,
                    label: 'Depoimentos',

                    fields: [
                        {
                            name: 'enabled',
                            type: 'checkbox',
                            required: false,
                            defaultValue: true,
                            label: 'Mostrar depoimentos',
                        },

                        {
                            name: 'title',
                            type: 'text',
                            required: false,
                            label: 'Título',
                            defaultValue: 'Resultados que falam por si.',
                        },

                        {
                            name: 'cards',
                            type: 'array',
                            required: false,
                            maxRows: 3,
                            label: 'Depoimentos',

                            defaultValue: [
                                {
                                    name: 'Dr. Marcelo Arantes',
                                    desc: 'A flexibilidade e o rigor técnico transformaram minha disposição diária e composição corporal em 6 meses, conciliando com uma rotina de viagens intensas.',
                                    type: 'Cirurgião & Aluno há 2 anos',
                                },

                                {
                                    name: 'Beatriz Sampaio',
                                    desc: 'Treinar com esse nível de privacidade e precisão biomecânica é um divisor de águas. Cada minuto da sessão é focado em resultado real, sem tempo perdido.',
                                    type: 'Diretora Executiva & Aluna há 18 meses',
                                },

                                {
                                    name: 'Rodrigo Fontes',
                                    desc: 'O diferencial é a inteligência por trás de cada treino. Menos desgaste desnecessário, muito mais força e estética refinada. Vale cada investimento.',
                                    type: 'Sócio-fundador & Aluno há 3 anos',
                                },
                            ],

                            admin: {
                                initCollapsed: false,
                                description: 'Substitua os exemplos pelos depoimentos reais dos seus clientes.',
                            },

                            fields: [
                                {
                                    name: 'name',
                                    type: 'text',
                                    required: false,
                                    label: 'Nome',
                                },

                                {
                                    name: 'desc',
                                    type: 'textarea',
                                    required: false,
                                    label: 'Depoimento',
                                },

                                {
                                    name: 'type',
                                    type: 'text',
                                    required: false,
                                    label: 'Cargo / informação',

                                    admin: {
                                        placeholder: 'Exemplo: Diretor Executivo & Aluno há 2 anos',
                                    },
                                },
                            ],
                        },
                    ],
                },

                // =================================================
                // CONTATO
                // =================================================

                {
                    name: 'contact',
                    type: 'group',
                    required: false,
                    label: 'Contato',

                    fields: [
                        {
                            name: 'title',
                            type: 'textarea',
                            required: false,
                            label: 'Título',
                            defaultValue: 'Seu próximo nível começa agora.',
                        },

                        {
                            name: 'desc',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                            defaultValue:
                                'Treinamento personalizado, estratégia e acompanhamento exclusivo para quem busca resultados de alta performance sem abrir mão do conforto e discrição.',
                        },

                        {
                            name: 'buttontext',
                            type: 'text',
                            required: false,
                            label: 'Texto do botão',
                            defaultValue: 'COMECE SUA TRANSFORMAÇÃO',
                        },

                        {
                            name: 'link',
                            type: 'text',
                            required: false,
                            label: 'Link',

                            admin: {
                                description: 'Opcional. O botão também pode utilizar o WhatsApp principal do site.',
                            },
                        },
                    ],
                },

                // =================================================
                // WHATSAPP
                // =================================================

                {
                    name: 'whatsapp',
                    type: 'group',
                    required: false,
                    label: 'WhatsApp',

                    fields: [
                        {
                            name: 'enabled',
                            type: 'checkbox',
                            required: false,
                            defaultValue: true,
                            label: 'Mostrar WhatsApp',
                        },

                        {
                            name: 'phone',
                            type: 'text',
                            required: false,
                            label: 'Seu WhatsApp',

                            admin: {
                                placeholder: 'Exemplo: 5531999999999',
                                description: 'Digite código do país + DDD + número, sem espaços ou símbolos.',
                            },
                        },

                        {
                            name: 'message',
                            type: 'textarea',
                            required: false,
                            label: 'Mensagem automática',
                            defaultValue: 'Olá! Gostaria de conhecer seu acompanhamento.',
                        },
                    ],
                },
            ],
        },
        // =========================================================
        // TEMPLATE 3 - CLEAN
        // =========================================================

        {
            name: 'template3',
            type: 'group',
            required: false,
            label: 'Template 3 - Clean',

            admin: {
                condition: (_, siblingData) => siblingData?.template === 'template-3',
            },

            fields: [
                // =================================================
                // HERO
                // =================================================

                {
                    name: 'hero',
                    type: 'group',
                    required: false,
                    label: 'Apresentação',

                    admin: {
                        description: 'Personalize a apresentação principal do Template Clean.',
                    },

                    fields: [
                        {
                            name: 'titlePrimary',
                            type: 'text',
                            required: false,
                            label: 'Texto superior',
                            defaultValue: 'PERSONAL TRAINER • PERFORMANCE • SAÚDE • WELLNESS',
                        },
                        {
                            name: 'title',
                            type: 'text',
                            required: false,
                            label: 'Primeira linha do título',
                            defaultValue: 'Seu corpo pode mais.',
                        },
                        {
                            name: 'titleSecondary',
                            type: 'text',
                            required: false,
                            label: 'Segunda linha do título',
                            defaultValue: 'Seu treino pode ser',
                        },
                        {
                            name: 'titleHighlight',
                            type: 'text',
                            required: false,
                            label: 'Texto em destaque',
                            defaultValue: 'diferente.',
                        },
                        {
                            name: 'desc',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                            defaultValue:
                                'Treinos personalizados para construir força, disposição e uma rotina sustentável que realmente funcione na sua vida. Sem extremismos, com precisão biomecânica.',
                        },
                        {
                            name: 'button1text',
                            type: 'text',
                            required: false,
                            label: 'Texto do botão principal',
                            defaultValue: 'COMEÇAR MINHA JORNADA',
                        },
                        {
                            name: 'button1url',
                            type: 'text',
                            required: false,
                            label: 'Link ou número do WhatsApp — botão principal',
                            defaultValue: '#anamnese',
                            admin: {
                                placeholder: 'Ex.: #anamnese, https://... ou 5531999999999',
                            },
                        },
                        {
                            name: 'button2text',
                            type: 'text',
                            required: false,
                            label: 'Texto do botão secundário',
                            defaultValue: 'CONHECER MEU MÉTODO',
                        },
                        {
                            name: 'button2url',
                            type: 'text',
                            required: false,
                            label: 'Link ou número do WhatsApp — botão secundário',
                            defaultValue: '#metodo',
                            admin: {
                                placeholder: 'Ex.: #metodo, https://... ou 5531999999999',
                            },
                        },
                        {
                            name: 'img',
                            type: 'upload',
                            relationTo: 'media',
                            required: false,
                            label: 'Imagem principal',

                            admin: {
                                description: 'Opcional. Se nenhuma imagem for enviada, será utilizada a imagem padrão.',
                            },
                        },

                        {
                            name: 'tags',
                            type: 'array',
                            required: false,
                            minRows: 3,
                            maxRows: 3,
                            defaultValue: [
                                { text: '+120 alunos transformados' },
                                { text: 'Avaliação 4.9' },
                                { text: 'Online + Presencial' },
                            ],
                            admin: {
                                hidden: true,
                            },
                            fields: [
                                {
                                    name: 'text',
                                    type: 'text',
                                    required: false,
                                },
                            ],
                        },

                        {
                            name: 'cardTitle',
                            type: 'text',
                            required: false,
                            label: 'Título sobre a imagem',
                            defaultValue: '100% PERSONALIZADO',
                        },
                        {
                            name: 'cardText',
                            type: 'text',
                            required: false,
                            label: 'Texto sobre a imagem',
                            defaultValue: '+120 ALUNOS TRANSFORMADOS',
                        },
                    ],
                },

                // =================================================
                // UMA NOVA FORMA DE TREINAR
                // =================================================

                {
                    name: 'about',
                    type: 'group',
                    required: false,
                    label: 'Uma nova forma de treinar',

                    fields: [
                        {
                            name: 'eyebrow',
                            type: 'text',
                            required: false,
                            label: 'Texto superior',
                            defaultValue: 'Uma nova forma de treinar',
                        },
                        {
                            name: 'title',
                            type: 'text',
                            required: false,
                            label: 'Título',
                            defaultValue: 'Não é sobre treinar mais',
                        },

                        {
                            name: 'highlightedStart',
                            type: 'text',
                            required: false,
                            label: 'Início da frase — antes do 1º destaque',
                            defaultValue: 'É sobre',
                        },
                        {
                            name: 'highlightedUnderstand',
                            type: 'text',
                            required: false,
                            label: '1ª palavra em destaque — ex.: entender',
                            defaultValue: 'entender',
                        },
                        {
                            name: 'highlightedConstancy',
                            type: 'text',
                            required: false,
                            label: '2ª palavra em destaque — ex.: constância',
                            defaultValue: 'constância',
                        },
                        {
                            name: 'highlightedMovement',
                            type: 'text',
                            required: false,
                            label: '3ª palavra em destaque — ex.: movimento',
                            defaultValue: 'movimento',
                        },
                        {
                            name: 'highlightedLife',
                            type: 'text',
                            required: false,
                            label: '4ª palavra em destaque — ex.: vida',
                            defaultValue: 'vida',
                        },

                        {
                            name: 'description',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                            defaultValue:
                                'Sem metas irreais que te esgotam na terceira semana. Construímos autonomia, força real e longevidade através de ciência do movimento e empatia.',
                        },
                    ],
                },

                // =================================================
                // PROCESSO ESTRUTURADO
                // =================================================

                {
                    name: 'method',
                    type: 'group',
                    required: false,
                    label: 'Processo estruturado',

                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: false,
                            label: 'Título',
                            defaultValue: 'Um método pensado para você.',
                        },
                        {
                            name: 'desc',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                            defaultValue:
                                'Não existem duas rotinas iguais. Por isso, seu treino também não deveria ser igual ao de todo mundo.',
                        },

                        {
                            name: 'cards',
                            type: 'array',
                            required: true,

                            // NÃO PODE TER MENOS NEM MAIS QUE 4
                            minRows: 4,
                            maxRows: 4,

                            label: 'Etapas do processo',

                            defaultValue: [
                                {
                                    title: 'Conhecer',
                                    text: 'Entender sua rotina real, histórico articular, preferências, dores e o tempo efetivo disponível na sua semana.',
                                },
                                {
                                    title: 'Planejar',
                                    text: 'Criar uma estratégia biomecânica customizada: séries, cargas, intensidade e mobilidade adequadas ao seu momento.',
                                },
                                {
                                    title: 'Acompanhar',
                                    text: 'Feedback contínuo e ajustes dinâmicos. A vida oscila e o treino precisa se adaptar às suas semanas boas e difíceis.',
                                },
                                {
                                    title: 'Evoluir',
                                    text: 'Consolidação de força, tônus muscular e postura sustentável. O resultado é consequência da consistência.',
                                },
                            ],

                            admin: {
                                initCollapsed: false,
                                description: 'Existem exatamente quatro etapas. Edite o conteúdo de cada uma.',
                            },

                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: true,
                                    label: 'Título',
                                },
                                {
                                    name: 'text',
                                    type: 'textarea',
                                    required: true,
                                    label: 'Descrição',
                                },
                            ],
                        },
                    ],
                },

                // =================================================
                // PERSONALIZAÇÃO
                // =================================================

                {
                    name: 'personalization',
                    type: 'group',
                    required: false,
                    label: 'Personalização de verdade',

                    fields: [
                        {
                            name: 'eyebrow',
                            type: 'text',
                            required: false,
                            label: 'Texto superior',
                            defaultValue: 'PERSONALIZAÇÃO DE VERDADE',
                        },
                        {
                            name: 'title',
                            type: 'text',
                            required: false,
                            label: 'Título',
                            defaultValue: 'Seu treino ainda não existe.',
                        },
                        {
                            name: 'highlightedTitle',
                            type: 'text',
                            required: false,
                            label: 'Subtítulo',
                            defaultValue: 'Porque primeiro eu preciso conhecer você.',
                        },
                        {
                            name: 'description',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                            defaultValue:
                                'Responda algumas perguntas rápidas para eu entender seu momento atual, limitações, histórico e o que realmente faz sentido para sua rotina.',
                        },
                        {
                            name: 'button2text',
                            type: 'text',
                            required: false,
                            label: 'Texto do botão',
                            defaultValue: 'Quero começar minha avaliação',
                        },
                        {
                            name: 'button2url',
                            type: 'text',
                            required: false,
                            label: 'Link do botão',
                            defaultValue: '#anamnese',
                        },
                    ],
                },

                // =================================================
                // ANAMNESE
                // =================================================

                {
                    name: 'form',
                    type: 'group',
                    required: false,
                    label: 'Anamnese inicial',

                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: false,
                            label: 'Título',
                            defaultValue: 'Vamos conhecer você.',
                        },
                        {
                            name: 'desc',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                            defaultValue: 'Conte um pouco sobre suas medidas básicas:',
                        },
                    ],
                },

                // =================================================
                // FUNDAMENTOS CINÉTICOS
                // =================================================

                {
                    name: 'features',
                    type: 'group',
                    required: false,
                    label: 'Fundamentos cinéticos',

                    fields: [
                        {
                            name: 'img',
                            type: 'upload',
                            relationTo: 'media',
                            required: false,
                            label: 'Imagem',

                            admin: {
                                description: 'Imagem utilizada ao lado dos fundamentos.',
                            },
                        },
                        {
                            name: 'title',
                            type: 'text',
                            required: false,
                            label: 'Título',
                            defaultValue: 'Seu corpo em movimento contínuo.',
                        },

                        {
                            name: 'items',
                            type: 'array',
                            required: true,

                            // EXATAMENTE 4
                            minRows: 4,
                            maxRows: 4,

                            label: 'Fundamentos',

                            defaultValue: [
                                {
                                    title: 'Força Sustentável',
                                    desc: 'A musculatura protege suas articulações, regula o metabolismo e desacelera o envelhecimento ósseo-celular.',
                                },
                                {
                                    title: 'Mobilidade Funcional',
                                    desc: 'Amplitude e liberdade para sentar, agachar, carregar compras e brincar sem dores articulares nas costas.',
                                },
                                {
                                    title: 'Energia & Disposição',
                                    desc: 'Treinar não é para cansar seu dia; é para encher seu dia de clareza mental e vitalidade renovada.',
                                },
                                {
                                    title: 'Constância Real',
                                    desc: 'A rotina que se sustenta ao longo dos anos, respeitando períodos de descanso, trabalho e férias.',
                                },
                            ],

                            admin: {
                                initCollapsed: false,
                                description: 'O Template Clean utiliza exatamente quatro fundamentos.',
                            },

                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: true,
                                    label: 'Título',
                                },
                                {
                                    name: 'desc',
                                    type: 'textarea',
                                    required: true,
                                    label: 'Descrição',
                                },
                            ],
                        },
                    ],
                },

                // =================================================
                // CTA INTERMEDIÁRIO
                // =================================================

                {
                    name: 'motivation',
                    type: 'group',
                    required: false,
                    label: 'Chamada intermediária',

                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: false,
                            label: 'Título',
                            defaultValue: 'Você não precisa estar pronto. Só precisa',
                        },
                        {
                            name: 'highlightedTitle',
                            type: 'text',
                            required: false,
                            label: 'Texto em destaque',
                            defaultValue: 'começar.',
                        },
                        {
                            name: 'description',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                            defaultValue: 'A evolução acontece a cada sessão executada com consciência e paciência.',
                        },
                        {
                            name: 'button2text',
                            type: 'text',
                            required: false,
                            label: 'Texto do botão',
                            defaultValue: 'DAR O PRIMEIRO PASSO',
                        },
                    ],
                },

                // =================================================
                // DEPOIMENTOS
                // =================================================

                {
                    name: 'testimonials',
                    type: 'group',
                    required: false,
                    label: 'Depoimentos',

                    fields: [
                        {
                            name: 'enabled',
                            type: 'checkbox',
                            required: false,
                            defaultValue: true,
                            label: 'Mostrar depoimentos',
                        },
                        {
                            name: 'title',
                            type: 'text',
                            required: false,
                            label: 'Título',
                            defaultValue: 'Quem treina com o método',
                        },

                        {
                            name: 'cards',
                            type: 'array',
                            required: true,

                            // EXATAMENTE 4
                            minRows: 4,
                            maxRows: 4,

                            label: 'Depoimentos',

                            defaultValue: [
                                {
                                    name: 'Mariana Alves',
                                    type: 'Aluna há 2 anos',
                                    desc: 'Eu achava que precisava treinar no limite para ter resultado. Hoje treino com mais consciência, tenho mais força e, principalmente, não sinto mais as dores que faziam parte da minha rotina.',
                                    rating: 5,
                                },
                                {
                                    name: 'Rafael Martins',
                                    type: 'Aluno há 1 ano',
                                    desc: 'O treino se encaixou na minha rotina de verdade. Ganhei disposição para trabalhar, melhor condicionamento e finalmente consegui manter constância sem transformar a academia em uma obrigação.',
                                    rating: 5,
                                },
                                {
                                    name: 'Camila Ferreira',
                                    type: 'Aluna há 8 meses',
                                    desc: 'Comecei buscando mudança estética, mas encontrei muito mais. Hoje me sinto mais forte, tenho mais mobilidade e percebo a diferença da atividade física em praticamente tudo que faço.',
                                    rating: 5,
                                },
                                {
                                    name: 'Lucas Ribeiro',
                                    type: 'Aluno há 1 ano e 6 meses',
                                    desc: 'Pela primeira vez consegui construir uma rotina de treino que não abandono depois de algumas semanas. O acompanhamento e os ajustes fizeram toda a diferença na minha evolução.',
                                    rating: 5,
                                },
                            ],

                            admin: {
                                initCollapsed: false,
                                description: 'O Template Clean utiliza exatamente quatro depoimentos.',
                            },

                            fields: [
                                {
                                    name: 'name',
                                    type: 'text',
                                    required: true,
                                    label: 'Nome',
                                },
                                {
                                    name: 'type',
                                    type: 'text',
                                    required: true,
                                    label: 'Informação',

                                    admin: {
                                        placeholder: 'Exemplo: Aluna há 2 anos',
                                    },
                                },
                                {
                                    name: 'desc',
                                    type: 'textarea',
                                    required: true,
                                    label: 'Depoimento',
                                },
                                {
                                    name: 'rating',
                                    type: 'number',
                                    required: false,
                                    defaultValue: 5,
                                    min: 1,
                                    max: 5,
                                    label: 'Avaliação',
                                },
                                {
                                    name: 'avatar',
                                    type: 'upload',
                                    relationTo: 'media',
                                    required: false,
                                    label: 'Foto do aluno',
                                },
                            ],
                        },
                    ],
                },

                // =================================================
                // SINTONIA E PROPÓSITO
                // =================================================

                {
                    name: 'feelings',
                    type: 'group',
                    required: false,
                    label: 'Sintonia e propósito',

                    fields: [
                        {
                            name: 'eyebrow',
                            type: 'text',
                            required: false,
                            label: 'Texto superior',
                            defaultValue: 'SINTONIA E PROPÓSITO',
                        },
                        {
                            name: 'title',
                            type: 'text',
                            required: false,
                            label: 'Título',
                            defaultValue: 'Como você quer se sentir?',
                        },
                        {
                            name: 'description',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                            defaultValue: 'Clique nos sentimentos abaixo para descobrir o caminho de treino ideal:',
                        },

                        {
                            name: 'defaultFeeling',
                            type: 'select',
                            required: false,
                            label: 'Sentimento selecionado inicialmente',
                            defaultValue: 'LEVE',

                            options: [
                                {
                                    label: 'Forte',
                                    value: 'FORTE',
                                },
                                {
                                    label: 'Disposto',
                                    value: 'DISPOSTO',
                                },
                                {
                                    label: 'Confiante',
                                    value: 'CONFIANTE',
                                },
                                {
                                    label: 'Leve',
                                    value: 'LEVE',
                                },
                                {
                                    label: 'Ativo',
                                    value: 'ATIVO',
                                },
                                {
                                    label: 'Saudável',
                                    value: 'SAUDÁVEL',
                                },
                                {
                                    label: 'Capaz',
                                    value: 'CAPAZ',
                                },
                            ],
                        },

                        // =========================================
                        // FORTE
                        // =========================================

                        {
                            name: 'forte',
                            type: 'group',
                            label: 'FORTE',

                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: false,
                                    label: 'Título',
                                    defaultValue: 'SENTIR-SE FORTE',
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    required: false,
                                    label: 'Descrição',
                                    defaultValue:
                                        'Construir força para realizar as tarefas do dia a dia com mais segurança, autonomia e confiança.',
                                },
                            ],
                        },

                        // =========================================
                        // DISPOSTO
                        // =========================================

                        {
                            name: 'disposto',
                            type: 'group',
                            label: 'DISPOSTO',

                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: false,
                                    label: 'Título',
                                    defaultValue: 'SENTIR-SE DISPOSTO',
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    required: false,
                                    label: 'Descrição',
                                    defaultValue:
                                        'Recuperar a energia para enfrentar uma rotina intensa sem terminar o dia completamente esgotado.',
                                },
                            ],
                        },

                        // =========================================
                        // CONFIANTE
                        // =========================================

                        {
                            name: 'confiante',
                            type: 'group',
                            label: 'CONFIANTE',

                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: false,
                                    label: 'Título',
                                    defaultValue: 'SENTIR-SE CONFIANTE',
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    required: false,
                                    label: 'Descrição',
                                    defaultValue:
                                        'Desenvolver consciência corporal e segurança para se movimentar melhor dentro e fora do treino.',
                                },
                            ],
                        },

                        // =========================================
                        // LEVE
                        // =========================================

                        {
                            name: 'leve',
                            type: 'group',
                            label: 'LEVE',

                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: false,
                                    label: 'Título',
                                    defaultValue: 'SENTIR-SE LEVE',
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    required: false,
                                    label: 'Descrição',
                                    defaultValue:
                                        'Aliviar tensões acumuladas nos ombros e trapézio através de soltura e mobilidade direcionada.',
                                },
                            ],
                        },

                        // =========================================
                        // ATIVO
                        // =========================================

                        {
                            name: 'ativo',
                            type: 'group',
                            label: 'ATIVO',

                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: false,
                                    label: 'Título',
                                    defaultValue: 'SENTIR-SE ATIVO',
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    required: false,
                                    label: 'Descrição',
                                    defaultValue:
                                        'Manter o corpo em movimento com uma rotina de exercícios possível, prazerosa e consistente.',
                                },
                            ],
                        },

                        // =========================================
                        // SAUDÁVEL
                        // =========================================

                        {
                            name: 'saudavel',
                            type: 'group',
                            label: 'SAUDÁVEL',

                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: false,
                                    label: 'Título',
                                    defaultValue: 'SENTIR-SE SAUDÁVEL',
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    required: false,
                                    label: 'Descrição',
                                    defaultValue:
                                        'Criar hábitos de movimento que contribuam para sua saúde, bem-estar e qualidade de vida a longo prazo.',
                                },
                            ],
                        },

                        // =========================================
                        // CAPAZ
                        // =========================================

                        {
                            name: 'capaz',
                            type: 'group',
                            label: 'CAPAZ',

                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: false,
                                    label: 'Título',
                                    defaultValue: 'SENTIR-SE CAPAZ',
                                },
                                {
                                    name: 'description',
                                    type: 'textarea',
                                    required: false,
                                    label: 'Descrição',
                                    defaultValue:
                                        'Conquistar mais mobilidade, resistência e independência para fazer o que você gosta sem medo ou limitações.',
                                },
                            ],
                        },
                    ],
                },

                // =================================================
                // CONTATO
                // =================================================

                {
                    name: 'contact',
                    type: 'group',
                    required: false,
                    label: 'Próximo passo',

                    fields: [
                        {
                            name: 'eyebrow',
                            type: 'text',
                            required: false,
                            label: 'Texto superior',
                            defaultValue: 'PRÓXIMO PASSO',
                        },
                        {
                            name: 'title',
                            type: 'textarea',
                            required: false,
                            label: 'Título',
                            defaultValue: 'Vamos construir uma rotina que realmente funcione para você?',
                        },
                        {
                            name: 'description',
                            type: 'textarea',
                            required: false,
                            label: 'Descrição',
                            defaultValue:
                                'Preencha a breve anamnese ou mande uma mensagem direta no WhatsApp para alinharmos seu formato ideal.',
                        },
                        {
                            name: 'primaryButtonText',
                            type: 'text',
                            required: false,
                            label: 'Botão da anamnese',
                            defaultValue: 'PREENCHER ANAMNESE INICIAL',
                        },
                        {
                            name: 'primaryButtonHref',
                            type: 'text',
                            required: false,
                            label: 'Link da anamnese ou número do WhatsApp',
                            defaultValue: '#anamnese',
                            admin: {
                                placeholder: 'Ex.: #anamnese, https://... ou 5531999999999',
                            },
                        },
                        {
                            name: 'secondaryButtonText',
                            type: 'text',
                            required: false,
                            label: 'Botão do WhatsApp',
                            defaultValue: 'CONVERSAR NO WHATSAPP',
                        },
                        {
                            name: 'secondaryButtonHref',
                            type: 'text',
                            required: false,
                            label: 'Link ou número do WhatsApp',
                            defaultValue: '',
                            admin: {
                                placeholder: 'Ex.: 5531999999999 ou https://wa.me/...',
                                description: 'Se ficar vazio, o botão usa o número configurado na seção WhatsApp.',
                            },
                        },
                    ],
                },

                // =================================================
                // WHATSAPP
                // =================================================

                {
                    name: 'whatsapp',
                    type: 'group',
                    required: false,
                    label: 'WhatsApp',

                    fields: [
                        {
                            name: 'enabled',
                            type: 'checkbox',
                            required: false,
                            defaultValue: true,
                            label: 'Mostrar WhatsApp',
                        },
                        {
                            name: 'phone',
                            type: 'text',
                            required: false,
                            label: 'Seu WhatsApp',

                            admin: {
                                placeholder: 'Exemplo: 5531999999999',
                                description: 'Digite código do país + DDD + número, sem espaços ou símbolos.',
                            },
                        },
                        {
                            name: 'message',
                            type: 'textarea',
                            required: false,
                            label: 'Mensagem automática',
                            defaultValue: 'Olá! Gostaria de conhecer seu acompanhamento.',
                        },
                    ],
                },
            ],
        },
    ],
}
