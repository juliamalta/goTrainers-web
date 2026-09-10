'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Digite seu e-mail')
    .email('Digite um e-mail válido'),

  password: z
    .string()
    .min(1, 'Digite sua senha')
    .min(6, 'A senha deve ter pelo menos 6 caracteres'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    console.log('Dados do login:', data)

    // Futuramente:
    // enviar os dados para o Payload CMS
  }

  return (
    <div className="min-h-screen bg-color-codgray text-white">
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12">
        {/* Login */}
        <section className="relative z-10 w-full max-w-md">
          <div className="rounded-2xl border border-color-woodsmoke bg-black bg-opacity-25 shadow-sm p-7 backdrop-blur-sm sm:p-9">
            
            {/* Cabeçalho */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tight">
                Bem-vindo de volta
              </h1>

              <p className="mt-2 text-sm text-zinc-400">
                Entre na sua conta para continuar
              </p>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-200"
                >
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

                {errors.email && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Senha */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-zinc-200"
                  >
                    Senha
                  </label>

                  <button
                    type="button"
                    className="text-xs text-color-clay transition hover:text-color-malachite"
                  >
                    Esqueci minha senha
                  </button>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    autoComplete="current-password"
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
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-zinc-500 transition hover:text-white"
                  >
                    {showPassword ? 'Ocultar' : 'Mostrar'}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Entrar */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-color-malachite px-4 py-3 text-sm font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? 'Entrando...' : 'Entrar'}
              </button>
            </form>

            {/* Divisor */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-color-clay/30" />

              <span className="text-xs text-zinc-600">
                ou
              </span>

              <div className="h-px flex-1 bg-color-clay/30" />
            </div>

            {/* Google */}
            <button
              type="button"
              className="flex w-full rounded-2xl items-center justify-center gap-3  border border-zinc-800 bg-transparent px-4 py-3 text-sm font-medium text-white transition hover:bg-white/[0.03]"
            >
              {/* Google */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.35 12.27c0-.78-.07-1.53-.2-2.27H12v4.3h5.22a4.46 4.46 0 0 1-1.94 2.93v2.43h3.14c1.84-1.7 2.93-4.2 2.93-7.39Z"
                  fill="#4285F4"
                />
                <path
                  d="M12 21.99c2.63 0 4.84-.87 6.45-2.36l-3.14-2.43c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.51A9.74 9.74 0 0 0 12 21.99Z"
                  fill="#34A853"
                />
                <path
                  d="M6.54 14.09a5.86 5.86 0 0 1 0-3.76V7.82H3.3a9.98 9.98 0 0 0 0 8.78l3.24-2.51Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 6.3c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.38 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.7 5.32l3.24 2.51C7.31 8.02 9.46 6.3 12 6.3Z"
                  fill="#EA4335"
                />
              </svg>

              Continuar com Google
            </button>

            {/* Criar conta */}
            <p className="mt-7 text-center text-sm text-zinc-500">
              Ainda não possui uma conta?{' '}
              <button
                type="button"
                className="font-medium text-color-malachite transition hover:opacity-80"
              >
                Criar conta
              </button>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}