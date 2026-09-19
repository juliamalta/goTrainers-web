import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'

import config from '../../../../payload.config'

export async function POST(request: NextRequest) {
    try {
        const { fullName, age, height, weight, goal, routine, daysPerWeek, experience, healthNotes, email, phone } =
            await request.json()

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

        const payload = await getPayload({ config })
        const lead = await payload.create({
            collection: 'anamnesis-leads',
            data: {
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
