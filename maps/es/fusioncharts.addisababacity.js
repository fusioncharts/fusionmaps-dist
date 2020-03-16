/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.AddisAbabaCity.1.05-03-2017 12:10:07
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
  "name": "AddisAbabaCity",
  "revision": 1,
  "standaloneInit": true,
  "baseWidth": 600,
  "baseHeight": 590,
  "baseScaleFactor": 10,
  "entities": {
    "ET.AA.AD": {
      "outlines": [
        [M, 1874, 916, L, 1853, 916, Q, 1823, 915, 1776, 903, 1718, 889, 1712, 889, 1685, 887, 1633, 875, 1591, 865, 1564, 868, L, 1565, 868, 1565, 892, Q, 1557, 919, 1529, 992, 1488, 1093, 1484, 1104, 1464, 1157, 1433, 1232, 1411, 1290, 1411, 1337, 1411, 1372, 1413, 1376, 1435, 1418, 1441, 1431, 1453, 1475, 1465, 1492, L, 1517, 1583, Q, 1520, 1591, 1540, 1640, 1554, 1635, 1580, 1615, 1602, 1597, 1622, 1597, 1624, 1597, 1636, 1603, 1648, 1608, 1653, 1608, 1664, 1609, 1690, 1608, 1697, 1608, 1718, 1605, 1743, 1602, 1749, 1599, 1763, 1593, 1777, 1591, 1785, 1590, 1805, 1588, 1820, 1587, 1847, 1581, 1868, 1576, 1876, 1577, 1898, 1579, 1937, 1579, 1980, 1579, 2009, 1564, 2029, 1553, 2093, 1512, 2137, 1486, 2172, 1486, 2183, 1486, 2207, 1472, 2213, 1469, 2223, 1468, 2233, 1466, 2242, 1462, 2179, 1392, 2146, 1355, 2081, 1284, 2039, 1248, L, 1973, 1172, Q, 1957, 1158, 1944, 1145, 1921, 1120, 1917, 1105, 1915, 1098, 1886, 1036, 1866, 993, 1873, 958, Z]
      ],
      "label": "Addis Ketema",
      "shortLabel": "AD",
      "labelPosition": [167.4, 128.4],
      "labelAlignment": [CEN, MID]
    },
    "ET.AA.AK": {
      "outlines": [
        [M, 3367, 3464, Q, 3351, 3496, 3337, 3499, 3320, 3500, 3315, 3500, 3304, 3501, 3297, 3514, 3285, 3536, 3268, 3552, 3246, 3573, 3234, 3592, 3227, 3601, 3195, 3601, 3153, 3601, 3140, 3576, 3130, 3539, 3119, 3514, 3106, 3484, 3098, 3449, 3090, 3413, 3082, 3391, 3041, 3321, 3020, 3281, 2981, 3211, 2983, 3145, 2996, 3132, 3014, 3107, 3035, 3080, 3049, 3066, 3056, 3058, 3059, 3041, 3061, 3023, 3065, 3017, 3069, 3010, 3074, 2998, 3078, 2984, 3078, 2974, 3078, 2943, 3053, 2918, 3029, 2896, 3005, 2896, 2990, 2896, 2977, 2907, 2964, 2919, 2954, 2919, 2947, 2919, 2931, 2914, 2915, 2909, 2911, 2908, L, 2911, 2879, Q, 2920, 2870, 2928, 2855, 2936, 2840, 2936, 2830, 2936, 2825, 2924, 2811, 2910, 2796, 2900, 2796, 2898, 2796, 2879, 2818, 2861, 2839, 2847, 2839, 2830, 2839, 2829, 2828, 2830, 2812, 2828, 2802, 2826, 2789, 2819, 2778, 2818, 2777, 2818, 2777, 2808, 2764, 2802, 2757, 2801, 2758, 2801, 2759, 2793, 2773, 2788, 2783, 2783, 2793, 2781, 2798, 2772, 2827, 2758, 2880, 2751, 2909, 2738, 2960, 2729, 2994, 2719, 3044, 2710, 3086, 2693, 3118, 2678, 3148, 2640, 3197, 2606, 3240, 2599, 3262, 2599, 3286, 2605, 3350, 2614, 3434, 2614, 3442, 2615, 3458, 2626, 3518, 2636, 3572, 2636, 3603, 2636, 3625, 2629, 3647, 2626, 3654, 2607, 3694, 2600, 3709, 2583, 3737, 2582, 3740, 2575, 3763, 2570, 3780, 2562, 3787, 2536, 3808, 2496, 3869, 2458, 3926, 2458, 3938, 2458, 3951, 2461, 3956, 2466, 3968, 2470, 3983, 2474, 3986, 2477, 4003, 2478, 4012, 2479, 4019, 2478, 4022, 2478, 4025, 2477, 4059, 2479, 4100, 2477, 4138, 2460, 4183, 2450, 4207, 2429, 4256, 2411, 4299, 2402, 4331, 2392, 4368, 2394, 4408, 2397, 4471, 2395, 4494, 2393, 4530, 2369, 4592, 2360, 4613, 2349, 4638, L, 2336, 4666, 2372, 4704, Q, 2375, 4707, 2377, 4710, 2439, 4778, 2468, 4806, L, 2469, 4806, Q, 2522, 4869, 2555, 4903, 2587, 4937, 2601, 4948, 2614, 4959, 2634, 4980, 2653, 5001, 2670, 5022, 2686, 5043, 2697, 5049, 2728, 5069, 2790, 5145, 2844, 5211, 2889, 5229, L, 2890, 5230, Q, 2945, 5270, 3025, 5310, 3102, 5349, 3119, 5370, 3130, 5383, 3172, 5451, 3205, 5505, 3237, 5527, 3296, 5570, 3321, 5599, 3340, 5621, 3374, 5681, 3378, 5687, 3395, 5726, 3411, 5763, 3420, 5780, 3428, 5793, 3441, 5821, 3445, 5828, 3443, 5848, 3442, 5859, 3458, 5859, 3465, 5859, 3493, 5844, 3519, 5830, 3536, 5817, 3564, 5798, 3586, 5800, 3591, 5801, 3629, 5790, 3668, 5780, 3680, 5780, 3698, 5780, 3707, 5785, 3715, 5790, 3742, 5790, 3751, 5790, 3778, 5789, 3802, 5789, 3809, 5794, 3834, 5810, 3874, 5810, L, 3937, 5809, 3967, 5785, Q, 3980, 5776, 3997, 5766, 4041, 5740, 4056, 5722, 4103, 5667, 4117, 5647, 4134, 5625, 4151, 5596, 4181, 5548, 4190, 5531, 4210, 5495, 4219, 5468, 4228, 5445, 4231, 5435, 4237, 5418, 4239, 5404, 4241, 5390, 4241, 5377, 4241, 5363, 4244, 5355, 4246, 5346, 4247, 5343, 4249, 5310, 4238, 5273, 4233, 5255, 4205, 5189, 4191, 5155, 4158, 5098, 4150, 5083, 4150, 5025, 4150, 4968, 4157, 4935, 4167, 4888, 4172, 4826, 4181, 4722, 4182, 4718, 4184, 4695, 4184, 4665, 4184, 4645, 4184, 4633, 4183, 4623, 4183, 4619, 4181, 4596, 4180, 4575, 4177, 4519, 4172, 4512, 4165, 4499, 4138, 4484, 4105, 4468, 4091, 4460, 4058, 4441, 3991, 4407, 3922, 4373, 3880, 4355, 3750, 4301, 3659, 4261, 3609, 4239, 3539, 4161, L, 3510, 4128, 3509, 4101, Q, 3506, 4081, 3498, 4051, 3480, 3993, 3478, 3983, 3471, 3961, 3470, 3934, 3470, 3926, 3470, 3877, 3470, 3839, 3476, 3700, 3480, 3619, 3481, 3584, 3481, 3579, 3481, 3575, 3481, 3568, 3481, 3561, 3481, 3554, 3482, 3547, 3483, 3539, 3485, 3531, 3485, 3530, 3485, 3529, 3490, 3499, 3488, 3474, 3487, 3450, 3496, 3431, 3504, 3415, 3510, 3403, 3512, 3400, 3513, 3397, 3516, 3390, 3521, 3385, L, 3498, 3369, Q, 3489, 3363, 3484, 3363, 3467, 3363, 3433, 3380, 3398, 3397, 3393, 3408, Q, 3384, 3425, 3367, 3464, Z]
      ],
      "label": "Akaky Kaliti",
      "shortLabel": "AK",
      "labelPosition": [319.6, 459.6],
      "labelAlignment": [CEN, MID]
    },
    "ET.AA.AR": {
      "outlines": [
        [M, 2625, 1082, L, 2597, 1079, Q, 2593, 1079, 2576, 1089, 2559, 1097, 2549, 1097, L, 2491, 1099, Q, 2478, 1099, 2466, 1094, 2429, 1078, 2390, 1064, 2383, 1061, 2371, 1054, 2356, 1044, 2353, 1042, 2338, 1033, 2328, 1008, 2321, 978, 2317, 966, 2310, 941, 2297, 922, 2287, 907, 2266, 887, 2265, 886, 2239, 845, 2219, 811, 2203, 811, 2189, 811, 2118, 833, 2041, 858, 2038, 858, 2017, 861, 2004, 864, 1979, 869, 1968, 881, 1963, 886, 1951, 892, 1933, 900, 1915, 912, 1908, 916, 1880, 916, L, 1874, 916, 1873, 958, Q, 1866, 993, 1886, 1036, 1915, 1098, 1917, 1105, 1921, 1120, 1944, 1145, 1957, 1158, 1973, 1172, L, 2039, 1248, Q, 2081, 1284, 2146, 1355, 2179, 1392, 2242, 1462, 2245, 1466, 2250, 1471, 2263, 1491, 2283, 1512, 2322, 1552, 2323, 1554, 2338, 1570, 2388, 1641, L, 2431, 1641, Q, 2449, 1652, 2459, 1659, 2463, 1661, 2499, 1661, 2500, 1661, 2540, 1659, 2584, 1658, 2607, 1660, 2628, 1661, 2659, 1651, 2695, 1640, 2703, 1638, 2732, 1634, 2752, 1626, 2764, 1621, 2777, 1618, 2791, 1615, 2797, 1613, 2809, 1607, 2849, 1598, 2857, 1597, 2857, 1566, L, 2855, 1510, Q, 2855, 1495, 2860, 1490, 2868, 1484, 2873, 1474, L, 2873, 1468, Q, 2876, 1462, 2890, 1432, 2898, 1414, 2914, 1398, 2923, 1390, 2951, 1378, 2989, 1361, 2995, 1357, 3010, 1350, 3036, 1333, 3063, 1316, 3077, 1308, 3081, 1306, 3093, 1300, 3104, 1295, 3109, 1289, 3113, 1285, 3114, 1274, 3114, 1262, 3115, 1258, 3102, 1232, 3073, 1220, 3021, 1200, 3014, 1195, 2991, 1181, 2958, 1174, 2903, 1163, 2896, 1161, 2875, 1154, 2863, 1151, 2842, 1144, 2832, 1144, 2814, 1145, 2805, 1145, 2787, 1145, 2778, 1138, 2749, 1120, 2725, 1102, 2681, 1069, 2678, 1049, 2668, 1053, 2662, 1061, 2651, 1074, 2647, 1077, Q, 2640, 1083, 2625, 1082, Z]
      ],
      "label": "Arada",
      "shortLabel": "AR",
      "labelPosition": [255.4, 135.8],
      "labelAlignment": [CEN, MID]
    },
    "ET.AA.BO": {
      "outlines": [
        [M, 4148, 1427, Q, 4021, 1398, 3961, 1398, 3925, 1398, 3922, 1399, 3913, 1401, 3876, 1427, 3856, 1441, 3769, 1439, 3753, 1439, 3720, 1446, 3689, 1453, 3668, 1452, 3640, 1450, 3603, 1457, 3564, 1466, 3540, 1466, 3540, 1466, 3540, 1467, 3535, 1472, 3467, 1460, 3449, 1475, 3422, 1481, 3396, 1487, 3372, 1495, 3349, 1503, 3328, 1517, 3309, 1530, 3298, 1533, 3263, 1543, 3232, 1560, 3216, 1569, 3193, 1584, 3184, 1587, 3159, 1600, 3133, 1612, 3122, 1616, 3111, 1621, 3091, 1634, 3071, 1648, 3063, 1657, 3060, 1667, 3036, 1676, 3004, 1685, 2995, 1690, 2975, 1700, 2970, 1716, 2968, 1724, 2968, 1749, 2968, 1778, 2970, 1785, 2972, 1791, 2990, 1820, 2998, 1833, 3009, 1865, 3020, 1898, 3020, 1911, 3020, 1922, 3016, 1937, 3013, 1948, 3012, 1957, 3011, 1960, 3011, 1963, 3004, 1992, 3003, 1995, 3001, 2002, 2999, 2020, 2998, 2035, 2992, 2045, 2975, 2072, 2956, 2079, 2947, 2084, 2947, 2111, 2947, 2130, 2972, 2153, 2997, 2176, 2997, 2217, 2997, 2258, 2994, 2262, 2976, 2276, 2944, 2311, 2935, 2320, 2881, 2385, 2831, 2447, 2809, 2474, 2773, 2518, 2748, 2542, 2748, 2542, 2747, 2543, 2748, 2544, 2764, 2562, 2778, 2579, 2782, 2588, 2785, 2594, 2797, 2613, 2807, 2631, 2809, 2642, 2809, 2647, 2808, 2687, 2808, 2710, 2809, 2724, 2810, 2731, 2809, 2739, 2807, 2748, 2802, 2757, 2808, 2764, 2818, 2777, 2818, 2777, 2819, 2778, 2826, 2789, 2828, 2802, 2830, 2812, 2829, 2828, 2830, 2839, 2847, 2839, 2861, 2839, 2879, 2818, 2898, 2796, 2900, 2796, 2910, 2796, 2924, 2811, 2936, 2825, 2936, 2830, 2936, 2840, 2928, 2855, 2920, 2870, 2911, 2879, L, 2911, 2908, Q, 2915, 2909, 2931, 2914, 2947, 2919, 2954, 2919, 2964, 2919, 2977, 2907, 2990, 2896, 3005, 2896, 3029, 2896, 3053, 2918, 3078, 2943, 3078, 2974, 3078, 2984, 3074, 2998, 3069, 3010, 3065, 3017, 3061, 3023, 3059, 3041, 3056, 3058, 3049, 3066, 3035, 3080, 3014, 3107, 2996, 3132, 2983, 3145, 2981, 3211, 3020, 3281, 3041, 3321, 3082, 3391, 3090, 3413, 3098, 3449, 3106, 3484, 3119, 3514, 3130, 3539, 3140, 3576, 3153, 3601, 3195, 3601, 3227, 3601, 3234, 3592, 3246, 3573, 3268, 3552, 3285, 3536, 3297, 3514, 3304, 3501, 3315, 3500, 3320, 3500, 3337, 3499, 3351, 3496, 3367, 3464, 3384, 3425, 3393, 3408, 3398, 3397, 3433, 3380, 3467, 3363, 3484, 3363, 3489, 3363, 3498, 3369, L, 3521, 3385, 3526, 3381, Q, 3534, 3376, 3547, 3373, 3575, 3365, 3577, 3363, 3586, 3358, 3647, 3329, 3672, 3315, 3699, 3278, 3731, 3235, 3741, 3227, 3774, 3198, 3806, 3119, 3842, 3027, 3867, 2991, 3890, 2972, 3909, 2943, 3911, 2941, 3919, 2930, 3924, 2923, 3928, 2914, 3931, 2910, 3935, 2902, 3939, 2894, 3946, 2894, 3957, 2894, 3996, 2916, 4035, 2936, 4060, 2936, 4088, 2936, 4106, 2930, 4123, 2924, 4145, 2908, 4155, 2900, 4190, 2897, 4221, 2895, 4247, 2868, 4268, 2845, 4303, 2799, 4334, 2759, 4360, 2734, 4384, 2711, 4409, 2681, 4434, 2651, 4460, 2607, 4485, 2563, 4507, 2529, 4529, 2495, 4536, 2484, 4554, 2460, 4562, 2441, 4571, 2422, 4576, 2407, 4581, 2393, 4599, 2349, 4616, 2304, 4630, 2280, 4661, 2224, 4686, 2207, 4704, 2195, 4808, 2156, 4842, 2143, 4900, 2133, 4933, 2126, 5011, 2112, 5046, 2105, 5130, 2098, 5210, 2092, 5237, 2085, 5273, 2076, 5330, 2075, 5362, 2075, 5426, 2075, 5459, 2075, 5518, 2060, 5550, 2053, 5606, 2037, 5643, 2028, 5698, 2005, 5754, 1981, 5789, 1975, 5826, 1970, 5858, 1930, 5882, 1899, 5893, 1865, 5895, 1862, 5897, 1858, 5907, 1841, 5915, 1827, 5923, 1811, 5929, 1788, 5930, 1786, 5936, 1775, 5941, 1764, 5946, 1749, L, 5946, 1701, Q, 5947, 1664, 5943, 1641, 5942, 1635, 5933, 1616, 5922, 1596, 5919, 1588, 5903, 1538, 5898, 1493, 5893, 1458, 5883, 1438, 5854, 1383, 5818, 1338, 5797, 1314, 5779, 1293, L, 5710, 1305, Q, 5665, 1311, 5633, 1322, 5566, 1343, 5532, 1367, 5519, 1376, 5458, 1376, 5425, 1376, 5379, 1373, 5332, 1370, 5302, 1370, 5294, 1370, 5227, 1381, 5156, 1392, 5122, 1400, 4985, 1431, 4954, 1431, L, 4839, 1429, Q, 4838, 1429, 4836, 1429, 4800, 1422, 4754, 1410, 4716, 1399, 4683, 1399, 4680, 1399, 4529, 1428, 4378, 1456, 4319, 1456, Q, 4276, 1456, 4148, 1427, Z]
      ],
      "label": "Bole",
      "shortLabel": "BO",
      "labelPosition": [367.4, 232.5],
      "labelAlignment": [CEN, MID]
    },
    "ET.AA.GU": {
      "outlines": [
        [M, 2682, 79, Q, 2665, 76, 2648, 77, 2642, 77, 2537, 66, 2428, 55, 2383, 55, 2294, 55, 2287, 57, 2259, 72, 2222, 85, 2185, 99, 2140, 123, 2098, 144, 2069, 160, 2066, 161, 2065, 162, 2064, 162, 2064, 162, 2034, 178, 2011, 192, 2007, 194, 1987, 205, 1967, 215, 1917, 243, 1866, 272, 1829, 276, 1792, 279, 1742, 294, 1688, 309, 1658, 312, 1632, 315, 1568, 356, 1502, 402, 1488, 410, 1458, 431, 1424, 478, 1406, 503, 1360, 504, 1347, 578, 1410, 706, 1416, 718, 1416, 735, 1417, 749, 1423, 755, 1432, 765, 1444, 777, 1453, 786, 1457, 795, 1475, 829, 1487, 844, 1504, 865, 1523, 870, 1537, 869, 1559, 868, L, 1564, 868, Q, 1591, 865, 1633, 875, 1685, 887, 1712, 889, 1718, 889, 1776, 903, 1823, 915, 1853, 916, L, 1880, 916, Q, 1908, 916, 1915, 912, 1933, 900, 1951, 892, 1963, 886, 1968, 881, 1979, 869, 2004, 864, 2017, 861, 2038, 858, 2041, 858, 2118, 833, 2189, 811, 2203, 811, 2219, 811, 2239, 845, 2265, 886, 2266, 887, 2287, 907, 2297, 922, 2310, 941, 2317, 966, 2321, 978, 2328, 1008, 2338, 1033, 2353, 1042, 2356, 1044, 2371, 1054, 2383, 1061, 2390, 1064, 2429, 1078, 2466, 1094, 2478, 1099, 2491, 1099, L, 2549, 1097, Q, 2559, 1097, 2576, 1089, 2593, 1079, 2597, 1079, L, 2625, 1082, Q, 2640, 1083, 2647, 1077, 2651, 1074, 2662, 1061, 2668, 1053, 2678, 1049, 2678, 1047, 2678, 1046, 2678, 1027, 2714, 1014, 2732, 1007, 2756, 1001, 2758, 1000, 2795, 1000, 2822, 1001, 2822, 979, 2822, 967, 2795, 928, 2767, 888, 2767, 852, 2767, 821, 2790, 792, 2813, 763, 2813, 744, 2813, 717, 2769, 665, 2726, 613, 2726, 595, 2728, 570, 2728, 556, 2728, 554, 2728, 553, 2728, 548, 2724, 543, 2719, 536, 2719, 533, L, 2775, 451, Q, 2799, 419, 2804, 417, 2808, 415, 2842, 396, 2875, 377, 2914, 359, 2953, 340, 2984, 330, 2959, 314, 2945, 305, 2935, 297, 2929, 287, 2923, 271, 2916, 257, 2911, 246, 2883, 202, 2863, 174, 2849, 153, 2837, 131, 2829, 120, 2817, 99, 2806, 92, 2794, 84, 2770, 87, 2741, 91, 2729, 89, Q, 2689, 80, 2682, 79, Z]
      ],
      "label": "Gullele",
      "shortLabel": "GU",
      "labelPosition": [235.4, 51.6],
      "labelAlignment": [CEN, MID]
    },
    "ET.AA.KI": {
      "outlines": [
        [M, 2937, 1505, Q, 2928, 1501, 2873, 1478, L, 2873, 1474, Q, 2868, 1484, 2860, 1490, 2855, 1495, 2855, 1510, L, 2857, 1566, Q, 2857, 1597, 2849, 1598, 2809, 1607, 2797, 1613, 2791, 1615, 2777, 1618, 2764, 1621, 2752, 1626, 2732, 1634, 2703, 1638, 2695, 1640, 2659, 1651, 2628, 1661, 2607, 1660, 2584, 1658, 2540, 1659, 2500, 1661, 2499, 1661, 2463, 1661, 2459, 1659, 2449, 1652, 2431, 1641, L, 2388, 1641, Q, 2360, 1672, 2294, 1717, 2235, 1758, 2207, 1794, 2195, 1810, 2143, 1899, 2101, 1973, 2076, 2002, 2074, 2004, 2073, 2006, 2065, 2016, 2061, 2021, 2053, 2033, 2046, 2038, 2039, 2044, 2032, 2082, 2026, 2110, 2017, 2137, L, 2017, 2138, Q, 2014, 2148, 2014, 2175, 2014, 2199, 2017, 2205, 2020, 2212, 2046, 2241, 2057, 2253, 2066, 2271, 2077, 2291, 2087, 2303, 2112, 2335, 2125, 2365, 2134, 2386, 2141, 2394, 2154, 2408, 2175, 2408, 2244, 2399, 2244, 2402, L, 2244, 2402, Q, 2267, 2404, 2360, 2434, 2460, 2466, 2487, 2479, 2510, 2491, 2544, 2494, 2595, 2498, 2644, 2510, 2666, 2516, 2707, 2519, 2738, 2525, 2748, 2542, 2773, 2518, 2809, 2474, 2831, 2447, 2881, 2385, 2935, 2320, 2944, 2311, 2976, 2276, 2994, 2262, 2997, 2258, 2997, 2217, 2997, 2176, 2972, 2153, 2947, 2130, 2947, 2111, 2947, 2084, 2956, 2079, 2975, 2072, 2992, 2045, 2998, 2035, 2999, 2020, 3001, 2002, 3003, 1995, 3004, 1992, 3011, 1963, 3011, 1960, 3012, 1957, 3013, 1948, 3016, 1937, 3020, 1922, 3020, 1911, 3020, 1898, 3009, 1865, 2998, 1833, 2990, 1820, 2972, 1791, 2970, 1785, 2968, 1778, 2968, 1749, 2968, 1724, 2970, 1716, 2975, 1700, 2995, 1690, 3004, 1685, 3036, 1676, 3060, 1667, 3063, 1657, 3063, 1655, 3063, 1654, 3063, 1644, 3045, 1623, 3037, 1613, 3025, 1601, 3004, 1581, 2989, 1542, Q, 2983, 1527, 2937, 1505, Z]
      ],
      "label": "Kirkos",
      "shortLabel": "KI",
      "labelPosition": [250.8, 206.9],
      "labelAlignment": [CEN, MID]
    },
    "ET.AA.KO": {
      "outlines": [
        [M, 1357, 504, Q, 1311, 504, 1246, 469, 1165, 421, 1120, 393, 1048, 350, 989, 327, 975, 322, 849, 279, 766, 253, 739, 243, 715, 233, 683, 218, 646, 198, 629, 191, 581, 170, 529, 104, 483, 44, 482, 44, 409, 79, 383, 92, 344, 113, 302, 130, 282, 138, 261, 157, 231, 184, 158, 231, 120, 258, 113, 262, 94, 273, 91, 275, 81, 282, 74, 291, L, 74, 294, 72, 313, Q, 72, 318, 80, 329, 89, 342, 91, 353, 94, 372, 91, 403, 91, 450, 81, 470, 72, 491, 72, 509, 72, 551, 85, 570, 94, 581, 118, 613, 127, 629, 159, 662, 180, 686, 180, 704, L, 177, 732, Q, 177, 751, 196, 763, 207, 771, 236, 790, 243, 796, 268, 820, 294, 845, 306, 855, 312, 861, 369, 904, 380, 912, 402, 924, 417, 932, 429, 944, 452, 954, 484, 983, 524, 1020, 528, 1023, 550, 1038, 573, 1078, 605, 1131, 608, 1135, 669, 1211, 681, 1288, 696, 1383, 696, 1433, 696, 1442, 686, 1496, 677, 1543, 674, 1556, 667, 1588, 636, 1618, 620, 1633, 593, 1659, 591, 1660, 590, 1662, 570, 1677, 502, 1709, 489, 1715, 459, 1732, 430, 1748, 422, 1752, 405, 1760, 387, 1779, 386, 1780, 348, 1822, 338, 1832, 331, 1862, 322, 1902, 319, 1911, 307, 1942, 289, 2002, 272, 2052, 247, 2082, 199, 2139, 183, 2161, 150, 2208, 148, 2234, 143, 2245, 128, 2270, 113, 2298, 104, 2320, 99, 2332, 76, 2375, 55, 2413, 55, 2417, 55, 2428, 65, 2446, 70, 2456, 78, 2470, 83, 2479, 92, 2508, 101, 2535, 106, 2543, 113, 2556, 114, 2578, 114, 2602, 116, 2606, 119, 2612, 121, 2633, 123, 2644, 125, 2659, 131, 2695, 156, 2757, 169, 2791, 195, 2853, 196, 2854, 196, 2855, 205, 2897, 223, 2943, 235, 2975, 265, 3039, 301, 3117, 322, 3169, 326, 3177, 360, 3265, 364, 3277, 381, 3316, 395, 3348, 400, 3363, 408, 3384, 430, 3413, 442, 3428, 459, 3448, 481, 3477, 489, 3487, 500, 3500, 511, 3508, L, 532, 3520, 551, 3503, Q, 593, 3463, 706, 3357, 754, 3312, 781, 3275, 792, 3260, 819, 3234, 850, 3203, 860, 3193, 916, 3126, 936, 3101, 970, 3061, 1014, 3024, 1035, 3006, 1089, 2948, 1134, 2898, 1181, 2862, 1187, 2856, 1209, 2840, 1232, 2824, 1242, 2812, 1251, 2801, 1275, 2801, 1311, 2799, 1324, 2796, 1355, 2788, 1411, 2787, 1441, 2786, 1498, 2784, 1499, 2774, 1499, 2752, 1499, 2723, 1478, 2697, 1457, 2672, 1457, 2663, 1457, 2648, 1478, 2634, 1499, 2621, 1499, 2615, 1499, 2602, 1474, 2580, 1449, 2557, 1449, 2548, 1449, 2540, 1474, 2518, 1499, 2497, 1499, 2486, 1499, 2452, 1468, 2428, 1437, 2404, 1437, 2399, 1437, 2382, 1444, 2377, 1462, 2370, 1480, 2358, 1490, 2353, 1504, 2340, 1520, 2326, 1525, 2317, 1547, 2282, 1559, 2266, 1573, 2248, 1574, 2206, 1574, 2201, 1574, 2197, L, 1574, 2169, Q, 1576, 2034, 1576, 2030, 1576, 2006, 1571, 1992, 1564, 1973, 1561, 1948, 1558, 1931, 1558, 1904, 1559, 1882, 1553, 1862, 1547, 1838, 1549, 1791, 1551, 1737, 1548, 1714, 1547, 1707, 1548, 1682, 1548, 1660, 1545, 1651, 1542, 1645, 1540, 1640, 1520, 1591, 1517, 1583, L, 1465, 1492, Q, 1453, 1475, 1441, 1431, 1435, 1418, 1413, 1376, 1411, 1372, 1411, 1337, 1411, 1290, 1433, 1232, 1464, 1157, 1484, 1104, 1488, 1093, 1529, 992, 1557, 919, 1565, 892, L, 1565, 868, 1559, 868, Q, 1537, 869, 1523, 870, 1504, 865, 1487, 844, 1475, 829, 1457, 795, 1453, 786, 1444, 777, 1432, 765, 1423, 755, 1417, 749, 1416, 735, 1416, 718, 1410, 706, 1347, 578, 1360, 504, Q, 1359, 504, 1357, 504, Z]
      ],
      "label": "Kolfe Keranio",
      "shortLabel": "KO",
      "labelPosition": [81.5, 208.7],
      "labelAlignment": [CEN, MID]
    },
    "ET.AA.LI": {
      "outlines": [
        [M, 2009, 1564, Q, 1980, 1579, 1937, 1579, 1898, 1579, 1876, 1577, 1868, 1576, 1847, 1581, 1820, 1587, 1805, 1588, 1785, 1590, 1777, 1591, 1763, 1593, 1749, 1599, 1743, 1602, 1718, 1605, 1697, 1608, 1690, 1608, 1664, 1609, 1653, 1608, 1648, 1608, 1636, 1603, 1624, 1597, 1622, 1597, 1602, 1597, 1580, 1615, 1554, 1635, 1540, 1640, 1542, 1645, 1545, 1651, 1548, 1660, 1548, 1682, 1547, 1707, 1548, 1714, 1551, 1737, 1549, 1791, 1547, 1838, 1553, 1862, 1559, 1882, 1558, 1904, 1558, 1931, 1561, 1948, 1564, 1973, 1571, 1992, 1576, 2006, 1576, 2030, 1576, 2034, 1574, 2169, L, 1574, 2197, Q, 1574, 2201, 1574, 2206, 1603, 2209, 1617, 2204, 1627, 2201, 1655, 2190, 1664, 2188, 1674, 2183, 1683, 2178, 1689, 2178, 1695, 2177, 1718, 2173, 1732, 2169, 1755, 2167, 1778, 2165, 1790, 2163, 1817, 2156, 1823, 2155, 1831, 2154, 1856, 2154, 1859, 2154, 1883, 2157, 1908, 2160, 1914, 2160, 1919, 2160, 1929, 2154, 1939, 2147, 1947, 2145, 1954, 2143, 1967, 2143, 1979, 2139, 1994, 2138, 2003, 2138, 2017, 2138, L, 2017, 2137, Q, 2026, 2110, 2032, 2082, 2039, 2044, 2046, 2038, 2053, 2033, 2061, 2021, 2065, 2016, 2073, 2006, 2074, 2004, 2076, 2002, 2101, 1973, 2143, 1899, 2195, 1810, 2207, 1794, 2235, 1758, 2294, 1717, 2360, 1672, 2388, 1641, 2338, 1570, 2323, 1554, 2322, 1552, 2283, 1512, 2263, 1491, 2250, 1471, 2245, 1466, 2242, 1462, 2233, 1466, 2223, 1468, 2213, 1469, 2207, 1472, 2183, 1486, 2172, 1486, 2137, 1486, 2093, 1512, Q, 2029, 1553, 2009, 1564, Z]
      ],
      "label": "Lideta",
      "shortLabel": "LI",
      "labelPosition": [181.2, 183.5],
      "labelAlignment": [CEN, MID]
    },
    "ET.AA.NI": {
      "outlines": [
        [M, 2707, 2519, Q, 2666, 2516, 2644, 2510, 2595, 2498, 2544, 2494, 2510, 2491, 2487, 2479, 2460, 2466, 2360, 2434, 2267, 2404, 2244, 2402, L, 2244, 2403, Q, 2243, 2402, 2243, 2402, 2243, 2402, 2244, 2402, L, 2244, 2402, Q, 2244, 2399, 2175, 2408, 2154, 2408, 2141, 2394, 2134, 2386, 2125, 2365, 2112, 2335, 2087, 2303, 2077, 2291, 2066, 2271, 2057, 2253, 2046, 2241, 2020, 2212, 2017, 2205, 2014, 2199, 2014, 2175, 2014, 2148, 2017, 2138, 2003, 2138, 1994, 2138, 1979, 2139, 1967, 2143, 1954, 2143, 1947, 2145, 1939, 2147, 1929, 2154, 1919, 2160, 1914, 2160, 1908, 2160, 1883, 2157, 1859, 2154, 1856, 2154, 1831, 2154, 1823, 2155, 1817, 2156, 1790, 2163, 1778, 2165, 1755, 2167, 1732, 2169, 1718, 2173, 1695, 2177, 1689, 2178, 1683, 2178, 1674, 2183, 1664, 2188, 1655, 2190, 1627, 2201, 1617, 2204, 1603, 2209, 1574, 2206, 1573, 2248, 1559, 2266, 1547, 2282, 1525, 2317, 1520, 2326, 1504, 2340, 1490, 2353, 1480, 2358, 1462, 2370, 1444, 2377, 1437, 2382, 1437, 2399, 1437, 2404, 1468, 2428, 1499, 2452, 1499, 2486, 1499, 2497, 1474, 2518, 1449, 2540, 1449, 2548, 1449, 2557, 1474, 2580, 1499, 2602, 1499, 2615, 1499, 2621, 1478, 2634, 1457, 2648, 1457, 2663, 1457, 2672, 1478, 2697, 1499, 2723, 1499, 2752, 1499, 2774, 1498, 2784, 1441, 2786, 1411, 2787, 1355, 2788, 1324, 2796, 1311, 2799, 1275, 2801, 1251, 2801, 1242, 2812, 1232, 2824, 1209, 2840, 1187, 2856, 1181, 2862, 1134, 2898, 1089, 2948, 1035, 3006, 1014, 3024, 970, 3061, 936, 3101, 916, 3126, 860, 3193, 850, 3203, 819, 3234, 792, 3260, 781, 3275, 754, 3312, 706, 3357, 593, 3463, 551, 3503, L, 532, 3520, 551, 3534, Q, 556, 3538, 562, 3542, 585, 3560, 606, 3566, 719, 3563, 845, 3569, 973, 3575, 1000, 3580, 1028, 3585, 1057, 3589, 1084, 3593, 1095, 3602, 1105, 3610, 1191, 3699, 1229, 3710, 1252, 3720, 1274, 3729, 1327, 3751, 1379, 3772, 1487, 3810, 1507, 3818, 1583, 3855, 1647, 3887, 1669, 3892, 1693, 3897, 1725, 3918, 1742, 3929, 1764, 3945, 1775, 3953, 1799, 3966, 1820, 3978, 1830, 3996, 1845, 4024, 1868, 4082, 1889, 4130, 1916, 4145, 1925, 4161, 1944, 4180, 1965, 4202, 1983, 4229, 1993, 4244, 2013, 4275, 2031, 4301, 2042, 4315, 2069, 4347, 2113, 4400, 2149, 4444, 2174, 4480, 2180, 4488, 2208, 4519, 2223, 4535, 2245, 4559, 2253, 4568, 2275, 4597, 2295, 4624, 2305, 4634, 2307, 4635, 2309, 4638, L, 2336, 4666, 2349, 4638, Q, 2360, 4613, 2369, 4592, 2393, 4530, 2395, 4494, 2397, 4471, 2394, 4408, 2392, 4368, 2402, 4331, 2411, 4299, 2429, 4256, 2450, 4207, 2460, 4183, 2477, 4138, 2479, 4100, 2477, 4059, 2478, 4025, 2478, 4022, 2479, 4019, 2478, 4012, 2477, 4003, 2474, 3986, 2470, 3983, 2466, 3968, 2461, 3956, 2458, 3951, 2458, 3938, 2458, 3926, 2496, 3869, 2536, 3808, 2562, 3787, 2570, 3780, 2575, 3763, 2582, 3740, 2583, 3737, 2600, 3709, 2607, 3694, 2626, 3654, 2629, 3647, 2636, 3625, 2636, 3603, 2636, 3572, 2626, 3518, 2615, 3458, 2614, 3442, 2614, 3434, 2605, 3350, 2599, 3286, 2599, 3262, 2606, 3240, 2640, 3197, 2678, 3148, 2693, 3118, 2710, 3086, 2719, 3044, 2729, 2994, 2738, 2960, 2751, 2909, 2758, 2880, 2772, 2827, 2781, 2798, 2783, 2793, 2788, 2783, 2793, 2773, 2801, 2759, 2801, 2758, 2802, 2757, 2807, 2748, 2809, 2739, 2810, 2731, 2809, 2724, 2808, 2710, 2808, 2687, 2809, 2647, 2809, 2642, 2807, 2631, 2797, 2613, 2785, 2594, 2782, 2588, 2778, 2579, 2764, 2562, 2748, 2544, 2747, 2543, 2748, 2542, 2748, 2542, Q, 2738, 2525, 2707, 2519, Z]
      ],
      "label": "Nifas Silk-Lafto",
      "shortLabel": "NI",
      "labelPosition": [194.1, 311.4],
      "labelAlignment": [CEN, MID]
    },
    "ET.AA.YE": {
      "outlines": [
        [M, 4222, 708, Q, 4205, 706, 4166, 697, 4128, 688, 4099, 685, 4069, 681, 4003, 669, 3936, 656, 3917, 655, 3842, 649, 3815, 640, 3778, 629, 3749, 624, 3692, 615, 3685, 613, 3649, 607, 3622, 599, 3599, 594, 3585, 584, 3572, 575, 3560, 573, 3551, 572, 3537, 573, L, 3514, 573, Q, 3494, 574, 3457, 551, 3420, 529, 3399, 520, 3377, 512, 3353, 502, 3330, 492, 3321, 481, 3148, 398, 3085, 368, 3058, 355, 3004, 335, 2988, 329, 2984, 330, 2953, 340, 2914, 359, 2875, 377, 2842, 396, 2808, 415, 2804, 417, 2799, 419, 2775, 451, L, 2719, 533, Q, 2719, 536, 2724, 543, 2728, 548, 2728, 553, 2728, 554, 2728, 556, 2728, 570, 2726, 595, 2726, 613, 2769, 665, 2813, 717, 2813, 744, 2813, 763, 2790, 792, 2767, 821, 2767, 852, 2767, 888, 2795, 928, 2822, 967, 2822, 979, 2822, 1001, 2795, 1000, 2758, 1000, 2756, 1001, 2732, 1007, 2714, 1014, 2678, 1027, 2678, 1046, 2678, 1047, 2678, 1049, 2681, 1069, 2725, 1102, 2749, 1120, 2778, 1138, 2787, 1145, 2805, 1145, 2814, 1145, 2832, 1144, 2842, 1144, 2863, 1151, 2875, 1154, 2896, 1161, 2903, 1163, 2958, 1174, 2991, 1181, 3014, 1195, 3021, 1200, 3073, 1220, 3102, 1232, 3115, 1258, 3114, 1262, 3114, 1274, 3113, 1285, 3109, 1289, 3104, 1295, 3093, 1300, 3081, 1306, 3077, 1308, 3063, 1316, 3036, 1333, 3010, 1350, 2995, 1357, 2989, 1361, 2951, 1378, 2923, 1390, 2914, 1398, 2898, 1414, 2890, 1432, 2876, 1462, 2873, 1468, L, 2873, 1478, Q, 2928, 1501, 2937, 1505, 2983, 1527, 2989, 1542, 3004, 1581, 3025, 1601, 3037, 1613, 3045, 1623, 3063, 1644, 3063, 1654, 3063, 1655, 3063, 1657, 3071, 1648, 3091, 1634, 3111, 1621, 3122, 1616, 3133, 1612, 3159, 1600, 3184, 1587, 3193, 1584, 3216, 1569, 3232, 1560, 3263, 1543, 3298, 1533, 3309, 1530, 3328, 1517, 3349, 1503, 3372, 1495, 3396, 1487, 3422, 1481, 3449, 1475, 3467, 1460, 3535, 1472, 3540, 1467, 3540, 1466, 3540, 1466, 3564, 1466, 3603, 1457, 3640, 1450, 3668, 1452, 3689, 1453, 3720, 1446, 3753, 1439, 3769, 1439, 3856, 1441, 3876, 1427, 3913, 1401, 3922, 1399, 3925, 1398, 3961, 1398, 4021, 1398, 4148, 1427, 4276, 1456, 4319, 1456, 4378, 1456, 4529, 1428, 4680, 1399, 4683, 1399, 4716, 1399, 4754, 1410, 4800, 1422, 4836, 1429, 4838, 1429, 4839, 1429, L, 4954, 1431, Q, 4985, 1431, 5122, 1400, 5156, 1392, 5227, 1381, 5294, 1370, 5302, 1370, 5332, 1370, 5379, 1373, 5425, 1376, 5458, 1376, 5519, 1376, 5532, 1367, 5566, 1343, 5633, 1322, 5665, 1311, 5710, 1305, L, 5779, 1293, Q, 5757, 1268, 5740, 1248, 5739, 1246, 5738, 1244, 5733, 1236, 5729, 1232, 5721, 1224, 5691, 1200, 5685, 1195, 5678, 1182, 5670, 1167, 5666, 1158, 5650, 1132, 5642, 1118, 5633, 1098, 5622, 1070, 5607, 1029, 5576, 999, 5523, 947, 5511, 932, 5461, 866, 5454, 853, 5447, 843, 5439, 833, 5428, 823, 5420, 814, 5404, 798, 5406, 784, L, 5410, 754, Q, 5410, 718, 5407, 700, 5404, 678, 5403, 677, 5397, 667, 5371, 669, 5338, 671, 5290, 669, 5247, 667, 5245, 667, 5217, 667, 5214, 668, 5191, 675, 5172, 679, 5166, 680, 5138, 682, 5114, 683, 5101, 690, 5068, 686, 5039, 683, 5006, 679, 4956, 678, 4941, 678, 4926, 677, 4907, 678, 4898, 685, 4879, 698, 4836, 708, 4769, 726, 4756, 729, 4744, 732, 4710, 732, 4673, 732, 4591, 715, 4509, 698, 4479, 698, 4461, 698, 4445, 704, 4427, 713, 4403, 715, 4395, 716, 4367, 721, 4352, 725, 4332, 725, 4307, 725, 4273, 720, 4263, 719, 4249, 715, Q, 4233, 710, 4222, 708, Z]
      ],
      "label": "Yeka",
      "shortLabel": "YE",
      "labelPosition": [398.4, 108.5],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'addisababacity',
  type: 'maps'
};