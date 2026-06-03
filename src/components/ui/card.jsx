import { cn } from '../../lib/cn';

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'rounded-[2rem] border border-white/60 bg-white/70 shadow-[0_25px_70px_rgba(255,63,127,0.18)] backdrop-blur-xl',
        className,
      )}
      {...props}
    />
  );
}
