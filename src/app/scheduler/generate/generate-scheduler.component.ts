import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { ScheduleCalendarModel } from "src/app/models/scheduler-calendar.model";
import { SharedDataService } from "src/app/subjects/shared-data.service";
  
@Component({
    selector: 'app-generate-scheduler',
    templateUrl: 'generate-scheduler.component.html'
})

export class GenerateSchedulerComponent {
  dataSource = new MatTableDataSource<ScheduleCalendarModel>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'period', 'sede', 'rDuras', 'rBlandas', 'evaluacion', 'actions'];


  constructor(private router: Router, private sharedDataService: SharedDataService) {

    const currentDataGenes = [
      {
        salon: 'S01', dataCalendar: [
          { day: 2, startHour: 8, durationHour: 3, durationDay: 0, title: 'Clase A', color: 'rgb(53 195 143)' },  
          { day: 4, startHour: 14, durationHour: 1, durationDay: 2, title: 'Clase B', color: '#fff' }
        ]
      },
      {
        salon: 'S02', dataCalendar: [
          { day: 1, startHour: 8, durationHour: 3, durationDay: 0, title: 'Clase C', color: 'blue' },
          { day: 3, startHour: 12, durationHour: 2, durationDay: 0, title: 'Clase D', color: 'green' }
        ]
      },
      {
        salon: 'S03', dataCalendar: [
          { day: 5, startHour: 8, durationHour: 3, durationDay: 0, title: 'Clase E', color: 'yellow' },
          { day: 6, startHour: 15, durationHour: 1, durationDay: 0, title: 'Clase F', color: 'purple' }
        ]
      }
    ];

    this.dataSource.data = [
      { id: 1, period: '2024-1', sede: 'BREÑA', rDuras: 0, rBlandas: 1, evaluacion: 90, lbeGenes: currentDataGenes },
      { id: 2, period: '2024-1', sede: 'BREÑA', rDuras: 0, rBlandas: 2, evaluacion: 85, lbeGenes: currentDataGenes },
      { id: 3, period: '2024-1', sede: 'BREÑA', rDuras: 0, rBlandas: 2, evaluacion: 85, lbeGenes: currentDataGenes },
      { id: 4, period: '2024-1', sede: 'BREÑA', rDuras: 0, rBlandas: 4, evaluacion: 60, lbeGenes: currentDataGenes },
      { id: 5, period: '2024-1', sede: 'BREÑA', rDuras: 1, rBlandas: 7, evaluacion: 30, lbeGenes: currentDataGenes },
      { id: 6, period: '2024-1', sede: 'BREÑA', rDuras: 1, rBlandas: 7, evaluacion: 30, lbeGenes: currentDataGenes }
    ];
    this.dataSource.paginator = this.paginator;
  }

  getColor(evaluacion: number): string {
    if (evaluacion >= 80) return 'green';
    if (evaluacion >= 60) return 'orange';
    return 'red';
  }
  openCalendar( element: ScheduleCalendarModel) {

   this.sharedDataService.sendData([...element.lbeGenes]);
   this.router.navigate(['scheduler/calendar']);
  }
}