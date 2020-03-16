/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Sonora.20.10-30-2012 08:25:28
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
  "name": "Sonora",
  "revision": 20,
  "standaloneInit": true,
  "baseWidth": 420,
  "baseHeight": 460,
  "baseScaleFactor": 10,
  "entities": {
    "MX.SO.AL": {
      "outlines": [
        [M, 2244, 1036, Q, 2244, 1027, 2241, 1006, 2241, 1005, 2240, 1004, 2240, 1002, 2240, 1000, L, 2241, 997, 322, 157, 320, 161, Q, 293, 169, 298, 192, L, 246, 192, Q, 239, 195, 235, 200, 233, 203, 233, 221, 234, 238, 224, 249, 212, 256, 205, 260, 194, 269, 193, 281, L, 195, 284, Q, 196, 296, 203, 304, 211, 312, 211, 319, 211, 328, 210, 330, 209, 331, 195, 338, 194, 354, 207, 359, 219, 365, 219, 377, 206, 415, 206, 424, 211, 432, 211, 437, 211, 451, 201, 486, 193, 515, 188, 524, 229, 535, 241, 544, 279, 567, 294, 579, 330, 604, 345, 616, 372, 636, 379, 656, 401, 654, 423, 667, 445, 682, 456, 687, 472, 705, 485, 718, 509, 744, 520, 744, 521, 744, 579, 796, 637, 849, 676, 849, 699, 849, 706, 847, 722, 842, 728, 820, 730, 812, 723, 806, 715, 800, 715, 794, 715, 790, 726, 768, 736, 759, 754, 759, L, 754, 750, Q, 773, 765, 817, 783, 854, 799, 866, 814, 874, 824, 893, 832, 911, 839, 914, 845, 923, 859, 923, 902, 923, 934, 936, 961, 955, 997, 1026, 1009, 1049, 1013, 1097, 1014, 1132, 1015, 1146, 1019, 1147, 1020, 1148, 1020, L, 1148, 1021, Q, 1149, 1021, 1150, 1022, 1159, 1028, 1177, 1047, 1196, 1067, 1210, 1070, 1239, 1079, 1244, 1083, 1252, 1089, 1251, 1108, 1252, 1144, 1246, 1151, 1245, 1153, 1243, 1154, 1225, 1168, 1223, 1180, 1218, 1205, 1214, 1208, L, 1197, 1208, Q, 1196, 1201, 1196, 1195, 1199, 1180, 1194, 1174, 1193, 1166, 1191, 1183, 1188, 1191, 1192, 1202, 1198, 1299, 1194, 1340, 1191, 1384, 1204, 1420, 1221, 1461, 1230, 1482, L, 1236, 1482, Q, 1279, 1543, 1293, 1557, 1310, 1573, 1315, 1594, 1317, 1607, 1317, 1641, 1317, 1683, 1335, 1698, 1360, 1719, 1372, 1758, L, 1372, 1796, 1361, 1796, 1361, 1831, 1374, 1831, 1374, 1901, Q, 1373, 1913, 1386, 1921, 1398, 1929, 1398, 1948, 1394, 1963, 1394, 1969, 1395, 1975, 1397, 1979, 1400, 1985, 1410, 1993, 1418, 2001, 1416, 2008, L, 1427, 2008, Q, 1427, 2016, 1431, 2027, 1436, 2038, 1436, 2050, 1435, 2055, 1434, 2059, L, 1433, 2087, 1457, 2087, Q, 1460, 2107, 1462, 2118, 1473, 2111, 1479, 2123, 1484, 2134, 1482, 2148, 1492, 2149, 1517, 2167, 1541, 2185, 1541, 2188, 1541, 2234, 1534, 2251, 1530, 2262, 1518, 2274, L, 1513, 2281, 1530, 2281, Q, 1550, 2285, 1612, 2291, 1671, 2297, 1683, 2297, 1700, 2299, 1717, 2301, 1749, 2304, 1751, 2301, 1750, 2301, 1748, 2300, L, 1751, 2300, Q, 1751, 2301, 1751, 2301, 1796, 2307, 1827, 2272, 1855, 2256, 1860, 2247, 1870, 2232, 1872, 2230, 1879, 2223, 1889, 2225, 1905, 2212, 1910, 2200, 1913, 2192, 1918, 2191, 1935, 2186, 1952, 2172, 1966, 2163, 1977, 2155, 1998, 2139, 1998, 2131, 2047, 2090, 2053, 2086, 2064, 2079, 2082, 2068, 2087, 2065, 2092, 2062, 2103, 2051, 2106, 2043, 2107, 2042, 2108, 2040, 2111, 2035, 2115, 2025, 2122, 2015, 2134, 2012, 2156, 2005, 2165, 1982, 2175, 1957, 2174, 1937, 2173, 1926, 2181, 1915, 2190, 1904, 2190, 1892, 2193, 1863, 2196, 1825, 2199, 1811, 2208, 1797, L, 2209, 1796, Q, 2211, 1790, 2212, 1783, 2213, 1783, 2213, 1782, 2216, 1767, 2216, 1747, 2216, 1736, 2202, 1713, 2188, 1690, 2187, 1682, L, 2183, 1608, Q, 2183, 1572, 2193, 1513, 2194, 1512, 2194, 1511, 2210, 1473, 2216, 1423, 2219, 1393, 2222, 1335, 2224, 1329, 2231, 1314, 2236, 1301, 2235, 1292, 2234, 1279, 2238, 1254, 2238, 1226, 2242, 1202, 2246, 1179, 2246, 1165, 2247, 1145, 2240, 1138, L, 2238, 1099, Q, 2238, 1070, 2244, 1036, Z]
      ],
      "label": "Altar",
      "shortLabel": "AL",
      "labelPosition": [151.8, 123],
      "labelAlignment": [CEN, MID]
    },
    "MX.SO.MG": {
      "outlines": [
        [M, 2665, 1076, L, 2415, 1061, Q, 2414, 1062, 2413, 1062, 2410, 1061, 2407, 1061, 2364, 1056, 2349, 1048, 2328, 1038, 2293, 1026, 2266, 1017, 2249, 1010, 2245, 1008, 2241, 1006, 2244, 1027, 2244, 1036, 2238, 1070, 2238, 1099, L, 2240, 1138, Q, 2247, 1145, 2246, 1165, 2246, 1179, 2242, 1202, 2238, 1226, 2238, 1254, 2234, 1279, 2235, 1292, 2236, 1301, 2231, 1314, 2224, 1329, 2222, 1335, 2219, 1393, 2216, 1423, 2210, 1473, 2194, 1511, 2194, 1512, 2193, 1513, 2183, 1572, 2183, 1608, L, 2187, 1682, Q, 2188, 1690, 2202, 1713, 2216, 1736, 2216, 1747, 2216, 1767, 2213, 1782, L, 2700, 1782, Q, 2704, 1765, 2704, 1712, 2704, 1624, 2680, 1592, 2668, 1576, 2664, 1565, 2656, 1544, 2656, 1500, 2656, 1469, 2683, 1444, 2697, 1432, 2713, 1419, 2667, 1399, 2657, 1372, 2652, 1358, 2652, 1296, 2652, 1179, 2665, 1108, Z]
      ],
      "label": "Magdalena",
      "shortLabel": "MG",
      "labelPosition": [244.8, 139.4],
      "labelAlignment": [CEN, MID]
    },
    "MX.SO.AR": {
      "outlines": [
        [M, 3275, 1402, Q, 3284, 1352, 3283, 1254, 3282, 1147, 3287, 1112, L, 2665, 1076, 2665, 1108, Q, 2652, 1179, 2652, 1296, 2652, 1358, 2657, 1372, 2667, 1399, 2713, 1419, 2697, 1432, 2683, 1444, 2656, 1469, 2656, 1500, 2656, 1544, 2664, 1565, 2668, 1576, 2680, 1592, 2704, 1624, 2704, 1712, 2704, 1765, 2700, 1782, L, 2696, 1782, Q, 2697, 1799, 2702, 1824, 2706, 1839, 2707, 1848, 2692, 1863, 2683, 1900, 2677, 1941, 2674, 1953, 2634, 2050, 2634, 2067, 2639, 2120, 2639, 2146, 2649, 2152, 2681, 2156, 2710, 2165, 2722, 2199, L, 2726, 2199, Q, 2739, 2247, 2739, 2251, 2761, 2252, 2809, 2256, 2820, 2256, 2827, 2247, 2837, 2234, 2845, 2230, 2850, 2227, 2868, 2224, L, 2871, 2210, 2871, 2210, Q, 2872, 2207, 2873, 2204, 2937, 1982, 2937, 1925, 2937, 1914, 2928, 1859, 2928, 1824, 2936, 1803, 2938, 1797, 2952, 1772, 2975, 1733, 2967, 1647, L, 2976, 1647, 2976, 1642, Q, 3017, 1616, 3020, 1577, 3055, 1572, 3138, 1577, 3176, 1577, 3230, 1493, 3248, 1475, 3263, 1428, Q, 3268, 1414, 3275, 1402, Z]
      ],
      "label": "Arizpe",
      "shortLabel": "AR",
      "labelPosition": [291.1, 147.6],
      "labelAlignment": [CEN, MID]
    },
    "MX.SO.MO": {
      "outlines": [
        [M, 3592, 1130, L, 3287, 1112, Q, 3282, 1147, 3283, 1254, 3284, 1352, 3275, 1402, 3268, 1414, 3263, 1428, 3248, 1475, 3230, 1493, 3176, 1577, 3138, 1577, 3055, 1572, 3020, 1577, 3017, 1616, 2976, 1642, L, 2976, 1647, 2968, 1647, Q, 2975, 1733, 2953, 1772, 2938, 1797, 2936, 1803, 2928, 1824, 2928, 1859, 2937, 1914, 2937, 1925, 2937, 1982, 2873, 2204, 2872, 2207, 2871, 2210, L, 2871, 2223, Q, 2948, 2245, 2954, 2246, 2964, 2247, 3012, 2247, 3041, 2273, 3045, 2311, 3049, 2353, 3068, 2370, 3075, 2376, 3131, 2388, 3185, 2406, 3191, 2445, L, 3398, 2445, 3613, 2462, 3649, 2462, 3653, 2461, Q, 3638, 2410, 3638, 2402, 3638, 2370, 3655, 2370, 3658, 2370, 3667, 2374, L, 3697, 2374, Q, 3706, 2339, 3708, 2280, 3711, 2265, 3723, 2228, 3733, 2200, 3732, 2182, 3731, 2116, 3737, 1982, L, 3737, 1973, Q, 3735, 1933, 3734, 1889, L, 3735, 1880, 3706, 1669, 3593, 1130, Z]
      ],
      "label": "Moctezuma",
      "shortLabel": "MO",
      "labelPosition": [337.4, 180.7],
      "labelAlignment": [CEN, MID]
    },
    "MX.SO.HE": {
      "outlines": [
        [M, 1541, 2399, Q, 1525, 2414, 1521, 2416, 1506, 2425, 1464, 2425, 1460, 2464, 1449, 2471, 1440, 2477, 1440, 2506, 1440, 2523, 1452, 2529, 1464, 2534, 1464, 2556, 1464, 2582, 1418, 2613, L, 1418, 2629, Q, 1427, 2630, 1431, 2632, 1437, 2636, 1434, 2648, 1453, 2651, 1493, 2679, 1536, 2710, 1565, 2720, 1581, 2715, 1581, 2697, 1581, 2665, 1594, 2655, 1612, 2639, 1617, 2618, 1620, 2606, 1620, 2568, 1625, 2526, 1620, 2510, 1613, 2490, 1603, 2487, 1596, 2485, 1596, 2469, 1598, 2429, 1596, 2416, 1592, 2394, 1565, 2394, Q, 1547, 2394, 1541, 2399, Z],
        [M, 2411, 2335, Q, 2409, 2335, 2407, 2334, 2403, 2334, 2400, 2334, 2332, 2327, 2309, 2323, 2229, 2307, 2208, 2247, 2207, 2244, 2206, 2242, 2206, 2240, 2206, 2239, 2206, 2213, 2197, 2203, 2176, 2181, 2170, 2160, 2160, 2149, 2138, 2107, 2124, 2080, 2083, 2068, 2064, 2079, 2054, 2086, 2047, 2090, 1999, 2132, 1998, 2139, 1977, 2155, 1966, 2163, 1953, 2172, 1935, 2186, 1918, 2191, 1913, 2192, 1910, 2200, 1905, 2212, 1890, 2226, 1879, 2223, 1872, 2230, 1870, 2232, 1860, 2247, 1855, 2256, 1827, 2272, 1796, 2307, 1751, 2301, 1749, 2304, 1718, 2301, 1700, 2299, 1683, 2297, 1671, 2297, 1612, 2291, 1550, 2285, 1530, 2281, L, 1511, 2281, Q, 1505, 2287, 1497, 2293, 1502, 2300, 1530, 2331, 1537, 2344, 1550, 2344, 1557, 2344, 1565, 2339, 1574, 2335, 1579, 2335, 1610, 2335, 1622, 2370, 1627, 2390, 1633, 2431, 1633, 2432, 1633, 2434, 1635, 2501, 1655, 2515, 1657, 2550, 1659, 2574, 1659, 2576, 1659, 2579, L, 1659, 2587, Q, 1666, 2585, 1675, 2590, 1684, 2593, 1688, 2594, 1703, 2593, 1704, 2624, 1705, 2655, 1723, 2659, 1754, 2661, 1769, 2664, 1796, 2669, 1791, 2686, L, 1802, 2686, Q, 1809, 2685, 1811, 2679, L, 1837, 2679, Q, 1841, 2683, 1841, 2692, L, 1839, 2697, Q, 1829, 2698, 1818, 2704, 1806, 2711, 1806, 2717, 1806, 2726, 1841, 2754, 1877, 2783, 1881, 2812, L, 1881, 2813, Q, 1879, 2843, 1880, 2859, 1881, 2859, 1882, 2860, 1891, 2870, 1907, 2896, 1908, 2897, 1925, 2905, 1939, 2912, 1940, 2916, 1949, 2919, 1987, 2943, 2011, 2958, 2043, 2953, 2040, 2987, 2047, 3007, 2053, 3026, 2073, 3051, 2081, 3061, 2096, 3090, 2102, 3065, 2115, 3051, 2129, 3040, 2135, 3032, 2143, 3018, 2190, 3005, 2207, 3000, 2229, 2979, 2254, 2952, 2268, 2938, 2307, 2932, 2315, 2929, L, 2322, 2921, Q, 2328, 2914, 2336, 2911, 2354, 2905, 2378, 2887, 2415, 2859, 2428, 2856, 2431, 2855, 2453, 2854, L, 2767, 2910, 2768, 3047, 2936, 3092, 3073, 3024, Q, 3071, 2979, 3055, 2979, 3048, 2979, 3051, 2935, L, 3055, 2861, 3051, 2861, Q, 3047, 2848, 3035, 2840, 3020, 2831, 3013, 2826, 2987, 2809, 2985, 2773, 2985, 2769, 2985, 2764, 2985, 2763, 2985, 2762, L, 3000, 2745, Q, 2969, 2717, 2916, 2690, 2862, 2662, 2840, 2642, 2782, 2586, 2778, 2537, 2777, 2527, 2765, 2525, 2755, 2523, 2696, 2523, 2594, 2532, 2577, 2532, 2571, 2507, 2564, 2449, 2556, 2391, 2551, 2370, 2508, 2370, 2437, 2335, Z]
      ],
      "label": "Hermosillo",
      "shortLabel": "HE",
      "labelPosition": [224.5, 258],
      "labelAlignment": [CEN, MID]
    },
    "MX.SO.UR": {
      "outlines": [
        [M, 2674, 1953, Q, 2677, 1941, 2683, 1900, 2692, 1863, 2707, 1848, 2706, 1839, 2702, 1824, 2697, 1799, 2696, 1782, L, 2213, 1782, Q, 2213, 1783, 2212, 1783, 2211, 1790, 2209, 1796, L, 2208, 1797, Q, 2199, 1811, 2196, 1825, 2193, 1863, 2190, 1892, 2190, 1904, 2181, 1915, 2173, 1926, 2174, 1937, 2175, 1957, 2165, 1982, 2156, 2005, 2134, 2012, 2122, 2015, 2115, 2025, 2111, 2035, 2108, 2040, 2107, 2042, 2106, 2043, 2103, 2051, 2092, 2062, 2087, 2065, 2082, 2068, 2124, 2080, 2138, 2106, 2160, 2149, 2170, 2159, 2176, 2181, 2196, 2202, 2206, 2213, 2206, 2238, 2206, 2240, 2206, 2241, 2207, 2244, 2207, 2247, 2229, 2307, 2309, 2322, 2332, 2327, 2399, 2333, 2403, 2334, 2406, 2334, 2409, 2335, 2411, 2335, L, 2437, 2335, Q, 2508, 2370, 2551, 2370, 2556, 2391, 2564, 2449, 2571, 2507, 2577, 2532, 2594, 2532, 2696, 2523, 2755, 2523, 2765, 2525, 2777, 2527, 2778, 2537, 2782, 2586, 2840, 2641, 2862, 2662, 2916, 2690, 2969, 2717, 3000, 2745, L, 2985, 2762, Q, 2985, 2763, 2985, 2764, 2985, 2769, 2985, 2773, 2987, 2809, 3012, 2826, 3020, 2831, 3035, 2840, 3047, 2848, 3051, 2861, L, 3055, 2861, 3051, 2930, 3099, 2931, Q, 3112, 2944, 3173, 2944, L, 3195, 2944, Q, 3182, 2939, 3179, 2927, 3178, 2922, 3178, 2900, 3178, 2880, 3191, 2832, 3204, 2783, 3204, 2771, 3204, 2753, 3139, 2717, 3052, 2669, 3051, 2668, 3054, 2664, 3069, 2655, 3085, 2646, 3090, 2646, 3146, 2513, 3201, 2445, L, 3191, 2444, Q, 3185, 2406, 3131, 2388, 3075, 2376, 3068, 2370, 3049, 2353, 3045, 2311, 3041, 2273, 3012, 2247, 2964, 2247, 2954, 2245, 2948, 2245, 2870, 2223, L, 2870, 2223, Q, 2869, 2223, 2867, 2223, 2866, 2224, 2865, 2224, 2850, 2227, 2845, 2230, 2837, 2234, 2827, 2247, 2820, 2256, 2809, 2256, 2761, 2252, 2739, 2251, 2739, 2247, 2726, 2199, L, 2722, 2199, Q, 2710, 2165, 2681, 2156, 2649, 2152, 2639, 2146, 2639, 2120, 2634, 2067, Q, 2634, 2050, 2674, 1953, Z]
      ],
      "label": "Ures",
      "shortLabel": "UR",
      "labelPosition": [246.3, 213.3],
      "labelAlignment": [CEN, MID]
    },
    "MX.SO.SH": {
      "outlines": [
        [M, 3613, 2462, L, 3398, 2444, 3200, 2444, Q, 3198, 2446, 3196, 2448, 3146, 2513, 3090, 2646, 3085, 2646, 3069, 2655, 3054, 2664, 3051, 2668, 3052, 2669, 3139, 2717, 3204, 2753, 3204, 2771, 3204, 2783, 3191, 2832, 3178, 2880, 3178, 2900, 3178, 2922, 3179, 2927, 3182, 2939, 3195, 2944, L, 3173, 2944, Q, 3112, 2944, 3099, 2931, L, 3051, 2930, 3051, 2935, Q, 3048, 2979, 3055, 2979, 3071, 2979, 3072, 3024, 3073, 3027, 3072, 3029, 3073, 3074, 3067, 3096, 3067, 3097, 3067, 3098, 3048, 3160, 3075, 3100, 3095, 3067, 3110, 3067, 3123, 3067, 3134, 3073, 3145, 3080, 3145, 3088, 3145, 3094, 3147, 3095, L, 3377, 3095, Q, 3394, 3092, 3414, 3090, 3439, 3089, 3467, 3088, 3506, 3089, 3554, 3105, 3602, 3121, 3620, 3121, 3656, 3121, 3675, 3088, 3691, 3062, 3690, 3025, 3691, 3018, 3679, 2984, 3666, 2950, 3666, 2891, 3666, 2880, 3677, 2799, 3675, 2742, 3677, 2714, 3672, 2628, 3649, 2490, L, 3649, 2462, Z]
      ],
      "label": "Sahuaripa",
      "shortLabel": "SH",
      "labelPosition": [337, 278.3],
      "labelAlignment": [CEN, MID]
    },
    "MX.SO.AM": {
      "outlines": [
        [M, 3377, 3095, L, 3147, 3095, Q, 3145, 3094, 3145, 3089, 3145, 3080, 3134, 3073, 3123, 3067, 3110, 3067, 3095, 3067, 3075, 3101, 3063, 3122, 3058, 3136, 3048, 3174, 3046, 3185, 2992, 3199, 2976, 3216, 2970, 3229, 2950, 3254, 2932, 3274, 2932, 3284, 2932, 3295, 2941, 3391, 2941, 3428, 2936, 3511, 2928, 3613, 2921, 3630, 2911, 3661, 2902, 3709, 2899, 3724, 2897, 3735, 2896, 3740, 2895, 3745, 2889, 3771, 2858, 3801, 2856, 3803, 2852, 3819, 2850, 3829, 2829, 3832, L, 2827, 3832, Q, 2837, 3845, 2840, 3902, 2843, 3911, 2867, 3930, 2868, 3933, 2869, 3946, 2870, 3957, 2875, 3961, 2877, 3963, 2879, 3967, 2897, 4007, 2911, 4022, 2917, 4030, 2919, 4077, 2920, 4103, 2945, 4120, 2967, 4134, 2996, 4134, 3016, 4134, 3057, 4130, 3072, 4130, 3085, 4123, 3102, 4113, 3092, 4095, 3106, 4094, 3132, 4103, 3126, 4157, 3178, 4191, 3216, 4216, 3222, 4292, 3222, 4292, 3224, 4294, 3224, 4294, 3225, 4295, 3225, 4296, 3225, 4297, 3224, 4298, 3224, 4299, 3223, 4300, 3222, 4302, 3222, 4303, 3223, 4305, 3224, 4317, 3224, 4339, 3224, 4393, 3211, 4410, L, 3211, 4428, Q, 3213, 4430, 3217, 4430, 3226, 4430, 3272, 4386, 3285, 4379, 3297, 4372, 3318, 4361, 3333, 4351, 3341, 4346, 3383, 4326, 3416, 4310, 3443, 4287, 3450, 4282, 3501, 4237, 3529, 4211, 3557, 4193, 3575, 4182, 3607, 4149, 3635, 4119, 3651, 4107, 3651, 4104, 3654, 4102, 3662, 4094, 3670, 4080, 3682, 4060, 3688, 4055, 3696, 4050, 3703, 4019, 3710, 3992, 3710, 3982, 3710, 3966, 3686, 3939, 3662, 3914, 3664, 3891, 3665, 3879, 3639, 3851, 3612, 3821, 3612, 3810, 3631, 3734, 3631, 3733, 3631, 3715, 3623, 3707, L, 3623, 3696, Q, 3625, 3636, 3625, 3631, 3625, 3609, 3603, 3592, 3581, 3575, 3571, 3552, L, 3572, 3507, Q, 3572, 3495, 3566, 3489, 3557, 3480, 3555, 3477, 3549, 3464, 3525, 3452, 3504, 3442, 3504, 3426, L, 3472, 3371, Q, 3450, 3324, 3436, 3303, 3384, 3221, 3384, 3166, 3384, 3147, 3393, 3132, 3409, 3105, 3415, 3091, Q, 3394, 3092, 3377, 3095, Z]
      ],
      "label": "Alamos",
      "shortLabel": "AM",
      "labelPosition": [326.9, 374.8],
      "labelAlignment": [CEN, MID]
    },
    "MX.SO.GU": {
      "outlines": [
        [M, 2494, 3642, Q, 2485, 3641, 2483, 3628, L, 2474, 3628, 2474, 3669, Q, 2480, 3675, 2485, 3677, L, 2507, 3676, Q, 2503, 3663, 2503, 3653, Q, 2503, 3643, 2494, 3642, Z],
        [M, 3070, 3025, L, 2936, 3092, 2768, 3047, 2767, 2910, 2453, 2854, Q, 2431, 2855, 2428, 2856, 2415, 2859, 2378, 2887, 2354, 2905, 2336, 2911, 2328, 2914, 2322, 2921, L, 2315, 2929, Q, 2307, 2932, 2268, 2938, 2254, 2952, 2229, 2979, 2207, 3000, 2190, 3005, 2143, 3018, 2135, 3032, 2129, 3040, 2115, 3051, 2102, 3065, 2096, 3090, L, 2096, 3090, Q, 2097, 3091, 2097, 3092, 2098, 3093, 2098, 3094, 2110, 3117, 2126, 3152, 2128, 3156, 2135, 3175, 2144, 3193, 2157, 3200, 2164, 3204, 2175, 3208, 2186, 3212, 2198, 3227, 2202, 3231, 2211, 3232, 2219, 3232, 2225, 3238, 2238, 3251, 2247, 3251, 2272, 3251, 2281, 3260, 2295, 3274, 2299, 3277, 2297, 3281, 2304, 3301, L, 2297, 3301, Q, 2311, 3311, 2332, 3314, L, 2354, 3314, 2354, 3295, Q, 2331, 3272, 2328, 3244, L, 2350, 3244, Q, 2356, 3255, 2363, 3255, L, 2372, 3251, Q, 2382, 3251, 2390, 3272, 2397, 3294, 2422, 3295, 2436, 3295, 2452, 3308, 2466, 3321, 2480, 3321, 2491, 3321, 2492, 3320, 2492, 3313, 2492, 3301, L, 2503, 3301, Q, 2533, 3321, 2553, 3328, L, 2553, 3345, Q, 2541, 3345, 2523, 3352, 2498, 3360, 2499, 3376, 2499, 3390, 2510, 3420, 2511, 3431, 2517, 3435, 2523, 3438, 2523, 3447, 2523, 3455, 2499, 3463, 2474, 3471, 2474, 3488, 2474, 3498, 2479, 3516, L, 2501, 3516, Q, 2505, 3534, 2498, 3544, 2490, 3556, 2490, 3562, 2490, 3575, 2495, 3578, 2506, 3585, 2507, 3586, 2509, 3589, 2516, 3621, 2525, 3628, 2550, 3630, 2564, 3631, 2564, 3655, 2564, 3665, 2549, 3666, 2533, 3668, 2534, 3677, 2533, 3690, 2571, 3691, 2575, 3694, 2579, 3706, 2583, 3720, 2595, 3731, 2600, 3735, 2610, 3740, 2618, 3744, 2623, 3751, 2631, 3760, 2641, 3783, 2652, 3792, 2694, 3810, L, 2707, 3810, Q, 2721, 3828, 2740, 3832, 2747, 3834, 2780, 3834, 2806, 3834, 2827, 3832, 2828, 3832, 2829, 3832, 2850, 3829, 2852, 3819, 2856, 3803, 2858, 3801, 2889, 3771, 2895, 3745, 2896, 3740, 2897, 3735, 2899, 3724, 2902, 3709, 2911, 3661, 2921, 3630, 2928, 3613, 2936, 3511, 2941, 3428, 2941, 3391, 2932, 3295, 2932, 3284, 2932, 3274, 2950, 3254, 2970, 3229, 2976, 3216, 2992, 3199, 3046, 3185, 3048, 3174, 3058, 3136, 3062, 3120, 3067, 3099, 3067, 3097, 3067, 3096, 3073, 3074, 3073, 3030, Z]
      ],
      "label": "Guaymas",
      "shortLabel": "GU",
      "labelPosition": [267.4, 334.4],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'sonora',
  type: 'maps'
};