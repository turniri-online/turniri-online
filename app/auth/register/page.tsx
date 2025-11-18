import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

export default function Register() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-4">Registracija</h1>
        <div className="space-y-3">
          <Input placeholder="Ime" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Lozinka" type="password" />
          <Button>Registriraj se</Button>
        </div>
      </div>
    </main>
  );
}
