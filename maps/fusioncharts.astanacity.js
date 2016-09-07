/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @author FusionCharts Technologies LLP
 @meta package_map_pack
 @id fusionmaps.AstanaCity.17.02-23-2016 08:17:46
*/
(function(b){"object"===typeof module&&"undefined"!==typeof module.exports?module.exports=b:b(FusionCharts)})(function(b){b(["private","modules.renderer.js-astanacity",function(){var b=this,c=b.hcLib,d=c.chartAPI,h=c.moduleCmdQueue,c=c.injectModuleDependency,a=!!d.geo,f,g,e;f=[{name:"AstanaCity",revision:17,standaloneInit:!0,baseWidth:300,baseHeight:280,baseScaleFactor:10,entities:{"KZ.AS.AS":{outlines:[["M",1505,228,"L",1479,422,1039,422,"Q",898,369,889,325,872,272,810,246,749,228,740,219,731,211,
731,202,705,149,687,123,652,79,617,79,502,35,414,35,361,35,361,246,"L",36,237,36,1135,"Q",62,1249,36,1504,36,1592,71,1645,115,1716,212,1724,"L",212,2059,"Q",256,2068,344,2085,414,2112,432,2200,467,2200,986,2226,995,2226,1013,2235,1065,2252,1180,2332,1338,2446,1338,2516,"L",1321,2631,1321,2736,"Q",1426,2763,1646,2763,"L",1875,2754,"Q",1884,2587,1893,2525,1884,2428,1884,2384,1875,2288,1910,2261,1928,2244,1972,2235,2025,2226,2034,2208,2042,2191,2051,2129,2060,2094,2078,2085,2157,2041,2262,2059,2289,
2059,2324,2068,2658,2129,2614,1795,2597,1698,2720,1689,2782,1689,2887,1698,2949,1689,2966,1619,2966,1610,2966,1601,2966,1566,2966,1469,"L",2949,1135,"Q",2905,1152,2870,1108,2834,1055,2817,1038,2755,950,2658,915,2553,809,2500,791,2359,783,2315,721,2289,686,2210,642,2148,607,2148,580,2095,360,2016,395,2016,387,1946,175,1910,52,1796,52,1699,52,1690,79,1690,105,1681,228,"Z"]],label:"Astana City",shortLabel:"AS",labelPosition:[150.1,139.9],labelAlignment:["center","middle"]}}}];e=f.length;if(a)for(;e--;)a=
f[e],d(a.name.toLowerCase(),a,d.geo);else for(;e--;)a=f[e],g=a.name.toLowerCase(),c("maps",g,1),h.maps.unshift({cmd:"_call",obj:window,args:[function(a,c){d.geo?d(a,c,d.geo):b.raiseError(b.core,"12052314141","run","JavaScriptRenderer~Maps._call()",Error("FusionCharts.HC.Maps.js is required in order to define vizualization"))},[g,a],window]})}])});
