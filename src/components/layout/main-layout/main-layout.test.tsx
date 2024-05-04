import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MainLayout } from './main-layout';

vi.mock('../sidenav', () => ({
  Sidenav: () => <div data-testid="sidenav">Sidenav</div>,
}));
vi.mock('../mobile-sidenav', () => ({
  MobileSidenav: () => <div data-testid="mobile-sidenav">MobileSidenav</div>,
}));

describe('<MainLayout />', () => {
  it('renders the component with children', () => {
    const { getByTestId, getByText } = render(
      <MainLayout>
        <div>Test Child</div>
      </MainLayout>,
    );

    expect(getByTestId('sidenav')).toBeDefined();
    expect(getByTestId('mobile-sidenav')).toBeDefined();
    expect(getByText('Test Child')).toBeDefined();
  });

  it('passes children correctly to the main section', () => {
    const { getByText } = render(
      <MainLayout>
        <p>Unique Content</p>
      </MainLayout>,
    );

    expect(getByText('Unique Content')).to.exist;
  });
});
