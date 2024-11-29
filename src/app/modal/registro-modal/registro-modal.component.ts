import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegistroService } from 'src/app/services/registro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-modal',
  templateUrl: './registro-modal.component.html',
  styleUrls: ['./registro-modal.component.css']
})
export class RegistroModalComponent {

    // Opciones para las listas desplegables
    sedes: string[] = ['Trujillo', 'Sede Norte', 'Sede Sur'];
    periodos: string[] = ['2024-I', '2024-II', '2025-I'];
  
    // Variables para almacenar las selecciones
    selectedSede: string | null = null;
    selectedPeriodo: string | null = null;
      
  constructor(
    private registroService : RegistroService,
    public dialogRef: MatDialogRef<RegistroModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.selectedSede = this.sedes[0]; 
    this.selectedPeriodo = this.periodos[0]; 
  }

  cancelar(){
    this.dialogRef.close();
  }

  guardar(){
    // Mostrar SweetAlert2 para confirmar la acción
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres generar el registro?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Generar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {        
        this.registroService.crearRegistro().subscribe(response => {        
          Swal.fire('Guardado', 'El registro ha sido generado correctamente', 'success');
          this.dialogRef.close();
        }, error => {          
          Swal.fire('Error', 'Hubo un problema al generar el registro', 'error');
        });
      } else {                
        console.log('El usuario canceló la acción de guardar');
      }
    });
  }
}
