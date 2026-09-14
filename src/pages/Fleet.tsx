import { BusFront, Radio } from 'lucide-react'
import { FleetTable } from '../components/fleet/FleetTable'
import { buses } from '../data/mockData'

export function Fleet() { const online = buses.filter((bus) => bus.status === 'Online').length
  return <section className="page-section"><div className="section-intro"><p className="eyebrow">Mobile sensor fleet</p><h2>Fleet Overview</h2><p>Prototype fleet health and last known operating information.</p></div><div className="fleet-summary"><div><BusFront size={21}/><span><strong>{buses.length}</strong> configured buses</span></div><div><Radio size={20}/><span><strong>{online}</strong> reporting online</span></div><small>All values are mock data</small></div><section className="panel"><div className="panel-heading"><div><p className="eyebrow">Fleet telemetry</p><h2>Bus status board</h2></div><span className="mock-chip">Prototype</span></div><FleetTable buses={buses}/></section></section>
}
