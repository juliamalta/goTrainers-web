'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'

import AuthField from './AuthField'
import AuthLayout from './AuthLayout'

const registerSchema = z
    .object({
        name: z.string().trim().min(1, 'Digite seu nome completo'),
        email: z.string().trim().toLowerCase().min(1, 'Digite seu e-mail').email('Digite um e-mail válido'),
        whatsapp: z
            .string()
            .trim()
            .min(1, 'Digite seu WhatsApp')
            .regex(/^\+?[\d\s().-]+$/, 'Use apenas números e a formatação do telefone')
            .refine((value) => {
                const digits = value.replace(/\D/g, '')
                return digits.length >= 10 && digits.length <= 15
            }, 'Digite um WhatsApp válido com DDD'),
        password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
        confirmPassword: z.string().min(1, 'Confirme sua senha'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'As senhas não coincidem',
        path: ['confirmPassword'],
    })
type RegisterFormData = z.infer<typeof registerSchema>

export default function Register() {
    const router = useRouter()
    const [serverError, setServerError] = useState('')
    const [created, setCreated] = useState(false)
    const [loginFailed, setLoginFailed] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) })

    const onSubmit = async (data: RegisterFormData) => {
        if (created) return
        setServerError('')
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    whatsapp: data.whatsapp,
                }),
            })
            if (!response.ok) {
                setServerError(
                    response.status >= 500
                        ? 'Não foi possível criar sua conta agora. Tente novamente em instantes.'
                        : 'Não foi possível criar sua conta. Confira os dados. Se já tiver uma conta com este e-mail, entre ou recupere sua senha.'
                )
                return
            }
        } catch {
            setServerError(
                'Não foi possível confirmar o cadastro. Verifique sua conexão. Se a conta já foi criada, você pode entrar com seu e-mail e senha.'
            )
            return
        }
        setCreated(true)
        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email: data.email, password: data.password }),
            })
            if (!response.ok) {
                setLoginFailed(true)
                return
            }
            router.replace('/dashboard')
            router.refresh()
        } catch {
            setLoginFailed(true)
        }
    }

    return (
        <AuthLayout mode="register">
            {created ? (
                <div className="py-4">
                    <CheckCircle2 className="mb-5 size-10 text-color-malachite" aria-hidden="true" />
                    <div role="status">
                        <h2 className="text-xl font-semibold">Sua conta foi criada!</h2>
                        <p className="mt-3 text-sm leading-relaxed text-color-clay">
                            {loginFailed
                                ? 'Não foi possível entrar automaticamente. Acesse sua conta com o e-mail e a senha que você acabou de cadastrar.'
                                : 'Tudo pronto. Estamos entrando na sua conta para abrir seu painel.'}
                        </p>
                    </div>
                    {loginFailed ? (
                        <Button
                            asChild
                            className="mt-6 h-12 w-full rounded-xl bg-color-malachite font-semibold text-color-codgray hover:bg-color-malachite hover:brightness-110">
                            <Link href="/auth">
                                Ir para o login <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                            </Link>
                        </Button>
                    ) : (
                        <Loader2
                            className="mt-6 size-5 animate-spin text-color-malachite"
                            aria-label="Entrando na sua conta"
                        />
                    )}
                </div>
            ) : (
                <>
                    {serverError && (
                        <div
                            role="alert"
                            className="mb-6 rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-relaxed text-red-400">
                            {serverError}
                        </div>
                    )}
                    <form noValidate onSubmit={handleSubmit(onSubmit)} aria-busy={isSubmitting}>
                        <fieldset disabled={isSubmitting} className="space-y-5">
                            <AuthField
                                id="name"
                                label="Nome completo"
                                placeholder="Como você se chama?"
                                autoComplete="name"
                                {...register('name')}
                                error={errors.name?.message}
                            />
                            <AuthField
                                id="email"
                                label="E-mail"
                                type="email"
                                placeholder="voce@exemplo.com"
                                autoComplete="email"
                                autoCapitalize="none"
                                spellCheck={false}
                                {...register('email')}
                                error={errors.email?.message}
                            />
                            <AuthField
                                id="whatsapp"
                                label="WhatsApp com DDD"
                                type="tel"
                                placeholder="(11) 99999-9999"
                                autoComplete="tel"
                                {...register('whatsapp')}
                                error={errors.whatsapp?.message}
                            />
                            <AuthField
                                id="password"
                                label="Senha"
                                type="password"
                                placeholder="Crie uma senha"
                                autoComplete="new-password"
                                hint="Use pelo menos 6 caracteres."
                                {...register('password')}
                                error={errors.password?.message}
                            />
                            <AuthField
                                id="confirmPassword"
                                label="Confirme sua senha"
                                type="password"
                                placeholder="Repita a senha"
                                autoComplete="new-password"
                                {...register('confirmPassword')}
                                error={errors.confirmPassword?.message}
                            />
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="h-12 w-full gap-2 rounded-xl bg-color-malachite text-sm font-semibold text-color-codgray hover:bg-color-malachite hover:brightness-110 focus-visible:ring-color-malachite focus-visible:ring-offset-color-woodsmoke">
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" aria-hidden="true" /> Criando sua
                                        conta...
                                    </>
                                ) : (
                                    <>
                                        Criar minha conta <ArrowRight size={18} aria-hidden="true" />
                                    </>
                                )}
                            </Button>
                        </fieldset>
                    </form>
                    <p className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-color-clay">
                        Já tem uma conta?{' '}
                        <Link
                            href="/auth"
                            className="font-semibold text-color-malachite underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-color-malachite">
                            Entrar
                        </Link>
                    </p>
                </>
            )}
        </AuthLayout>
    )
}
