import { TooltipProvider } from '@/components/elements';
import { StyleProvider } from '@/modules/styles/ui';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <StyleProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </StyleProvider>
  );
};
