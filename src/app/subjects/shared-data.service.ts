import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HorarioDetalle } from '../interfaces/sistema';

@Injectable({
  providedIn: 'root',
})

export class SharedDataService {
  private dataSubject = new BehaviorSubject<HorarioDetalle[]>(null);
  data$ = this.dataSubject.asObservable();

  sendData(data: HorarioDetalle[]) {
    this.dataSubject.next(data);
  }

  getData() {
    return this.dataSubject.getValue();
  }
}



// export class SharedDataService {
//   private dataSubject = new BehaviorSubject<DataGenes[]>(null);
//   data$ = this.dataSubject.asObservable();

//   sendData(data: DataGenes[]) {
//     this.dataSubject.next(data);
//   }

//   getData() {
//     return this.dataSubject.getValue();
//   }
// }
