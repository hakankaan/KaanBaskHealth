export interface AnalyticsResponseDto {
  success: boolean;
  data: Data;
}

interface Data {
  dashboardData: DashboardData;
}

interface DashboardData {
  charts: Charts;
  tables: Tables;
}

interface Tables {
  [key: string]: Record<string, string | number>[];
}

interface Charts {
  [key: string]: ChartData;
}

interface ChartData {
  labels: string[];
  data: number[];
}
