import { useMemo, useState } from 'react'
import { EventFilters } from '../components/events/EventFilters'
import { CityMap } from '../components/map/CityMap'
import { events } from '../data/mockData'
import type { Event, EventFiltersState } from '../types'

const initialFilters: EventFiltersState = { eventType: 'All', severity: 'All', status: 'All', date: 'Today' }
export function LiveMap({ onSelectEvent }: { onSelectEvent: (event: Event) => void }) {
  const [filters, setFilters] = useState(initialFilters); const [focused, setFocused] = useState<Event | null>(null)
  const filtered = useMemo(() => events.filter((event) => (filters.eventType === 'All' || event.eventType === filters.eventType) && (filters.severity === 'All' || event.severity === filters.severity) && (filters.status === 'All' || event.status === filters.status) && event.dateGroup === filters.date), [filters])
  const select = (event: Event) => { setFocused(event); onSelectEvent(event) }
  return <section className="page-section"><div className="section-intro"><p className="eyebrow">Prototype GIS workspace</p><h2>Live Map</h2><p>Interactive mock event positions around Bengaluru. Select a marker to inspect its record.</p></div><div className="panel full-map-panel"><EventFilters filters={filters} onChange={setFilters}/><CityMap events={filtered} focusedEvent={focused} onSelect={select}/></div></section>
}
