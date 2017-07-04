/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at http://www.fusioncharts.com/license

 @author FusionCharts Technologies LLP
 @meta package_map_pack
 @id fusionmaps.Orkhon.1.04-06-2017 03:52:47
*/
(function(b){"object"===typeof module&&"undefined"!==typeof module.exports?module.exports=b:b(FusionCharts)})(function(b){b(["private","modules.renderer.js-orkhon",function(){var b=this,c=b.hcLib,d=c.chartAPI,h=c.moduleCmdQueue,c=c.injectModuleDependency,a=!!d.geo,f,g,e;f=[{name:"Orkhon",revision:1,standaloneInit:!0,baseWidth:500,baseHeight:314,baseScaleFactor:10,entities:{"MN.ER.BU":{outlines:[["M",1845,616,"Q",1713,578,1611,542,1574,529,1365,465,1167,404,1110,388,1029,351,946,320,782,256,722,256,
672,256,632,356,611,411,577,513,541,593,468,798,220,1418,220,1465,220,1475,229,1476,195,1596,140,1711,109,1775,44,1905,"L",44,1995,"Q",320,2038,948,2129,1526,2216,1911,2286,1924,2288,2077,2306,2087,2243,2037,2164,1957,2014,1957,2013,1957,1998,2001,1899,2038,1813,2061,1769,2082,1727,2133,1637,2177,1558,2187,1498,2210,1433,2262,1322,2319,1198,2348,1126,2359,1098,2441,957,2493,870,2485,783,2464,793,2430,793,2340,793,2286,777,2267,771,2050,684,"Q",1956,648,1845,616,"Z"]],label:"Bayan-Öndör",shortLabel:"BU",
labelPosition:[126.5,128.1],labelAlignment:["center","middle"]},"MN.ER.JA":{outlines:[["M",3514,211,"Q",3439,202,3365,182,3319,170,3203,130,3124,96,3069,76,2966,38,2882,38,2797,38,2768,55,2726,77,2716,160,2711,200,2687,264,2641,388,2636,403,2624,438,2549,632,2529,691,2513,756,2505,775,2485,783,2493,870,2441,957,2359,1098,2348,1126,2319,1198,2262,1322,2210,1433,2187,1498,2177,1558,2133,1637,2082,1727,2061,1769,2038,1813,2001,1899,1957,1998,1957,2013,1957,2014,2037,2164,2087,2243,2077,2306,2098,2308,
2122,2311,2251,2326,2321,2357,2393,2389,2503,2472,2564,2519,2688,2615,2703,2626,2865,2729,2981,2803,3027,2849,3069,2889,3204,2993,3358,3111,3383,3111,3402,3111,3428,3089,"L",3436,3085,"Q",3468,2975,3488,2912,3523,2799,3591,2685,3658,2570,3731,2510,3802,2449,3888,2381,3972,2313,4108,2221,4227,2137,4281,2076,4336,2014,4434,1942,4535,1865,4599,1843,4653,1794,4825,1671,4957,1578,4957,1466,4957,1394,4877,1293,4779,1184,4747,1139,4700,1076,4634,1004,4611,981,4568,922,4520,858,4502,836,4296,574,4275,544,
4196,429,4166,329,"L",4147,245,4024,239,"Q",3951,236,3845,232,"Q",3632,224,3514,211,"Z"]],label:"Jargalant",shortLabel:"JA",labelPosition:[345.7,157.5],labelAlignment:["center","middle"]}}}];e=f.length;if(a)for(;e--;)a=f[e],d(a.name.toLowerCase(),a,d.geo);else for(;e--;)a=f[e],g=a.name.toLowerCase(),c("maps",g,1),h.maps.unshift({cmd:"_call",obj:window,args:[function(a,c){d.geo?d(a,c,d.geo):b.raiseError(b.core,"12052314141","run","JavaScriptRenderer~Maps._call()",Error("FusionCharts.HC.Maps.js is required in order to define vizualization"))},
[g,a],window]})}])});
