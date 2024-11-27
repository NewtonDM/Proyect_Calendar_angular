import { DataCalendar } from "./data-calendar.model";

export interface ScheduleCalendarModel {
    id: number;
    period: string;
    sede: string;
    rDuras: number;
    rBlandas: number;
    evaluacion: number;
    lbeGenes: DataGenes[];
  }

  export interface DataGenes {
    salon: string;
    dataCalendar: DataCalendar[];
  }