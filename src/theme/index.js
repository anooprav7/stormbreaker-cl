// https://material.io/design/color/#tools-for-picking-colors

// Typography - https://material.io/design/typography/the-type-system.html#type-scale
import colors, { newTheme } from "./colors"

const SCALE = 4
export const colorKeys = ["primary", "accent", "success", "error", "warning"]
export const colorWeights = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

export default {
  colors: {
    ...newTheme
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
  },

  gridColumns: [12, 24],

  shadows: {
    0: "none",
    1: "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
    2: "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
    3: "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px"
  },

  space: [
    0,
    4,
    8,
    12,
    16,
    20,
    24,
    28,
    32,
    36,
    40,
    44,
    48,
    52,
    56,
    60,
    64,
    68,
    72,
    76,
    80,
    84,
    88,
    92,
    96,
    100,
    104,
    108,
    112,
    116,
    120
  ]
}
