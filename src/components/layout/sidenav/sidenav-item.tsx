import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/elements';
import { Package2, HomeIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type Props = {
  name: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  href: string;
};

export const SideNavItem = ({ href, Icon, name }: Props) => {
  return (
    <nav className="flex flex-col items-center gap-4 px-2 py-4">
      <Link
        href="#"
        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
      >
        <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Icon className="h-5 w-5" />
            <span className="sr-only">{name}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{name}</TooltipContent>
      </Tooltip>
    </nav>
  );
};
