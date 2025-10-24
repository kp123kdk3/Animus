import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'outline';
}

export function Badge({
  children,
  variant = 'default',
  className,
  ...props
}: BadgeProps) {
  const variants = {
    default: 'bg-indigo-100 text-indigo-700',
    gradient: 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white',
    outline: 'border-2 border-indigo-500 text-indigo-700 bg-transparent',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
