// style-config.js

const config = {
  utilities: {
    // Spacing
    p: (v) => ({ padding: v }),
    pt: (v) => ({ paddingTop: v }),
    pr: (v) => ({ paddingRight: v }),
    pb: (v) => ({ paddingBottom: v }),
    pl: (v) => ({ paddingLeft: v }),
    px: (v) => ({ paddingLeft: v, paddingRight: v }),
    py: (v) => ({ paddingTop: v, paddingBottom: v }),

    m: (v) => ({ margin: v }),
    mt: (v) => ({ marginTop: v }),
    mr: (v) => ({ marginRight: v }),
    mb: (v) => ({ marginBottom: v }),
    ml: (v) => ({ marginLeft: v }),
    mx: (v) => ({ marginLeft: v, marginRight: v }),
    my: (v) => ({ marginTop: v, marginBottom: v }),

    gap: (v) => ({ gap: v }),
    gapx: (v) => ({ columnGap: v }),
    gapy: (v) => ({ rowGap: v }),

    // Colors
    bg: (v) => ({ backgroundColor: v }),
    text: (v) => ({ color: v }),
    bordercolor: (v) => ({ borderColor: v }),
    bgopacity: (v) => ({ backgroundColor: `rgba(0,0,0,${v})` }),
    opacity: (v) => ({ opacity: v }),

    // Borders
    border: (v) => ({ borderWidth: "1px", borderStyle: "solid", borderColor: v }),
    border2: (v) => ({ borderWidth: "2px", borderStyle: "solid", borderColor: v }),
    bordert: (v) => ({ borderTop: `1px solid ${v}` }),
    borderb: (v) => ({ borderBottom: `1px solid ${v}` }),
    borderl: (v) => ({ borderLeft: `1px solid ${v}` }),
    borderr: (v) => ({ borderRight: `1px solid ${v}` }),
    rounded: (v) => ({ borderRadius: v }),
    roundedfull: () => ({ borderRadius: "9999px" }),

    // Typography
    textsize: (v) => ({ fontSize: v }),
    fontweight: (v) => ({ fontWeight: v }),
    textalign: (v) => ({ textAlign: v }),
    uppercase: () => ({ textTransform: "uppercase" }),
    lowercase: () => ({ textTransform: "lowercase" }),
    capitalize: () => ({ textTransform: "capitalize" }),

    // Flex & Layout
    flex: () => ({ display: "flex" }),
    flexcol: () => ({ display: "flex", flexDirection: "column" }),
    block: () => ({ display: "block" }),
    inline: () => ({ display: "inline" }),
    justifycenter: () => ({ justifyContent: "center" }),
    justifystart: () => ({ justifyContent: "flex-start" }),
    justifyend: () => ({ justifyContent: "flex-end" }),
    justifybetween: () => ({ justifyContent: "space-between" }),
    justifyaround: () => ({ justifyContent: "space-around" }),
    justifyevenly: () => ({ justifyContent: "space-evenly" }),
    itemscenter: () => ({ alignItems: "center" }),
    itemsstart: () => ({ alignItems: "flex-start" }),
    itemsend: () => ({ alignItems: "flex-end" }),
    cursorpointer: () => ({ cursor: "pointer" }),

    // Positioning
    container: (v = "100%") => ({ maxWidth: v, marginLeft: "auto", marginRight: "auto" }),
    fixed: () => ({ position: "fixed" }),
    sticky: () => ({ position: "sticky", top: "0" }),
    relative: () => ({ position: "relative" }),
    absolute: () => ({ position: "absolute" }),
    z: (v) => ({ zIndex: v }),
    top: (v) => ({ top: v }),
    left: (v) => ({ left: v }),
    right: (v) => ({ right: v }),
    bottom: (v) => ({ bottom: v }),

    // Size & Overflow
    w: (v) => ({ width: v }),
    h: (v) => ({ height: v }),
    minh: (v) => ({ minHeight: v }),
    maxw: (v) => ({ maxWidth: v }),
    overflowhidden: () => ({ overflow: "hidden" }),
    overflowxauto: () => ({ overflowX: "auto" }),
    overflowyauto: () => ({ overflowY: "auto" }),
    overflowscroll: () => ({ overflow: "scroll" }),

    // Shadows
    shadow: (v = "0 1px 3px rgba(0,0,0,0.1)") => ({ boxShadow: v }),
    shadowsm: () => ({ boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }),
    shadowmd: () => ({ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }),
    shadowlg: () => ({ boxShadow: "0 10px 15px rgba(0,0,0,0.1)" }),
    shadowxl: () => ({ boxShadow: "0 20px 25px rgba(0,0,0,0.1)" }),

    // Transforms & Animations
    rotate: (deg) => ({ transform: `rotate(${deg}deg)` }),
    scale: (v) => ({ transform: `scale(${v})` }),
    translatex: (v) => ({ transform: `translateX(${v})` }),
    translatey: (v) => ({ transform: `translateY(${v})` }),
    transition: (props = "all 0.3s ease") => ({ transition: props }),
    hoverbg: (color) => ({ ":hover": { backgroundColor: color } }),
    hovertext: (color) => ({ ":hover": { color } }),

    // Links
    link: (color = "white") => ({ color: color, cursor: "pointer", textDecoration: "none" }),
  },

  spacing: {
    0: "0",
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
  },

  colors: {
    red: { 500: "#ef4444" },
    blue: { 500: "#3b82f6" },
    green: { 500: "#22c55e" },
    purple: { 500: "#a855f7", 600: "#7e22ce" },
    black: { 500: "#000000" },
    white: { 500: "#ffffff" },
    gray: { 50: "#f9fafb", 100: "#f3f4f6", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 700: "#374151", 800: "#1f2937", 900: "#111827" },
  },

  textSizes: {
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },

  fontWeights: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },

  borderRadius: {
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    full: "9999px",
  },
};

export default config;