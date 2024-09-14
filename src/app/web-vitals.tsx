'use client'
import { useReportWebVitals } from 'next/web-vitals'

function WebVitals() {
  useReportWebVitals((metric) => {
    window?.dataLayer?.push({
      event: 'web-vitals',
      eventCategory: 'Web Vitals',
      eventAction: metric.name,
      eventValue: Math.round(
        metric.name === 'CLS' ? metric.value * 1000 : metric.value
      ), // values must be integers
      eventLabel: metric.id, // id unique to current page load
      nonInteraction: true, // avoids affecting bounce rate.
    })
  })

  return undefined
}

export default WebVitals
