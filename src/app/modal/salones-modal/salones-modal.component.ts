import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-salones-modal',
  templateUrl: './salones-modal.component.html',
  styleUrls: ['./salones-modal.component.css']
})

export class SalonesModalComponent {
  salones = [
    { id: 1, name: 'Salón A', capacity: 30, selected: false },
    { id: 2, name: 'Salón B', capacity: 50, selected: false },
    { id: 3, name: 'Salón C', capacity: 20, selected: false },
    { id: 4, name: 'Salón D', capacity: 40, selected: false },
    { id: 5, name: 'Salón E', capacity: 60, selected: false }
  ]; // Datos simulados para los salones


  constructor(
    public dialogRef: MatDialogRef<SalonesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.currentRooms) {
      this.salones = data.currentRooms; // Se pueden sobreescribir los salones con los datos pasados desde el componente llamador.
    }
  }

  toggleSelection(salon: any): void {
    salon.selected = !salon.selected;  // Cambia el estado de selección del salón
  }

  closeDialog(): void {
    this.dialogRef.close(null); // No pasa ningún dato si no se hace una selección
  }

  applySelection(): void {
    // Filtra solo los salones seleccionados
    const selectedSalones = this.salones.filter(s => s.selected);
    this.dialogRef.close(selectedSalones); // Devuelve los salones seleccionados
  }
}
