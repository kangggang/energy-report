import { cn } from '@/lib/utils';

interface Column<T> {
  key: keyof T | string;
  header: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: unknown, row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  caption?: string;
  className?: string;
  compact?: boolean;
}

export default function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  caption,
  className,
  compact = false,
}: DataTableProps<T>) {
  return (
    <div className={cn('overflow-x-auto avoid-break', className)}>
      <table className="w-full text-xs border-collapse">
        {caption && (
          <caption className="text-xs text-gray-500 text-left mb-1 caption-bottom">{caption}</caption>
        )}
        <thead>
          <tr className="border-b-2 border-[#313DB8]">
            {columns.map((col, i) => (
              <th
                key={i}
                className={cn(
                  'font-semibold text-gray-700 bg-[#f0f2ff]',
                  compact ? 'px-2 py-1.5' : 'px-3 py-2',
                  col.align === 'right' && 'text-right',
                  col.align === 'center' && 'text-center',
                  col.align === 'left' || !col.align ? 'text-left' : ''
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, ri) => (
            <tr
              key={ri}
              className={cn(
                'border-b border-gray-100',
                ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
              )}
            >
              {columns.map((col, ci) => {
                const rawValue = (row as Record<string, unknown>)[col.key as string];
                return (
                  <td
                    key={ci}
                    className={cn(
                      'text-gray-700',
                      compact ? 'px-2 py-1' : 'px-3 py-2',
                      col.align === 'right' && 'text-right tabular-nums',
                      col.align === 'center' && 'text-center',
                      col.align === 'left' || !col.align ? 'text-left' : ''
                    )}
                  >
                    {col.render ? col.render(rawValue, row) : rawValue != null ? String(rawValue) : '—'}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
