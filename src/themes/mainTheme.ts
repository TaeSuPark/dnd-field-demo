const createVariants = (
  size: "title" | "subtitle" | "body" | "caption",
  s: "r" | "m" | "b"
) => {
  const sizeValue = {
    title: 32,
    subtitle: 24,
    body: 16,
    caption: 12,
  }

  const weightValue = {
    r: 400,
    m: 500,
    b: 700,
  }

  return {
    size: `${sizeValue[size]}px`,
    weight: weightValue[s],
  }
}

const colors = {}

const spaces = {
  // 2간격
  0: "0px",
  2: "2px",
  4: "4px",
  6: "6px",
  8: "8px",
  10: "10px",
  12: "12px",
  14: "14px",
  16: "16px",
  18: "18px",
  20: "20px",
  22: "22px",
  24: "24px",
  // 4간격
  28: "28px",
  32: "32px",
  36: "36px",
  40: "40px",
  44: "44px",
  48: "48px",
  52: "52px",
  56: "56px",
  60: "60px",
  64: "64px",
}

const variants = {
  h1: {
    size: "64px",
    weight: 500,
  },
  h2: {
    size: "56px",
    weight: 500,
  },
  h3: {
    size: "48px",
    weight: 500,
  },
  h4: {
    size: "40px",
    weight: 500,
  },
  h5: {
    size: "32px",
    weight: 500,
  },
  "title-r": createVariants("title", "r"),
  "title-m": createVariants("title", "m"),
  "title-b": createVariants("title", "b"),
  "subtitle-r": createVariants("subtitle", "r"),
  "subtitle-m": createVariants("subtitle", "m"),
  "subtitle-b": createVariants("subtitle", "b"),
  "body-r": createVariants("body", "r"),
  "body-m": createVariants("body", "m"),
  "body-b": createVariants("body", "b"),
  "caption-r": createVariants("caption", "r"),
  "caption-m": createVariants("caption", "m"),
  "caption-b": createVariants("caption", "b"),
}

export type VariantsType = keyof typeof variants
export type SpacesType = keyof typeof spaces

const mainTheme = {
  colors,
  spaces,
  variants,
}

export default mainTheme
