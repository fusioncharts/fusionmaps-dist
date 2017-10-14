
import { FusionChartStatic } from "fusioncharts";

declare namespace Saga {}
declare var Saga: (H: FusionChartStatic) => FusionChartStatic;
export = Saga;
export as namespace Saga;

