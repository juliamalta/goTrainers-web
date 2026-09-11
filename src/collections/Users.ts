import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
    slug: 'users',

    auth: true,

    admin: {
        useAsTitle: 'name',
    },

    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            label: 'Nome',
        },
        {
            name: 'whatsapp',
            type: 'text',
            required: true,
            label: 'WhatsApp',
        },
        {
            name: 'cpf',
            type: 'text',
            required: false,
            label: 'CPF',
        },
        {
            name: 'cref',
            type: 'text',
            required: false,
            label: 'CREF',
        },
        {
            name: 'plan',
            type: 'select',
            required: true,
            defaultValue: 'starter',
            label: 'Plano',
            options: [
                {
                    label: 'Starter',
                    value: 'starter',
                },
                {
                    label: 'Pro',
                    value: 'pro',
                },
            ],
        },
    ],
}
