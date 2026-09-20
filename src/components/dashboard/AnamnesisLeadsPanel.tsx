'use client'

import { useEffect, useState } from 'react'
import { FiChevronDown, FiChevronUp, FiMail, FiMessageCircle, FiTrash2, FiUsers } from 'react-icons/fi'

type Lead = {
    id: string
    fullName: string
    age: string
    height: string
    weight: string
    goal: string
    routine: string
    daysPerWeek: string
    experience: string
    healthNotes: string
    email: string
    phone: string
    createdAt: string
}

const activityLabels: Record<string, string> = {
    sedentaria: 'Pouco ativo(a)',
    moderada: 'Moderadamente ativo(a)',
    ativa: 'Treina com frequência',
}

const experienceLabels: Record<string, string> = {
    iniciante: 'Iniciante',
    intermediario: 'Já treinou antes',
    avancado: 'Avançado',
}

function formatDate(date: string) {
    return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(date))
}

function whatsappHref(phone: string) {
    return `https://wa.me/${phone.replace(/\D/g, '')}`
}

export function AnamnesisLeadsPanel() {
    const [leads, setLeads] = useState<Lead[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [expandedLead, setExpandedLead] = useState<string | null>(null)
    const [deletingLead, setDeletingLead] = useState<string | null>(null)

    useEffect(() => {
        async function loadLeads() {
            try {
                const response = await fetch('/api/anamnesis', { credentials: 'include', cache: 'no-store' })
                const data = await response.json()

                if (!response.ok) throw new Error(data?.message || 'Não foi possível carregar as anamneses.')

                setLeads(data.docs ?? [])
            } catch (loadError) {
                setError(loadError instanceof Error ? loadError.message : 'Não foi possível carregar as anamneses.')
            } finally {
                setLoading(false)
            }
        }

        loadLeads()
    }, [])

    async function deleteLead(lead: Lead) {
        if (!window.confirm(`Excluir permanentemente a resposta de ${lead.fullName}?`)) return

        setDeletingLead(lead.id)
        setError('')

        try {
            const response = await fetch(`/api/anamnesis?id=${encodeURIComponent(lead.id)}`, {
                method: 'DELETE',
                credentials: 'include',
            })
            const data = await response.json()

            if (!response.ok) throw new Error(data?.message || 'Não foi possível excluir a anamnese.')

            setLeads((current) => current.filter((item) => item.id !== lead.id))
            setExpandedLead((current) => (current === lead.id ? null : current))
        } catch (deleteError) {
            setError(deleteError instanceof Error ? deleteError.message : 'Não foi possível excluir a anamnese.')
        } finally {
            setDeletingLead(null)
        }
    }

    return (
        <section className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-color-codgray shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
            <div className="flex flex-col gap-4 border-b border-white/10 p-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <div className="flex items-center gap-3">
                        <span className="flex size-10 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--malachite-500)_10%,transparent)] text-color-malachite">
                            <FiUsers size={20} />
                        </span>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-color-malachite">
                                Template 3
                            </p>
                            <h2 className="text-lg font-semibold">Anamneses iniciais</h2>
                        </div>
                    </div>
                    <p className="mt-3 text-sm text-zinc-500">Respostas enviadas pelos visitantes do seu site.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-color-woodsmoke px-4 py-3 text-center">
                    <p className="text-2xl font-bold text-white">{loading ? '—' : leads.length}</p>
                    <p className="text-xs text-zinc-500">{leads.length === 1 ? 'nova resposta' : 'respostas'}</p>
                </div>
            </div>

            {error && (
                <p className="m-6 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-400">{error}</p>
            )}

            {loading ? (
                <div className="space-y-3 p-6">
                    {[1, 2].map((item) => (
                        <div key={item} className="h-20 animate-pulse rounded-xl bg-white/5" />
                    ))}
                </div>
            ) : !error && leads.length === 0 ? (
                <div className="p-10 text-center">
                    <FiUsers size={28} className="mx-auto text-zinc-700" />
                    <p className="mt-4 font-medium text-white">Nenhuma anamnese recebida ainda</p>
                    <p className="mt-1 text-sm text-zinc-500">
                        Quando alguém preencher o formulário do seu Template 3, a resposta aparecerá aqui.
                    </p>
                </div>
            ) : (
                <div className="divide-y divide-white/10">
                    {leads.map((lead) => {
                        const expanded = expandedLead === lead.id
                        return (
                            <article key={lead.id} className="p-5 sm:p-6">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-3">
                                            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-color-malachite font-semibold text-black">
                                                {lead.fullName.slice(0, 1).toUpperCase()}
                                            </span>
                                            <div className="min-w-0">
                                                <h3 className="truncate font-semibold text-white">{lead.fullName}</h3>
                                                <p className="mt-0.5 text-xs text-zinc-500">
                                                    Recebida em {formatDate(lead.createdAt)}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mt-3 line-clamp-2 text-sm text-zinc-400">
                                            <span className="font-medium text-zinc-200">Objetivo:</span> {lead.goal}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <a
                                            href={`mailto:${lead.email}`}
                                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/5">
                                            <FiMail size={15} /> E-mail
                                        </a>
                                        <a
                                            href={whatsappHref(lead.phone)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg bg-color-malachite px-3 py-2 text-xs font-semibold text-black transition hover:brightness-110">
                                            <FiMessageCircle size={15} /> WhatsApp
                                        </a>
                                        <button
                                            type="button"
                                            onClick={() => setExpandedLead(expanded ? null : lead.id)}
                                            className="inline-flex items-center gap-1 rounded-lg px-2 py-2 text-xs text-zinc-400 transition hover:bg-white/5 hover:text-white">
                                            Detalhes{' '}
                                            {expanded ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                                        </button>
                                        <button
                                            type="button"
                                            disabled={deletingLead === lead.id}
                                            onClick={() => deleteLead(lead)}
                                            className="inline-flex items-center gap-1 rounded-lg px-2 py-2 text-xs text-zinc-500 transition hover:bg-red-500/10 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-50">
                                            <FiTrash2 size={15} />{' '}
                                            {deletingLead === lead.id ? 'Excluindo...' : 'Excluir'}
                                        </button>
                                    </div>
                                </div>

                                {expanded && (
                                    <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2 lg:grid-cols-3">
                                        <Info label="Idade" value={lead.age} />
                                        <Info label="Altura / peso" value={`${lead.height} cm · ${lead.weight} kg`} />
                                        <Info label="Disponibilidade" value={lead.daysPerWeek} />
                                        <Info label="Atividade" value={activityLabels[lead.routine] ?? lead.routine} />
                                        <Info
                                            label="Experiência"
                                            value={experienceLabels[lead.experience] ?? lead.experience}
                                        />
                                        <Info label="Contato" value={lead.phone} />
                                        <Info label="Saúde e limitações" value={lead.healthNotes} full />
                                    </div>
                                )}
                            </article>
                        )
                    })}
                </div>
            )}
        </section>
    )
}

function Info({ label, value, full = false }: { label: string; value: string; full?: boolean }) {
    return (
        <div className={`rounded-xl bg-color-woodsmoke p-4 ${full ? 'sm:col-span-2 lg:col-span-3' : ''}`}>
            <p className="text-xs text-zinc-500">{label}</p>
            <p className="mt-1 text-sm leading-relaxed text-zinc-200">{value}</p>
        </div>
    )
}
