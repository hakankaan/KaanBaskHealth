import React from 'react';
import { Button } from '@/components/elements/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/elements/dropdown-menu';
import { RefreshCcw, Settings2 } from 'lucide-react';
import { useLayout } from '../../contexts/use-layout';
import { DropdownMenuIcon } from '@radix-ui/react-icons';

type Props = {};

export function SettingsButton({}: Props) {
  const { editModeEnabled, toggleEditMode } = useLayout();

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
          <DropdownMenuItem className="cursor-pointer">
            <span className="ml-6 text-destructive">Reset Layout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
