'use client'

import * as React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface CustomizeSiteProps {
    templateName: string
    templateImage: string
    userName: string

    // Cabeçalho
    welcomeText: string
    title: string
    subtitle: string

    // Template selecionado
    selectedTemplateText: string
    changeTemplateText: string

    // Preview
    previewTitle: string
    previewSubtitle: string
    previewDeviceText: string

    // Rodapé
    footerText: string
}

export default function CustomizeSite({
    templateName,
    templateImage,
    userName,

    welcomeText,
    title,
    subtitle,

    selectedTemplateText,
    changeTemplateText,

    previewTitle,
    previewSubtitle,
    previewDeviceText,

    footerText,
}: CustomizeSiteProps) {
    return (
        <section className="min-h-screen bg-color-woodsmoke py-12 sm:py-16">
            <div className="container mx-auto px-4">
                {/* Cabeçalho */}
                <div className="mb-10 flex flex-col items-center gap-3 text-center">
                    <p className="text-sm font-semibold uppercase text-color-malachite">{welcomeText}</p>

                    <h1 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h1>

                    <p className="max-w-2xl text-sm text-color-clay sm:text-base">{subtitle}</p>
                </div>

                {/* Template selecionado */}
                <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-color-woodsmoke bg-color-codgray p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg">
                            <Image src={templateImage} alt={templateName} fill className="object-cover" />
                        </div>

                        <div>
                            <p className="text-sm text-color-clay">{selectedTemplateText}</p>

                            <h2 className="text-lg font-semibold text-white">{templateName}</h2>
                        </div>
                    </div>

                    <Button variant="outline" className="w-full sm:w-auto">
                        {changeTemplateText}
                    </Button>
                </div>

                {/* Conteúdo */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Formulário */}
                    <div className="rounded-2xl border border-color-woodsmoke bg-color-codgray p-6 sm:p-8">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-white">Informações do seu site</h2>

                            <p className="mt-1 text-sm text-color-clay">
                                Essas informações serão exibidas no seu site.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {/* Nome */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-white">
                                    Nome profissional
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    defaultValue={userName}
                                    placeholder="Ex: Júlia Malta"
                                    className="h-12 rounded-lg border border-color-woodsmoke bg-color-woodsmoke px-4 text-sm text-white outline-none transition focus:border-color-malachite"
                                />
                            </div>

                            {/* Especialidade */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="specialty" className="text-sm font-medium text-white">
                                    Especialidade
                                </label>

                                <input
                                    id="specialty"
                                    type="text"
                                    placeholder="Ex: Personal Trainer"
                                    className="h-12 rounded-lg border border-color-woodsmoke bg-color-woodsmoke px-4 text-sm text-white outline-none transition focus:border-color-malachite"
                                />
                            </div>

                            {/* Frase */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="headline" className="text-sm font-medium text-white">
                                    Frase principal
                                </label>

                                <input
                                    id="headline"
                                    type="text"
                                    placeholder="Ex: Transforme seu corpo e sua rotina."
                                    className="h-12 rounded-lg border border-color-woodsmoke bg-color-woodsmoke px-4 text-sm text-white outline-none transition focus:border-color-malachite"
                                />
                            </div>

                            {/* Descrição */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="description" className="text-sm font-medium text-white">
                                    Descrição
                                </label>

                                <textarea
                                    id="description"
                                    rows={5}
                                    placeholder="Conte um pouco sobre seu trabalho..."
                                    className="resize-none rounded-lg border border-color-woodsmoke bg-color-woodsmoke px-4 py-3 text-sm text-white outline-none transition focus:border-color-malachite"
                                />
                            </div>

                            {/* WhatsApp / Instagram */}
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="whatsapp" className="text-sm font-medium text-white">
                                        WhatsApp
                                    </label>

                                    <input
                                        id="whatsapp"
                                        type="text"
                                        placeholder="(31) 99999-9999"
                                        className="h-12 rounded-lg border border-color-woodsmoke bg-color-woodsmoke px-4 text-sm text-white outline-none transition focus:border-color-malachite"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="instagram" className="text-sm font-medium text-white">
                                        Instagram
                                    </label>

                                    <input
                                        id="instagram"
                                        type="text"
                                        placeholder="@seuinstagram"
                                        className="h-12 rounded-lg border border-color-woodsmoke bg-color-woodsmoke px-4 text-sm text-white outline-none transition focus:border-color-malachite"
                                    />
                                </div>
                            </div>

                            <Button type="button" className="mt-2 h-12 w-full">
                                Continuar
                            </Button>
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="rounded-2xl border border-color-woodsmoke bg-color-codgray p-4 sm:p-6">
                        <div className="mb-5 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-semibold text-white">{previewTitle}</h2>

                                <p className="text-sm text-color-clay">{previewSubtitle}</p>
                            </div>

                            <span className="hidden rounded-md border border-color-woodsmoke px-3 py-1 text-xs text-color-clay sm:block">
                                {previewDeviceText}
                            </span>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-color-woodsmoke bg-black">
                            <Image
                                src={templateImage}
                                alt={`Preview do ${templateName}`}
                                width={1000}
                                height={650}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Rodapé */}
                <p className="mt-6 text-center text-xs text-color-clay">{footerText}</p>
            </div>
        </section>
    )
}
