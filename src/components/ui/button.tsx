import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

function Button({ className, variant = 'default', size = 'md', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
        variant === 'default' && 'bg-[#313DB8] text-white hover:bg-[#2a34a0]',
        variant === 'outline' && 'border border-[#313DB8] text-[#313DB8] hover:bg-[#e8eaf6]',
        variant === 'ghost' && 'text-gray-700 hover:bg-gray-100',
        size === 'sm' && 'h-8 px-3 text-xs',
        size === 'md' && 'h-9 px-4 text-sm',
        size === 'lg' && 'h-10 px-6 text-sm',
        className
      )}
      {...props}
    />
  );
}

export { Button };
