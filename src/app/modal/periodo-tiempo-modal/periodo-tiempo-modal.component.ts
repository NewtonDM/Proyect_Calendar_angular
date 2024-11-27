import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-periodo-tiempo-modal',
  templateUrl: './periodo-tiempo-modal.component.html',
  styleUrls: ['./periodo-tiempo-modal.component.css']
})
export class PeriodosTiempoModalComponent {
  periodos = [
    { id: 1, name: 'Mañana', startTime: '08:00 AM', endTime: '12:00 PM', selected: false },
    { id: 2, name: 'Tarde', startTime: '01:00 PM', endTime: '05:00 PM', selected: false },
    { id: 3, name: 'Noche', startTime: '06:00 PM', endTime: '10:00 PM', selected: false }
  ]; // Datos simulados para los períodos de tiempo

  constructor(
    public dialogRef: MatDialogRef<PeriodosTiempoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.currentPeriods) {
      this.periodos = data.currentPeriods; // Se pueden sobreescribir los períodos con los datos pasados desde el componente llamador.
    }
  }

  toggleSelection(periodo: any): void {
    periodo.selected = !periodo.selected;  // Cambia el estado de selección del período
  }

  closeDialog(): void {
    this.dialogRef.close(null); // No pasa ningún dato si no se hace una selección
  }

  applySelection(): void {
    // Filtra solo los períodos seleccionados
    const selectedPeriodos = this.periodos.filter(p => p.selected);
    this.dialogRef.close(selectedPeriodos); // Devuelve los períodos seleccionados
  }
}
