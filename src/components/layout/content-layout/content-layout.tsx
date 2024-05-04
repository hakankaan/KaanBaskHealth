import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

export const ContentLayout = ({ title, children }: Props) => {
  return (
    <div>
      <div
        className={cn(
          'max-w-7xl mx-auto px-4 mb-2',
          'sm:px-6',
          'md:px-8 md:mb-4',
        )}
      >
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      </div>
      <div className={cn('max-w-7xl mx-auto px-4', 'sm:px-6', 'md:px-8')}>
        {children}
      </div>
    </div>
  );
};
