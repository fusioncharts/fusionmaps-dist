/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Benin.1.05-09-2018 09:15:27
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
  "name": "Benin",
  "revision": 1,
  "creditLabel": false,
  "standaloneInit": false,
  "baseWidth": 160,
  "baseHeight": 280,
  "baseScaleFactor": 10,
  "firstEntity": "BJ.OU",
  "entities": {
    "BJ.OU": {
      "outlines": [
        [M, 897, 2360, L, 840, 2359, 827, 2349, 825, 2401, 836, 2402, 836, 2420, 846, 2420, 845, 2561, 864, 2561, 863, 2594, Q, 861, 2598, 857, 2602, L, 858, 2602, 858, 2626, Q, 868, 2624, 877, 2618, 881, 2616, 890, 2607, 897, 2600, 904, 2600, 905, 2600, 907, 2600, 917, 2605, 949, 2621, 950, 2621, 950, 2621, 953, 2619, 961, 2613, L, 961, 2613, 960, 2600, 961, 2555, 969, 2555, 969, 2541, 946, 2541, 932, 2554, 910, 2555, 910, 2546, 922, 2545, 937, 2530, 937, 2521, 924, 2511, 897, 2511, 897, 2436, 905, 2432, 907, 2417, 915, 2412, 915, 2404, 897, 2377, Z]
      ],
      "label": "Ouémé",
      "shortLabel": "OU",
      "labelPosition": [104.5, 264.5],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [
        [M, 1045, 2645, L, 885, 2645, 885, 2555, 885, 2645]
      ],
      "nextId": "BJ.LI"
    },
    "BJ.LI": {
      "outlines": [
        [M, 788, 2622, L, 785, 2630, Q, 795, 2630, 813, 2627, L, 841, 2628, Q, 850, 2628, 858, 2626, L, 858, 2602, 814, 2602, Q, 804, 2612, 788, 2622, Z]
      ],
      "label": "Littoral",
      "shortLabel": "LI",
      "labelPosition": [70.4, 270.7],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [
        [M, 704, 2707, L, 840, 2707, 840, 2613, 840, 2707]
      ],
      "nextId": "BJ.CF"
    },
    "BJ.CF": {
      "outlines": [
        [M, 524, 2359, L, 486, 2360, 485, 2381, 497, 2392, 505, 2406, 505, 2471, 508, 2471, Q, 509, 2471, 509, 2471, 512, 2470, 514, 2470, 515, 2470, 516, 2469, 517, 2469, 517, 2469, 518, 2469, 518, 2468, 519, 2468, 519, 2468, 521, 2467, 523, 2467, 525, 2466, 526, 2465, 527, 2464, 527, 2464, 527, 2464, 528, 2464, 528, 2463, 528, 2463, 533, 2459, 538, 2460, 542, 2460, 545, 2459, 545, 2459, 546, 2459, 548, 2458, 549, 2456, 550, 2456, 550, 2455, 551, 2455, 551, 2454, 551, 2454, 551, 2453, 552, 2453, 552, 2453, 553, 2452, 555, 2451, 556, 2451, 556, 2451, 558, 2448, 562, 2444, 562, 2444, 562, 2443, 563, 2442, 564, 2441, 565, 2440, 565, 2439, 566, 2439, 566, 2438, 568, 2437, 569, 2436, 569, 2435, 570, 2435, 571, 2434, 571, 2434, 573, 2433, 575, 2432, 576, 2432, 576, 2432, 576, 2432, 577, 2432, 581, 2431, 584, 2433, 585, 2433, 585, 2433, 587, 2434, 590, 2434, 591, 2434, 591, 2434, 595, 2435, 599, 2436, 601, 2437, 602, 2438, 602, 2438, 603, 2439, 604, 2442, 608, 2443, 608, 2443, 608, 2443, 609, 2444, 610, 2444, 614, 2445, 617, 2446, 618, 2447, 618, 2447, 619, 2448, 620, 2448, 621, 2449, 622, 2449, 625, 2451, 627, 2455, 627, 2455, 627, 2456, 628, 2458, 631, 2459, 631, 2459, 632, 2459, 633, 2460, 633, 2460, 638, 2462, 643, 2463, L, 643, 2463, Q, 647, 2465, 650, 2468, 651, 2469, 653, 2470, 655, 2471, 656, 2472, 657, 2473, 659, 2473, 659, 2473, 660, 2473, 664, 2474, 668, 2475, 669, 2476, 670, 2476, 673, 2477, 676, 2479, L, 684, 2468, 684, 2439, 697, 2428, 699, 2389, 675, 2390, Q, 672, 2392, 660, 2371, 650, 2356, 645, 2349, L, 616, 2322, 615, 2301, 606, 2289, 606, 2280, 595, 2271, 595, 2260, 565, 2233, 565, 2219, 552, 2190, 545, 2170, 535, 2161, 536, 2150, 525, 2150, Z]
      ],
      "label": "Kouffo",
      "shortLabel": "CF",
      "labelPosition": [20, 237.6],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [
        [M, 200, 2376, L, 544, 2376]
      ],
      "nextId": "BJ.MO"
    },
    "BJ.MO": {
      "outlines": [
        [M, 584, 2433, Q, 581, 2431, 577, 2432, 576, 2432, 576, 2432, 576, 2432, 575, 2432, 573, 2433, 571, 2434, 571, 2434, 570, 2435, 569, 2435, 569, 2436, 568, 2437, 566, 2438, 566, 2439, 565, 2439, 565, 2440, 564, 2441, 563, 2442, 562, 2443, 562, 2444, 562, 2444, 558, 2448, 556, 2451, 556, 2451, 555, 2451, 553, 2452, 552, 2453, 552, 2453, 551, 2453, 551, 2454, 551, 2454, 551, 2455, 550, 2455, 550, 2456, 549, 2456, 548, 2458, 546, 2459, 545, 2459, 545, 2459, 542, 2460, 538, 2460, 533, 2459, 528, 2463, 528, 2463, 528, 2464, 527, 2464, 527, 2464, 527, 2464, 526, 2465, 525, 2466, 523, 2467, 521, 2467, 519, 2468, 519, 2468, 518, 2468, 518, 2469, 517, 2469, 517, 2469, 516, 2469, 515, 2470, 514, 2470, 512, 2470, 509, 2471, 509, 2471, 508, 2471, L, 508, 2471, Q, 507, 2471, 505, 2472, L, 505, 2473, 496, 2477, 495, 2501, 505, 2509, 510, 2528, 537, 2542, 576, 2597, 575, 2631, 585, 2632, 586, 2661, Q, 600, 2664, 605, 2658, 611, 2651, 612, 2651, L, 639, 2651, Q, 649, 2646, 657, 2644, L, 654, 2621, 646, 2621, 646, 2607, 655, 2603, 656, 2579, 666, 2580, 665, 2510, 675, 2502, 675, 2480, 676, 2479, Q, 673, 2477, 670, 2476, 669, 2476, 668, 2475, 664, 2474, 660, 2473, 659, 2473, 659, 2473, 657, 2473, 656, 2472, 655, 2471, 653, 2470, 651, 2469, 650, 2468, 647, 2465, 643, 2463, L, 643, 2463, Q, 638, 2462, 633, 2460, 633, 2460, 632, 2459, 631, 2459, 631, 2459, 628, 2458, 627, 2456, 627, 2455, 627, 2455, 625, 2451, 622, 2449, 621, 2449, 620, 2448, 619, 2448, 618, 2447, 618, 2447, 617, 2446, 614, 2445, 610, 2444, 609, 2444, 608, 2443, 608, 2443, 608, 2443, 604, 2442, 603, 2439, 602, 2438, 602, 2438, 601, 2437, 599, 2436, 595, 2435, 591, 2434, 591, 2434, 590, 2434, 587, 2434, 585, 2433, Q, 585, 2433, 584, 2433, Z]
      ],
      "label": "Mono",
      "shortLabel": "MO",
      "labelPosition": [32.8, 255.2],
      "labelAlignment": [RGT, MID],
      "labelConnectors": [
        [M, 328, 2552, L, 584, 2552]
      ],
      "nextId": "BJ.PL"
    },
    "BJ.PL": {
      "outlines": [
        [M, 834, 2180, L, 845, 2181, 846, 2231, 855, 2241, 855, 2272, 865, 2271, 875, 2280, 885, 2279, 886, 2332, 896, 2333, 897, 2378, 915, 2404, 915, 2412, 907, 2417, 905, 2432, 897, 2436, 897, 2511, 924, 2511, 937, 2521, 937, 2530, 922, 2545, 910, 2546, 910, 2555, 932, 2554, 946, 2541, 969, 2541, 969, 2535, 1008, 2535, 1008, 2525, 975, 2526, 974, 2520, 974, 2390, 966, 2390, 965, 2343, 973, 2340, 972, 2317, 983, 2308, 986, 2252, Q, 985, 2249, 984, 2248, L, 976, 2248, 974, 2151, Q, 973, 2148, 967, 2146, L, 965, 2090, 865, 2091, 865, 2128, 831, 2163, Z]
      ],
      "label": "Plateau",
      "shortLabel": "PL",
      "labelPosition": [114, 219],
      "labelAlignment": [LFT, MID],
      "labelConnectors": [
        [M, 1140, 2190, L, 910, 2190]
      ],
      "nextId": "BJ.AL"
    },
    "BJ.AL": {
      "outlines": [
        [M, 1250, 345, Q, 1242, 337, 1207, 341, 1195, 335, 1191, 320, 1187, 305, 1182, 298, 1178, 294, 1178, 284, 1177, 281, 1172, 276, 1168, 272, 1167, 271, 1165, 269, 1165, 269, L, 1145, 251, Q, 1122, 224, 1111, 213, 1094, 198, 1094, 192, 1080, 186, 1069, 173, 1061, 164, 1060, 164, 1051, 161, 1050, 153, L, 1038, 148, Q, 1031, 142, 1027, 140, 1022, 128, 1008, 128, 1005, 130, 997, 131, 996, 130, 995, 130, 988, 129, 987, 129, 954, 148, 952, 149, 940, 159, 933, 163, 922, 171, 912, 171, L, 884, 170, Q, 879, 179, 873, 179, L, 856, 179, Q, 853, 179, 850, 179, 837, 181, 825, 192, L, 825, 326, 825, 326, 824, 354, Q, 818, 354, 815, 360, 815, 370, 811, 375, 804, 383, 805, 386, 799, 397, 797, 402, 797, 412, 792, 419, 783, 430, 768, 440, 753, 450, 734, 471, 712, 490, 705, 498, L, 679, 527, 675, 527, 694, 564, Q, 698, 574, 709, 594, 723, 619, 729, 627, 733, 629, 734, 632, 736, 640, 737, 643, 740, 646, 743, 647, L, 743, 656, Q, 746, 663, 748, 665, 754, 669, 754, 670, L, 762, 689, 761, 691, Q, 762, 697, 770, 699, 775, 700, 782, 700, 796, 710, 802, 714, 805, 717, 805, 725, 805, 730, 800, 735, 794, 739, 791, 742, L, 775, 760, 776, 900, 835, 900, 840, 895, Q, 842, 890, 851, 888, L, 864, 888, Q, 868, 888, 875, 894, 888, 905, 894, 909, L, 943, 908, 944, 897, 966, 895, 966, 891, 1016, 891, 1016, 900, 1082, 899, 1082, 893, 1154, 892, Q, 1161, 891, 1167, 881, 1181, 879, 1210, 871, 1236, 871, 1252, 869, 1268, 868, 1296, 862, 1311, 862, 1337, 861, 1355, 863, 1372, 851, 1378, 850, 1393, 844, 1407, 842, 1414, 835, 1413, 831, 1411, 827, 1409, 824, 1398, 813, 1398, 811, 1386, 803, 1377, 797, 1376, 790, 1376, 790, 1376, 789, L, 1376, 789, Q, 1376, 781, 1380, 776, 1384, 772, 1384, 761, L, 1383, 718, Q, 1382, 712, 1375, 708, 1371, 693, 1371, 661, 1368, 652, 1352, 647, 1348, 644, 1349, 638, 1349, 637, 1343, 629, 1338, 623, 1328, 613, 1321, 606, 1318, 596, 1303, 583, 1295, 559, 1286, 554, 1282, 546, 1279, 540, 1274, 537, L, 1275, 527, 1274, 504, Q, 1274, 496, 1283, 490, 1283, 487, 1281, 484, L, 1287, 473, Q, 1288, 471, 1289, 465, L, 1299, 449, Q, 1306, 436, 1324, 410, L, 1315, 410, Q, 1300, 409, 1297, 402, 1294, 397, 1293, 382, L, 1289, 374, Q, 1287, 370, 1281, 369, 1276, 362, 1270, 355, Q, 1265, 348, 1250, 345, Z]
      ],
      "label": "Alibori",
      "shortLabel": "AL",
      "labelPosition": [101, 62.9],
      "labelAlignment": [CEN, MID],
      "nextId": "BJ.AK"
    },
    "BJ.AK": {
      "outlines": [
        [M, 494, 527, L, 495, 524, Q, 490, 516, 473, 516, 455, 516, 439, 518, 427, 516, 423, 520, L, 414, 531, Q, 401, 542, 396, 557, 390, 580, 391, 591, 386, 592, 382, 594, L, 375, 601, 332, 602, 311, 625, 305, 640, Q, 298, 644, 293, 650, 285, 661, 284, 661, 282, 661, 278, 659, 271, 659, 266, 669, 256, 672, 253, 676, 252, 677, 242, 689, 242, 692, 232, 701, 225, 712, 223, 712, L, 221, 731, 214, 738, 213, 790, 196, 805, 176, 830, 176, 852, 185, 860, 185, 883, 175, 888, 174, 974, 187, 978, 317, 1073, 388, 1111, 393, 1120, 407, 1124, 407, 1151, Q, 426, 1151, 433, 1155, 436, 1158, 460, 1160, 468, 1162, 476, 1158, 485, 1151, 490, 1149, 494, 1148, 505, 1141, L, 520, 1134, Q, 522, 1131, 534, 1128, 544, 1120, 550, 1119, 556, 1119, 558, 1117, 561, 1112, 564, 1111, L, 582, 1108, 596, 1109, Q, 605, 1109, 610, 1104, 615, 1099, 633, 1099, 670, 1099, 671, 1099, 677, 1105, 683, 1107, L, 692, 1107, Q, 702, 1111, 704, 1111, L, 704, 1090, 715, 1081, 766, 1081, Q, 767, 1077, 773, 1068, L, 774, 1018, 765, 1012, 765, 989, 755, 980, Q, 752, 977, 751, 968, 746, 959, 741, 955, 741, 933, 753, 922, 755, 920, 776, 908, L, 775, 760, 791, 742, Q, 794, 739, 800, 735, 805, 730, 805, 725, 805, 717, 802, 714, 796, 710, 782, 700, 775, 700, 770, 699, 762, 697, 761, 691, L, 762, 689, 754, 670, Q, 754, 669, 748, 665, 746, 663, 743, 656, L, 743, 647, Q, 740, 646, 737, 643, 736, 640, 734, 632, 733, 629, 729, 627, 723, 619, 709, 594, 698, 574, 694, 564, L, 675, 528, Q, 669, 529, 664, 530, L, 621, 530, 621, 528, 611, 519, 599, 519, Q, 582, 519, 580, 523, 577, 530, 565, 530, 552, 531, 547, 537, 543, 542, 528, 542, Q, 494, 542, 494, 527, Z]
      ],
      "label": "Atakora",
      "shortLabel": "AK",
      "labelPosition": [49, 83.8],
      "labelAlignment": [CEN, MID],
      "nextId": "BJ.AQ"
    },
    "BJ.AQ": {
      "outlines": [
        [M, 785, 2363, L, 785, 2369, 763, 2369, 763, 2380, 717, 2380, 717, 2388, 699, 2389, 697, 2428, 684, 2439, 684, 2468, 675, 2480, 675, 2502, 665, 2510, 666, 2580, 656, 2579, 655, 2603, 646, 2607, 646, 2621, 654, 2621, 657, 2644, Q, 661, 2643, 664, 2642, 669, 2641, 691, 2641, L, 719, 2642, Q, 728, 2642, 731, 2638, 739, 2629, 744, 2629, 753, 2629, 769, 2630, L, 779, 2630, Q, 782, 2630, 785, 2630, L, 788, 2622, Q, 804, 2612, 814, 2602, L, 857, 2602, Q, 861, 2598, 863, 2594, L, 864, 2561, 845, 2561, 846, 2420, 836, 2420, 836, 2402, 825, 2401, 826, 2363, Z]
      ],
      "label": "Atlantique",
      "shortLabel": "AQ",
      "labelPosition": [75.9, 250.3],
      "labelAlignment": [CEN, MID],
      "nextId": "BJ.BO"
    },
    "BJ.BO": {
      "outlines": [
        [M, 1167, 881, Q, 1161, 891, 1154, 892, L, 1082, 893, 1082, 899, 1016, 900, 1016, 891, 966, 891, 966, 895, 944, 897, 943, 908, 894, 909, Q, 888, 905, 875, 894, 868, 888, 864, 888, L, 851, 888, Q, 842, 890, 840, 895, L, 835, 900, 776, 900, 776, 908, Q, 755, 920, 753, 922, 741, 933, 741, 955, 746, 959, 751, 968, 752, 977, 755, 980, L, 765, 989, 765, 1012, 774, 1018, 773, 1068, Q, 767, 1077, 766, 1081, L, 715, 1081, 704, 1090, 702, 1169, Q, 695, 1176, 695, 1185, L, 696, 1197, Q, 696, 1201, 702, 1207, 704, 1222, 707, 1228, 716, 1249, 736, 1257, L, 736, 1263, Q, 734, 1268, 724, 1273, L, 723, 1346, 716, 1356, 717, 1378, 677, 1378, 655, 1398, 654, 1466, Q, 658, 1472, 669, 1478, 681, 1484, 684, 1498, 687, 1502, 687, 1510, 687, 1517, 681, 1519, 675, 1521, 676, 1534, 677, 1542, 675, 1562, 675, 1569, 685, 1583, L, 695, 1590, 706, 1600, 747, 1611, 746, 1630, 974, 1630, 974, 1570, Q, 974, 1563, 977, 1560, 982, 1556, 983, 1551, 986, 1539, 983, 1527, 980, 1510, 992, 1509, L, 1015, 1507, Q, 1013, 1505, 1013, 1503, 1035, 1500, 1044, 1500, 1055, 1500, 1064, 1506, 1072, 1512, 1077, 1512, 1083, 1512, 1085, 1511, 1082, 1502, 1103, 1503, 1113, 1503, 1114, 1501, 1115, 1493, 1116, 1489, 1116, 1484, 1122, 1478, 1127, 1473, 1125, 1466, 1121, 1450, 1134, 1445, L, 1134, 1428, Q, 1141, 1418, 1140, 1408, 1144, 1395, 1144, 1388, 1144, 1386, 1138, 1384, 1133, 1382, 1133, 1373, L, 1134, 1357, Q, 1134, 1342, 1136, 1340, L, 1156, 1319, Q, 1159, 1317, 1166, 1307, 1168, 1305, 1178, 1300, 1180, 1295, 1188, 1287, 1192, 1283, 1198, 1275, 1200, 1274, 1201, 1273, 1210, 1267, 1224, 1251, L, 1223, 1251, Q, 1220, 1253, 1216, 1253, 1213, 1253, 1213, 1232, 1204, 1231, 1204, 1223, 1204, 1216, 1209, 1213, 1214, 1210, 1214, 1199, 1223, 1200, 1223, 1195, 1224, 1189, 1235, 1189, L, 1245, 1190, Q, 1248, 1190, 1253, 1185, 1257, 1180, 1264, 1182, L, 1263, 1182, Q, 1277, 1183, 1278, 1183, 1289, 1183, 1291, 1180, 1298, 1171, 1311, 1162, 1313, 1161, 1314, 1153, L, 1321, 1145, Q, 1326, 1140, 1326, 1129, L, 1333, 1123, Q, 1334, 1121, 1334, 1112, 1344, 1099, 1344, 1098, 1345, 1082, 1346, 1079, 1351, 1062, 1352, 1059, 1352, 1051, 1347, 1047, 1338, 1039, 1335, 1038, 1330, 1037, 1321, 1028, 1319, 1026, 1314, 1024, 1312, 1023, 1312, 1017, 1312, 1009, 1314, 992, 1314, 990, 1322, 981, L, 1322, 969, Q, 1322, 965, 1336, 951, 1339, 947, 1341, 942, 1343, 941, 1355, 938, 1362, 938, 1368, 945, 1374, 951, 1387, 951, 1403, 951, 1404, 938, 1405, 917, 1413, 912, L, 1413, 908, Q, 1416, 888, 1416, 845, 1416, 841, 1414, 835, 1407, 842, 1393, 844, 1378, 850, 1372, 851, 1355, 863, 1337, 861, 1311, 862, 1296, 862, 1268, 868, 1252, 869, 1236, 871, 1210, 871, Q, 1181, 879, 1167, 881, Z]
      ],
      "label": "Borgou",
      "shortLabel": "BO",
      "labelPosition": [91.5, 123.3],
      "labelAlignment": [CEN, MID],
      "nextId": "BJ.CL"
    },
    "BJ.CL": {
      "outlines": [
        [M, 756, 1671, L, 755, 1735, 745, 1747, 699, 1747, 658, 1730, 657, 1720, 623, 1720, 596, 1691, 575, 1691, 575, 1701, 545, 1701, 545, 1710, 515, 1710, 515, 2090, 604, 2090, 605, 2101, 625, 2101, 658, 2121, 767, 2122, Q, 774, 2121, 794, 2134, L, 800, 2136, Q, 803, 2139, 806, 2140, 808, 2141, 809, 2145, 810, 2149, 813, 2150, L, 831, 2163, 865, 2128, 865, 2091, 965, 2090, 963, 2023, 960, 2017, Q, 953, 2010, 953, 2007, L, 954, 2001, Q, 947, 1996, 947, 1986, 953, 1977, 954, 1970, L, 955, 1951, Q, 953, 1938, 953, 1935, 953, 1930, 963, 1911, 963, 1909, 967, 1883, L, 974, 1881, Q, 975, 1866, 973, 1861, 968, 1850, 966, 1843, 956, 1829, 955, 1823, 954, 1819, 954, 1802, 954, 1784, 957, 1779, 966, 1768, 974, 1759, L, 974, 1630, 746, 1630, 746, 1669, Z]
      ],
      "label": "Collines",
      "shortLabel": "CL",
      "labelPosition": [74.4, 189.6],
      "labelAlignment": [CEN, MID],
      "nextId": "BJ.DO"
    },
    "BJ.DO": {
      "outlines": [
        [M, 671, 1099, Q, 670, 1099, 633, 1099, 615, 1099, 610, 1104, 605, 1109, 596, 1109, L, 582, 1108, 564, 1111, Q, 561, 1112, 558, 1117, 556, 1119, 550, 1119, 544, 1120, 534, 1128, 522, 1131, 520, 1134, L, 505, 1141, Q, 494, 1148, 490, 1149, 485, 1151, 476, 1158, 468, 1162, 460, 1160, 436, 1158, 433, 1155, 426, 1151, 407, 1151, L, 405, 1302, 395, 1307, 403, 1319, 405, 1332, 426, 1339, 426, 1400, 483, 1461, 496, 1469, 497, 1482, 507, 1492, 507, 1520, 515, 1521, 515, 1710, 545, 1710, 545, 1701, 575, 1701, 575, 1691, 596, 1691, 623, 1720, 657, 1720, 658, 1730, 699, 1747, 745, 1747, 755, 1735, 756, 1671, 746, 1669, 747, 1611, 706, 1600, 695, 1590, 685, 1583, Q, 675, 1569, 675, 1562, 677, 1542, 676, 1534, 675, 1521, 681, 1519, 687, 1517, 687, 1510, 687, 1502, 684, 1498, 681, 1484, 669, 1478, 658, 1472, 654, 1466, L, 655, 1398, 677, 1378, 717, 1378, 716, 1356, 723, 1346, 724, 1273, Q, 734, 1268, 736, 1263, L, 736, 1257, Q, 716, 1249, 707, 1228, 704, 1222, 702, 1207, 696, 1201, 696, 1197, L, 695, 1185, Q, 695, 1176, 702, 1169, L, 703, 1111, Q, 702, 1111, 692, 1107, L, 683, 1107, Q, 677, 1105, 671, 1099, Z]
      ],
      "label": "Donga",
      "shortLabel": "DO",
      "labelPosition": [53.9, 128.9],
      "labelAlignment": [CEN, MID],
      "nextId": "BJ.ZO"
    },
    "BJ.ZO": {
      "outlines": [
        [M, 767, 2122, L, 658, 2121, 625, 2101, 605, 2101, 604, 2090, 515, 2090, 515, 2101, 526, 2101, 526, 2150, 536, 2150, 535, 2161, 545, 2170, 552, 2190, 565, 2219, 565, 2233, 596, 2260, 595, 2271, 606, 2280, 606, 2289, 615, 2301, 616, 2322, 645, 2349, Q, 650, 2356, 660, 2371, 672, 2392, 676, 2390, L, 717, 2388, 717, 2380, 763, 2380, 763, 2369, 785, 2369, 785, 2363, 826, 2363, 827, 2349, 841, 2360, 897, 2360, 896, 2333, 886, 2332, 885, 2279, 875, 2280, 865, 2271, 855, 2272, 855, 2241, 846, 2231, 845, 2181, 834, 2180, 831, 2163, 831, 2163, 813, 2150, Q, 810, 2149, 809, 2145, 808, 2141, 806, 2140, 803, 2139, 800, 2136, L, 794, 2134, Q, 774, 2121, 767, 2122, Z]
      ],
      "label": "Zou",
      "shortLabel": "ZO",
      "labelPosition": [70.6, 224],
      "labelAlignment": [CEN, MID]
    }
  }
}];

export default {
  extension: geodefinitions,
  name: 'benin',
  type: 'maps'
};