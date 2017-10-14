
import { FusionChartStatic } from "fusioncharts";

declare namespace Monaco {}
declare var Monaco: (H: FusionChartStatic) => FusionChartStatic;
export = Monaco;
export as namespace Monaco;

