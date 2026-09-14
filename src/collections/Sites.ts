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
        {
            name: 'name',
            type: 'text',
            required: true,
            label: 'Nome do site',

            admin: {
                position: 'sidebar',
                placeholder: 'Exemplo: Lucas Andrade Personal',
            },
        },

        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            label: 'Usuário',

            admin: {
                position: 'sidebar',
                description: 'Usuário responsável por este site.',
            },
        },

        {
            name: 'template',
            type: 'select',
            required: true,
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
            label: 'Slug',

            admin: {
                position: 'sidebar',
                placeholder: 'Exemplo: lucas-andrade',
                description: 'Endereço usado para acessar o site. Exemplo: /personal/lucas-andrade',
            },
        },

        {
            name: 'published',
            type: 'checkbox',
            required: true,
            defaultValue: false,
            label: 'Site publicado',

            admin: {
                position: 'sidebar',
            },
        },

        {
            name: 'template1',
            type: 'group',
            required: true,
            label: 'Template 1',

            fields: [
                {
                    name: 'hero',
                    type: 'group',
                    required: true,
                    label: 'Hero',

                    fields: [
                        {
                            name: 'titlePrimary',
                            type: 'text',
                            required: true,
                            label: 'Texto superior',

                            admin: {
                                placeholder: 'Exemplo: TREINE COM PROPÓSITO. EVOLUA DE VERDADE.',
                            },
                        },

                        {
                            name: 'title',
                            type: 'textarea',
                            required: true,
                            label: 'Título principal',

                            admin: {
                                placeholder: 'Exemplo: Seu corpo mais forte começa com',
                            },
                        },

                        {
                            name: 'titleHighlight',
                            type: 'text',
                            required: true,
                            label: 'Texto colorido em destaque',

                            admin: {
                                placeholder: 'Exemplo: a decisão de começar.',
                            },
                        },

                        {
                            name: 'desc',
                            type: 'textarea',
                            required: true,
                            label: 'Descrição',

                            admin: {
                                placeholder:
                                    'Exemplo: Treinos personalizados para quem busca mais força, disposição e qualidade de vida.',
                            },
                        },

                        {
                            name: 'button1text',
                            type: 'text',
                            required: true,
                            label: 'Texto do botão',

                            admin: {
                                placeholder: 'Exemplo: Começar agora',
                            },
                        },

                        {
                            name: 'button1url',
                            type: 'text',
                            required: true,
                            label: 'Link do botão',

                            admin: {
                                placeholder: 'Exemplo: #contato',
                            },
                        },

                        {
                            name: 'img',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
                            label: 'Imagem do Hero',

                            admin: {
                                description: 'Escolha a imagem principal que aparecerá no Hero.',
                            },
                        },
                    ],
                },

                {
                    name: 'metrics',
                    type: 'array',
                    required: true,
                    minRows: 4,
                    maxRows: 4,
                    label: 'Métricas',

                    defaultValue: [{}, {}, {}, {}],

                    admin: {
                        initCollapsed: false,
                        description: 'O Template 1 utiliza exatamente 4 métricas.',
                    },

                    fields: [
                        {
                            name: 'number',
                            type: 'text',
                            required: true,
                            label: 'Número',

                            admin: {
                                placeholder: 'Exemplo: 320',
                                description: 'Exemplos: 8, 480, 4.9 ou 1mil.',
                            },
                        },

                        {
                            name: 'text',
                            type: 'text',
                            required: true,
                            label: 'Texto',

                            admin: {
                                placeholder: 'Exemplo: Alunos acompanhados',
                            },
                        },
                    ],
                },

                {
                    name: 'services',
                    type: 'group',
                    required: true,
                    label: 'Serviços',

                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                            label: 'Título',

                            admin: {
                                placeholder: 'Exemplo: Escolha seu próximo nível',
                            },
                        },

                        {
                            name: 'desc',
                            type: 'textarea',
                            required: true,
                            label: 'Descrição',

                            admin: {
                                placeholder:
                                    'Exemplo: Planos de treinamento pensados para diferentes objetivos, níveis e rotinas.',
                            },
                        },

                        {
                            name: 'cards',
                            type: 'array',
                            required: true,
                            minRows: 3,
                            maxRows: 3,
                            label: 'Cards de serviços',

                            defaultValue: [{}, {}, {}],

                            admin: {
                                initCollapsed: false,
                                description: 'O Template 1 utiliza exatamente 3 serviços.',
                            },

                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: true,
                                    label: 'Título',

                                    admin: {
                                        placeholder: 'Exemplo: Treino Personalizado',
                                    },
                                },

                                {
                                    name: 'desc',
                                    type: 'text',
                                    required: true,
                                    label: 'Descrição curta',

                                    admin: {
                                        placeholder: 'Exemplo: Um plano feito para você',
                                    },
                                },

                                {
                                    name: 'text',
                                    type: 'textarea',
                                    required: true,
                                    label: 'Texto',

                                    admin: {
                                        placeholder:
                                            'Exemplo: Treinamentos planejados de acordo com seus objetivos, condicionamento físico e disponibilidade.',
                                    },
                                },

                                {
                                    name: 'price',
                                    type: 'text',
                                    required: false,
                                    label: 'Preço',

                                    admin: {
                                        placeholder: 'Exemplo: R$ 199,90/mês',
                                    },
                                },

                                {
                                    name: 'option',
                                    type: 'array',
                                    required: false,
                                    maxRows: 4,
                                    label: 'Opções do plano',

                                    admin: {
                                        initCollapsed: false,
                                        description:
                                            'Opcional. Se adicionar uma opção, é obrigatório preencher exatamente 4 opções.',
                                    },

                                    validate: (value) => {
                                        if (!value || value.length === 0) {
                                            return true
                                        }

                                        if (value.length !== 4) {
                                            return 'Se adicionar opções, é obrigatório preencher exatamente 4 opções.'
                                        }

                                        return true
                                    },

                                    fields: [
                                        {
                                            name: 'text',
                                            type: 'text',
                                            required: true,
                                            label: 'Opção',

                                            admin: {
                                                placeholder: 'Exemplo: Treino personalizado',
                                            },
                                        },
                                    ],
                                },

                                {
                                    name: 'link',
                                    type: 'text',
                                    required: false,
                                    label: 'Link do WhatsApp',

                                    admin: {
                                        placeholder: 'Exemplo: https://wa.me/5531999999999',
                                        description: 'Link que será aberto ao clicar em Escolher Plano.',
                                    },
                                },

                                {
                                    name: 'featured',
                                    type: 'checkbox',
                                    required: true,
                                    defaultValue: false,
                                    label: 'Destacado',
                                },
                            ],
                        },
                    ],
                },

                {
                    name: 'about',
                    type: 'group',
                    required: true,
                    label: 'Sobre o profissional',

                    fields: [
                        {
                            name: 'img',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
                            label: 'Imagem',

                            admin: {
                                description: 'Imagem que aparecerá na seção sobre você.',
                            },
                        },

                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                            label: 'Título',

                            admin: {
                                placeholder: 'Exemplo: Treinamento inteligente para uma evolução consistente',
                            },
                        },

                        {
                            name: 'desc',
                            type: 'textarea',
                            required: true,
                            label: 'Descrição',

                            admin: {
                                placeholder:
                                    'Exemplo: Acredito que um bom treinamento precisa fazer sentido para a rotina de cada pessoa.',
                            },
                        },

                        {
                            name: 'features',
                            type: 'array',
                            required: true,
                            minRows: 4,
                            maxRows: 4,
                            label: 'Diferenciais',

                            defaultValue: [{}, {}, {}, {}],

                            admin: {
                                initCollapsed: false,
                                description: 'O Template 1 utiliza exatamente 4 diferenciais.',
                            },

                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: true,
                                    label: 'Diferencial',

                                    admin: {
                                        placeholder: 'Exemplo: Planos adaptados aos seus objetivos',
                                    },
                                },
                            ],
                        },
                    ],
                },

                {
                    name: 'testimonials',
                    type: 'group',
                    required: true,
                    label: 'Depoimentos',

                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                            label: 'Título',

                            admin: {
                                placeholder: 'Exemplo: Resultados que motivam',
                            },
                        },

                        {
                            name: 'desc',
                            type: 'textarea',
                            required: true,
                            label: 'Descrição',

                            admin: {
                                placeholder:
                                    'Exemplo: Confira a experiência de quem decidiu começar e manteve o compromisso com sua evolução.',
                            },
                        },

                        {
                            name: 'cards',
                            type: 'array',
                            required: true,
                            minRows: 4,
                            maxRows: 4,
                            label: 'Depoimentos',

                            defaultValue: [{}, {}, {}, {}],

                            admin: {
                                initCollapsed: false,
                                description: 'O Template 1 utiliza exatamente 4 depoimentos.',
                            },

                            fields: [
                                {
                                    name: 'name',
                                    type: 'text',
                                    required: true,
                                    label: 'Nome',

                                    admin: {
                                        placeholder: 'Exemplo: Ana Beatriz',
                                    },
                                },

                                {
                                    name: 'text',
                                    type: 'textarea',
                                    required: true,
                                    label: 'Depoimento',

                                    admin: {
                                        placeholder:
                                            'Exemplo: Comecei sem muita confiança e hoje consigo treinar com muito mais segurança.',
                                    },
                                },
                            ],
                        },
                    ],
                },

                {
                    name: 'contact',
                    type: 'group',
                    required: true,
                    label: 'Contato',

                    fields: [
                        {
                            name: 'title',
                            type: 'textarea',
                            required: true,
                            label: 'Título',

                            admin: {
                                placeholder: 'Exemplo: Pronto para começar sua evolução?',
                            },
                        },

                        {
                            name: 'titleHighlight',
                            type: 'text',
                            required: true,
                            label: 'Texto destacado',

                            admin: {
                                placeholder: 'Exemplo: Vamos treinar juntos.',
                            },
                        },

                        {
                            name: 'text',
                            type: 'textarea',
                            required: true,
                            label: 'Texto',

                            admin: {
                                placeholder:
                                    'Exemplo: Me conte quais são seus objetivos e vamos encontrar a melhor estratégia.',
                            },
                        },

                        {
                            name: 'buttontext',
                            type: 'text',
                            required: true,
                            label: 'Texto do botão',

                            admin: {
                                placeholder: 'Exemplo: Quero começar',
                            },
                        },

                        {
                            name: 'buttonurl',
                            type: 'text',
                            required: true,
                            label: 'Link do botão',

                            admin: {
                                placeholder: 'Exemplo: https://wa.me/5531999999999',
                            },
                        },
                    ],
                },

                {
                    name: 'whatsapp',
                    type: 'group',
                    required: true,
                    label: 'WhatsApp',

                    fields: [
                        {
                            name: 'enabled',
                            type: 'checkbox',
                            required: true,
                            defaultValue: true,
                            label: 'Mostrar WhatsApp',
                        },

                        {
                            name: 'phone',
                            type: 'text',
                            required: true,
                            label: 'Número do WhatsApp',

                            admin: {
                                placeholder: 'Exemplo: 5531999999999',
                                description: 'Coloque o número com código do país e DDD, sem espaços ou símbolos.',
                            },
                        },

                        {
                            name: 'message',
                            type: 'textarea',
                            required: true,
                            label: 'Mensagem automática',

                            admin: {
                                placeholder: 'Exemplo: Olá! Vi seu site e gostaria de saber mais sobre seus serviços.',
                            },
                        },
                    ],
                },
            ],
        },
    ],
}
