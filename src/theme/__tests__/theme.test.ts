import { describe, test, expect } from 'vitest';
import { theme, mediaQueries } from '../index';

describe('Responsive Theme Configuration', () => {
  test('Theme breakpoints are correctly defined', () => {
    expect(theme.breakpoints).toBeDefined();
    expect(theme.breakpoints.base).toBe('0px');
    expect(theme.breakpoints.sm).toBe('320px');
    expect(theme.breakpoints.md).toBe('768px');
    expect(theme.breakpoints.lg).toBe('1024px');
  });

  test('Color configuration is preserved', () => {
    expect(theme.colors.card.bg).toBe('#ffffff15');
    expect(theme.colors.app.bg).toBe('#FF3CAC');
  });

  test('Responsive Font Sizes are defined', () => {
    const fontSizes = theme.fontSizes as any;
    expect(fontSizes.responsive.mobile.heading.h1).toBe('1.5rem');
    expect(fontSizes.responsive.desktop.heading.h1).toBe('2.5rem');
  });

  test('Media Queries are correctly configured', () => {
    expect(mediaQueries.mobile).toContain('@media screen and (max-width: 768px)');
    expect(mediaQueries.desktop).toContain('@media screen and (min-width: 1024px)');
  });

  test('Responsive Utility Functions Exist', () => {
    const theme_utils = theme.utils as any;
    expect(theme_utils.responsiveFontSize).toBeDefined();
    expect(theme_utils.responsiveSpacing).toBeDefined();
  });
});