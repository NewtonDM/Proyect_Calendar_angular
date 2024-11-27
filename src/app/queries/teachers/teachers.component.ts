import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { CourseTableModalComponent } from "src/app/modal/course-table-modal/course-table-modal.component";
import { ScheduleModalComponent } from "src/app/modal/schedule-modal/schedule-modal.component";

// Ejemplo de datos para la tabla
const ELEMENT_DATA = [
    { id: 1, codigo: 'A001', nombres: 'Juan Pérez', nroDocumento: '12345678', nroHorasSemanales: 40, preferencias: 'Noche' },
    { id: 2, codigo: 'A002', nombres: 'María López', nroDocumento: '87654321', nroHorasSemanales: 35, preferencias: 'Día' },
    { id: 3, codigo: 'A001', nombres: 'Juan Pérez', nroDocumento: '12345678', nroHorasSemanales: 40, preferencias: 'Noche' },
    { id: 4, codigo: 'A002', nombres: 'María López', nroDocumento: '87654321', nroHorasSemanales: 35, preferencias: 'Día' },
    { id: 5, codigo: 'A001', nombres: 'Juan Pérez', nroDocumento: '12345678', nroHorasSemanales: 40, preferencias: 'Noche' },
    { id: 6, codigo: 'A002', nombres: 'María López', nroDocumento: '87654321', nroHorasSemanales: 35, preferencias: 'Día' },
    { id: 7, codigo: 'A001', nombres: 'Juan Pérez', nroDocumento: '12345678', nroHorasSemanales: 40, preferencias: 'Noche' },
    { id: 8, codigo: 'A002', nombres: 'María López', nroDocumento: '87654321', nroHorasSemanales: 35, preferencias: 'Día' },
    // Agrega más datos aquí
  ];

  
@Component({
    selector: "app-teachers",
    templateUrl: "teachers.component.html",
    styleUrls: ["teachers.component.scss"]
})
export class TeachersComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'codigo', 'nombres', 'nroDocumento', 'nroHorasSemanales', 'preferencias', 'actions'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  searchValue: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog){}
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.searchValue = filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // Resetear la página después de aplicar el filtro
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clearSearch() {
    this.searchValue = '';
    this.dataSource.filter = '';
    this.dataSource.paginator.firstPage(); 
  }

  viewDetails(element: any) {
    const dialogRef = this.dialog.open(CourseTableModalComponent, {
        width: '600px',
        data: { selectedCourse: element } 
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
      width: '400px',
      data: { element }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Horario agregado:', result);
        // Lógica para actualizar la tabla o datos
      }
    });
  }
}
