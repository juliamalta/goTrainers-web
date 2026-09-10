import { FooterProps } from './Footer.types'

function Footer({ rights }: FooterProps) {
    return (
        <section id="footer" className="overflow-hidden bg-color-codgray">
            {/* Copyright and Social Media Links */}
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-center border-t border-l-color-malachite py-16">
                    <div className="text-white">© Desenvolvido por Code Creative. Todos os direitos reservados</div>
                </div>
            </div>
        </section>
    )
}

export default Footer
