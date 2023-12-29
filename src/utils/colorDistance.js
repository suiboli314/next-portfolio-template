import hexToLab from "./colorTransformer";

export const Application = { GraphicArts: "graphicArts", Textiles: "textiles" };
var application = Application.GraphicArts;

export const defApplication = (app) => {
  switch (app) {
    case Application.Textiles:
      application = Application.Textiles;
    case Application.GraphicArts:
    default:
      application = Application.GraphicArts;
  }
};

const constants = {
  textiles: { Kl: 2.0, K1: 0.048, K2: 0.014 },
  graphicArts: { Kl: 1.0, K1: 0.045, K2: 0.015 },
};

/**
 * calculate the perceptual distance between colors in CIELAB
 * https://gist.github.com/ryancat/9972419b2a78f329ce3aebb7f1a09152
 * https://github.com/muak/ColorMinePortable/blob/master/ColorMinePortable/ColorSpaces/Comparisons/Cie94Comparison.cs
 *
 * @param {Array} labA First LAB color in array
 * @param {Array} labB Second LAB color in array
 */
export function deltaE(labA, labB) {
  const deltaL = labA[0] - labB[0];
  const deltaA = labA[1] - labB[1];
  const deltaB = labA[2] - labB[2];
  const c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
  const c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
  const deltaC = c1 - c2;
  let deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
  deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);

  const constant = constants[application];

  const sc = 1.0 + constant.K1 * c1;
  const sh = 1.0 + constant.K2 * c1;

  const deltaLKlsl = deltaL / constant.Kl;
  const deltaCkcsc = deltaC / sc;
  const deltaHkhsh = deltaH / sh;
  const i = deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;
  return i < 0 ? 0 : Math.sqrt(i);
}

export function deltaHex(hexA, hexB) {
  const labA = hexToLab(hexA);
  const labB = hexToLab(hexB);
  return deltaE(labA, labB);
}

/**
 * Get the closest color from a list of colors.
 * @param  {string} hexA         The HEX RGB color to quote.
 * @param  {string[]} hexColors  The HEX RGB color to convert.
 * @return {[string, number]}}   The closest HEX RGB color in the list, and the distance.
 */
export default function getClosestColor(hexA, hexColors) {
  const labA = hexToLab(hexA);
  let minDelta = (Number.MAX_SAFE_INTEGER + 1) / 16 - 1;
  let closestColor = null;
  hexColors.forEach((hex) => {
    const labB = hexToLab(hex);
    const delta = deltaE(labA, labB);
    if (delta < minDelta) {
      minDelta = delta;
      closestColor = hex;
    }
  });
  return [closestColor, minDelta.toFixed(2)];
}
