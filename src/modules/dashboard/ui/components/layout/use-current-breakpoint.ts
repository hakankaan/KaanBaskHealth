'use client';

import useScreenWidth from '@/hooks/use-screen-width';
import { useMemo } from 'react';

type Props = {
  breakpoints: {
    lg: number;
    md: number;
    sm: number;
    xs: number;
    xxs: number;
  };
};

export function useCurrentBreakpoint({ breakpoints }: Props) {
  const width = useScreenWidth();

  const breakPoint = useMemo(() => {
    if (!width) return;

    if (width >= breakpoints.lg) {
      return 'lg';
    }
    if (width >= breakpoints.md) {
      return 'md';
    }
    if (width >= breakpoints.sm) {
      return 'sm';
    }
    if (width >= breakpoints.xs) {
      return 'xs';
    }
    return 'xxs';
  }, [width, breakpoints]);

  return breakPoint;
}
