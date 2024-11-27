import { Routes } from "@angular/router";
import { ClassroomsComponent } from "./classrooms/classrooms.component";
import { TeachersComponent } from "./teachers/teachers.component";
import { CoursesComponent } from './courses/courses.component';

export const QueriesRoutes: Routes= [
    {
        path: '',
        children: [ {
          path: 'classrooms',
          component: ClassroomsComponent
      }]},
      {
        path: '',
        children: [ {
          path: 'teachers',
          component: TeachersComponent
        }]
      },
      {
        path: '',
        children: [ {
          path: 'courses',
          component: CoursesComponent
        }]
      }
]