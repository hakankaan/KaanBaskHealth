import { ReloadIcon } from '@radix-ui/react-icons';
import React from 'react';

export function LoadingPlaceholder() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
    </div>
  );
}
