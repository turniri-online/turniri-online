import clsx from 'clsx';

export default function Button({ children, className, variant = 'primary' }: { children: React.ReactNode; className?: string; variant?: 'primary' | 'secondary' }) {
  return (
    <button className={clsx('px-4 py-2 rounded shadow-sm transition', {
      'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
      'bg-gray-100 text-gray-800 hover:bg-gray-200': variant === 'secondary'
    }, className)}>{children}</button>
  );
}
