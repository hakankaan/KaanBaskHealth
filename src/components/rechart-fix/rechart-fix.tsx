'use client';

import { useEffect } from 'react';

export const RechartFix = () => {
  useEffect(() => {
    // temporary fix for rechart console error
    // devs are aware of the issue and are working on a fix
    // https://github.com/recharts/recharts/issues/3615
    const error = console.error;
    console.error = (...args: any) => {
      if (/defaultProps/.test(args[0])) return;
      error(...args);
    };
  }, []);

  return null;
};
