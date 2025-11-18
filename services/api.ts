export async function fetchTournaments() {
  const res = await fetch('/api/tournaments');
  if (!res.ok) throw new Error('Failed to fetch');
  const json = await res.json();
  return json.data;
}
