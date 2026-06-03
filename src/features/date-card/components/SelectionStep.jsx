import { motion } from 'motion/react';
import { ExternalLink, Heart } from 'lucide-react';
import { Card } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { cn } from '../../../lib/cn';

export function SelectionStep({
  title,
  subtitle,
  items,
  selectedId,
  onSelect,
  type = 'button',
}) {
  return (
    <Card className="p-5 sm:p-6">
      <div className="mb-5 space-y-2">
        <div className="flex items-center gap-2 text-blush-500">
          <Heart className="h-4 w-4 fill-current" />
          <Badge>{subtitle}</Badge>
        </div>
        <h2 className="text-2xl font-black text-blush-900 sm:text-3xl">{title}</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => {
          const selected = selectedId === item.id;
          return (
            <motion.div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => onSelect(item)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  onSelect(item);
                }
              }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'group rounded-[1.5rem] border p-4 text-left transition outline-none focus-visible:ring-2 focus-visible:ring-blush-300 focus-visible:ring-offset-2 focus-visible:ring-offset-blush-50',
                selected
                  ? 'border-blush-400 bg-blush-50 shadow-glow'
                  : 'border-white/70 bg-white/70 hover:border-blush-200 hover:bg-white',
              )}
            >
              {item.image ? (
                <div className="mb-4 overflow-hidden rounded-[1.1rem] border border-white/70 bg-white/60 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.imageAlt ?? item.label ?? item.name}
                    className="h-36 w-full object-cover sm:h-40"
                    loading="lazy"
                  />
                </div>
              ) : null}
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-blush-900">{item.label ?? item.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-blush-800/80">
                    {item.summary ?? item.accent}
                  </p>
                </div>
                {type === 'restaurant' && item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/80 px-3 py-2 text-xs font-semibold text-blush-600 ring-1 ring-white/70 transition hover:bg-white"
                  >
                    Link <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
}
