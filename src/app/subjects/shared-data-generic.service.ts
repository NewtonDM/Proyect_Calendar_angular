import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataGenericService {
  // Creamos un BehaviorSubject para almacenar el objeto compartido
  private sharedData = new BehaviorSubject<any>(null);
    
  // Exponemos el observable para que los componentes puedan suscribirse
  sharedData$ = this.sharedData.asObservable();

  // Método para actualizar el objeto compartido
  setSharedData(data: any) {
    this.sharedData.next(data);
  }

  // Método para obtener el valor actual del objeto compartido
  getSharedData() {
    return this.sharedData.getValue();
  }
}
