import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { Horario, HorarioDetalle, Registro } from "src/app/interfaces/sistema";
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
import { HorariosService } from "src/app/services/horarios.service";
import { SharedDataGenericService } from "src/app/subjects/shared-data-generic.service";
import { SharedDataService } from "src/app/subjects/shared-data.service";
  
@Component({
    selector: 'app-generate-scheduler',
    templateUrl: 'generate-scheduler.component.html',
    styleUrls: ['generate-scheduler.component.scss']
})

export class GenerateSchedulerComponent implements OnInit{
  registro : Registro | null = null; 
  horarios : Horario[] = []; 
  displayedColumns: string[] = ['id', 'period', 'sede', 'rDuras', 'rBlandas', 'evaluacion', 'actions'];
  dataSource = new MatTableDataSource<Horario>(this.horarios);
  searchValue: string = '';
  errorMessage: string = '';

  selectedCourses: any;
  selectedDocentes: any;
  selectedSalones
  selectedPeriodosTiempo: any;
  selectedRestricciones: any;
  selectedSedes: any;
  selectedCarreras: any;
  selectedTurnos: any;
  selectedPeriodo: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router, 
    private sharedDataGenericService : SharedDataGenericService,
    private sharedDataService: SharedDataService,
    private dialog: MatDialog, 
    private horarioService : HorariosService) { 
  }

  ngOnInit(){
    this.sharedDataGenericService.sharedData$.subscribe((sharedData:Registro)=>{
      if(sharedData){
        this.registro = sharedData; 
        this.obtenerHorarios(this.registro);
      }      
    });

    

    this.dataSource.filterPredicate = (data: Horario, filter: string) => {
      const dataStr = Object.values(data).join(' ').toLowerCase();
      return dataStr.includes(filter.trim().toLowerCase());
    };
  }

  getColor(evaluacion: number): string {
    if (evaluacion >= 80) return 'green';
    if (evaluacion >= 60) return 'orange';
    return 'red';
  }
  
  openCalendar(element: Horario) {
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.searchValue = filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clearSearch() {
    this.searchValue = '';
    this.dataSource.filter = '';
  }

  obtenerHorarios(element){
    this.horarioService.getHorarios(element.id).subscribe({        
      next: (response) => {     

        if (response.issuccess) {                       
          this.horarios = response.data;   
          this.dataSource = new MatTableDataSource<Horario>(this.horarios);
          this.dataSource.paginator = this.paginator;
        } else{
          this.dataSource.data = [];
        }
      }, 
      error: (err) => {          
        this.dataSource.data = [];
        this.errorMessage = 'Ocurrió un error al obtener los datos. Inténtalo nuevamente.';
      }
    });
  }

  obtenerHorariosDetalle(element){
    this.horarioService.getHorarioDetalle().subscribe({        
      next: (response) => {   
                
        if (response.issuccess) {                       
          element.detalle = response.data;             
        } else{
          element.detalle = [];
        }
      }, 
      error: (err) => {          
        this.dataSource.data = [];
        this.errorMessage = 'Ocurrió un error al obtener los datos. Inténtalo nuevamente.';
      }
    });
  }
}




// @Component({
//   selector: 'app-generate-scheduler',
//   templateUrl: 'generate-scheduler.component.html',
//   styleUrls: ['generate-scheduler.component.scss']
// })

// export class GenerateSchedulerComponent {
// dataSource = new MatTableDataSource<ScheduleCalendarModel>();
// @ViewChild(MatPaginator) paginator!: MatPaginator;
// displayedColumns: string[] = ['id', 'period', 'sede', 'rDuras', 'rBlandas', 'evaluacion', 'actions'];
// selectedCourses: any;
// selectedDocentes: any;
// selectedSalones
// selectedPeriodosTiempo: any;
// selectedRestricciones: any;
// selectedSedes: any;
// selectedCarreras: any;
// selectedTurnos: any;
// selectedPeriodo: any;


// constructor(private router: Router, private sharedDataService: SharedDataService, private dialog: MatDialog) {

//   const currentDataGenes = [
//     {
//       salon: 'S101', dataCalendar: [
//         { day: 1, startHour: 0, durationHour: 3, durationDay: 0, title: 'INGB',description: 'fnearaujo', horario: '09:00 - 11:00', color: 'rgb(164,195,165)' },  
//         { day: 1, startHour: 3, durationHour: 3, durationDay: 0, title: 'FUGE',description: 'frmendo', horario: '11:00 - 14:00', color: 'rgb(150,200,250)' },  
//         { day: 1, startHour: 6, durationHour: 3, durationDay: 0, title: 'GABN',description: 'fjpaiba', horario: '14:00 - 16:00', color: 'rgb(150,100,250)' },  

//         { day: 2, startHour: 0, durationHour: 3, durationDay: 0, title: 'IGDE',description: 'fluchunga', horario: '09:00 - 11:00', color: 'rgb(214,100,227)' },  
//         { day: 2, startHour: 3, durationHour: 3, durationDay: 0, title: 'MPNO',description: 'fbovargas', horario: '11:00 - 14:00', color: 'rgb(164,250,228)' },  
//         { day: 2, startHour: 6, durationHour: 3, durationDay: 0, title: 'ECAP',description: 'fjpaiba', horario: '14:00 - 16:00', color: 'rgb(173,210,220)' },  

//         { day: 3, startHour: 0, durationHour: 3, durationDay: 0, title: 'GABN',description: 'ffpisfil', horario: '09:00 - 11:00', color: 'rgb(179,238,158)' },  
//         { day: 3, startHour: 3, durationHour: 3, durationDay: 0, title: 'BDIN',description: 'fluchunga', horario: '11:00 - 14:00', color: 'rgb(164,100,250)' },  
//         { day: 3, startHour: 6, durationHour: 3, durationDay: 0, title: 'GOPL',description: 'fkpomares', horario: '14:00 - 16:00', color: 'rgb(100,210,220)' },  

//         { day: 4, startHour: 0, durationHour: 3, durationDay: 0, title: 'ECAP',description: 'fkpomares', horario: '09:00 - 11:00', color: 'rgb(214,100,200)' },  
//         { day: 4, startHour: 3, durationHour: 3, durationDay: 0, title: 'GOCA',description: 'fpcumpa', horario: '11:00 - 14:00', color: 'rgb(254,100,227)' },  
//         { day: 4, startHour: 6, durationHour: 3, durationDay: 0, title: 'LIAO',description: 'fcpantoja', horario: '14:00 - 16:00', color: 'rgb(120,155,220)' },  


//         { day: 5, startHour: 0, durationHour: 3, durationDay: 0, title: 'LIA2',description: 'fdgastelo', horario: '09:00 - 11:00', color: 'rgb(201,214,211)' },  
//         { day: 5, startHour: 3, durationHour: 3, durationDay: 0, title: 'FNZ2',description: 'ffpisfil', horario: '11:00 - 14:00', color: 'rgb(164,130,200)' },  
//         { day: 5, startHour: 6, durationHour: 3, durationDay: 0, title: 'GPF2',description: 'fhediaz', horario: '14:00 - 16:00', color: 'rgb(200,250,250)' },  

//         { day: 6, startHour: 0, durationHour: 3, durationDay: 0, title: 'GCAI',description: 'fhquiroz', horario: '09:00 - 11:00', color: 'rgb(179,238,158)' },  
//         { day: 6, startHour: 3, durationHour: 3, durationDay: 0, title: 'INGB',description: 'fnearaujo', horario: '11:00 - 14:00', color: 'rgb(164,195,165)' },  
        
//       ]
//     },
//     {
//       salon: 'S02', dataCalendar: [
//         { day: 1, startHour: 8, durationHour: 3, durationDay: 0, title: 'Clase C',description: 'descript', horario: '09:00', color: 'blue' },
//         { day: 3, startHour: 12, durationHour: 2, durationDay: 0, title: 'Clase D',description: 'descript', horario: '09:00', color: 'green' }
//       ]
//     },
//     {
//       salon: 'S03', dataCalendar: [
//         { day: 5, startHour: 8, durationHour: 3, durationDay: 0, title: 'Clase E',description: 'descript', horario: '09:00', color: 'yellow' },
//         { day: 6, startHour: 15, durationHour: 1, durationDay: 0, title: 'Clase F',description: 'descript', horario: '09:00', color: 'purple' }
//       ]
//     }
//   ];

//   this.dataSource.data = [
//     { id: 1, period: '2024-1', sede: 'BREÑA', rDuras: 0, rBlandas: 1, evaluacion: 90, lbeGenes: currentDataGenes },
//     { id: 2, period: '2024-1', sede: 'BREÑA', rDuras: 0, rBlandas: 2, evaluacion: 85, lbeGenes: currentDataGenes },
//     { id: 3, period: '2024-1', sede: 'BREÑA', rDuras: 0, rBlandas: 2, evaluacion: 85, lbeGenes: currentDataGenes },
//     { id: 4, period: '2024-1', sede: 'BREÑA', rDuras: 0, rBlandas: 4, evaluacion: 60, lbeGenes: currentDataGenes },
//     { id: 5, period: '2024-1', sede: 'BREÑA', rDuras: 1, rBlandas: 7, evaluacion: 30, lbeGenes: currentDataGenes },
//     { id: 6, period: '2024-1', sede: 'BREÑA', rDuras: 1, rBlandas: 7, evaluacion: 30, lbeGenes: currentDataGenes }
//   ];
//   this.dataSource.paginator = this.paginator;
// }

// getColor(evaluacion: number): string {
//   if (evaluacion >= 80) return 'green';
//   if (evaluacion >= 60) return 'orange';
//   return 'red';
// }
// openCalendar( element: ScheduleCalendarModel) {

//  this.sharedDataService.sendData([...element.lbeGenes]);
//  this.router.navigate(['scheduler/calendar']);
// }

// downloadElement(event) {
  
// }

// openModal(type: string): void {
//   let dialogRef;

//   switch (type) {
//     case 'horarios':
//       dialogRef = this.dialog.open(HorariosModalComponent, {
//         width: '600px',
//         data: { currentCourses: this.selectedCourses } // Pasa los datos necesarios para los horarios
//       });
//       break;

//     case 'docentes':
//       dialogRef = this.dialog.open(DocentesModalComponent, {
//         width: '600px',
//         data: { docentes: this.selectedDocentes } // Pasa los datos necesarios para los docentes
//       });
//       break;

//     case 'salones':
//       dialogRef = this.dialog.open(SalonesModalComponent, {
//         width: '600px',
//         data: { salones: this.selectedSalones } // Pasa los datos necesarios para los salones
//       });
//       break;

//     case 'periodostiempo':
//       dialogRef = this.dialog.open(PeriodosTiempoModalComponent, {
//         width: '600px',
//         data: { periodos: this.selectedPeriodosTiempo } // Pasa los datos necesarios para los periodos
//       });
//       break;

//     case 'restricciones':
//       dialogRef = this.dialog.open(RestriccionesModalComponent, {
//         width: '600px',
//         data: { restricciones: this.selectedRestricciones } // Pasa los datos necesarios para las restricciones
//       });
//       break;

//     case 'sedes':
//       dialogRef = this.dialog.open(SedeModalComponent, {
//         width: '600px',
//         data: { sedes: this.selectedSedes } // Pasa los datos necesarios para las sedes
//       });
//       break;

//     case 'carreras':
//       dialogRef = this.dialog.open(CarreraModalComponent, {
//         width: '600px',
//         data: { carreras: this.selectedCarreras } // Pasa los datos necesarios para las carreras
//       });
//       break;

//     case 'turnos':
//       dialogRef = this.dialog.open(TurnoModalComponent, {
//         width: '600px',
//         data: { turnos: this.selectedTurnos } // Pasa los datos necesarios para los turnos
//       });
//       break;

//     case 'periodos':
//       dialogRef = this.dialog.open(PeriodoModalComponent, {
//         width: '600px',
//         data: { periodo: this.selectedPeriodo } // Pasa los datos necesarios para el periodo
//       });
//       break;

//     default:
//       console.error('Tipo de modal no reconocido');
//       return; // Si el tipo no es reconocido, no abrir ningún modal
//   }

//   dialogRef.afterClosed().subscribe(result => {
//     if (result) {
//       // Aquí se puede actualizar los datos después de que el modal se cierre
//       switch (type) {
//         case 'horarios':
//           this.selectedCourses = result; // Actualiza los cursos seleccionados
//           break;
//         case 'docentes':
//           this.selectedDocentes = result; // Actualiza los docentes seleccionados
//           break;
//         case 'salones':
//           this.selectedSalones = result; // Actualiza los salones seleccionados
//           break;
//         case 'periodostiempo':
//           this.selectedPeriodosTiempo = result; // Actualiza los periodos seleccionados
//           break;
//         case 'restricciones':
//           this.selectedRestricciones = result; // Actualiza las restricciones seleccionadas
//           break;
//         case 'sedes':
//           this.selectedSedes = result; // Actualiza las sedes seleccionadas
//           break;
//         case 'carreras':
//           this.selectedCarreras = result; // Actualiza las carreras seleccionadas
//           break;
//         case 'turnos':
//           this.selectedTurnos = result; // Actualiza los turnos seleccionados
//           break;
//         case 'periodos':
//           this.selectedPeriodo = result; // Actualiza el periodo seleccionado
//           break;
//       }
//     }
//   });
// } 
// }