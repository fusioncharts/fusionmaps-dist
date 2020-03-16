/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Kassala.1.06-19-2019 11:30:47
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
  "name": "Kassala",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 446,
  "baseHeight": 600,
  "baseScaleFactor": 10,
  "firstEntity": "SD.KA.SE",
  "entities": {
    "SD.KA.SE": {
      "outlines": [
        [M, 1537, 1662, Q, 1518, 1558, 1508, 1511, 1403, 1513, 1227, 1531, 1132, 1540, 940, 1564, 937, 1564, 935, 1565, 887, 1572, 830, 1576, 769, 1580, 639, 1590, 513, 1601, 388, 1601, 263, 1600, 235, 1615, 207, 1630, 170, 1704, 135, 1777, 89, 1849, 44, 1921, 44, 1974, 44, 2049, 102, 2199, 140, 2296, 169, 2350, 171, 2355, 174, 2359, 206, 2429, 231, 2482, 257, 2537, 257, 2603, 258, 2669, 224, 2694, 190, 2717, 170, 2730, 156, 2740, 156, 2756, 156, 2781, 253, 2813, 304, 2830, 378, 2852, 400, 2862, 446, 2878, 490, 2894, 507, 2898, 529, 2903, 572, 2920, 617, 2937, 683, 2957, 749, 2976, 759, 3027, 770, 3078, 749, 3164, 727, 3250, 894, 3353, 926, 3356, 994, 3395, 1065, 3435, 1106, 3459, 1147, 3484, 1182, 3523, 1216, 3564, 1244, 3610, 1271, 3656, 1352, 3809, 1432, 3963, 1442, 4037, L, 1531, 4037, Q, 1599, 4022, 1677, 4020, 1724, 4019, 1841, 4018, 1899, 4017, 1986, 4008, 2068, 3999, 2105, 3999, 2146, 3999, 2161, 4005, 2173, 4009, 2181, 4018, 2236, 4005, 2297, 3995, 2362, 3985, 2408, 3974, 2427, 3971, 2516, 3967, 2573, 3964, 2636, 3930, 2669, 3913, 2719, 3854, 2738, 3831, 2762, 3815, 2766, 3813, 2769, 3811, 2760, 3731, 2701, 3597, 2629, 3435, 2564, 3435, 2537, 3435, 2453, 3557, 2367, 3679, 2364, 3679, 2328, 3679, 2213, 3540, 2114, 3421, 2078, 3358, 2037, 3286, 1997, 3160, 1957, 3021, 1933, 2948, 1932, 2944, 1930, 2941, 1850, 2755, 1810, 2659, 1736, 2483, 1694, 2372, 1663, 2288, 1641, 2094, 1621, 1911, 1581, 1816, 1580, 1814, 1579, 1812, Q, 1556, 1756, 1537, 1662, Z]
      ],
      "label": "Seteet",
      "shortLabel": "SE",
      "labelPosition": [91.7, 232.6],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.KA.NB"
    },
    "SD.KA.NB": {
      "outlines": [
        [M, 2493, 2128, Q, 2444, 2081, 2370, 2071, 2311, 2064, 2248, 2037, 2228, 2028, 2131, 1980, 2079, 1954, 2032, 1896, 1983, 1836, 1971, 1782, 1962, 1744, 1890, 1688, 1829, 1641, 1834, 1591, 1827, 1588, 1824, 1585, 1800, 1553, 1795, 1547, 1776, 1528, 1712, 1520, 1689, 1518, 1613, 1513, 1541, 1510, 1541, 1510, 1525, 1510, 1508, 1511, 1518, 1558, 1537, 1662, 1556, 1756, 1579, 1812, 1580, 1814, 1581, 1816, 1621, 1911, 1641, 2094, 1663, 2288, 1694, 2372, 1736, 2483, 1810, 2659, 1850, 2755, 1930, 2941, 1932, 2944, 1933, 2948, 1957, 3021, 1997, 3160, 2037, 3286, 2078, 3358, 2114, 3421, 2213, 3540, 2328, 3679, 2364, 3679, 2367, 3679, 2453, 3557, 2537, 3435, 2564, 3435, 2629, 3435, 2701, 3597, 2760, 3731, 2769, 3811, 2771, 3810, 2773, 3809, 2793, 3796, 2806, 3787, 2888, 3729, 2909, 3712, 2947, 3681, 2987, 3636, 3008, 3613, 3065, 3562, 3119, 3512, 3144, 3483, 3229, 3385, 3220, 3279, 3217, 3234, 3224, 3177, 3196, 3175, 3160, 3151, 3119, 3121, 3096, 3107, 3056, 3083, 3036, 3071, 3001, 3049, 2970, 3023, 2925, 2986, 2874, 2920, 2815, 2839, 2777, 2793, 2688, 2681, 2628, 2532, 2572, 2391, 2558, 2256, 2557, 2252, 2557, 2248, Q, 2542, 2175, 2493, 2128, Z]
      ],
      "label": "Nahr Atbara",
      "shortLabel": "NB",
      "labelPosition": [233.8, 282.9],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.KA.KR"
    },
    "SD.KA.KR": {
      "outlines": [
        [M, 3996, 2401, L, 4014, 2348, 3917, 2374, Q, 3878, 2392, 3836, 2422, 3690, 2522, 3666, 2533, 3526, 2600, 3455, 2654, 3362, 2725, 3307, 2825, 3305, 2829, 3303, 2833, 3301, 2837, 3301, 2842, 3285, 2907, 3248, 3042, 3231, 3116, 3224, 3177, 3217, 3234, 3220, 3279, 3229, 3385, 3144, 3483, 3119, 3512, 3065, 3562, 3008, 3613, 2987, 3636, 2947, 3681, 2909, 3712, 2888, 3729, 2806, 3787, 2793, 3796, 2773, 3809, L, 2862, 3810, Q, 2907, 3810, 3063, 3765, 3142, 3743, 3232, 3717, 3266, 3710, 3313, 3685, 3339, 3671, 3383, 3646, 3410, 3633, 3457, 3613, 3494, 3595, 3514, 3574, 3512, 3554, 3511, 3539, 3520, 3516, 3521, 3513, 3532, 3494, 3548, 3489, 3567, 3483, 3577, 3477, 3591, 3470, 3607, 3456, 3629, 3438, 3651, 3405, 3673, 3373, 3685, 3344, 3763, 3143, 3792, 3061, 3814, 2994, 3834, 2920, 3857, 2835, 3871, 2783, 3883, 2739, 3922, 2629, 3954, 2540, 3966, 2491, 3967, 2489, 3968, 2487, Q, 3983, 2443, 3996, 2401, Z]
      ],
      "label": "Kassala",
      "shortLabel": "KR",
      "labelPosition": [350.5, 302.3],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.KA.AG"
    },
    "SD.KA.AG": {
      "outlines": [
        [M, 3234, 315, Q, 3179, 298, 3119, 294, 3034, 289, 2982, 275, 2946, 265, 2923, 258, 2881, 247, 2851, 243, 2788, 236, 2731, 213, 2663, 182, 2608, 163, 2564, 132, 2515, 101, 2418, 40, 2388, 40, 2367, 40, 2359, 125, 2355, 170, 2351, 240, L, 2351, 444, Q, 2351, 447, 2351, 543, 2352, 632, 2353, 681, 2353, 689, 2353, 695, 2351, 760, 2346, 848, 2343, 927, 2343, 975, 2343, 1041, 2336, 1109, 2327, 1188, 2311, 1237, 2265, 1378, 2123, 1473, 2083, 1499, 2003, 1539, 1895, 1593, 1856, 1593, 1842, 1593, 1834, 1591, 1829, 1641, 1890, 1688, 1962, 1744, 1971, 1782, 1983, 1836, 2032, 1896, 2079, 1954, 2131, 1980, 2228, 2028, 2248, 2037, 2311, 2064, 2370, 2071, 2444, 2081, 2493, 2128, 2542, 2175, 2557, 2248, 2557, 2252, 2558, 2256, 2572, 2391, 2628, 2532, 2688, 2681, 2777, 2793, 2815, 2839, 2874, 2920, 2925, 2986, 2970, 3023, 3001, 3049, 3036, 3071, 3056, 3083, 3096, 3107, 3119, 3121, 3160, 3151, 3196, 3175, 3224, 3177, 3231, 3116, 3248, 3042, 3285, 2907, 3301, 2842, 3301, 2837, 3303, 2833, 3305, 2829, 3307, 2825, 3362, 2725, 3455, 2654, 3526, 2600, 3666, 2533, 3690, 2522, 3836, 2422, 3878, 2392, 3917, 2374, L, 4014, 2348, 3980, 2308, Q, 3928, 2234, 3910, 2101, 3899, 2007, 3893, 1962, 3882, 1885, 3865, 1840, 3777, 1609, 3768, 1589, 3706, 1439, 3645, 1347, 3572, 1239, 3522, 1100, 3470, 956, 3472, 859, 3474, 730, 3431, 590, 3405, 510, 3337, 346, 3329, 348, 3325, 349, 3309, 353, 3288, 341, Q, 3254, 322, 3234, 315, Z]
      ],
      "label": "Al Gash",
      "shortLabel": "AG",
      "labelPosition": [292.3, 160.9],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.KA.HA"
    },
    "SD.KA.HA": {
      "outlines": [
        [M, 4394, 488, Q, 4380, 393, 4372, 370, 4370, 368, 4370, 367, 4348, 329, 4336, 329, 4265, 329, 4198, 350, 4130, 370, 3983, 371, 3834, 372, 3684, 357, 3535, 341, 3491, 332, 3447, 323, 3395, 334, 3355, 342, 3337, 346, 3405, 510, 3431, 590, 3474, 730, 3472, 859, 3470, 956, 3522, 1100, 3572, 1239, 3645, 1347, 3706, 1439, 3768, 1589, 3777, 1609, 3865, 1840, 3882, 1885, 3893, 1962, 3899, 2007, 3910, 2101, 3928, 2234, 3980, 2308, L, 4014, 2348, 4029, 2308, Q, 4096, 2111, 4134, 1996, 4140, 1977, 4174, 1854, 4194, 1780, 4225, 1714, 4247, 1667, 4268, 1604, 4280, 1565, 4287, 1535, L, 4298, 1486, 4300, 1446, Q, 4300, 1440, 4300, 1438, 4300, 1379, 4255, 1300, 4209, 1220, 4209, 1121, L, 4209, 1048, Q, 4212, 1025, 4230, 970, 4247, 915, 4249, 911, 4255, 897, 4270, 894, 4293, 889, 4305, 882, 4345, 855, 4360, 840, 4390, 813, 4396, 783, 4408, 718, 4409, 701, L, 4409, 644, Q, 4409, 600, 4394, 488, Z]
      ],
      "label": "Hamashkorieb",
      "shortLabel": "HA",
      "labelPosition": [387.3, 84.8],
      "labelAlignment": [CEN, MID],
      "nextId": "SD.KA.AF"
    },
    "SD.KA.AF": {
      "outlines": [
        [M, 3232, 3717, Q, 3142, 3743, 3063, 3765, 2907, 3810, 2862, 3810, L, 2773, 3809, Q, 2771, 3810, 2769, 3811, 2766, 3813, 2762, 3815, 2738, 3831, 2719, 3854, 2669, 3913, 2636, 3930, 2573, 3964, 2516, 3967, 2427, 3971, 2408, 3974, 2362, 3985, 2297, 3995, 2236, 4005, 2181, 4018, 2191, 4031, 2191, 4052, 2191, 4079, 2191, 4118, 2191, 4122, 2191, 4125, 2185, 4180, 2243, 4201, 2304, 4223, 2391, 4213, 2477, 4203, 2494, 4237, 2512, 4271, 2505, 4362, 2498, 4453, 2471, 4550, 2457, 4605, 2404, 4750, 2393, 4782, 2358, 4865, 2329, 4935, 2324, 4953, 2321, 4966, 2307, 5001, 2294, 5032, 2289, 5053, 2285, 5070, 2273, 5094, 2264, 5112, 2257, 5122, 2250, 5131, 2240, 5157, 2229, 5183, 2194, 5268, 2155, 5359, 2142, 5395, 2115, 5465, 2070, 5648, 2070, 5685, 2223, 5699, 2308, 5707, 2412, 5707, 2417, 5707, 2602, 5702, 2695, 5699, 2729, 5700, 2746, 5700, 2749, 5702, L, 2749, 5702, Q, 2900, 5702, 2941, 5706, 3056, 5715, 3102, 5753, 3131, 5776, 3178, 5807, 3206, 5825, 3268, 5865, 3324, 5902, 3369, 5942, 3399, 5962, 3449, 5956, 3498, 5949, 3510, 5937, 3521, 5925, 3538, 5854, 3553, 5790, 3555, 5744, 3557, 5698, 3561, 5644, 3564, 5590, 3586, 5519, 3608, 5448, 3622, 5362, 3635, 5276, 3644, 5249, 3653, 5220, 3651, 5169, 3647, 5117, 3643, 5095, 3639, 5079, 3640, 5045, 3618, 4934, 3601, 4767, 3583, 4591, 3570, 4459, 3562, 4291, 3542, 3989, 3523, 3700, 3514, 3574, 3494, 3595, 3457, 3613, 3410, 3633, 3383, 3646, 3339, 3671, 3313, 3685, Q, 3266, 3710, 3232, 3717, Z]
      ],
      "label": "Al Fushqa",
      "shortLabel": "AF",
      "labelPosition": [297.3, 476.6],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'kassala',
  type: 'maps'
};