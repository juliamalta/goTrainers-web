import { FooterProps } from './Footer.types'

function Footer({ rights }: FooterProps) {
    return (
        <footer className="overflow-hidden bg-color-codgray">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center gap-4 border-t border-white/10 py-10 text-center">
                    <p className="text-sm text-white/60">© {new Date().getFullYear()} Code Creative.</p>

                    <p className="text-xs text-white/40">Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
