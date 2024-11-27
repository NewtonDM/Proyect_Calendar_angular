import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-turno-modal',
  templateUrl: './turno-modal.component.html',
  styleUrls: ['./turno-modal.component.css']
})
export class TurnoModalComponent {
  turnos = [
    { id: 1, name: 'Mañana', time: '08:00 AM - 12:00 PM', selected: false },
    { id: 2, name: 'Tarde', time: '01:00 PM - 05:00 PM', selected: false },
    { id: 3, name: 'Noche', time: '06:00 PM - 10:00 PM', selected: false }
  ]; // Datos simulados para los turnos

  constructor(
    public dialogRef: MatDialogRef<TurnoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.currentTurnos) {
      this.turnos = data.currentTurnos; // Se pueden sobreescribir los turnos con los datos pasados desde el componente llamador.
    }
  }

  toggleSelection(turno: any): void {
    turno.selected = !turno.selected;  // Cambia el estado de selección del turno
  }

  closeDialog(): void {
    this.dialogRef.close(null); // No pasa ningún dato si no se hace una selección
  }

  applySelection(): void {
    // Filtra solo los turnos seleccionados
    const selectedTurnos = this.turnos.filter(t => t.selected);
    this.dialogRef.close(selectedTurnos); // Devuelve los turnos seleccionados
  }
}
