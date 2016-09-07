/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @author FusionCharts Technologies LLP
 @meta package_map_pack
 @id fusionmaps.AlmatyCity.17.02-23-2016 08:17:46
*/
(function(b){"object"===typeof module&&"undefined"!==typeof module.exports?module.exports=b:b(FusionCharts)})(function(b){b(["private","modules.renderer.js-almatycity",function(){var b=this,c=b.hcLib,d=c.chartAPI,h=c.moduleCmdQueue,c=c.injectModuleDependency,a=!!d.geo,f,g,e;f=[{name:"AlmatyCity",revision:17,standaloneInit:!0,baseWidth:228,baseHeight:300,baseScaleFactor:10,entities:{"KZ.AC.AC":{outlines:[["M",1987,98,"L",1342,38,"Q",1177,38,1177,248,1177,413,1057,458,"L",353,458,"Q",353,473,353,758,
353,788,353,803,353,968,203,1013,68,1043,53,1222,53,1312,68,1417,"L",68,1432,"Q",68,1777,83,1867,158,2122,413,2302,428,2317,592,2437,653,2497,787,2647,"L",1222,2647,"Q",1162,2812,1297,2902,1327,2916,1372,2931,1492,2961,1687,2961,1867,2961,1957,2947,"L",1957,2827,"Q",1927,2782,1927,2752,2001,2752,2227,2617,"L",2227,2317,"Q",2046,2317,1987,2302,1957,2137,1897,2032,1837,1927,1777,1912,1717,1927,1672,1927,"L",1672,1043,2152,1013,2152,773,"Q",2062,743,1897,758,1777,758,1732,698,"L",1732,353,"Q",1792,353,
1987,278,"Z"]],label:"Almaty City",shortLabel:"AC",labelPosition:[94.8,150],labelAlignment:["center","middle"]}}}];e=f.length;if(a)for(;e--;)a=f[e],d(a.name.toLowerCase(),a,d.geo);else for(;e--;)a=f[e],g=a.name.toLowerCase(),c("maps",g,1),h.maps.unshift({cmd:"_call",obj:window,args:[function(a,c){d.geo?d(a,c,d.geo):b.raiseError(b.core,"12052314141","run","JavaScriptRenderer~Maps._call()",Error("FusionCharts.HC.Maps.js is required in order to define vizualization"))},[g,a],window]})}])});
