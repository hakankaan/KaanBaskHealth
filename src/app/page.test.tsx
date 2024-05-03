import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Home from './page';

test('renders home', () => {
  render(<Home />);
  expect(screen.getByText('Home')).toBeDefined();
});
