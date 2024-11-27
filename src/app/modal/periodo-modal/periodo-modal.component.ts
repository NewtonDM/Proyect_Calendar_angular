import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-periodo-modal',
  templateUrl: './periodo-modal.component.html',
  styleUrls: ['./periodo-modal.component.css']
})
export class PeriodoModalComponent {
  periodos = [
    { id: 1, name: 'Primer Semestre 2024', startDate: '2024-01-01', endDate: '2024-06-30', selected: false },
    { id: 2, name: 'Segundo Semestre 2024', startDate: '2024-07-01', endDate: '2024-12-31', selected: false },
    { id: 3, name: 'Verano 2024', startDate: '2024-05-01', endDate: '2024-07-15', selected: false },
    { id: 4, name: 'Otoño 2024', startDate: '2024-09-01', endDate: '2024-11-30', selected: false }
  ]; // Datos simulados para los periodos

  constructor(
    public dialogRef: MatDialogRef<PeriodoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.currentPeriods) {
      this.periodos = data.currentPeriods; // Se pueden sobreescribir los periodos con los datos pasados desde el componente llamador.
    }
  }

  toggleSelection(periodo: any): void {
    periodo.selected = !periodo.selected;  // Cambia el estado de selección del periodo
  }

  closeDialog(): void {
    this.dialogRef.close(null); // No pasa ningún dato si no se hace una selección
  }

  applySelection(): void {
    // Filtra solo los periodos seleccionados
    const selectedPeriodos = this.periodos.filter(p => p.selected);
    this.dialogRef.close(selectedPeriodos); // Devuelve los periodos seleccionados
  }
}
