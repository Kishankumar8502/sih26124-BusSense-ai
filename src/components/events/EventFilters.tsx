import type { EventFiltersState } from '../../types'

interface EventFiltersProps { filters: EventFiltersState; onChange: (filters: EventFiltersState) => void }

export function EventFilters({ filters, onChange }: EventFiltersProps) {
  const update = (key: keyof EventFiltersState, value: string) => onChange({ ...filters, [key]: value } as EventFiltersState)
  return <section className="filters" aria-label="Event filters">
    <label>Event Type<select value={filters.eventType} onChange={(e) => update('eventType', e.target.value)}><option>All</option><option>Pothole</option><option>Road Damage</option><option>Traffic</option><option>Possible Incident</option></select></label>
    <label>Severity<select value={filters.severity} onChange={(e) => update('severity', e.target.value)}><option>All</option><option>High</option><option>Medium</option><option>Low</option></select></label>
    <label>Status<select value={filters.status} onChange={(e) => update('status', e.target.value)}><option>All</option><option>Unresolved</option><option>Investigating</option><option>Resolved</option></select></label>
    <label>Date<select value={filters.date} onChange={(e) => update('date', e.target.value)}><option>Today</option><option>Last 7 days</option><option>Last 30 days</option></select></label>
  </section>
}
