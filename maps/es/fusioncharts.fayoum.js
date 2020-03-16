/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Fayoum.18.08-08-2012 12:17:44
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
  "name": "Fayoum",
  "revision": 18,
  "standaloneInit": true,
  "baseWidth": 838,
  "baseHeight": 530,
  "baseScaleFactor": 10,
  "entities": {
    "01": {
      "outlines": [
        [M, 8023, 64, L, 8023, 31, Q, 6163, 31, 6124, 31, 6054, 31, 6031, 45, 5982, 68, 5909, 111, 5807, 172, 5772, 191, 5676, 236, 5637, 259, 5543, 314, 5490, 344, 5405, 388, 5344, 423, 5278, 469, 5203, 503, 5117, 553, 5067, 583, 5030, 607, 4997, 621, 4964, 634, 4936, 659, 4899, 676, 4866, 693, 4813, 724, 4785, 739, 4752, 755, 4701, 786, 4652, 817, 4617, 834, 4506, 889, 4463, 928, 4455, 935, 4356, 983, 4332, 991, 4310, 1008, 4287, 1025, 4278, 1028, 4202, 1058, 4186, 1069, 4170, 1081, 4147, 1094, 4119, 1107, 4104, 1116, 4021, 1169, 3951, 1205, 3928, 1216, 3874, 1245, 3851, 1257, 3837, 1267, 3826, 1283, 3807, 1291, 3773, 1304, 3735, 1322, 3691, 1354, 3671, 1362, 3584, 1406, 3501, 1460, 3440, 1500, 3420, 1506, 3399, 1512, 3377, 1524, 3355, 1535, 3339, 1543, L, 3277, 1587, Q, 3236, 1618, 3215, 1636, 3153, 1690, 3150, 1693, 3098, 1736, 3080, 1748, 3079, 1749, 3077, 1750, 3059, 1773, 3007, 1817, 2941, 1871, 2926, 1886, 2872, 1930, 2858, 1947, 2843, 1964, 2827, 1974, 2811, 1984, 2798, 2002, 2785, 2020, 2765, 2031, 2746, 2042, 2689, 2097, 2632, 2152, 2612, 2166, 2591, 2180, 2564, 2206, 2537, 2231, 2514, 2255, 2492, 2278, 2476, 2288, 2460, 2298, 2448, 2311, 2433, 2325, 2428, 2327, 2372, 2378, 2358, 2391, 2343, 2403, 2327, 2418, 2311, 2433, 2279, 2467, 2263, 2486, 2195, 2533, 2128, 2601, 2114, 2614, 2099, 2626, 2075, 2645, 2050, 2663, 2030, 2686, 2010, 2710, 1978, 2723, 1966, 2734, 1940, 2758, 1917, 2775, 1866, 2827, 1822, 2871, 1767, 2906, 1703, 2956, 1692, 2969, 1681, 2983, 1667, 2994, 1652, 3004, 1630, 3025, 1608, 3046, 1562, 3086, 1516, 3126, 1492, 3146, 1468, 3166, 1431, 3190, 1413, 3201, 1389, 3228, 1361, 3260, 1230, 3369, 1122, 3472, 1050, 3521, 953, 3600, 939, 3615, 924, 3631, 876, 3673, 827, 3715, 799, 3735, 768, 3756, 744, 3778, 716, 3802, 663, 3854, 657, 3858, 609, 3895, 583, 3914, 555, 3943, 532, 3959, 499, 3992, 467, 4024, 447, 4039, 372, 4091, 324, 4138, 269, 4192, 215, 4233, 214, 4234, 213, 4235, 166, 4270, 135, 4298, 104, 4327, 72, 4352, 40, 4377, 34, 4391, 27, 4393, 25, 4394, 27, 4396, 27, 4401, 47, 4399, 95, 4404, 143, 4410, 158, 4416, 173, 4422, 194, 4424, 216, 4426, 240, 4431, 263, 4435, 288, 4438, 313, 4441, 334, 4443, 347, 4446, 378, 4444, 392, 4446, 420, 4454, 436, 4454, 453, 4460, 471, 4466, 493, 4469, 516, 4471, 532, 4477, 548, 4483, 560, 4482, 571, 4481, 581, 4482, 590, 4482, 609, 4492, 642, 4492, 666, 4501, 684, 4509, 735, 4508, 744, 4511, 767, 4519, 784, 4517, 798, 4520, 831, 4528, 864, 4528, 903, 4530, 928, 4537, 949, 4537, 960, 4543, 972, 4549, 987, 4549, L, 1022, 4549, Q, 1027, 4549, 1034, 4555, 1040, 4561, 1045, 4561, 1073, 4561, 1079, 4562, 1089, 4564, 1111, 4570, L, 1147, 4567, Q, 1151, 4567, 1160, 4572, 1169, 4577, 1178, 4577, 1211, 4577, 1216, 4579, 1219, 4579, 1230, 4586, 1239, 4591, 1247, 4591, 1275, 4587, 1284, 4594, 1288, 4597, 1319, 4600, 1327, 4601, 1342, 4600, 1347, 4601, 1348, 4606, 1350, 4612, 1354, 4612, L, 1393, 4612, Q, 1404, 4612, 1411, 4618, 1418, 4623, 1425, 4624, 1492, 4627, 1591, 4643, 1646, 4652, 1755, 4671, 1804, 4679, 1807, 4681, 1811, 4683, 1828, 4681, 1847, 4679, 1866, 4684, 1894, 4692, 1922, 4693, 1946, 4694, 1958, 4699, 1982, 4710, 1990, 4709, 2008, 4707, 2017, 4712, 2027, 4718, 2034, 4718, L, 2076, 4718, Q, 2078, 4719, 2088, 4725, 2097, 4730, 2106, 4730, 2143, 4730, 2153, 4738, 2159, 4743, 2217, 4747, 2233, 4753, 2271, 4751, 2283, 4753, 2322, 4760, 2333, 4760, 2345, 4766, 2359, 4774, 2370, 4774, 2393, 4774, 2421, 4780, 2461, 4784, 2518, 4797, 2534, 4801, 2568, 4804, 2575, 4807, 2592, 4807, 2610, 4807, 2621, 4812, 2626, 4814, 2679, 4817, 2689, 4817, 2700, 4829, 2710, 4830, 2728, 4829, 2729, 4829, 2755, 4836, 2774, 4841, 2787, 4839, 2801, 4836, 2818, 4845, 2834, 4854, 2844, 4852, 2855, 4850, 2872, 4856, 2889, 4861, 2898, 4861, 2918, 4859, 2933, 4867, 2947, 4876, 2956, 4874, L, 2958, 4873, 2988, 4873, Q, 3004, 4873, 3019, 4881, 3029, 4882, 3048, 4884, 3062, 4886, 3066, 4897, 3071, 4912, 3074, 4949, 3076, 4955, 3076, 5022, 3077, 5113, 3084, 5257, 3087, 5257, 3094, 5258, 3101, 5259, 3106, 5254, L, 3138, 5254, Q, 3145, 5254, 3150, 5248, 3155, 5241, 3160, 5241, L, 3192, 5241, Q, 3203, 5241, 3212, 5231, 3222, 5228, 3243, 5230, 3249, 5230, 3254, 5224, 3259, 5218, 3265, 5218, L, 3294, 5218, Q, 3299, 5217, 3318, 5209, 3334, 5210, 3339, 5202, L, 3371, 5202, Q, 3376, 5202, 3396, 5196, 3405, 5192, 3422, 5193, 3426, 5193, 3441, 5184, 3447, 5179, 3468, 5179, 3489, 5180, 3494, 5176, 3498, 5173, 3517, 5173, 3530, 5173, 3542, 5162, L, 3569, 5162, Q, 3580, 5162, 3590, 5154, 3602, 5149, 3615, 5152, 3616, 5152, 3640, 5144, 3669, 5142, 3670, 5142, 3674, 5142, 3678, 5137, 3682, 5132, 3688, 5132, L, 3718, 5132, Q, 3722, 5132, 3725, 5128, 3729, 5124, 3736, 5124, 3753, 5124, 3762, 5118, 3772, 5113, 3786, 5113, 3796, 5113, 3809, 5107, 3821, 5102, 3836, 5103, 3846, 5104, 3857, 5099, 3869, 5094, 3878, 5095, 3893, 5096, 3901, 5089, 3909, 5081, 3922, 5082, 3929, 5082, 3943, 5073, L, 3970, 5073, Q, 3976, 5073, 3986, 5060, L, 4013, 5060, Q, 4024, 5060, 4036, 5053, L, 4064, 5053, Q, 4066, 5053, 4070, 5046, 4074, 5040, 4079, 5040, L, 4108, 5040, Q, 4112, 5030, 4126, 5030, 4134, 5031, 4152, 5031, 4155, 5018, 4169, 5019, 4185, 5019, 4189, 5014, 4191, 5010, 4215, 5010, 4234, 5010, 4234, 5004, L, 4253, 5004, Q, 4264, 5004, 4267, 4999, 4270, 4994, 4290, 4995, 4310, 4995, 4325, 4984, L, 4347, 4984, Q, 4354, 4971, 4364, 4971, 4378, 4971, 4407, 4966, 4421, 4967, 4432, 4958, 4444, 4948, 4451, 4948, L, 4478, 4948, Q, 4486, 4949, 4495, 4943, 4503, 4942, 4519, 4942, 4532, 4942, 4538, 4935, 4543, 4929, 4560, 4929, L, 4584, 4929, Q, 4585, 4915, 4603, 4918, 4608, 4919, 4632, 4911, 4635, 4910, 4660, 4910, 4665, 4909, 4683, 4899, 4708, 4896, 4740, 4890, 4747, 4890, 4753, 4886, 4759, 4881, 4764, 4882, 4780, 4883, 4787, 4875, 4790, 4873, 4812, 4871, 4815, 4870, 4823, 4865, 4830, 4860, 4836, 4861, 4850, 4864, 4866, 4858, 4883, 4852, 4893, 4853, 4899, 4853, 4913, 4843, 4914, 4843, 4941, 4842, 4943, 4842, 4950, 4836, 4956, 4832, 4962, 4832, L, 4990, 4832, Q, 4993, 4819, 5016, 4823, 5028, 4824, 5044, 4813, L, 5067, 4813, Q, 5080, 4813, 5086, 4804, 5090, 4798, 5135, 4801, 5130, 4790, 5151, 4790, 5175, 4791, 5176, 4790, 5182, 4784, 5195, 4784, 5203, 4783, 5218, 4783, 5213, 4772, 5231, 4773, 5241, 4773, 5257, 4773, 5266, 4763, 5275, 4763, 5283, 4762, 5292, 4761, 5303, 4751, 5312, 4751, 5320, 4751, 5328, 4750, 5336, 4750, 5347, 4741, L, 5371, 4741, Q, 5378, 4741, 5390, 4736, 5403, 4731, 5413, 4731, 5425, 4731, 5434, 4727, 5443, 4722, 5453, 4722, 5473, 4720, 5473, 4719, 5477, 4709, 5487, 4709, L, 5513, 4709, Q, 5520, 4708, 5533, 4702, L, 5556, 4702, Q, 5567, 4702, 5570, 4693, 5578, 4692, 5595, 4693, 5606, 4694, 5611, 4690, 5618, 4683, 5629, 4683, 5636, 4682, 5649, 4682, 5651, 4681, 5664, 4675, 5673, 4670, 5684, 4672, 5690, 4673, 5702, 4666, 5708, 4662, 5723, 4661, 5729, 4661, 5741, 4660, 5742, 4660, 5744, 4654, 5745, 4650, 5752, 4650, L, 5777, 4650, Q, 5783, 4650, 5795, 4640, 5799, 4635, 5814, 4636, 5831, 4637, 5836, 4634, 5844, 4630, 5878, 4626, 5879, 4617, 5893, 4618, 5908, 4618, 5911, 4614, 5922, 4609, 5948, 4605, 5953, 4603, 5969, 4603, 5983, 4602, 5988, 4599, 5996, 4593, 6028, 4593, 6035, 4593, 6045, 4581, 6047, 4580, 6065, 4580, 6075, 4580, 6084, 4574, 6093, 4569, 6104, 4569, 6122, 4569, 6143, 4561, 6163, 4561, 6166, 4560, 6169, 4559, 6172, 4552, L, 6184, 4552, Q, 6188, 4552, 6204, 4553, 6218, 4553, 6215, 4542, L, 6247, 4542, Q, 6251, 4541, 6252, 4537, 6252, 4533, 6256, 4532, L, 6271, 4532, Q, 6287, 4532, 6298, 4526, 6308, 4521, 6323, 4523, 6336, 4524, 6346, 4516, 6355, 4508, 6376, 4511, 6387, 4512, 6400, 4501, L, 6428, 4501, Q, 6426, 4491, 6446, 4491, 6469, 4492, 6471, 4490, 6477, 4484, 6491, 4483, 6499, 4482, 6515, 4482, 6518, 4467, 6544, 4471, 6554, 4473, 6559, 4468, 6565, 4462, 6572, 4462, 6578, 4462, 6591, 4463, 6601, 4463, 6604, 4457, 6607, 4449, 6619, 4448, 6625, 4448, 6636, 4450, 6643, 4449, 6654, 4444, 6666, 4439, 6677, 4441, 6684, 4442, 6697, 4435, L, 6721, 4435, Q, 6722, 4415, 6754, 4422, 6763, 4423, 6770, 4417, 6775, 4413, 6780, 4412, 6781, 4412, 6795, 4411, 6809, 4410, 6829, 4387, 6850, 4363, 6866, 4324, 6876, 4305, 6954, 4225, 6974, 4204, 6993, 4173, 7004, 4156, 7023, 4123, 7034, 4103, 7097, 4041, 7102, 4036, 7116, 4024, 7130, 4013, 7136, 4007, 7143, 4001, 7147, 3991, 7152, 3981, 7162, 3969, 7167, 3963, 7166, 3957, 7192, 3921, 7244, 3873, 7269, 3841, 7277, 3822, 7283, 3807, 7315, 3785, 7384, 3707, 7404, 3703, 7402, 3649, 7402, 3645, 7402, 3609, 7410, 3601, 7416, 3594, 7445, 3594, 7467, 3594, 7476, 3602, 7496, 3621, 7505, 3621, 7516, 3622, 7522, 3626, 7525, 3628, 7530, 3632, 7532, 3634, 7548, 3634, 7552, 3634, 7558, 3639, 7558, 3639, 7559, 3640, 7567, 3651, 7585, 3651, 7598, 3651, 7600, 3650, 7605, 3647, 7604, 3632, 7613, 3638, 7615, 3629, 7618, 3617, 7627, 3616, 7639, 3614, 7634, 3586, 7647, 3591, 7647, 3575, 7646, 3555, 7649, 3553, 7655, 3550, 7657, 3532, 7659, 3521, 7672, 3527, 7672, 3524, 7684, 3512, L, 7710, 3512, Q, 7704, 3524, 7713, 3526, L, 7733, 3529, Q, 7745, 3534, 7773, 3530, L, 7803, 3530, Q, 7818, 3528, 7818, 3513, 7818, 3504, 7817, 3504, 7810, 3501, 7807, 3499, 7806, 3483, 7802, 3480, 7786, 3453, 7777, 3445, 7771, 3438, 7770, 3423, 7769, 3408, 7765, 3404, 7756, 3395, 7756, 3365, L, 7756, 3340, Q, 7757, 3334, 7762, 3331, 7768, 3315, 7785, 3304, 7796, 3276, 7798, 3275, L, 7810, 3262, Q, 7813, 3259, 7834, 3234, 7840, 3221, 7851, 3211, 7863, 3193, 7867, 3189, 7870, 3184, 7869, 3183, L, 7899, 3133, Q, 7902, 3131, 7911, 3131, 7919, 3131, 7921, 3127, 7924, 3122, 7929, 3107, 7938, 3089, 7954, 3077, 7975, 3051, 7998, 3007, 8030, 2959, 8050, 2943, 8087, 2914, 8087, 2873, 8068, 2812, 8068, 2790, 8068, 2765, 8070, 2761, 8074, 2752, 8095, 2741, 8099, 2739, 8115, 2718, 8128, 2701, 8139, 2703, 8142, 2675, 8149, 2674, 8155, 2673, 8155, 2654, 8149, 2613, 8149, 2593, 8154, 2553, 8154, 2536, 8165, 2517, 8172, 2493, L, 8174, 2453, Q, 8153, 2437, 8149, 2431, 8129, 2405, 8129, 2403, 8125, 2396, 8125, 2372, 8125, 2345, 8137, 2331, 8145, 2323, 8169, 2299, 8207, 2249, 8247, 2227, 8258, 2220, 8273, 2189, 8289, 2159, 8292, 2151, 8310, 2125, 8313, 2116, 8315, 2112, 8315, 2090, 8320, 2086, 8323, 2082, 8324, 2080, 8327, 2074, 8329, 2040, 8341, 2016, 8350, 1994, 8350, 1959, 8350, 1949, 8344, 1946, 8337, 1943, 8337, 1927, L, 8337, 1804, Q, 8337, 1795, 8332, 1786, 8327, 1778, 8327, 1770, L, 8327, 1732, Q, 8327, 1728, 8319, 1720, 8311, 1712, 8311, 1703, 8306, 1688, 8304, 1680, 8305, 1677, 8305, 1674, 8310, 1642, 8303, 1617, 8293, 1586, 8288, 1567, 8287, 1521, 8281, 1508, 8278, 1501, 8278, 1478, 8278, 1457, 8271, 1450, 8265, 1442, 8263, 1423, 8261, 1401, 8258, 1394, 8253, 1350, 8250, 1336, 8248, 1328, 8247, 1302, 8246, 1299, 8238, 1280, 8236, 1276, 8236, 1251, 8237, 1229, 8229, 1225, L, 8229, 1215, Q, 8229, 1214, 8229, 1213, 8227, 1205, 8225, 1188, 8224, 1167, 8220, 1144, 8215, 1121, 8211, 1110, 8206, 1097, 8206, 1093, 8203, 1055, 8201, 1049, 8199, 1044, 8196, 1002, 8184, 973, 8186, 956, 8186, 951, 8180, 939, 8173, 925, 8172, 916, 8167, 889, 8165, 865, 8162, 841, 8159, 819, 8156, 796, 8155, 781, 8142, 724, 8139, 696, 8136, 669, 8132, 643, 8127, 618, 8124, 599, 8120, 580, 8112, 536, 8107, 508, 8099, 470, 8089, 427, 8088, 409, 8088, 387, 8079, 349, 8071, 311, 8067, 297, 8064, 286, 8064, 265, 8054, 245, 8055, 238, 8057, 226, 8052, 209, 8046, 189, 8046, 178, 8046, 156, 8042, 143, 8037, 130, 8037, 115, Q, 8027, 80, 8023, 64, Z]
      ],
      "label": "Fayoum",
      "shortLabel": "FA",
      "labelPosition": [501.3, 261.4],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'fayoum',
  type: 'maps'
};