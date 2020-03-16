/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Sirnak.1.02-22-2017 02:30:42
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
  "name": "Sirnak",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 700,
  "baseHeight": 383,
  "baseScaleFactor": 10,
  "entities": {
    "TR.SR.BE": {
      "outlines": [
        [M, 6036, 745, Q, 5990, 737, 5976, 735, L, 5844, 721, Q, 5788, 713, 5786, 712, 5761, 707, 5739, 699, 5709, 701, 5673, 686, 5635, 668, 5620, 663, 5583, 648, 5562, 641, 5525, 627, 5498, 621, 5407, 602, 5377, 597, 5279, 586, 5260, 586, 5260, 581, 5243, 586, 5217, 592, 5210, 593, 5207, 593, 5183, 593, 5164, 592, 5155, 595, 5135, 601, 5103, 603, 5080, 604, 5074, 606, 5070, 607, 5057, 607, 5033, 607, 5007, 581, 4969, 558, 4958, 550, 4955, 547, 4937, 531, 4918, 515, 4905, 508, 4891, 501, 4870, 483, 4850, 465, 4793, 426, 4752, 398, 4711, 377, L, 4683, 362, Q, 4682, 377, 4674, 403, 4669, 418, 4661, 445, 4661, 446, 4661, 448, 4658, 475, 4639, 552, 4636, 559, 4626, 582, 4619, 598, 4617, 610, 4614, 622, 4611, 641, 4607, 658, 4607, 659, 4603, 669, 4598, 676, 4564, 783, 4541, 847, 4510, 929, 4475, 1008, 4474, 1011, 4473, 1014, 4462, 1044, 4455, 1056, 4448, 1069, 4446, 1078, 4441, 1098, 4433, 1112, 4424, 1125, 4418, 1137, 4411, 1150, 4406, 1160, 4400, 1170, 4390, 1185, 4380, 1200, 4380, 1204, 4380, 1208, 4372, 1219, 4365, 1229, 4354, 1238, 4343, 1246, 4335, 1252, 4326, 1258, 4315, 1268, 4304, 1278, 4288, 1294, 4272, 1311, 4261, 1322, 4259, 1324, 4257, 1325, 4208, 1372, 4205, 1375, 4201, 1380, 4199, 1384, 4195, 1394, 4185, 1403, 4176, 1409, 4166, 1421, 4156, 1434, 4150, 1439, 4139, 1449, 4134, 1454, 4129, 1457, 4127, 1463, 4123, 1472, 4122, 1475, 4118, 1481, 4109, 1488, 4100, 1495, 4095, 1501, 4090, 1506, 4083, 1520, 4074, 1534, 4070, 1541, 4064, 1548, 4060, 1560, 4056, 1572, 4051, 1579, 4042, 1593, 4030, 1621, 4017, 1653, 4013, 1660, 4012, 1661, 4011, 1664, 4024, 1665, 4043, 1672, 4071, 1683, 4076, 1684, 4078, 1685, 4110, 1698, 4140, 1710, 4148, 1710, 4149, 1710, 4171, 1697, 4194, 1683, 4204, 1683, 4209, 1683, 4257, 1692, 4306, 1701, 4313, 1701, 4318, 1701, 4339, 1703, 4362, 1705, 4373, 1705, 4438, 1703, 4445, 1708, 4466, 1722, 4497, 1735, 4528, 1748, 4547, 1761, L, 4572, 1775, Q, 4575, 1776, 4583, 1778, 4590, 1780, 4593, 1782, 4621, 1802, 4633, 1811, 4634, 1811, 4635, 1812, 4734, 1902, 4792, 1941, 4849, 1980, 4900, 2013, 4938, 2038, 4960, 2048, 4972, 2054, 4988, 2066, 5015, 2086, 5017, 2088, 5044, 2106, 5075, 2119, L, 5091, 2119, Q, 5145, 2133, 5199, 2136, 5234, 2147, 5253, 2149, 5272, 2151, 5292, 2155, 5294, 2155, 5296, 2156, 5428, 2173, 5485, 2178, 5499, 2179, 5530, 2183, 5552, 2185, 5577, 2190, 5589, 2192, 5625, 2196, 5648, 2198, 5670, 2206, 5731, 2228, 5861, 2256, 5882, 2260, 5948, 2290, 6022, 2323, 6053, 2333, 6129, 2369, 6289, 2441, 6301, 2446, 6347, 2462, 6358, 2467, 6378, 2475, 6396, 2482, 6409, 2486, 6417, 2488, 6436, 2500, 6456, 2511, 6469, 2514, 6479, 2516, 6499, 2523, 6510, 2527, 6531, 2534, L, 6530, 2421, Q, 6530, 2363, 6531, 2342, L, 6532, 2322, Q, 6532, 2316, 6530, 2308, 6526, 2294, 6526, 2293, 6523, 2281, 6523, 2257, 6523, 2212, 6520, 2184, L, 6520, 2011, Q, 6521, 2008, 6522, 2004, 6523, 1994, 6528, 1981, 6533, 1964, 6532, 1946, 6533, 1916, 6533, 1902, L, 6533, 1870, Q, 6533, 1844, 6531, 1809, 6530, 1774, 6530, 1754, 6530, 1750, 6543, 1710, 6558, 1662, 6559, 1662, L, 6559, 1658, Q, 6572, 1590, 6583, 1542, 6595, 1494, 6602, 1450, 6610, 1407, 6614, 1378, 6617, 1349, 6616, 1328, 6615, 1307, 6620, 1288, 6625, 1268, 6625, 1259, 6624, 1228, 6627, 1190, 6629, 1147, 6629, 1126, 6629, 1119, 6640, 1109, 6652, 1098, 6655, 1088, 6659, 1073, 6682, 1048, 6688, 1045, 6692, 1035, 6695, 1030, 6700, 1019, 6702, 1014, 6710, 1006, 6718, 999, 6720, 994, 6720, 991, 6726, 962, 6730, 937, 6736, 926, 6734, 920, 6738, 909, 6742, 896, 6743, 890, 6745, 885, 6749, 874, 6753, 864, 6754, 858, 6756, 834, 6758, 823, 6761, 803, 6774, 789, L, 6774, 782, 6564, 782, Q, 6557, 782, 6528, 783, 6509, 783, 6494, 774, L, 6227, 774, Q, 6210, 766, 6191, 765, L, 6161, 765, Q, 6152, 764, 6131, 759, 6109, 753, 6103, 753, Q, 6077, 752, 6036, 745, Z]
      ],
      "label": "Beytüssebap",
      "shortLabel": "BE",
      "labelPosition": [539.2, 144.8],
      "labelAlignment": [CEN, MID]
    },
    "TR.SR.CI": {
      "outlines": [
        [M, 2668, 2288, Q, 2666, 2290, 2659, 2293, 2652, 2295, 2648, 2296, 2640, 2298, 2636, 2297, 2633, 2296, 2619, 2296, 2605, 2296, 2591, 2306, 2586, 2308, 2579, 2309, 2572, 2310, 2556, 2312, 2539, 2315, 2533, 2316, 2526, 2317, 2516, 2321, 2507, 2325, 2503, 2325, 2498, 2325, 2492, 2328, 2486, 2330, 2483, 2333, 2479, 2335, 2472, 2335, 2468, 2334, 2467, 2334, L, 2466, 2334, Q, 2454, 2334, 2452, 2334, 2450, 2333, 2444, 2329, 2438, 2325, 2436, 2326, 2400, 2327, 2391, 2326, 2364, 2325, 2345, 2324, 2309, 2322, 2302, 2317, L, 2250, 2317, Q, 2242, 2313, 2239, 2311, 2232, 2308, 2221, 2309, 2202, 2310, 2196, 2309, 2188, 2309, 2181, 2304, 2173, 2299, 2167, 2299, 2157, 2299, 2149, 2299, 2135, 2298, 2130, 2299, 2126, 2299, 2122, 2297, 2115, 2294, 2114, 2294, 2099, 2289, 2081, 2290, 2073, 2290, 2067, 2288, 2059, 2284, 2053, 2282, 2010, 2259, 1998, 2253, 1975, 2241, 1876, 2193, 1832, 2169, 1820, 2165, 1789, 2152, 1768, 2137, L, 1768, 2137, Q, 1766, 2142, 1764, 2149, 1756, 2170, 1755, 2178, 1750, 2194, 1739, 2233, 1738, 2235, 1737, 2238, 1735, 2255, 1729, 2280, 1720, 2314, 1717, 2332, 1717, 2332, 1715, 2355, 1713, 2370, 1709, 2383, 1706, 2389, 1706, 2396, 1706, 2399, 1706, 2409, 1706, 2410, 1701, 2421, 1697, 2431, 1697, 2439, 1697, 2442, 1710, 2470, 1722, 2495, 1729, 2510, 1742, 2534, 1767, 2576, 1774, 2587, 1781, 2611, 1788, 2636, 1794, 2657, 1801, 2678, 1801, 2697, 1800, 2715, 1801, 2730, 1801, 2744, 1798, 2755, 1795, 2767, 1796, 2773, 1796, 2779, 1787, 2781, 1786, 2781, 1772, 2781, L, 1689, 2781, Q, 1679, 2780, 1675, 2783, 1671, 2786, 1669, 2796, L, 1663, 2812, Q, 1660, 2821, 1661, 2826, 1663, 2836, 1658, 2855, 1652, 2872, 1650, 2880, 1650, 2882, 1650, 2884, 1652, 2911, 1678, 2946, 1715, 2994, 1722, 3014, 1725, 3024, 1729, 3053, 1734, 3078, 1741, 3094, 1746, 3103, 1750, 3135, 1751, 3138, 1751, 3158, 1752, 3172, 1755, 3179, 1756, 3180, 1757, 3183, 1763, 3197, 1764, 3253, 1764, 3269, 1726, 3359, 1707, 3404, 1687, 3450, 1699, 3449, 1724, 3438, 1736, 3432, 1766, 3422, 1790, 3413, 1797, 3408, 1813, 3402, 1857, 3384, 1900, 3366, 1922, 3358, 1964, 3343, 2047, 3310, 2055, 3307, 2079, 3295, 2094, 3288, 2110, 3284, 2123, 3280, 2136, 3274, 2145, 3271, 2149, 3264, 2152, 3258, 2155, 3253, 2161, 3243, 2220, 3151, 2226, 3145, 2244, 3115, 2264, 3082, 2272, 3071, 2284, 3053, 2327, 2985, 2333, 2974, 2376, 2896, 2390, 2870, 2404, 2848, 2425, 2817, 2433, 2817, 2438, 2817, 2445, 2822, 2453, 2828, 2456, 2829, 2465, 2832, 2483, 2842, 2488, 2844, 2501, 2848, 2514, 2852, 2523, 2857, 2529, 2861, 2539, 2866, 2547, 2871, 2557, 2875, 2601, 2889, 2686, 2926, 2694, 2929, 2805, 2977, 2807, 2978, 2814, 2977, 2818, 2976, 2820, 2980, 2820, 2975, 2826, 2963, 2833, 2950, 2833, 2947, 2833, 2944, 2841, 2914, 2850, 2884, 2850, 2879, 2849, 2863, 2855, 2841, 2868, 2794, 2908, 2694, 2908, 2692, 2909, 2689, 2928, 2638, 2940, 2612, 2943, 2606, 2947, 2590, 2950, 2575, 2955, 2567, 2972, 2541, 2988, 2506, 3004, 2470, 3019, 2435, 3034, 2401, 3036, 2379, 3038, 2358, 3038, 2357, 3048, 2344, 3049, 2323, 3047, 2300, 3049, 2291, 3044, 2291, 3039, 2291, 3010, 2293, 2996, 2291, 2991, 2291, 2979, 2286, 2969, 2282, 2965, 2282, 2949, 2281, 2904, 2281, 2895, 2281, 2888, 2282, 2886, 2281, 2885, 2282, 2875, 2282, 2869, 2282, 2869, 2281, 2867, 2281, 2866, 2281, 2865, 2281, 2860, 2282, 2860, 2281, 2832, 2280, 2751, 2283, Q, 2670, 2285, 2668, 2288, Z]
      ],
      "label": "Cizre",
      "shortLabel": "CI",
      "labelPosition": [234.9, 263.6],
      "labelAlignment": [CEN, MID]
    },
    "TR.SR.GU": {
      "outlines": [
        [M, 1665, 957, Q, 1648, 956, 1637, 957, 1615, 958, 1607, 963, 1599, 968, 1585, 968, 1582, 968, 1551, 959, 1517, 949, 1507, 947, 1439, 924, 1425, 923, L, 1425, 923, Q, 1423, 923, 1419, 923, 1414, 923, 1410, 927, 1403, 933, 1398, 933, 1375, 935, 1368, 935, 1359, 935, 1347, 939, 1334, 942, 1320, 942, 1316, 942, 1310, 946, 1304, 950, 1299, 950, 1283, 951, 1275, 950, 1265, 949, 1261, 953, 1256, 958, 1254, 958, 1234, 958, 1229, 958, L, 1229, 959, Q, 1228, 961, 1217, 959, 1203, 958, 1187, 951, 1179, 948, 1169, 948, 1157, 949, 1147, 948, 1140, 948, 1128, 944, 1116, 941, 1111, 941, 1092, 942, 1083, 942, 1066, 942, 1058, 940, 1057, 940, 1041, 932, 1031, 927, 1016, 929, 996, 931, 972, 927, 961, 926, 953, 925, 937, 923, 930, 919, L, 899, 900, Q, 884, 895, 860, 877, 835, 859, 827, 856, 815, 852, 794, 839, 774, 828, 761, 818, 708, 779, 697, 773, 687, 766, 662, 750, 637, 733, 617, 726, L, 613, 726, Q, 634, 762, 661, 799, 662, 800, 663, 801, 677, 824, 708, 866, 739, 910, 751, 929, 762, 947, 781, 975, 801, 1004, 821, 1031, 834, 1048, 841, 1063, 842, 1065, 843, 1066, 862, 1103, 890, 1141, 896, 1150, 919, 1177, 939, 1202, 939, 1212, L, 912, 1239, Q, 883, 1270, 872, 1284, 846, 1316, 841, 1322, 827, 1341, 815, 1360, 815, 1361, 814, 1362, 814, 1363, 814, 1364, 814, 1370, 816, 1376, 820, 1389, 821, 1395, 822, 1403, 822, 1418, 821, 1430, 824, 1443, 826, 1454, 835, 1485, 841, 1508, 844, 1520, 844, 1521, 844, 1522, 843, 1536, 851, 1570, 853, 1579, 853, 1588, 854, 1607, 854, 1612, 855, 1621, 858, 1635, 861, 1648, 861, 1654, 861, 1661, 866, 1673, 870, 1684, 870, 1692, L, 870, 1693, Q, 943, 1831, 969, 1890, 994, 1949, 1016, 1959, 1037, 1968, 1078, 2013, 1118, 2057, 1129, 2057, 1134, 2057, 1160, 2045, 1188, 2033, 1191, 2033, 1221, 2026, 1224, 2026, 1233, 2024, 1268, 2016, 1290, 2009, 1407, 1992, 1413, 1992, 1452, 1996, 1496, 2001, 1507, 2005, 1518, 2009, 1533, 2014, 1544, 2018, 1556, 2020, 1559, 2021, 1567, 2024, 1575, 2027, 1580, 2028, 1584, 2028, 1590, 2028, 1596, 2028, 1602, 2031, 1633, 2047, 1686, 2085, 1738, 2123, 1768, 2137, L, 1768, 2137, Q, 1771, 2127, 1771, 2121, 1774, 2099, 1787, 2059, 1799, 2024, 1801, 2006, 1801, 2004, 1801, 2002, 1797, 1960, 1794, 1940, 1788, 1905, 1772, 1867, 1752, 1816, 1742, 1794, L, 1727, 1761, Q, 1719, 1738, 1715, 1729, 1715, 1728, 1714, 1727, 1702, 1706, 1702, 1704, 1698, 1694, 1696, 1677, 1694, 1662, 1689, 1646, 1688, 1642, 1679, 1617, 1672, 1597, 1662, 1561, 1651, 1521, 1644, 1502, 1634, 1475, 1610, 1425, 1596, 1397, 1596, 1364, 1596, 1356, 1604, 1319, 1613, 1280, 1619, 1268, 1624, 1257, 1637, 1221, 1649, 1191, 1658, 1173, 1659, 1171, 1660, 1170, 1726, 1078, 1726, 1071, L, 1707, 1010, Q, 1701, 990, 1699, 976, 1698, 961, 1697, 949, L, 1690, 948, Q, 1686, 948, 1680, 952, Q, 1673, 955, 1665, 957, Z]
      ],
      "label": "Güçlükonak",
      "shortLabel": "GU",
      "labelPosition": [120.7, 155.4],
      "labelAlignment": [CEN, MID]
    },
    "TR.SR.ID": {
      "outlines": [
        [M, 1452, 1996, Q, 1413, 1992, 1407, 1992, 1290, 2009, 1268, 2016, 1233, 2024, 1224, 2026, 1221, 2026, 1191, 2033, 1188, 2033, 1160, 2045, 1134, 2057, 1129, 2057, 1118, 2057, 1078, 2013, 1037, 1968, 1016, 1959, 994, 1949, 969, 1890, 943, 1831, 870, 1693, 869, 1703, 860, 1710, 842, 1723, 836, 1730, 829, 1738, 815, 1755, 806, 1767, 799, 1773, 788, 1781, 773, 1797, 760, 1812, 754, 1816, 749, 1819, 733, 1836, 721, 1849, 714, 1851, 690, 1851, 680, 1853, 672, 1854, 657, 1858, 645, 1862, 635, 1862, 625, 1862, 589, 1867, 557, 1872, 546, 1871, 506, 1865, 458, 1880, 390, 1900, 378, 1902, 349, 1906, 298, 1918, 232, 1933, 211, 1937, 185, 1941, 172, 1943, 150, 1947, 127, 1954, 94, 1965, 85, 1966, 79, 1967, 63, 1971, 48, 1975, 45, 1974, 43, 2592, 43, 2606, 43, 2617, 45, 2623, 47, 2628, 54, 2637, 68, 2655, 72, 2667, 73, 2672, 81, 2685, 87, 2694, 90, 2701, 91, 2702, 91, 2704, 102, 2722, 112, 2741, 123, 2761, 136, 2783, 149, 2804, 157, 2820, 166, 2835, 175, 2856, 183, 2878, 194, 2877, 204, 2876, 224, 2868, 244, 2859, 259, 2851, 274, 2843, 288, 2839, 302, 2835, 309, 2832, 315, 2829, 330, 2820, 344, 2811, 373, 2804, 403, 2796, 503, 2752, 510, 2752, 520, 2779, 525, 2793, 530, 2811, 540, 2840, 558, 2882, 559, 2887, 569, 2914, 576, 2935, 582, 2946, 588, 2956, 590, 2964, 591, 2970, 594, 2982, 595, 2987, 603, 2999, 608, 3008, 610, 3014, 610, 3015, 611, 3017, 610, 3029, 614, 3053, 618, 3080, 617, 3096, 615, 3111, 622, 3139, 630, 3169, 630, 3181, L, 630, 3336, Q, 630, 3352, 624, 3362, 619, 3371, 619, 3378, 619, 3412, 615, 3432, 612, 3445, 602, 3490, 602, 3493, 596, 3540, 590, 3588, 590, 3600, 590, 3613, 594, 3615, 608, 3613, 623, 3608, 635, 3605, 651, 3606, 661, 3607, 683, 3597, 695, 3593, 716, 3593, 734, 3592, 792, 3585, 805, 3584, 831, 3580, 856, 3575, 862, 3575, 872, 3575, 901, 3568, 927, 3562, 935, 3563, 936, 3563, 954, 3561, 972, 3558, 979, 3559, 985, 3559, 992, 3557, 998, 3556, 1013, 3552, 1033, 3547, 1048, 3545, L, 1067, 3545, Q, 1076, 3545, 1082, 3540, 1089, 3535, 1099, 3534, 1111, 3532, 1125, 3532, 1134, 3531, 1154, 3531, 1250, 3519, 1314, 3503, 1322, 3501, 1336, 3501, 1355, 3500, 1358, 3500, 1381, 3497, 1403, 3495, 1414, 3494, 1422, 3490, 1425, 3489, 1441, 3482, 1446, 3481, 1458, 3480, 1474, 3479, 1480, 3478, 1507, 3474, 1523, 3476, 1532, 3477, 1543, 3474, 1563, 3469, 1564, 3469, 1571, 3468, 1584, 3468, 1597, 3467, 1604, 3466, 1610, 3465, 1624, 3460, 1636, 3456, 1643, 3457, 1647, 3457, 1662, 3453, 1676, 3448, 1683, 3449, 1685, 3450, 1687, 3450, 1707, 3404, 1726, 3359, 1764, 3269, 1764, 3253, 1763, 3197, 1757, 3183, 1756, 3180, 1755, 3179, 1752, 3172, 1751, 3158, 1751, 3138, 1750, 3135, 1746, 3103, 1741, 3094, 1734, 3078, 1729, 3053, 1725, 3024, 1722, 3014, 1715, 2994, 1678, 2946, 1652, 2911, 1650, 2884, 1650, 2882, 1650, 2880, 1652, 2872, 1658, 2855, 1663, 2836, 1661, 2826, 1660, 2821, 1663, 2812, L, 1669, 2796, Q, 1671, 2786, 1675, 2783, 1679, 2780, 1689, 2781, L, 1772, 2781, Q, 1786, 2781, 1787, 2781, 1796, 2779, 1796, 2773, 1795, 2767, 1798, 2755, 1801, 2744, 1801, 2730, 1800, 2715, 1801, 2697, 1801, 2678, 1794, 2657, 1788, 2636, 1781, 2611, 1774, 2587, 1767, 2576, 1742, 2534, 1729, 2510, 1722, 2495, 1710, 2470, 1697, 2442, 1697, 2439, 1697, 2431, 1701, 2421, 1706, 2410, 1706, 2409, 1706, 2399, 1706, 2396, 1706, 2389, 1709, 2383, 1713, 2370, 1715, 2355, 1717, 2332, 1717, 2332, 1720, 2314, 1729, 2280, 1735, 2255, 1737, 2238, 1738, 2235, 1739, 2233, 1750, 2194, 1755, 2178, 1756, 2170, 1764, 2149, 1766, 2142, 1768, 2137, 1738, 2123, 1686, 2085, 1633, 2047, 1602, 2031, 1596, 2028, 1590, 2028, 1584, 2028, 1580, 2028, 1575, 2027, 1567, 2024, 1559, 2021, 1556, 2020, 1544, 2018, 1533, 2014, 1518, 2009, 1507, 2005, Q, 1496, 2001, 1452, 1996, Z]
      ],
      "label": "Idil",
      "shortLabel": "ID",
      "labelPosition": [104.4, 265.4],
      "labelAlignment": [CEN, MID]
    },
    "TR.SR.SI": {
      "outlines": [
        [M, 4073, 2266, Q, 4063, 2277, 4057, 2282, 4047, 2293, 4039, 2299, 4031, 2304, 4007, 2326, 3998, 2335, 3990, 2341, 3977, 2349, 3974, 2352, 3964, 2363, 3938, 2378, 3907, 2397, 3900, 2402, L, 3859, 2424, Q, 3846, 2429, 3840, 2432, 3829, 2436, 3825, 2441, 3824, 2441, 3823, 2442, 3819, 2446, 3813, 2449, 3805, 2455, 3800, 2455, 3784, 2458, 3771, 2467, 3747, 2480, 3741, 2482, 3735, 2483, 3709, 2483, 3686, 2483, 3679, 2482, 3668, 2481, 3649, 2473, L, 3557, 2473, Q, 3555, 2472, 3546, 2468, 3537, 2464, 3534, 2463, 3530, 2463, 3524, 2461, 3513, 2457, 3510, 2456, 3507, 2455, 3481, 2455, L, 3455, 2450, Q, 3451, 2449, 3442, 2449, 3433, 2449, 3430, 2448, 3425, 2446, 3408, 2438, L, 3357, 2412, Q, 3287, 2374, 3258, 2360, 3245, 2355, 3237, 2352, 3222, 2343, 3215, 2341, 3209, 2337, 3202, 2335, 3192, 2333, 3188, 2332, 3176, 2325, 3174, 2324, 3169, 2323, 3163, 2323, 3163, 2323, 3162, 2323, 3158, 2323, 3137, 2320, L, 3122, 2317, Q, 3119, 2317, 3114, 2314, 3109, 2310, 3108, 2310, 3095, 2307, 3090, 2305, 3082, 2302, 3073, 2297, 3067, 2293, 3058, 2292, 3056, 2291, 3049, 2291, 3047, 2300, 3049, 2323, 3048, 2344, 3038, 2357, 3038, 2358, 3036, 2379, 3034, 2401, 3019, 2435, 3004, 2470, 2988, 2506, 2972, 2541, 2955, 2567, 2950, 2575, 2947, 2590, 2943, 2606, 2940, 2612, 2928, 2638, 2909, 2689, 2908, 2692, 2908, 2694, 2868, 2794, 2855, 2841, 2849, 2863, 2850, 2879, 2850, 2884, 2841, 2914, 2833, 2944, 2833, 2947, 2833, 2950, 2826, 2963, 2820, 2975, 2820, 2980, 2821, 2981, 2822, 2982, L, 2839, 3027, Q, 2850, 3057, 2859, 3097, 2859, 3099, 2860, 3100, 2884, 3180, 2918, 3274, L, 2947, 3355, Q, 2952, 3367, 2961, 3392, 2969, 3414, 2974, 3433, 2974, 3434, 2975, 3436, 2978, 3447, 2987, 3475, 2994, 3500, 2999, 3513, 3020, 3567, 3031, 3593, 3031, 3594, 3032, 3595, 3041, 3619, 3046, 3639, 3046, 3641, 3046, 3642, 3053, 3672, 3072, 3723, 3080, 3743, 3083, 3761, 3084, 3769, 3084, 3783, 3086, 3793, 3091, 3796, 3106, 3795, 3139, 3785, 3174, 3776, 3195, 3773, 3197, 3772, 3222, 3766, 3244, 3760, 3250, 3761, L, 3319, 3751, Q, 3328, 3750, 3345, 3745, 3354, 3743, 3373, 3738, L, 3435, 3726, Q, 3450, 3723, 3486, 3720, 3506, 3716, 3529, 3712, 3530, 3712, 3532, 3712, 3540, 3710, 3557, 3705, 3577, 3699, 3591, 3698, L, 3649, 3690, Q, 3650, 3690, 3651, 3690, 3679, 3685, 3726, 3673, 3770, 3664, 3810, 3662, 3815, 3661, 3830, 3657, 3843, 3652, 3850, 3652, 3859, 3653, 3868, 3650, 3874, 3648, 3886, 3643, 3893, 3639, 3903, 3616, 3911, 3596, 3913, 3588, 3914, 3586, 3915, 3584, 3930, 3533, 3936, 3509, 3948, 3468, 3960, 3437, 3999, 3337, 4011, 3284, 4011, 3284, 4012, 3284, 4031, 3229, 4040, 3205, 4055, 3164, 4066, 3128, 4084, 3075, 4092, 3049, 4108, 3003, 4115, 2971, L, 4115, 2966, Q, 4129, 2926, 4149, 2869, 4171, 2805, 4182, 2772, 4184, 2766, 4200, 2759, 4216, 2752, 4242, 2739, 4269, 2725, 4296, 2713, 4323, 2701, 4339, 2691, 4341, 2689, 4345, 2687, 4330, 2659, 4316, 2637, 4313, 2633, 4303, 2610, 4293, 2588, 4288, 2580, 4276, 2565, 4264, 2535, 4255, 2518, 4251, 2510, 4244, 2497, 4244, 2486, 4243, 2485, 4243, 2483, 4241, 2474, 4234, 2455, 4225, 2433, 4220, 2422, 4216, 2416, 4210, 2397, 4204, 2378, 4200, 2370, 4195, 2362, 4183, 2347, 4170, 2330, 4165, 2324, L, 4132, 2277, Q, 4117, 2261, 4106, 2245, 4095, 2251, 4089, 2254, Q, 4079, 2260, 4073, 2266, Z]
      ],
      "label": "Silopi",
      "shortLabel": "SI",
      "labelPosition": [346, 302],
      "labelAlignment": [CEN, MID]
    },
    "TR.SR.SR": {
      "outlines": [
        [M, 3997, 238, Q, 3973, 240, 3940, 221, 3907, 203, 3892, 190, 3875, 177, 3850, 162, 3824, 147, 3807, 137, 3778, 120, 3768, 114, 3763, 110, 3751, 103, 3737, 96, 3729, 91, 3713, 78, 3688, 62, 3664, 46, 3658, 44, 3653, 42, 3632, 42, 3611, 41, 3587, 45, 3563, 49, 3486, 48, 3475, 48, 3464, 51, 3452, 55, 3447, 57, 3439, 59, 3426, 58, 3409, 58, 3400, 58, 3391, 58, 3370, 63, 3348, 70, 3340, 71, 3281, 87, 3269, 93, 3257, 99, 3249, 101, 3241, 104, 3230, 108, 3219, 112, 3211, 115, 3201, 119, 3182, 129, 3162, 139, 3152, 145, 3066, 200, 3030, 224, 3011, 236, 2965, 261, 2958, 265, 2945, 278, 2929, 298, 2922, 304, 2906, 318, 2872, 353, 2844, 381, 2829, 394, 2827, 395, 2826, 396, 2807, 415, 2786, 434, 2763, 455, 2755, 466, L, 2717, 533, Q, 2691, 572, 2671, 594, 2651, 615, 2642, 627, 2634, 636, 2616, 656, 2614, 657, 2613, 658, 2610, 661, 2602, 669, 2589, 683, 2579, 693, 2568, 703, 2554, 723, 2540, 742, 2502, 772, 2464, 802, 2425, 831, 2415, 839, 2373, 867, 2345, 885, 2325, 903, 2284, 937, 2276, 940, 2272, 941, 2221, 941, L, 2220, 942, Q, 2217, 944, 2184, 942, 2146, 939, 2129, 930, L, 2127, 930, Q, 2126, 930, 2125, 930, 2090, 928, 1913, 929, 1786, 930, 1713, 948, 1711, 949, 1709, 949, L, 1697, 949, Q, 1698, 961, 1699, 976, 1701, 990, 1707, 1010, L, 1726, 1071, Q, 1726, 1078, 1660, 1170, 1659, 1171, 1658, 1173, 1649, 1191, 1637, 1221, 1624, 1257, 1619, 1268, 1613, 1280, 1604, 1319, 1596, 1356, 1596, 1364, 1596, 1397, 1610, 1425, 1634, 1475, 1644, 1502, 1651, 1521, 1662, 1561, 1672, 1597, 1679, 1617, 1688, 1642, 1689, 1646, 1694, 1662, 1696, 1677, 1698, 1694, 1702, 1704, 1702, 1706, 1714, 1727, 1715, 1728, 1715, 1729, 1719, 1738, 1727, 1761, L, 1742, 1794, Q, 1752, 1816, 1772, 1867, 1788, 1905, 1794, 1940, 1797, 1960, 1801, 2002, 1801, 2004, 1801, 2006, 1799, 2024, 1787, 2059, 1774, 2099, 1771, 2121, 1771, 2127, 1768, 2137, 1789, 2152, 1820, 2165, 1832, 2169, 1876, 2193, 1975, 2241, 1998, 2253, 2010, 2259, 2053, 2282, 2059, 2284, 2067, 2288, 2073, 2290, 2081, 2290, 2099, 2289, 2114, 2294, 2115, 2294, 2122, 2297, 2126, 2299, 2130, 2299, 2135, 2298, 2149, 2299, 2157, 2299, 2167, 2299, 2173, 2299, 2181, 2304, 2188, 2309, 2196, 2309, 2202, 2310, 2221, 2309, 2232, 2308, 2239, 2311, 2242, 2313, 2250, 2317, L, 2302, 2317, Q, 2309, 2322, 2345, 2324, 2364, 2325, 2391, 2326, 2400, 2327, 2436, 2326, 2438, 2325, 2444, 2329, 2450, 2333, 2452, 2334, 2454, 2334, 2466, 2334, L, 2467, 2334, Q, 2468, 2334, 2472, 2335, 2479, 2335, 2483, 2333, 2486, 2330, 2492, 2328, 2498, 2325, 2503, 2325, 2507, 2325, 2516, 2321, 2526, 2317, 2533, 2316, 2539, 2315, 2556, 2312, 2572, 2310, 2579, 2309, 2586, 2308, 2591, 2306, 2605, 2296, 2619, 2296, 2633, 2296, 2636, 2297, 2640, 2298, 2648, 2296, 2652, 2295, 2659, 2293, 2666, 2290, 2668, 2288, 2670, 2285, 2751, 2283, 2832, 2280, 2860, 2281, 2865, 2281, 2867, 2281, 2869, 2281, 2869, 2282, 2875, 2282, 2885, 2282, 2886, 2281, 2888, 2282, 2895, 2281, 2904, 2281, 2949, 2281, 2965, 2282, 2969, 2282, 2979, 2286, 2991, 2291, 2996, 2291, 3010, 2293, 3039, 2291, 3044, 2291, 3049, 2291, 3056, 2291, 3058, 2292, 3067, 2293, 3073, 2297, 3082, 2302, 3090, 2305, 3095, 2307, 3108, 2310, 3109, 2310, 3114, 2314, 3119, 2317, 3122, 2317, L, 3137, 2320, Q, 3158, 2323, 3162, 2323, 3163, 2323, 3163, 2323, 3169, 2323, 3174, 2324, 3176, 2325, 3188, 2332, 3192, 2333, 3202, 2335, 3209, 2337, 3215, 2341, 3222, 2343, 3237, 2352, 3245, 2355, 3258, 2360, 3287, 2374, 3357, 2412, L, 3408, 2438, Q, 3425, 2446, 3430, 2448, 3433, 2449, 3442, 2449, 3451, 2449, 3455, 2450, L, 3481, 2455, Q, 3507, 2455, 3510, 2456, 3513, 2457, 3524, 2461, 3530, 2463, 3534, 2463, 3537, 2464, 3546, 2468, 3555, 2472, 3557, 2473, L, 3649, 2473, Q, 3668, 2481, 3679, 2482, 3686, 2483, 3709, 2483, 3735, 2483, 3741, 2482, 3747, 2480, 3771, 2467, 3784, 2458, 3800, 2455, 3805, 2455, 3813, 2449, 3819, 2446, 3823, 2442, 3824, 2441, 3825, 2441, 3829, 2436, 3840, 2432, 3846, 2429, 3859, 2424, L, 3900, 2402, Q, 3907, 2397, 3938, 2378, 3964, 2363, 3974, 2352, 3977, 2349, 3990, 2341, 3998, 2335, 4007, 2326, 4031, 2304, 4039, 2299, 4047, 2293, 4057, 2282, 4063, 2277, 4073, 2266, 4079, 2260, 4089, 2254, 4095, 2251, 4106, 2245, 4101, 2237, 4096, 2229, 4084, 2208, 4070, 2172, L, 4043, 2120, Q, 4033, 2102, 4028, 2093, 4020, 2077, 4019, 2067, L, 4011, 2040, Q, 4007, 2029, 4006, 2025, 4004, 2019, 4004, 2013, 4004, 2000, 3999, 1982, 3995, 1965, 3994, 1955, 3994, 1936, 3994, 1927, 3994, 1911, 3991, 1900, 3987, 1890, 3987, 1873, 3988, 1850, 3988, 1843, L, 3987, 1840, Q, 3987, 1833, 3985, 1828, 3983, 1820, 3982, 1816, 3977, 1801, 3977, 1787, L, 3977, 1770, 3983, 1755, Q, 3983, 1744, 3985, 1738, 3990, 1727, 3992, 1722, 3996, 1713, 3998, 1707, 4003, 1695, 4004, 1689, 4009, 1672, 4011, 1664, 4012, 1661, 4013, 1660, 4017, 1653, 4030, 1621, 4042, 1593, 4051, 1579, 4056, 1572, 4060, 1560, 4064, 1548, 4070, 1541, 4074, 1534, 4083, 1520, 4090, 1506, 4095, 1501, 4100, 1495, 4109, 1488, 4118, 1481, 4122, 1475, 4123, 1472, 4127, 1463, 4129, 1457, 4134, 1454, 4139, 1449, 4150, 1439, 4156, 1434, 4166, 1421, 4176, 1409, 4185, 1403, 4195, 1394, 4199, 1384, 4201, 1380, 4205, 1375, 4208, 1372, 4257, 1325, 4259, 1324, 4261, 1322, 4272, 1311, 4288, 1294, 4304, 1278, 4315, 1268, 4326, 1258, 4335, 1252, 4343, 1246, 4354, 1238, 4365, 1229, 4372, 1219, 4380, 1208, 4380, 1204, 4380, 1200, 4390, 1185, 4400, 1170, 4406, 1160, 4411, 1150, 4418, 1137, 4424, 1125, 4433, 1112, 4441, 1098, 4446, 1078, 4448, 1069, 4455, 1056, 4462, 1044, 4473, 1014, 4474, 1011, 4475, 1008, 4510, 929, 4541, 847, 4564, 783, 4598, 676, 4603, 669, 4607, 659, 4607, 658, 4611, 641, 4614, 622, 4617, 610, 4619, 598, 4626, 582, 4636, 559, 4639, 552, 4658, 475, 4661, 448, 4661, 446, 4661, 445, 4669, 418, 4674, 403, 4682, 377, 4683, 362, L, 4672, 356, Q, 4664, 351, 4654, 341, 4649, 337, 4642, 335, 4633, 333, 4632, 332, 4611, 314, 4599, 309, 4588, 304, 4572, 302, 4556, 300, 4551, 299, 4538, 297, 4506, 290, 4476, 283, 4460, 281, 4457, 280, 4438, 274, 4423, 269, 4412, 270, 4402, 271, 4389, 266, 4373, 261, 4368, 261, 4359, 260, 4286, 245, 4268, 241, 4245, 240, 4239, 240, 4210, 240, 4208, 240, 4206, 240, 4172, 237, 4100, 236, Q, 4022, 235, 3997, 238, Z]
      ],
      "label": "Sirnak",
      "shortLabel": "SR",
      "labelPosition": [313.9, 126.2],
      "labelAlignment": [CEN, MID]
    },
    "TR.SR.UL": {
      "outlines": [
        [M, 5296, 2156, Q, 5294, 2155, 5292, 2155, 5272, 2151, 5253, 2149, 5234, 2147, 5199, 2136, 5145, 2133, 5091, 2119, L, 5075, 2119, Q, 5044, 2106, 5017, 2088, 5015, 2086, 4988, 2066, 4972, 2054, 4960, 2048, 4938, 2038, 4900, 2013, 4849, 1980, 4792, 1941, 4734, 1902, 4635, 1812, 4634, 1811, 4633, 1811, 4621, 1802, 4593, 1782, 4590, 1780, 4583, 1778, 4575, 1776, 4572, 1775, L, 4547, 1761, Q, 4528, 1748, 4497, 1735, 4466, 1722, 4445, 1708, 4438, 1703, 4373, 1705, 4362, 1705, 4339, 1703, 4318, 1701, 4313, 1701, 4306, 1701, 4257, 1692, 4209, 1683, 4204, 1683, 4194, 1683, 4171, 1697, 4149, 1710, 4148, 1710, 4140, 1710, 4110, 1698, 4078, 1685, 4076, 1684, 4071, 1683, 4043, 1672, 4024, 1665, 4011, 1664, 4009, 1672, 4004, 1689, 4003, 1695, 3998, 1707, 3996, 1713, 3992, 1722, 3990, 1727, 3985, 1738, 3983, 1744, 3983, 1755, L, 3977, 1770, 3977, 1787, Q, 3977, 1801, 3982, 1816, 3983, 1820, 3985, 1828, 3987, 1833, 3987, 1840, L, 3988, 1843, Q, 3988, 1850, 3987, 1873, 3987, 1890, 3991, 1900, 3994, 1911, 3994, 1927, 3994, 1936, 3994, 1955, 3995, 1965, 3999, 1982, 4004, 2000, 4004, 2013, 4004, 2019, 4006, 2025, 4007, 2029, 4011, 2040, L, 4019, 2067, Q, 4020, 2077, 4028, 2093, 4033, 2102, 4043, 2120, L, 4070, 2172, Q, 4084, 2208, 4096, 2229, 4101, 2237, 4106, 2245, 4117, 2261, 4132, 2277, L, 4165, 2324, Q, 4170, 2330, 4183, 2347, 4195, 2362, 4200, 2370, 4204, 2378, 4210, 2397, 4216, 2416, 4220, 2422, 4225, 2433, 4234, 2455, 4241, 2474, 4243, 2483, 4243, 2485, 4244, 2486, 4244, 2497, 4251, 2510, 4255, 2518, 4264, 2535, 4276, 2565, 4288, 2580, 4293, 2588, 4303, 2610, 4313, 2633, 4316, 2637, 4330, 2659, 4345, 2687, 4356, 2679, 4366, 2674, 4379, 2667, 4392, 2661, 4405, 2654, 4436, 2640, 4468, 2626, 4478, 2620, 4488, 2613, 4526, 2595, 4565, 2576, 4590, 2559, L, 4604, 2559, 4604, 2562, Q, 4614, 2567, 4669, 2588, 4711, 2605, 4739, 2618, 4749, 2623, 4774, 2630, 4801, 2639, 4808, 2641, 4813, 2644, 4845, 2656, 4875, 2668, 4885, 2674, 4939, 2704, 5019, 2752, 5064, 2780, 5153, 2833, L, 5292, 2910, Q, 5296, 2915, 5313, 2924, 5330, 2933, 5333, 2932, 5337, 2930, 5367, 2904, L, 5541, 2781, Q, 5579, 2754, 5653, 2696, 5685, 2672, 5723, 2644, 5767, 2612, 5771, 2612, 5771, 2612, 5835, 2646, 5837, 2647, 5839, 2648, 5894, 2674, 6033, 2747, 6175, 2822, 6194, 2830, 6212, 2837, 6236, 2847, 6260, 2858, 6273, 2864, 6298, 2876, 6343, 2896, 6380, 2914, 6406, 2933, 6441, 2949, 6528, 2991, 6607, 3030, 6654, 3054, 6688, 3072, 6716, 3080, 6726, 3083, 6748, 3088, 6766, 3093, 6782, 3098, 6803, 3104, 6848, 3113, 6860, 3115, 6883, 3123, 6907, 3132, 6920, 3136, L, 6939, 3136, Q, 6940, 3136, 6944, 3139, 6947, 3141, 6950, 3141, 6956, 3141, 6957, 3138, 6957, 3133, 6957, 3130, 6957, 3120, 6932, 3106, 6905, 3092, 6902, 3088, 6896, 3083, 6877, 3059, 6872, 3053, 6861, 3048, 6848, 3042, 6821, 3011, 6794, 2981, 6732, 2921, 6705, 2899, 6680, 2864, 6643, 2812, 6637, 2804, 6620, 2784, 6597, 2742, 6563, 2681, 6560, 2672, 6557, 2664, 6545, 2645, 6535, 2629, 6537, 2615, L, 6531, 2550, 6531, 2534, Q, 6510, 2527, 6499, 2523, 6479, 2516, 6469, 2514, 6456, 2511, 6436, 2500, 6417, 2488, 6409, 2486, 6396, 2482, 6378, 2475, 6358, 2467, 6347, 2462, 6301, 2446, 6289, 2441, 6129, 2369, 6053, 2333, 6022, 2323, 5948, 2290, 5882, 2260, 5861, 2256, 5731, 2228, 5670, 2206, 5648, 2198, 5625, 2196, 5589, 2192, 5577, 2190, 5552, 2185, 5530, 2183, 5499, 2179, 5485, 2178, Q, 5428, 2173, 5296, 2156, Z]
      ],
      "label": "Uludere",
      "shortLabel": "UL",
      "labelPosition": [525.7, 245.5],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'sirnak',
  type: 'maps'
};