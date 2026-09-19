import type { CollectionConfig } from 'payload'

export const AnamnesisLeads: CollectionConfig = {
    slug: 'anamnesis-leads',

    admin: {
        useAsTitle: 'fullName',
        defaultColumns: ['fullName', 'age', 'height', 'weight', 'createdAt'],
    },

    access: {
        create: () => true,
        read: ({ req }) => Boolean(req.user),
        update: ({ req }) => Boolean(req.user),
        delete: ({ req }) => Boolean(req.user),
    },

    fields: [
        {
            name: 'fullName',
            type: 'text',
            required: true,
            label: 'Nome completo',
        },
        {
            name: 'age',
            type: 'text',
            required: true,
            label: 'Idade',
        },
        {
            name: 'height',
            type: 'text',
            required: true,
            label: 'Altura (cm)',
        },
        {
            name: 'weight',
            type: 'text',
            required: true,
            label: 'Peso aproximado (kg)',
        },
        {
            name: 'goal',
            type: 'textarea',
            required: true,
            label: 'Objetivo',
        },
        {
            name: 'routine',
            type: 'text',
            required: true,
            label: 'Nível de atividade',
        },
        {
            name: 'daysPerWeek',
            type: 'text',
            required: true,
            label: 'Dias disponíveis por semana',
        },
        {
            name: 'experience',
            type: 'text',
            required: true,
            label: 'Experiência de treino',
        },
        {
            name: 'healthNotes',
            type: 'textarea',
            required: true,
            label: 'Saúde e limitações',
        },
        {
            name: 'email',
            type: 'email',
            required: true,
            label: 'E-mail',
        },
        {
            name: 'phone',
            type: 'text',
            required: true,
            label: 'WhatsApp',
        },
        {
            name: 'source',
            type: 'text',
            required: false,
            defaultValue: 'template3',
            admin: {
                readOnly: true,
            },
        },
    ],
}
