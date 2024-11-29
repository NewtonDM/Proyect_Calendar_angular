import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Registro, Schedules } from 'src/app/interfaces/sistema';
import { RegistroModalComponent } from 'src/app/modal/registro-modal/registro-modal.component';
import { RegistroService } from 'src/app/services/registro.service';
import { SharedDataGenericService } from 'src/app/subjects/shared-data-generic.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit{
  registros: Registro []= [];
  displayedColumns: string[] = ['id', 'fcreacion', 'sede', 'plan', 'faprobacion', 'estado', 'actions'];
  searchValue: string = '';
  errorMessage: string = '';
  dataSource = new MatTableDataSource<any>(this.registros);


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private sharedDataGeneric : SharedDataGenericService,
    private registroService : RegistroService){}

  ngOnInit() {
    this.cargarRegistroBySede(); 
    this.dataSource.filterPredicate = (data: Registro, filter: string) => {
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
    this.dataSource.paginator.firstPage(); 
  }

  cargarRegistroBySede(){            
    this.registroService.getRegistrosBySede().subscribe({        
      next: (response) => {          
        if (response.issuccess) {                       
          this.registros = response.data;   
          this.dataSource = new MatTableDataSource<Registro>(this.registros);
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

  crearRegistro(){    
    const dialogRef = this.dialog.open(RegistroModalComponent, {
      width: '600px',      
      // data: { 
      //   selectedCourse: element,
      //   profesorId: profesorId
      // }, 
      height : '400px', 
      disableClose: true
    });

    // Maneja el resultado cuando se cierra el modal
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Datos devueltos del modal:', result);
      }
    });
  }

  exportarRegistros(){}



  openHorariosGenerados(element : Registro){
    this.sharedDataGeneric.setSharedData(element); 
    this.router.navigate(['scheduler/generate']);
  }
}