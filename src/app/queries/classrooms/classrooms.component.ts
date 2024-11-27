import { Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
    selector: "app-classrooms",
    templateUrl: "classrooms.component.html",
    styleUrls: ["classrooms.component.scss"]
})
export class ClassroomsComponent {
    displayedColumns: string[] = ['id', 'codigo', 'descripcion', 'capacidad', 'esLaboratorio', 'estado'];
    dataSource = new MatTableDataSource<Classroom>(ELEMENT_DATA);
    searchValue: string = '';
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
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
  }
  
  // Interfaz para los datos de aula
  interface Classroom {
    id: number;
    codigo: string;
    descripcion: string;
    capacidad: number;
    esLaboratorio: boolean;
    estado: boolean;
  }
  
  // Datos de ejemplo
  const ELEMENT_DATA: Classroom[] = [
    { id: 1, codigo: 'A101', descripcion: 'Aula principal', capacidad: 30, esLaboratorio: false, estado: true },
    { id: 2, codigo: 'L202', descripcion: 'Laboratorio de computación', capacidad: 25, esLaboratorio: true, estado: true },
    { id: 3, codigo: 'B303', descripcion: 'Aula de biología', capacidad: 20, esLaboratorio: true, estado: false },
    // Agrega más datos aquí
  ];
  