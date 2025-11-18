import Navbar from '../../../components/Navbar';
import { getMockTournamentById } from '../../../lib/mockDb';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

type PageProps = {
  params: {
    id: string;
  };
};

export default function TournamentPage({ params }: PageProps) {
  const t = getMockTournamentById(params.id);

  if (!t) {
    return (
      <main>
        <Navbar />
        <div className="container p-6">Turnir nije pronađen.</div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">{t.title}</h2>
        <Card>
          <p>{t.description}</p>
          <div className="mt-4">
            <Button>Prijavi se</Button>
          </div>
        </Card>
      </section>
    </main>
  );
}
