export type Tournament = {
  id: string;
  title: string;
  description?: string;
};

const MOCK: Tournament[] = [
  { id: '1', title: 'Briskula Cup', description: 'Briskula online turnir' },
  { id: '2', title: 'Treseta Masters', description: 'Treseta ligica' },
];

export function getMockTournaments() {
  return MOCK;
}

export function getMockTournamentById(id: string) {
  return MOCK.find(m => m.id === id) || null;
}
