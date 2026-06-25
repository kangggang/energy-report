import { cn } from '@/lib/utils';

interface ReportPageProps {
  children: React.ReactNode;
  className?: string;
  isCover?: boolean;
  pageNumber?: number;
  reportTitle?: string;
}

export default function ReportPage({
  children,
  className,
  isCover = false,
  pageNumber,
  reportTitle = '산업단지 재생에너지 설계 시뮬레이션 결과 보고서',
}: ReportPageProps) {
  return (
    <div className={cn('report-page', isCover && 'cover-page', className)}>
      {children}
      {!isCover && pageNumber !== undefined && (
        <div className="page-footer">
          <span>{reportTitle}</span>
          <span>{pageNumber}</span>
        </div>
      )}
    </div>
  );
}
