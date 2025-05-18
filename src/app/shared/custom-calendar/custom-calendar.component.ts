import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';
import { DataCalendar } from 'src/app/models/data-calendar.model';

@Component({
  selector: 'app-custom-calendar',
  templateUrl: './custom-calendar.component.html',
  styleUrls: ['./custom-calendar.component.scss']
})
export class CustomCalendarComponent {
  weekDays: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  hours: number[] = Array.from({ length: 24 }, (_, i) => i);

  constructor(private cdRef: ChangeDetectorRef){}
  @Input() dragEnabled: boolean = true;
  @Input() events: DataCalendar[] = [];
  @Output() eventUpdated: EventEmitter<any> = new EventEmitter<any>(); 
  activeMove: boolean = false;
  hasCollision: boolean = false;
  currentPositionDay: number;
  currentPositionHour: number;
  currentDurationDay: number;
  currentDurationHour: number;

  getColor(color: string) {
    return { 'background-color': color, 'color':'black'};
  }

  onDragEnded(event: CdkDragEnd, draggedEvent: any, calendarBody: HTMLElement): void {
    this.activeMove = false;
    if (!this.dragEnabled || this.hasCollision) {
    event.source.reset(); // vuelve a su posición original
    this.activeMove = null;
    this.hasCollision = false;
    this.cdRef.detectChanges();
    return;
  }
    const eventIndex = this.events.findIndex((event) => event === draggedEvent);
  
    if (eventIndex !== -1) {
      const valueIndex = this.events[eventIndex];
      const updatedEvent = { ...valueIndex, day:  this.currentPositionDay, startHour: this.currentPositionHour };
      this.eventUpdated.emit(updatedEvent);
    }

    this.hasCollision = false;
    this.activeMove = false;
    this.cdRef.detectChanges();
  }

  isCollision(day: number, hour: number, durationDay: number, durationHour: number, currentEvent: DataCalendar): boolean {
  return this.events.some(ev => {
    if (ev === currentEvent) return false;

    const startDay = ev.day;
    const endDay = ev.day + (ev.durationDay || 1);
    const startHour = ev.startHour;
    const endHour = ev.startHour + ev.durationHour;

    const newStartDay = day;
    const newEndDay = day + (durationDay || 1);
    const newStartHour = hour;
    const newEndHour = hour + durationHour;

    const overlapDay = newStartDay < endDay && newEndDay > startDay;
    const overlapHour = newStartHour < endHour && newEndHour > startHour;

    return overlapDay && overlapHour;
  });
}


  onDragMoved(
    event: CdkDragMove,
    draggedEvent: DataCalendar,
    calendarBody: HTMLElement
  ): void {
    const calendarRect = calendarBody.getBoundingClientRect();
    const { x, y } = event.pointerPosition;

    const relativeX = x - calendarRect.left;
    const relativeY = y - calendarRect.top;

    const cellWidth = calendarBody.clientWidth / 7;
    const cellHeight = calendarBody.clientHeight / 24;

    let day = Math.floor(relativeX / cellWidth);
    let hour = Math.floor(relativeY / cellHeight);

    const maxStartHour = 24 - draggedEvent.durationHour;
    if (day < 0) {
      day = 1;
    } else if (day < 7) {
      day += 1;
    } else {
      day = 6;
    }

    if (hour < 0) {
      hour = 0;
    } else if (hour >= maxStartHour) {
      hour = 24 - maxStartHour;
    }
    this.hasCollision = this.isCollision(day, hour, this.currentDurationDay, this.currentDurationHour, draggedEvent);
    this.currentPositionDay = day;
    this.currentPositionHour = hour;
    this.currentDurationDay =  draggedEvent.durationDay == 0 ? 1 : draggedEvent.durationDay;
    this.currentDurationHour = draggedEvent.durationHour;
    this.activeMove = true;
    this.cdRef.detectChanges();
  }


  
  // Función para guardar la nueva posición del evento
  saveEventPosition(event: DataCalendar): void {
    
    this.cdRef.detectChanges();
    console.log('Nueva posición del evento:', event);
  }
}
