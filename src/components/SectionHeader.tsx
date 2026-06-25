import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  sectionNumber: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ sectionNumber, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn('avoid-break mb-5', className)}>
      <div className="flex items-baseline gap-3 mb-1">
        <span className="text-3xl font-bold text-[#313DB8] leading-none tracking-tight">
          {sectionNumber}
        </span>
        <h2 className="text-lg font-bold text-gray-900 leading-tight">{title}</h2>
      </div>
      {subtitle && <p className="text-xs text-gray-500 mt-1 ml-0.5">{subtitle}</p>}
      <Separator className="mt-2 bg-[#313DB8]/20" />
    </div>
  );
}
