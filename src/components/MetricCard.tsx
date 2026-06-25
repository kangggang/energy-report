import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  label: string;
  value: string | number;
  unit?: string;
  description?: string;
  highlight?: boolean;
  status?: 'positive' | 'negative' | 'neutral';
  className?: string;
}

export default function MetricCard({
  label,
  value,
  unit,
  description,
  highlight = false,
  status = 'neutral',
  className,
}: MetricCardProps) {
  return (
    <Card className={cn(
      'avoid-break',
      highlight && 'border-[#313DB8] border-l-4',
      className
    )}>
      <CardContent className="p-4">
        <p className="text-xs text-gray-500 mb-1">{label}</p>
        <div className="flex items-baseline gap-1">
          <span className={cn(
            'text-xl font-bold metric-value leading-none',
            status === 'positive' && 'text-[#313DB8]',
            status === 'negative' && 'text-red-600',
            status === 'neutral' && 'text-gray-900',
            highlight && 'text-2xl text-[#313DB8]'
          )}>
            {typeof value === 'number' ? value.toLocaleString() : value}
          </span>
          {unit && <span className="text-xs text-gray-500">{unit}</span>}
        </div>
        {description && <p className="text-xs text-gray-400 mt-1">{description}</p>}
      </CardContent>
    </Card>
  );
}
