import { Component, Input } from '@angular/core';
import { DataCalendar } from 'src/app/models/data-calendar.model';

@Component({
  selector: 'app-custom-calendar',
  templateUrl: './custom-calendar.component.html',
  styleUrls: ['./custom-calendar.component.scss']
})
export class CustomCalendarComponent {
  weekDays: string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];  
  hours: number[] = Array.from({ length: 24 }, (_, i) => i);

  @Input() events: DataCalendar[] = [];

  /* events: Event[] = [  
    { day: 2, startHour: 8, durationHour: 3, durationDay: 0, title: 'Clase A', color: 'red' },  
    { day: 4, startHour: 14, durationHour: 1, durationDay: 2, title: 'Clase B', color: 'pink' },  
   
  ]; */ 

  getColor(color: string) {  
    return { 'background-color': color };
  }  
}  
