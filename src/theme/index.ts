import { extendTheme, ResponsiveValue } from "@chakra-ui/react";

// Responsive Breakpoints with Mobile-First Design
const breakpoints = {
  base: "0px",
  sm: "320px",   // Small mobile devices
  md: "768px",   // Tablets and larger mobile devices
  lg: "1024px",  // Desktops and laptops
  xl: "1440px",  // Large desktops
  "2xl": "1920px" // Extra large screens
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

// Responsive Typography Scales
const fontSizes = {
  base: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem"
  },
  responsive: {
    mobile: {
      heading: {
        h1: "1.5rem",
        h2: "1.25rem",
        h3: "1.125rem"
      },
      body: {
        base: "0.875rem",
        small: "0.75rem"
      }
    },
    desktop: {
      heading: {
        h1: "2.5rem", 
        h2: "2rem",
        h3: "1.75rem"
      },
      body: {
        base: "1rem",
        small: "0.875rem"
      }
    }
  }
};

// Responsive Spacing Scale
const space = {
  base: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  responsive: {
    mobile: {
      tight: "0.5rem",
      default: "1rem",
      loose: "1.5rem"
    },
    desktop: {
      tight: "0.75rem",
      default: "1.5rem", 
      loose: "2rem"
    }
  }
};

export const theme = extendTheme({
  breakpoints,
  colors,
  shadows,
  fontSizes,
  space,
  components: {
    Button: {
      baseStyle: {
        bgColor: "whiteAlpha.200 !important",
        _hover: {
          bgColor: "whiteAlpha.300 !important"
        }
      },
      // Responsive Button Sizes
      sizes: {
        responsive: {
          mobile: {
            xs: { px: 2, py: 1, fontSize: "sm" },
            sm: { px: 3, py: 2, fontSize: "md" },
            md: { px: 4, py: 2, fontSize: "lg" }
          },
          desktop: {
            xs: { px: 3, py: 1, fontSize: "md" },
            sm: { px: 4, py: 2, fontSize: "lg" },
            md: { px: 5, py: 3, fontSize: "xl" }
          }
        }
      }
    }
  },
  
  // Responsive Utility Functions
  utils: {
    // Fluid Typography Function
    responsiveFontSize: (base: string, min: string, max: string) => ({
      fontSize: `clamp(${min}, ${base}, ${max})`
    }),
    
    // Responsive Spacing Function
    responsiveSpacing: (base: string, min: string, max: string) => ({
      padding: `clamp(${min}, ${base}, ${max})`,
      margin: `clamp(${min}, ${base}, ${max})`
    })
  }
});

// Media Query Utility for Programmatic Responsive Design
export const mediaQueries = {
  mobile: `@media screen and (max-width: ${breakpoints.md})`,
  tablet: `@media screen and (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
  desktop: `@media screen and (min-width: ${breakpoints.lg})`
};