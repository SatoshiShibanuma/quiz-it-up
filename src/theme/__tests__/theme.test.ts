import { theme, responsiveUtils } from '../index';
import { describe, expect, it } from 'vitest';

describe('Theme Configuration', () => {
  it('should have mobile-first breakpoints', () => {
    expect(responsiveUtils.breakpoints).toEqual({
      base: "0px",
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1536px"
    });
  });

  it('should have media query utilities', () => {
    const { mediaQueries } = responsiveUtils;
    
    expect(mediaQueries.mobile).toContain('@media screen and (max-width: 480px)');
    expect(mediaQueries.tablet).toContain('@media screen and (min-width: 480px) and (max-width: 768px)');
    expect(mediaQueries.desktop).toContain('@media screen and (min-width: 768px)');
  });

  it('should have responsive typography', () => {
    const { typography } = responsiveUtils;
    
    expect(typography.fontSizes.responsive.mobile.heading).toBeDefined();
    expect(typography.fontSizes.responsive.mobile.body).toBeDefined();
    expect(typography.fontSizes.responsive.desktop.heading).toBeDefined();
    expect(typography.fontSizes.responsive.desktop.body).toBeDefined();
  });

  it('should extend Chakra UI theme with responsive configurations', () => {
    expect(theme.breakpoints).toBeDefined();
    expect(theme.styles.global.body).toBeDefined();
    expect(theme.components.Button.baseStyle).toBeDefined();
  });
});