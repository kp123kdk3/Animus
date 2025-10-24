import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white hover:shadow-lg hover:scale-105 hover:shadow-indigo-500/50',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50',
    ghost: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
