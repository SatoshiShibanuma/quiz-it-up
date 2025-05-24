import { extendTheme } from "@chakra-ui/react";

// Responsive Breakpoints (Mobile-First Approach)
const breakpoints = {
  base: "0px",     // Mobile devices (default)
  sm: "480px",     // Small tablets
  md: "768px",     // Tablets and larger mobile devices
  lg: "992px",     // Desktops and laptops
  xl: "1280px",    // Large desktops
  "2xl": "1536px"  // Extra large screens
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

// Typography responsive scale
const typography = {
  fontSizes: {
    base: {
      xs: "0.75rem",   // 12px
      sm: "0.875rem",  // 14px
      md: "1rem",      // 16px
      lg: "1.125rem",  // 18px
      xl: "1.25rem",   // 20px
      "2xl": "1.5rem" // 24px
    },
    responsive: {
      mobile: {
        heading: "clamp(1.5rem, 5vw, 2.5rem)",
        body: "clamp(0.875rem, 4vw, 1rem)"
      },
      desktop: {
        heading: "clamp(2rem, 3vw, 3rem)",
        body: "clamp(1rem, 2vw, 1.125rem)"
      }
    }
  }
};

// Media Query Utility Functions
const mediaQueries = {
  mobile: `@media screen and (max-width: ${breakpoints.sm})`,
  tablet: `@media screen and (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`,
  desktop: `@media screen and (min-width: ${breakpoints.md})`
};

export const theme = extendTheme({
  breakpoints,
  colors,
  shadows,
  typography,
  styles: {
    global: {
      body: {
        bg: colors.app.bg,
        color: "white",
        [mediaQueries.mobile]: {
          fontSize: typography.fontSizes.responsive.mobile.body
        },
        [mediaQueries.desktop]: {
          fontSize: typography.fontSizes.responsive.desktop.body
        }
      }
    }
  },
  components: {
    Button: {
      baseStyle: {
        bgColor: "whiteAlpha.200 !important",
        _hover: {
          bgColor: "whiteAlpha.300 !important"
        },
        [mediaQueries.mobile]: {
          padding: "0.5rem 1rem",
          fontSize: "0.875rem"
        },
        [mediaQueries.desktop]: {
          padding: "0.75rem 1.5rem",
          fontSize: "1rem"
        }
      }
    }
  }
});

// Export media query utilities for component-level use
export const responsiveUtils = {
  breakpoints,
  mediaQueries,
  typography
};