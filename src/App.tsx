import { useState } from 'react'
import { AppLayout, type PageName } from './components/layout/AppLayout'
import { EventDetailsModal } from './components/events/EventDetailsModal'
import { Dashboard } from './pages/Dashboard'
import { LiveMap } from './pages/LiveMap'
import { Events } from './pages/Events'
import { Fleet } from './pages/Fleet'
import { Analytics } from './pages/Analytics'
import { Reports } from './pages/Reports'
import type { Event } from './types'

function App() {
  const [activePage, setActivePage] = useState<PageName>('Dashboard')
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const content = {
    Dashboard: <Dashboard onSelectEvent={setSelectedEvent} onNavigate={() => setActivePage('Live Map')} />,
    'Live Map': <LiveMap onSelectEvent={setSelectedEvent} />,
    Events: <Events onSelectEvent={setSelectedEvent} />,
    Fleet: <Fleet />,
    Analytics: <Analytics />,
    Reports: <Reports />,
  } satisfies Record<PageName, React.ReactNode>
  return <AppLayout activePage={activePage} onNavigate={setActivePage}>{content[activePage]}<EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} /></AppLayout>
}

export default App
