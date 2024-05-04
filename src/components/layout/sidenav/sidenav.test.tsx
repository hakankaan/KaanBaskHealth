import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Sidenav } from './sidenav';
import { HomeIcon } from 'lucide-react';

vi.mock('./sidenav-item', () => ({
  SideNavItem: ({ name }: { name: string }) => <div>{name}</div>,
}));

describe('<Sidenav />', () => {
  it('renders all navigation items', () => {
    const { getByText } = render(<Sidenav />);

    expect(getByText('Dashboard')).toBeDefined();
  });
});
