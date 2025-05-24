import { extendTheme } from "@chakra-ui/react";

// Color Palette
const colors = {
  card: {
    bg: "#ffffff15"
  },
  text: { bg: "#69686484" },
  app: { bg: "#FF3CAC" }
};

// Responsive Breakpoints
const breakpoints = {
  base: "0px",   // Mobile (default)
  sm: "480px",   // Small mobile devices and up
  md: "768px",   // Tablets and up
  lg: "992px",   // Laptops and up
  xl: "1280px",  // Large desktops
  "2xl": "1536px" // Extra large screens
};

// Responsive Typography Scales
const typography = {
  fontSizes: {
    xs: { base: "0.75rem", md: "0.875rem" },
    sm: { base: "0.875rem", md: "1rem" },
    md: { base: "1rem", md: "1.125rem" },
    lg: { base: "1.125rem", md: "1.25rem" },
    xl: { base: "1.25rem", md: "1.5rem" }
  }
};

// Responsive Sizing Utilities
const responsiveSizing = {
  // Helper function to create responsive fluid sizing
  fluidSize: (minSize: number, maxSize: number) => {
    return {
      base: `${minSize}px`,
      md: `${maxSize}px`
    };
  }
};

// Media Query Utility
const mediaQueries = {
  mobile: "@media (max-width: 767px)",
  tablet: "@media (min-width: 768px) and (max-width: 991px)",
  desktop: "@media (min-width: 992px)"
};

// Theme Configuration
export const theme = extendTheme({
  breakpoints,
  colors,
  shadows: { 
    "dark-lg": "0 8px 32px rgba(0, 0, 0, 0.36)" 
  },
  components: {
    Button: {
      baseStyle: {
        bgColor: "whiteAlpha.200 !important",
        _hover: {
          bgColor: "whiteAlpha.300 !important"
        }
      },
      // Responsive button sizes
      sizes: {
        md: {
          base: { h: "40px", w: "100%" },
          md: { h: "48px", w: "auto" }
        }
      }
    }
  },
  styles: {
    global: {
      // Mobile-first responsive base styles
      body: {
        fontSize: typography.fontSizes.md.base,
        [mediaQueries.tablet]: {
          fontSize: typography.fontSizes.md.md
        }
      }
    }
  },
  // Export helper utilities
  utils: {
    ...responsiveSizing,
    mediaQueries
  }
});

// Expose type for potential future type-safe usage
export type ResponsiveTheme = typeof theme;