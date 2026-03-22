# ☕ ChaiTailwind CSS

**ChaiTailwind** is a lightweight, client-side utility-first CSS engine built with JavaScript. It allows developers to style elements using intuitive class names like `chai-p-4` or `chai-bg-purple-500`, which are dynamically parsed and converted into inline styles at runtime.

---

## 🚀 Project Overview

Built as part of the **Web Dev Cohort 2026** "Build Your Own ChaiTailwind" challenge. This project eliminates the need for traditional CSS files by using a JavaScript-driven styling engine that scans the DOM and applies design tokens dynamically.

### 🔗 Project Links
* **Live Demo:** https://chaitailwind-css.netlify.app/   
---

## 🛠️ How It Works

1. **Scan:** On page load, the script traverses the DOM to find any class starting with the `chai-` prefix.  
2. **Parse:** It extracts the utility (e.g., `mt`) and the value (e.g., `10`).  
3. **Map:** Using a central `config.js`, it maps those values to CSS properties (e.g., `10` -> `2.5rem`).  
4. **Apply:** It injects the resulting CSS directly into the element's `style` attribute.  

---

## 📂 Design System (config.js)

The engine is powered by a highly customizable configuration object:

```javascript
const config = {
  utilities: {
    // Spacing
    p: (v) => ({ padding: v }),
    pt: (v) => ({ paddingTop: v }),
    pr: (v) => ({ paddingRight: v }),
    pb: (v) => ({ paddingBottom: v }),
    pl: (v) => ({ paddingLeft: v }),
    m: (v) => ({ margin: v }),
    mt: (v) => ({ marginTop: v }),
    mr: (v) => ({ marginRight: v }),
    mb: (v) => ({ marginBottom: v }),
    ml: (v) => ({ marginLeft: v }),
    gap: (v) => ({ gap: v }),
    gapx: (v) => ({ columnGap: v }),
    gapy: (v) => ({ rowGap: v }),

    // Flex & Layout
    flex: () => ({ display: "flex" }),
    flexcol: () => ({ display: "flex", flexDirection: "column" }),
    justifycenter: () => ({ justifyContent: "center" }),
    justifybetween: () => ({ justifyContent: "space-between" }),
    itemscenter: () => ({ alignItems: "center" }),

    // Colors
    bg: (v) => ({ backgroundColor: v }),
    text: (v) => ({ color: v }),
    bordercolor: (v) => ({ borderColor: v }),

    // Borders & radius
    border: (v) => ({ border: `1px solid ${v}` }),
    border2: (v) => ({ border: `2px solid ${v}` }),
    rounded: (v) => ({ borderRadius: v }),
    roundedfull: () => ({ borderRadius: "9999px" }),

    // Shadows
    shadowsm: () => ({ boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }),
    shadowmd: () => ({ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }),
    shadowlg: () => ({ boxShadow: "0 10px 15px rgba(0,0,0,0.15)" }),
    shadowxl: () => ({ boxShadow: "0 20px 25px rgba(0,0,0,0.2)" }),

    // Typography
    textsize: (v) => ({ fontSize: v }),
    fontweight: (v) => ({ fontWeight: v }),
    textalign: (v) => ({ textAlign: v }),
    uppercase: () => ({ textTransform: "uppercase" }),
    trackingwider: () => ({ letterSpacing: "0.05em" }),

    // Hover & transitions
    hoverbg: (v) => ({ ":hover": { backgroundColor: v } }),
    hovertext: (v) => ({ ":hover": { color: v } }),
    transition: () => ({ transition: "all 0.3s ease" }),

    // Transformations
    scale: (v) => ({ transform: `scale(${v})` }),
    rotate: (v) => ({ transform: `rotate(${v}deg)` }),
    translatex: (v) => ({ transform: `translateX(${v})` }),
    translatey: (v) => ({ transform: `translateY(${v})` }),

    // Cursor
    cursorpointer: () => ({ cursor: "pointer" }),
  },
  colors: {
    purple: { 500: "#a855f7", 600: "#7e22ce" },
    gray: { 700: "#374151", 800: "#1f2937", 900: "#111827" },
    red: { 500: "#ef4444" },
    blue: { 500: "#3b82f6" },
    green: { 500: "#22c55e" },
    yellow: { 300: "#facc15" },
  },
  spacing: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
  },
};
```
##Example
```javascript
<div class="chai-bg-purple-600 chai-p-6 chai-rounded-xl chai-text-white">
  Hello, ChaiTailwind!
</div>

<div class="chai-flex chai-justifybetween chai-itemscenter chai-gap-4">
  <div class="chai-bg-gray-700 chai-p-3">Item 1</div>
  <div class="chai-bg-gray-700 chai-p-3">Item 2</div>
</div>

<button class="chai-bg-purple-600 chai-hoverbg-purple-400 chai-transition chai-cursorpointer">
  Hover Me
</button>
```
