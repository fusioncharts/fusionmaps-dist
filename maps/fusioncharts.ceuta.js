/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at http://www.fusioncharts.com/license

 @author FusionCharts Technologies LLP
 @meta package_map_pack
 @id fusionmaps.Ceuta.1.04-03-2017 11:58:17
*/
(function(b){"object"===typeof module&&"undefined"!==typeof module.exports?module.exports=b:b(FusionCharts)})(function(b){b(["private","modules.renderer.js-ceuta",function(){var b=this,c=b.hcLib,d=c.chartAPI,h=c.moduleCmdQueue,c=c.injectModuleDependency,a=!!d.geo,f,g,e;f=[{name:"Ceuta",revision:1,standaloneInit:!0,baseWidth:277,baseHeight:400,baseScaleFactor:10,entities:{"ES.CE.CE":{outlines:[["M",45,1911,"Q",-100,4225,2069,3936,2864,3791,2719,2779,2575,2056,2502,1405,2358,682,1201,32,"Q",478,899,
45,1911,"Z"]],label:"Ceuta",shortLabel:"CE",labelPosition:[138.8,200],labelAlignment:["center","middle"]}}}];e=f.length;if(a)for(;e--;)a=f[e],d(a.name.toLowerCase(),a,d.geo);else for(;e--;)a=f[e],g=a.name.toLowerCase(),c("maps",g,1),h.maps.unshift({cmd:"_call",obj:window,args:[function(a,c){d.geo?d(a,c,d.geo):b.raiseError(b.core,"12052314141","run","JavaScriptRenderer~Maps._call()",Error("FusionCharts.HC.Maps.js is required in order to define vizualization"))},[g,a],window]})}])});
