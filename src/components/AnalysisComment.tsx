import { cn } from '@/lib/utils';

interface AnalysisCommentProps {
  text: string;
  className?: string;
}

export default function AnalysisComment({ text, className }: AnalysisCommentProps) {
  return (
    <div className={cn(
      'bg-[#f0f2ff] border-l-2 border-[#313DB8] rounded-r-md px-3 py-2 text-xs text-gray-600 leading-relaxed avoid-break',
      className
    )}>
      {text}
    </div>
  );
}
