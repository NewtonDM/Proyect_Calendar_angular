import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-docentes-modal',
  templateUrl: './docentes-modal.component.html',
  styleUrls: ['./docentes-modal.component.css']
})
export class DocentesModalComponent {
  docentes = [
    { id: 1, name: 'Juan Pérez', subject: 'Matemáticas', selected: false },
    { id: 2, name: 'Ana Gómez', subject: 'Física', selected: false },
    { id: 3, name: 'Carlos López', subject: 'Química', selected: false },
    { id: 4, name: 'Laura Martínez', subject: 'Historia', selected: false },
    { id: 5, name: 'Marta Sánchez', subject: 'Literatura', selected: false }
  ]; // Datos simulados para mostrar en la lista de docentes

  constructor(
    public dialogRef: MatDialogRef<DocentesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.currentTeachers) {
      this.docentes = data.currentTeachers; // Se pueden sobreescribir los docentes con los datos pasados desde el componente llamador.
    }
  }

  toggleSelection(docente: any): void {
    docente.selected = !docente.selected;  // Cambia el estado de selección del docente
  }

  closeDialog(): void {
    this.dialogRef.close(null); // No pasa ningún dato si no se hace una selección
  }

  applySelection(): void {
    // Filtra solo los docentes seleccionados
    const selectedDocentes = this.docentes.filter(d => d.selected);
    this.dialogRef.close(selectedDocentes); // Devuelve los docentes seleccionados
  }
}
