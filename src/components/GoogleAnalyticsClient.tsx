'use client'

import { GoogleAnalytics } from 'nextjs-google-analytics'

interface GoogleAnalyticsClientProps {
    gaMeasurementId: string
}

export function GoogleAnalyticsClient({ gaMeasurementId }: GoogleAnalyticsClientProps) {
    return <GoogleAnalytics gaMeasurementId={gaMeasurementId} trackPageViews />
}
