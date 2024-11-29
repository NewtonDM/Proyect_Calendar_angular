import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../app.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { QueriesRoutes } from "./queries.routing";
import { ClassroomsComponent } from "./classrooms/classrooms.component";
import { CoursesComponent } from "./courses/courses.component";
import { TeachersComponent } from "./teachers/teachers.component";
import { CourseSelectorModalComponent } from "../modal/course-selector-modal/course-selector-modal.component";
import { CourseTableModalComponent } from "../modal/course-table-modal/course-table-modal.component";
import { ScheduleModalComponent } from "../modal/schedule-modal/schedule-modal.component";
import { ScheduleSelectionModalComponent } from "../modal/schedule-selection-modal/schedule-selection-modal.component";
import { SchedulesComponent } from './schedules/schedules.component';
import { RegistroModalComponent } from '../modal/registro-modal/registro-modal.component';

@NgModule({
    imports: [
        CommonModule,
    RouterModule.forChild(QueriesRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatFormFieldModule,
    ],
    declarations: [
        ClassroomsComponent,
        CoursesComponent,
        TeachersComponent,
        CourseTableModalComponent,
        CourseSelectorModalComponent,
        ScheduleModalComponent,
        ScheduleSelectionModalComponent,        
        SchedulesComponent,
        RegistroModalComponent
    ],
}) 

export class  QueriesModule{

}