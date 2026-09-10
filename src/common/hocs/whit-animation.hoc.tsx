import { FC } from 'react'

import { FadeIn, FadeUp } from '@/components/animations'

function getDisplayName(WrappedComponent: FC) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

function withAnimation<P extends object>(Component: FC<P>, type: 'fade-up' | 'fade-in') {
    function ComponentWithAnimationHandling(props: P) {
        if (type === 'fade-in') {
            return (
                <FadeIn>
                    <Component {...(props as P)} />
                </FadeIn>
            )
        }

        if (type === 'fade-up') {
            return (
                <FadeUp>
                    <Component {...(props as P)} />
                </FadeUp>
            )
        }

        return <Component {...(props as P)} />
    }

    ComponentWithAnimationHandling.displayName = `WithAnimationHandling${getDisplayName(Component as FC<unknown>)}`

    return ComponentWithAnimationHandling
}

export { withAnimation }
