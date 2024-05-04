import { HomeIcon } from 'lucide-react';
import React, { ComponentProps } from 'react';
import { SideNavItem } from './sidenav-item';

type Props = {};

export function Sidenav({}: Props) {
  const items = [
    {
      name: 'Dashboard',
      Icon: HomeIcon,
      href: '#',
    },
  ] as ComponentProps<typeof SideNavItem>[];

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      {items.map((item) => (
        <SideNavItem key={item.name} {...item} />
      ))}
    </aside>
  );
}
