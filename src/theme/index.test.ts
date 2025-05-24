import { describe, expect, it } from 'vitest';
import { theme } from './index';

describe('Theme Configuration', () => {
  it('should have mobile-first breakpoints', () => {
    expect(theme.breakpoints).toBeDefined();
    expect(theme.breakpoints.base).toBe('0em');
    expect(theme.breakpoints.sm).toBe('30em');
    expect(theme.breakpoints.md).toBe('48em');
  });

  it('should have responsive font sizes', () => {
    expect(theme.fontSizes).toBeDefined();
    expect(theme.fontSizes.base.xs).toBe('0.75rem');
    expect(theme.fontSizes.md.xl).toBe('1.5rem');
  });

  it('should have responsive spacing', () => {
    expect(theme.space).toBeDefined();
    expect(theme.space.base.sm).toBe('0.5rem');
    expect(theme.space.md.xl).toBe('2.5rem');
  });

  it('should have button responsive configurations', () => {
    const buttonStyles = theme.components.Button.baseStyle;
    expect(buttonStyles.minHeight).toHaveProperty('base', '44px');
    expect(buttonStyles.minHeight).toHaveProperty('md', '48px');
  });

  it('should have global responsive styles', () => {
    const globalStyles = theme.styles.global.body;
    expect(globalStyles.fontSize).toHaveProperty('base', 'sm');
    expect(globalStyles.fontSize).toHaveProperty('md', 'md');
  });
});