import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect, vi } from 'vitest';
import Dashboard from './page';
import { AppProvider } from '@/providers/app-provider';

vi.mock('@tanstack/react-query', async (importOriginal) => {
  const actual = (await importOriginal()) as object;
  return {
    ...actual,
    useQuery: vi.fn(() => ({
      isLoading: false,
      isSuccess: true,
      data: [],
    })),
  };
});

test('renders dashboard', () => {
  render(
    <AppProvider>
      <Dashboard />
    </AppProvider>,
  );
  expect(screen.getByText('Dashboard')).toBeDefined();
});
