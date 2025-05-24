import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Responsive Breakpoints (Mobile-First Approach)
const breakpoints = {
  base: "0px",      // Mobile (default)
  sm: "480px",      // Small devices
  md: "768px",      // Tablets
  lg: "992px",      // Laptops
  xl: "1280px",     // Desktop
  "2xl": "1536px"   // Large screens
};

const colors = {
  card: {
    bg: "#ffffff15"
  },
  text: { 
    bg: "#69686484" 
  },
  app: { 
    bg: "#FF3CAC" 
  }
};

const shadows = { 
  "dark-lg": "0 8px 32px rgba(0, 0, 0, 0.36)" 
};

// Mobile-first configuration
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  breakpoints
};

export const theme = extendTheme({
  config,
  colors,
  shadows,
  components: {
    Button: {
      baseStyle: {
        bgColor: "whiteAlpha.200 !important",
        _hover: {
          bgColor: "whiteAlpha.300 !important"
        }
      },
      // Responsive variants
      sizes: {
        base: { // Default mobile size
          px: "3",
          fontSize: "sm"
        },
        md: {  // Tablet and up
          px: "4",
          fontSize: "md"
        }
      }
    },
    // Add responsive styles for other components
    Text: {
      baseStyle: {
        fontSize: {
          base: "sm",   // Smaller font on mobile
          md: "md"      // Larger font on tablet and up
        }
      }
    }
  },
  // Responsive spacing and typography
  space: {
    base: {
      base: "1rem",   // Smaller spacing on mobile
      md: "1.5rem"    // Larger spacing on tablet and up
    }
  },
  // Fluid typography with clamp
  fontSizes: {
    responsive: {
      base: "clamp(0.875rem, 4vw, 1rem)",      // Mobile
      md: "clamp(1rem, 3vw, 1.25rem)"           // Tablet and up
    }
  }
});

// Export utility function for responsive values
export const responsiveValue = (mobileValue: any, desktopValue: any) => ({
  base: mobileValue,
  md: desktopValue
});