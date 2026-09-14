import { X, MapPin, BusFront, ShieldAlert, CalendarClock } from 'lucide-react'
import type { Event } from '../../types'

export function EventDetailsModal({ event, onClose }: { event: Event | null; onClose: () => void }) {
  if (!event) return null
  return <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
    <section className="event-modal" role="dialog" aria-modal="true" aria-labelledby="event-title" onMouseDown={(e) => e.stopPropagation()}>
      <button className="modal-close" aria-label="Close event details" onClick={onClose}><X size={20} /></button>
      <div className="modal-eyebrow">Event intelligence record</div><h2 id="event-title">{event.id}</h2>
      <div className="event-detail-grid">
        <div><span>Event Type</span><strong>{event.eventType}</strong></div><div><span>Severity</span><b className={`badge severity-${event.severity.toLowerCase()}`}>{event.severity}</b></div>
        <div><span>Confidence</span><strong>{event.confidence}%</strong></div><div><span>Status</span><b className={`badge status-${event.status.toLowerCase()}`}>{event.status}</b></div>
      </div>
      <div className="modal-meta"><p><BusFront size={17} /> Detected by <strong>{event.busId}</strong></p><p><CalendarClock size={17} /> {event.timestamp}</p><p><MapPin size={17} /> {event.latitude.toFixed(4)}, {event.longitude.toFixed(4)} · {event.locationName}</p></div>
      <div className="evidence-placeholder"><ShieldAlert size={24} /><div><strong>AI Detection Evidence</strong><span>Placeholder area — image evidence will be connected later.</span></div></div>
    </section>
  </div>
}
