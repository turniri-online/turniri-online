import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { getMockTournaments } from '../../lib/mockDb';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

export default function TurniriPage() {
  const items = getMockTournaments();
  return (
    <main>
      <Navbar />
      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Turniri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map(t => (
            <Card key={t.id}>
              <h3 className="font-bold">{t.title}</h3>
              <p className="text-sm text-gray-600">{t.description}</p>
              <div className="mt-3 flex gap-2">
                <Link href={`/turniri/${t.id}`}><Button>Otvori</Button></Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
