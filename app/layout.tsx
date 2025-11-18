import './globals.css';

export const metadata = {
  title: 'Turniri Online',
  description: 'Kreiranje i igranje turnira online',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
