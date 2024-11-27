import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-schedule-selection-modal',
  templateUrl: './schedule-selection-modal.component.html',
  styleUrls: ['./schedule-selection-modal.component.scss']
})
export class ScheduleSelectionModalComponent {
  availableSchedules = [
    { id: 1, day: 'Lunes', time: '08:00 - 10:00' },
    { id: 2, day: 'Martes', time: '10:00 - 12:00' },
    { id: 3, day: 'Miércoles', time: '14:00 - 16:00' },
    { id: 4, day: 'Jueves', time: '16:00 - 18:00' },
    { id: 5, day: 'Viernes', time: '18:00 - 20:00' }
  ];

  selectedSchedules: any[] = []; // Para almacenar los horarios seleccionados

  constructor(private dialogRef: MatDialogRef<ScheduleSelectionModalComponent>) {}

  // Función para verificar si un horario está seleccionado
  isSelected(schedule: any): boolean {
    return this.selectedSchedules.some(s => s.id === schedule.id);
  }

  // Función para agregar o eliminar un horario de la lista de seleccionados
  toggleSchedule(schedule: any) {
    if (this.isSelected(schedule)) {
      this.removeSchedule(schedule);
    } else {
      this.addSchedule(schedule);
    }
  }

  // Función para agregar un horario
  addSchedule(schedule: any) {
    this.selectedSchedules.push(schedule);
  }

  // Función para eliminar un horario
  removeSchedule(schedule: any) {
    this.selectedSchedules = this.selectedSchedules.filter(s => s.id !== schedule.id);
  }

  // Cancelar la selección y cerrar el modal
  onCancel(): void {
    this.dialogRef.close();
  }

  // Guardar los horarios seleccionados y cerrar el modal
  onSave(): void {
    this.dialogRef.close(this.selectedSchedules);
  }
}
