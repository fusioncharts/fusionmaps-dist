
import { FusionChartStatic } from "fusioncharts";

declare namespace Cairo {}
declare var Cairo: (H: FusionChartStatic) => FusionChartStatic;
export = Cairo;
export as namespace Cairo;

