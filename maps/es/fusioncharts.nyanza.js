/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Nyanza.1.07-06-2018 02:19:04
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
  "name": "Nyanza",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 471,
  "baseHeight": 600,
  "baseScaleFactor": 10,
  "firstEntity": "KE.NY.SI",
  "entities": {
    "KE.NY.SI": {
      "outlines": [
        [M, 1054, 91, Q, 1000, 91, 975, 78, 942, 58, 899, 40, L, 878, 40, Q, 812, 159, 766, 152, 721, 147, 705, 195, 688, 248, 667, 248, 588, 116, 563, 108, L, 530, 108, Q, 530, 136, 515, 159, 502, 185, 499, 210, 497, 238, 477, 243, 451, 251, 438, 266, 416, 294, 413, 330, 413, 337, 413, 378, 367, 421, 365, 424, 362, 429, 362, 462, 362, 492, 372, 594, 377, 686, 344, 706, 334, 711, 294, 719, 258, 724, 238, 736, 210, 752, 210, 780, 210, 797, 215, 848, 215, 886, 202, 958, 192, 1019, 192, 1067, 182, 1090, 156, 1115, 138, 1136, 136, 1156, 131, 1176, 103, 1204, 77, 1232, 49, 1245, L, 52, 1308, 82, 1313, 156, 1313, Q, 159, 1291, 159, 1265, L, 225, 1265, Q, 225, 1273, 233, 1288, 233, 1306, 205, 1316, 169, 1331, 169, 1334, 164, 1336, 161, 1349, 161, 1359, 156, 1364, 128, 1377, 123, 1382, L, 123, 1410, 230, 1410, 233, 1433, Q, 233, 1443, 217, 1453, 205, 1466, 205, 1481, 205, 1502, 212, 1532, L, 245, 1532, 245, 1446, 273, 1446, 273, 1377, 321, 1377, 337, 1413, 421, 1413, Q, 431, 1385, 431, 1354, L, 469, 1354, 464, 1397, Q, 464, 1418, 469, 1420, 474, 1425, 499, 1430, L, 499, 1491, Q, 444, 1504, 431, 1504, L, 431, 1514, Q, 436, 1525, 436, 1542, 436, 1565, 431, 1568, 413, 1568, 400, 1575, 405, 1626, 362, 1639, 319, 1652, 319, 1685, 319, 1702, 334, 1708, 339, 1710, 390, 1725, 410, 1728, 410, 1761, 410, 1779, 405, 1809, L, 469, 1814, Q, 477, 1814, 484, 1827, 492, 1842, 505, 1842, 533, 1842, 601, 1852, L, 621, 1850, 621, 1822, 644, 1822, Q, 632, 1847, 655, 1868, 683, 1893, 685, 1906, 688, 1944, 703, 1957, 718, 1969, 749, 1969, 769, 1967, 807, 1980, 822, 1982, 845, 1977, 860, 1977, 866, 1987, 871, 2010, 891, 2023, 904, 2025, 904, 2069, 904, 2107, 883, 2117, 860, 2122, 860, 2175, 860, 2203, 868, 2208, 891, 2208, 899, 2229, 911, 2280, 922, 2292, 932, 2305, 975, 2346, 1018, 2384, 1033, 2397, 1031, 2419, 1016, 2463, L, 970, 2468, 970, 2534, 1010, 2534, Q, 1074, 2524, 1112, 2453, 1176, 2325, 1186, 2313, 1188, 2308, 1288, 2229, 1374, 2160, 1374, 2137, 1377, 2099, 1366, 2058, 1354, 1982, 1305, 1972, 1272, 1975, 1257, 1975, 1222, 1975, 1219, 1944, 1209, 1906, 1201, 1896, 1191, 1886, 1160, 1886, L, 1160, 1837, Q, 1181, 1837, 1206, 1825, 1232, 1812, 1272, 1809, 1288, 1809, 1333, 1809, 1374, 1809, 1399, 1797, 1412, 1789, 1435, 1766, 1445, 1748, 1473, 1753, 1496, 1756, 1499, 1738, 1504, 1723, 1506, 1702, 1496, 1641, 1496, 1621, 1494, 1608, 1473, 1586, 1455, 1563, 1455, 1552, L, 1458, 1517, Q, 1458, 1512, 1440, 1489, 1420, 1463, 1420, 1433, 1420, 1415, 1433, 1413, 1450, 1408, 1458, 1400, 1483, 1369, 1496, 1362, 1514, 1352, 1539, 1324, 1560, 1301, 1575, 1296, L, 1636, 1275, Q, 1654, 1270, 1692, 1247, L, 1738, 1247, Q, 1750, 1245, 1783, 1219, L, 1849, 1219, Q, 1849, 1189, 1849, 1176, 1849, 1156, 1862, 1138, 1888, 1130, 1888, 1105, 1885, 1080, 1885, 1074, 1875, 1019, 1913, 1003, 1956, 986, 1956, 963, 1956, 927, 1941, 912, 1923, 899, 1923, 894, 1923, 810, 1936, 785, 1923, 774, 1921, 754, 1908, 668, 1908, 665, L, 1888, 668, Q, 1862, 663, 1837, 683, 1806, 713, 1804, 713, 1773, 719, 1712, 719, 1710, 747, 1712, 780, 1707, 795, 1677, 795, 1646, 787, 1623, 787, L, 1623, 736, 1580, 731, 1580, 701, 1631, 701, Q, 1623, 665, 1651, 652, 1679, 637, 1679, 627, 1679, 614, 1664, 602, 1649, 586, 1628, 586, 1616, 586, 1603, 607, 1588, 632, 1580, 637, 1577, 637, 1557, 640, 1539, 642, 1532, 650, L, 1453, 650, 1453, 624, Q, 1483, 624, 1496, 624, L, 1499, 515, 1476, 513, 1476, 477, Q, 1488, 472, 1532, 467, L, 1532, 408, Q, 1519, 403, 1496, 403, 1481, 403, 1425, 449, 1364, 502, 1356, 533, L, 1338, 533, 1333, 530, 1333, 352, Q, 1349, 350, 1369, 317, 1387, 289, 1387, 269, 1387, 263, 1374, 251, 1356, 235, 1356, 210, L, 1361, 169, Q, 1366, 147, 1356, 134, 1338, 108, 1313, 96, 1305, 93, 1295, 93, 1272, 88, 1239, 91, Z]
      ],
      "label": "Siaya",
      "shortLabel": "SI",
      "labelPosition": [100.3, 109.1],
      "labelAlignment": [CEN, MID],
      "nextId": "KE.NY.KU"
    },
    "KE.NY.KU": {
      "outlines": [
        [M, 3794, 1255, Q, 3797, 1260, 3800, 1275, 3800, 1293, 3802, 1301, L, 3802, 1306, 3723, 1306, 3723, 1352, 3611, 1354, Q, 3604, 1349, 3576, 1352, 3535, 1354, 3522, 1354, L, 3505, 1329, Q, 3497, 1316, 3477, 1316, L, 3472, 1217, 3436, 1217, 3400, 1222, Q, 3393, 1242, 3388, 1260, 3385, 1268, 3362, 1268, 3334, 1268, 3324, 1260, 3311, 1252, 3281, 1252, L, 3248, 1252, 3230, 1273, 3189, 1270, Q, 3205, 1225, 3172, 1214, 3161, 1214, 3090, 1214, 2991, 1214, 2991, 1235, 2991, 1255, 2907, 1255, L, 2859, 1255, Q, 2851, 1255, 2849, 1242, 2846, 1232, 2844, 1230, 2836, 1214, 2811, 1222, 2795, 1222, 2793, 1217, L, 2793, 1199, Q, 2793, 1163, 2803, 1158, 2831, 1153, 2861, 1136, L, 2861, 1115, Q, 2859, 1110, 2866, 1090, 2869, 1082, 2866, 1080, 2859, 1074, 2833, 1082, 2828, 1085, 2821, 1087, L, 2727, 1087, Q, 2734, 1120, 2719, 1130, 2714, 1133, 2691, 1133, 2663, 1133, 2661, 1130, 2655, 1123, 2653, 1087, L, 2589, 1087, 2589, 1194, 2594, 1204, Q, 2594, 1207, 2584, 1212, 2579, 1214, 2577, 1214, 2551, 1214, 2541, 1194, 2533, 1169, 2513, 1169, 2488, 1169, 2490, 1191, 2490, 1212, 2447, 1212, 2404, 1212, 2401, 1191, 2396, 1171, 2368, 1171, 2355, 1171, 2348, 1199, 2340, 1230, 2317, 1227, L, 2302, 1227, Q, 2292, 1161, 2254, 1169, 2221, 1174, 2205, 1158, 2200, 1151, 2195, 1123, L, 2083, 1123, Q, 2055, 1136, 2045, 1171, 2045, 1181, 2040, 1230, 2038, 1235, 2025, 1252, 2007, 1268, 2002, 1270, 1984, 1275, 1977, 1288, 1969, 1303, 1961, 1308, L, 1949, 1308, Q, 1936, 1242, 1938, 1219, L, 1783, 1219, Q, 1750, 1245, 1738, 1247, L, 1692, 1247, Q, 1654, 1270, 1636, 1275, L, 1575, 1296, Q, 1560, 1301, 1539, 1324, 1514, 1352, 1496, 1362, 1483, 1369, 1458, 1400, 1450, 1408, 1433, 1413, 1420, 1415, 1420, 1433, 1420, 1463, 1440, 1489, 1458, 1512, 1458, 1517, L, 1455, 1552, Q, 1455, 1563, 1473, 1586, 1494, 1608, 1496, 1621, 1496, 1641, 1506, 1702, L, 1506, 1700, 1567, 1705, Q, 1590, 1728, 1590, 1756, 1644, 1741, 1679, 1766, 1725, 1802, 1750, 1802, 1791, 1802, 1809, 1781, 1839, 1738, 1890, 1705, 1946, 1662, 1972, 1664, 1997, 1667, 2035, 1664, 2066, 1662, 2081, 1664, 2144, 1675, 2160, 1636, 2185, 1578, 2211, 1565, 2264, 1532, 2294, 1512, 2358, 1474, 2383, 1474, 2386, 1474, 2490, 1489, 2518, 1489, 2518, 1484, L, 2533, 1438, 2556, 1438, Q, 2574, 1474, 2592, 1608, L, 2528, 1608, 2528, 1659, Q, 2533, 1659, 2533, 1672, 2564, 1672, 2582, 1677, L, 2587, 1723, 2661, 1723, Q, 2661, 1751, 2752, 1842, 2798, 1888, 2793, 1964, 2780, 2069, 2854, 2069, 2927, 2066, 2927, 2168, 2927, 2239, 2917, 2254, 2905, 2277, 2841, 2277, 2793, 2277, 2767, 2221, 2739, 2163, 2724, 2160, L, 2610, 2160, 2610, 2245, Q, 2610, 2250, 2612, 2257, 2640, 2269, 2689, 2262, 2716, 2267, 2722, 2285, 2729, 2318, 2734, 2320, 2750, 2341, 2783, 2376, 2813, 2407, 2828, 2447, 2833, 2465, 2866, 2470, 2889, 2475, 2925, 2475, 2963, 2511, 3055, 2519, 3095, 2519, 3111, 2501, 3131, 2480, 3146, 2480, L, 3197, 2539, Q, 3248, 2597, 3294, 2597, 3306, 2597, 3337, 2582, 3365, 2567, 3431, 2567, 3451, 2567, 3472, 2526, 3477, 2516, 3482, 2511, L, 3477, 2480, Q, 3479, 2417, 3482, 2381, 3484, 2323, 3525, 2287, 3599, 2221, 3609, 2206, 3662, 2142, 3662, 2074, 3652, 1896, 3764, 1855, 3822, 1832, 3850, 1764, 3871, 1708, 3924, 1708, 3942, 1708, 3967, 1720, 3993, 1730, 4005, 1730, 4036, 1730, 4089, 1718, 4173, 1718, 4214, 1769, 4290, 1865, 4323, 1893, 4333, 1903, 4377, 1954, 4402, 1985, 4445, 1990, 4450, 1990, 4483, 1987, 4509, 1985, 4519, 1992, 4542, 2008, 4547, 2023, 4547, 2030, 4565, 2030, 4588, 2030, 4600, 2018, 4618, 1992, 4644, 1982, 4667, 1967, 4667, 1914, 4667, 1878, 4646, 1855, 4626, 1830, 4618, 1769, L, 4509, 1766, Q, 4473, 1766, 4456, 1730, 4435, 1687, 4422, 1682, 4397, 1669, 4377, 1641, 4356, 1608, 4346, 1596, 4339, 1588, 4290, 1560, 4250, 1537, 4250, 1517, L, 4244, 1316, Q, 4242, 1301, 4219, 1301, 4206, 1275, 4201, 1268, 4194, 1255, 4171, 1255, L, 3955, 1255, Q, 3942, 1255, 3932, 1235, 3919, 1214, 3899, 1214, 3871, 1214, 3863, 1194, 3858, 1166, 3855, 1158, L, 3828, 1158, 3828, 1189, 3794, 1189, Z]
      ],
      "label": "Kisumu",
      "shortLabel": "KU",
      "labelPosition": [321.5, 183.7],
      "labelAlignment": [CEN, MID],
      "nextId": "KE.NY.HB"
    },
    "KE.NY.HB": {
      "outlines": [
        [M, 1969, 2287, L, 1883, 2287, Q, 1880, 2287, 1877, 2287, L, 1875, 2287, Q, 1852, 2285, 1827, 2285, 1768, 2282, 1748, 2300, 1715, 2320, 1692, 2336, 1689, 2338, 1656, 2338, 1626, 2336, 1618, 2341, 1575, 2374, 1577, 2437, 1580, 2478, 1557, 2488, 1534, 2496, 1532, 2501, 1529, 2503, 1529, 2521, 1529, 2547, 1542, 2554, 1562, 2564, 1577, 2600, 1588, 2623, 1613, 2636, 1633, 2651, 1654, 2646, 1664, 2658, 1684, 2709, 1710, 2753, 1738, 2753, L, 1865, 2750, Q, 1870, 2773, 1834, 2775, 1788, 2775, 1771, 2778, L, 1753, 2826, Q, 1748, 2826, 1738, 2829, 1720, 2831, 1712, 2841, L, 1659, 2905, Q, 1636, 2915, 1613, 2938, 1588, 2964, 1567, 2974, L, 1443, 2974, 1445, 2910, Q, 1455, 2910, 1496, 2903, L, 1496, 2869, Q, 1466, 2882, 1453, 2864, 1430, 2839, 1427, 2839, 1402, 2831, 1397, 2808, 1397, 2783, 1397, 2773, 1394, 2732, 1344, 2742, 1316, 2747, 1310, 2725, 1303, 2694, 1293, 2686, L, 1265, 2686, 1265, 2742, 1270, 2770, Q, 1270, 2796, 1267, 2801, 1262, 2808, 1239, 2831, L, 1227, 2864, Q, 1219, 2890, 1199, 2890, 1178, 2890, 1173, 2869, 1166, 2831, 1163, 2831, 1148, 2811, 1145, 2788, 1148, 2765, 1148, 2753, 1122, 2755, 1120, 2730, 1115, 2691, 1107, 2679, L, 1092, 2679, 1092, 2732, Q, 1074, 2725, 1069, 2742, 1069, 2745, 1069, 2770, 1066, 2786, 1051, 2788, 1044, 2791, 1021, 2791, 998, 2791, 993, 2788, 983, 2780, 965, 2768, L, 944, 2735, Q, 937, 2727, 924, 2725, 916, 2725, 914, 2722, 866, 2691, 858, 2664, 855, 2651, 805, 2651, 759, 2651, 728, 2658, L, 716, 2656, Q, 708, 2658, 710, 2648, 716, 2633, 716, 2628, L, 716, 2600, 685, 2600, Q, 683, 2605, 680, 2661, 677, 2694, 655, 2722, 637, 2740, 568, 2811, 550, 2824, 550, 2841, 550, 2849, 550, 2872, L, 538, 2986, Q, 535, 2989, 515, 3007, 499, 3027, 494, 3063, L, 433, 3063, Q, 390, 3058, 398, 3007, L, 357, 3007, Q, 355, 3017, 355, 3063, 352, 3103, 327, 3103, L, 227, 3103, 227, 3159, Q, 230, 3164, 250, 3167, 266, 3172, 266, 3190, 266, 3208, 286, 3208, 296, 3208, 314, 3205, L, 314, 3258, Q, 271, 3274, 266, 3304, 260, 3322, 240, 3322, 217, 3325, 215, 3325, 182, 3330, 177, 3368, 177, 3380, 179, 3439, 179, 3500, 177, 3586, 179, 3635, 159, 3658, 146, 3670, 113, 3696, 126, 3698, 179, 3696, 227, 3701, 225, 3764, L, 225, 3808, Q, 227, 3810, 240, 3815, 255, 3823, 255, 3836, L, 255, 3912, 309, 3914, Q, 314, 3881, 352, 3879, 405, 3874, 416, 3866, 459, 3846, 471, 3838, 477, 3836, 497, 3820, 502, 3815, 522, 3815, L, 588, 3823, Q, 629, 3823, 647, 3803, 660, 3782, 683, 3782, 754, 3782, 797, 3871, 799, 3876, 805, 3899, 815, 3922, 835, 3930, 883, 3942, 896, 3955, 932, 3993, 1013, 4052, 1021, 4059, 1061, 4110, 1094, 4153, 1107, 4153, L, 1171, 4151, Q, 1188, 4108, 1204, 4095, 1211, 4090, 1262, 4090, 1288, 4090, 1318, 4090, 1336, 4031, 1338, 4006, L, 1387, 4006, Q, 1402, 4016, 1433, 4036, 1455, 4057, 1473, 4082, 1476, 4087, 1506, 4090, 1542, 4090, 1547, 4092, 1552, 4097, 1567, 4120, 1580, 4138, 1588, 4138, 1611, 4138, 1613, 4110, 1618, 4075, 1623, 4072, 1626, 4064, 1651, 4047, 1672, 4029, 1672, 4014, 1672, 3953, 1672, 3930, 1666, 3907, 1677, 3894, 1692, 3881, 1705, 3869, 1748, 3823, 1753, 3813, 1761, 3797, 1788, 3787, 1819, 3777, 1832, 3759, 1852, 3734, 1855, 3701, L, 1855, 3637, 1893, 3586, Q, 1895, 3543, 1900, 3536, 1908, 3508, 1936, 3495, 1946, 3487, 1966, 3462, 2005, 3442, 2007, 3436, 2012, 3424, 2025, 3424, 2030, 3424, 2050, 3424, L, 2172, 3424, Q, 2188, 3424, 2198, 3419, 2205, 3408, 2205, 3393, 2205, 3350, 2223, 3335, 2228, 3330, 2282, 3276, 2312, 3243, 2327, 3243, 2343, 3241, 2383, 3238, 2401, 3225, 2404, 3210, 2406, 3190, 2409, 3185, 2411, 3185, 2439, 3149, 2457, 3129, 2455, 3098, 2465, 3098, 2538, 3103, 2579, 3106, 2617, 3080, 2650, 3058, 2699, 3037, 2767, 3012, 2780, 3007, L, 2912, 2936, Q, 2945, 2930, 2961, 2913, 2968, 2905, 2978, 2895, 2996, 2880, 3032, 2864, 3065, 2849, 3100, 2826, 3131, 2806, 3174, 2808, 3202, 2808, 3233, 2783, 3273, 2753, 3299, 2732, 3375, 2676, 3421, 2646, 3492, 2595, 3525, 2580, 3522, 2567, 3522, 2547, 3528, 2511, 3528, 2488, L, 3515, 2486, Q, 3497, 2486, 3482, 2511, 3477, 2516, 3472, 2526, 3451, 2567, 3431, 2567, 3365, 2567, 3337, 2582, 3306, 2597, 3294, 2597, 3248, 2597, 3197, 2539, L, 3146, 2480, Q, 3131, 2480, 3111, 2501, 3095, 2519, 3055, 2519, 2963, 2511, 2925, 2475, 2889, 2475, 2866, 2470, 2833, 2465, 2828, 2447, 2813, 2407, 2783, 2376, 2750, 2341, 2734, 2320, 2729, 2318, 2722, 2285, 2716, 2267, 2689, 2262, 2640, 2269, 2612, 2257, 2615, 2264, 2620, 2272, 2633, 2285, 2633, 2295, L, 2627, 2328, Q, 2569, 2323, 2559, 2348, 2546, 2374, 2518, 2374, 2500, 2374, 2480, 2351, 2462, 2328, 2414, 2328, 2399, 2328, 2381, 2353, 2368, 2379, 2330, 2379, 2302, 2379, 2282, 2379, 2249, 2376, 2244, 2358, 2233, 2338, 2193, 2336, 2165, 2333, 2170, 2297, L, 2124, 2297, 2124, 2341, 2066, 2341, Q, 2055, 2338, 2012, 2338, Q, 2007, 2287, 1969, 2287, Z]
      ],
      "label": "Homa Bay",
      "shortLabel": "HB",
      "labelPosition": [106, 343.3],
      "labelAlignment": [CEN, MID],
      "nextId": "KE.NY.MG"
    },
    "KE.NY.MG": {
      "outlines": [
        [M, 2198, 3419, Q, 2188, 3424, 2172, 3424, L, 2050, 3424, Q, 2030, 3424, 2025, 3424, 2012, 3424, 2007, 3436, 2005, 3442, 1966, 3462, 1946, 3487, 1936, 3495, 1908, 3508, 1900, 3536, 1895, 3543, 1893, 3586, L, 1855, 3637, 1855, 3701, Q, 1852, 3734, 1832, 3759, 1819, 3777, 1788, 3787, 1761, 3797, 1753, 3813, 1748, 3823, 1705, 3869, 1692, 3881, 1677, 3894, 1666, 3907, 1672, 3930, 1672, 3953, 1672, 4014, 1672, 4029, 1651, 4047, 1626, 4064, 1623, 4072, 1618, 4075, 1613, 4110, 1611, 4138, 1588, 4138, 1580, 4138, 1567, 4120, 1552, 4097, 1547, 4092, 1542, 4090, 1506, 4090, 1476, 4087, 1473, 4082, 1455, 4057, 1433, 4036, 1402, 4016, 1387, 4006, L, 1338, 4006, Q, 1336, 4031, 1318, 4090, 1288, 4090, 1262, 4090, 1211, 4090, 1204, 4095, 1188, 4108, 1171, 4151, L, 1107, 4153, Q, 1094, 4153, 1061, 4110, 1021, 4059, 1013, 4052, 932, 3993, 896, 3955, 883, 3942, 835, 3930, 815, 3922, 805, 3899, 799, 3876, 797, 3871, 754, 3782, 683, 3782, 660, 3782, 647, 3803, 629, 3823, 588, 3823, L, 522, 3815, Q, 502, 3815, 497, 3820, 477, 3836, 471, 3838, 459, 3846, 416, 3866, 405, 3874, 352, 3879, 314, 3881, 309, 3914, L, 327, 3914, Q, 355, 3914, 365, 3925, 372, 3932, 375, 3945, 390, 3960, 416, 3998, 444, 4031, 477, 4047, 497, 4052, 548, 4064, 586, 4072, 611, 4090, 629, 4095, 629, 4118, 629, 4123, 629, 4164, 629, 4189, 655, 4189, 677, 4194, 677, 4204, 677, 4220, 629, 4232, 588, 4247, 560, 4247, 540, 4245, 533, 4288, 510, 4303, 507, 4306, 499, 4311, 494, 4324, 494, 4326, 492, 4331, 492, 4339, 482, 4347, 474, 4347, 461, 4354, 449, 4364, 451, 4385, 451, 4395, 451, 4415, L, 451, 4469, Q, 451, 4492, 423, 4504, L, 423, 4547, Q, 451, 4537, 451, 4593, L, 451, 4629, Q, 451, 4649, 431, 4649, 423, 4649, 405, 4634, 388, 4621, 375, 4619, 357, 4616, 344, 4601, 334, 4588, 314, 4593, 314, 4583, 296, 4525, L, 268, 4525, 268, 4573, Q, 238, 4573, 235, 4575, 222, 4581, 230, 4603, L, 210, 4603, Q, 199, 4598, 177, 4598, 156, 4598, 136, 4611, L, 136, 4639, 161, 4642, 161, 4687, 205, 4687, Q, 212, 4647, 212, 4636, L, 255, 4636, 255, 4603, 309, 4603, Q, 306, 4636, 327, 4636, 337, 4639, 360, 4631, L, 360, 4649, 355, 4692, Q, 355, 4741, 388, 4751, 451, 4779, 456, 4781, 477, 4799, 520, 4820, 563, 4842, 578, 4858, 627, 4893, 713, 4939, 822, 4995, 2338, 5852, 2358, 5864, 2538, 5964, 2526, 5908, 2485, 5816, 2442, 5717, 2432, 5669, 2404, 5539, 2386, 5475, 2355, 5371, 2305, 5315, 2294, 5305, 2264, 5252, 2238, 5209, 2211, 5191, 2190, 5178, 2180, 5170, 2162, 5155, 2160, 5132, L, 2144, 5038, Q, 2144, 5025, 2129, 5010, 2119, 4997, 2119, 4970, L, 2119, 4881, Q, 2109, 4825, 2068, 4784, 2030, 4748, 2030, 4718, 2030, 4675, 2045, 4664, 2071, 4652, 2088, 4611, 2106, 4568, 2185, 4525, 2193, 4520, 2200, 4517, 2200, 4507, 2162, 4377, 2124, 4247, 2124, 4220, 2124, 4138, 2144, 4115, 2167, 4092, 2167, 4036, L, 2165, 3919, Q, 2155, 3841, 2155, 3838, L, 2155, 3792, Q, 2155, 3698, 2188, 3675, 2223, 3653, 2223, 3599, 2223, 3579, 2211, 3500, Q, 2198, 3429, 2198, 3419, Z]
      ],
      "label": "Migori",
      "shortLabel": "MG",
      "labelPosition": [133.7, 466.7],
      "labelAlignment": [CEN, MID],
      "nextId": "KE.NY.KI"
    },
    "KE.NY.KI": {
      "outlines": [
        [M, 2961, 2913, Q, 2945, 2930, 2912, 2936, L, 2780, 3007, Q, 2767, 3012, 2699, 3037, 2650, 3058, 2617, 3080, 2579, 3106, 2538, 3103, 2465, 3098, 2455, 3098, 2457, 3129, 2439, 3149, 2411, 3185, 2409, 3185, 2406, 3190, 2404, 3210, 2401, 3225, 2383, 3238, 2343, 3241, 2327, 3243, 2312, 3243, 2282, 3276, 2228, 3330, 2223, 3335, 2205, 3350, 2205, 3393, 2205, 3408, 2198, 3419, 2198, 3429, 2211, 3500, 2223, 3579, 2223, 3599, 2223, 3653, 2188, 3675, 2155, 3698, 2155, 3792, L, 2155, 3838, Q, 2155, 3841, 2165, 3919, L, 2167, 4036, Q, 2167, 4092, 2144, 4115, 2124, 4138, 2124, 4220, 2124, 4247, 2162, 4377, 2200, 4507, 2200, 4517, 2256, 4484, 2320, 4486, 2361, 4486, 2450, 4489, L, 2518, 4489, Q, 2536, 4489, 2561, 4474, 2589, 4458, 2600, 4458, 2635, 4453, 2676, 4428, 2711, 4405, 2737, 4405, 2795, 4405, 2872, 4385, 2943, 4362, 3004, 4362, 3016, 4354, 3052, 4334, 3085, 4319, 3118, 4316, 3149, 4314, 3192, 4319, 3225, 4319, 3243, 4298, 3278, 4258, 3347, 4253, 3421, 4247, 3464, 4232, 3469, 4230, 3472, 4230, 3482, 4230, 3487, 4227, 3492, 4222, 3492, 4212, 3492, 4192, 3484, 4189, 3479, 4184, 3446, 4179, L, 3446, 4153, Q, 3347, 3986, 3332, 3935, 3327, 3899, 3319, 3876, 3306, 3836, 3283, 3823, 3268, 3815, 3220, 3803, 3182, 3790, 3156, 3775, 3118, 3747, 3037, 3714, 2955, 3678, 2912, 3645, 2907, 3640, 2864, 3589, 2826, 3543, 2816, 3541, 2803, 3536, 2780, 3536, 2757, 3533, 2750, 3530, 2716, 3500, 2716, 3480, 2716, 3462, 2739, 3449, 2765, 3442, 2767, 3419, 2775, 3403, 2821, 3337, L, 2912, 3187, 2945, 3187, 2945, 3238, Q, 3029, 3238, 3075, 3243, L, 3075, 3203, Q, 3057, 3157, 3034, 3162, 3019, 3164, 3019, 3119, 3019, 3088, 3027, 3040, 3032, 2989, 3032, 2969, 3032, 2928, 3029, 2920, 3022, 2905, 2978, 2895, Q, 2968, 2905, 2961, 2913, Z]
      ],
      "label": "Kisii",
      "shortLabel": "KI",
      "labelPosition": [262.3, 395.1],
      "labelAlignment": [CEN, MID],
      "nextId": "KE.NY.NM"
    },
    "KE.NY.NM": {
      "outlines": [
        [M, 3601, 2775, Q, 3606, 2702, 3604, 2671, 3604, 2653, 3571, 2633, 3538, 2610, 3530, 2595, 3528, 2587, 3525, 2580, 3492, 2595, 3421, 2646, 3375, 2676, 3299, 2732, 3273, 2753, 3233, 2783, 3202, 2808, 3174, 2808, 3131, 2806, 3100, 2826, 3065, 2849, 3032, 2864, 2996, 2880, 2978, 2895, 3022, 2905, 3029, 2920, 3032, 2928, 3032, 2969, 3032, 2989, 3027, 3040, 3019, 3088, 3019, 3119, 3019, 3164, 3034, 3162, 3057, 3157, 3075, 3203, L, 3075, 3243, Q, 3029, 3238, 2945, 3238, L, 2945, 3187, 2912, 3187, 2821, 3337, Q, 2775, 3403, 2767, 3419, 2765, 3442, 2739, 3449, 2716, 3462, 2716, 3480, 2716, 3500, 2750, 3530, 2757, 3533, 2780, 3536, 2803, 3536, 2816, 3541, 2826, 3543, 2864, 3589, 2907, 3640, 2912, 3645, 2955, 3678, 3037, 3714, 3118, 3747, 3156, 3775, 3182, 3790, 3220, 3803, 3268, 3815, 3283, 3823, 3306, 3836, 3319, 3876, 3327, 3899, 3332, 3935, 3347, 3986, 3446, 4153, L, 3446, 4151, Q, 3477, 4151, 3497, 4146, 3507, 4141, 3512, 4128, 3517, 4110, 3522, 4108, 3535, 4095, 3563, 4095, 3601, 4092, 3609, 4090, 3685, 4069, 3708, 4026, 3713, 4011, 3728, 3991, 3749, 3960, 3774, 3960, 3774, 3942, 3779, 3935, 3759, 3914, 3741, 3914, 3754, 3881, 3728, 3828, 3700, 3777, 3695, 3757, 3683, 3719, 3644, 3675, 3616, 3637, 3616, 3612, 3616, 3609, 3644, 3584, 3672, 3558, 3672, 3523, 3672, 3505, 3655, 3485, 3637, 3464, 3637, 3442, 3637, 3426, 3644, 3419, 3652, 3408, 3652, 3383, L, 3650, 3208, Q, 3647, 3157, 3627, 3142, 3601, 3124, 3601, 3106, 3601, 3017, 3627, 2994, 3629, 2992, 3650, 2981, 3665, 2971, 3665, 2956, L, 3662, 2895, 3616, 2895, Q, 3601, 2849, 3601, 2775, Z]
      ],
      "label": "Nyamira",
      "shortLabel": "NM",
      "labelPosition": [324.8, 344],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'nyanza',
  type: 'maps'
};