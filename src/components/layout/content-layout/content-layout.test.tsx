import React from 'react';

import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

import { ContentLayout } from './content-layout';

test('renders content layout', () => {
  render(<ContentLayout title="Dashboard">children</ContentLayout>);
  expect(screen.getByText('Dashboard')).toBeDefined();
  expect(screen.getByText('children')).toBeDefined();
});
