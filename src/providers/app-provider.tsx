'use client';
import { TooltipProvider } from '@/components/elements';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return <TooltipProvider>{children}</TooltipProvider>;
};
