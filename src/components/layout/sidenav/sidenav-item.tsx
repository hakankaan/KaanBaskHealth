import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/elements';
import { Package2, HomeIcon } from 'lucide-react';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
  name: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => ReactNode;
  href: string;
};

export const SideNavItem = ({ href, Icon, name }: Props) => {
  return (
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
  );
};
