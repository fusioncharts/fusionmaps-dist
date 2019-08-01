/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Ermera.17.06-21-2016 06:10:57
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
  "name": "Ermera",
  "revision": 17,
  "standaloneInit": true,
  "baseWidth": 486,
  "baseHeight": 500,
  "baseScaleFactor": 10,
  "entities": {
    "TL.ER.AT": {
      "outlines": [
        [M, 3532, 3651, Q, 3511, 3651, 3504, 3677, 3499, 3693, 3485, 3741, L, 3467, 3741, Q, 3447, 3720, 3387, 3721, 3326, 3722, 3305, 3697, 3290, 3677, 3279, 3663, 3259, 3637, 3248, 3633, 3224, 3623, 3216, 3602, 3210, 3586, 3187, 3586, 3183, 3586, 3145, 3602, 3108, 3617, 3098, 3617, 3065, 3618, 3048, 3627, 3030, 3637, 3010, 3637, 2962, 3637, 2958, 3633, 2953, 3629, 2951, 3605, 2949, 3580, 2968, 3542, 2987, 3503, 2987, 3503, 2987, 3487, 2967, 3480, 2940, 3473, 2937, 3470, 2923, 3456, 2916, 3451, 2902, 3443, 2885, 3443, 2857, 3443, 2834, 3416, 2795, 3371, 2790, 3367, 2767, 3348, 2764, 3322, 2758, 3280, 2754, 3268, 2749, 3257, 2734, 3248, 2716, 3240, 2710, 3235, 2697, 3226, 2690, 3215, 2685, 3203, 2680, 3193, 2674, 3194, 2664, 3193, 2649, 3192, 2643, 3194, 2628, 3200, 2621, 3214, 2615, 3227, 2608, 3227, L, 2604, 3227, Q, 2604, 3223, 2600, 3213, 2594, 3202, 2590, 3199, L, 2558, 3199, Q, 2558, 3200, 2557, 3220, 2553, 3238, 2542, 3238, 2537, 3238, 2531, 3231, 2525, 3222, 2523, 3222, 2520, 3222, 2511, 3227, 2501, 3231, 2499, 3231, 2489, 3231, 2478, 3212, 2466, 3192, 2455, 3192, 2448, 3192, 2443, 3200, 2436, 3210, 2431, 3213, 2421, 3218, 2410, 3223, 2404, 3227, 2404, 3240, 2404, 3262, 2421, 3269, 2438, 3275, 2438, 3293, 2438, 3327, 2391, 3325, 2343, 3323, 2343, 3340, 2343, 3357, 2355, 3368, 2367, 3380, 2367, 3388, 2367, 3400, 2343, 3451, 2320, 3503, 2311, 3509, 2302, 3514, 2293, 3516, 2283, 3516, 2279, 3517, 2269, 3519, 2263, 3527, 2255, 3541, 2254, 3542, 2251, 3545, 2228, 3552, 2203, 3558, 2194, 3564, 2181, 3573, 2170, 3590, L, 2154, 3620, Q, 2144, 3637, 2118, 3670, 2099, 3699, 2067, 3715, 2044, 3726, 2022, 3749, 2003, 3768, 1996, 3768, 1993, 3762, 1983, 3756, 1966, 3743, 1938, 3743, 1916, 3745, 1905, 3745, 1885, 3745, 1871, 3738, 1863, 3732, 1844, 3728, 1821, 3723, 1808, 3718, 1792, 3712, 1779, 3695, 1764, 3674, 1757, 3670, 1745, 3697, 1742, 3707, 1737, 3724, 1737, 3745, 1737, 3751, 1731, 3759, 1725, 3766, 1732, 3781, 1739, 3796, 1761, 3810, 1783, 3823, 1817, 3842, 1847, 3889, 1867, 3918, 1870, 3922, 1905, 3959, 1940, 3998, 1940, 4012, 1940, 4053, 1903, 4060, 1853, 4068, 1835, 4094, 1820, 4118, 1802, 4154, 1773, 4213, 1773, 4235, 1773, 4266, 1794, 4274, 1818, 4283, 1822, 4323, 1826, 4356, 1848, 4372, 1860, 4380, 1887, 4391, 1919, 4407, 1920, 4442, 1922, 4494, 1924, 4499, 1938, 4530, 1938, 4531, 1948, 4550, 1958, 4558, 1974, 4569, 2014, 4596, 2042, 4615, 2070, 4679, 2079, 4699, 2103, 4743, 2117, 4769, 2123, 4797, 2151, 4921, 2161, 4938, 2181, 4970, 2254, 4970, 2332, 4970, 2368, 4957, 2404, 4945, 2479, 4893, 2519, 4865, 2572, 4848, 2625, 4832, 2670, 4834, 2745, 4838, 2884, 4799, 2907, 4793, 2983, 4758, 3035, 4735, 3089, 4735, 3136, 4735, 3228, 4783, 3319, 4831, 3329, 4831, 3344, 4831, 3398, 4806, 3425, 4793, 3456, 4778, 3516, 4761, 3574, 4738, 3595, 4729, 3603, 4689, 3612, 4643, 3617, 4639, 3640, 4619, 3656, 4601, 3689, 4566, 3689, 4542, 3689, 4512, 3664, 4479, 3638, 4445, 3638, 4427, 3638, 4390, 3660, 4366, 3690, 4337, 3706, 4316, 3721, 4293, 3839, 4216, 3957, 4138, 3983, 4116, 4008, 4094, 4018, 4085, 4026, 4075, 4027, 4055, 4028, 4031, 4032, 4022, 4047, 3992, 4061, 3961, 4073, 3944, 4117, 3922, 4198, 3883, 4209, 3801, 4212, 3775, 4211, 3728, 4208, 3675, 4210, 3655, 4214, 3613, 4246, 3585, 4260, 3573, 4292, 3557, 4295, 3556, 4299, 3554, 4285, 3541, 4258, 3537, 4224, 3533, 4211, 3527, 4202, 3524, 4200, 3513, 4199, 3497, 4197, 3489, 4195, 3480, 4186, 3474, 4178, 3467, 4168, 3466, 4167, 3466, 4082, 3439, 4002, 3414, 3991, 3414, 3975, 3414, 3962, 3421, 3943, 3432, 3921, 3443, 3910, 3448, 3895, 3462, 3883, 3474, 3879, 3480, 3875, 3489, 3870, 3506, 3863, 3526, 3862, 3532, 3856, 3548, 3840, 3548, 3821, 3545, 3812, 3546, 3799, 3547, 3788, 3558, 3783, 3563, 3773, 3575, 3767, 3582, 3754, 3584, 3741, 3586, 3730, 3600, 3721, 3612, 3717, 3614, 3707, 3622, 3688, 3621, 3681, 3621, 3656, 3642, 3631, 3662, 3624, 3662, 3617, 3662, 3604, 3655, 3590, 3647, 3585, 3647, 3571, 3647, 3565, 3652, 3560, 3655, 3551, 3655, Q, 3537, 3651, 3532, 3651, Z]
      ],
      "label": "Atsabe",
      "shortLabel": "AT",
      "labelPosition": [282.3, 419.5],
      "labelAlignment": [CEN, MID]
    },
    "TL.ER.ER": {
      "outlines": [
        [M, 3252, 1113, Q, 3246, 1113, 3231, 1119, 3217, 1125, 3216, 1125, 3178, 1127, 3171, 1139, 3163, 1150, 3143, 1150, 3132, 1150, 3099, 1123, 3066, 1095, 3048, 1095, 3040, 1095, 3018, 1102, 2996, 1109, 2991, 1109, 2979, 1109, 2968, 1100, 2954, 1090, 2936, 1085, 2929, 1083, 2876, 1083, 2876, 1092, 2850, 1081, 2822, 1066, 2816, 1064, 2801, 1061, 2761, 1059, 2747, 1059, 2722, 1020, 2714, 1008, 2694, 1006, 2685, 1004, 2668, 1006, 2631, 1007, 2612, 1001, 2581, 991, 2584, 963, 2587, 941, 2570, 915, 2546, 876, 2542, 868, 2535, 878, 2530, 885, 2503, 923, 2470, 923, 2452, 923, 2426, 901, 2402, 878, 2388, 878, 2378, 878, 2355, 911, 2345, 924, 2332, 932, L, 2346, 976, Q, 2349, 986, 2351, 996, 2354, 1001, 2359, 1003, 2369, 1005, 2375, 1008, 2415, 1032, 2461, 1066, 2474, 1076, 2489, 1098, 2506, 1124, 2510, 1145, 2513, 1161, 2533, 1245, 2533, 1255, 2521, 1267, 2508, 1278, 2508, 1285, 2508, 1301, 2529, 1308, 2555, 1317, 2562, 1329, 2565, 1335, 2575, 1362, 2582, 1380, 2597, 1389, 2610, 1397, 2625, 1411, 2634, 1419, 2655, 1440, 2686, 1467, 2688, 1472, 2690, 1475, 2690, 1504, 2690, 1529, 2683, 1551, 2674, 1573, 2674, 1611, 2674, 1643, 2679, 1666, 2684, 1689, 2684, 1702, 2684, 1723, 2678, 1732, 2662, 1756, 2655, 1769, 2652, 1773, 2651, 1777, 2641, 1792, 2638, 1797, 2634, 1807, 2634, 1819, 2634, 1849, 2655, 1874, 2676, 1900, 2676, 1910, L, 2671, 1945, Q, 2671, 1968, 2700, 1972, 2727, 1976, 2727, 2005, 2727, 2016, 2702, 2068, 2676, 2121, 2676, 2146, 2676, 2190, 2698, 2211, 2720, 2231, 2720, 2251, 2720, 2287, 2729, 2298, 2744, 2317, 2754, 2362, 2757, 2377, 2765, 2438, 2773, 2498, 2773, 2505, 2773, 2536, 2767, 2548, 2760, 2563, 2733, 2577, 2725, 2581, 2724, 2595, 2722, 2611, 2720, 2614, 2706, 2634, 2706, 2650, 2706, 2659, 2714, 2666, 2725, 2676, 2729, 2684, L, 2730, 2694, Q, 2740, 2693, 2755, 2693, 2771, 2693, 2830, 2697, 2846, 2697, 2849, 2697, 2857, 2696, 2861, 2693, 2863, 2692, 2869, 2675, 2874, 2665, 2883, 2657, 2894, 2647, 2899, 2641, 2904, 2634, 2913, 2621, 2922, 2611, 2936, 2609, 2944, 2609, 2951, 2600, 2958, 2591, 2964, 2590, 2995, 2584, 3010, 2556, 3029, 2520, 3036, 2516, 3043, 2511, 3065, 2499, 3082, 2489, 3093, 2480, 3094, 2479, 3098, 2470, 3102, 2463, 3109, 2456, L, 3120, 2454, Q, 3131, 2451, 3136, 2447, 3143, 2439, 3177, 2413, 3210, 2387, 3225, 2377, 3235, 2371, 3273, 2348, 3306, 2327, 3309, 2321, 3310, 2319, 3311, 2295, 3312, 2277, 3321, 2275, 3325, 2275, 3343, 2267, 3358, 2261, 3365, 2261, 3387, 2259, 3386, 2255, 3385, 2250, 3387, 2241, 3388, 2232, 3398, 2212, 3407, 2191, 3408, 2095, 3408, 2094, 3408, 2093, 3414, 2086, 3439, 2073, 3463, 2059, 3460, 2039, 3459, 2030, 3463, 2022, 3468, 2012, 3478, 2008, 3481, 2006, 3503, 1982, 3516, 1969, 3521, 1929, 3524, 1894, 3547, 1886, 3558, 1882, 3565, 1873, 3575, 1860, 3577, 1859, 3593, 1846, 3602, 1851, 3611, 1856, 3626, 1859, 3639, 1862, 3649, 1869, 3658, 1876, 3689, 1876, 3704, 1876, 3717, 1872, 3730, 1868, 3748, 1868, L, 3819, 1869, Q, 3873, 1814, 3904, 1764, 3919, 1741, 3922, 1676, 3928, 1595, 3928, 1594, 3933, 1565, 3959, 1524, 3981, 1489, 3981, 1460, 3981, 1395, 3875, 1340, 3783, 1292, 3730, 1295, 3717, 1291, 3697, 1261, 3677, 1231, 3677, 1216, 3677, 1213, 3679, 1210, 3664, 1199, 3646, 1190, 3627, 1182, 3617, 1182, 3598, 1182, 3595, 1184, 3590, 1188, 3583, 1214, L, 3575, 1214, Q, 3571, 1200, 3571, 1188, 3571, 1170, 3580, 1162, 3587, 1152, 3587, 1136, 3587, 1116, 3579, 1101, 3569, 1083, 3552, 1083, 3547, 1083, 3533, 1089, 3518, 1095, 3513, 1095, 3503, 1095, 3500, 1085, 3499, 1072, 3498, 1064, 3491, 1033, 3436, 1033, 3405, 1033, 3397, 1041, 3394, 1044, 3384, 1062, 3376, 1074, 3372, 1074, 3335, 1077, 3329, 1078, 3310, 1082, 3296, 1097, Q, 3281, 1113, 3252, 1113, Z]
      ],
      "label": "Ermera",
      "shortLabel": "ER",
      "labelPosition": [321.4, 161.1],
      "labelAlignment": [CEN, MID]
    },
    "TL.ER.HA": {
      "outlines": [
        [M, 1790, 758, Q, 1755, 758, 1731, 806, 1715, 835, 1711, 860, 1705, 900, 1681, 926, 1652, 959, 1606, 959, 1552, 953, 1544, 953, 1477, 953, 1435, 982, 1407, 1001, 1370, 1052, 1327, 1110, 1299, 1136, 1248, 1182, 1172, 1207, 1169, 1208, 1063, 1225, 991, 1237, 955, 1272, 854, 1368, 755, 1368, 751, 1368, 696, 1345, 642, 1322, 638, 1322, 622, 1322, 524, 1347, 424, 1373, 398, 1374, 346, 1376, 294, 1401, 270, 1413, 204, 1457, 200, 1460, 194, 1464, 161, 1481, 102, 1536, 35, 1598, 35, 1611, 35, 1620, 75, 1653, 118, 1687, 122, 1700, 132, 1726, 137, 1772, 146, 1806, 184, 1806, 207, 1806, 247, 1787, 286, 1768, 326, 1768, 522, 1768, 713, 1884, 897, 1995, 981, 2152, 990, 2168, 1003, 2194, 1014, 2215, 1027, 2229, 1033, 2237, 1065, 2262, 1098, 2287, 1101, 2291, 1110, 2303, 1120, 2340, 1131, 2378, 1135, 2384, 1144, 2399, 1155, 2427, 1167, 2458, 1172, 2468, 1183, 2488, 1226, 2535, 1260, 2571, 1262, 2598, 1263, 2610, 1284, 2683, 1305, 2755, 1305, 2770, 1305, 2787, 1304, 2793, 1308, 2790, 1292, 2845, 1276, 2900, 1276, 2908, 1276, 2959, 1321, 2992, 1346, 3011, 1392, 3039, 1411, 3058, 1446, 3113, 1486, 3175, 1486, 3197, 1486, 3217, 1463, 3255, 1439, 3294, 1439, 3357, 1439, 3489, 1542, 3568, 1634, 3639, 1757, 3639, L, 1757, 3670, Q, 1764, 3674, 1779, 3695, 1792, 3712, 1808, 3718, 1821, 3723, 1844, 3728, 1863, 3732, 1871, 3738, 1885, 3745, 1905, 3745, 1916, 3745, 1938, 3743, 1966, 3743, 1983, 3756, 1993, 3762, 1996, 3768, 2003, 3768, 2022, 3749, 2044, 3726, 2067, 3715, 2099, 3699, 2118, 3670, 2144, 3637, 2154, 3620, L, 2170, 3590, Q, 2181, 3573, 2194, 3564, 2203, 3558, 2228, 3552, 2251, 3545, 2254, 3542, 2255, 3541, 2263, 3527, 2269, 3519, 2279, 3517, 2283, 3516, 2293, 3516, 2302, 3514, 2311, 3509, 2320, 3503, 2343, 3451, 2367, 3400, 2367, 3388, 2367, 3380, 2355, 3368, 2343, 3357, 2343, 3340, 2343, 3323, 2391, 3325, 2438, 3327, 2438, 3293, 2438, 3275, 2421, 3269, 2404, 3262, 2404, 3240, 2404, 3227, 2410, 3223, 2421, 3218, 2431, 3213, 2436, 3210, 2443, 3200, 2448, 3192, 2455, 3192, 2466, 3192, 2478, 3212, 2489, 3231, 2499, 3231, 2501, 3231, 2511, 3227, 2520, 3222, 2523, 3222, 2525, 3222, 2531, 3231, 2537, 3238, 2542, 3238, 2553, 3238, 2557, 3220, 2558, 3200, 2558, 3199, L, 2590, 3199, Q, 2594, 3202, 2600, 3213, 2604, 3223, 2604, 3227, L, 2608, 3227, Q, 2615, 3227, 2621, 3214, 2628, 3200, 2643, 3194, 2649, 3192, 2664, 3193, 2674, 3194, 2680, 3193, 2684, 3193, 2687, 3192, 2692, 3192, 2704, 3187, 2711, 3184, 2723, 3178, 2747, 3170, 2747, 3160, 2747, 3139, 2733, 3131, 2718, 3122, 2718, 3094, 2732, 3064, 2745, 3034, 2772, 2975, 2772, 2973, 2772, 2958, 2763, 2952, 2747, 2940, 2745, 2938, 2736, 2935, 2727, 2925, 2709, 2903, 2706, 2900, 2685, 2885, 2677, 2879, 2664, 2869, 2664, 2851, 2698, 2798, 2698, 2787, 2698, 2778, 2693, 2767, 2687, 2756, 2687, 2742, 2687, 2712, 2707, 2701, 2715, 2696, 2730, 2694, L, 2729, 2684, Q, 2725, 2676, 2714, 2666, 2706, 2659, 2706, 2650, 2706, 2634, 2720, 2614, 2722, 2611, 2724, 2595, 2725, 2581, 2733, 2577, 2760, 2563, 2767, 2548, 2773, 2536, 2773, 2505, 2773, 2498, 2765, 2438, 2757, 2377, 2754, 2362, 2744, 2317, 2729, 2298, 2720, 2287, 2720, 2251, 2720, 2231, 2698, 2211, 2676, 2190, 2676, 2146, 2676, 2121, 2702, 2068, 2727, 2016, 2727, 2005, 2727, 1976, 2700, 1972, 2671, 1968, 2671, 1945, L, 2676, 1910, Q, 2676, 1900, 2655, 1874, 2634, 1849, 2634, 1819, 2634, 1807, 2638, 1797, 2641, 1792, 2651, 1777, 2652, 1773, 2655, 1769, 2662, 1756, 2678, 1732, 2684, 1723, 2684, 1702, 2684, 1689, 2679, 1666, 2674, 1643, 2674, 1611, 2674, 1573, 2683, 1551, 2690, 1529, 2690, 1504, 2690, 1475, 2688, 1472, 2686, 1467, 2655, 1440, 2634, 1419, 2625, 1411, 2610, 1397, 2597, 1389, 2582, 1380, 2575, 1362, 2565, 1335, 2562, 1329, 2555, 1317, 2529, 1308, 2508, 1301, 2508, 1285, 2508, 1278, 2521, 1267, 2533, 1255, 2533, 1245, 2513, 1161, 2510, 1145, 2506, 1124, 2489, 1098, 2474, 1076, 2461, 1066, 2415, 1032, 2375, 1008, 2369, 1005, 2359, 1003, 2354, 1001, 2351, 996, 2349, 986, 2346, 976, L, 2332, 932, Q, 2313, 943, 2286, 943, 2245, 943, 2233, 932, 2205, 906, 2161, 884, 2140, 874, 2093, 835, 2060, 808, 2027, 808, 2005, 808, 1976, 833, 1946, 857, 1911, 857, 1858, 857, 1831, 807, 1820, 783, 1814, 773, Q, 1804, 758, 1790, 758, Z]
      ],
      "label": "Hatólia",
      "shortLabel": "HA",
      "labelPosition": [178.4, 226.3],
      "labelAlignment": [CEN, MID]
    },
    "TL.ER.LE": {
      "outlines": [
        [M, 3649, 1869, Q, 3639, 1862, 3626, 1859, 3611, 1856, 3602, 1851, 3593, 1846, 3577, 1859, 3575, 1860, 3565, 1873, 3558, 1882, 3547, 1886, 3524, 1894, 3521, 1929, 3516, 1969, 3503, 1982, 3481, 2006, 3478, 2008, 3468, 2012, 3463, 2022, 3459, 2030, 3460, 2039, 3463, 2059, 3439, 2073, 3414, 2086, 3408, 2093, 3408, 2094, 3408, 2095, 3407, 2191, 3398, 2212, 3388, 2232, 3387, 2241, 3385, 2250, 3386, 2255, 3387, 2259, 3365, 2261, 3358, 2261, 3343, 2267, 3325, 2275, 3321, 2275, 3312, 2277, 3311, 2295, 3310, 2319, 3309, 2321, 3306, 2327, 3273, 2348, 3235, 2371, 3225, 2377, 3210, 2387, 3177, 2413, 3143, 2439, 3136, 2447, 3131, 2451, 3120, 2454, L, 3109, 2456, Q, 3102, 2463, 3098, 2470, 3094, 2479, 3093, 2480, 3082, 2489, 3065, 2499, 3043, 2511, 3036, 2516, 3029, 2520, 3010, 2556, 2995, 2584, 2964, 2590, 2958, 2591, 2951, 2600, 2944, 2609, 2936, 2609, 2922, 2611, 2913, 2621, 2904, 2634, 2899, 2641, 2894, 2647, 2883, 2657, 2874, 2665, 2869, 2675, 2863, 2692, 2861, 2693, 2857, 2696, 2849, 2697, 2846, 2697, 2830, 2697, 2771, 2693, 2755, 2693, 2740, 2693, 2730, 2694, 2715, 2696, 2707, 2701, 2687, 2712, 2687, 2742, 2687, 2756, 2693, 2767, 2698, 2778, 2698, 2787, 2698, 2798, 2664, 2851, 2664, 2869, 2677, 2879, 2685, 2885, 2706, 2900, 2709, 2903, 2727, 2925, 2736, 2935, 2745, 2938, 2747, 2940, 2763, 2952, 2772, 2958, 2772, 2973, 2772, 2975, 2745, 3034, 2732, 3064, 2718, 3094, 2718, 3122, 2733, 3131, 2747, 3139, 2747, 3160, 2747, 3170, 2723, 3178, 2711, 3184, 2704, 3187, 2692, 3192, 2687, 3192, 2684, 3193, 2680, 3193, 2685, 3203, 2690, 3215, 2697, 3226, 2710, 3235, 2716, 3240, 2734, 3248, 2749, 3257, 2754, 3268, 2758, 3280, 2764, 3322, 2767, 3348, 2790, 3367, 2795, 3371, 2834, 3416, 2857, 3443, 2885, 3443, 2902, 3443, 2916, 3451, 2923, 3456, 2937, 3470, 2940, 3473, 2967, 3480, 2987, 3487, 2987, 3503, 2987, 3503, 2968, 3542, 2949, 3580, 2951, 3605, 2953, 3629, 2958, 3633, 2962, 3637, 3010, 3637, 3030, 3637, 3048, 3627, 3065, 3618, 3098, 3617, 3108, 3617, 3145, 3602, 3183, 3586, 3187, 3586, 3210, 3586, 3216, 3602, 3224, 3623, 3248, 3633, 3259, 3637, 3279, 3663, 3290, 3677, 3305, 3697, 3326, 3722, 3387, 3721, 3447, 3720, 3467, 3741, L, 3485, 3741, Q, 3499, 3693, 3504, 3677, 3511, 3651, 3532, 3651, 3537, 3651, 3551, 3655, 3560, 3655, 3565, 3652, 3571, 3647, 3585, 3647, 3590, 3647, 3604, 3655, 3617, 3662, 3624, 3662, 3631, 3662, 3656, 3642, 3681, 3621, 3688, 3621, 3707, 3622, 3717, 3614, 3721, 3612, 3730, 3600, 3741, 3586, 3754, 3584, 3767, 3582, 3773, 3575, 3783, 3563, 3788, 3558, 3799, 3547, 3812, 3546, 3821, 3545, 3840, 3548, 3856, 3548, 3862, 3532, 3863, 3526, 3870, 3506, 3875, 3489, 3879, 3480, 3883, 3474, 3895, 3462, 3910, 3448, 3921, 3443, 3943, 3432, 3962, 3421, 3975, 3414, 3991, 3414, 4002, 3414, 4082, 3439, 4167, 3466, 4168, 3466, 4178, 3467, 4186, 3474, 4195, 3480, 4197, 3489, 4199, 3497, 4200, 3513, 4202, 3524, 4211, 3527, 4224, 3533, 4258, 3537, 4285, 3541, 4299, 3554, 4323, 3538, 4346, 3494, 4360, 3467, 4381, 3426, 4396, 3403, 4436, 3386, 4459, 3375, 4509, 3356, 4519, 3351, 4577, 3333, 4629, 3309, 4629, 3275, 4629, 3190, 4544, 3119, 4517, 3097, 4476, 3046, 4433, 2995, 4420, 2983, 4393, 2961, 4326, 2965, 4272, 2968, 4264, 2933, 4254, 2891, 4237, 2833, 4226, 2795, 4224, 2757, 4224, 2748, 4224, 2739, 4232, 2656, 4227, 2607, 4220, 2553, 4191, 2498, 4178, 2472, 4146, 2448, 4102, 2413, 4094, 2405, 4088, 2398, 4081, 2350, 4073, 2304, 4047, 2284, 4028, 2269, 3970, 2271, 3909, 2277, 3896, 2277, 3863, 2278, 3843, 2268, 3820, 2257, 3787, 2218, 3768, 2195, 3768, 2154, 3768, 2111, 3753, 2091, 3728, 2069, 3712, 2053, 3683, 2025, 3683, 1995, 3683, 1990, 3764, 1920, 3794, 1894, 3819, 1869, L, 3748, 1868, Q, 3730, 1868, 3717, 1872, 3704, 1876, 3689, 1876, Q, 3658, 1876, 3649, 1869, Z]
      ],
      "label": "Letefoho",
      "shortLabel": "LE",
      "labelPosition": [364.7, 290.9],
      "labelAlignment": [CEN, MID]
    },
    "TL.ER.RA": {
      "outlines": [
        [M, 4376, 27, Q, 4364, 27, 4342, 48, 4320, 70, 4306, 70, 4299, 70, 4277, 58, 4256, 46, 4236, 46, 4209, 46, 4150, 87, 4091, 129, 4064, 129, 4042, 129, 4011, 111, 3980, 93, 3963, 93, 3930, 93, 3881, 137, 3832, 181, 3802, 181, 3782, 181, 3774, 167, 3765, 151, 3754, 151, 3744, 151, 3721, 162, 3700, 173, 3686, 173, 3670, 173, 3646, 153, 3621, 132, 3610, 132, 3590, 132, 3554, 177, 3517, 223, 3468, 228, 3437, 232, 3409, 275, 3382, 330, 3366, 352, 3345, 382, 3314, 397, 3260, 422, 3239, 436, 3212, 454, 3153, 476, 3132, 484, 3113, 497, 3102, 505, 3084, 505, 3067, 505, 3026, 469, 2986, 433, 2966, 432, 2947, 431, 2934, 462, 2922, 492, 2916, 519, 2910, 546, 2916, 569, 2922, 592, 2924, 602, 2925, 613, 2924, 624, 2923, 635, 2922, 682, 2917, 725, 2889, 733, 2860, 742, 2814, 741, 2750, 738, 2740, 739, 2684, 744, 2652, 754, 2599, 770, 2576, 808, 2555, 846, 2542, 868, 2546, 876, 2570, 915, 2587, 941, 2584, 963, 2581, 991, 2612, 1001, 2631, 1007, 2668, 1006, 2685, 1004, 2694, 1006, 2714, 1008, 2722, 1020, 2747, 1059, 2761, 1059, 2801, 1061, 2816, 1064, 2822, 1066, 2850, 1081, 2876, 1092, 2876, 1083, 2929, 1083, 2936, 1085, 2954, 1090, 2968, 1100, 2979, 1109, 2991, 1109, 2996, 1109, 3018, 1102, 3040, 1095, 3048, 1095, 3066, 1095, 3099, 1123, 3132, 1150, 3143, 1150, 3163, 1150, 3171, 1139, 3178, 1127, 3216, 1125, 3217, 1125, 3231, 1119, 3246, 1113, 3252, 1113, 3281, 1113, 3296, 1097, 3310, 1082, 3329, 1078, 3335, 1077, 3372, 1074, 3376, 1074, 3384, 1062, 3394, 1044, 3397, 1041, 3405, 1033, 3436, 1033, 3491, 1033, 3498, 1064, 3499, 1072, 3500, 1085, 3503, 1095, 3513, 1095, 3518, 1095, 3533, 1089, 3547, 1083, 3552, 1083, 3569, 1083, 3579, 1101, 3587, 1116, 3587, 1136, 3587, 1152, 3580, 1162, 3571, 1170, 3571, 1188, 3571, 1200, 3575, 1214, L, 3583, 1214, Q, 3590, 1188, 3595, 1184, 3598, 1182, 3617, 1182, 3627, 1182, 3646, 1190, 3664, 1199, 3679, 1210, 3686, 1200, 3724, 1201, 3749, 1201, 3779, 1202, 3838, 1180, 3870, 1180, 3903, 1180, 3912, 1195, 3923, 1216, 3959, 1227, 4000, 1239, 4061, 1239, 4101, 1239, 4109, 1182, 4111, 1113, 4116, 1087, 4122, 1043, 4130, 1006, 4145, 932, 4163, 932, 4176, 932, 4194, 959, 4204, 974, 4225, 1007, 4235, 1021, 4270, 1024, 4282, 1026, 4317, 1026, 4414, 1026, 4474, 989, 4533, 954, 4616, 846, 4627, 833, 4686, 777, 4737, 728, 4749, 706, 4774, 662, 4799, 626, 4811, 601, 4811, 551, 4811, 501, 4778, 471, 4733, 429, 4719, 393, 4693, 336, 4681, 308, 4661, 262, 4650, 207, 4639, 152, 4599, 139, 4546, 132, 4514, 126, 4480, 120, 4443, 72, Q, 4408, 27, 4376, 27, Z]
      ],
      "label": "Railaco",
      "shortLabel": "RA",
      "labelPosition": [367.6, 63.3],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'ermera',
  type: 'maps'
};