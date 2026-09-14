import { AlertTriangle, BusFront, Construction, TrafficCone } from 'lucide-react'

const metrics = [
  { label: 'Active Buses', value: '12', detail: 'in the prototype fleet', icon: BusFront, tone: 'blue' },
  { label: 'Events Today', value: '247', detail: 'mock detections recorded', icon: AlertTriangle, tone: 'amber' },
  { label: 'Road Defects', value: '83', detail: 'requiring review', icon: Construction, tone: 'red' },
  { label: 'Traffic Hotspots', value: '14', detail: 'across monitored corridors', icon: TrafficCone, tone: 'violet' },
]

export function KpiCards() {
  return <section className="kpi-grid" aria-label="System overview">{metrics.map(({ label, value, detail, icon: Icon, tone }) => (
    <article className="kpi-card" key={label}><div className={`kpi-icon ${tone}`}><Icon size={21} /></div><div><p>{label}</p><strong>{value}</strong><small>{detail}</small></div></article>
  ))}</section>
}
