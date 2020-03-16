/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Ceuta.1.04-03-2017 11:58:17
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
  "name": "Ceuta",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 277,
  "baseHeight": 400,
  "baseScaleFactor": 10,
  "entities": {
    "ES.CE.CE": {
      "outlines": [
        [M, 45, 1911, Q, -100, 4225, 2069, 3936, 2864, 3791, 2719, 2779, 2575, 2056, 2502, 1405, 2358, 682, 1201, 32, Q, 478, 899, 45, 1911, Z]
      ],
      "label": "Ceuta",
      "shortLabel": "CE",
      "labelPosition": [138.8, 200],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'ceuta',
  type: 'maps'
};