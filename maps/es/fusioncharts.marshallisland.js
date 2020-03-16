/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.MarshallIsland.20.10-30-2012 06:49:11
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
  "name": "MarshallIsland",
  "revision": 20,
  "standaloneInit": true,
  "baseWidth": 370,
  "baseHeight": 300,
  "baseScaleFactor": 10,
  "entities": {
    "MH.MH.KO": {
      "outlines": [
        [M, 854, 2561, Q, 853, 2564, 853, 2571, 841, 2571, 838, 2576, 847, 2583, 853, 2583, 859, 2582, 866, 2587, 866, 2591, 866, 2594, 867, 2594, 867, 2594, L, 876, 2594, 876, 2588, Q, 877, 2588, 890, 2586, 892, 2571, 892, 2566, 873, 2546, 872, 2546, 868, 2546, 862, 2558, Q, 855, 2555, 854, 2561, Z, M, 863, 2564, L, 873, 2564, 873, 2586, Q, 861, 2580, 860, 2571, Q, 860, 2570, 863, 2564, Z]
      ],
      "label": "Kosrae",
      "shortLabel": "KO",
      "labelPosition": [75.2, 257.6],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [
        [M, 752, 2576, L, 880, 2576]
      ]
    },
    "MH.MH.UJ": {
      "outlines": [
        [M, 1557, 1532, Q, 1551, 1532, 1548, 1542, 1568, 1555, 1579, 1562, 1599, 1576, 1603, 1600, L, 1591, 1600, 1581, 1590, 1566, 1590, 1566, 1595, Q, 1603, 1606, 1613, 1632, L, 1626, 1632, 1626, 1597, Q, 1607, 1558, 1557, 1532, Z],
        [M, 1771, 1605, L, 1751, 1605, Q, 1745, 1617, 1733, 1635, 1766, 1640, 1771, 1640, Z]
      ],
      "label": "Ujae",
      "shortLabel": "UJ",
      "labelPosition": [175.2, 155.6],
      "labelAlignment": [CEN, TOP],
      "labelConnectors": [
        [M, 1752, 1556, L, 1752, 1624]
      ]
    },
    "MH.MH.WH": {
      "outlines": [
        [M, 1693, 1292, L, 1676, 1292, 1676, 1305, Q, 1686, 1310, 1693, 1310, L, 1693, 1325, 1678, 1325, 1671, 1310, 1666, 1307, Q, 1664, 1311, 1662, 1314, 1670, 1318, 1680, 1335, 1687, 1348, 1701, 1345, L, 1701, 1297, Q, 1693, 1297, 1693, 1292, Z]
      ],
      "label": "Wotho",
      "shortLabel": "WH",
      "labelPosition": [160.1, 133.3],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [
        [M, 1691, 1333, L, 1601, 1333]
      ]
    },
    "MH.MH.BN": {
      "outlines": [
        [M, 1548, 889, Q, 1530, 880, 1512, 880, 1498, 880, 1496, 882, 1493, 885, 1493, 904, 1493, 920, 1504, 934, 1514, 948, 1528, 952, L, 1541, 952, Q, 1541, 947, 1538, 940, 1533, 942, 1525, 938, 1517, 934, 1516, 927, 1514, 919, 1508, 914, 1505, 911, 1498, 907, 1509, 897, 1523, 897, 1547, 897, 1559, 913, 1577, 939, 1591, 947, L, 1591, 932, Q, 1586, 927, 1578, 921, 1574, 915, 1578, 897, Q, 1564, 898, 1548, 889, Z]
      ],
      "label": "Bikini",
      "shortLabel": "BN",
      "labelPosition": [162.6, 90.6],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [
        [M, 1626, 906, L, 1564, 906]
      ]
    },
    "MH.MH.UL": {
      "outlines": [
        [M, 336, 1354, Q, 336, 1359, 351, 1370, 363, 1380, 368, 1382, 369, 1379, 378, 1375, 388, 1370, 393, 1372, L, 393, 1345, Q, 378, 1342, 360, 1342, Q, 336, 1342, 336, 1354, Z]
      ],
      "label": "Ujelang",
      "shortLabel": "UL",
      "labelPosition": [23.8, 136.2],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [
        [M, 238, 1362, L, 364, 1362]
      ]
    },
    "MH.MH.EN": {
      "outlines": [
        [M, 701, 877, Q, 676, 888, 676, 907, 676, 925, 696, 956, 718, 989, 731, 967, 722, 964, 705, 941, 688, 918, 688, 912, 688, 887, 728, 887, 733, 887, 748, 912, 763, 937, 763, 945, 763, 961, 754, 960, 742, 958, 738, 977, L, 763, 977, Q, 776, 967, 776, 954, 776, 870, 740, 870, Q, 719, 870, 701, 877, Z]
      ],
      "label": "Enewetak",
      "shortLabel": "EN",
      "labelPosition": [83.6, 89.2],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [
        [M, 836, 892, L, 748, 892]
      ]
    },
    "MH.MH.NU": {
      "outlines": [
        [M, 2273, 1825, Q, 2228, 1820, 2222, 1820, 2215, 1819, 2208, 1820, 2196, 1821, 2196, 1830, 2196, 1837, 2238, 1852, 2246, 1856, 2246, 1864, 2246, 1869, 2246, 1882, 2247, 1890, 2257, 1897, 2266, 1903, 2266, 1913, 2266, 1919, 2253, 1936, 2253, 1939, 2254, 1941, 2254, 1942, 2255, 1942, L, 2256, 1942, Q, 2258, 1942, 2261, 1942, 2275, 1942, 2296, 1940, 2290, 1919, 2308, 1925, 2305, 1908, 2284, 1877, Q, 2267, 1854, 2273, 1825, Z, M, 2278, 1927, L, 2278, 1907, Q, 2275, 1898, 2266, 1888, 2254, 1876, 2248, 1867, L, 2248, 1850, Q, 2266, 1855, 2274, 1876, 2279, 1889, 2288, 1920, 2287, 1923, 2280, 1926, Q, 2279, 1926, 2278, 1927, Z]
      ],
      "label": "Namu",
      "shortLabel": "NU",
      "labelPosition": [224.8, 172],
      "labelAlignment": [CEN, TOP],
      "labelConnectors": [
        [M, 2248, 1720, L, 2248, 1832]
      ]
    },
    "MH.MH.NK": {
      "outlines": [
        [M, 2233, 2504, Q, 2231, 2506, 2231, 2515, 2231, 2521, 2233, 2540, L, 2256, 2540, Q, 2263, 2532, 2263, 2521, 2263, 2498, 2251, 2502, L, 2251, 2490, 2243, 2490, Q, 2239, 2499, 2233, 2504, Z]
      ],
      "label": "Namorik",
      "shortLabel": "NK",
      "labelPosition": [212.8, 251.5],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [
        [M, 2128, 2515, L, 2247, 2515]
      ]
    },
    "MH.MH.EB": {
      "outlines": [
        [M, 2423, 2757, Q, 2419, 2746, 2418, 2745, L, 2391, 2745, Q, 2392, 2754, 2385, 2761, 2381, 2765, 2373, 2770, 2375, 2771, 2384, 2792, 2391, 2807, 2401, 2807, 2443, 2792, 2443, 2791, 2438, 2774, 2438, 2757, Z, M, 2426, 2787, L, 2408, 2787, 2408, 2797, 2404, 2794, Q, 2391, 2791, 2391, 2780, 2391, 2774, 2401, 2760, 2406, 2762, 2413, 2770, 2420, 2778, 2426, 2780, Z]
      ],
      "label": "Ebon",
      "shortLabel": "EB",
      "labelPosition": [251, 276.8],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [
        [M, 2510, 2768, L, 2424, 2768]
      ]
    },
    "MH.MH.AI": {
      "outlines": [
        [M, 2498, 1970, L, 2463, 1970, Q, 2452, 1980, 2410, 1994, 2365, 2010, 2351, 2020, L, 2351, 2035, Q, 2354, 2037, 2355, 2039, 2360, 2049, 2381, 2065, 2387, 2074, 2414, 2077, 2419, 2087, 2422, 2087, 2428, 2087, 2450, 2061, 2457, 2052, 2466, 2040, 2501, 1992, 2501, 1982, Q, 2498, 1972, 2498, 1970, Z, M, 2488, 1990, Q, 2478, 1996, 2468, 2008, 2448, 2031, 2448, 2060, 2433, 2065, 2423, 2065, 2397, 2065, 2396, 2055, 2388, 2055, 2378, 2049, 2368, 2042, 2368, 2035, 2368, 2033, 2413, 2017, 2458, 2002, 2458, 1995, 2458, 1982, 2474, 1982, Q, 2488, 1982, 2488, 1990, Z]
      ],
      "label": "Ailinglapalap",
      "shortLabel": "AI",
      "labelPosition": [260, 200],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [
        [M, 2600, 2000, L, 2472, 2000]
      ]
    },
    "MH.MH.MI": {
      "outlines": [
        [M, 3335, 2383, L, 3335, 2382, Q, 3334, 2378, 3333, 2374, 3328, 2345, 3323, 2337, 3319, 2329, 3291, 2320, 3266, 2312, 3258, 2312, 3236, 2312, 3218, 2320, 3196, 2329, 3196, 2345, 3196, 2386, 3231, 2387, 3231, 2386, 3231, 2382, 3240, 2382, 3293, 2392, 3312, 2393, 3317, 2403, Q, 3329, 2393, 3335, 2383, Z, M, 3251, 2340, L, 3251, 2330, 3296, 2330, Q, 3302, 2343, 3316, 2385, 3304, 2385, 3301, 2383, 3288, 2385, 3276, 2378, 3259, 2370, 3251, 2370, 3235, 2370, 3225, 2359, 3216, 2349, 3216, 2340, Z]
      ],
      "label": "Mili",
      "shortLabel": "MI",
      "labelPosition": [331.5, 225.8],
      "labelAlignment": [CEN, TOP],
      "labelConnectors": [
        [M, 3315, 2258, L, 3315, 2347]
      ]
    },
    "MH.MH.KN": {
      "outlines": [
        [M, 3318, 2407, Q, 3319, 2428, 3333, 2437, L, 3346, 2437, 3346, 2405, Q, 3339, 2399, 3335, 2382, L, 3335, 2383, Q, 3332, 2394, 3318, 2407, Z]
      ],
      "label": "Knox",
      "shortLabel": "KN",
      "labelPosition": [341.8, 241],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [
        [M, 3418, 2410, L, 3332, 2410]
      ]
    },
    "MH.MH.JL": {
      "outlines": [
        [M, 2606, 2310, Q, 2581, 2310, 2581, 2336, 2581, 2352, 2591, 2359, 2601, 2366, 2601, 2373, 2601, 2379, 2591, 2387, L, 2591, 2437, Q, 2598, 2444, 2617, 2451, 2633, 2460, 2636, 2477, L, 2653, 2477, Q, 2668, 2462, 2684, 2435, 2703, 2405, 2703, 2388, 2703, 2376, 2681, 2372, 2657, 2367, 2653, 2360, 2644, 2335, 2638, 2326, Q, 2628, 2310, 2606, 2310, Z, M, 2601, 2337, L, 2616, 2337, Q, 2629, 2366, 2678, 2402, L, 2678, 2417, Q, 2659, 2409, 2661, 2438, 2662, 2468, 2641, 2460, 2608, 2424, 2608, 2412, 2618, 2384, 2618, 2373, 2618, 2368, 2608, 2361, 2598, 2354, 2598, 2347, Q, 2601, 2340, 2601, 2337, Z]
      ],
      "label": "Jaluit",
      "shortLabel": "JL",
      "labelPosition": [278.2, 239.2],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [
        [M, 2782, 2392, L, 2676, 2392]
      ]
    },
    "MH.MH.MJ": {
      "outlines": [
        [M, 3058, 2070, L, 3031, 2070, Q, 3021, 2072, 3021, 2091, 3021, 2097, 3026, 2115, 3057, 2117, 3071, 2142, L, 3081, 2142, Q, 3088, 2138, 3104, 2123, 3120, 2111, 3133, 2115, L, 3133, 2095, Q, 3113, 2074, 3101, 2071, Q, 3096, 2070, 3058, 2070, Z, M, 3116, 2097, L, 3118, 2100, Q, 3115, 2112, 3091, 2114, 3077, 2115, 3064, 2114, 3061, 2113, 3058, 2113, 3050, 2105, 3033, 2090, L, 3033, 2085, 3058, 2085, Q, 3099, 2097, 3116, 2097, Z]
      ],
      "label": "Majuro",
      "shortLabel": "MJ",
      "labelPosition": [296.4, 210.6],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [
        [M, 2964, 2106, L, 3031, 2106]
      ]
    },
    "MH.MH.AR": {
      "outlines": [
        [M, 3163, 2042, L, 3163, 2090, Q, 3157, 2086, 3148, 2088, 3138, 2090, 3138, 2098, 3138, 2107, 3153, 2114, 3168, 2122, 3168, 2145, L, 3236, 2145, Q, 3239, 2129, 3254, 2116, 3268, 2104, 3283, 2102, L, 3283, 2072, 3248, 2072, Q, 3244, 2082, 3241, 2084, 3239, 2085, 3229, 2085, 3215, 2085, 3191, 2042, Z, M, 3263, 2087, Q, 3268, 2107, 3228, 2107, L, 3228, 2125, Q, 3218, 2127, 3214, 2128, 3208, 2130, 3206, 2137, L, 3188, 2137, 3188, 2127, Q, 3166, 2127, 3166, 2103, 3175, 2079, 3178, 2067, 3209, 2082, 3216, 2102, L, 3238, 2102, Q, 3243, 2092, 3243, 2087, Z]
      ],
      "label": "Arno ",
      "shortLabel": "AR",
      "labelPosition": [330.6, 205.2],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [
        [M, 3306, 2052, L, 3180, 2052]
      ]
    },
    "MH.MH.ME": {
      "outlines": [
        [M, 2953, 1247, L, 2953, 1260, Q, 2958, 1265, 2958, 1272, L, 2971, 1272, Q, 2977, 1267, 2980, 1268, 2981, 1268, 2981, 1261, 2981, 1250, 2966, 1247, Z]
      ],
      "label": "Mejit",
      "shortLabel": "ME",
      "labelPosition": [306.4, 126],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [
        [M, 3064, 1260, L, 2967, 1260]
      ]
    },
    "MH.MH.ML": {
      "outlines": [
        [M, 2959, 1622, Q, 2945, 1629, 2941, 1632, 2948, 1637, 2963, 1664, 2975, 1684, 2993, 1687, 3011, 1690, 3032, 1716, 3047, 1735, 3054, 1742, L, 3071, 1742, Q, 3066, 1721, 3066, 1713, 3066, 1697, 3068, 1692, L, 3081, 1692, Q, 3083, 1687, 3083, 1681, 3083, 1655, 3043, 1630, 3004, 1605, 2971, 1605, L, 2966, 1605, Q, 2970, 1615, 2959, 1622, Z, M, 2986, 1632, Q, 3055, 1661, 3063, 1662, L, 3063, 1680, Q, 3061, 1682, 3043, 1682, L, 3043, 1715, Q, 2990, 1669, 2968, 1645, L, 2968, 1632, Z],
        [M, 3046, 1765, Q, 3035, 1763, 3031, 1757, 3026, 1752, 3017, 1752, 3003, 1752, 3003, 1765, 3003, 1776, 3018, 1785, 3026, 1790, 3041, 1797, 3036, 1802, 3036, 1805, 3022, 1803, 3016, 1792, L, 3003, 1792, 3003, 1805, Q, 3002, 1816, 3036, 1827, 3031, 1832, 3031, 1835, L, 3071, 1835, 3076, 1832, Q, 3067, 1794, 3068, 1775, 3068, 1765, 3060, 1764, Q, 3049, 1765, 3046, 1765, Z]
      ],
      "label": "Maloelap",
      "shortLabel": "ML",
      "labelPosition": [313.4, 163.8],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [
        [M, 3134, 1638, L, 3032, 1638]
      ]
    },
    "MH.MH.ER": {
      "outlines": [
        [M, 2773, 1582, Q, 2773, 1565, 2758, 1559, 2742, 1552, 2738, 1532, L, 2723, 1532, Q, 2701, 1548, 2701, 1555, 2701, 1566, 2728, 1582, 2736, 1595, 2739, 1611, 2740, 1617, 2753, 1617, Q, 2773, 1617, 2773, 1582, Z, M, 2756, 1600, Q, 2748, 1596, 2738, 1582, 2728, 1569, 2718, 1565, L, 2718, 1557, 2741, 1557, Q, 2756, 1582, 2756, 1600, Z]
      ],
      "label": "Erikub",
      "shortLabel": "ER",
      "labelPosition": [274.7, 168.4],
      "labelAlignment": [CEN, BTM],
      "labelConnectors": [
        [M, 2747, 1684, L, 2747, 1605]
      ]
    },
    "MH.MH.WJ": {
      "outlines": [
        [M, 2779, 1442, Q, 2761, 1442, 2759, 1452, 2758, 1462, 2743, 1462, 2724, 1462, 2718, 1452, L, 2698, 1452, 2698, 1465, Q, 2703, 1465, 2703, 1470, 2695, 1468, 2690, 1468, 2681, 1469, 2681, 1478, 2681, 1511, 2731, 1525, 2731, 1535, 2762, 1512, 2768, 1512, 2783, 1517, 2795, 1517, 2802, 1507, 2809, 1498, 2818, 1497, L, 2818, 1485, Q, 2816, 1483, 2802, 1462, Q, 2790, 1442, 2779, 1442, Z, M, 2768, 1475, L, 2781, 1475, Q, 2781, 1482, 2786, 1487, L, 2786, 1492, 2751, 1492, Q, 2753, 1503, 2736, 1515, L, 2716, 1515, Q, 2720, 1490, 2703, 1485, 2702, 1472, 2722, 1472, 2727, 1472, 2744, 1477, Q, 2761, 1480, 2768, 1475, Z]
      ],
      "label": "Wotje",
      "shortLabel": "WJ",
      "labelPosition": [289.8, 146.4],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [
        [M, 2898, 1464, L, 2792, 1464]
      ]
    },
    "MH.MH.UT": {
      "outlines": [
        [M, 2655, 998, Q, 2656, 1020, 2653, 1025, L, 2653, 1025, Q, 2657, 1029, 2659, 1033, 2662, 1038, 2663, 1039, L, 2663, 1035, Q, 2681, 1039, 2688, 1030, 2700, 1017, 2713, 1012, 2706, 990, 2669, 982, Q, 2654, 982, 2655, 998, Z, M, 2681, 997, Q, 2695, 1006, 2691, 1015, 2683, 1017, 2668, 1017, 2668, 1015, 2666, 1009, 2666, 1002, 2668, 997, Z]
      ],
      "label": "Utirik",
      "shortLabel": "UT",
      "labelPosition": [281.6, 100],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [
        [M, 2816, 1000, L, 2696, 1000]
      ]
    },
    "MH.MH.LK": {
      "outlines": [
        [M, 2688, 1290, L, 2708, 1290, Q, 2711, 1293, 2718, 1300, L, 2743, 1300, Q, 2743, 1285, 2746, 1254, L, 2746, 1225, Q, 2734, 1226, 2727, 1212, 2719, 1197, 2712, 1197, 2701, 1197, 2701, 1212, 2706, 1216, 2706, 1222, 2706, 1234, 2692, 1247, 2678, 1259, 2678, 1261, Q, 2688, 1276, 2688, 1290, Z, M, 2736, 1262, Q, 2736, 1274, 2726, 1282, L, 2706, 1282, 2706, 1265, Q, 2711, 1245, 2711, 1230, Q, 2736, 1242, 2736, 1262, Z],
        [M, 2616, 1305, Q, 2601, 1305, 2601, 1321, 2601, 1353, 2641, 1325, Q, 2631, 1305, 2616, 1305, Z],
        [M, 2458, 1320, L, 2458, 1332, Q, 2461, 1335, 2470, 1361, 2478, 1382, 2489, 1382, 2493, 1382, 2498, 1379, 2498, 1378, 2498, 1378, 2496, 1366, 2488, 1362, L, 2488, 1350, Q, 2500, 1358, 2524, 1369, 2544, 1380, 2546, 1397, L, 2498, 1397, Q, 2506, 1415, 2522, 1415, 2529, 1415, 2553, 1405, 2578, 1394, 2578, 1389, 2578, 1377, 2537, 1350, 2504, 1328, 2486, 1320, Z]
      ],
      "label": "Likiep",
      "shortLabel": "LK",
      "labelPosition": [235.2, 133.6],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [
        [M, 2352, 1336, L, 2482, 1336]
      ]
    },
    "MH.MH.KW": {
      "outlines": [
        [M, 2058, 1772, Q, 2043, 1772, 2043, 1791, 2043, 1805, 2058, 1808, 2073, 1810, 2073, 1791, 2073, 1787, 2068, 1780, Q, 2063, 1772, 2058, 1772, Z]
      ],
      "label": "Kwajalein",
      "shortLabel": "KW",
      "labelPosition": [196.5, 178.4],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [
        [M, 1965, 1784, L, 2059, 1784]
      ]
    },
    "MH.MH.EE": {
      "outlines": [
        [M, 1946, 1525, Q, 1943, 1525, 1909, 1507, 1898, 1507, 1896, 1525, 1921, 1535, 1931, 1545, L, 1948, 1545, Q, 1946, 1530, 1946, 1525, Z],
        [M, 2137, 1567, L, 2121, 1557, Q, 2095, 1521, 2088, 1512, 2078, 1500, 2061, 1500, 2050, 1500, 2036, 1511, 2021, 1522, 2013, 1522, 2007, 1522, 1999, 1515, 1992, 1507, 1986, 1507, 1977, 1507, 1963, 1517, L, 1963, 1522, Q, 1973, 1520, 2004, 1530, 2011, 1530, 2063, 1517, 2085, 1517, 2116, 1565, 2146, 1610, 2146, 1636, 2146, 1651, 2136, 1662, 2116, 1660, 2108, 1646, 2105, 1641, 2103, 1634, 2100, 1604, 2093, 1592, 2089, 1590, 2078, 1578, 2071, 1569, 2053, 1567, 2042, 1566, 2027, 1558, 2014, 1550, 2006, 1550, 1986, 1550, 1986, 1571, 1986, 1597, 2025, 1602, 2046, 1604, 2076, 1605, 2086, 1609, 2106, 1646, 2126, 1682, 2133, 1682, 2153, 1682, 2153, 1625, 2153, 1599, 2151, 1585, Q, 2149, 1574, 2137, 1567, Z]
      ],
      "label": "Ebeya",
      "shortLabel": "EE",
      "labelPosition": [193.2, 143.9],
      "labelAlignment": [CEN, TOP],
      "labelConnectors": [
        [M, 1932, 1530, L, 1932, 1439]
      ]
    },
    "MH.MH.RR": {
      "outlines": [
        [M, 2096, 965, Q, 2073, 962, 2067, 962, 2057, 962, 2046, 970, 2033, 978, 2033, 989, 2033, 998, 2048, 1012, 2063, 1027, 2074, 1027, 2103, 1027, 2103, 1007, Q, 2103, 993, 2096, 965, Z, M, 2073, 1012, Q, 2051, 1012, 2051, 990, 2051, 975, 2067, 975, 2096, 975, 2096, 996, Q, 2096, 1012, 2073, 1012, Z]
      ],
      "label": "Rongrik",
      "shortLabel": "RR",
      "labelPosition": [206.8, 108.6],
      "labelAlignment": [CEN, BTM],
      "labelConnectors": [
        [M, 2068, 1086, L, 2068, 1017]
      ]
    },
    "MH.MH.RL": {
      "outlines": [
        [M, 1758, 1022, Q, 1756, 1037, 1756, 1044, 1756, 1063, 1768, 1062, 1766, 1067, 1766, 1072, 1831, 1077, 1843, 1077, L, 1843, 1045, Q, 1836, 1034, 1836, 1027, 1813, 1027, 1788, 1022, Z, M, 1833, 1042, Q, 1824, 1055, 1796, 1058, 1766, 1061, 1768, 1040, L, 1813, 1040, Q, 1818, 1042, 1833, 1042, Z],
        [M, 1943, 1012, Q, 1945, 1002, 1962, 992, 1978, 983, 1978, 971, 1978, 940, 1912, 940, 1876, 940, 1863, 957, 1852, 975, 1850, 985, 1848, 992, 1848, 1017, 1848, 1030, 1891, 1050, L, 1906, 1050, Q, 1910, 1041, 1926, 1037, Q, 1939, 1034, 1943, 1012, Z, M, 1948, 984, Q, 1933, 991, 1923, 987, 1923, 997, 1913, 1012, 1905, 1022, 1913, 1035, 1903, 1041, 1886, 1026, 1871, 1012, 1871, 1002, 1871, 996, 1876, 986, 1882, 974, 1888, 972, 1901, 969, 1926, 957, 1963, 960, 1963, 970, Q, 1963, 977, 1948, 984, Z]
      ],
      "label": "Rongelap",
      "shortLabel": "RL",
      "labelPosition": [189.4, 89.2],
      "labelAlignment": [CEN, TOP],
      "labelConnectors": [
        [M, 1894, 892, L, 1894, 956]
      ]
    },
    "MH.MH.TO": {
      "outlines": [
        [M, 2618, 1024, Q, 2598, 1024, 2598, 1035, 2598, 1043, 2617, 1060, 2636, 1077, 2646, 1077, 2643, 1074, 2643, 1070, 2658, 1070, 2663, 1067, L, 2663, 1039, Q, 2662, 1037, 2661, 1034, 2658, 1028, 2653, 1025, Q, 2649, 1025, 2618, 1024, Z, M, 2634, 1040, Q, 2654, 1040, 2641, 1062, 2623, 1049, 2621, 1047, Q, 2622, 1040, 2634, 1040, Z]
      ],
      "label": "Toke",
      "shortLabel": "TO",
      "labelPosition": [248.8, 104],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [
        [M, 2488, 1040, L, 2616, 1040]
      ]
    },
    "MH.MH.TA": {
      "outlines": [
        [M, 2432, 158, Q, 2422, 174, 2422, 201, 2446, 210, 2460, 194, 2472, 181, 2472, 161, 2472, 157, 2462, 141, L, 2424, 141, 2424, 146, Q, 2432, 156, 2432, 158, Z]
      ],
      "label": "Taongi",
      "shortLabel": "TA",
      "labelPosition": [262.4, 16.8],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [
        [M, 2624, 168, L, 2448, 168]
      ]
    },
    "MH.MH.BR": {
      "outlines": [
        [M, 2771, 735, L, 2731, 735, Q, 2728, 757, 2726, 765, L, 2726, 777, 2761, 777, Q, 2761, 769, 2773, 746, Q, 2773, 740, 2771, 735, Z]
      ],
      "label": "Bikar",
      "shortLabel": "BR",
      "labelPosition": [274.9, 61.6],
      "labelAlignment": [CEN, TOP],
      "labelConnectors": [
        [M, 2749, 616, L, 2749, 760]
      ]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'marshallisland',
  type: 'maps'
};