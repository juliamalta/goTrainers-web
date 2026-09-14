import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
    slug: 'users',

    auth: true,

    admin: {
        useAsTitle: 'name',
    },

    access: {
        create: () => true,
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
    ],
}
