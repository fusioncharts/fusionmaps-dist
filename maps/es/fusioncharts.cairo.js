/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Cairo.18.08-07-2012 02:19:10
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
  "name": "Cairo",
  "revision": 18,
  "standaloneInit": true,
  "baseWidth": 547,
  "baseHeight": 594,
  "baseScaleFactor": 10,
  "entities": {
    "01": {
      "outlines": [
        [M, 5124, 37, Q, 5120, 32, 5097, 32, 5046, 38, 5030, 38, L, 4998, 37, Q, 4995, 39, 4994, 46, 4993, 53, 4990, 54, 4987, 56, 4986, 63, 4986, 71, 4981, 73, 4975, 75, 4973, 80, 4972, 83, 4971, 87, 4966, 94, 4965, 102, 4965, 113, 4958, 120, 4954, 123, 4955, 129, 4955, 136, 4954, 139, 4947, 150, 4947, 156, 4947, 165, 4953, 169, 4953, 174, 4942, 196, 4939, 203, 4932, 209, 4932, 217, 4927, 226, 4921, 243, 4917, 251, 4909, 267, 4895, 267, 4885, 267, 4884, 264, 4883, 260, 4856, 257, 4859, 247, 4848, 246, 4831, 245, 4826, 241, 4825, 240, 4808, 236, 4797, 231, 4791, 228, L, 4784, 228, Q, 4757, 218, 4734, 210, 4727, 202, 4721, 199, 4714, 197, 4713, 197, 4712, 196, 4709, 194, 4706, 193, 4677, 182, 4648, 170, 4641, 168, 4633, 166, 4633, 164, 4632, 159, 4623, 156, 4614, 153, 4606, 145, L, 4572, 145, Q, 4574, 158, 4565, 185, 4557, 212, 4557, 222, 4559, 249, 4551, 273, 4541, 299, 4540, 307, 4492, 309, 4488, 309, 4440, 286, 4416, 284, 4400, 282, 4378, 275, 4361, 269, 4342, 270, 4322, 271, 4269, 250, 4238, 248, 4232, 247, 4206, 239, 4193, 239, 4174, 239, 4172, 240, 4167, 242, 4163, 254, 4163, 262, 4148, 470, 4146, 495, 4147, 532, 4147, 554, 4148, 598, 4147, 605, 4145, 632, 4142, 659, 4129, 703, 4094, 705, 4090, 705, 4072, 705, 4044, 698, 4009, 690, 3997, 688, 3977, 675, 3960, 676, 3948, 677, 3934, 671, 3919, 665, 3906, 665, 3898, 665, 3886, 672, 3875, 678, 3859, 676, 3855, 686, 3845, 688, 3838, 688, 3843, 699, 3805, 700, 3801, 700, 3798, 700, 3792, 695, 3787, 690, 3777, 690, 3765, 690, 3764, 684, 3764, 677, 3764, 675, L, 3737, 675, Q, 3704, 676, 3668, 700, 3642, 706, 3636, 715, 3631, 724, 3622, 728, 3612, 732, 3606, 735, 3600, 735, 3517, 740, 3467, 743, 3441, 735, 3425, 731, 3413, 701, 3401, 663, 3393, 645, L, 3345, 645, Q, 3346, 652, 3337, 654, 3325, 654, 3321, 655, 3314, 657, 3308, 665, 3302, 672, 3296, 672, 3287, 672, 3275, 666, 3267, 662, 3256, 661, L, 3189, 663, Q, 3184, 662, 3174, 655, 3163, 647, 3156, 648, 3148, 649, 3138, 643, 3094, 633, 3087, 624, 3049, 598, 3049, 593, 3065, 572, 3063, 544, 3063, 538, 3068, 532, 3074, 526, 3075, 520, 3073, 512, 3073, 506, 3073, 496, 3083, 501, L, 3083, 486, Q, 3077, 478, 3079, 472, 3058, 472, 3051, 467, 3039, 457, 3027, 455, 2995, 444, 2979, 440, 2959, 432, 2949, 429, 2920, 429, 2910, 423, 2902, 419, 2858, 406, L, 2805, 406, Q, 2807, 434, 2793, 438, L, 2793, 472, Q, 2800, 472, 2806, 481, 2812, 490, 2823, 487, 2827, 494, 2839, 494, L, 2865, 494, Q, 2866, 494, 2881, 507, 2885, 508, 2900, 510, 2902, 514, 2917, 523, 2927, 529, 2927, 541, 2927, 547, 2921, 559, 2916, 570, 2917, 582, 2918, 594, 2909, 602, 2901, 609, 2904, 623, 2892, 623, 2892, 638, 2892, 655, 2914, 661, 2943, 669, 2946, 672, 2985, 709, 2985, 728, 2985, 746, 2979, 799, 2964, 810, 2961, 832, 2960, 845, 2961, 878, 2945, 878, 2945, 903, 2944, 938, 2943, 939, 2935, 957, 2935, 978, 2935, 989, 2931, 996, 2927, 1003, 2927, 1014, L, 2913, 1014, Q, 2910, 1013, 2907, 1012, 2884, 1012, 2872, 1012, 2851, 1014, 2848, 1027, 2843, 1056, 2841, 1093, 2840, 1105, 2841, 1129, 2840, 1149, 2835, 1156, 2829, 1163, 2825, 1184, 2822, 1204, 2814, 1213, 2818, 1234, 2808, 1252, 2797, 1270, 2775, 1268, 2753, 1266, 2682, 1266, 2612, 1266, 2543, 1276, 2475, 1286, 2454, 1328, 2434, 1370, 2416, 1395, 2399, 1420, 2375, 1436, 2352, 1452, 2317, 1480, 2282, 1507, 2250, 1543, 2218, 1579, 2202, 1589, 2186, 1599, 2147, 1599, 2117, 1599, 2109, 1598, 2082, 1581, 2073, 1584, 2038, 1578, 2012, 1578, 1996, 1578, 1987, 1579, 1980, 1595, 1959, 1677, 1952, 1695, 1947, 1722, 1942, 1749, 1933, 1773, 1923, 1796, 1915, 1825, 1906, 1853, 1894, 1878, 1881, 1903, 1873, 1933, 1871, 1944, 1849, 1978, 1832, 2019, 1769, 2058, 1757, 2065, 1705, 2064, 1656, 2074, 1632, 2076, 1584, 2081, 1561, 2079, 1547, 2078, 1525, 2084, 1501, 2090, 1487, 2091, 1468, 2092, 1419, 2101, 1382, 2108, 1348, 2108, 1320, 2108, 1275, 2117, 1221, 2128, 1202, 2130, 1153, 2142, 1128, 2139, 1118, 2138, 1105, 2145, 1094, 2153, 1092, 2153, 1075, 2153, 1057, 2155, 1032, 2158, 1002, 2184, 984, 2200, 951, 2218, 939, 2225, 918, 2228, 897, 2231, 888, 2237, 879, 2243, 857, 2244, 833, 2245, 811, 2258, 751, 2254, 710, 2256, 669, 2258, 659, 2260, 648, 2261, 646, 2283, 645, 2285, 631, 2298, 616, 2338, 615, 2340, 605, 2355, 582, 2388, 579, 2395, 566, 2414, 552, 2434, 547, 2436, 528, 2445, 503, 2463, 478, 2482, 465, 2488, 445, 2498, 440, 2505, 435, 2512, 437, 2529, 440, 2554, 429, 2589, 420, 2616, 420, 2643, 419, 2661, 417, 2695, 417, 2699, 400, 2742, 398, 2783, 391, 2793, 387, 2800, 365, 2839, 361, 2846, 343, 2888, 322, 2966, 298, 2984, 275, 3002, 259, 3013, 244, 3024, 214, 3045, 199, 3046, 189, 3066, 165, 3090, 83, 3162, 82, 3162, 60, 3183, 60, 3184, 59, 3197, 59, 3206, 54, 3210, 46, 3217, 39, 3232, 31, 3238, 31, 3259, 31, 3290, 45, 3299, 46, 3310, 49, 3339, L, 87, 3510, Q, 100, 3551, 123, 3642, 143, 3695, 156, 3760, 158, 3766, 174, 3822, 185, 3858, 187, 3888, 187, 3890, 187, 3891, L, 187, 3925, Q, 202, 3936, 234, 3970, 266, 3997, 303, 3985, L, 303, 3999, Q, 291, 4008, 269, 4044, L, 240, 4093, Q, 228, 4103, 228, 4126, 228, 4131, 223, 4141, 217, 4150, 217, 4162, 217, 4175, 216, 4184, 215, 4193, 202, 4231, 202, 4239, 204, 4240, 200, 4300, 191, 4429, 181, 4558, 186, 4631, L, 186, 4663, Q, 221, 4786, 252, 4812, 272, 4828, 271, 4848, 271, 4851, 279, 4864, 282, 4869, 282, 4883, 299, 4912, 301, 4917, 304, 4922, 303, 4938, 304, 4941, 311, 4948, 316, 4954, 316, 4962, 316, 4984, 320, 4988, 324, 4992, 324, 5009, 324, 5040, 308, 5055, 307, 5064, 309, 5088, 309, 5108, 303, 5112, 285, 5126, 282, 5156, 280, 5175, 282, 5230, 284, 5234, 291, 5256, 296, 5272, 303, 5280, 313, 5293, 317, 5311, 321, 5328, 330, 5345, 340, 5362, 364, 5392, 387, 5421, 391, 5458, 399, 5484, 414, 5502, 416, 5505, 437, 5544, 464, 5575, 465, 5581, 474, 5613, 504, 5670, 509, 5688, 513, 5718, 515, 5723, 527, 5737, 536, 5748, 536, 5758, 536, 5767, 536, 5785, 537, 5801, 551, 5808, 588, 5826, 612, 5850, 620, 5858, 652, 5879, 689, 5904, 699, 5904, 715, 5904, 739, 5893, 769, 5891, 783, 5876, 794, 5862, 823, 5843, 852, 5822, 863, 5811, 881, 5791, 903, 5777, 928, 5764, 942, 5755, 967, 5746, 984, 5738, 1016, 5721, 1016, 5699, 1016, 5683, 1009, 5672, 1003, 5662, 1004, 5643, 1000, 5597, 1000, 5579, L, 990, 5579, Q, 989, 5576, 989, 5568, 989, 5544, 997, 5539, L, 1024, 5539, Q, 1166, 5778, 1182, 5783, 1197, 5788, 1234, 5784, 1271, 5779, 1299, 5780, 1326, 5780, 1346, 5768, 1369, 5750, 1383, 5742, 1432, 5713, 1452, 5693, 1469, 5666, 1477, 5661, 1504, 5661, 1507, 5644, L, 1518, 5644, Q, 1550, 5668, 1553, 5676, 1550, 5778, 1552, 5787, L, 1586, 5787, Q, 1603, 5787, 1618, 5793, 1622, 5794, 1642, 5810, 1662, 5826, 1667, 5826, 1675, 5826, 1685, 5819, 1679, 5807, 1705, 5796, L, 1905, 5796, Q, 1917, 5792, 1924, 5780, 1937, 5757, 1937, 5757, 1960, 5732, 1971, 5715, 1978, 5699, 1981, 5690, 1993, 5675, 1997, 5670, 2024, 5638, 2028, 5628, 2039, 5614, 2042, 5609, 2043, 5606, 2043, 5597, 2044, 5592, 2049, 5587, 2074, 5561, 2081, 5549, 2089, 5533, 2110, 5511, 2133, 5488, 2143, 5478, 2155, 5473, 2161, 5469, 2166, 5466, 2171, 5457, 2189, 5444, 2195, 5440, 2200, 5432, 2203, 5428, 2213, 5422, 2216, 5419, 2232, 5409, 2239, 5401, 2249, 5388, 2267, 5377, 2289, 5363, 2291, 5361, 2295, 5357, 2307, 5341, 2308, 5339, 2332, 5324, L, 2377, 5287, Q, 2382, 5284, 2402, 5269, 2417, 5257, 2426, 5256, L, 2483, 5232, Q, 2491, 5224, 2507, 5216, 2520, 5210, 2526, 5206, L, 2552, 5206, Q, 2553, 5200, 2570, 5194, 2576, 5191, 2585, 5184, 2603, 5180, 2614, 5169, 2630, 5169, 2635, 5166, 2640, 5161, 2652, 5158, 2661, 5153, 2664, 5147, 2671, 5144, 2683, 5144, 2692, 5144, 2699, 5133, L, 2716, 5129, Q, 2728, 5122, 2732, 5123, 2739, 5124, 2746, 5115, 2788, 5103, 2815, 5093, 2827, 5088, 2842, 5077, L, 2878, 5065, Q, 2896, 5065, 2915, 5057, 2920, 5057, 2926, 5046, 2932, 5044, 2945, 5045, 2948, 5043, 2958, 5035, 2972, 5035, 2976, 5032, 2986, 5027, 2986, 5024, 2987, 5015, 2997, 5009, 3010, 5008, 3006, 5000, 3004, 4992, 3013, 4988, 3028, 4973, 3036, 4966, 3037, 4831, 3033, 4761, L, 3033, 4678, Q, 3033, 4659, 3034, 4650, L, 3034, 4621, Q, 3014, 4500, 3014, 4465, 3014, 4440, 3017, 4433, 3021, 4424, 3024, 4400, 3023, 4371, 3025, 4360, 3037, 4345, 3036, 4333, L, 3036, 4332, Q, 3036, 4327, 3036, 4293, 3035, 4271, 3042, 4262, L, 3050, 4250, Q, 3060, 4249, 3067, 4247, 3072, 4245, 3079, 4238, 3084, 4236, 3095, 4237, 3097, 4236, 3108, 4225, 3112, 4224, 3127, 4224, 3137, 4221, 3145, 4216, 3155, 4215, 3159, 4210, 3173, 4210, 3178, 4206, 3178, 4198, 3189, 4196, 3196, 4194, 3215, 4187, L, 3274, 4187, Q, 3301, 4188, 3322, 4180, 3326, 4180, 3374, 4179, 3414, 4179, 3430, 4173, 3445, 4168, 3471, 4168, 3502, 4168, 3515, 4166, 3551, 4158, 3561, 4159, 3607, 4160, 3617, 4158, 3652, 4148, 3656, 4148, 3692, 4148, 3699, 4142, 3706, 4136, 3743, 4136, 3767, 4136, 3781, 4126, 3798, 4124, 3831, 4126, 3844, 4125, 3869, 4118, 3880, 4117, 3913, 4110, 3940, 4103, 3959, 4106, 3975, 4103, 4002, 4094, 4015, 4094, 4043, 4089, 4077, 4090, 4096, 4086, 4115, 4082, 4123, 4077, 4131, 4072, 4148, 4058, 4155, 4052, 4172, 4043, 4188, 4029, 4188, 4029, 4199, 4024, 4210, 4014, 4224, 4001, 4225, 3995, 4271, 3968, 4281, 3953, 4290, 3938, 4294, 3929, 4297, 3919, 4313, 3897, 4332, 3878, 4336, 3870, 4340, 3858, 4353, 3842, 4384, 3801, 4386, 3794, 4393, 3798, 4418, 3791, 4443, 3784, 4454, 3783, 4467, 3775, 4484, 3776, 4489, 3776, 4508, 3765, 4512, 3764, 4520, 3764, 4522, 3756, 4526, 3757, 4539, 3759, 4553, 3751, 4566, 3743, 4573, 3746, 4579, 3745, 4596, 3736, 4602, 3736, 4613, 3728, 4625, 3733, 4630, 3716, 4633, 3713, 4649, 3710, 4653, 3706, 4668, 3702, 4672, 3691, 4688, 3694, 4693, 3683, 4704, 3684, 4710, 3684, 4714, 3679, 4718, 3674, 4724, 3675, 4732, 3675, 4742, 3665, 4744, 3664, 4750, 3663, 4756, 3663, 4761, 3657, 4763, 3654, 4770, 3653, 4778, 3653, 4782, 3649, 4791, 3642, 4802, 3643, 4806, 3634, 4818, 3631, 4825, 3629, 4842, 3624, 4843, 3624, 4847, 3617, 4850, 3611, 4855, 3612, 4863, 3613, 4865, 3610, 4868, 3605, 4870, 3604, 4881, 3604, 4887, 3597, 4897, 3596, 4908, 3588, 4912, 3585, 4928, 3583, 4929, 3582, 4933, 3575, 4936, 3571, 4943, 3572, 4948, 3572, 4961, 3564, 4966, 3560, 4980, 3555, 4982, 3553, 4990, 3551, 4996, 3550, 4998, 3545, 5001, 3539, 5019, 3539, 5035, 3528, 5055, 3517, L, 5093, 3503, Q, 5102, 3502, 5111, 3494, 5117, 3493, 5129, 3482, 5133, 3480, 5140, 3479, 5141, 3478, 5151, 3476, 5168, 3472, 5172, 3470, 5177, 3468, 5189, 3458, 5191, 3456, 5203, 3453, L, 5227, 3438, Q, 5248, 3435, 5245, 3414, 5245, 3366, 5245, 3364, 5245, 3322, 5239, 3305, 5233, 3287, 5236, 3256, 5238, 3224, 5217, 3205, 5196, 3186, 5195, 3184, L, 5195, 3177, Q, 5175, 3160, 5147, 3132, 5119, 3103, 5107, 3087, 5085, 3058, 5085, 3035, 5085, 3030, 5080, 3023, 5075, 3016, 5075, 3007, 5068, 2997, 5068, 2994, L, 5068, 2978, Q, 5068, 2963, 5072, 2961, 5076, 2959, 5076, 2940, 5076, 2931, 5083, 2918, 5090, 2904, 5092, 2891, 5094, 2879, 5098, 2875, 5103, 2872, 5109, 2857, 5113, 2854, 5114, 2847, 5115, 2840, 5121, 2838, 5126, 2829, 5129, 2830, 5132, 2831, 5133, 2825, 5134, 2818, 5145, 2808, 5156, 2796, 5156, 2792, L, 5179, 2754, Q, 5192, 2745, 5207, 2721, L, 5229, 2685, Q, 5242, 2676, 5242, 2667, 5253, 2648, 5253, 2647, 5265, 2636, 5267, 2631, 5272, 2616, 5279, 2608, 5298, 2579, 5317, 2533, 5320, 2523, 5323, 2519, 5328, 2512, 5331, 2505, 5338, 2486, 5343, 2478, 5353, 2470, 5353, 2464, 5354, 2459, 5356, 2448, 5367, 2426, 5369, 2422, 5371, 2416, 5393, 2368, L, 5405, 2337, Q, 5414, 2315, 5415, 2304, L, 5415, 2292, Q, 5415, 2291, 5423, 2265, 5426, 2255, 5428, 2239, 5430, 2237, 5436, 2215, 5443, 2194, 5443, 2192, 5435, 2187, 5435, 2166, 5435, 2161, 5425, 2142, 5414, 2122, 5410, 2116, 5406, 2110, 5401, 2089, 5401, 2088, 5401, 2088, 5394, 2060, 5384, 2047, 5372, 2031, 5372, 2028, 5373, 2017, 5367, 2011, 5366, 2010, 5365, 2009, 5354, 1972, 5313, 1913, 5313, 1913, 5313, 1912, 5292, 1882, 5286, 1875, 5257, 1841, 5254, 1836, 5247, 1820, 5241, 1814, L, 5224, 1796, Q, 5217, 1784, 5212, 1777, 5204, 1764, 5197, 1759, 5178, 1745, 5170, 1741, 5161, 1737, 5152, 1737, 5141, 1729, 5137, 1726, 5131, 1721, 5116, 1716, 5106, 1709, 5097, 1706, 5088, 1694, 5081, 1694, 5064, 1692, 5059, 1685, 5055, 1679, 5055, 1663, 5065, 1657, 5064, 1649, L, 5064, 1591, Q, 5073, 1573, 5073, 1562, 5074, 1551, 5074, 1524, 5074, 1509, 5081, 1487, 5087, 1464, 5091, 1439, 5094, 1414, 5094, 1364, 5094, 1347, 5093, 1339, 5093, 1319, 5098, 1311, 5104, 1302, 5104, 1284, 5119, 1268, 5121, 1264, 5134, 1252, 5142, 1239, 5151, 1225, 5167, 1208, 5183, 1191, 5196, 1180, 5198, 1172, 5230, 1138, 5262, 1104, 5271, 1092, 5281, 1081, 5294, 1066, 5307, 1050, 5327, 1027, L, 5339, 1027, 5339, 1021, 5345, 1021, Q, 5344, 1020, 5344, 1015, L, 5336, 1015, Q, 5332, 996, 5301, 971, 5292, 964, 5286, 950, 5274, 944, 5274, 926, L, 5274, 910, Q, 5281, 906, 5281, 902, 5248, 860, 5246, 857, 5217, 832, 5207, 821, 5181, 797, 5169, 784, 5157, 770, 5152, 766, 5133, 767, 5126, 757, L, 5126, 756, Q, 5103, 748, 5098, 748, 5082, 756, 5073, 757, 5068, 758, 5065, 763, 5062, 768, 5055, 768, 5045, 768, 5043, 757, L, 5022, 757, 5022, 737, 5036, 737, Q, 5034, 733, 5033, 733, L, 5033, 717, 5046, 717, Q, 5041, 704, 5052, 704, 5064, 704, 5063, 694, 5070, 696, 5073, 690, 5075, 687, 5077, 681, 5094, 675, 5094, 668, L, 5092, 668, Q, 5099, 664, 5109, 655, 5114, 650, 5124, 650, 5137, 637, 5141, 633, 5151, 622, 5159, 605, 5165, 587, 5170, 583, 5173, 580, 5184, 563, 5190, 553, 5202, 541, 5209, 529, 5214, 522, 5211, 517, 5216, 509, 5220, 504, 5223, 503, L, 5223, 495, Q, 5225, 475, 5228, 470, 5231, 463, 5235, 459, 5237, 457, 5237, 448, 5234, 361, 5234, 316, L, 5234, 286, Q, 5234, 279, 5243, 264, 5245, 228, 5246, 213, 5248, 100, 5243, 76, 5240, 78, 5235, 75, 5231, 72, 5230, 68, 5212, 69, 5210, 65, 5209, 59, 5208, 58, 5196, 55, 5195, 55, 5192, 45, 5177, 45, 5158, 47, 5148, 46, Q, 5128, 43, 5124, 37, Z]
      ],
      "label": "Cairo",
      "shortLabel": "CA",
      "labelPosition": [273.7, 296.8],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'cairo',
  type: 'maps'
};