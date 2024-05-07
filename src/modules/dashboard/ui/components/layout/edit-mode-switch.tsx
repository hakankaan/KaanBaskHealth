'use client';
import React from 'react';
import { useLayout } from '../../contexts/use-layout';
import { Switch } from '@/components/elements/switch';
import { Label } from '@/components/elements/label';
import { SwitchProps } from '@radix-ui/react-switch';

export const EditModeSwitch = () => {
  const { enableEditMode, saveLayout, isEditMode } = useLayout();

  const handleCheck: SwitchProps['onCheckedChange'] = (checked) => {
    if (checked) {
      enableEditMode();
      return;
    }
    saveLayout();
  };

  const getText = () => {
    if (isEditMode) {
      return 'Disable Editing';
    }

    return 'Enable Editing';
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="edit-mode"
        onCheckedChange={handleCheck}
        checked={isEditMode}
      />
      <Label htmlFor="edit-mode">{getText()}</Label>
    </div>
  );
};
