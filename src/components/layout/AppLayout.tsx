import { Activity, BarChart3, BusFront, FileBarChart, LayoutDashboard, Map, Menu, X } from 'lucide-react'
import { useState } from 'react'

export type PageName = 'Dashboard' | 'Live Map' | 'Events' | 'Fleet' | 'Analytics' | 'Reports'

const navigation: Array<{ label: PageName; icon: typeof LayoutDashboard }> = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Live Map', icon: Map },
  { label: 'Events', icon: Activity },
  { label: 'Fleet', icon: BusFront },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Reports', icon: FileBarChart },
]

interface AppLayoutProps {
  activePage: PageName
  onNavigate: (page: PageName) => void
  children: React.ReactNode
}

export function AppLayout({ activePage, onNavigate, children }: AppLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = (page: PageName) => { onNavigate(page); setMenuOpen(false) }

  return (
    <div className="application-shell">
      <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
        <div className="brand">
          <span className="brand-mark"><BusFront size={22} /></span>
          <div><strong>BUSSENSE AI</strong><small>Urban Intelligence</small></div>
          <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close navigation"><X size={19} /></button>
        </div>
        <nav aria-label="Primary navigation">
          {navigation.map(({ label, icon: Icon }) => (
            <button key={label} className={`nav-link ${activePage === label ? 'active' : ''}`} onClick={() => navigate(label)}>
              <Icon size={19} /><span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-sensor-note">
          <span className="live-dot" /> Prototype monitoring active
          <small>Mock data • Bengaluru region</small>
        </div>
      </aside>
      {menuOpen && <button className="sidebar-scrim" aria-label="Close menu" onClick={() => setMenuOpen(false)} />}
      <main className="main-area">
        <header className="topbar">
          <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open navigation"><Menu size={22} /></button>
          <div className="page-heading"><span>AI-Powered Mobile Urban Intelligence Platform</span><h1>{activePage}</h1></div>
          <div className="header-status"><span className="live-dot" /> System prototype</div>
        </header>
        <div className="page-content">{children}</div>
      </main>
    </div>
  )
}
