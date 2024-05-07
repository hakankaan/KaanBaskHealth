import React from 'react';
import { useLayout } from '../../contexts/use-layout';
import { Button } from '@/components/elements';
import { Settings2 } from 'lucide-react';

export default function EnableEditModeButton() {
  const { enableEditMode } = useLayout();

  const handleClick = enableEditMode;

  return (
    <Button variant="ghost" size="icon" onClick={handleClick}>
      <Settings2 className="h-4 w-4" />
    </Button>
  );
}
