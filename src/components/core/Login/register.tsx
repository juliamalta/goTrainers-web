'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const registerSchema = z
    .object({
        name: z.string().min(1, 'Digite seu nome completo'),

        email: z.string().min(1, 'Digite seu e-mail').email('Digite um e-mail válido'),

        password: z.string().min(1, 'Digite sua senha').min(6, 'A senha deve ter pelo menos 6 caracteres'),

        confirmPassword: z.string().min(1, 'Confirme sua senha'),

        whatsapp: z.string().min(1, 'Digite seu WhatsApp').min(10, 'Digite um WhatsApp válido'),

        cpf: z.string().optional(),

        cref: z.string().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'As senhas não coincidem',
        path: ['confirmPassword'],
    })

type RegisterFormData = z.infer<typeof registerSchema>

export default function Register() {
    const router = useRouter()

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [serverError, setServerError] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    })

    const onSubmit = async (data: RegisterFormData) => {
        setServerError('')

        try {
            // 1. Criar usuário no Payload
            const registerResponse = await fetch('/api/users', {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                },

                credentials: 'include',

                body: JSON.stringify({
                    name: data.name.trim(),
                    email: data.email.trim().toLowerCase(),
                    password: data.password,
                    whatsapp: data.whatsapp.trim(),
                    cpf: data.cpf?.trim() || '',
                    cref: data.cref?.trim() || '',
                }),
            })

            const registerResult = await registerResponse.json()

            console.log('Resposta cadastro:', registerResult)

            if (!registerResponse.ok) {
                const message =
                    registerResult?.errors?.[0]?.message ||
                    registerResult?.message ||
                    'Não foi possível criar sua conta.'

                setServerError(message)

                return
            }

            console.log('Usuário criado:', registerResult)

            // 2. Fazer login automaticamente
            const loginResponse = await fetch('/api/users/login', {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                },

                credentials: 'include',

                body: JSON.stringify({
                    email: data.email.trim().toLowerCase(),
                    password: data.password,
                }),
            })

            const loginResult = await loginResponse.json()

            console.log('Resposta login:', loginResult)

            if (!loginResponse.ok) {
                const message =
                    loginResult?.errors?.[0]?.message ||
                    loginResult?.message ||
                    'Conta criada, mas não foi possível entrar automaticamente.'

                setServerError(message)

                return
            }

            console.log('Usuário autenticado:', loginResult)

            // 3. Ir para o dashboard
            router.push('/dashboard')
        } catch (error) {
            console.error('Erro no cadastro:', error)

            setServerError('Não foi possível conectar ao servidor. Tente novamente.')
        }
    }

    return (
        <div className="min-h-screen bg-color-codgray text-white">
            <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12">
                {/* Cadastro */}
                <section className="relative z-10 w-full max-w-md">
                    <div className="rounded-2xl border border-color-woodsmoke bg-black/25 p-7 shadow-sm backdrop-blur-sm sm:p-9">
                        {/* Cabeçalho */}
                        <div className="mb-8 text-center">
                            <h1 className="text-3xl font-bold tracking-tight">Crie sua conta</h1>

                            <p className="mt-2 text-sm text-zinc-400">7 dias grátis. Sem cartão.</p>
                        </div>

                        {/* Erro do servidor */}
                        {serverError && (
                            <div className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                                {serverError}
                            </div>
                        )}

                        {/* Formulário */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* Nome */}
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-200">
                                    Nome completo
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Seu nome completo"
                                    autoComplete="name"
                                    {...register('name')}
                                    className={`w-full rounded-lg border bg-transparent px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:ring-1 ${
                                        errors.name
                                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                            : 'border-zinc-800 focus:border-color-malachite focus:ring-color-malachite'
                                    }`}
                                />

                                {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name.message}</p>}
                            </div>

                            {/* E-mail */}
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-200">
                                    E-mail
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="seu@email.com"
                                    autoComplete="email"
                                    {...register('email')}
                                    className={`w-full rounded-lg border bg-transparent px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:ring-1 ${
                                        errors.email
                                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                            : 'border-zinc-800 focus:border-color-malachite focus:ring-color-malachite'
                                    }`}
                                />

                                {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email.message}</p>}
                            </div>

                            {/* Senha */}
                            <div>
                                <label htmlFor="password" className="mb-2 block text-sm font-medium text-zinc-200">
                                    Senha
                                </label>

                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        autoComplete="new-password"
                                        {...register('password')}
                                        className={`w-full rounded-lg border bg-transparent px-4 py-3 pr-20 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:ring-1 ${
                                            errors.password
                                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                : 'border-zinc-800 focus:border-color-malachite focus:ring-color-malachite'
                                        }`}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-zinc-500 transition hover:text-white">
                                        {showPassword ? 'Ocultar' : 'Mostrar'}
                                    </button>
                                </div>

                                {errors.password && (
                                    <p className="mt-2 text-xs text-red-400">{errors.password.message}</p>
                                )}
                            </div>

                            {/* Confirmar senha */}
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="mb-2 block text-sm font-medium text-zinc-200">
                                    Confirmar senha
                                </label>

                                <div className="relative">
                                    <input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        autoComplete="new-password"
                                        {...register('confirmPassword')}
                                        className={`w-full rounded-lg border bg-transparent px-4 py-3 pr-20 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:ring-1 ${
                                            errors.confirmPassword
                                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                : 'border-zinc-800 focus:border-color-malachite focus:ring-color-malachite'
                                        }`}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-zinc-500 transition hover:text-white">
                                        {showConfirmPassword ? 'Ocultar' : 'Mostrar'}
                                    </button>
                                </div>

                                {errors.confirmPassword && (
                                    <p className="mt-2 text-xs text-red-400">{errors.confirmPassword.message}</p>
                                )}
                            </div>

                            {/* WhatsApp */}
                            <div>
                                <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium text-zinc-200">
                                    WhatsApp
                                </label>

                                <input
                                    id="whatsapp"
                                    type="tel"
                                    placeholder="(11) 99999-9999"
                                    autoComplete="tel"
                                    {...register('whatsapp')}
                                    className={`w-full rounded-lg border bg-transparent px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:ring-1 ${
                                        errors.whatsapp
                                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                            : 'border-zinc-800 focus:border-color-malachite focus:ring-color-malachite'
                                    }`}
                                />

                                {errors.whatsapp && (
                                    <p className="mt-2 text-xs text-red-400">{errors.whatsapp.message}</p>
                                )}
                            </div>

                            {/* CPF e CREF */}
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                {/* CPF */}
                                <div>
                                    <label htmlFor="cpf" className="mb-2 block text-sm font-medium text-zinc-200">
                                        CPF <span className="font-normal text-zinc-500">(opcional)</span>
                                    </label>

                                    <input
                                        id="cpf"
                                        type="text"
                                        placeholder="000.000.000-00"
                                        {...register('cpf')}
                                        className="w-full rounded-lg border border-zinc-800 bg-transparent px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-color-malachite focus:ring-1 focus:ring-color-malachite"
                                    />
                                </div>

                                {/* CREF */}
                                <div>
                                    <label htmlFor="cref" className="mb-2 block text-sm font-medium text-zinc-200">
                                        CREF <span className="font-normal text-zinc-500">(opcional)</span>
                                    </label>

                                    <input
                                        id="cref"
                                        type="text"
                                        placeholder="000000-G/UF"
                                        {...register('cref')}
                                        className="w-full rounded-lg border border-zinc-800 bg-transparent px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-color-malachite focus:ring-1 focus:ring-color-malachite"
                                    />
                                </div>
                            </div>

                            {/* Criar conta */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-2xl bg-color-malachite px-4 py-3 text-sm font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50">
                                {isSubmitting ? 'Criando conta...' : 'Criar conta grátis →'}
                            </button>
                        </form>

                        {/* Login */}
                        <p className="mt-7 text-center text-sm text-zinc-500">
                            Já tem uma conta?{' '}
                            <button
                                type="button"
                                onClick={() => router.push('/auth')}
                                className="font-medium text-color-malachite transition hover:opacity-80">
                                Entrar
                            </button>
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}
