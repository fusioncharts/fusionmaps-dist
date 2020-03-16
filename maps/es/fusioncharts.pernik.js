/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Pernik.18.08-10-2012 03:40:11
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
  "name": "Pernik",
  "revision": 18,
  "standaloneInit": true,
  "baseWidth": 600,
  "baseHeight": 504,
  "baseScaleFactor": 10,
  "entities": {
    "05": {
      "outlines": [
        [M, 1987, 118, L, 1989, 139, 1927, 139, 1927, 163, 1861, 163, 1861, 190, 1845, 190, Q, 1840, 190, 1833, 191, 1825, 192, 1808, 192, 1791, 193, 1795, 214, L, 1744, 214, 1744, 270, Q, 1746, 295, 1724, 316, 1716, 356, 1720, 439, L, 1691, 439, Q, 1685, 440, 1683, 429, 1680, 416, 1673, 415, 1653, 410, 1645, 400, 1635, 385, 1612, 382, 1584, 381, 1578, 375, 1571, 369, 1542, 369, 1512, 342, 1506, 340, 1501, 337, 1426, 324, 1434, 308, 1422, 298, 1405, 284, 1402, 274, 1398, 258, 1381, 250, 1361, 244, 1351, 238, 1338, 229, 1314, 189, 1300, 164, 1246, 164, 1196, 164, 1193, 173, 1185, 188, 1156, 190, L, 1013, 190, 1013, 212, 991, 212, Q, 990, 300, 974, 377, L, 948, 379, 948, 414, 915, 414, Q, 917, 392, 898, 384, 875, 377, 865, 372, 845, 355, 835, 346, 817, 333, 792, 343, 787, 321, 787, 313, L, 740, 313, 739, 285, 706, 285, Q, 706, 274, 701, 256, L, 672, 256, 672, 285, 650, 285, Q, 653, 306, 635, 316, 614, 325, 605, 331, 578, 372, 552, 387, 524, 401, 524, 409, 524, 445, 522, 461, 522, 463, 498, 483, 498, 510, 498, 525, 497, 528, 497, 531, L, 497, 597, Q, 469, 608, 443, 608, L, 440, 638, 371, 638, Q, 367, 648, 367, 665, 344, 664, 334, 665, 317, 667, 324, 689, L, 288, 689, Q, 304, 725, 246, 719, L, 245, 740, 200, 740, 198, 755, 168, 755, 168, 865, Q, 168, 875, 167, 922, 163, 964, 139, 955, L, 138, 1058, 114, 1058, Q, 116, 1064, 117, 1170, 110, 1185, 132, 1202, L, 132, 1263, Q, 132, 1287, 162, 1311, 163, 1321, 163, 1337, 170, 1350, 185, 1354, 188, 1357, 188, 1374, 188, 1387, 198, 1395, 206, 1402, 215, 1436, 227, 1435, 233, 1455, 242, 1488, 243, 1490, 246, 1497, 261, 1512, 274, 1527, 269, 1543, 288, 1548, 294, 1557, 297, 1560, 297, 1564, L, 297, 1605, Q, 326, 1618, 327, 1620, 330, 1624, 330, 1655, 330, 1690, 320, 1693, 309, 1694, 306, 1751, 282, 1756, 271, 1756, L, 271, 1789, 248, 1789, 248, 1826, Q, 246, 1830, 235, 1837, 224, 1842, 224, 1855, 225, 1870, 206, 1886, 190, 1898, 199, 1921, 174, 1913, 175, 1932, 176, 1969, 177, 1971, 147, 1974, 143, 1974, L, 143, 2007, 122, 2007, 122, 2041, Q, 124, 2046, 143, 2052, L, 143, 2094, Q, 169, 2100, 172, 2103, 173, 2105, 173, 2125, L, 169, 2169, 200, 2169, 200, 2201, 185, 2204, 185, 2225, 162, 2228, 160, 2255, 143, 2255, 143, 2279, Q, 150, 2317, 112, 2311, 120, 2338, 93, 2356, L, 93, 2376, Q, 78, 2380, 78, 2387, 78, 2393, 72, 2408, L, 52, 2408, 52, 2453, Q, 85, 2452, 86, 2484, L, 124, 2484, 124, 2516, 285, 2516, Q, 310, 2513, 321, 2522, 345, 2537, 347, 2538, 357, 2542, 371, 2555, 380, 2560, 401, 2562, 428, 2570, 446, 2603, L, 489, 2635, Q, 530, 2666, 585, 2705, L, 726, 2705, 726, 2684, 1027, 2680, Q, 1042, 2680, 1039, 2704, 1063, 2696, 1065, 2734, 1065, 2750, 1095, 2766, 1098, 2771, 1145, 2838, L, 1145, 2881, Q, 1174, 2901, 1174, 2959, 1172, 2992, 1171, 3059, 1174, 3083, 1193, 3128, L, 1193, 3229, Q, 1193, 3261, 1223, 3295, 1225, 3316, 1294, 3333, 1299, 3335, 1321, 3363, 1343, 3367, 1353, 3382, 1361, 3393, 1383, 3397, 1397, 3417, 1417, 3414, L, 1417, 3429, 1461, 3429, Q, 1459, 3409, 1461, 3399, 1466, 3379, 1489, 3391, 1488, 3368, 1489, 3360, 1492, 3342, 1514, 3346, L, 1514, 3301, 1544, 3301, 1544, 3266, Q, 1552, 3265, 1567, 3265, L, 1567, 3211, Q, 1589, 3219, 1595, 3195, 1603, 3168, 1609, 3168, 1621, 3166, 1620, 3140, 1619, 3118, 1641, 3123, L, 1641, 3093, Q, 1624, 3093, 1618, 3090, 1617, 3068, 1616, 3042, 1614, 3017, 1615, 3013, 1615, 3009, 1597, 3004, L, 1597, 2934, 1570, 2934, 1570, 2841, 1544, 2837, 1544, 2751, Q, 1520, 2747, 1513, 2747, 1513, 2707, 1468, 2659, 1422, 2610, 1422, 2590, L, 1425, 2401, Q, 1449, 2404, 1446, 2360, 1477, 2368, 1477, 2340, 1477, 2310, 1502, 2315, L, 1498, 2282, 1513, 2282, 1514, 2228, Q, 1487, 2204, 1462, 2210, L, 1462, 2170, 1436, 2170, 1436, 2120, 1412, 2120, 1412, 2052, 1395, 2052, 1393, 2049, 1393, 1957, 1430, 1957, Q, 1426, 1948, 1426, 1931, 1441, 1931, 1447, 1928, 1444, 1913, 1444, 1890, L, 1472, 1890, 1472, 1797, Q, 1459, 1797, 1442, 1794, 1442, 1785, 1444, 1782, L, 1444, 1764, 1417, 1764, 1417, 1604, 1436, 1604, 1436, 1583, 1507, 1583, 1507, 1609, Q, 1517, 1605, 1531, 1633, L, 1569, 1633, Q, 1569, 1625, 1567, 1622, L, 1567, 1587, 1595, 1585, 1595, 1490, 1626, 1490, 1625, 1458, 1760, 1457, Q, 1781, 1406, 1842, 1365, 1877, 1340, 1913, 1274, 1931, 1260, 1963, 1238, 1988, 1218, 1997, 1193, L, 2068, 1188, Q, 2078, 1186, 2092, 1167, L, 2128, 1167, 2128, 1130, 2151, 1130, 2151, 1163, 2169, 1163, Q, 2171, 1201, 2171, 1288, L, 2293, 1288, 2292, 1254, Q, 2292, 1233, 2312, 1220, 2318, 1215, 2318, 1139, 2342, 1139, 2361, 1134, 2357, 1133, 2362, 1110, L, 2409, 1110, 2413, 1087, 2453, 1086, 2453, 1061, 2498, 1061, 2498, 1037, 2548, 1037, 2548, 1013, 2581, 1013, Q, 2574, 987, 2616, 987, L, 2616, 835, Q, 2599, 842, 2585, 829, 2569, 814, 2560, 815, 2543, 816, 2533, 803, 2524, 788, 2500, 790, 2484, 791, 2472, 769, L, 2457, 744, Q, 2432, 730, 2436, 684, 2413, 680, 2412, 658, 2415, 634, 2414, 631, 2397, 637, 2393, 608, 2394, 573, 2393, 566, L, 2367, 566, 2365, 553, 2365, 508, 2338, 508, 2338, 415, 2373, 415, Q, 2373, 384, 2371, 371, L, 2371, 283, 2343, 283, 2343, 219, Q, 2313, 214, 2312, 184, 2317, 153, 2315, 148, L, 2282, 148, Q, 2270, 126, 2266, 119, 2261, 112, 2240, 113, L, 2206, 116, Q, 2206, 98, 2204, 89, L, 2126, 77, 2126, 53, 2108, 53, 2108, 82, 2047, 92, 2047, 118, Z]
      ],
      "label": "Tran",
      "shortLabel": "TR",
      "labelPosition": [87.2, 115.3],
      "labelAlignment": [CEN, MID]
    },
    "01": {
      "outlines": [
        [M, 2891, 321, L, 2891, 291, 2869, 291, 2867, 265, 2843, 265, Q, 2843, 248, 2840, 238, L, 2786, 238, Q, 2786, 244, 2788, 247, L, 2788, 264, 2754, 264, 2756, 276, 2756, 291, 2729, 291, 2729, 315, 2699, 315, 2699, 339, Q, 2691, 340, 2675, 340, L, 2675, 366, 2646, 366, 2645, 386, 2548, 386, 2547, 364, 2413, 364, 2413, 339, Q, 2382, 336, 2371, 333, L, 2371, 371, Q, 2373, 384, 2373, 415, L, 2338, 415, 2338, 508, 2365, 508, 2365, 553, 2367, 566, 2393, 566, Q, 2394, 573, 2393, 608, 2397, 637, 2414, 631, 2415, 634, 2412, 658, 2413, 680, 2436, 684, 2432, 730, 2457, 744, L, 2472, 769, Q, 2484, 791, 2500, 790, 2524, 788, 2533, 803, 2543, 816, 2560, 815, 2569, 814, 2585, 829, 2599, 842, 2616, 835, L, 2616, 987, Q, 2574, 987, 2581, 1013, L, 2548, 1013, 2548, 1037, 2498, 1037, 2498, 1061, 2453, 1061, 2453, 1086, 2413, 1087, 2409, 1110, 2362, 1110, Q, 2357, 1133, 2361, 1134, 2342, 1139, 2318, 1139, 2318, 1215, 2312, 1220, 2292, 1233, 2292, 1254, L, 2293, 1288, 2171, 1288, Q, 2171, 1201, 2169, 1163, L, 2151, 1163, 2151, 1130, 2128, 1130, 2128, 1167, 2092, 1167, Q, 2078, 1186, 2068, 1188, L, 1997, 1193, Q, 1988, 1218, 1963, 1238, 1931, 1260, 1913, 1274, 1877, 1340, 1842, 1365, 1781, 1406, 1760, 1457, L, 1625, 1458, 1626, 1490, 1595, 1490, 1595, 1585, 1567, 1587, 1567, 1622, Q, 1569, 1625, 1569, 1633, L, 1531, 1633, Q, 1517, 1605, 1507, 1609, L, 1507, 1583, 1436, 1583, 1436, 1604, 1417, 1604, 1417, 1764, 1444, 1764, 1444, 1782, Q, 1442, 1785, 1442, 1794, 1459, 1797, 1472, 1797, L, 1472, 1890, 1444, 1890, Q, 1444, 1913, 1447, 1928, 1441, 1931, 1426, 1931, 1426, 1948, 1430, 1957, L, 1393, 1957, 1393, 2049, 1395, 2052, 1412, 2052, 1412, 2120, 1436, 2120, 1436, 2170, 1462, 2170, 1462, 2210, Q, 1487, 2204, 1514, 2228, L, 1573, 2228, Q, 1567, 2262, 1602, 2261, 1648, 2261, 1659, 2279, 1670, 2297, 1722, 2291, 1729, 2294, 1739, 2311, L, 1777, 2311, Q, 1775, 2321, 1787, 2332, L, 1835, 2332, Q, 1827, 2306, 1866, 2307, 1887, 2307, 1927, 2309, L, 1929, 2282, 2015, 2282, 2015, 2257, 2103, 2257, 2103, 2229, 2180, 2229, 2180, 2205, 2179, 2201, 2204, 2201, Q, 2206, 2206, 2202, 2229, 2201, 2246, 2221, 2240, L, 2221, 2276, Q, 2238, 2281, 2247, 2281, L, 2247, 2315, Q, 2245, 2321, 2245, 2329, L, 2260, 2330, 2262, 2388, 2290, 2388, 2290, 2438, 2313, 2438, 2313, 2458, 2385, 2458, 2385, 2486, 2489, 2486, 2489, 2458, 2548, 2458, Q, 2529, 2422, 2562, 2421, 2579, 2421, 2611, 2427, 2608, 2408, 2608, 2400, L, 2625, 2400, Q, 2623, 2424, 2645, 2442, 2682, 2473, 2687, 2479, L, 2687, 2646, 2668, 2646, 2668, 2675, 2665, 2675, 2665, 2736, 2685, 2736, Q, 2682, 2777, 2694, 2801, 2695, 2805, 2706, 2806, 2716, 2809, 2717, 2819, L, 2717, 2851, Q, 2720, 2852, 2734, 2850, 2745, 2851, 2741, 2863, L, 2805, 2863, 2805, 2837, 2843, 2837, Q, 2834, 2806, 2866, 2816, L, 2866, 2780, 2896, 2780, 2896, 2759, 2912, 2759, Q, 2906, 2746, 2917, 2740, 2926, 2735, 2936, 2739, L, 2936, 2703, 2989, 2703, 2989, 2685, 3048, 2685, 3048, 2661, 3066, 2661, 3066, 2631, 3079, 2631, 3079, 2618, Q, 3104, 2614, 3105, 2588, L, 3141, 2557, Q, 3152, 2547, 3174, 2532, 3190, 2518, 3189, 2491, 3217, 2498, 3217, 2471, L, 3217, 2457, 3328, 2457, Q, 3343, 2459, 3369, 2459, 3377, 2467, 3388, 2483, L, 3468, 2483, Q, 3534, 2483, 3546, 2481, 3580, 2472, 3563, 2438, L, 3590, 2438, 3590, 2385, 3614, 2385, 3614, 2332, 3640, 2332, 3640, 2279, Q, 3665, 2271, 3665, 2251, L, 3665, 2120, Q, 3665, 2094, 3677, 2075, 3688, 2058, 3689, 2034, L, 3689, 1942, Q, 3688, 1939, 3687, 1936, 3681, 1900, 3692, 1876, 3711, 1837, 3715, 1791, 3733, 1735, 3733, 1625, L, 3732, 1561, 3685, 1561, Q, 3680, 1543, 3679, 1537, L, 3610, 1537, 3610, 1451, 3635, 1451, 3635, 1431, 3665, 1431, 3665, 1407, 3781, 1407, Q, 3802, 1405, 3843, 1410, 3869, 1408, 3866, 1382, 3885, 1338, 3886, 1300, 3900, 1265, 3901, 1220, 3892, 1213, 3884, 1211, 3878, 1195, 3810, 1137, 3776, 1108, 3750, 1066, 3562, 1065, 3491, 1068, 3419, 1071, 3395, 1045, 3370, 1019, 3338, 965, 3327, 945, 3283, 899, 3269, 879, 3253, 861, 3247, 827, 3236, 819, 3197, 766, 3176, 748, 3144, 703, 3126, 691, L, 3056, 692, Q, 3054, 697, 3054, 714, L, 2919, 714, 2921, 703, 2921, 660, Q, 2887, 648, 2889, 643, 2857, 558, 2848, 530, 2839, 502, 2842, 500, 2864, 493, 2867, 488, 2866, 468, 2867, 460, 2868, 443, 2891, 446, 2889, 418, 2891, 406, 2892, 385, 2917, 392, L, 2917, 321, Z]
      ],
      "label": "Breznik",
      "shortLabel": "BR",
      "labelPosition": [277.3, 171.8],
      "labelAlignment": [CEN, MID]
    },
    "03": {
      "outlines": [
        [M, 5089, 2137, L, 5089, 2156, 4912, 2156, Q, 4915, 2136, 4899, 2110, 4883, 2084, 4885, 2065, 4868, 2055, 4862, 2056, 4862, 2037, 4852, 2017, 4841, 1998, 4841, 1978, 4814, 1942, 4793, 1922, 4789, 1900, 4776, 1890, 4748, 1873, 4742, 1869, 4718, 1862, 4712, 1854, 4703, 1842, 4682, 1832, 4612, 1777, 4566, 1760, 4524, 1744, 4462, 1689, L, 4308, 1689, Q, 4310, 1656, 4296, 1644, 4293, 1620, 4275, 1602, 4265, 1564, 4257, 1556, 4252, 1550, 4236, 1513, 4210, 1509, 4210, 1481, 4190, 1456, 4185, 1441, 4186, 1420, 4185, 1412, 4167, 1401, 4162, 1397, 4146, 1381, 4147, 1361, L, 3992, 1361, Q, 3998, 1346, 3985, 1336, L, 3968, 1320, Q, 3961, 1287, 3948, 1274, 3928, 1250, 3918, 1238, 3909, 1226, 3901, 1220, 3900, 1265, 3886, 1300, 3885, 1338, 3866, 1382, 3869, 1408, 3843, 1410, 3802, 1405, 3781, 1407, L, 3665, 1407, 3665, 1431, 3635, 1431, 3635, 1451, 3610, 1451, 3610, 1537, 3679, 1537, Q, 3680, 1543, 3685, 1561, L, 3732, 1561, 3733, 1625, Q, 3733, 1735, 3715, 1791, 3711, 1837, 3692, 1876, 3681, 1900, 3687, 1936, 3688, 1939, 3689, 1942, L, 3689, 2034, Q, 3688, 2058, 3677, 2075, 3665, 2094, 3665, 2120, L, 3665, 2251, Q, 3665, 2271, 3640, 2279, L, 3640, 2332, 3614, 2332, 3614, 2385, 3590, 2385, 3590, 2438, 3563, 2438, Q, 3580, 2472, 3546, 2481, 3534, 2483, 3468, 2483, L, 3388, 2483, Q, 3377, 2467, 3369, 2459, 3343, 2459, 3328, 2457, L, 3217, 2457, 3217, 2471, Q, 3217, 2498, 3189, 2491, 3190, 2518, 3174, 2532, 3152, 2547, 3141, 2557, L, 3105, 2588, Q, 3104, 2614, 3079, 2618, L, 3079, 2648, Q, 3097, 2664, 3096, 2691, 3095, 2717, 3106, 2723, 3116, 2729, 3115, 2766, 3114, 2798, 3135, 2800, L, 3135, 2827, Q, 3124, 2833, 3110, 2833, L, 3110, 2862, 3084, 2862, Q, 3084, 2873, 3093, 2907, L, 3066, 2907, 3066, 2973, 3081, 2976, 3081, 2994, 3140, 2994, 3140, 2979, 3159, 2979, Q, 3188, 2982, 3257, 2982, 3257, 3014, 3292, 3006, L, 3292, 3027, 3477, 3027, 3477, 3008, 3665, 3012, Q, 3670, 3045, 3680, 3055, 3693, 3069, 3696, 3097, 3712, 3108, 3716, 3143, 3716, 3153, 3737, 3181, L, 3752, 3181, 3752, 3204, 3879, 3204, Q, 3889, 3204, 3902, 3217, 3915, 3232, 3928, 3234, 3970, 3238, 3995, 3235, 4045, 3227, 4083, 3272, 4126, 3327, 4157, 3335, 4152, 3357, 4184, 3365, 4200, 3368, 4225, 3396, L, 4287, 3457, Q, 4315, 3484, 4419, 3553, 4439, 3566, 4494, 3588, 4528, 3616, 4568, 3630, 4637, 3655, 4645, 3660, 4706, 3699, 4711, 3707, L, 4711, 3729, Q, 4737, 3731, 4737, 3773, 4761, 3783, 4758, 3807, L, 4784, 3842, Q, 4791, 3852, 4806, 3887, 4816, 3899, 4827, 3928, 4840, 3945, 4880, 4000, 4937, 4061, 4952, 4067, 4967, 4073, 5023, 4120, 5054, 4145, 5091, 4179, 5108, 4191, 5168, 4236, 5186, 4250, 5194, 4260, 5202, 4271, 5220, 4275, 5237, 4279, 5243, 4297, L, 5282, 4297, 5282, 4280, 5343, 4280, 5343, 4251, 5412, 4251, 5412, 4224, 5636, 4224, 5636, 4172, 5656, 4172, 5656, 4027, Q, 5664, 4027, 5671, 4029, L, 5690, 4029, 5690, 4007, 5724, 4007, 5726, 3982, 5758, 3982, 5758, 3958, 5788, 3958, 5788, 3929, 5835, 3929, 5835, 3907, 5857, 3907, 5857, 3896, 5859, 3872, Q, 5888, 3858, 5885, 3826, 5883, 3804, 5883, 3762, L, 5883, 3737, Q, 5904, 3721, 5907, 3707, 5910, 3693, 5910, 3690, L, 5910, 3646, Q, 5910, 3633, 5919, 3625, 5929, 3617, 5928, 3606, 5930, 3593, 5929, 3544, 5929, 3515, 5936, 3512, L, 5936, 3467, Q, 5931, 3467, 5906, 3434, 5888, 3433, 5857, 3409, 5822, 3384, 5809, 3381, 5784, 3351, 5764, 3342, 5736, 3327, 5724, 3315, 5719, 3291, 5716, 3282, 5701, 3277, 5695, 3267, 5691, 3214, 5680, 3204, 5666, 3161, 5656, 3154, 5632, 3136, 5636, 3098, 5610, 3085, 5611, 3059, 5585, 3045, 5585, 3014, 5566, 3020, 5559, 3002, 5551, 2985, 5544, 2983, L, 5326, 2984, Q, 5301, 2983, 5277, 2956, 5244, 2917, 5239, 2915, L, 5239, 2877, 5257, 2877, 5261, 2852, Q, 5279, 2838, 5279, 2837, 5315, 2832, 5311, 2805, 5308, 2786, 5321, 2785, 5332, 2782, 5332, 2769, 5368, 2760, 5359, 2736, 5383, 2735, 5383, 2706, 5383, 2685, 5377, 2680, 5357, 2669, 5357, 2665, 5356, 2633, 5355, 2623, 5354, 2609, 5340, 2602, 5333, 2596, 5334, 2577, 5336, 2557, 5332, 2552, 5305, 2529, 5306, 2499, 5306, 2473, 5308, 2471, 5310, 2467, 5335, 2468, L, 5335, 2376, 5355, 2376, 5356, 2347, Q, 5350, 2318, 5322, 2294, 5269, 2246, 5267, 2244, 5197, 2176, 5157, 2137, Z]
      ],
      "label": "Pernik",
      "shortLabel": "PE",
      "labelPosition": [450.1, 267.4],
      "labelAlignment": [CEN, MID]
    },
    "04": {
      "outlines": [
        [M, 3995, 3235, Q, 3970, 3238, 3928, 3234, 3915, 3232, 3902, 3217, 3889, 3204, 3879, 3204, L, 3752, 3204, 3752, 3181, 3737, 3181, Q, 3716, 3153, 3716, 3143, 3712, 3108, 3696, 3097, 3693, 3069, 3680, 3055, 3670, 3045, 3665, 3012, L, 3477, 3008, 3477, 3027, 3292, 3027, Q, 3290, 3161, 3293, 3201, L, 3256, 3240, Q, 3262, 3265, 3224, 3279, L, 3220, 3305, Q, 3196, 3321, 3199, 3325, 3198, 3348, 3176, 3382, 3170, 3404, 3172, 3458, 3172, 3515, 3192, 3530, 3257, 3576, 3267, 3588, 3268, 3589, 3327, 3638, 3362, 3666, 3368, 3696, L, 3368, 3826, 3310, 3827, 3310, 3845, 3241, 3845, 3241, 3871, 3224, 3871, 3222, 3873, 3222, 3896, 3241, 3896, Q, 3243, 3906, 3241, 3932, 3242, 3952, 3267, 3952, 3263, 3992, 3288, 3995, 3286, 4041, 3297, 4049, 3308, 4058, 3308, 4078, 3308, 4104, 3293, 4103, 3312, 4165, 3270, 4160, 3277, 4185, 3255, 4197, 3233, 4210, 3240, 4236, 3216, 4235, 3206, 4235, 3190, 4236, 3192, 4255, L, 3095, 4255, Q, 3074, 4276, 3068, 4276, L, 3015, 4276, Q, 2945, 4276, 2913, 4246, L, 2797, 4247, 2797, 4426, 2759, 4426, 2759, 4452, Q, 2709, 4445, 2705, 4479, L, 2659, 4479, Q, 2646, 4467, 2646, 4454, L, 2570, 4454, Q, 2571, 4474, 2572, 4499, L, 2539, 4502, 2539, 4558, Q, 2553, 4571, 2564, 4570, L, 2564, 4661, 2593, 4661, 2593, 4680, Q, 2731, 4680, 2793, 4682, L, 2793, 4733, Q, 2766, 4732, 2766, 4772, 2767, 4792, 2768, 4829, L, 2796, 4829, Q, 2796, 4845, 2798, 4851, L, 2866, 4851, 2868, 4878, 2946, 4878, 2948, 4899, 2959, 4902, 3010, 4902, 3010, 4876, 3045, 4876, 3045, 4846, 3066, 4846, 3066, 4827, 3190, 4827, 3190, 4851, 3307, 4851, Q, 3311, 4875, 3343, 4876, 3357, 4875, 3356, 4869, 3354, 4851, 3356, 4846, 3356, 4843, 3391, 4832, 3397, 4829, 3396, 4798, 3396, 4775, 3419, 4785, L, 3419, 4752, Q, 3435, 4756, 3438, 4737, 3437, 4712, 3438, 4701, L, 3457, 4701, 3457, 4669, 3492, 4669, 3492, 4704, 3513, 4704, 3513, 4726, Q, 3554, 4713, 3543, 4755, 3570, 4743, 3594, 4795, 3659, 4787, 3645, 4829, L, 3709, 4829, 3709, 4806, 3720, 4806, 3733, 4811, 3746, 4811, 3748, 4776, 3778, 4776, 3778, 4747, 3802, 4747, Q, 3808, 4726, 3808, 4704, L, 3824, 4704, 3824, 4728, 3839, 4728, 3839, 4757, 3862, 4757, 3862, 4801, Q, 3878, 4801, 3888, 4803, L, 3888, 4841, 3918, 4841, 3920, 4873, Q, 3934, 4877, 3937, 4894, 3937, 4903, 3937, 4924, 3938, 4924, 3960, 4928, L, 3960, 4957, Q, 3996, 4957, 3994, 4975, L, 4121, 4975, Q, 4130, 4975, 4177, 4972, 4222, 4973, 4221, 4993, L, 4262, 4993, 4262, 4969, Q, 4274, 4969, 4281, 4967, L, 4281, 4897, 4304, 4894, 4304, 4819, Q, 4322, 4819, 4328, 4817, L, 4328, 4730, 4349, 4730, 4349, 4699, 4480, 4699, Q, 4480, 4758, 4494, 4763, 4501, 4766, 4508, 4795, 4514, 4818, 4533, 4813, L, 4534, 4859, Q, 4538, 4864, 4563, 4877, 4566, 4909, 4577, 4919, 4587, 4928, 4587, 4954, L, 4601, 4954, Q, 4607, 4954, 4614, 4954, 4723, 4957, 4928, 4958, 4934, 4958, 4940, 4959, 5006, 4965, 5038, 4952, 5056, 4943, 5087, 4907, 5106, 4883, 5147, 4851, 5190, 4804, 5205, 4794, 5219, 4784, 5261, 4745, 5279, 4730, 5321, 4689, 5335, 4674, 5365, 4658, 5394, 4642, 5408, 4624, 5422, 4607, 5433, 4605, L, 5433, 4545, Q, 5405, 4541, 5402, 4514, 5396, 4483, 5388, 4478, 5382, 4474, 5382, 4442, 5365, 4430, 5362, 4417, 5360, 4413, 5360, 4409, 5358, 4392, 5358, 4384, 5347, 4378, 5338, 4367, 5339, 4324, 5317, 4318, L, 5317, 4280, 5282, 4280, 5282, 4297, 5243, 4297, Q, 5237, 4279, 5220, 4275, 5202, 4271, 5194, 4260, 5186, 4250, 5168, 4236, 5108, 4191, 5091, 4179, 5054, 4145, 5023, 4120, 4967, 4073, 4952, 4067, 4937, 4061, 4880, 4000, 4840, 3945, 4827, 3928, 4816, 3899, 4806, 3887, 4791, 3852, 4784, 3842, L, 4758, 3807, Q, 4761, 3783, 4737, 3773, 4737, 3731, 4711, 3729, L, 4711, 3707, Q, 4706, 3699, 4645, 3660, 4637, 3655, 4568, 3630, 4528, 3616, 4494, 3588, 4439, 3566, 4419, 3553, 4315, 3484, 4287, 3457, L, 4225, 3396, Q, 4200, 3368, 4184, 3365, 4152, 3357, 4157, 3335, 4126, 3327, 4083, 3272, Q, 4045, 3227, 3995, 3235, Z]
      ],
      "label": "Radomir",
      "shortLabel": "RA",
      "labelPosition": [398.6, 400],
      "labelAlignment": [CEN, MID]
    },
    "02": {
      "outlines": [
        [M, 3066, 2631, L, 3066, 2661, 3048, 2661, 3048, 2685, 2989, 2685, 2989, 2703, 2936, 2703, 2936, 2739, Q, 2926, 2735, 2917, 2740, 2906, 2746, 2912, 2759, L, 2896, 2759, 2896, 2780, 2866, 2780, 2866, 2816, Q, 2834, 2806, 2843, 2837, L, 2805, 2837, 2805, 2863, 2741, 2863, Q, 2745, 2851, 2734, 2850, 2720, 2852, 2717, 2851, L, 2717, 2819, Q, 2716, 2809, 2706, 2806, 2695, 2805, 2694, 2801, 2682, 2777, 2685, 2736, L, 2665, 2736, 2665, 2675, 2581, 2675, Q, 2571, 2656, 2572, 2653, L, 2466, 2653, 2464, 2683, 2399, 2683, 2399, 2705, Q, 2379, 2705, 2373, 2706, L, 2373, 2729, 2340, 2729, 2340, 2817, Q, 2364, 2830, 2366, 2836, 2370, 2868, 2376, 2872, 2383, 2876, 2382, 2908, 2382, 2933, 2406, 2927, L, 2406, 2976, Q, 2387, 2977, 2387, 3004, 2368, 3005, 2365, 3022, 2363, 3040, 2360, 3043, 2337, 3059, 2337, 3088, L, 2313, 3088, Q, 2313, 3089, 2318, 3106, L, 2318, 3126, 2289, 3128, 2289, 3150, Q, 2292, 3151, 2306, 3156, 2298, 3176, 2333, 3204, 2336, 3206, 2340, 3235, 2343, 3256, 2367, 3249, L, 2370, 3375, Q, 2369, 3393, 2355, 3398, 2341, 3403, 2340, 3419, 2340, 3426, 2340, 3453, 2334, 3475, 2310, 3471, L, 2310, 3544, Q, 2312, 3581, 2316, 3591, 2321, 3604, 2337, 3633, 2333, 3652, 2370, 3666, 2376, 3694, 2382, 3707, 2381, 3725, 2408, 3744, 2414, 3749, 2414, 3766, 2414, 3782, 2429, 3785, 2445, 3787, 2444, 3823, 2477, 3843, 2477, 3865, L, 2545, 3865, 2545, 3838, 2588, 3838, Q, 2590, 3857, 2591, 3882, 2596, 3895, 2619, 3892, L, 2619, 3934, Q, 2611, 3960, 2635, 3958, 2635, 4013, 2659, 3999, L, 2659, 4018, 2646, 4018, 2646, 4029, 2616, 4029, 2616, 4055, 2584, 4055, Q, 2584, 4059, 2585, 4062, 2585, 4064, 2585, 4066, 2587, 4080, 2588, 4109, 2590, 4141, 2564, 4134, L, 2564, 4186, Q, 2610, 4223, 2614, 4226, L, 2614, 4300, Q, 2588, 4290, 2589, 4316, 2589, 4331, 2590, 4364, 2569, 4367, 2570, 4421, 2570, 4435, 2570, 4454, L, 2646, 4454, Q, 2646, 4467, 2659, 4479, L, 2705, 4479, Q, 2709, 4445, 2759, 4452, L, 2759, 4426, 2797, 4426, 2797, 4247, 2913, 4246, Q, 2945, 4276, 3015, 4276, L, 3068, 4276, Q, 3074, 4276, 3095, 4255, L, 3192, 4255, Q, 3190, 4236, 3206, 4235, 3216, 4235, 3240, 4236, 3233, 4210, 3255, 4197, 3277, 4185, 3270, 4160, 3312, 4165, 3293, 4103, 3308, 4104, 3308, 4078, 3308, 4058, 3297, 4049, 3286, 4041, 3288, 3995, 3263, 3992, 3267, 3952, 3242, 3952, 3241, 3932, 3243, 3906, 3241, 3896, L, 3222, 3896, 3222, 3873, 3224, 3871, 3241, 3871, 3241, 3845, 3310, 3845, 3310, 3827, 3368, 3826, 3368, 3696, Q, 3362, 3666, 3327, 3638, 3268, 3589, 3267, 3588, 3257, 3576, 3192, 3530, 3172, 3515, 3172, 3458, 3170, 3404, 3176, 3382, 3198, 3348, 3199, 3325, 3196, 3321, 3220, 3305, L, 3224, 3279, Q, 3262, 3265, 3256, 3240, L, 3293, 3201, Q, 3290, 3161, 3292, 3027, L, 3292, 3006, Q, 3257, 3014, 3257, 2982, 3188, 2982, 3159, 2979, L, 3140, 2979, 3140, 2994, 3081, 2994, 3081, 2976, 3066, 2973, 3066, 2907, 3093, 2907, Q, 3084, 2873, 3084, 2862, L, 3110, 2862, 3110, 2833, Q, 3124, 2833, 3135, 2827, L, 3135, 2800, Q, 3114, 2798, 3115, 2766, 3116, 2729, 3106, 2723, 3095, 2717, 3096, 2691, 3097, 2664, 3079, 2648, L, 3079, 2631, Z]
      ],
      "label": "Kovachevtsi",
      "shortLabel": "KO",
      "labelPosition": [282.8, 338.7],
      "labelAlignment": [CEN, MID]
    },
    "06": {
      "outlines": [
        [M, 1929, 2282, L, 1927, 2309, Q, 1887, 2307, 1866, 2307, 1827, 2306, 1835, 2332, L, 1787, 2332, Q, 1775, 2321, 1777, 2311, L, 1739, 2311, Q, 1729, 2294, 1722, 2291, 1670, 2297, 1659, 2279, 1648, 2261, 1602, 2261, 1567, 2262, 1573, 2228, L, 1514, 2228, 1513, 2282, 1498, 2282, 1502, 2315, Q, 1477, 2310, 1477, 2340, 1477, 2368, 1446, 2360, 1449, 2404, 1425, 2401, L, 1422, 2590, Q, 1422, 2610, 1468, 2659, 1513, 2707, 1513, 2747, 1520, 2747, 1544, 2751, L, 1544, 2837, 1570, 2841, 1570, 2934, 1597, 2934, 1597, 3004, Q, 1615, 3009, 1615, 3013, 1614, 3017, 1616, 3042, 1617, 3068, 1618, 3090, 1624, 3093, 1641, 3093, L, 1641, 3123, Q, 1619, 3118, 1620, 3140, 1621, 3166, 1609, 3168, 1603, 3168, 1595, 3195, 1589, 3219, 1567, 3211, L, 1567, 3265, Q, 1552, 3265, 1544, 3266, L, 1544, 3301, 1514, 3301, 1514, 3346, Q, 1492, 3342, 1489, 3360, 1488, 3368, 1489, 3391, 1466, 3379, 1461, 3399, 1459, 3409, 1461, 3429, L, 1417, 3429, 1417, 3671, Q, 1427, 3681, 1466, 3681, L, 1468, 3700, Q, 1484, 3694, 1494, 3707, 1501, 3715, 1513, 3732, 1563, 3732, 1567, 3756, 1603, 3743, 1620, 3783, 1635, 3788, 1660, 3788, 1679, 3788, 1685, 3796, 1695, 3808, 1721, 3814, 1746, 3819, 1759, 3821, 1771, 3823, 1797, 3850, 1802, 3853, 1827, 3853, 1848, 3853, 1853, 3866, 1861, 3884, 1882, 3886, 1893, 3887, 1914, 3899, L, 1914, 4008, Q, 1923, 4010, 1942, 4010, L, 1942, 4377, Q, 1994, 4384, 1996, 4386, 2007, 4400, 2043, 4399, 2047, 4402, 2054, 4421, 2064, 4437, 2080, 4428, 2085, 4435, 2089, 4455, 2094, 4470, 2119, 4463, L, 2119, 4505, 2140, 4505, Q, 2143, 4550, 2156, 4559, 2166, 4565, 2170, 4584, 2174, 4600, 2185, 4608, 2191, 4611, 2201, 4626, 2207, 4636, 2222, 4637, 2268, 4637, 2282, 4654, 2296, 4670, 2340, 4667, 2367, 4666, 2446, 4661, L, 2564, 4661, 2564, 4570, Q, 2553, 4571, 2539, 4558, L, 2539, 4502, 2572, 4499, Q, 2571, 4474, 2570, 4454, 2570, 4435, 2570, 4421, 2569, 4367, 2590, 4364, 2589, 4331, 2589, 4316, 2588, 4290, 2614, 4300, L, 2614, 4226, Q, 2610, 4223, 2564, 4186, L, 2564, 4134, Q, 2590, 4141, 2588, 4109, 2587, 4080, 2585, 4066, 2585, 4064, 2585, 4062, 2584, 4059, 2584, 4055, L, 2616, 4055, 2616, 4029, 2646, 4029, 2646, 4018, 2659, 4018, 2659, 3999, Q, 2635, 4013, 2635, 3958, 2611, 3960, 2619, 3934, L, 2619, 3892, Q, 2596, 3895, 2591, 3882, 2590, 3857, 2588, 3838, L, 2545, 3838, 2545, 3865, 2477, 3865, Q, 2477, 3843, 2444, 3823, 2445, 3787, 2429, 3785, 2414, 3782, 2414, 3766, 2414, 3749, 2408, 3744, 2381, 3725, 2382, 3707, 2376, 3694, 2370, 3666, 2333, 3652, 2337, 3633, 2321, 3604, 2316, 3591, 2312, 3581, 2310, 3544, L, 2310, 3471, Q, 2334, 3475, 2340, 3453, 2340, 3426, 2340, 3419, 2341, 3403, 2355, 3398, 2369, 3393, 2370, 3375, L, 2367, 3249, Q, 2343, 3256, 2340, 3235, 2336, 3206, 2333, 3204, 2298, 3176, 2306, 3156, 2292, 3151, 2289, 3150, L, 2289, 3128, 2318, 3126, 2318, 3106, Q, 2313, 3089, 2313, 3088, L, 2337, 3088, Q, 2337, 3059, 2360, 3043, 2363, 3040, 2365, 3022, 2368, 3005, 2387, 3004, 2387, 2977, 2406, 2976, L, 2406, 2927, Q, 2382, 2933, 2382, 2908, 2383, 2876, 2376, 2872, 2370, 2868, 2366, 2836, 2364, 2830, 2340, 2817, L, 2340, 2729, 2373, 2729, 2373, 2706, Q, 2379, 2705, 2399, 2705, L, 2399, 2683, 2464, 2683, 2466, 2653, 2572, 2653, Q, 2571, 2656, 2581, 2675, L, 2668, 2675, 2668, 2646, 2687, 2646, 2687, 2479, Q, 2682, 2473, 2645, 2442, 2623, 2424, 2625, 2400, L, 2608, 2400, Q, 2608, 2408, 2611, 2427, 2579, 2421, 2562, 2421, 2529, 2422, 2548, 2458, L, 2489, 2458, 2489, 2486, 2385, 2486, 2385, 2458, 2313, 2458, 2313, 2438, 2290, 2438, 2290, 2388, 2262, 2388, 2260, 2330, 2245, 2329, Q, 2245, 2321, 2247, 2315, L, 2247, 2281, Q, 2238, 2281, 2221, 2276, L, 2221, 2240, Q, 2201, 2246, 2202, 2229, 2206, 2206, 2204, 2201, L, 2179, 2201, 2180, 2205, 2180, 2229, 2103, 2229, 2103, 2257, 2015, 2257, 2015, 2282, Z]
      ],
      "label": "Zemen",
      "shortLabel": "ZE",
      "labelPosition": [188.4, 343.4],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'pernik',
  type: 'maps'
};