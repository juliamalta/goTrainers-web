import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'

import config from '../../../../payload.config'

export async function POST(request: NextRequest) {
    try {
        const {
            fullName,
            age,
            height,
            weight,
            goal,
            routine,
            daysPerWeek,
            experience,
            healthNotes,
            email,
            phone,
            siteId,
        } = await request.json()

        const fields = [
            fullName,
            age,
            height,
            weight,
            goal,
            routine,
            daysPerWeek,
            experience,
            healthNotes,
            email,
            phone,
        ]

        if (!fields.every((value) => typeof value === 'string' && value.trim())) {
            return NextResponse.json({ message: 'Preencha todos os campos obrigatórios.' }, { status: 400 })
        }

        if (typeof siteId !== 'string' || !siteId.trim()) {
            return NextResponse.json({ message: 'Site de origem não informado.' }, { status: 400 })
        }

        const payload = await getPayload({ config })
        const site = await payload.findByID({ collection: 'sites', id: siteId, overrideAccess: true })

        if (!site || site.template !== 'template-3' || !site.published) {
            return NextResponse.json({ message: 'Site de origem inválido.' }, { status: 400 })
        }

        const lead = await payload.create({
            collection: 'anamnesis-leads',
            data: {
                site: site.id,
                fullName: fullName.trim(),
                age: age.trim(),
                height: height.trim(),
                weight: weight.trim(),
                goal: goal.trim(),
                routine: routine.trim(),
                daysPerWeek: daysPerWeek.trim(),
                experience: experience.trim(),
                healthNotes: healthNotes.trim(),
                email: email.trim(),
                phone: phone.trim(),
                source: 'template3',
            },
        })

        return NextResponse.json(lead, { status: 201 })
    } catch (error) {
        console.error('Erro ao salvar anamnese:', error)
        return NextResponse.json({ message: 'Não foi possível salvar seus dados.' }, { status: 500 })
    }
}

export async function GET(request: NextRequest) {
    try {
        const payload = await getPayload({ config })
        const authResult = await payload.auth({ headers: request.headers })

        if (!authResult.user) {
            return NextResponse.json({ message: 'Você precisa estar logado.' }, { status: 401 })
        }

        const sites = await payload.find({
            collection: 'sites',
            where: { user: { equals: authResult.user.id } },
            limit: 100,
            depth: 0,
        })
        const siteIds = sites.docs.filter((site) => site.template === 'template-3').map((site) => site.id)

        if (!siteIds.length) return NextResponse.json({ docs: [], totalDocs: 0 })

        const leads = await payload.find({
            collection: 'anamnesis-leads',
            where: {
                and: [{ site: { in: siteIds } }, { source: { equals: 'template3' } }],
            },
            sort: '-createdAt',
            limit: 100,
            depth: 0,
            overrideAccess: true,
        })

        return NextResponse.json(leads)
    } catch (error) {
        console.error('Erro ao buscar anamneses:', error)
        return NextResponse.json({ message: 'Não foi possível buscar as anamneses.' }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const id = new URL(request.url).searchParams.get('id')

        if (!id) return NextResponse.json({ message: 'Resposta não informada.' }, { status: 400 })

        const payload = await getPayload({ config })
        const authResult = await payload.auth({ headers: request.headers })

        if (!authResult.user) {
            return NextResponse.json({ message: 'Você precisa estar logado.' }, { status: 401 })
        }

        const lead = await payload.findByID({ collection: 'anamnesis-leads', id, depth: 0, overrideAccess: true })
        if (!lead) return NextResponse.json({ message: 'Resposta não encontrada.' }, { status: 404 })

        const siteId = typeof lead.site === 'object' ? lead.site.id : lead.site
        const site = await payload.findByID({ collection: 'sites', id: siteId, depth: 0, overrideAccess: true })

        const siteUserId = site?.user && typeof site.user === 'object' ? site.user.id : site?.user

        if (!site || String(siteUserId) !== String(authResult.user.id)) {
            return NextResponse.json({ message: 'Você não tem permissão para excluir esta resposta.' }, { status: 403 })
        }

        await payload.delete({ collection: 'anamnesis-leads', id, overrideAccess: true })
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Erro ao excluir anamnese:', error)
        return NextResponse.json({ message: 'Não foi possível excluir a anamnese.' }, { status: 500 })
    }
}
