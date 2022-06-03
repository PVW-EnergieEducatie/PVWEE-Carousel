export default interface BuildingArray {
  [building: string]: BuildingData[];
}

export interface BuildingData {
  time: Date;
  unit: string;
  value: number | null;
}

export interface BuildingPieChartData {
  labels: string[];
  values: number[];
}
