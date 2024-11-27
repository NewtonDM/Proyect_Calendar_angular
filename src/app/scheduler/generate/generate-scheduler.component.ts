import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { CarreraModalComponent } from "src/app/modal/carrera-modal/carrera-modal.component";
import { DocentesModalComponent } from "src/app/modal/docentes-modal/docentes-modal.component";
import { HorariosModalComponent } from "src/app/modal/horarios-modal/horarios-modal.component";
import { PeriodoModalComponent } from "src/app/modal/periodo-modal/periodo-modal.component";
import { PeriodosTiempoModalComponent } from "src/app/modal/periodo-tiempo-modal/periodo-tiempo-modal.component";
import { RestriccionesModalComponent } from "src/app/modal/restricciones-modal/restricciones-modal.component";
import { SalonesModalComponent } from "src/app/modal/salones-modal/salones-modal.component";
import { SedeModalComponent } from "src/app/modal/sede-modal/sede-modal.component";
import { TurnoModalComponent } from "src/app/modal/tuno-modal/turno-modal.component";
import { ScheduleCalendarModel } from "src/app/models/scheduler-calendar.model";
import { SharedDataService } from "src/app/subjects/shared-data.service";
  
@Component({
    selector: 'app-generate-scheduler',
    templateUrl: 'generate-scheduler.component.html',
    styleUrls: ['generate-scheduler.component.scss']
})

export class GenerateSchedulerComponent {
  dataSource = new MatTableDataSource<ScheduleCalendarModel>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'period', 'sede', 'rDuras', 'rBlandas', 'evaluacion', 'actions'];
  selectedCourses: any;
  selectedDocentes: any;
  selectedSalones
  selectedPeriodosTiempo: any;
  selectedRestricciones: any;
  selectedSedes: any;
  selectedCarreras: any;
  selectedTurnos: any;
  selectedPeriodo: any;


  constructor(private router: Router, private sharedDataService: SharedDataService, private dialog: MatDialog) {

    const currentDataGenes = [
      {
        salon: 'S01', dataCalendar: [
          { day: 2, startHour: 8, durationHour: 3, durationDay: 0, title: 'Clase A',description: 'descript', horario: '09:00', color: 'rgb(53 195 143)' },  
          { day: 4, startHour: 14, durationHour: 1, durationDay: 2, title: 'Clase B', description: 'descript', horario: '09:00', color: '#fff' }
        ]
      },
      {
        salon: 'S02', dataCalendar: [
          { day: 1, startHour: 8, durationHour: 3, durationDay: 0, title: 'Clase C',description: 'descript', horario: '09:00', color: 'blue' },
          { day: 3, startHour: 12, durationHour: 2, durationDay: 0, title: 'Clase D',description: 'descript', horario: '09:00', color: 'green' }
        ]
      },
      {
        salon: 'S03', dataCalendar: [
          { day: 5, startHour: 8, durationHour: 3, durationDay: 0, title: 'Clase E',description: 'descript', horario: '09:00', color: 'yellow' },
          { day: 6, startHour: 15, durationHour: 1, durationDay: 0, title: 'Clase F',description: 'descript', horario: '09:00', color: 'purple' }
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

  downloadElement(event) {
    
  }
  openModal(type: string): void {
    let dialogRef;
  
    switch (type) {
      case 'horarios':
        dialogRef = this.dialog.open(HorariosModalComponent, {
          width: '600px',
          data: { currentCourses: this.selectedCourses } // Pasa los datos necesarios para los horarios
        });
        break;
  
      case 'docentes':
        dialogRef = this.dialog.open(DocentesModalComponent, {
          width: '600px',
          data: { docentes: this.selectedDocentes } // Pasa los datos necesarios para los docentes
        });
        break;
  
      case 'salones':
        dialogRef = this.dialog.open(SalonesModalComponent, {
          width: '600px',
          data: { salones: this.selectedSalones } // Pasa los datos necesarios para los salones
        });
        break;
  
      case 'periodostiempo':
        dialogRef = this.dialog.open(PeriodosTiempoModalComponent, {
          width: '600px',
          data: { periodos: this.selectedPeriodosTiempo } // Pasa los datos necesarios para los periodos
        });
        break;
  
      case 'restricciones':
        dialogRef = this.dialog.open(RestriccionesModalComponent, {
          width: '600px',
          data: { restricciones: this.selectedRestricciones } // Pasa los datos necesarios para las restricciones
        });
        break;
  
      case 'sedes':
        dialogRef = this.dialog.open(SedeModalComponent, {
          width: '600px',
          data: { sedes: this.selectedSedes } // Pasa los datos necesarios para las sedes
        });
        break;
  
      case 'carreras':
        dialogRef = this.dialog.open(CarreraModalComponent, {
          width: '600px',
          data: { carreras: this.selectedCarreras } // Pasa los datos necesarios para las carreras
        });
        break;
  
      case 'turnos':
        dialogRef = this.dialog.open(TurnoModalComponent, {
          width: '600px',
          data: { turnos: this.selectedTurnos } // Pasa los datos necesarios para los turnos
        });
        break;
  
      case 'periodos':
        dialogRef = this.dialog.open(PeriodoModalComponent, {
          width: '600px',
          data: { periodo: this.selectedPeriodo } // Pasa los datos necesarios para el periodo
        });
        break;
  
      default:
        console.error('Tipo de modal no reconocido');
        return; // Si el tipo no es reconocido, no abrir ningún modal
    }
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Aquí se puede actualizar los datos después de que el modal se cierre
        switch (type) {
          case 'horarios':
            this.selectedCourses = result; // Actualiza los cursos seleccionados
            break;
          case 'docentes':
            this.selectedDocentes = result; // Actualiza los docentes seleccionados
            break;
          case 'salones':
            this.selectedSalones = result; // Actualiza los salones seleccionados
            break;
          case 'periodostiempo':
            this.selectedPeriodosTiempo = result; // Actualiza los periodos seleccionados
            break;
          case 'restricciones':
            this.selectedRestricciones = result; // Actualiza las restricciones seleccionadas
            break;
          case 'sedes':
            this.selectedSedes = result; // Actualiza las sedes seleccionadas
            break;
          case 'carreras':
            this.selectedCarreras = result; // Actualiza las carreras seleccionadas
            break;
          case 'turnos':
            this.selectedTurnos = result; // Actualiza los turnos seleccionados
            break;
          case 'periodos':
            this.selectedPeriodo = result; // Actualiza el periodo seleccionado
            break;
        }
      }
    });
  }
  
}