import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { CourseTableModalComponent } from "src/app/modal/course-table-modal/course-table-modal.component";
import { ScheduleModalComponent } from "src/app/modal/schedule-modal/schedule-modal.component";

// Ejemplo de datos para la tabla
const ELEMENT_DATA = [
    { id: 1, codigo: 'A001', nombres: 'Juan Pérez', nroDocumento: '12345678', nroHorasSemanales: 40, preferencias: 'Noche' },
    { id: 2, codigo: 'A002', nombres: 'María López', nroDocumento: '87654321', nroHorasSemanales: 35, preferencias: 'Día' },
    // Agrega más datos aquí
  ];

  
@Component({
    selector: "app-teachers",
    templateUrl: "teachers.component.html",
    styleUrls: ["teachers.component.scss"]
})
export class TeachersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'codigo', 'nombres', 'nroDocumento', 'nroHorasSemanales', 'preferencias', 'actions'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  searchValue: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog){}

  ngOnInit() {
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
