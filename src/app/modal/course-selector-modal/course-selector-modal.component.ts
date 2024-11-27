import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-course-selector-modal',
  templateUrl: './course-selector-modal.component.html'
})
export class CourseSelectorModalComponent {
  displayedColumns: string[] = ['select', 'codigo', 'descripcion'];
  dataSource = new MatTableDataSource<Course>(COURSES_DATA);

  constructor(
    public dialogRef: MatDialogRef<CourseSelectorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Marcar cursos ya seleccionados
    this.dataSource.data.forEach(course => {
      course.selected = data.currentCourses.some((c: Course) => c.id === course.id);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelect(): void {
    const selected = this.dataSource.data.filter(course => course.selected);
    this.dialogRef.close(selected);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}

interface Course {
  id: number;
  codigo: string;
  descripcion: string;
  selected?: boolean;
}

const COURSES_DATA: Course[] = [
  { id: 1, codigo: 'MAT101', descripcion: 'Matemáticas Básicas' },
  { id: 2, codigo: 'FIS202', descripcion: 'Física Avanzada' },
  // Agrega más cursos aquí
];
