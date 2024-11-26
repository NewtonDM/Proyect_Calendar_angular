import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-calendar',
  templateUrl: './custom-calendar.component.html',
  styleUrls: ['./custom-calendar.component.scss']
})
export class CustomCalendarComponent {
  // Días en español
  weekDays: string[] = ['Horas', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  hours: string[] = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  
  // Los eventos con días en inglés
  events = [
    { day: 'Monday', startHour: 8, duration: 3, title: 'Class A' },
    // Otros eventos aquí
  ];

  // Método para convertir el día en inglés a su índice correspondiente
  translateDayToIndex(day: string): number {
    const daysInSpanish = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const daysInEnglish = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return daysInSpanish.indexOf(day) + 1; // El +1 es para ignorar el primer valor "Horas"
  }
}
