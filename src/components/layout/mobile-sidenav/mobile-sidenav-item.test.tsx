import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MobileSidenavItem } from './mobile-sidenav-item';
import { HomeIcon } from 'lucide-react';

describe('<MobileSidenavItem />', () => {
  it('renders correctly with the provided props', () => {
    const { getByText } = render(
      <MobileSidenavItem name="Home" href="/home" Icon={HomeIcon} />,
    );

    expect(getByText('Home')).to.exist;
    expect(document.querySelector('svg')).toBeDefined();
  });
});
