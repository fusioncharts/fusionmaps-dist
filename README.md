## Introduction

FusionCharts Suite XT is a front-end, JavaScript-based, comprehensive collection of 90+ charts and  1000+ maps. This includes simple and complex charts (like the column and bar charts, pie and doughnut charts, the treemap, heatmap, and logarithmic charts), gauges (like the angular gauge, bulb gauge, and the thermometer gauge), and maps (for all continents, major countries, and all US states).

The **fusionmaps** package includes the complete FusionCharts Suite XT. Along with all the charts and widgets, the package also includes map definition files for all maps offered by FusionCharts. 

It is recommended that you download the **fusioncharts** package if you will be needing only the charts and widgets. With just two map definition files (for the USA and world maps) the package size is smaller and can be installed faster.

* Official website: [http://www.fusioncharts.com/](http://www.fusioncharts.com/)
* Download page: [http://www.fusioncharts.com/download/](http://www.fusioncharts.com/download/)
* Licensing: [http://www.fusioncharts.com/buy/](http://www.fusioncharts.com/buy/)
* Documentation: [http://www.fusioncharts.com/dev/](http://www.fusioncharts.com/dev/)
* Support: [http://www.fusioncharts.com/support/](http://www.fusioncharts.com/support/)

## Table of Contents

- [Quick Start](#quick-start)
  - [Installing fusionmaps from npm](#installing-fusionmaps-from-npm)
    - [Chart-specific dependencies for npm](#chart-specific-dependencies-for-npm)
  - [Installing fusionmaps from Bower](#installing-fusionmaps-from-bower)
    - [Chart-specific dependencies for Bower](#chart-specific-dependencies-for-bower)
- [What's Included](#whats-included)
  - [Directory structure for fusionmaps installed via npm](#directory-structure-for-fusionmaps-installed-via-npm)
  - [Directory structure for fusionmaps installed via Bower](#directory-structure-for-fusionmaps-installed-via-bower)


## Quick Start

### Installing fusionmaps from npm

1. Install the fusionmaps package.

   `$npm install fusionmaps`

2. Load FusionCharts using require.

   `var FusionCharts = require("fusioncharts");`
   
3. Load the maps module using require.

   `require("fusioncharts/fusioncharts.maps")(FusionCharts);`
   
4. Load the map definition file(s) for the map(s) to be rendered using the format: **fusioncharts.&lt;MAP_ALIAS&gt;**, where **MAP_ALIAS** gets replaced by the map's JavaScript alias. Click [here](http://www.fusioncharts.com/dev/getting-started/list-of-maps.html) to get the alias names for all map definition files. Map definition files for all maps to be rendered in the application have to be included.

   Therefore, assuming that you need to render the world map, the alias name __world__ replaces the __MAP_ALIAS__ in the format.
   
   `require("fusioncharts/maps/fusioncharts.world")(FusionCharts);`

   **Note**: Unlike the core files that are stored in the **fusioncharts** directory, all map definition files are stored in the **maps** directory and are required to be fetched from there.

5. Create the FusionCharts instance required to render the map.

```
var chart = new FusionCharts ({
    "type": "world",
    "width": "500",
    "height": "300",
    "dataFormat": "json",
    "dataSource": {
      chart:{}
    }
}).render("chartContainer");
```

#### Chart-specific dependencies for npm

For some chart types, you need to include/exclude certain files and in a certain order. These chart types and the corresponding files are mentioned below:
- To render the zoom-scatter chart, it is necessary to include the **fusioncharts.js** and **fusioncharts.charts.js** files _before_ the **fusioncharts.zoomscatter.js** file.
  
```
var FusionCharts = require("fusioncharts");
require("fusioncharts/fusioncharts.charts")(FusionCharts);
require("fusioncharts/fusioncharts.zoomscatter")(FusionCharts);
```

- To render the treemap chart, it is necessary to include the **fusioncharts.js** and **fusioncharts.powercharts.js** files _before_ the **fusioncharts.treemap.js** file.

```
var FusionCharts = require("fusioncharts");
require("fusioncharts/fusioncharts.powercharts")(FusionCharts);
require("fusioncharts/fusioncharts.treemap")(FusionCharts);
```

- To render the SS Grid chart _only_ the **fusioncharts.js** and the **fusioncharts.ssgrid.js** files are needed.

```
var FusionCharts = require("fusioncharts");
require("fusioncharts/fusioncharts.ssgrid")(FusionCharts);
```

- To render the Gantt chart _only_ the **fusioncharts.js** and the **fusioncharts.gantt.js** files are needed.

```
var FusionCharts = require("fusioncharts");
require("fusioncharts/fusioncharts.gantt")(FusionCharts);
```

### Installing fusionmaps from Bower

1. Install the fusionmaps package.

   `$bower install fusionmaps`
   
2. Load FusionCharts.

   `<script src="bower_components/fusionmaps/fusioncharts.js"></script>`
   
3. Load the maps module.

   `<script src="bower_components/fusionmaps/fusioncharts.maps.js"></script>`
   
4. Load the map definition file(s) for the map(s) to be rendered using the format: **fusioncharts.&lt;MAP_ALIAS&gt;.js**, where **MAP_ALIAS** gets replaced by the map’s JavaScript alias. Click [here](http://www.fusioncharts.com/dev/getting-started/list-of-maps.html) to get the alias names for all map definition files. Map definition files for all maps to be rendered in the application have to be included.

  Therefore, assuming that you need to render the world map, the alias name __world__ replaces the __MAP_ALIAS__ in the format.

  `<script src="bower_components/fusionmaps/maps/fusioncharts.world.js"></script>`

   **Note**: Unlike the core files that are stored in the **fusioncharts** directory, all map definition files are stored in the **maps** directory and are required to be fetched from there.

5. Create the FusionCharts instance required to render the map.

```
<script>
new FusionCharts({
  "type": "world",
  "width": "500",
  "height": "300",
  "dataFormat": "json",
  "dataSource": {
    chart:{}
  }
}).render("chartContainer");
</script>
```

#### Chart-specific dependencies for Bower

For some chart types, you need to include/exclude certain files and in a certain order. These chart types and the corresponding files are mentioned below:

- To render the zoom-scatter chart, it is necessary to include the **fusioncharts.js** and **fusioncharts.charts.js** files _before_ the **fusioncharts.zoomscatter.js** file.

```
<script src = "bower_components/fusioncharts/fusioncharts.js"> </script>
<script src = "bower_components/fusioncharts/fusioncharts.charts.js"> </script>
<script src = "bower_components/fusioncharts/fusioncharts.zoomscatter.js"> </script>
```

- To render the treemap chart, it is necessary to include the **fusioncharts.js** and **fusioncharts.powercharts.js** files _before_ the **fusioncharts.treemap.js** file.

```
<script src = "bower_components/fusioncharts/fusioncharts.js"> </script>
<script src = "bower_components/fusioncharts/fusioncharts.powercharts.js"> </script>
<script src = "bower_components/fusioncharts/fusioncharts.treemap.js"> </script>
```

- To render the SS Grid chart _only_ the **fusioncharts.js** and the **fusioncharts.ssgrid.js** files are needed.

```
<script src = "bower_components/fusioncharts/fusioncharts.js"> </script>
<script src = "bower_components/fusioncharts/fusioncharts.ssgrid.js"> </script>
```

- To render the Gantt chart _only_ the **fusioncharts.js** and the **fusioncharts.gantt.js** files are needed.

```
<script src = "bower_components/fusioncharts/fusioncharts.js"> </script>
<script src = "bower_components/fusioncharts/fusioncharts.gantt.js"> </script>
```

## What's Included

### Directory structure for fusionmaps installed via npm

When fusionmaps is installed via npm, the package contains the following directories and files:

```
node_modules/
└── fusionmaps/
  │
  ├── package.json
  │
  ├── maps/
  │   ├── fusioncharts.world.js
  │   ├── fusioncharts.usa.js
  │   └── fusioncharts.<MAP_ALIAS>.js
  │
  ├── themes/
  │   ├── fusioncharts.theme.carbon.js
  │   ├── fusioncharts.theme.fint.js
  │   ├── fusioncharts.theme.ocean.js
  │   └── fusioncharts.theme.zune.js
  │
  ├── fusioncharts.js
  ├── fusioncharts.charts.js
  ├── fusioncharts.zoomscatter.js
  ├── fusioncharts.ssgrid.js
  ├── fusioncharts.powercharts.js
  ├── fusioncharts.gantt.js
  ├── fusioncharts.treemap.js
  ├── fusioncharts.widgets.js
  └── fusioncharts.maps.js  
```

### Directory structure for fusionmaps installed via Bower

When fusionmaps is installed via Bower, the package contains the following directories and files:

```
bower_components/
└── fusionmaps/
  │
  ├── package.json
  │
  ├── maps/
  │   ├── fusioncharts.world.js
  │   ├── fusioncharts.usa.js
  │   └── fusioncharts.<MAP_ALIAS>.js
  │
  ├── themes/
  │   ├── fusioncharts.theme.carbon.js
  │   ├── fusioncharts.theme.fint.js
  │   ├── fusioncharts.theme.ocean.js
  │   └── fusioncharts.theme.zune.js
  │
  ├── fusioncharts.js
  ├── fusioncharts.charts.js
  ├── fusioncharts.zoomscatter.js
  ├── fusioncharts.ssgrid.js
  ├── fusioncharts.powercharts.js
  ├── fusioncharts.gantt.js
  ├── fusioncharts.treemap.js
  ├── fusioncharts.widgets.js
  └── fusioncharts.maps.js
```
