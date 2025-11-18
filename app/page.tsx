import Link from 'next/link';
import Navbar from '../components/Navbar';
import Button from '../components/ui/Button';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="container mx-auto p-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Turniri Online</h1>
        <p className="text-lg text-gray-600 mb-6">Platforma za kreiranje i igranje turnira online — skeleton project.</p>
        <div className="flex justify-center gap-3">
          <Link href="/turniri"><Button>Pregled turnira</Button></Link>
          <Link href="/dashboard"><Button variant="secondary">Dashboard</Button></Link>
        </div>
      </section>
    </main>
  );
}
