import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
    slug: 'media',

    access: {
        read: () => true,
        create: ({ req }) => Boolean(req.user),
        update: ({ req }) => Boolean(req.user),
        delete: ({ req }) => Boolean(req.user),
    },

    upload: {
        staticDir: 'media',

        mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/avif'],
    },

    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
            label: 'Texto alternativo',
        },
    ],
}
