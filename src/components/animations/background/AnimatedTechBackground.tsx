export function AnimatedTechBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden bg-white">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 800 600"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-15">
                {/* Linhas verticais suaves na lateral esquerda */}
                <line
                    x1="30"
                    y1="20"
                    x2="30"
                    y2="580"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    strokeLinecap="round"
                    className="animate-pulse-slow"
                />
                <line
                    x1="60"
                    y1="50"
                    x2="60"
                    y2="570"
                    stroke="#60a5fa"
                    strokeWidth="1"
                    strokeLinecap="round"
                    className="animate-pulse-slow delay-300"
                />
                <line
                    x1="90"
                    y1="80"
                    x2="90"
                    y2="550"
                    stroke="#93c5fd"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    className="animate-pulse-slow delay-600"
                />

                {/* Linhas verticais suaves na lateral direita */}
                <line
                    x1="770"
                    y1="20"
                    x2="770"
                    y2="580"
                    stroke="#2563eb"
                    strokeWidth="1"
                    strokeLinecap="round"
                    className="animate-pulse-slow delay-900"
                />
                <line
                    x1="740"
                    y1="50"
                    x2="740"
                    y2="570"
                    stroke="#60a5fa"
                    strokeWidth="1"
                    strokeLinecap="round"
                    className="animate-pulse-slow delay-1200"
                />
                <line
                    x1="710"
                    y1="80"
                    x2="710"
                    y2="550"
                    stroke="#93c5fd"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    className="animate-pulse-slow delay-1500"
                />

                {/* Pontos nas linhas */}
                <circle cx="30" cy="300" r="4" fill="#3b82f6" className="animate-pulse-slow" />
                <circle cx="770" cy="320" r="4" fill="#2563eb" className="animate-pulse-slow delay-900" />
            </svg>

            <style jsx>{`
                @keyframes pulseSlow {
                    0%,
                    100% {
                        opacity: 0.3;
                    }
                    50% {
                        opacity: 0.7;
                    }
                }
                .animate-pulse-slow {
                    animation: pulseSlow 6s ease-in-out infinite;
                    transform-origin: center;
                }
                .delay-300 {
                    animation-delay: 0.3s;
                }
                .delay-600 {
                    animation-delay: 0.6s;
                }
                .delay-900 {
                    animation-delay: 0.9s;
                }
                .delay-1200 {
                    animation-delay: 1.2s;
                }
                .delay-1500 {
                    animation-delay: 1.5s;
                }
            `}</style>
        </div>
    )
}
