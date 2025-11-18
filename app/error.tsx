'use client';
import { useEffect } from 'react';
export default function Error({ error }: { error: Error }) {
  useEffect(() => { console.error(error); }, [error]);
  return <main className="min-h-screen flex items-center justify-center">Dogodila se pogreška.</main>;
}
