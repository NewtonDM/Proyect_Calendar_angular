import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { SalonesService } from "src/app/services/salones.service";
import { Classroom } from 'src/app/interfaces/sistema';

@Component({
    selector: "app-classrooms",
    templateUrl: "classrooms.component.html",
    styleUrls: ["classrooms.component.scss"]
})
export class ClassroomsComponent implements OnInit {
    salones: Classroom []= [];
    displayedColumns: string[] = ['id', 'codigo', 'descripcion', 'capacidad', 'esLaboratorio', 'estado'];
    dataSource = new MatTableDataSource<Classroom>(this.salones);
    searchValue: string = '';
    errorMessage: string = '';

    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    constructor(private salonService : SalonesService){ }

    ngOnInit() {     
      this.cargarSalones();  
      //this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data: Classroom, filter: string) => {
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

    cargarSalones(){            
      this.salonService.getSalones().subscribe({        
        next: (response) => {          
          if (response.issuccess) {                       
            this.salones = response.data;   
            this.dataSource = new MatTableDataSource<Classroom>(this.salones);
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


  
  // Interfaz para los datos de aula
  // interface Classroom {
  //   id: number;
  //   codigo: string;
  //   descripcion: string;
  //   capacidad: number;
  //   esLaboratorio: boolean;
  //   estado: boolean;
  // }
  
  // // Datos de ejemplo
  // const ELEMENT_DATA: Classroom[] = [
  //   { id: 1, codigo: 'A101', descripcion: 'Aula principal', capacidad: 30, esLaboratorio: false, estado: true },
  //   { id: 2, codigo: 'L202', descripcion: 'Laboratorio de computación', capacidad: 25, esLaboratorio: true, estado: true },
  //   { id: 3, codigo: 'B303', descripcion: 'Aula de biología', capacidad: 20, esLaboratorio: true, estado: false },
  //   // Agrega más datos aquí
  // ];
  



//   import { Component, ViewChild } from "@angular/core";
// import { MatPaginator } from "@angular/material/paginator";
// import { MatTableDataSource } from "@angular/material/table";
// import { SalonesService } from "src/app/services/salones.service";

// @Component({
//     selector: "app-classrooms",
//     templateUrl: "classrooms.component.html",
//     styleUrls: ["classrooms.component.scss"]
// })
// export class ClassroomsComponent {
//     salones: any[] = [];
//     displayedColumns: string[] = ['id', 'codigo', 'descripcion', 'capacidad', 'esLaboratorio', 'estado'];
//     dataSource = new MatTableDataSource<Classroom>(ELEMENT_DATA);
//     searchValue: string = '';
  
//     @ViewChild(MatPaginator) paginator!: MatPaginator;
  
//     constructor(private salonesService : SalonesService){
//       this.cargarSalones(); 
//     }

//     ngOnInit() {
//       this.dataSource.paginator = this.paginator;
//     }
  
//     applyFilter(event: Event) {
//       const filterValue = (event.target as HTMLInputElement).value;
//       this.searchValue = filterValue;
//       this.dataSource.filter = filterValue.trim().toLowerCase();
//     }
  
//     clearSearch() {
//       this.searchValue = '';
//       this.dataSource.filter = '';
//     }

//     cargarSalones(){

//     }
// }


  
//   // Interfaz para los datos de aula
//   interface Classroom {
//     id: number;
//     codigo: string;
//     descripcion: string;
//     capacidad: number;
//     esLaboratorio: boolean;
//     estado: boolean;
//   }
  
//   // Datos de ejemplo
//   const ELEMENT_DATA: Classroom[] = [
//     { id: 1, codigo: 'A101', descripcion: 'Aula principal', capacidad: 30, esLaboratorio: false, estado: true },
//     { id: 2, codigo: 'L202', descripcion: 'Laboratorio de computación', capacidad: 25, esLaboratorio: true, estado: true },
//     { id: 3, codigo: 'B303', descripcion: 'Aula de biología', capacidad: 20, esLaboratorio: true, estado: false },
//     // Agrega más datos aquí
//   ];
