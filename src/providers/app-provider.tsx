import { TooltipProvider } from '@/components/elements';

import { StyleProvider } from '@/modules/styles/ui';
import React from 'react';
import { QueryClientProviderWrapper } from './query-client-provider';

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <QueryClientProviderWrapper>
      <StyleProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </StyleProvider>
    </QueryClientProviderWrapper>
  );
};
