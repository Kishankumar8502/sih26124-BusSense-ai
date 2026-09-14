import { useEffect } from 'react'
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from 'react-leaflet'
import type { Event } from '../../types'

const eventColors: Record<Event['eventType'], string> = { Pothole: '#e05d3f', 'Road Damage': '#e79a3b', Traffic: '#7c64d7', 'Possible Incident': '#b53d56' }

function FocusOnEvent({ event }: { event?: Event | null }) {
  const map = useMap()
  useEffect(() => { if (event) map.flyTo([event.latitude, event.longitude], 15, { duration: 0.7 }) }, [event, map])
  return null
}

export function CityMap({ events, focusedEvent, onSelect }: { events: Event[]; focusedEvent?: Event | null; onSelect: (event: Event) => void }) {
  return <div className="city-map"><MapContainer center={[12.9716, 77.5946]} zoom={13} scrollWheelZoom className="leaflet-map" aria-label="Bengaluru prototype event map">
    <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <FocusOnEvent event={focusedEvent} />
    {events.map((event) => <CircleMarker key={event.id} center={[event.latitude, event.longitude]} radius={9} pathOptions={{ color: '#ffffff', fillColor: eventColors[event.eventType], fillOpacity: 1, weight: 3 }} eventHandlers={{ click: () => onSelect(event) }}>
      <Popup><strong>{event.id}</strong><br />{event.eventType} · {event.severity}<br />{event.busId} · {event.confidence}%<br /><button className="popup-action" onClick={() => onSelect(event)}>Open details</button></Popup>
    </CircleMarker>)}
  </MapContainer><div className="map-overlay-label"><span className="live-dot" /> Bengaluru prototype area</div><div className="map-legend">{Object.entries(eventColors).map(([name, color]) => <span key={name}><i style={{ background: color }} />{name}</span>)}</div></div>
}
