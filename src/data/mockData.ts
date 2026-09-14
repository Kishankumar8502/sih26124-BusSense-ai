import type { AnalyticsData, Bus, Event, RoadSegment } from '../types'

export const events: Event[] = [
  { id: 'POTHOLE #127', eventType: 'Pothole', severity: 'High', confidence: 96, busId: 'BUS_102', timestamp: '14 Sep 2026, 16:42', dateGroup: 'Today', latitude: 12.9716, longitude: 77.5946, status: 'Unresolved', locationName: 'MG Road, Bengaluru' },
  { id: 'ROAD #084', eventType: 'Road Damage', severity: 'Medium', confidence: 91, busId: 'BUS_104', timestamp: '14 Sep 2026, 15:18', dateGroup: 'Today', latitude: 12.9754, longitude: 77.6064, status: 'Investigating', locationName: 'Cubbon Road, Bengaluru' },
  { id: 'TRAFFIC #231', eventType: 'Traffic', severity: 'High', confidence: 88, busId: 'BUS_101', timestamp: '14 Sep 2026, 14:55', dateGroup: 'Today', latitude: 12.9635, longitude: 77.5853, status: 'Investigating', locationName: 'Kasturba Road, Bengaluru' },
  { id: 'INCIDENT #032', eventType: 'Possible Incident', severity: 'High', confidence: 79, busId: 'BUS_103', timestamp: '14 Sep 2026, 13:37', dateGroup: 'Today', latitude: 12.9841, longitude: 77.5905, status: 'Unresolved', locationName: 'Palace Road, Bengaluru' },
  { id: 'POTHOLE #126', eventType: 'Pothole', severity: 'Medium', confidence: 94, busId: 'BUS_105', timestamp: '13 Sep 2026, 18:06', dateGroup: 'Last 7 days', latitude: 12.9587, longitude: 77.6012, status: 'Resolved', locationName: 'Wilson Garden, Bengaluru' },
  { id: 'TRAFFIC #228', eventType: 'Traffic', severity: 'Low', confidence: 82, busId: 'BUS_101', timestamp: '09 Sep 2026, 08:43', dateGroup: 'Last 7 days', latitude: 12.9912, longitude: 77.5858, status: 'Resolved', locationName: 'Seshadripuram, Bengaluru' },
  { id: 'ROAD #081', eventType: 'Road Damage', severity: 'Low', confidence: 86, busId: 'BUS_104', timestamp: '22 Aug 2026, 11:19', dateGroup: 'Last 30 days', latitude: 12.9498, longitude: 77.5975, status: 'Resolved', locationName: 'Lalbagh Road, Bengaluru' },
]

export const buses: Bus[] = [
  { id: 'BUS_101', route: 'Majestic — Koramangala', status: 'Online', lastLocation: 'Kasturba Road', lastEvent: 'Traffic #231', lastSeen: 'Just now' },
  { id: 'BUS_102', route: 'Yeshwanthpur — MG Road', status: 'Online', lastLocation: 'MG Road', lastEvent: 'Pothole #127', lastSeen: '1 min ago' },
  { id: 'BUS_103', route: 'Shivajinagar — Palace Road', status: 'Warning', lastLocation: 'Palace Road', lastEvent: 'Incident #032', lastSeen: '3 min ago' },
  { id: 'BUS_104', route: 'Indiranagar — City Market', status: 'Online', lastLocation: 'Cubbon Road', lastEvent: 'Road #084', lastSeen: '2 min ago' },
  { id: 'BUS_105', route: 'Jayanagar — Majestic', status: 'Offline', lastLocation: 'Wilson Garden', lastEvent: 'Pothole #126', lastSeen: '26 min ago' },
]

export const roadSegments: RoadSegment[] = [
  { id: 'road-a', name: 'MG Road', condition: 'Moderate', monitoredBy: 'BUS_102', updatedAt: '16:42' },
  { id: 'road-b', name: 'Road Segment B', condition: 'Poor', monitoredBy: 'BUS_104', updatedAt: '15:18' },
  { id: 'road-c', name: 'Road Segment C', condition: 'Critical', monitoredBy: 'BUS_103', updatedAt: '13:37' },
  { id: 'road-d', name: 'Kasturba Road', condition: 'Good', monitoredBy: 'BUS_101', updatedAt: '14:55' },
]

export const analyticsData: AnalyticsData = {
  vehicleCount: [
    { timestamp: '08:00', label: 'Vehicles', count: 168 }, { timestamp: '10:00', label: 'Vehicles', count: 245 },
    { timestamp: '12:00', label: 'Vehicles', count: 196 }, { timestamp: '14:00', label: 'Vehicles', count: 282 },
    { timestamp: '16:00', label: 'Vehicles', count: 334 }, { timestamp: '18:00', label: 'Vehicles', count: 309 },
  ],
  trafficDensity: [
    { zone: 'MG Rd', density: 82 }, { zone: 'Cubbon', density: 58 }, { zone: 'Palace', density: 71 }, { zone: 'Lalbagh', density: 43 }, { zone: 'Market', density: 65 },
  ],
  congestionTrend: [
    { time: '08:00', index: 42 }, { time: '10:00', index: 61 }, { time: '12:00', index: 49 }, { time: '14:00', index: 68 }, { time: '16:00', index: 82 }, { time: '18:00', index: 74 },
  ],
  roadDefects: [
    { date: 'Mon', potholes: 12, roadDamage: 5 }, { date: 'Tue', potholes: 18, roadDamage: 7 }, { date: 'Wed', potholes: 15, roadDamage: 6 }, { date: 'Thu', potholes: 21, roadDamage: 9 }, { date: 'Fri', potholes: 17, roadDamage: 8 }, { date: 'Sat', potholes: 13, roadDamage: 4 }, { date: 'Sun', potholes: 9, roadDamage: 3 },
  ],
}
