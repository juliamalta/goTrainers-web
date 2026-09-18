'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'

import AuthField from './AuthField'
import AuthLayout from './AuthLayout'

const loginSchema = z.object({
    email: z.string().trim().min(1, 'Digite seu e-mail').email('Digite um e-mail válido'),
    password: z.string().min(1, 'Digite sua senha'),
})
type LoginFormData = z.infer<typeof loginSchema>

export default function Login() {
    const router = useRouter()
    const [serverError, setServerError] = useState('')
    const [checkingSession, setCheckingSession] = useState(true)
    const [redirecting, setRedirecting] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) })

    useEffect(() => {
        const controller = new AbortController()
        const checkSession = async () => {
            try {
                const response = await fetch('/api/users/me', {
                    credentials: 'include',
                    cache: 'no-store',
                    signal: controller.signal,
                })
                if (response.ok && (await response.json())?.user) {
                    setRedirecting(true)
                    router.replace('/dashboard')
                }
            } catch {
                // A failed session check still allows the user to sign in.
            } finally {
                if (!controller.signal.aborted) setCheckingSession(false)
            }
        }
        void checkSession()
        return () => controller.abort()
    }, [router])

    const onSubmit = async (data: LoginFormData) => {
        setServerError('')
        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(data),
            })
            if (!response.ok) {
                setServerError(
                    response.status === 429
                        ? 'Muitas tentativas. Aguarde um pouco e tente novamente.'
                        : response.status >= 500
                          ? 'Não foi possível entrar agora. Tente novamente em instantes.'
                          : 'Não foi possível entrar. Confira seu e-mail e senha e tente novamente.'
                )
                return
            }
            setRedirecting(true)
            router.replace('/dashboard')
            router.refresh()
        } catch {
            setServerError('Não foi possível conectar. Verifique sua conexão e tente novamente.')
        }
    }

    return (
        <AuthLayout mode="login">
            {checkingSession || redirecting ? (
                <div role="status" className="flex min-h-48 items-center justify-center gap-3 text-sm text-zinc-300">
                    <Loader2 className="size-5 animate-spin text-color-malachite" aria-hidden="true" />
                    {checkingSession ? 'Verificando sessão...' : 'Tudo certo! Abrindo seu painel...'}
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
                                id="password"
                                label="Senha"
                                type="password"
                                placeholder="Digite sua senha"
                                autoComplete="current-password"
                                {...register('password')}
                                error={errors.password?.message}
                            />
                            <div className="text-right">
                                <Link
                                    href="/forgot-password"
                                    className="rounded text-sm text-zinc-300 underline-offset-4 hover:text-color-malachite hover:underline focus-visible:outline focus-visible:outline-color-malachite">
                                    Esqueci minha senha
                                </Link>
                            </div>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="h-12 w-full gap-2 rounded-xl bg-color-malachite text-sm font-semibold text-color-codgray hover:bg-color-malachite hover:brightness-110 focus-visible:ring-color-malachite focus-visible:ring-offset-color-woodsmoke">
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" aria-hidden="true" /> Entrando...
                                    </>
                                ) : (
                                    <>
                                        Entrar na minha conta <ArrowRight size={18} aria-hidden="true" />
                                    </>
                                )}
                            </Button>
                        </fieldset>
                    </form>
                    <p className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-color-clay">
                        Ainda não tem uma conta?{' '}
                        <Link
                            href="/auth/register"
                            className="font-semibold text-color-malachite underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-color-malachite">
                            Criar conta
                        </Link>
                    </p>
                </>
            )}
        </AuthLayout>
    )
}
