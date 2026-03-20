import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const navItems = [
  { to: '/', label: '🏠 Hub', end: true },
  { to: '/fundamentos', label: 'Fundamentos' },
  { to: '/personas', label: 'Personas' },
  { to: '/perguntas', label: '12 Perguntas' },
  { to: '/mercado', label: 'Mercado & Planos' },
  { to: '/sexy-canvas', label: '🔥 Sexy Canvas', accent: 'red' },
  { to: '/estrategia', label: '🚀 Estratégia', accent: 'green' },
]

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  // Reveal animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      {/* HERO HEADER */}
      <header
        className="relative overflow-hidden text-white py-8 md:py-12 px-4"
        style={{ background: 'linear-gradient(135deg, hsl(270,65%,14%) 0%, hsl(255,55%,30%) 55%, hsl(270,65%,18%) 100%)' }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: 'hsl(255,95%,67%)' }} />
        <div className="absolute bottom-0 left-10 w-40 h-40 rounded-full opacity-10 blur-2xl"
          style={{ background: 'hsl(270,80%,65%)' }} />

        <div className="relative max-w-5xl mx-auto">
          {/* Logo + title */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg font-black"
              style={{ background: 'linear-gradient(135deg, hsl(255,95%,67%), hsl(270,80%,65%))' }}>
              T
            </div>
            <span className="text-sm font-semibold text-purple-200">Tamy Food</span>
            <span className="hidden sm:block text-purple-400 text-sm">·</span>
            <span className="hidden sm:block text-purple-300 text-xs">Start Growth Academy · Março 2026</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-2">
            Persona Unificada — Missão 2
          </h1>
          <p className="text-purple-200 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
            Toast + Ramp + Restoke + Duolingo para gastronomia na LATAM.<br className="hidden sm:block" />
            <span className="text-purple-100 font-semibold">Inteligência financeira no WhatsApp em 5 minutos/dia.</span>
          </p>

          {/* Founder badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="badge-pill bg-blue-500/20 text-blue-200 border border-blue-400/30">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Pedro Smolka — CEO
            </span>
            <span className="badge-pill bg-purple-500/20 text-purple-200 border border-purple-400/30">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              Matheus Benites — CTO
            </span>
          </div>
        </div>
      </header>

      {/* STICKY NAV */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-3 sm:px-4">
          <div className="flex gap-1 sm:gap-1.5 py-2 overflow-x-auto nav-scroll">
            {navItems.map(({ to, label, end, accent }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => {
                  const base = 'whitespace-nowrap px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 shrink-0'
                  if (isActive) {
                    if (accent === 'red') return `${base} bg-red-100 text-red-700 border border-red-200`
                    if (accent === 'green') return `${base} bg-green-100 text-green-700 border border-green-200`
                    return `${base} text-white border border-purple-600`
                  }
                  if (accent === 'red') return `${base} bg-red-50 text-red-600 border border-red-100 hover:bg-red-100`
                  if (accent === 'green') return `${base} bg-green-50 text-green-600 border border-green-100 hover:bg-green-100`
                  return `${base} text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-gray-800`
                }}
                style={({ isActive }) =>
                  isActive && !accent
                    ? { background: 'linear-gradient(135deg, hsl(255,95%,67%), hsl(270,80%,65%))' }
                    : {}
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-3 sm:px-4 py-6 md:py-10">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white py-6 px-4 text-center text-xs text-gray-400">
        <p className="font-semibold text-gray-500">Tamy Food · Persona Unificada · Start Growth Academy 2026</p>
        <p className="mt-1">
          Toast + Ramp + Restoke + Duolingo para gastronomia na LATAM.
          &nbsp;·&nbsp;
          <a href="https://github.com/benite-tamy/tamy-persona-review" target="_blank" rel="noreferrer"
            className="text-purple-500 hover:underline">GitHub</a>
        </p>
      </footer>
    </div>
  )
}
