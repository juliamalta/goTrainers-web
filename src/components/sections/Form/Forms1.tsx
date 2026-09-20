'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { type FormEvent, type ReactNode, useState } from 'react'

import { FormsProps } from '@/components/sections/Form/Forms.types'
import { Button } from '@/components/ui/button'

const steps = ['Você', 'Objetivos', 'Rotina', 'Experiência', 'Saúde', 'Contato']

const requiredByStep = [
    ['fullName', 'age', 'height', 'weight'],
    ['goal'],
    ['routine', 'daysPerWeek'],
    ['experience'],
    ['healthNotes'],
    ['email', 'phone'],
] as const

export function Forms1({ title, desc, siteId }: FormsProps) {
    const [step, setStep] = useState(0)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [values, setValues] = useState({
        fullName: '',
        age: '',
        height: '',
        weight: '',
        goal: '',
        routine: '',
        daysPerWeek: '',
        experience: '',
        healthNotes: '',
        email: '',
        phone: '',
    })

    const fieldClass =
        'h-14 w-full rounded-2xl border-0 bg-color-softgray px-4 text-color-forest placeholder:text-color-forest/45 focus:outline-none focus:ring-2 focus:ring-color-forest'
    const textareaClass = `${fieldClass} h-28 py-4 resize-y`

    const update = (field: keyof typeof values, value: string) =>
        setValues((current) => ({ ...current, [field]: value }))

    const validateCurrentStep = () => {
        const hasEmptyField = requiredByStep[step].some((field) => !values[field].trim())

        if (hasEmptyField) {
            setError('Preencha os campos obrigatórios para continuar.')
            return false
        }

        setError('')
        return true
    }

    const nextStep = () => {
        if (validateCurrentStep()) setStep((current) => Math.min(current + 1, steps.length - 1))
    }

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (step < steps.length - 1) {
            nextStep()
            return
        }

        if (!validateCurrentStep()) return

        setIsSubmitting(true)
        try {
            const response = await fetch('/api/anamnesis', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...values, siteId }),
            })

            if (!response.ok) throw new Error('Não foi possível salvar seus dados.')

            setSubmitted(true)
        } catch (submitError) {
            setError(submitError instanceof Error ? submitError.message : 'Não foi possível salvar seus dados.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="anamnese" className="bg-color-warmwhite px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-5xl rounded-[2.75rem] border border-black/5 bg-white px-6 py-10 shadow-sm sm:px-12 sm:py-14">
                <div className="flex items-center justify-between gap-4">
                    <p className="text-color-forest/65 text-xs font-semibold uppercase tracking-[0.12em]">
                        Anamnese inicial
                    </p>
                    <p className="text-color-forest/65 text-xs font-medium uppercase">
                        Etapa {step + 1} de {steps.length}
                    </p>
                </div>

                <h2 className="mt-3 font-serif text-4xl font-normal leading-[1.08] tracking-[-0.025em] text-color-forest sm:text-5xl lg:text-6xl">
                    {title}
                </h2>

                <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-color-softgray">
                    <div
                        className="h-full rounded-full bg-color-forest transition-[width] duration-300"
                        style={{ width: `${((step + 1) / steps.length) * 100}%` }}
                    />
                </div>

                <div className="mt-8 flex gap-2 overflow-x-auto whitespace-nowrap pb-1 text-xs font-medium uppercase">
                    {steps.map((stepName, index) => (
                        <span
                            key={stepName}
                            className={`rounded-full px-3 py-1.5 ${
                                index === step ? 'bg-color-forest text-white' : 'text-color-forest/65 bg-color-softgray'
                            }`}>
                            {String(index + 1).padStart(2, '0')} {stepName}
                        </span>
                    ))}
                </div>

                <div className="my-8 h-px bg-black/5" />

                <form onSubmit={onSubmit}>
                    {step === 0 && (
                        <>
                            <h3 className="font-serif text-2xl text-color-forest sm:text-3xl">{desc}</h3>
                            <div className="mt-8 grid gap-6 sm:grid-cols-2">
                                <Field label="Seu nome completo *">
                                    <input
                                        required
                                        className={fieldClass}
                                        placeholder="Como gosta de ser chamado(a)?"
                                        value={values.fullName}
                                        onChange={(event) => update('fullName', event.target.value)}
                                    />
                                </Field>
                                <Field label="Idade *">
                                    <input
                                        required
                                        inputMode="numeric"
                                        className={fieldClass}
                                        placeholder="Ex: 34 anos"
                                        value={values.age}
                                        onChange={(event) => update('age', event.target.value)}
                                    />
                                </Field>
                                <Field label="Altura (cm) *">
                                    <input
                                        required
                                        inputMode="numeric"
                                        className={fieldClass}
                                        placeholder="Ex: 172"
                                        value={values.height}
                                        onChange={(event) => update('height', event.target.value)}
                                    />
                                </Field>
                                <Field label="Peso aproximado (kg) *">
                                    <input
                                        required
                                        inputMode="decimal"
                                        className={fieldClass}
                                        placeholder="Ex: 68"
                                        value={values.weight}
                                        onChange={(event) => update('weight', event.target.value)}
                                    />
                                </Field>
                            </div>
                        </>
                    )}

                    {step === 1 && (
                        <>
                            <StepTitle>Qual é o seu principal objetivo?</StepTitle>
                            <Field label="Conte o que você quer conquistar *" className="mt-8">
                                <textarea
                                    required
                                    className={textareaClass}
                                    placeholder="Ex: ganhar força, melhorar a disposição, reduzir dores..."
                                    value={values.goal}
                                    onChange={(event) => update('goal', event.target.value)}
                                />
                            </Field>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <StepTitle>Como é a sua rotina hoje?</StepTitle>
                            <div className="mt-8 grid gap-6 sm:grid-cols-2">
                                <Field label="Nível de atividade atual *">
                                    <select
                                        required
                                        className={fieldClass}
                                        value={values.routine}
                                        onChange={(event) => update('routine', event.target.value)}>
                                        <option value="">Selecione</option>
                                        <option value="sedentaria">Pouco ativo(a)</option>
                                        <option value="moderada">Moderadamente ativo(a)</option>
                                        <option value="ativa">Já treino com frequência</option>
                                    </select>
                                </Field>
                                <Field label="Quantos dias pode treinar? *">
                                    <select
                                        required
                                        className={fieldClass}
                                        value={values.daysPerWeek}
                                        onChange={(event) => update('daysPerWeek', event.target.value)}>
                                        <option value="">Selecione</option>
                                        <option value="1-2">1 a 2 dias por semana</option>
                                        <option value="3-4">3 a 4 dias por semana</option>
                                        <option value="5+">5 ou mais dias por semana</option>
                                    </select>
                                </Field>
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <StepTitle>Qual é a sua experiência com treinos?</StepTitle>
                            <Field label="Experiência *" className="mt-8">
                                <select
                                    required
                                    className={fieldClass}
                                    value={values.experience}
                                    onChange={(event) => update('experience', event.target.value)}>
                                    <option value="">Selecione</option>
                                    <option value="iniciante">Estou começando agora</option>
                                    <option value="intermediario">Já treinei antes</option>
                                    <option value="avancado">Treino há bastante tempo</option>
                                </select>
                            </Field>
                        </>
                    )}

                    {step === 4 && (
                        <>
                            <StepTitle>Tem alguma condição de saúde ou limitação?</StepTitle>
                            <Field label="Lesões, dores ou observações *" className="mt-8">
                                <textarea
                                    required
                                    className={textareaClass}
                                    placeholder="Se não houver, escreva: não tenho."
                                    value={values.healthNotes}
                                    onChange={(event) => update('healthNotes', event.target.value)}
                                />
                            </Field>
                        </>
                    )}

                    {step === 5 && (
                        <>
                            <StepTitle>Como podemos falar com você?</StepTitle>
                            <div className="mt-8 grid gap-6 sm:grid-cols-2">
                                <Field label="E-mail *">
                                    <input
                                        required
                                        type="email"
                                        className={fieldClass}
                                        placeholder="voce@email.com"
                                        value={values.email}
                                        onChange={(event) => update('email', event.target.value)}
                                    />
                                </Field>
                                <Field label="WhatsApp *">
                                    <input
                                        required
                                        inputMode="tel"
                                        className={fieldClass}
                                        placeholder="(00) 00000-0000"
                                        value={values.phone}
                                        onChange={(event) => update('phone', event.target.value)}
                                    />
                                </Field>
                            </div>
                        </>
                    )}

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-black/5 pt-6">
                        <div>
                            {error && <p className="text-sm text-red-700">{error}</p>}
                            {submitted && (
                                <p className="text-sm text-color-forest">
                                    Anamnese enviada com sucesso. Em breve entraremos em contato.
                                </p>
                            )}
                        </div>
                        <div className="flex gap-3">
                            {step > 0 && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => {
                                        setError('')
                                        setStep((current) => current - 1)
                                    }}
                                    className="h-11 rounded-full border-color-forest px-5 text-color-forest hover:bg-color-softgray">
                                    <ArrowLeft className="mr-2 size-4" aria-hidden="true" /> Voltar
                                </Button>
                            )}
                            {!submitted && (
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="hover:bg-color-forest/90 h-11 rounded-full bg-color-forest px-6 text-xs font-semibold uppercase tracking-wide text-white">
                                    {isSubmitting ? 'Enviando...' : step === steps.length - 1 ? 'Enviar' : 'Próximo'}{' '}
                                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                                </Button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

function StepTitle({ children }: { children: ReactNode }) {
    return <h3 className="font-serif text-2xl text-color-forest sm:text-3xl">{children}</h3>
}

function Field({ label, className = '', children }: { label: string; className?: string; children: ReactNode }) {
    return (
        <label
            className={`text-color-forest/70 block space-y-2 text-xs font-semibold uppercase tracking-wide ${className}`}>
            {label}
            {children}
        </label>
    )
}
