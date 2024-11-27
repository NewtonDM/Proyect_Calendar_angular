import { Component, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ScheduleSelectionModalComponent } from '../schedule-selection-modal/schedule-selection-modal.component';

@Component({
  selector: 'app-schedule-modal',
  templateUrl: './schedule-modal.component.html',
  styleUrls: ['./schedule-modal.component.scss']
})
export class ScheduleModalComponent {
  availableSchedules = [
    { id: 1, day: 'Lunes', time: '08:00 - 10:00' },
    { id: 2, day: 'Martes', time: '10:00 - 12:00' },
    { id: 3, day: 'Miércoles', time: '14:00 - 16:00' },
    { id: 4, day: 'Jueves', time: '16:00 - 18:00' },
    { id: 5, day: 'Viernes', time: '18:00 - 20:00' }
  ];

  selectedSchedules: any[] = [];

  constructor(
    private dialogRef: MatDialogRef<ScheduleModalComponent>,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog // Inyectamos ChangeDetectorRef
  ) {}

  addSchedule(schedule: any) {
    // Verificamos si ya existe antes de agregar
    if (!this.selectedSchedules.some(s => s.id === schedule.id)) {
      this.selectedSchedules = [...this.selectedSchedules, { ...schedule }]; // Clonamos el array
      this.cdr.detectChanges(); // Forzamos la detección de cambios
    }
  }

  removeSchedule(schedule: any) {
    this.selectedSchedules = this.selectedSchedules.filter(s => s.id !== schedule.id);
    this.cdr.detectChanges(); // Forzamos la detección de cambios
  }

  saveSchedules() {
    this.dialogRef.close(this.selectedSchedules); // Retorna los datos seleccionados
  }

  clearSelection() {
    this.selectedSchedules = [];
    this.cdr.detectChanges(); // Forzamos la detección de cambios
  }

  openScheduleModal() {
    const dialogRef = this.dialog.open(ScheduleSelectionModalComponent, {
      width: '60%', // Puedes ajustar el ancho del modal
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedSchedules = result;
      }
    });
  }
}
