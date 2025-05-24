import { theme, createResponsiveStyle } from '../index';

describe('Responsive Theme Configuration', () => {
  // Breakpoint Tests
  describe('Breakpoints', () => {
    it('should have correct default breakpoint values', () => {
      const expectedBreakpoints = {
        base: '0em',
        xs: '20em',
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em'
      };
      
      expect(theme.__breakpoints).toEqual(expectedBreakpoints);
    });
  });

  // Media Queries Tests
  describe('Media Queries', () => {
    it('should have mobile and desktop media query definitions', () => {
      expect(theme.__mediaQueries.mobile).toBe('@media screen and (max-width: 48em)');
      expect(theme.__mediaQueries.desktop).toBe('@media screen and (min-width: 48em)');
    });
  });

  // Responsive Style Utility Tests
  describe('Responsive Style Utility', () => {
    it('should create responsive styles correctly', () => {
      const baseStyle = { color: 'blue', padding: '10px' };
      const responsiveOverrides = { 
        '@media screen and (min-width: 48em)': { 
          color: 'red',
          padding: '20px' 
        }
      };

      const responsiveStyle = createResponsiveStyle(baseStyle, responsiveOverrides);
      
      expect(responsiveStyle).toEqual({
        color: 'blue',
        padding: '10px',
        '@media screen and (min-width: 48em)': { 
          color: 'red',
          padding: '20px' 
        }
      });
    });
  });

  // Font Size Tests
  describe('Responsive Font Sizes', () => {
    const { fontSizes } = theme;

    it('should have mobile font sizes', () => {
      expect(fontSizes.responsive.mobile.h1).toBe('1.5rem');
      expect(fontSizes.responsive.mobile.h2).toBe('1.25rem');
      expect(fontSizes.responsive.mobile.body).toBe('0.875rem');
    });

    it('should have desktop font sizes', () => {
      expect(fontSizes.responsive.desktop.h1).toBe('2.5rem');
      expect(fontSizes.responsive.desktop.h2).toBe('2rem');
      expect(fontSizes.responsive.desktop.body).toBe('1rem');
    });
  });
});