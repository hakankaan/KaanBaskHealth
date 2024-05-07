'use client';

import { Button } from '@/components/elements';
import { Save } from 'lucide-react';
import React from 'react';
import { useLayout } from '../../contexts/use-layout';
import EnableEditModeButton from './enable-edit-mode-button';

export function ActionButton() {
  const { saveLayout, isEditMode } = useLayout();

  if (isEditMode) {
    return (
      <Button variant="ghost" size="icon" onClick={saveLayout}>
        <Save className="h-4 w-4" />
      </Button>
    );
  }

  return <EnableEditModeButton />;
}
