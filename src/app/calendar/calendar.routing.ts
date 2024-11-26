import { Routes } from '@angular/router';

import { CalendarComponent } from './calendar.component';
import { CalendarCopyComponent } from './calendar.component-copy';

export const CalendarRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: CalendarCopyComponent
    }]
}
];
