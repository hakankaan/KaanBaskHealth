'use client';

import { useContext } from 'react';
import { LayoutContext } from './layout-context';

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};
