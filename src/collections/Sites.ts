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

                                    admin: {
                                        placeholder: 'Exemplo: Consultoria Online',
                                    },
                                },

                                {
                                    name: 'desc',
                                    type: 'text',
                                    required: false,
                                    label: 'Descrição curta',

                                    admin: {
                                        placeholder: 'Exemplo: Treine onde estiver',
                                    },
                                },

                                {
                                    name: 'text',
                                    type: 'textarea',
                                    required: false,
                                    label: 'Descrição',

                                    admin: {
                                        placeholder: 'Explique rapidamente como funciona esse serviço.',
                                    },
                                },

                                {
                                    name: 'price',
                                    type: 'text',
                                    required: false,
                                    label: 'Preço',

                                    admin: {
                                        placeholder: 'Exemplo: R$ 299,90/mês',

                                        description: 'Opcional. Deixe vazio se não quiser mostrar o preço.',
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
                                        description: 'Opcional. Você pode mostrar até quatro benefícios.',
                                    },

                                    fields: [
                                        {
                                            name: 'text',
                                            type: 'text',
                                            required: false,
                                            label: 'Benefício',

                                            admin: {
                                                placeholder: 'Exemplo: Acompanhamento personalizado',
                                            },
                                        },
                                    ],
                                },

                                {
                                    name: 'link',
                                    type: 'text',
                                    required: false,
                                    label: 'Link do serviço',

                                    admin: {
                                        description:
                                            'Opcional. Se não preencher, você pode usar o WhatsApp principal do site.',
                                    },
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

                    admin: {
                        description: 'Já criamos uma apresentação profissional. Personalize se quiser.',
                    },

                    fields: [
                        {
                            name: 'img',
                            type: 'upload',
                            relationTo: 'media',
                            required: false,
                            label: 'Sua foto',

                            admin: {
                                description:
                                    'Opcional. Se nenhuma foto for enviada, usamos a imagem padrão do template.',
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

                            admin: {
                                initCollapsed: false,
                                description: 'Já deixamos quatro diferenciais preenchidos. Altere apenas se quiser.',
                            },

                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: false,
                                    label: 'Diferencial',

                                    admin: {
                                        placeholder: 'Exemplo: Atendimento personalizado para cada cliente',
                                    },
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

                    admin: {
                        description:
                            'Já deixamos depoimentos de exemplo para o template aparecer completo. Você pode alterar ou remover quando quiser.',
                    },

                    fields: [
                        {
                            name: 'enabled',
                            type: 'checkbox',
                            required: false,
                            defaultValue: true,
                            label: 'Mostrar depoimentos',

                            admin: {
                                description: 'Desative caso não queira mostrar essa seção.',
                            },
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

                            admin: {
                                initCollapsed: false,
                                description:
                                    'Esses são textos de exemplo. Substitua pelos depoimentos reais dos seus clientes.',
                            },

                            fields: [
                                {
                                    name: 'name',
                                    type: 'text',
                                    required: false,
                                    label: 'Nome',

                                    admin: {
                                        placeholder: 'Exemplo: Mariana Costa',
                                    },
                                },

                                {
                                    name: 'text',
                                    type: 'textarea',
                                    required: false,
                                    label: 'Depoimento',

                                    admin: {
                                        placeholder: 'Cole aqui o depoimento enviado pelo cliente.',
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

                    admin: {
                        description: 'Essa chamada já está pronta. Altere apenas se quiser.',
                    },

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
                            defaultValue: 'Olá! Vi seu site e gostaria de saber mais sobre seus serviços.',

                            admin: {
                                description:
                                    'Essa mensagem será preenchida automaticamente quando alguém entrar em contato.',
                            },
                        },
                    ],
                },
            ],
        },
    ],
}
