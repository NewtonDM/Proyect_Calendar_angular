import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-courses",
  templateUrl: "courses.component.html",
  styleUrls: ["courses.component.scss"]
})
export class CoursesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'codigo', 'descripcion', 'horaSemanal', 'requerido', 'estado'];
  dataSource = new MatTableDataSource<Course>(ELEMENT_DATA);
  searchValue: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // No se asigna el paginator aquí
  }

  ngAfterViewInit() {
    // Asigna el paginator después de que la vista se ha inicializado
    this.dataSource.paginator = this.paginator;
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
    this.dataSource.paginator.firstPage();  // Resetear el paginador
  }
}

// Interfaz para los datos de curso
interface Course {
  id: number;
  codigo: string;
  descripcion: string;
  horaSemanal: number;
  requerido: boolean;
  estado: boolean;
}

// Datos de ejemplo
const ELEMENT_DATA: Course[] = [
  { id: 1, codigo: 'MAT101', descripcion: 'Matemáticas Básicas', horaSemanal: 4, requerido: true, estado: true },
  { id: 2, codigo: 'FIS202', descripcion: 'Física Avanzada', horaSemanal: 5, requerido: true, estado: true },
  { id: 3, codigo: 'HIS303', descripcion: 'Historia Universal', horaSemanal: 3, requerido: false, estado: false },
  { id: 4, codigo: 'MAT101', descripcion: 'Matemáticas Básicas', horaSemanal: 4, requerido: true, estado: true },
  { id: 5, codigo: 'FIS202', descripcion: 'Física Avanzada', horaSemanal: 5, requerido: true, estado: true },
  { id: 6, codigo: 'HIS303', descripcion: 'Historia Universal', horaSemanal: 3, requerido: false, estado: false },
  { id: 7, codigo: 'MAT101', descripcion: 'Matemáticas Básicas', horaSemanal: 4, requerido: true, estado: true },
  { id: 8, codigo: 'FIS202', descripcion: 'Física Avanzada', horaSemanal: 5, requerido: true, estado: true },
  { id: 9, codigo: 'HIS303', descripcion: 'Historia Universal', horaSemanal: 3, requerido: false, estado: false },
];
