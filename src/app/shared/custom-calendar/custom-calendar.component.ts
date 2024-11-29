import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { DataCalendar } from 'src/app/models/data-calendar.model';

@Component({
  selector: 'app-custom-calendar',
  templateUrl: './custom-calendar.component.html',
  styleUrls: ['./custom-calendar.component.scss']
})
export class CustomCalendarComponent {
  weekDays: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  hours: number[] = Array.from({ length: 12 }, (_, i) => i+9);

  constructor(private cdRef: ChangeDetectorRef){}
  @Input() dragEnabled: boolean = false;
  @Input() events: DataCalendar[] = [];
  @Output() eventUpdated: EventEmitter<DataCalendar> = new EventEmitter<DataCalendar>(); 

  getColor(color: string) {
    return { 'background-color': color, 'color':'black'};
  }

  onDragEnded(event: CdkDragEnd, draggedEvent: any, calendarBody: HTMLElement): void {
    if (!this.dragEnabled) {
      // Si el drag está deshabilitado, restablece la posición visual
      event.source.reset(); 
      return;
    }

    // Obtener las coordenadas del calendario en la página
    const calendarRect = calendarBody.getBoundingClientRect();
    
    // Obtener las coordenadas x e y relativas al calendario
    const { x, y } = event.dropPoint;
    
    // Calcular las posiciones relativas dentro del calendario (restando el desplazamiento del calendario)
    const relativeX = x - calendarRect.left;
    const relativeY = y - calendarRect.top;
  
    // Calculamos el tamaño de las celdas
    const cellWidth =  calendarBody.clientWidth / 7;  // Ancho de cada celda
    const cellHeight = calendarBody.clientHeight / 24;  // Alto de cada celda (24 horas)
  
    // Ajuste de las posiciones para que se alineen al inicio de las celdas
    const day = Math.floor(relativeX / cellWidth);  // Calcula en qué día se soltó el evento
    const hour = Math.floor(relativeY / cellHeight);  // Calcula en qué hora se soltó el evento
  
    // Asegúrate de que los valores de `day` y `hour` sean válidos
    // if (day < 0 || day >= 7 || hour < 0 || hour >= 24) return; // Validar rangos
  
    // Buscar el evento dentro del array de eventos
    const eventIndex = this.events.findIndex((event) => event === draggedEvent);
  
    if (eventIndex !== -1) {
      // Actualiza las propiedades de día y hora en el evento
      this.events[eventIndex].day = day; // Usa el día calculado
      this.events[eventIndex].startHour = hour; // Usa la hora calculada
  
      // Posiciona el evento visualmente en la celda correcta
      draggedEvent.style.left = `${day * cellWidth}px`;  // Establece la posición en X
      draggedEvent.style.top = `${hour * cellHeight}px`;  // Establece la posición en Y
  
      // También puedes actualizar otros atributos, si es necesario, como la duración o el color
      
      // Emitir el evento actualizado
      this.eventUpdated.emit(this.events[eventIndex]);
      this.saveEventPosition(this.events[eventIndex]);
    }
  }
  
  // Función para guardar la nueva posición del evento
  saveEventPosition(event: DataCalendar): void {
    
    this.cdRef.detectChanges();
    console.log('Nueva posición del evento:', event);
  }
}
