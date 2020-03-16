/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.RedRiverDelta.1.03-12-2018 01:54:12
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
  "name": "RedRiverDelta",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 600,
  "baseHeight": 660,
  "baseScaleFactor": 10,
  "firstEntity": "VN.RD.BN",
  "entities": {
    "VN.RD.BN": {
      "outlines": [
        [M, 3381, 1551, Q, 3318, 1551, 3271, 1568, 3225, 1586, 3150, 1586, 3038, 1586, 3000, 1556, 2922, 1498, 2812, 1458, 2775, 1444, 2729, 1399, 2691, 1361, 2677, 1336, 2666, 1317, 2599, 1295, 2525, 1271, 2493, 1237, 2482, 1227, 2472, 1202, 2472, 1300, 2455, 1439, 2437, 1580, 2444, 1723, L, 2444, 1852, Q, 2643, 1860, 2698, 1952, 2728, 2004, 2728, 2176, 2728, 2230, 2711, 2277, 2746, 2295, 2784, 2299, 2800, 2300, 2881, 2300, 2925, 2300, 3047, 2287, 3154, 2281, 3184, 2308, 3213, 2335, 3224, 2372, 3229, 2387, 3283, 2394, 3335, 2399, 3354, 2411, 3379, 2427, 3406, 2487, 3424, 2457, 3469, 2457, 3565, 2457, 3650, 2386, 3753, 2297, 3760, 2295, 3898, 2240, 3911, 2233, 4038, 2165, 4038, 2083, 4038, 2005, 4016, 1974, 4004, 1955, 3968, 1942, 3893, 1914, 3879, 1779, L, 3799, 1779, Q, 3741, 1758, 3707, 1742, 3705, 1742, 3688, 1692, 3669, 1641, 3666, 1635, 3627, 1585, 3501, 1563, Q, 3383, 1551, 3381, 1551, Z]
      ],
      "label": "Bắc Ninh",
      "shortLabel": "BN",
      "labelPosition": [324, 195.4],
      "labelAlignment": [CEN, MID],
      "nextId": "VN.RD.HM"
    },
    "VN.RD.HM": {
      "outlines": [
        [M, 2613, 3517, Q, 2608, 3551, 2579, 3550, 2525, 3548, 2486, 3596, 2428, 3668, 2416, 3674, 2402, 3681, 2314, 3675, 2282, 3669, 2206, 3667, 2086, 3667, 2076, 3667, 1914, 3667, 1832, 3937, 1864, 3954, 1895, 4079, 1901, 4099, 1937, 4129, 1979, 4161, 1981, 4164, 1998, 4190, 2007, 4226, 2020, 4279, 2029, 4309, 2030, 4311, 2031, 4314, 2051, 4376, 2051, 4409, 2051, 4443, 2035, 4475, 2026, 4492, 2008, 4520, 1997, 4541, 1986, 4592, 1983, 4607, 1967, 4611, 2005, 4645, 2118, 4789, 2257, 4933, 2405, 4933, 2409, 4933, 2414, 4933, 2480, 4931, 2529, 4891, 2552, 4871, 2646, 4764, 2660, 4748, 2762, 4681, 2865, 4610, 2912, 4586, 2944, 4570, 3012, 4488, 3071, 4418, 3135, 4408, 3156, 4405, 3289, 4392, 3348, 4382, 3379, 4367, 3410, 4351, 3410, 4328, 3410, 4218, 3303, 4139, 3172, 4067, 3126, 4035, L, 3126, 3831, Q, 3015, 3838, 2948, 3829, 2881, 3821, 2878, 3696, 2876, 3602, 2778, 3548, Q, 2692, 3501, 2613, 3517, Z]
      ],
      "label": "Hà Nam",
      "shortLabel": "HM",
      "labelPosition": [251.1, 422.3],
      "labelAlignment": [CEN, MID],
      "nextId": "VN.RD.HI"
    },
    "VN.RD.HI": {
      "outlines": [
        [M, 2472, 1202, Q, 2456, 1159, 2442, 1077, 2421, 947, 2399, 924, 2344, 867, 2202, 866, 2024, 864, 2009, 860, 1955, 851, 1914, 845, 1856, 934, 1775, 949, 1748, 954, 1738, 974, 1726, 1001, 1726, 1082, 1726, 1153, 1727, 1160, 1731, 1194, 1753, 1214, 1785, 1243, 1812, 1278, 1847, 1325, 1851, 1354, 1858, 1426, 1947, 1492, 2032, 1555, 2032, 1627, 2032, 1670, 2034, 1729, 2025, 1768, 1955, 1784, 1917, 1794, 1898, 1846, 1879, 1906, 1845, 1924, 1838, 1908, 1827, 1891, 1786, 1830, 1779, 1812, 1760, 1766, 1714, 1750, 1682, 1739, 1623, 1741, 1562, 1743, 1544, 1698, 1509, 1617, 1494, 1600, 1461, 1563, 1376, 1565, 1298, 1574, 1297, 1574, 1205, 1574, 1173, 1579, 1121, 1588, 1099, 1617, 1066, 1689, 1056, 1707, 1042, 1734, 972, 1734, 894, 1734, 813, 1605, 720, 1460, 686, 1444, 559, 1384, 503, 1322, 436, 1248, 439, 1145, L, 266, 1145, Q, 258, 1163, 253, 1180, 249, 1194, 248, 1209, 195, 1470, 124, 1557, 96, 1591, 89, 1631, 76, 1691, 76, 1847, 76, 1939, 83, 2061, 91, 2151, 124, 2177, 149, 2196, 225, 2196, 273, 2196, 290, 2151, 308, 2105, 400, 2105, 431, 2105, 462, 2136, 505, 2181, 517, 2189, 554, 2211, 612, 2223, 644, 2230, 694, 2238, 720, 2247, 757, 2305, 796, 2364, 815, 2374, 832, 2383, 893, 2409, 946, 2438, 957, 2473, L, 957, 2558, Q, 840, 2566, 817, 2589, 793, 2610, 793, 2715, 793, 2795, 831, 2922, 870, 3051, 907, 3084, 921, 3097, 1009, 3105, 1094, 3112, 1113, 3134, 1146, 3172, 1173, 3223, 1201, 3274, 1214, 3290, 1260, 3345, 1449, 3655, 1636, 3937, 1718, 3937, 1736, 3937, 1786, 3931, 1816, 3929, 1830, 3936, 1831, 3936, 1832, 3937, 1914, 3667, 2076, 3667, 2086, 3667, 2206, 3667, 2282, 3669, 2314, 3675, 2402, 3681, 2416, 3674, 2428, 3668, 2486, 3596, 2525, 3548, 2579, 3550, 2608, 3551, 2613, 3517, 2614, 3509, 2614, 3500, 2614, 3440, 2577, 3400, 2516, 3347, 2465, 3297, 2439, 3272, 2445, 3183, 2457, 3085, 2457, 3054, 2457, 3009, 2435, 2985, 2404, 2959, 2386, 2942, 2315, 2877, 2315, 2696, 2315, 2528, 2331, 2510, 2344, 2493, 2514, 2450, 2520, 2449, 2525, 2448, 2564, 2436, 2602, 2412, 2647, 2384, 2672, 2350, 2697, 2317, 2711, 2277, 2728, 2230, 2728, 2176, 2728, 2004, 2698, 1952, 2643, 1860, 2444, 1852, L, 2444, 1723, Q, 2437, 1580, 2455, 1439, Q, 2472, 1300, 2472, 1202, Z]
      ],
      "label": "Hà Nội",
      "shortLabel": "HI",
      "labelPosition": [156.7, 255.6],
      "labelAlignment": [CEN, MID],
      "nextId": "VN.RD.HD"
    },
    "VN.RD.HD": {
      "outlines": [
        [M, 4077, 1464, Q, 4067, 1473, 4051, 1503, 4036, 1534, 4013, 1551, 4004, 1557, 3964, 1576, 3929, 1591, 3921, 1600, 3892, 1633, 3887, 1683, 3884, 1712, 3879, 1779, 3893, 1914, 3968, 1942, 4004, 1955, 4016, 1974, 4038, 2005, 4038, 2083, 4038, 2165, 3911, 2233, 3898, 2240, 3760, 2295, 3753, 2297, 3650, 2386, 3565, 2457, 3469, 2457, 3424, 2457, 3406, 2487, 3401, 2492, 3398, 2500, 3390, 2524, 3383, 2571, 3374, 2597, 3320, 2626, 3272, 2651, 3276, 2699, 3276, 2732, 3278, 2803, 3277, 2865, 3262, 2891, 3224, 2955, 3177, 2960, 3148, 2962, 3148, 3016, 3148, 3077, 3173, 3076, 3214, 3073, 3249, 3141, 3281, 3206, 3332, 3230, 3361, 3243, 3419, 3255, 3482, 3273, 3587, 3402, 3640, 3468, 3730, 3599, 3871, 3534, 4015, 3528, 4077, 3525, 4137, 3468, 4190, 3418, 4229, 3414, 4233, 3413, 4238, 3413, 4273, 3413, 4327, 3453, 4380, 3493, 4420, 3493, 4553, 3493, 4585, 3394, 4593, 3368, 4593, 3238, 4593, 3229, 4644, 3126, 4693, 3028, 4682, 2977, 4659, 2899, 4718, 2825, 4805, 2717, 4807, 2710, 4829, 2656, 4874, 2581, 4931, 2488, 4944, 2462, 5016, 2319, 4985, 2159, 4925, 2145, 4880, 2077, 4819, 1988, 4831, 1877, 4844, 1760, 4748, 1696, 4697, 1666, 4677, 1650, 4643, 1621, 4639, 1586, 4618, 1380, 4611, 1362, 4587, 1308, 4467, 1308, 4410, 1308, 4384, 1317, 4329, 1335, 4291, 1400, 4264, 1448, 4179, 1452, Q, 4086, 1457, 4077, 1464, Z]
      ],
      "label": "Hải Dương",
      "shortLabel": "HD",
      "labelPosition": [407.1, 267.3],
      "labelAlignment": [CEN, MID],
      "nextId": "VN.RD.HP"
    },
    "VN.RD.HP": {
      "outlines": [
        [M, 5487, 2442, Q, 5458, 2420, 5442, 2388, 5432, 2350, 5424, 2325, 5409, 2279, 5378, 2296, 5295, 2260, 5208, 2205, 5127, 2154, 5029, 2161, 5006, 2164, 4985, 2159, 5016, 2319, 4944, 2462, 4931, 2488, 4874, 2581, 4829, 2656, 4807, 2710, 4805, 2717, 4718, 2825, 4659, 2899, 4682, 2977, 4693, 3028, 4644, 3126, 4593, 3229, 4593, 3238, 4593, 3368, 4585, 3394, 4553, 3493, 4420, 3493, 4380, 3493, 4327, 3453, 4273, 3413, 4238, 3413, 4233, 3413, 4229, 3414, 4244, 3573, 4238, 3653, 4235, 3684, 4281, 3715, 4341, 3758, 4362, 3795, 4400, 3860, 4592, 3882, 4677, 3892, 4802, 3892, 4824, 3892, 4895, 3772, 4931, 3711, 4966, 3644, 5041, 3659, 5096, 3756, 5127, 3805, 5172, 3885, 5222, 3836, 5329, 3746, 5352, 3724, 5412, 3715, 5447, 3710, 5524, 3704, 5664, 3683, 5670, 3568, 5676, 3442, 5780, 3372, 5808, 3352, 5869, 3317, 5914, 3290, 5940, 3263, 5939, 3213, 5910, 3124, 5881, 3038, 5883, 2978, 5885, 2925, 5794, 2879, 5689, 2826, 5663, 2765, 5652, 2737, 5626, 2698, 5602, 2661, 5591, 2630, 5549, 2510, 5535, 2488, Q, 5522, 2468, 5487, 2442, Z]
      ],
      "label": "Hải Phòng",
      "shortLabel": "HP",
      "labelPosition": [519.4, 302.6],
      "labelAlignment": [CEN, MID],
      "nextId": "VN.RD.HY"
    },
    "VN.RD.HY": {
      "outlines": [
        [M, 3224, 2372, Q, 3213, 2335, 3184, 2308, 3154, 2281, 3047, 2287, 2925, 2300, 2881, 2300, 2800, 2300, 2784, 2299, 2746, 2295, 2711, 2277, 2697, 2317, 2672, 2350, 2647, 2384, 2602, 2412, 2564, 2436, 2525, 2448, 2520, 2449, 2514, 2450, 2344, 2493, 2331, 2510, 2315, 2528, 2315, 2696, 2315, 2877, 2386, 2942, 2404, 2959, 2435, 2985, 2457, 3009, 2457, 3054, 2457, 3085, 2445, 3183, 2439, 3272, 2465, 3297, 2516, 3347, 2577, 3400, 2614, 3440, 2614, 3500, 2614, 3509, 2613, 3517, 2692, 3501, 2778, 3548, 2876, 3602, 2878, 3696, 2881, 3821, 2948, 3829, 3015, 3838, 3126, 3831, L, 3126, 3830, Q, 3188, 3844, 3271, 3797, 3301, 3779, 3410, 3697, 3464, 3657, 3559, 3642, 3674, 3624, 3730, 3599, 3640, 3468, 3587, 3402, 3482, 3273, 3419, 3255, 3361, 3243, 3332, 3230, 3281, 3206, 3249, 3141, 3214, 3073, 3173, 3076, 3148, 3077, 3148, 3016, 3148, 2962, 3177, 2960, 3224, 2955, 3262, 2891, 3277, 2865, 3278, 2803, 3276, 2732, 3276, 2699, 3272, 2651, 3320, 2626, 3374, 2597, 3383, 2571, 3390, 2524, 3398, 2500, 3401, 2492, 3406, 2487, 3379, 2427, 3354, 2411, 3335, 2399, 3283, 2394, Q, 3229, 2387, 3224, 2372, Z]
      ],
      "label": "Hưng Yên",
      "shortLabel": "HY",
      "labelPosition": [280.2, 305.6],
      "labelAlignment": [CEN, MID],
      "nextId": "VN.RD.ND"
    },
    "VN.RD.ND": {
      "outlines": [
        [M, 3730, 4684, Q, 3718, 4675, 3655, 4664, 3599, 4655, 3579, 4631, 3571, 4620, 3554, 4540, 3541, 4476, 3490, 4453, 3464, 4441, 3420, 4405, 3394, 4383, 3379, 4367, 3348, 4382, 3289, 4392, 3156, 4405, 3135, 4408, 3071, 4418, 3012, 4488, 2944, 4570, 2912, 4586, 2865, 4610, 2762, 4681, 2660, 4748, 2646, 4764, 2552, 4871, 2529, 4891, 2480, 4931, 2414, 4933, 2412, 4985, 2459, 5032, 2485, 5057, 2530, 5094, 2550, 5115, 2571, 5183, 2595, 5261, 2601, 5272, 2621, 5306, 2663, 5333, 2687, 5349, 2735, 5378, 2752, 5391, 2757, 5425, 2761, 5444, 2764, 5486, 2775, 5564, 2854, 5564, 2882, 5564, 2908, 5506, 2929, 5446, 2930, 5441, 2959, 5363, 3019, 5357, 3048, 5355, 3072, 5352, 3167, 5370, 3189, 5409, 3230, 5487, 3294, 5530, 3373, 5583, 3400, 5610, 3473, 5684, 3473, 5774, 3473, 5858, 3401, 5903, 3314, 5957, 3285, 6045, 3306, 6146, 3228, 6223, 3207, 6242, 3171, 6276, 3143, 6306, 3143, 6334, 3143, 6339, 3148, 6424, 3152, 6510, 3152, 6553, 3193, 6553, 3210, 6550, 3246, 6545, 3266, 6524, 3298, 6491, 3328, 6435, 3340, 6411, 3380, 6410, 3399, 6410, 3468, 6412, 3518, 6414, 3550, 6410, 3575, 6408, 3589, 6366, 3604, 6317, 3614, 6311, 3652, 6287, 3698, 6270, 3726, 6256, 3728, 6212, 3730, 6180, 3765, 6069, 3788, 5993, 3824, 5954, 3873, 5903, 3985, 5863, 4032, 5846, 4066, 5743, 4104, 5631, 4126, 5614, 4161, 5587, 4289, 5568, 4418, 5549, 4425, 5544, 4444, 5531, 4452, 5494, 4463, 5455, 4489, 5430, 4508, 5413, 4554, 5413, 4607, 5413, 4631, 5401, 4663, 5384, 4751, 5303, 4807, 5250, 4867, 5246, 4873, 5243, 4879, 5240, 4927, 5214, 4960, 5114, L, 4949, 5111, Q, 4946, 5111, 4836, 5098, 4727, 5085, 4677, 5085, 4569, 5085, 4500, 5161, 4469, 5198, 4454, 5212, 4431, 5236, 4407, 5236, 4358, 5236, 4274, 5108, 4235, 5048, 4175, 4933, 4120, 4828, 4019, 4828, 3962, 4832, 3933, 4832, 3882, 4835, 3846, 4817, 3817, 4803, 3783, 4751, Q, 3745, 4695, 3730, 4684, Z]
      ],
      "label": "Nam Định",
      "shortLabel": "ND",
      "labelPosition": [368.7, 529.5],
      "labelAlignment": [CEN, MID],
      "nextId": "VN.RD.NB"
    },
    "VN.RD.NB": {
      "outlines": [
        [M, 2459, 5032, Q, 2412, 4985, 2414, 4933, 2409, 4933, 2405, 4933, 2257, 4933, 2118, 4789, 2005, 4645, 1967, 4611, 1960, 4612, 1952, 4612, 1943, 4612, 1890, 4606, 1837, 4598, 1827, 4598, 1766, 4598, 1624, 4690, 1490, 4778, 1490, 4800, 1490, 4823, 1515, 4838, 1529, 4848, 1569, 4865, 1647, 4904, 1647, 4985, 1647, 5033, 1582, 5089, 1518, 5145, 1461, 5145, 1419, 5145, 1355, 5042, 1294, 4934, 1284, 4925, 1255, 4897, 1210, 4877, 1161, 4857, 1140, 4847, 1072, 4813, 1093, 4733, L, 1056, 4733, Q, 994, 4790, 900, 4911, 900, 4969, 1034, 5063, 1102, 5112, 1184, 5159, 1192, 5165, 1317, 5323, 1418, 5447, 1511, 5472, 1560, 5485, 1625, 5516, 1687, 5546, 1724, 5572, 1757, 5596, 1832, 5600, 1872, 5603, 1944, 5607, 1986, 5613, 2036, 5674, 2091, 5742, 2122, 5756, 2203, 5795, 2214, 5806, 2225, 5816, 2266, 5867, 2307, 5913, 2321, 5913, L, 2417, 5900, Q, 2511, 5885, 2535, 5885, 2600, 5885, 2630, 5949, 2678, 6048, 2740, 6098, 2768, 6121, 2877, 6179, 2911, 6198, 2911, 6265, 2911, 6283, 2897, 6428, 2897, 6512, 2990, 6539, 3038, 6553, 3146, 6553, 3149, 6553, 3152, 6553, 3152, 6510, 3148, 6424, 3143, 6339, 3143, 6334, 3143, 6306, 3171, 6276, 3207, 6242, 3228, 6223, 3306, 6146, 3285, 6045, 3314, 5957, 3401, 5903, 3473, 5858, 3473, 5774, 3473, 5684, 3400, 5610, 3373, 5583, 3294, 5530, 3230, 5487, 3189, 5409, 3167, 5370, 3072, 5352, 3048, 5355, 3019, 5357, 2959, 5363, 2930, 5441, 2929, 5446, 2908, 5506, 2882, 5564, 2854, 5564, 2775, 5564, 2764, 5486, 2761, 5444, 2757, 5425, 2752, 5391, 2735, 5378, 2687, 5349, 2663, 5333, 2621, 5306, 2601, 5272, 2595, 5261, 2571, 5183, 2550, 5115, 2530, 5094, Q, 2485, 5057, 2459, 5032, Z]
      ],
      "label": "Ninh Bình",
      "shortLabel": "NB",
      "labelPosition": [213.1, 530.1],
      "labelAlignment": [CEN, MID],
      "nextId": "VN.RD.TB"
    },
    "VN.RD.TB": {
      "outlines": [
        [M, 4229, 3414, Q, 4190, 3418, 4137, 3468, 4077, 3525, 4015, 3528, 3871, 3534, 3730, 3599, 3674, 3624, 3559, 3642, 3464, 3657, 3410, 3697, 3301, 3779, 3271, 3797, 3188, 3844, 3126, 3830, L, 3126, 4035, Q, 3172, 4067, 3303, 4139, 3410, 4218, 3410, 4328, 3410, 4351, 3379, 4367, 3394, 4383, 3420, 4405, 3464, 4441, 3490, 4453, 3541, 4476, 3554, 4540, 3571, 4620, 3579, 4631, 3599, 4655, 3655, 4664, 3718, 4675, 3730, 4684, 3745, 4695, 3783, 4751, 3817, 4803, 3846, 4817, 3882, 4835, 3933, 4832, 3962, 4832, 4019, 4828, 4120, 4828, 4175, 4933, 4235, 5048, 4274, 5108, 4358, 5236, 4407, 5236, 4431, 5236, 4454, 5212, 4469, 5198, 4500, 5161, 4569, 5085, 4677, 5085, 4727, 5085, 4836, 5098, 4946, 5111, 4949, 5111, L, 4960, 5114, Q, 4972, 5076, 4982, 5028, 5013, 4811, 5037, 4742, 5032, 4547, 4966, 4501, 4896, 4488, 4896, 4453, 4896, 4390, 4932, 4365, 4955, 4348, 5037, 4292, 5064, 4269, 5066, 4189, 5063, 4104, 5065, 4080, 5075, 3982, 5154, 3902, 5162, 3894, 5172, 3885, 5127, 3805, 5096, 3756, 5041, 3659, 4966, 3644, 4931, 3711, 4895, 3772, 4824, 3892, 4802, 3892, 4677, 3892, 4592, 3882, 4400, 3860, 4362, 3795, 4341, 3758, 4281, 3715, 4235, 3684, 4238, 3653, Q, 4244, 3573, 4229, 3414, Z]
      ],
      "label": "Thái Bình",
      "shortLabel": "TB",
      "labelPosition": [414.9, 432.5],
      "labelAlignment": [CEN, MID],
      "nextId": "VN.RD.VC"
    },
    "VN.RD.VC": {
      "outlines": [
        [M, 1182, 252, Q, 1136, 232, 1135, 178, 1134, 97, 1131, 87, 1120, 44, 1068, 44, 1036, 44, 1015, 76, 989, 122, 971, 150, 952, 181, 906, 179, 849, 176, 822, 192, 789, 213, 695, 310, 637, 370, 559, 370, 493, 370, 462, 334, 442, 314, 425, 256, 407, 200, 387, 178, 354, 142, 286, 142, 267, 142, 234, 171, 221, 182, 183, 220, 167, 237, 121, 244, 68, 253, 47, 264, L, 47, 356, Q, 129, 342, 169, 391, 229, 464, 275, 484, 334, 509, 352, 622, 360, 666, 360, 746, 360, 903, 346, 1002, 339, 1046, 295, 1101, 277, 1123, 266, 1145, L, 439, 1145, Q, 436, 1248, 503, 1322, 559, 1384, 686, 1444, 720, 1460, 813, 1605, 894, 1734, 972, 1734, 1042, 1734, 1056, 1707, 1066, 1689, 1099, 1617, 1121, 1588, 1173, 1579, 1205, 1574, 1297, 1574, 1298, 1574, 1376, 1565, 1461, 1563, 1494, 1600, 1509, 1617, 1544, 1698, 1562, 1743, 1623, 1741, 1682, 1739, 1714, 1750, 1760, 1766, 1779, 1812, 1786, 1830, 1827, 1891, 1838, 1908, 1845, 1924, 1879, 1906, 1898, 1846, 1917, 1794, 1955, 1784, 2025, 1768, 2034, 1729, 2032, 1670, 2032, 1627, 2032, 1555, 1947, 1492, 1858, 1426, 1851, 1354, 1847, 1325, 1812, 1278, 1785, 1243, 1753, 1214, 1731, 1194, 1727, 1160, 1726, 1153, 1726, 1082, 1726, 1001, 1738, 974, 1748, 954, 1775, 949, 1856, 934, 1914, 845, 1853, 834, 1819, 825, 1724, 802, 1697, 718, 1677, 657, 1551, 631, 1439, 607, 1442, 534, 1443, 488, 1413, 452, 1393, 430, 1355, 406, 1330, 391, 1310, 346, 1287, 299, 1255, 278, Q, 1207, 263, 1182, 252, Z]
      ],
      "label": "Vĩnh Phúc",
      "shortLabel": "VC",
      "labelPosition": [104.1, 98.4],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'redriverdelta',
  type: 'maps'
};