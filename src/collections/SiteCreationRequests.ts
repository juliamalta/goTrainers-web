import type { CollectionConfig } from 'payload'

export const SiteCreationRequests: CollectionConfig = {
    slug: 'site-creation-requests',

    admin: {
        useAsTitle: 'fullName',
        defaultColumns: ['fullName', 'email', 'phone', 'template', 'status', 'createdAt'],
    },

    access: {
        create: ({ req }) => Boolean(req.user),
        read: ({ req }) => Boolean(req.user),
        update: ({ req }) => Boolean(req.user),
        delete: ({ req }) => Boolean(req.user),
    },

    fields: [
        { name: 'fullName', type: 'text', required: true, label: 'Nome completo' },
        { name: 'email', type: 'email', required: true, label: 'E-mail' },
        { name: 'phone', type: 'text', required: true, label: 'WhatsApp / telefone' },
        { name: 'template', type: 'text', required: true, label: 'Template escolhido' },
        {
            name: 'message',
            type: 'textarea',
            required: false,
            label: 'Como podemos ajudar?',
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: 'pending',
            options: [
                { label: 'Pendente', value: 'pending' },
                { label: 'Em contato', value: 'contacted' },
                { label: 'Concluído', value: 'completed' },
            ],
        },
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            admin: { readOnly: true },
        },
    ],
}
