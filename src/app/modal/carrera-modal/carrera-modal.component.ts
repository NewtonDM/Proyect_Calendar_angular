import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-carrera-modal',
  templateUrl: './carrera-modal.component.html',
  styleUrls: ['./carrera-modal.component.css']
})
export class CarreraModalComponent {
  carreras = [
    { id: 1, name: 'Ingeniería de Sistemas', department: 'Facultad de Ingeniería', selected: false },
    { id: 2, name: 'Derecho', department: 'Facultad de Derecho', selected: false },
    { id: 3, name: 'Medicina', department: 'Facultad de Medicina', selected: false },
    { id: 4, name: 'Psicología', department: 'Facultad de Psicología', selected: false }
  ]; // Datos simulados para las carreras

  constructor(
    public dialogRef: MatDialogRef<CarreraModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.currentCareers) {
      this.carreras = data.currentCareers; // Se pueden sobreescribir las carreras con los datos pasados desde el componente llamador.
    }
  }

  toggleSelection(carrera: any): void {
    carrera.selected = !carrera.selected;  // Cambia el estado de selección de la carrera
  }

  closeDialog(): void {
    this.dialogRef.close(null); // No pasa ningún dato si no se hace una selección
  }

  applySelection(): void {
    // Filtra solo las carreras seleccionadas
    const selectedCarreras = this.carreras.filter(c => c.selected);
    this.dialogRef.close(selectedCarreras); // Devuelve las carreras seleccionadas
  }
}
