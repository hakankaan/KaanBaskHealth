import { HomeIcon } from 'lucide-react';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
  name: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => ReactNode;
  href: string;
};

export const MobileSidenavItem = ({ name, href }: Props) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
    >
      <HomeIcon className="h-5 w-5" />
      {name}
    </Link>
  );
};
