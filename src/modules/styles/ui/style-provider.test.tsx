import { describe, expect, it, vi } from 'vitest';
import { Style } from '../domain/style';
import { styles } from '../application/repositories/styles';
import { render } from '@testing-library/react';
import { StyleProvider } from './style-provider';

const mockStyle = styles[0];

vi.mock('../use-cases/use-random-style', () => ({
  useRandomStyle: () => mockStyle,
}));

describe('StyleProvider', () => {
  it('should get and set styles', () => {
    const { baseElement } = render(<StyleProvider>Test</StyleProvider>);

    const style = baseElement.querySelector('style');

    expect(style).not.toBeNull();

    const css = style?.textContent;

    expect(css).toContain(`--accent: ${mockStyle.accent};`);
  });
});
