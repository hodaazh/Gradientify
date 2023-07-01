import chroma from "chroma-js";
import { toPng } from "html-to-image";

class Utils {
  rotateArray = (n) => {
    return [...n.slice(1, n.length), ...n.slice(0, 1)];
  };

  LightenDarkenColor = (col, amt) => {
    var usePound = false;

    if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
    }

    var num = parseInt(col, 16);
    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00ff) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000ff) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
  };

  hexToRgb = (hex) =>
    ((value) =>
      value.length === 3
        ? value.split("").map((c) => parseInt(c.repeat(2), 16))
        : value.match(/.{1,2}/g).map((v) => parseInt(v, 16)))(
      hex.replace("#", "")
    );

  isHexTooLight = (hexColor) =>
    (([r, g, b]) => (r * 299 + g * 587 + b * 114) / 1000 > 155)(
      this.hexToRgb(hexColor)
    );

  generateColors(inputLeft, inputRight, step = 5) {
    if (chroma.valid(inputLeft) && chroma.valid(inputRight)) {
      let word = chroma.scale([inputLeft, inputRight]).mode("lch").colors(step);
      return word;
    }
  }

  validColor(color) {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{4})$/i.test(color);
  }
  convertColorsToStr(colorSet) {
    return colorSet.reduce(
      (prevValue, currentValue, currentIndex) =>
        prevValue +
        `radial-gradient(at ${currentValue.startPoint},${
          currentValue.color1
        } 0,${currentValue.color2} 50%)${
          currentIndex < colorSet.length - 1 ? `,` : ``
        }`,
      ""
    );
  }
  _export = async (el, imageFileName) => {
    toPng(el.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = imageFileName;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

const utils = new Utils();
export default utils;
