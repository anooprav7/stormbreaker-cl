// https://material.io/design/color/#tools-for-picking-colors

// Typography - https://material.io/design/typography/the-type-system.html#type-scale
import colors from "./colors"

const SCALE = 4
export const colorKeys = ["primary", "secondary", "success", "error", "warning"]
export const colorWeights = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

export default {
  colors: {
    white: "#ffffff",
    black: "#000000",
    // Light Blue
    primary: colors.cos.blue,
    secondary: colors.cos.grey,
    success: colors.cos.green,
    warning: colors.orange,
    error: {
      50: "#FFEBEE",
      100: "#FFCDD2",
      200: "#EF9A9A",
      300: "#E57373",
      400: "#EF5350",
      500: "#F44336",
      600: "#E53935",
      700: "#D32F2F",
      800: "#C62828",
      900: "#B71C1C"
    }
  },

  // Typography

  fontSizes: [
    0,
    "10px",
    "12px",
    "14px",
    "16px",
    "20px",
    "24px",
    "32px",
    "36px",
    "48px"
  ],

  typographyVariants: {
    h1: {
      size: "48px",
      lineHeight: "56px",
      as: "h1"
    },
    h2: {
      size: "36px",
      lineHeight: "48px",
      as: "h2"
    },
    h3: {
      size: "32px",
      lineHeight: "44px",
      as: "h3"
    },
    h4: {
      size: "24px",
      lineHeight: "32px",
      as: "h4"
    },
    body3: {
      size: "20px",
      lineHeight: "28px",
      as: "p"
    },
    body2: {
      size: "16px",
      lineHeight: "20px",
      as: "p"
    },
    body1: {
      size: "14px",
      lineHeight: "20px",
      as: "p"
    },
    caption2: {
      size: "12px",
      lineHeight: "16px",
      as: "div"
    },
    caption1: {
      size: "10px",
      lineHeight: "12px",
      as: "div"
    }
  },
  lineHeight: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  fontWeight: {
    lighter: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  letterSpacing: {
    tight: "-1px",
    normal: "0px",
    wide: "1px"
  },

  zIndex: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],

  sizeOfSpace: value => {
    const values = [].concat(value)
    return values
      .map(v => (typeof v === "string" ? v : `${v * SCALE}px`))
      .join(" ")
  }
}
