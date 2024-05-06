import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Dashboard from './page';
import { AppProvider } from '@/providers/app-provider';

test('renders dashboard', () => {
  render(
    <AppProvider>
      <Dashboard />
    </AppProvider>,
  );
  expect(screen.getByText('Dashboard')).toBeDefined();
});
