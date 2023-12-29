/**
 * Converts RGB color to CIE 1931 XYZ color space.
 * https://www.image-engineering.de/library/technotes/958-how-to-convert-between-srgb-and-ciexyz
 * @param  {string} hex
 * @return {number[]}        The CIE 1931 XYZ color to convert which refers to
 *                           the D65/2° standard illuminant.
 */
function rgbToXyz(hex) {
  const [r, g, b] = hexToRgb(hex)
    .map((_) => _ / 255)
    .map(sRGBtoLinearRGB);
  const X = 0.4124 * r + 0.3576 * g + 0.1805 * b;
  const Y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const Z = 0.0193 * r + 0.1192 * g + 0.9505 * b;
  // For the reason that Lab has luminance from 0 to 100, X, Y and Z are multiplied by 100.
  return [X, Y, Z].map((_) => _ * 100);
}

/**
 * Undoes gamma-correction from an RGB-encoded color.
 * https://en.wikipedia.org/wiki/SRGB#Specification_of_the_transformation
 * https://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color
 * @param  {number}
 * @return {number}
 */
function sRGBtoLinearRGB(color) {
  // Send this function a decimal sRGB gamma encoded color value
  // between 0.0 and 1.0, and it returns a linearized value.
  if (color <= 0.04045) {
    return color / 12.92;
  } else {
    return Math.pow((color + 0.055) / 1.055, 2.4);
  }
}

/**
 * Converts hex color to RGB.
 * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
 * @param  {string} hex
 * @return {number[]} [rgb]
 */
function hexToRgb(hex) {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (match) {
    match.shift();
    return match.map((_) => parseInt(_, 16));
  }
}

/**
 * Converts CIE 1931 XYZ colors to CIE L*a*b*.
 * The conversion formula comes from <http://www.easyrgb.com/en/math.php>.
 * https://github.com/cangoektas/xyz-to-lab/blob/master/src/index.js
 * @param   {number[]} color The CIE 1931 XYZ color to convert which refers to
 *                           the D65/2° standard illuminant.
 * @returns {number[]}       The color in the CIE L*a*b* color space.
 */
// X, Y, Z of a "D65" light source.
// "D65" is a standard 6500K Daylight light source.
// https://en.wikipedia.org/wiki/Illuminant_D65
const D65 = [95.047, 100, 108.883];
function xyzToLab([x, y, z]) {
  [x, y, z] = [x, y, z].map((v, i) => {
    v = v / D65[i];
    return v > 0.008856 ? Math.pow(v, 1 / 3) : v * 7.787 + 16 / 116;
  });
  const l = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);
  return [l, a, b];
}

/**
 * Converts Lab color space to Luminance-Chroma-Hue color space.
 * http://www.brucelindbloom.com/index.html?Eqn_Lab_to_LCH.html
 * @param  {number[]}
 * @return {number[]}
 */
export function labToLch([l, a, b]) {
  const c = Math.sqrt(a * a + b * b);
  const h = abToHue(a, b);
  return [l, c, h];
}

/**
 * Converts a and b of Lab color space to Hue of LCH color space.
 * https://stackoverflow.com/questions/53733379/conversion-of-cielab-to-cielchab-not-yielding-correct-result
 * @param  {number} a
 * @param  {number} b
 * @return {number}
 */
function abToHue(a, b) {
  if (a >= 0 && b === 0) return 0;
  if (a < 0 && b === 0) return 180;
  if (a === 0 && b > 0) return 90;
  if (a === 0 && b < 0) return 270;

  let xBias;
  if (a > 0 && b > 0) xBias = 0;
  else if (a < 0) xBias = 180;
  else if (a > 0 && b < 0) xBias = 360;

  return radiansToDegrees(Math.atan(b / a)) + xBias;
}

function radiansToDegrees(radians) {
  return radians * (180 / Math.PI);
}

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

/**
 * Converts HEX RGB color to CIE L*a*b*.
 * https://www.image-engineering.de/library/technotes/958-how-to-convert-between-srgb-and-ciexyz
 * @param  {string} hex  The HEX RGB color to convert.
 * @return {number[]}    The color in the CIE L*a*b* color space.
 */
export const hexToLab = (hex) => xyzToLab(rgbToXyz(hex));
export default hexToLab;
