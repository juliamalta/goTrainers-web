import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig } from 'payload'

import { AnamnesisLeads } from './src/collections/AnamnesisLeads'
import { Media } from './src/collections/Media'
import { SiteCreationRequests } from './src/collections/SiteCreationRequests'
import { Sites } from './src/collections/Sites'
import { Users } from './src/collections/Users'

const payloadSecret = process.env.PAYLOAD_SECRET

if (process.env.NODE_ENV === 'production' && (!payloadSecret || payloadSecret.length < 32)) {
    throw new Error('PAYLOAD_SECRET must be configured with at least 32 characters in production.')
}

export default buildConfig({
    // The development fallback is never accepted in production.
    secret: payloadSecret || 'dev-secret',

    editor: lexicalEditor(),

    db: mongooseAdapter({
        url: process.env.DATABASE_URL || '',
    }),

    collections: [Users, Media, Sites, AnamnesisLeads, SiteCreationRequests],

    plugins: [
        vercelBlobStorage({
            // Use o armazenamento local durante o desenvolvimento. No deploy,
            // o Blob assume o controle quando o token estiver configurado.
            enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
            addRandomSuffix: true,

            collections: {
                media: true,
            },

            token: process.env.BLOB_READ_WRITE_TOKEN,
        }),
    ],
})
