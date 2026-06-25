import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'outline' | 'muted';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium transition-colors',
        variant === 'default' && 'bg-[#e8eaf6] text-[#313DB8]',
        variant === 'primary' && 'bg-[#313DB8] text-white',
        variant === 'outline' && 'border border-[#313DB8] text-[#313DB8] bg-transparent',
        variant === 'muted' && 'bg-gray-100 text-gray-600',
        className
      )}
      {...props}
    />
  );
}

export { Badge };
