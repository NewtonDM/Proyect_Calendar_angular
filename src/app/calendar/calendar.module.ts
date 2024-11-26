import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { CalendarRoutes } from './calendar.routing';
import { CalendarCopyComponent } from './calendar.component-copy';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CalendarRoutes),
        FormsModule
    ],
    declarations: [CalendarCopyComponent]
})

export class CalendarModule {}
