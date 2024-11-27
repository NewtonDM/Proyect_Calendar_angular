import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sede-modal',
  templateUrl: './sede-modal.component.html',
  styleUrls: ['./sede-modal.component.css']
})
export class SedeModalComponent {
  sedes = [
    { id: 1, name: 'Sede Principal', address: 'Av. Principal 123, Lima, Perú', selected: false },
    { id: 2, name: 'Sede Secundaria', address: 'Calle Secundaria 456, Lima, Perú', selected: false },
    { id: 3, name: 'Sede Norte', address: 'Av. Norte 789, Lima, Perú', selected: false },
    { id: 4, name: 'Sede Sur', address: 'Calle Sur 1011, Lima, Perú', selected: false }
  ]; // Datos simulados para las sedes

  constructor(
    public dialogRef: MatDialogRef<SedeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.currentSedes) {
      this.sedes = data.currentSedes; // Se pueden sobreescribir las sedes con los datos pasados desde el componente llamador.
    }
  }

  toggleSelection(sede: any): void {
    sede.selected = !sede.selected;  // Cambia el estado de selección de la sede
  }

  closeDialog(): void {
    this.dialogRef.close(null); // No pasa ningún dato si no se hace una selección
  }

  applySelection(): void {
    // Filtra solo las sedes seleccionadas
    const selectedSedes = this.sedes.filter(s => s.selected);
    this.dialogRef.close(selectedSedes); // Devuelve las sedes seleccionadas
  }
}
