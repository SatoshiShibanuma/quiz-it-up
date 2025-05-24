import { describe, it, expect } from 'vitest';
import { theme } from './index';

describe('Responsive Theme Configuration', () => {
  it('should have correct breakpoint values', () => {
    expect(theme.breakpoints).toEqual({
      base: "0px",
      sm: "480px", 
      md: "768px", 
      lg: "992px", 
      xl: "1280px",
      "2xl": "1536px"
    });
  });

  it('should have defined color palette', () => {
    expect(theme.colors).toHaveProperty('card.bg', '#ffffff15');
    expect(theme.colors).toHaveProperty('text.bg', '#69686484');
    expect(theme.colors).toHaveProperty('app.bg', '#FF3CAC');
  });

  it('should have media query utilities', () => {
    const utils = theme.utils;
    expect(utils.mediaQueries).toHaveProperty('mobile');
    expect(utils.mediaQueries).toHaveProperty('tablet');
    expect(utils.mediaQueries).toHaveProperty('desktop');
  });

  it('should have responsive font sizing', () => {
    const fontSizes = theme.components.Button.sizes.md;
    expect(fontSizes.base).toHaveProperty('h', '40px');
    expect(fontSizes.base).toHaveProperty('w', '100%');
    expect(fontSizes.md).toHaveProperty('h', '48px');
    expect(fontSizes.md).toHaveProperty('w', 'auto');
  });
});