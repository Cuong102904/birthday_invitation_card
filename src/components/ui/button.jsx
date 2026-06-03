import { cn } from '../../lib/cn';

export function Button({ className, variant = 'primary', ...props }) {
  const variants = {
    primary:
      'bg-blush-500 text-white shadow-glow hover:bg-blush-600 focus-visible:ring-blush-300',
    secondary:
      'bg-white/80 text-blush-700 ring-1 ring-blush-200 hover:bg-white focus-visible:ring-blush-300',
    ghost:
      'bg-transparent text-blush-700 hover:bg-white/40 focus-visible:ring-blush-300',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-blush-50 disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
