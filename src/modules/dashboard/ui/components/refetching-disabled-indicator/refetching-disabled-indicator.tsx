import React from 'react';
import { useLayout } from '../../contexts/use-layout';
import { TriangleAlert } from 'lucide-react';

export function RefetchingDisabledIndicator() {
  const { editModeEnabled } = useLayout();

  if (!editModeEnabled) {
    return null;
  }

  return (
    <div className="flex gap-1 items-center text-destructive">
      <TriangleAlert className="h-3 w-3 " />
      <span className="text-xs">Refetching disabled</span>
    </div>
  );
}
