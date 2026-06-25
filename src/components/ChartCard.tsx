import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ChartCardProps {
  title: string;
  description?: string;
  basisLabel?: string;
  basisValue?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ChartCard({
  title,
  description,
  basisLabel,
  basisValue,
  children,
  className,
}: ChartCardProps) {
  return (
    <Card className={cn('avoid-break', className)}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-sm font-semibold text-gray-800">{title}</CardTitle>
            {description && (
              <CardDescription className="mt-0.5 text-xs text-gray-500 leading-relaxed">
                {description}
              </CardDescription>
            )}
          </div>
          {basisLabel && basisValue && (
            <Badge variant="default" className="shrink-0 text-[10px] whitespace-nowrap">
              {basisLabel} {basisValue}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-1">
        {children}
      </CardContent>
    </Card>
  );
}
