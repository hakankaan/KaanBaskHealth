import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SideNavItem } from './sidenav-item';
import { HomeIcon } from 'lucide-react';
import { TooltipProvider } from '@/components/elements';

describe('<SideNavItem />', () => {
  it('renders with correct icon and tooltip', async () => {
    render(
      <TooltipProvider>
        <SideNavItem name="Dashboard" Icon={HomeIcon} href="/dashboard" />
      </TooltipProvider>,
    );

    const dashboardLink = screen.getByRole('link');

    expect(dashboardLink).toBeDefined();

    dashboardLink.focus();

    expect(screen.getByText('Dashboard')).toBeDefined();
  });
});
