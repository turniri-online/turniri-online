import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="font-bold">Turniri Online</Link>
        <div className="flex gap-3">
          <Link href="/turniri" className="text-sm">Turniri</Link>
          <Link href="/dashboard" className="text-sm">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}
