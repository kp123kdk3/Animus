import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  gradient?: boolean;
}

export function Card({
  children,
  className,
  hover = false,
  gradient = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-gray-200 bg-white p-6 shadow-sm',
        hover && 'transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-200',
        gradient && 'bg-gradient-to-br from-white to-gray-50',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
