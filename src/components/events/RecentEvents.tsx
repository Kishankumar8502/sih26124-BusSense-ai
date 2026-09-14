import { ChevronRight } from 'lucide-react'
import type { Event } from '../../types'

export function RecentEvents({ events, onSelect, limit }: { events: Event[]; onSelect: (event: Event) => void; limit?: number }) {
  const visibleEvents = limit ? events.slice(0, limit) : events
  return <div className="event-list">{visibleEvents.map((event) => <button className="event-row" key={event.id} onClick={() => onSelect(event)}>
    <span className={`event-symbol ${event.eventType.toLowerCase().replaceAll(' ', '-')}`} />
    <span className="event-row-main"><strong>{event.eventType}</strong><small>{event.id} · {event.busId}</small></span>
    <span className="event-row-meta"><b className={`badge severity-${event.severity.toLowerCase()}`}>{event.severity}</b><small>{event.confidence}% · {event.timestamp.split(', ')[1]}</small></span>
    <span className={`badge status-${event.status.toLowerCase()}`}>{event.status}</span><ChevronRight className="event-arrow" size={17} />
  </button>)}</div>
}
