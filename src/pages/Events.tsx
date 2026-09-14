import { useMemo, useState } from 'react'
import { EventFilters } from '../components/events/EventFilters'
import { RecentEvents } from '../components/events/RecentEvents'
import { events } from '../data/mockData'
import type { Event, EventFiltersState } from '../types'

const initialFilters: EventFiltersState = { eventType: 'All', severity: 'All', status: 'All', date: 'Today' }
export function Events({ onSelectEvent }: { onSelectEvent: (event: Event) => void }) {
  const [filters, setFilters] = useState(initialFilters)
  const filtered = useMemo(() => events.filter((event) => (filters.eventType === 'All' || event.eventType === filters.eventType) && (filters.severity === 'All' || event.severity === filters.severity) && (filters.status === 'All' || event.status === filters.status) && event.dateGroup === filters.date), [filters])
  return <section className="page-section"><div className="section-intro"><p className="eyebrow">Detection registry</p><h2>Events</h2><p>Mock events are designed to be replaced by the future platform data source.</p></div><div className="panel event-registry"><EventFilters filters={filters} onChange={setFilters}/><div className="event-list-header"><span>{filtered.length} matching prototype events</span><span>Click a row for details</span></div><RecentEvents events={filtered} onSelect={onSelectEvent}/></div></section>
}
