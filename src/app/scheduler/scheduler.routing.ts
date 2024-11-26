import { Routes } from '@angular/router';
import { GenerateSchedulerComponent } from './generate/generate-scheduler.component';
import { GenerateCalendarComponent } from './generate-calendar/generate-calendar.component';
import { CalendarComponent } from '../calendar/calendar.component';

export const schedulerRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'generate',
        component: GenerateSchedulerComponent
    }]},
    {
      path: '',
      children: [ {
        path: 'calendar',
        component: GenerateCalendarComponent
      }]
    }
];
