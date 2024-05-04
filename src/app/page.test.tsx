import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Dashboard from './page';

test('renders dashboard', () => {
  render(<Dashboard />);
  expect(screen.getByText('Dashboard')).toBeDefined();
});
