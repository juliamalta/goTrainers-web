import { buildConfig } from 'payload'

import { mongooseAdapter } from '@payloadcms/db-mongodb'

import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Users } from './src/collections/Users'

export default buildConfig({
    secret: process.env.PAYLOAD_SECRET || 'dev-secret',

    editor: lexicalEditor(),

    db: mongooseAdapter({
        url: process.env.DATABASE_URL || '',
    }),

    collections: [Users],
})
