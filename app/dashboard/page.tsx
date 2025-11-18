import Navbar from '../../components/Navbar';
import Card from '../../components/ui/Card';

export default function Dashboard() {
  return (
    <main>
      <Navbar />
      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>Stats / widgets go here</Card>
          <Card>Recent matches / activity</Card>
        </div>
      </section>
    </main>
  );
}
