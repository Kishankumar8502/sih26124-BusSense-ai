/**
 * Future integration boundary for the React client.
 * UI components deliberately consume data from data/mockData.ts today.
 * Replace those imports with an API implementation when the backend is ready.
 */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ''

export type ApiResource = 'events' | 'fleet' | 'analytics' | 'road-segments'

export interface ApiClientContract {
  baseUrl: string
  resources: readonly ApiResource[]
}

export const apiContract: ApiClientContract = {
  baseUrl: API_BASE_URL,
  resources: ['events', 'fleet', 'analytics', 'road-segments'],
}
