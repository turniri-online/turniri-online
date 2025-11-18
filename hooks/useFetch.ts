import { useEffect, useState } from 'react';
export function useFetch<T = any>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let mounted = true;
    fetch(url)
      .then(r => r.json())
      .then(d => mounted && setData(d))
      .catch(() => null)
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, [url]);
  return { data, loading };
}
