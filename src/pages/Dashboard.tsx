import { ArrowUpRight, MapPin } from 'lucide-react'
import { useMemo, useState } from 'react'
import { roadSegments, events } from '../data/mockData'
import { KpiCards } from '../components/dashboard/KpiCards'
import { RoadCondition } from '../components/dashboard/RoadCondition'
import { CityMap } from '../components/map/CityMap'
import { EventFilters } from '../components/events/EventFilters'
import { RecentEvents } from '../components/events/RecentEvents'
import type { Event, EventFiltersState } from '../types'

const initialFilters: EventFiltersState = { eventType: 'All', severity: 'All', status: 'All', date: 'Today' }
const filterEvents = (filters: EventFiltersState) => events.filter((event) => (filters.eventType === 'All' || event.eventType === filters.eventType) && (filters.severity === 'All' || event.severity === filters.severity) && (filters.status === 'All' || event.status === filters.status) && event.dateGroup === filters.date)

export function Dashboard({ onSelectEvent, onNavigate }: { onSelectEvent: (event: Event) => void; onNavigate: () => void }) {
  const [filters, setFilters] = useState(initialFilters)
  const [focusedEvent, setFocusedEvent] = useState<Event | null>(events[0])
  const filtered = useMemo(() => filterEvents(filters), [filters])
  const select = (event: Event) => { setFocusedEvent(event); onSelectEvent(event) }
  return <>
    <div className="welcome-row"><div><p className="eyebrow">Operations overview · 14 Sep 2026</p><h2>Mobile sensors, one city view.</h2><p>Prototype dashboard showing how public buses can surface road and traffic intelligence.</p></div><div className="city-label"><MapPin size={17} /> Bengaluru · Mock data</div></div>
    <KpiCards />
    <div className="dashboard-grid"><section className="panel map-panel"><div className="panel-heading"><div><p className="eyebrow">Geospatial event intelligence</p><h2>Live Event Map</h2></div><button className="text-button" onClick={onNavigate}>Open full map <ArrowUpRight size={16}/></button></div><EventFilters filters={filters} onChange={setFilters} /><CityMap events={filtered} focusedEvent={focusedEvent} onSelect={select} /></section>
      <section className="panel recent-panel"><div className="panel-heading"><div><p className="eyebrow">Detection stream</p><h2>Recent Events</h2></div><span className="count-pill">{filtered.length}</span></div><RecentEvents events={filtered} onSelect={select} limit={5} /><button className="text-button bottom-action" onClick={onNavigate}>View event registry <ArrowUpRight size={16}/></button></section></div>
    <RoadCondition segments={roadSegments} />
  </>
}
