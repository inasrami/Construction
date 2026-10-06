let revealObserver

export default {
  mounted(element) {
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return

    revealObserver ??= new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.06, rootMargin: '0px 0px -16px 0px' })

    element.classList.add('reveal-ready')
    revealObserver.observe(element)
  },
  unmounted(element) {
    revealObserver?.unobserve(element)
  }
}
