import React from 'react';
import { Button } from '@/components/elements/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/elements/dropdown-menu';
import { Settings2 } from 'lucide-react';
import { useLayout } from '../../contexts/use-layout';

import { useResetLayout } from '@/modules/dashboard/use-cases/use-reset-layout';

type Props = {};

export function SettingsButton({}: Props) {
  const { editModeEnabled, toggleEditMode } = useLayout();
  const { resetLayout } = useResetLayout();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={'icon'}>
          <Settings2 className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Layout Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuCheckboxItem
            checked={editModeEnabled}
            onCheckedChange={toggleEditMode}
            className="cursor-pointer"
          >
            Customization Mode
          </DropdownMenuCheckboxItem>
          <DropdownMenuItem className="cursor-pointer" onClick={resetLayout}>
            <span className="ml-6 text-destructive">Reset Layout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
