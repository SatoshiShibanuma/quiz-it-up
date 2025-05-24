import { extendTheme, defineStyleConfig } from "@chakra-ui/react";

// Responsive Breakpoints (mobile-first approach)
const breakpoints = {
  base: '0em',      // 0px
  sm: '30em',       // 480px
  md: '48em',       // 768px
  lg: '62em',       // 992px
  xl: '80em',       // 1280px
  '2xl': '96em'     // 1536px
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
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    md: '1rem',        // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
  },
  md: {
    xs: '0.875rem',    // 14px
    sm: '1rem',        // 16px
    md: '1.125rem',    // 18px
    lg: '1.25rem',     // 20px
    xl: '1.5rem',      // 24px
  }
};

// Responsive Spacing
const space = {
  base: {
    xs: '0.25rem',     // 4px
    sm: '0.5rem',      // 8px
    md: '1rem',        // 16px
    lg: '1.5rem',      // 24px
    xl: '2rem',        // 32px
  },
  md: {
    xs: '0.5rem',      // 8px
    sm: '1rem',        // 16px
    md: '1.5rem',      // 24px
    lg: '2rem',        // 32px
    xl: '2.5rem',      // 40px
  }
};

// Button Component Responsive Styles
const Button = defineStyleConfig({
  baseStyle: {
    bgColor: "whiteAlpha.200 !important",
    _hover: {
      bgColor: "whiteAlpha.300 !important"
    },
    // Touch-friendly tap targets
    minHeight: { base: '44px', md: '48px' },
    minWidth: { base: '44px', md: '48px' }
  },
  sizes: {
    // Responsive button sizes
    md: {
      h: { base: '44px', md: '48px' },
      fontSize: { base: 'sm', md: 'md' }
    }
  }
});

export const theme = extendTheme({
  breakpoints,
  colors,
  shadows,
  fontSizes,
  space,
  components: {
    Button
  },
  styles: {
    global: {
      // Global responsive base styles
      body: {
        fontSize: { base: 'sm', md: 'md' },
        lineHeight: { base: 'shorter', md: 'base' }
      }
    }
  }
});