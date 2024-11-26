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
  ],
  declarations: [
    GenerateSchedulerComponent,
    GenerateCalendarComponent,
    CalendarComponent,
    CustomCalendarComponent
  ]
})

export class SchedulerModule {}
