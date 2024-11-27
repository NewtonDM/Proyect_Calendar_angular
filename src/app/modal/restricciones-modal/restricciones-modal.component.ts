import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-restricciones-modal',
  templateUrl: './restricciones-modal.component.html',
  styleUrls: ['./restricciones-modal.component.css']
})
export class RestriccionesModalComponent {
  restricciones = [
    { id: 1, name: 'Por Hora', description: 'Limitar a un número máximo de horas por día', selected: false },
    { id: 2, name: 'Por Día', description: 'Limitar a una cantidad máxima de días por semana', selected: false },
    { id: 3, name: 'Por Cantidad', description: 'Limitar la cantidad máxima de productos', selected: false },
    { id: 4, name: 'Por Usuario', description: 'Restricción por número máximo de usuarios activos', selected: false }
  ]; // Datos simulados para las restricciones

  constructor(
    public dialogRef: MatDialogRef<RestriccionesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.currentRestrictions) {
      this.restricciones = data.currentRestrictions; // Se pueden sobreescribir las restricciones con los datos pasados desde el componente llamador.
    }
  }

  toggleSelection(restriccion: any): void {
    restriccion.selected = !restriccion.selected;  // Cambia el estado de selección de la restricción
  }

  closeDialog(): void {
    this.dialogRef.close(null); // No pasa ningún dato si no se hace una selección
  }

  applySelection(): void {
    // Filtra solo las restricciones seleccionadas
    const selectedRestricciones = this.restricciones.filter(r => r.selected);
    this.dialogRef.close(selectedRestricciones); // Devuelve las restricciones seleccionadas
  }
}
