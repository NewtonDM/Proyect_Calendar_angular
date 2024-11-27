import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { CourseTableModalComponent } from "src/app/modal/course-table-modal/course-table-modal.component";
import { ScheduleModalComponent } from "src/app/modal/schedule-modal/schedule-modal.component";
import { Teacher } from 'src/app/interfaces/sistema';
import { ProfesoresService } from "src/app/services/profesores.service";


// // Ejemplo de datos para la tabla
// const ELEMENT_DATA = [
//     { id: 1, codigo: 'A001', nombres: 'Juan Pérez', nroDocumento: '12345678', nroHorasSemanales: 40, preferencias: 'Noche' },
//     { id: 2, codigo: 'A002', nombres: 'María López', nroDocumento: '87654321', nroHorasSemanales: 35, preferencias: 'Día' },
//     // Agrega más datos aquí
//   ];

  
@Component({
    selector: "app-teachers",
    templateUrl: "teachers.component.html",
    styleUrls: ["teachers.component.scss"]
})
export class TeachersComponent implements OnInit {
  profesores: Teacher []= [];
  displayedColumns: string[] = ['id', 'codigo', 'nombres', 'nroDocumento', 'nroHorasSemanales', 'estado', 'actions'];
  dataSource = new MatTableDataSource<any>(this.profesores);
  searchValue: string = '';
  errorMessage: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private profesorService : ProfesoresService){}

  ngOnInit() {
    this.cargarProfesores(); 
    this.dataSource.filterPredicate = (data: Teacher, filter: string) => {
      const dataStr = Object.values(data).join(' ').toLowerCase();
      return dataStr.includes(filter.trim().toLowerCase());
    };
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

  viewDetails(element: any) {
    const profesorId = element.id;

    const dialogRef = this.dialog.open(CourseTableModalComponent, {
        width: '600px',
        data: { 
          selectedCourse: element,
          profesorId: profesorId
        }, 
        height : '400px'
      });
  
      // Maneja el resultado cuando se cierra el modal
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Datos devueltos del modal:', result);
        }
      });
  }

  addSchedule(element: any): void {
    const dialogRef = this.dialog.open(ScheduleModalComponent, {
      width: '700px',
      data: { element }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Horario agregado:', result);
        // Lógica para actualizar la tabla o datos
      }
    });
  }

  cargarProfesores(){            
    this.profesorService.getProfesores().subscribe({        
      next: (response) => {          
        if (response.issuccess) {                       
          this.profesores = response.data;   
          this.dataSource = new MatTableDataSource<Teacher>(this.profesores);
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
}
