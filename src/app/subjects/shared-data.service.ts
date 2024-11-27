import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataGenes } from '../models/scheduler-calendar.model';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private dataSubject = new BehaviorSubject<DataGenes[]>(null);
  data$ = this.dataSubject.asObservable();

  sendData(data: DataGenes[]) {
    this.dataSubject.next(data);
  }

  getData() {
    return this.dataSubject.getValue();
  }
}
