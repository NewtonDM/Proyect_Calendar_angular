import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-horarios-modal',
  templateUrl: './horarios-modal.component.html',
  styleUrls: ['./horarios-modal.component.css']
})
export class HorariosModalComponent {
  horarios = [
    { id: 1, name: 'Matemáticas', time: '08:00 - 10:00', selected: false },
    { id: 2, name: 'Física', time: '10:30 - 12:00', selected: false },
    { id: 3, name: 'Química', time: '14:00 - 16:00', selected: false },
    { id: 4, name: 'Historia', time: '16:30 - 18:00', selected: false },
    { id: 5, name: 'Literatura', time: '18:30 - 20:00', selected: false }
  ];
  constructor(
    public dialogRef: MatDialogRef<HorariosModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.currentCourses) {
      this.horarios = data.currentCourses;
    }
  }

  toggleSelection(horario: any): void {
    horario.selected = !horario.selected;  // Cambia el estado de selección del horario
  }

  closeDialog(): void {
    this.dialogRef.close(null); // No pasa ningún dato si no se hace una selección
  }

  applySelection(): void {
    // Filtra solo los horarios seleccionados
    const selectedHorarios = this.horarios.filter(h => h.selected);
    this.dialogRef.close(selectedHorarios); // Devuelve los horarios seleccionados
  }
}
