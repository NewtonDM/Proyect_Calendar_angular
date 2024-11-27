import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CourseSelectorModalComponent } from '../course-selector-modal/course-selector-modal.component';

@Component({
  selector: 'app-course-table-modal',
  templateUrl: './course-table-modal.component.html',
  styleUrls: ['./course-table-modal.component.css']
})
export class CourseTableModalComponent {
  selectedCourses: Course[] = [];  // Cursos seleccionados
  displayedColumns: string[] = ['id', 'codigo', 'descripcion', 'horaSem'];

  constructor(
    public currentDialogRef: MatDialogRef<CourseTableModalComponent>,
    public dialog: MatDialog) {}

  // Abrir el modal de selección de cursos
  openCourseSelector(): void {
    const dialogRef = this.dialog.open(CourseSelectorModalComponent, {
      width: '600px',
      data: { currentCourses: this.selectedCourses }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedCourses = result;
      }
    });
  }

  saveCourses(): void {
    this.currentDialogRef.close(this.selectedCourses); 
  }

  // Limpiar la selección de cursos
  clearSelection(): void {
    this.selectedCourses = [];
    this.currentDialogRef.close();
  }
}

// Interfaz para los datos de curso
interface Course {
  id: number;
  codigo: string;
  descripcion: string;
  horaSemanal: number;
}
