import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CourseSelectorModalComponent } from '../course-selector-modal/course-selector-modal.component';
import { CursosService } from 'src/app/services/cursos.service';
import { Course } from 'src/app/interfaces/sistema';

@Component({
  selector: 'app-course-table-modal',
  templateUrl: './course-table-modal.component.html',
  styleUrls: ['./course-table-modal.component.css']
})
export class CourseTableModalComponent {
  selectedCourses: Course[] = [];  // Cursos seleccionados
  displayedColumns: string[] = ['id', 'codigo', 'descripcion', 'horaSem'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,    
    public currentDialogRef: MatDialogRef<CourseTableModalComponent>,
    public dialog: MatDialog,
    private cursoService : CursosService) {
        let idProfesor = data.profesorId; 
        this.cargarCursosByProfesor(idProfesor); 
    }

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

  cargarCursosByProfesor(idProfesor){            
    this.cursoService.getCursosByProfesor(idProfesor).subscribe({        
      next: (response) => {          
        if (response.issuccess) {                       
          this.selectedCourses = response.data;   
        } else{
          //this.dataSource.data = [];
        }
      }, 
      error: (err) => {          
      }
    });
  }
}