import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Responsive Breakpoints
const breakpoints = {
  base: '0em',     // 0px
  xs: '20em',      // 320px
  sm: '30em',      // 480px
  md: '48em',      // 768px
  lg: '62em',      // 992px
  xl: '80em',      // 1280px
  '2xl': '96em'    // 1536px
};

const colors = {
  card: {
    bg: "#ffffff15"
  },
  text: { bg: "#69686484" },
  app: { bg: "#FF3CAC" }
};

const shadows = { 
  "dark-lg": "0 8px 32px rgba(0, 0, 0, 0.36)" 
};

// Responsive Text Sizes
const fontSizes = {
  responsive: {
    mobile: {
      h1: "1.5rem",
      h2: "1.25rem",
      body: "0.875rem"
    },
    desktop: {
      h1: "2.5rem", 
      h2: "2rem",
      body: "1rem"
    }
  }
};

// Mobile-first responsive configuration
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  breakpoints
};

// Responsive Media Query Utility
const responsiveStyles = {
  mobile: `@media screen and (max-width: ${breakpoints.md})`,
  desktop: `@media screen and (min-width: ${breakpoints.md})`
};

export const theme = extendTheme({
  config,
  colors,
  shadows,
  fontSizes,
  components: {
    Button: {
      baseStyle: {
        bgColor: "whiteAlpha.200 !important",
        _hover: {
          bgColor: "whiteAlpha.300 !important"
        },
        // Responsive sizing
        fontSize: {
          base: fontSizes.responsive.mobile.body,
          md: fontSizes.responsive.desktop.body
        }
      }
    }
  },
  // Expose responsive utilities
  styles: {
    global: {
      body: {
        // Mobile-first responsive typography
        fontSize: {
          base: fontSizes.responsive.mobile.body,
          md: fontSizes.responsive.desktop.body
        }
      }
    }
  },
  // Expose breakpoints and media query utilities
  __breakpoints: breakpoints,
  __mediaQueries: responsiveStyles
});

// Utility function for responsive styling
export const createResponsiveStyle = (baseStyle: any, responsiveOverrides: any) => ({
  ...baseStyle,
  ...responsiveOverrides
});