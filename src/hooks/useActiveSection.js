import { useEffect, useState } from 'react'

// Détecte quelle section est actuellement visible dans le viewport.
// Zone de détection : bande centrale à ~30–45% du viewport (threshold 0)
// → déclenche dès qu'un pixel de la section entre dans cette zone.
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    const observers = []

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        {
          threshold:  0,
          rootMargin: '-32% 0px -58% 0px',
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [ids.join(',')])

  return activeId
}
