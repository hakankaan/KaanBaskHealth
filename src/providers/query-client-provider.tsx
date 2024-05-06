'use client';

import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const QueryClientProviderWrapper = (props: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};
