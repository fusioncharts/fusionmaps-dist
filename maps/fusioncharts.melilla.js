/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at http://www.fusioncharts.com/license

 @author FusionCharts Technologies LLP
 @meta package_map_pack
 @id fusionmaps.Melilla.1.04-03-2017 11:58:22
*/
(function(b){"object"===typeof module&&"undefined"!==typeof module.exports?module.exports=b:b(FusionCharts)})(function(b){b(["private","modules.renderer.js-melilla",function(){var b=this,c=b.hcLib,d=c.chartAPI,h=c.moduleCmdQueue,c=c.injectModuleDependency,a=!!d.geo,f,g,e;f=[{name:"Melilla",revision:1,standaloneInit:!0,baseWidth:275,baseHeight:400,baseScaleFactor:10,entities:{"ES.ME.ME":{outlines:[["M",2719,3020,"Q",2719,2116,2601,1174,2483,310,519,35,323,1331,87,2627,-189,4277,1658,3884,"Q",2719,
3413,2719,3020,"Z"]],label:"Melilla",shortLabel:"ME",labelPosition:[138.5,199.7],labelAlignment:["center","middle"]}}}];e=f.length;if(a)for(;e--;)a=f[e],d(a.name.toLowerCase(),a,d.geo);else for(;e--;)a=f[e],g=a.name.toLowerCase(),c("maps",g,1),h.maps.unshift({cmd:"_call",obj:window,args:[function(a,c){d.geo?d(a,c,d.geo):b.raiseError(b.core,"12052314141","run","JavaScriptRenderer~Maps._call()",Error("FusionCharts.HC.Maps.js is required in order to define vizualization"))},[g,a],window]})}])});
