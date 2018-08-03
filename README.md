# FusionMaps

## Introduction
FusionMaps is a companion package meant to be used in conjunction with [FusionCharts](https://www.npmjs.com/package/fusioncharts). By default, FusionCharts only includes definitions for two maps - the **World map** and the **USA map**.

This package contains the definition files for every map that can be rendered using FusionCharts.

Note: You'll have to first install FusionCharts in order to be able to render the maps available in this package. You can get the trial or the licensed version from the links given below:

* Download page: [https://www.fusioncharts.com/download/](https://www.fusioncharts.com/download/)
* Licensing: [https://www.fusioncharts.com/buy/](https://www.fusioncharts.com/buy/)

## Package Directory Structure

The FusionMaps package contains **ES Modules** for all map definitions under the `fusionmaps/maps/es` directory. The **UMD bundles** for all map definitions are available at the root of the `fusionmaps/maps` directory.

```
fusionmaps/
└── maps/
    ├── es
    │   ├── fusioncharts.world.js
    │   ├── fusioncharts.usa.js
    │   ├── ...
    │   └── fusioncharts.<MAP_ALIAS>.js
    ├── fusioncharts.world.js
    ├── fusioncharts.usa.js
    ├── ...
    └── fusioncharts.<MAP_ALIAS>.js
```

## Quick Start
Every map definition file name is in the format **fusioncharts.&lt;MAP_ALIAS&gt;.js**, where **MAP_ALIAS** gets replaced by the map’s JavaScript alias.

Therefore, assuming that you need to render the **California map**, the alias name **california** replaces the **MAP_ALIAS** in the format. Hence, the file name should be **fusioncharts.california.js**.

For a full list of aliases visit [this link](https://www.fusioncharts.com/dev/chart-guide/getting-started/list-of-maps).

### Using via npm
1. Install the FusionCharts package.

```javascript
    `npm install fusioncharts`
```
2. Install the FusionMaps package.

```javascript
    `npm install fusionmaps`
```
3. Import FusionCharts core.

```javascript
    import FusionCharts from 'fusioncharts/core';
```
4. Import the FusionCharts map renderer.

```javascript
    import Maps from 'fusioncharts/maps';
```
5. Import the map definition you want to render.

```javascript
    import California from 'fusionmaps/maps/es/fusioncharts.california';
```
6. Add the map renderer to FusionCharts.

```javascript
    FusionCharts.addDep(Maps);
```
7. Add the map definition to FusionCharts.

```javascript
    FusionCharts.addDep(California);
```
8. Instantiate and render your map.

```javascript
    var chart = new FusionCharts({
      type: 'california',
      renderAt: 'container'
    });

    chart.render();
```

For further reference:

* Official website: [https://www.fusioncharts.com/](https://www.fusioncharts.com/)
* Documentation: [https://www.fusioncharts.com/dev/](https://www.fusioncharts.com/dev/)
* Support: [https://www.fusioncharts.com/support/](https://www.fusioncharts.com/support/)