class ChaiTailwind {
  constructor(config) {
    this.config = config;
  }

  init() {
    this.apply();
  }

  apply() {
    const elems = document.querySelectorAll("*");
    elems.forEach((elem) => {
      if (elem.classList.length > 0) {
        this.applyStyle(elem);
      }
    });
  }

  applyStyle(elem) {
    const clist = Array.from(elem.classList);
    const finalStyle = {};

    clist.forEach((cls) => {
      if (cls.startsWith("chai-")) {
        const utilityKey = cls.replace("chai-", "");
        const style = this.parseClass(utilityKey);
        if (style) Object.assign(finalStyle, style);
      }
    });

    Object.assign(elem.style, finalStyle);
  }

  parseClass(cls) {
    if (cls === "rounded-full" || cls === "roundedfull") {
      return this.config.utilities.roundedfull();
    }

    const dashIndex = cls.indexOf("-");
    const prop = dashIndex === -1 ? cls : cls.slice(0, dashIndex);
    const value = dashIndex === -1 ? null : cls.slice(dashIndex + 1);

    const utility = this.config.utilities[prop];
    if (!utility) return null;

    if (!value) return utility();

    let mappedValue = value;

    if (this.config.spacing[value] !== undefined) {
      mappedValue = this.config.spacing[value];
    } else if (["bg", "text", "bordercolor", "border"].includes(prop)) {
      const parts = value.split("-");
      if (parts.length === 2) {
        const [color, shade] = parts;
        mappedValue = this.config.colors[color]?.[shade] || value;
      } else {
        mappedValue = this.config.colors[value]?.[500] || value;
      }
    } else if (prop === "textsize") {
      mappedValue = this.config.textSizes[value] || value;
    } else if (prop === "fontweight") {
      mappedValue = this.config.fontWeights[value] || value;
    } else if (prop === "rounded") {
      mappedValue = this.config.borderRadius[value] || value;
    } 
    return utility(mappedValue);
  }
}

export default ChaiTailwind;