import type { RoadSegment } from '../../types'

export function RoadCondition({ segments }: { segments: RoadSegment[] }) {
  return <section className="panel road-panel"><div className="panel-heading"><div><p className="eyebrow">Asset health</p><h2>Road Condition</h2></div><span className="mock-chip">Mock assessment</span></div>
    <div className="road-list">{segments.map((road) => <div className="road-row" key={road.id}><span className={`condition-dot ${road.condition.toLowerCase()}`} /><div><strong>{road.name}</strong><small>Updated {road.updatedAt} · {road.monitoredBy}</small></div><b className={`condition-label ${road.condition.toLowerCase()}`}>{road.condition}</b></div>)}</div>
  </section>
}
