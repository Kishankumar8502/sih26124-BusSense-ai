export type EventType = 'Pothole' | 'Road Damage' | 'Traffic' | 'Possible Incident'
export type Severity = 'High' | 'Medium' | 'Low'
export type EventStatus = 'Unresolved' | 'Investigating' | 'Resolved'
export type BusStatus = 'Online' | 'Offline' | 'Warning'

export interface Bus {
  id: string
  route: string
  status: BusStatus
  lastLocation: string
  lastEvent: string
  lastSeen: string
}

export interface Event {
  id: string
  eventType: EventType
  severity: Severity
  confidence: number
  busId: string
  timestamp: string
  dateGroup: 'Today' | 'Last 7 days' | 'Last 30 days'
  latitude: number
  longitude: number
  status: EventStatus
  locationName: string
}

export interface RoadSegment {
  id: string
  name: string
  condition: 'Good' | 'Moderate' | 'Poor' | 'Critical'
  monitoredBy: string
  updatedAt: string
}

export interface VehicleDetection {
  label: string
  count: number
  timestamp: string
}

export interface AnalyticsData {
  vehicleCount: VehicleDetection[]
  trafficDensity: Array<{ zone: string; density: number }>
  congestionTrend: Array<{ time: string; index: number }>
  roadDefects: Array<{ date: string; potholes: number; roadDamage: number }>
}

export interface EventFiltersState {
  eventType: EventType | 'All'
  severity: Severity | 'All'
  status: EventStatus | 'All'
  date: Event['dateGroup']
}
