import { cn } from '../../lib/cn';

export function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-blush-700 ring-1 ring-white/80',
        className,
      )}
      {...props}
    />
  );
}
