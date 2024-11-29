import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { MaterialModule } from '../app.module';

import { schedulerRoutes } from './scheduler.routing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GenerateSchedulerComponent } from './generate/generate-scheduler.component';
import { GenerateCalendarComponent } from './generate-calendar/generate-calendar.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { CustomCalendarComponent } from '../shared/custom-calendar/custom-calendar.component';
import { HorariosModalComponent } from '../modal/horarios-modal/horarios-modal.component';
import { DocentesModalComponent } from '../modal/docentes-modal/docentes-modal.component';
import { SalonesModalComponent } from '../modal/salones-modal/salones-modal.component';
import { PeriodosTiempoModalComponent } from '../modal/periodo-tiempo-modal/periodo-tiempo-modal.component';
import { RestriccionesModalComponent } from '../modal/restricciones-modal/restricciones-modal.component';
import { SedeModalComponent } from '../modal/sede-modal/sede-modal.component';
import { CarreraModalComponent } from '../modal/carrera-modal/carrera-modal.component';
import { PeriodoModalComponent } from '../modal/periodo-modal/periodo-modal.component';
import { TurnoModalComponent } from '../modal/tuno-modal/turno-modal.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(schedulerRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule,
    MatFormFieldModule,
    DragDropModule,
  ],
  declarations: [
    GenerateSchedulerComponent,
    GenerateCalendarComponent,
    CalendarComponent,
    CustomCalendarComponent,
    HorariosModalComponent, 
    DocentesModalComponent,
    SalonesModalComponent,
    PeriodosTiempoModalComponent,
    RestriccionesModalComponent,
    SedeModalComponent,
    CarreraModalComponent,
    PeriodoModalComponent,
    TurnoModalComponent
  ]
})

export class SchedulerModule {}
