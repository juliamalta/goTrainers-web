'use client'

import { Eye, EyeOff } from 'lucide-react'
import { forwardRef, useState, type InputHTMLAttributes } from 'react'

type AuthFieldProps = InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string; hint?: string }

const AuthField = forwardRef<HTMLInputElement, AuthFieldProps>(({ label, error, hint, id, type, ...props }, ref) => {
    const [visible, setVisible] = useState(false)
    const password = type === 'password'
    return (
        <div>
            <label htmlFor={id} className="mb-2 block text-sm font-medium text-zinc-200">
                {label}
            </label>
            <div className="relative">
                <input
                    {...props}
                    ref={ref}
                    id={id}
                    type={password && visible ? 'text' : type}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
                    className={`min-h-12 w-full rounded-xl border bg-color-woodsmoke px-4 py-3 text-base text-white outline-none transition placeholder:text-zinc-500 disabled:opacity-60 ${password ? 'pr-12' : ''} ${error ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-white/15 focus:border-[var(--malachite-700)]'}`}
                />
                {password && (
                    <button
                        type="button"
                        disabled={props.disabled}
                        onClick={() => setVisible(!visible)}
                        aria-label={`${visible ? 'Ocultar' : 'Mostrar'} ${label.toLowerCase()}`}
                        aria-pressed={visible}
                        className="absolute right-1 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-lg text-color-clay hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-color-malachite">
                        {visible ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
                    </button>
                )}
            </div>
            {error ? (
                <p id={`${id}-error`} className="mt-2 text-xs text-red-400">
                    {error}
                </p>
            ) : (
                hint && (
                    <p id={`${id}-hint`} className="mt-2 text-xs text-color-clay">
                        {hint}
                    </p>
                )
            )}
        </div>
    )
})
AuthField.displayName = 'AuthField'
export default AuthField
