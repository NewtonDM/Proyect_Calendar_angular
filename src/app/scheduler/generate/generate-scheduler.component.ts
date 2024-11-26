import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { GenerateCalendarComponent } from "../generate-calendar/generate-calendar.component";
import { Router } from "@angular/router";

interface Schedule {
    id: number;
    period: string;
    sede: string;
    rDuras: number;
    rBlandas: number;
    evaluacion: number;
  }
  
@Component({
    selector: 'app-generate-scheduler',
    templateUrl: 'generate-scheduler.component.html'
})

export class GenerateSchedulerComponent {
  dataSource = new MatTableDataSource<Schedule>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'period', 'sede', 'rDuras', 'rBlandas', 'evaluacion', 'actions'];


  constructor(private router: Router) {
    this.dataSource.data = [
      { id: 1, period: '2024-1', sede: 'BREÑA', rDuras: 0, rBlandas: 1, evaluacion: 90 },
      { id: 2, period: '2024-1', sede: 'BREÑA', rDuras: 0, rBlandas: 2, evaluacion: 85 },
      { id: 3, period: '2024-1', sede: 'BREÑA', rDuras: 0, rBlandas: 2, evaluacion: 85 },
      { id: 4, period: '2024-1', sede: 'BREÑA', rDuras: 0, rBlandas: 4, evaluacion: 60 },
      { id: 5, period: '2024-1', sede: 'BREÑA', rDuras: 1, rBlandas: 7, evaluacion: 30 },
      { id: 6, period: '2024-1', sede: 'BREÑA', rDuras: 1, rBlandas: 7, evaluacion: 30 }
    ];
    this.dataSource.paginator = this.paginator;
  }

  getColor(evaluacion: number): string {
    if (evaluacion >= 80) return 'green';
    if (evaluacion >= 60) return 'orange';
    return 'red';
  }
  openCalendar() {
   this.router.navigate(['scheduler/calendar']);
  }
}