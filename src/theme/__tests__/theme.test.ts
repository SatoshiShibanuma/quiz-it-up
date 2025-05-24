import { theme, responsiveValue } from '../index';
import { ThemeConfig } from "@chakra-ui/react";

describe('Theme Configuration', () => {
  it('should have correct breakpoints', () => {
    const breakpoints = theme.breakpoints;
    expect(breakpoints).toEqual({
      base: "0px",
      sm: "480px", 
      md: "768px", 
      lg: "992px", 
      xl: "1280px", 
      "2xl": "1536px"
    });
  });

  it('should have dark color mode configuration', () => {
    const config: ThemeConfig = theme.config;
    expect(config.initialColorMode).toBe('dark');
    expect(config.useSystemColorMode).toBe(false);
  });

  it('should have responsive button styles', () => {
    const buttonStyles = theme.components.Button;
    expect(buttonStyles.sizes.base).toHaveProperty('px', '3');
    expect(buttonStyles.sizes.base).toHaveProperty('fontSize', 'sm');
    expect(buttonStyles.sizes.md).toHaveProperty('px', '4');
    expect(buttonStyles.sizes.md).toHaveProperty('fontSize', 'md');
  });

  it('responsiveValue should create correct responsive object', () => {
    const value = responsiveValue('small', 'large');
    expect(value).toEqual({
      base: 'small', 
      md: 'large'
    });
  });

  it('should have fluid typography with clamp', () => {
    const responsiveFontSizes = theme.fontSizes.responsive;
    expect(responsiveFontSizes.base).toContain('clamp');
    expect(responsiveFontSizes.md).toContain('clamp');
  });
});