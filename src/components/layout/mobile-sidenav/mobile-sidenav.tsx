import {
  Button,
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/elements';
import { PanelLeft, Package2, HomeIcon } from 'lucide-react';
import React, { ComponentProps } from 'react';
import { MobileSidenavItem } from './mobile-sidenav-item';
import Link from 'next/link';

type Props = {};

export const MobileSidenav = (props: Props) => {
  const items = [
    {
      name: 'Dashboard',
      Icon: HomeIcon,
      href: '#',
    },
  ] as ComponentProps<typeof MobileSidenavItem>[];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          {items.map((item) => (
            <MobileSidenavItem key={item.name} {...item} />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
