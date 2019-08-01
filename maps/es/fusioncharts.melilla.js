/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Melilla.1.04-03-2017 11:58:22
 */

let M = 'M', // SVG MoveTo
  L = 'L', // SVG LineTo
  Z = 'Z', // SVG ClosePath
  Q = 'Q', // SVG Quadratic Beizer
  LFT = 'left',
  RGT = 'right',
  CEN = 'center',
  MID = 'middle',
  TOP = 'top',
  BTM = 'bottom',
  geodefinitions = [{
  "name": "Melilla",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 275,
  "baseHeight": 400,
  "baseScaleFactor": 10,
  "entities": {
    "ES.ME.ME": {
      "outlines": [
        [M, 2719, 3020, Q, 2719, 2116, 2601, 1174, 2483, 310, 519, 35, 323, 1331, 87, 2627, -189, 4277, 1658, 3884, Q, 2719, 3413, 2719, 3020, Z]
      ],
      "label": "Melilla",
      "shortLabel": "ME",
      "labelPosition": [138.5, 199.7],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'melilla',
  type: 'maps'
};