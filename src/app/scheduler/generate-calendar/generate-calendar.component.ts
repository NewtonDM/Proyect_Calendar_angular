import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AulasMock } from "src/app/mockup/aulas.mock";
import { CursosMock } from "src/app/mockup/cursos.mock";
import { DiasMock } from "src/app/mockup/dias.mock";
import { PeriodosMock } from "src/app/mockup/periodos.mock";
import { ProfesorPeriodosMock } from "src/app/mockup/profesor-periodos.mock";
import { ProfesorCursosMock } from "src/app/mockup/profesores.cursos.mock";
import { ProfesoresMockup } from "src/app/mockup/profesores.mock";
import { DataCalendar } from "src/app/models/data-calendar.model";
import { DataGenes, ScheduleCalendarModel } from "src/app/models/scheduler-calendar.model";
import { SharedDataService } from "src/app/subjects/shared-data.service";

@Component({
  selector: "app-calendar-cmp",
  templateUrl: "generate-calendar.component.html",
  styleUrls: ["generate-calendar.component.scss"],
})
export class GenerateCalendarComponent implements OnInit {

  scheduleData = {
    // salones -codigo
    lbeAulas: [],
    lbeProfesores: [],
    lbeCursos: [],
    lbeDias: [],
    lbePeriodos: [],
    lbeProfesorCurso: [],
    lbeProfesorPeriodo: [],
  };
  editable = true;
  currentSalonIndex = 0;
  receivedElement: DataGenes[] = []

  constructor(private sharedDataService: SharedDataService, private router: Router){

    const data = this.sharedDataService.getData();
    if(data){
      this.receivedElement = data;
    } else {
      this.router.navigate(['scheduler/generate'])
    }
    this.scheduleData.lbeAulas = AulasMock.getData()
    this.scheduleData.lbeProfesores  = ProfesoresMockup.getData();
    this.scheduleData.lbeCursos = CursosMock.getData();
    this.scheduleData.lbeDias = DiasMock.getData();
    this.scheduleData.lbePeriodos = PeriodosMock.getData();
    this.scheduleData.lbeProfesorCurso = ProfesorCursosMock.getData();
    this.scheduleData.lbeProfesorPeriodo = ProfesorPeriodosMock.getData();
  }

  onEventUpdated(response: DataCalendar) {

    if (this.currentSalonIndex != -1 && this.receivedElement[this.currentSalonIndex]) {
      
      const index = this.receivedElement[this.currentSalonIndex].dataCalendar.findIndex((e: any) => e.index === response.index);
      this.receivedElement[this.currentSalonIndex].dataCalendar[index] = response;
      this.receivedElement = [...this.receivedElement];
    }
  }

  ngOnInit() {
    
  }

  get currentSalon() {
    if(!this.receivedElement || this.receivedElement.length === 0) return null;

    return this.receivedElement[this.currentSalonIndex];
  }

  nextSalon() {
    if (this.currentSalonIndex < this.receivedElement.length - 1) {
      this.currentSalonIndex++;
    } else {
      this.currentSalonIndex = 0;
    }
  }
  
  prevSalon() {
    if (this.currentSalonIndex > 0) {
      this.currentSalonIndex--;
    } else {
      this.currentSalonIndex = this.receivedElement.length - 1;
    }
  }
}
