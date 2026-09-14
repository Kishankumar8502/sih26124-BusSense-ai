import type { Bus } from '../../types'

export function FleetTable({ buses }: { buses: Bus[] }) {
  return <div className="table-wrap"><table className="fleet-table"><thead><tr><th>Bus ID</th><th>Route</th><th>Status</th><th>Last Location</th><th>Last Event</th><th>Last Seen</th></tr></thead><tbody>{buses.map((bus) => <tr key={bus.id}><td><strong>{bus.id}</strong></td><td>{bus.route}</td><td><span className={`status-cell ${bus.status.toLowerCase()}`}><i />{bus.status}</span></td><td>{bus.lastLocation}</td><td>{bus.lastEvent}</td><td>{bus.lastSeen}</td></tr>)}</tbody></table></div>
}
