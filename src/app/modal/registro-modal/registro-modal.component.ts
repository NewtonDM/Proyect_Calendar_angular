import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registro-modal',
  templateUrl: './registro-modal.component.html',
  styleUrls: ['./registro-modal.component.css']
})
export class RegistroModalComponent {

    // Opciones para las listas desplegables
    sedes: string[] = ['Sede Central', 'Sede Norte', 'Sede Sur'];
    periodos: string[] = ['2024-I', '2024-II', '2025-I'];
  
    // Variables para almacenar las selecciones
    selectedSede: string | null = null;
    selectedPeriodo: string | null = null;

  constructor(
    public dialogRef: MatDialogRef<RegistroModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  cancelar(){
    this.dialogRef.close();
  }

  guardar(){
    this.dialogRef.close();
  }
}
