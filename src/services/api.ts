export type EmergencyContact = {
	name: string;
	number: string;
	type: string;
};

export type EmergencyCategory = {
	category: string;
	color?: string;
	contacts: EmergencyContact[];
};

const API_URL = import.meta.env.VITE_EMERGENCY_API_URL as string | undefined;
const API_KEY = import.meta.env.VITE_EMERGENCY_API_KEY as string | undefined;

export async function fetchEmergencyContactsByState(state: string, signal?: AbortSignal): Promise<EmergencyCategory[]> {
  try {
    if (!API_URL) throw new Error('API_URL not set');

    const url = new URL(API_URL);
    url.searchParams.set('state', state);

    const res = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        ...(API_KEY ? { 'Authorization': `Bearer ${API_KEY}` } : {}),
      },
      signal,
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch contacts (${res.status})`);
    }

    const data = await res.json();

    if (Array.isArray(data)) return data as EmergencyCategory[];
    if (Array.isArray(data?.categories)) return data.categories as EmergencyCategory[];
    throw new Error('Unexpected API response');
  } catch (e) {
    // Local development fallback with state-specific data
    const res = await fetch('/emergency-contacts.json', { signal });
    const data = await res.json();
    
    // Try state-specific data first, then default
    const stateData = data[state] || data['default'];
    return (Array.isArray(stateData?.categories) ? stateData.categories : stateData) as EmergencyCategory[];
  }
}