import { describe, it, expect, vi } from 'vitest';
import { findByText, queryByText, render } from '@testing-library/react';
import { MobileSidenav } from './mobile-sidenav';

vi.mock('./mobile-sidenav-item', () => ({
  MobileSidenavItem: ({ name }: { name: string }) => <div>{name}</div>,
}));

describe('<MobileSidenav />', () => {
  it('renders the toggle button and menu items', async () => {
    const { getByText } = render(<MobileSidenav />);

    const toggleButton = getByText('Toggle Menu');

    expect(queryByText(document.body, 'Dashboard')).to.equal(null);

    expect(toggleButton).toBeDefined();
    toggleButton.click();
    expect(await findByText(document.body, 'Dashboard')).toBeDefined();
  });
});
