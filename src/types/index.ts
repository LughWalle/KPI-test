import { ReactNode } from "react";

export interface employeesTypes {
  id: number,
  matricula: number,
  status: string,
  nome: string,
  email: string,
  email_do_gestor: string,
  data_de_admissão: Date,
  data_de_rescisão: Date,
  cargo: string
}

export type AnalyticsData = {
  turnover: DataPoint[];
  headcount: DataPoint[];
};

export type DataPoint = {
  x: string;
  y: number;
};

export type ChartProps = {
  title: string;
  legend: string;
  data: DataPoint[];
};

export type data = {
  employees: Array<employeesTypes>,
  setEmployees: (newState: Array<employeesTypes>) => void,
  loading: boolean,
  setLoading: (newState: boolean) => void,
  TOHC: AnalyticsData,
  email: string,
  headcount: () => void,
  turnover: () => void,
  setEmail: (newState: string) => void,
}

export type ProviderChildrenProp = {
  children: ReactNode;
}
