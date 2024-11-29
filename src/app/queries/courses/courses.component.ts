import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Course } from 'src/app/interfaces/sistema';
import { CursosService } from "src/app/services/cursos.service";

@Component({
  selector: "app-courses",
  templateUrl: "courses.component.html",
  styleUrls: ["courses.component.scss"]
})
export class CoursesComponent implements OnInit {
  cursos: Course []= [];
  displayedColumns: string[] = ['id', 'codigo', 'descripcion', 'horaSemanal', 'requerido', 'estado'];
  dataSource = new MatTableDataSource<Course>(this.cursos);
  searchValue: string = '';
  errorMessage: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cursoService : CursosService){ }
  ngOnInit() {
    this.cargarCursos(); 
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data: Course, filter: string) => {
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

    // Resetear la página después de aplicar el filtro
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clearSearch() {
    this.searchValue = '';
    this.dataSource.filter = '';
  }

  cargarCursos(){            
    this.cursoService.getCursos().subscribe({        
      next: (response) => {          
        if (response.issuccess) {                       
          this.cursos = response.data;   
          this.dataSource = new MatTableDataSource<Course>(this.cursos);
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
    
    
    // // Datos de ejemplo
    // const ELEMENT_DATA: Course[] = [
    //   { id: 1, codigo: 'MAT101', descripcion: 'Matemáticas Básicas', horaSemanal: 4, requerido: true, estado: true },
    //   { id: 2, codigo: 'FIS202', descripcion: 'Física Avanzada', horaSemanal: 5, requerido: true, estado: true },
    //   { id: 3, codigo: 'HIS303', descripcion: 'Historia Universal', horaSemanal: 3, requerido: false, estado: false },
    //   // Agrega más datos aquí
    // ];
    
