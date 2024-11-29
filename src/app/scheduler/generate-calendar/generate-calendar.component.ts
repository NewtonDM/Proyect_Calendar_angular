import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HorarioDetalle } from "src/app/interfaces/sistema";
import { DataGenes, ScheduleCalendarModel } from "src/app/models/scheduler-calendar.model";
import { SharedDataService } from "src/app/subjects/shared-data.service";

@Component({
  selector: "app-calendar-cmp",
  templateUrl: "generate-calendar.component.html",
  styleUrls: ["generate-calendar.component.scss"],
})
export class GenerateCalendarComponent implements OnInit {


  // scheduleData = {
  //   // salones -codigo
  //   lbeAulas: [
  //     { Id: 1, Codigo: "S101", Capacidad: 60, isLaboratorio: 0, Estado: 1 },
  //     { Id: 2, Codigo: "S02", Capacidad: 60, isLaboratorio: 0, Estado: 1 },
  //     { Id: 3, Codigo: "S05", Capacidad: 60, isLaboratorio: 1, Estado: 1 },
  //   ],
  //   lbeProfesores: [
  //     {
  //       Id: 1,
  //       Nombre: "Profesor 1",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 2,
  //       Nombre: "Profesor 2",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 3,
  //       Nombre: "Profesor 3",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 4,
  //       Nombre: "Profesor 4",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 5,
  //       Nombre: "Profesor 5",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 6,
  //       Nombre: "Profesor 6",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 7,
  //       Nombre: "Profesor 7",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 8,
  //       Nombre: "Profesor 8",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 9,
  //       Nombre: "Profesor 9",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 10,
  //       Nombre: "Profesor 10",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 11,
  //       Nombre: "Profesor 11",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 12,
  //       Nombre: "Profesor 12",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 13,
  //       Nombre: "Profesor 13",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 14,
  //       Nombre: "Profesor 14",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 15,
  //       Nombre: "Profesor 15",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 16,
  //       Nombre: "Profesor 16",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 17,
  //       Nombre: "Profesor 17",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 18,
  //       Nombre: "Profesor 18",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 19,
  //       Nombre: "Profesor 19",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 20,
  //       Nombre: "Profesor 20",
  //       HoraSem: 3,
  //       Estado: 1,
  //     },
  //     // Más profesores...
  //   ],
  //   lbeCursos: [
  //     {
  //       Id: 1,
  //       Codigo: "AP122",
  //       Descripcion: "ORGANIZACI\u00D3N Y DIRECCI\u00D3N DE EMPRESAS",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 2,
  //       Codigo: "CE82",
  //       Descripcion: "MATEM\u00C1TICA B\u00C1SICA",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 3,
  //       Codigo: "HE59",
  //       Descripcion: "ESTRATEGIAS DE REDACCI\u00D3N",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 4,
  //       Codigo: "IS274",
  //       Descripcion: "FUNDAMENTOS DE PROGRAMACI\u00D3N 1",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 5,
  //       Codigo: "IS277",
  //       Descripcion: "ARQ. DE COMPUTADORAS Y SIST. OPERATIVOS",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 6,
  //       Codigo: "CE84",
  //       Descripcion: "C\u00C1LCULO 1",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 7,
  //       Codigo: "HE60",
  //       Descripcion: "ESTRATEGIAS DE COMUNICACI\u00D3N",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 8,
  //       Codigo: "IS208",
  //       Descripcion: "DISE\u00D1O DE BASE DE DATOS",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 9,
  //       Codigo: "IS275",
  //       Descripcion: "FUNDAMENTOS DE PROGRAMACI\u00D3N 2",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 10,
  //       Codigo: "IS278",
  //       Descripcion: "REDES Y COMUNICACI\u00D3N DE DATOS I",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 11,
  //       Codigo: "CE85",
  //       Descripcion: "C\u00C1LCULO 2",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 12,
  //       Codigo: "CE88",
  //       Descripcion: "F\u00CDSICA 1",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 1,
  //     },
  //     {
  //       Id: 13,
  //       Codigo: "HE61",
  //       Descripcion: "\u00C9TICA Y CIUDADAN\u00CDA",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 14,
  //       Codigo: "IS207",
  //       Descripcion: "ESTRUCTURA DE DATOS Y ALGORITMOS",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 15,
  //       Codigo: "IS212",
  //       Descripcion: "IMPLEMENTACI\u00D3N DE BASE DE DATOS",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 16,
  //       Codigo: "CE90",
  //       Descripcion: "F\u00CDSICA 2",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 1,
  //     },
  //     {
  //       Id: 17,
  //       Codigo: "CE91",
  //       Descripcion: "MATEM\u00C1TICA DISCRETA",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 18,
  //       Codigo: "IS255",
  //       Descripcion: "INGENIER\u00CDA DE REQUERIMIENTOS",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 19,
  //       Codigo: "IS282",
  //       Descripcion: "DISE\u00D1O Y TECNOLOG\u00CDAS UX",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 20,
  //       Codigo: "CE143",
  //       Descripcion: "MATEM\u00C1TICA COMPUTACIONAL",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 21,
  //       Codigo: "CP37",
  //       Descripcion: "COSTEO DE OPERACIONES",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 22,
  //       Codigo: "IS211",
  //       Descripcion: "DESARROLLO PARA ENTORNO WEB",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 23,
  //       Codigo: "IS254",
  //       Descripcion: "DISE\u00D1O DE PROCESOS",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 24,
  //       Codigo: "IS279",
  //       Descripcion: "REDES Y COMUNICACI\u00D3N DE DATOS II",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 25,
  //       Codigo: "CE86",
  //       Descripcion: "ESTAD\u00CDSTICA APLICADA 1",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 26,
  //       Codigo: "IS276",
  //       Descripcion: "PLATAFORMA M\u00D3VILES Y AN\u00C1LISIS CLOUD",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 27,
  //       Codigo: "IS283",
  //       Descripcion: "DESARROLLO \u00C1GIL",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 28,
  //       Codigo: "IS284",
  //       Descripcion: "FORMULACI\u00D3N Y EVALUACI\u00D3N DE PROYECTOS",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 29,
  //       Codigo: "IS221",
  //       Descripcion: "GERENCIA DE PROYECTOS",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 30,
  //       Codigo: "IS281",
  //       Descripcion: "ANAL\u00CDTICA DE DATOS Y SISTEMAS PREDICTIVOS",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //     {
  //       Id: 31,
  //       Codigo: "IS309",
  //       Descripcion: "ARQUITECTURA EMPRESARIAL",
  //       Estado: 1,
  //       HorasSem: 1,
  //       reqLaboratorio: 0,
  //     },
  //   ],
  //   lbeDias: [
  //     {
  //       Id: 1,
  //       Nombre: "Lunes",
  //       NombreCorto: "Lun",
  //       Fecha: "2024-11-25",
  //       Estado: 1,
  //     },
  //     {
  //       Id: 2,
  //       Nombre: "Martes",
  //       NombreCorto: "Mar",
  //       Fecha: "2024-11-26",
  //       Estado: 1,
  //     },
  //     {
  //       Id: 3,
  //       Nombre: "Miércoles",
  //       NombreCorto: "Mie",
  //       Fecha: "2024-11-27",
  //       Estado: 1,
  //     },
  //     {
  //       Id: 4,
  //       Nombre: "Jueves",
  //       NombreCorto: "Jue",
  //       Fecha: "2024-11-28",
  //       Estado: 1,
  //     },
  //     {
  //       Id: 5,
  //       Nombre: "Viernes",
  //       Fecha: "2024-11-29",
  //       NombreCorto: "Vie",
  //       Estado: 1,
  //     },
  //   ],
  //   lbePeriodos: [
  //     {
  //       Id: 1,
  //       Hora: 9,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 2,
  //       Hora: 10,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 3,
  //       Hora: 11,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 4,
  //       Hora: 12,
  //       Estado: 1,
  //     },
  //     {
  //       Id: 5,
  //       Hora: 13,
  //       Estado: 1,
  //     },
  //   ],
  //   lbeProfesorCurso: [
  //     {
  //       IdProfesor: 1,
  //       IdCurso: 2,
  //     },
  //     {
  //       IdProfesor: 1,
  //       IdCurso: 6,
  //     },
  //     {
  //       IdProfesor: 1,
  //       IdCurso: 11,
  //     },
  //     {
  //       IdProfesor: 2,
  //       IdCurso: 12,
  //     },
  //     {
  //       IdProfesor: 2,
  //       IdCurso: 16,
  //     },
  //     {
  //       IdProfesor: 2,
  //       IdCurso: 31,
  //     },
  //     {
  //       IdProfesor: 3,
  //       IdCurso: 1,
  //     },
  //     {
  //       IdProfesor: 3,
  //       IdCurso: 5,
  //     },
  //     {
  //       IdProfesor: 3,
  //       IdCurso: 3,
  //     },
  //     {
  //       IdProfesor: 4,
  //       IdCurso: 27,
  //     },
  //     {
  //       IdProfesor: 4,
  //       IdCurso: 8,
  //     },
  //     {
  //       IdProfesor: 4,
  //       IdCurso: 9,
  //     },
  //     {
  //       IdProfesor: 10,
  //       IdCurso: 17,
  //     },
  //     {
  //       IdProfesor: 10,
  //       IdCurso: 13,
  //     },
  //     {
  //       IdProfesor: 10,
  //       IdCurso: 18,
  //     },
  //     {
  //       IdProfesor: 11,
  //       IdCurso: 22,
  //     },
  //     {
  //       IdProfesor: 11,
  //       IdCurso: 30,
  //     },
  //     {
  //       IdProfesor: 11,
  //       IdCurso: 29,
  //     },
  //     {
  //       IdProfesor: 13,
  //       IdCurso: 7,
  //     },
  //     {
  //       IdProfesor: 13,
  //       IdCurso: 15,
  //     },
  //     {
  //       IdProfesor: 13,
  //       IdCurso: 26,
  //     },
  //     {
  //       IdProfesor: 19,
  //       IdCurso: 10,
  //     },
  //     {
  //       IdProfesor: 19,
  //       IdCurso: 24,
  //     },
  //     {
  //       IdProfesor: 19,
  //       IdCurso: 25,
  //     },
  //     {
  //       IdProfesor: 20,
  //       IdCurso: 21,
  //     },
  //     {
  //       IdProfesor: 20,
  //       IdCurso: 28,
  //     },
  //     {
  //       IdProfesor: 20,
  //       IdCurso: 23,
  //     },
  //     {
  //       IdProfesor: 5,
  //       IdCurso: 4,
  //     },
  //     {
  //       IdProfesor: 5,
  //       IdCurso: 14,
  //     },
  //     {
  //       IdProfesor: 5,
  //       IdCurso: 19,
  //     },
  //   ],
  //   lbeProfesorPeriodo: [
  //     {
  //       IdProfesor: 1,
  //       IdDia: 1,
  //       IdPeriodo: 1,
  //     },
  //     {
  //       IdProfesor: 1,
  //       IdDia: 3,
  //       IdPeriodo: 5,
  //     },
  //     {
  //       IdProfesor: 1,
  //       IdDia: 4,
  //       IdPeriodo: 1,
  //     },
  //     {
  //       IdProfesor: 1,
  //       IdDia: 5,
  //       IdPeriodo: 1,
  //     },
  //     {
  //       IdProfesor: 2,
  //       IdDia: 1,
  //       IdPeriodo: 3,
  //     },
  //     {
  //       IdProfesor: 2,
  //       IdDia: 2,
  //       IdPeriodo: 3,
  //     },
  //   ],
  // };

  editable = true;
  currentSalonIndex = 0;
  receivedElement: HorarioDetalle[] = []

  constructor(private sharedDataService: SharedDataService, private router: Router){
    const data = this.sharedDataService.getData();

    if(data){
      this.receivedElement = data;
    } else {
      this.router.navigate(['scheduler/generate'])
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




// import { Component, OnInit } from "@angular/core";
// import { Router } from "@angular/router";
// import { DataGenes, ScheduleCalendarModel } from "src/app/models/scheduler-calendar.model";
// import { SharedDataService } from "src/app/subjects/shared-data.service";

// @Component({
//   selector: "app-calendar-cmp",
//   templateUrl: "generate-calendar.component.html",
//   styleUrls: ["generate-calendar.component.scss"],
// })
// export class GenerateCalendarComponent implements OnInit {

  
//   scheduleData = {
//     // salones -codigo
//     lbeAulas: [
//       { Id: 1, Codigo: "S101", Capacidad: 60, isLaboratorio: 0, Estado: 1 },
//       { Id: 2, Codigo: "S02", Capacidad: 60, isLaboratorio: 0, Estado: 1 },
//       { Id: 3, Codigo: "S05", Capacidad: 60, isLaboratorio: 1, Estado: 1 },
//     ],
//     lbeProfesores: [
//       {
//         Id: 1,
//         Nombre: "Profesor 1",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 2,
//         Nombre: "Profesor 2",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 3,
//         Nombre: "Profesor 3",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 4,
//         Nombre: "Profesor 4",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 5,
//         Nombre: "Profesor 5",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 6,
//         Nombre: "Profesor 6",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 7,
//         Nombre: "Profesor 7",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 8,
//         Nombre: "Profesor 8",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 9,
//         Nombre: "Profesor 9",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 10,
//         Nombre: "Profesor 10",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 11,
//         Nombre: "Profesor 11",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 12,
//         Nombre: "Profesor 12",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 13,
//         Nombre: "Profesor 13",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 14,
//         Nombre: "Profesor 14",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 15,
//         Nombre: "Profesor 15",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 16,
//         Nombre: "Profesor 16",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 17,
//         Nombre: "Profesor 17",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 18,
//         Nombre: "Profesor 18",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 19,
//         Nombre: "Profesor 19",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       {
//         Id: 20,
//         Nombre: "Profesor 20",
//         HoraSem: 3,
//         Estado: 1,
//       },
//       // Más profesores...
//     ],
//     lbeCursos: [
//       {
//         Id: 1,
//         Codigo: "AP122",
//         Descripcion: "ORGANIZACI\u00D3N Y DIRECCI\u00D3N DE EMPRESAS",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 2,
//         Codigo: "CE82",
//         Descripcion: "MATEM\u00C1TICA B\u00C1SICA",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 3,
//         Codigo: "HE59",
//         Descripcion: "ESTRATEGIAS DE REDACCI\u00D3N",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 4,
//         Codigo: "IS274",
//         Descripcion: "FUNDAMENTOS DE PROGRAMACI\u00D3N 1",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 5,
//         Codigo: "IS277",
//         Descripcion: "ARQ. DE COMPUTADORAS Y SIST. OPERATIVOS",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 6,
//         Codigo: "CE84",
//         Descripcion: "C\u00C1LCULO 1",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 7,
//         Codigo: "HE60",
//         Descripcion: "ESTRATEGIAS DE COMUNICACI\u00D3N",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 8,
//         Codigo: "IS208",
//         Descripcion: "DISE\u00D1O DE BASE DE DATOS",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 9,
//         Codigo: "IS275",
//         Descripcion: "FUNDAMENTOS DE PROGRAMACI\u00D3N 2",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 10,
//         Codigo: "IS278",
//         Descripcion: "REDES Y COMUNICACI\u00D3N DE DATOS I",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 11,
//         Codigo: "CE85",
//         Descripcion: "C\u00C1LCULO 2",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 12,
//         Codigo: "CE88",
//         Descripcion: "F\u00CDSICA 1",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 1,
//       },
//       {
//         Id: 13,
//         Codigo: "HE61",
//         Descripcion: "\u00C9TICA Y CIUDADAN\u00CDA",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 14,
//         Codigo: "IS207",
//         Descripcion: "ESTRUCTURA DE DATOS Y ALGORITMOS",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 15,
//         Codigo: "IS212",
//         Descripcion: "IMPLEMENTACI\u00D3N DE BASE DE DATOS",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 16,
//         Codigo: "CE90",
//         Descripcion: "F\u00CDSICA 2",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 1,
//       },
//       {
//         Id: 17,
//         Codigo: "CE91",
//         Descripcion: "MATEM\u00C1TICA DISCRETA",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 18,
//         Codigo: "IS255",
//         Descripcion: "INGENIER\u00CDA DE REQUERIMIENTOS",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 19,
//         Codigo: "IS282",
//         Descripcion: "DISE\u00D1O Y TECNOLOG\u00CDAS UX",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 20,
//         Codigo: "CE143",
//         Descripcion: "MATEM\u00C1TICA COMPUTACIONAL",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 21,
//         Codigo: "CP37",
//         Descripcion: "COSTEO DE OPERACIONES",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 22,
//         Codigo: "IS211",
//         Descripcion: "DESARROLLO PARA ENTORNO WEB",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 23,
//         Codigo: "IS254",
//         Descripcion: "DISE\u00D1O DE PROCESOS",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 24,
//         Codigo: "IS279",
//         Descripcion: "REDES Y COMUNICACI\u00D3N DE DATOS II",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 25,
//         Codigo: "CE86",
//         Descripcion: "ESTAD\u00CDSTICA APLICADA 1",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 26,
//         Codigo: "IS276",
//         Descripcion: "PLATAFORMA M\u00D3VILES Y AN\u00C1LISIS CLOUD",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 27,
//         Codigo: "IS283",
//         Descripcion: "DESARROLLO \u00C1GIL",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 28,
//         Codigo: "IS284",
//         Descripcion: "FORMULACI\u00D3N Y EVALUACI\u00D3N DE PROYECTOS",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 29,
//         Codigo: "IS221",
//         Descripcion: "GERENCIA DE PROYECTOS",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 30,
//         Codigo: "IS281",
//         Descripcion: "ANAL\u00CDTICA DE DATOS Y SISTEMAS PREDICTIVOS",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//       {
//         Id: 31,
//         Codigo: "IS309",
//         Descripcion: "ARQUITECTURA EMPRESARIAL",
//         Estado: 1,
//         HorasSem: 1,
//         reqLaboratorio: 0,
//       },
//     ],
//     lbeDias: [
//       {
//         Id: 1,
//         Nombre: "Lunes",
//         NombreCorto: "Lun",
//         Fecha: "2024-11-25",
//         Estado: 1,
//       },
//       {
//         Id: 2,
//         Nombre: "Martes",
//         NombreCorto: "Mar",
//         Fecha: "2024-11-26",
//         Estado: 1,
//       },
//       {
//         Id: 3,
//         Nombre: "Miércoles",
//         NombreCorto: "Mie",
//         Fecha: "2024-11-27",
//         Estado: 1,
//       },
//       {
//         Id: 4,
//         Nombre: "Jueves",
//         NombreCorto: "Jue",
//         Fecha: "2024-11-28",
//         Estado: 1,
//       },
//       {
//         Id: 5,
//         Nombre: "Viernes",
//         Fecha: "2024-11-29",
//         NombreCorto: "Vie",
//         Estado: 1,
//       },
//     ],
//     lbePeriodos: [
//       {
//         Id: 1,
//         Hora: 9,
//         Estado: 1,
//       },
//       {
//         Id: 2,
//         Hora: 10,
//         Estado: 1,
//       },
//       {
//         Id: 3,
//         Hora: 11,
//         Estado: 1,
//       },
//       {
//         Id: 4,
//         Hora: 12,
//         Estado: 1,
//       },
//       {
//         Id: 5,
//         Hora: 13,
//         Estado: 1,
//       },
//     ],
//     lbeProfesorCurso: [
//       {
//         IdProfesor: 1,
//         IdCurso: 2,
//       },
//       {
//         IdProfesor: 1,
//         IdCurso: 6,
//       },
//       {
//         IdProfesor: 1,
//         IdCurso: 11,
//       },
//       {
//         IdProfesor: 2,
//         IdCurso: 12,
//       },
//       {
//         IdProfesor: 2,
//         IdCurso: 16,
//       },
//       {
//         IdProfesor: 2,
//         IdCurso: 31,
//       },
//       {
//         IdProfesor: 3,
//         IdCurso: 1,
//       },
//       {
//         IdProfesor: 3,
//         IdCurso: 5,
//       },
//       {
//         IdProfesor: 3,
//         IdCurso: 3,
//       },
//       {
//         IdProfesor: 4,
//         IdCurso: 27,
//       },
//       {
//         IdProfesor: 4,
//         IdCurso: 8,
//       },
//       {
//         IdProfesor: 4,
//         IdCurso: 9,
//       },
//       {
//         IdProfesor: 10,
//         IdCurso: 17,
//       },
//       {
//         IdProfesor: 10,
//         IdCurso: 13,
//       },
//       {
//         IdProfesor: 10,
//         IdCurso: 18,
//       },
//       {
//         IdProfesor: 11,
//         IdCurso: 22,
//       },
//       {
//         IdProfesor: 11,
//         IdCurso: 30,
//       },
//       {
//         IdProfesor: 11,
//         IdCurso: 29,
//       },
//       {
//         IdProfesor: 13,
//         IdCurso: 7,
//       },
//       {
//         IdProfesor: 13,
//         IdCurso: 15,
//       },
//       {
//         IdProfesor: 13,
//         IdCurso: 26,
//       },
//       {
//         IdProfesor: 19,
//         IdCurso: 10,
//       },
//       {
//         IdProfesor: 19,
//         IdCurso: 24,
//       },
//       {
//         IdProfesor: 19,
//         IdCurso: 25,
//       },
//       {
//         IdProfesor: 20,
//         IdCurso: 21,
//       },
//       {
//         IdProfesor: 20,
//         IdCurso: 28,
//       },
//       {
//         IdProfesor: 20,
//         IdCurso: 23,
//       },
//       {
//         IdProfesor: 5,
//         IdCurso: 4,
//       },
//       {
//         IdProfesor: 5,
//         IdCurso: 14,
//       },
//       {
//         IdProfesor: 5,
//         IdCurso: 19,
//       },
//     ],
//     lbeProfesorPeriodo: [
//       {
//         IdProfesor: 1,
//         IdDia: 1,
//         IdPeriodo: 1,
//       },
//       {
//         IdProfesor: 1,
//         IdDia: 3,
//         IdPeriodo: 5,
//       },
//       {
//         IdProfesor: 1,
//         IdDia: 4,
//         IdPeriodo: 1,
//       },
//       {
//         IdProfesor: 1,
//         IdDia: 5,
//         IdPeriodo: 1,
//       },
//       {
//         IdProfesor: 2,
//         IdDia: 1,
//         IdPeriodo: 3,
//       },
//       {
//         IdProfesor: 2,
//         IdDia: 2,
//         IdPeriodo: 3,
//       },
//     ],
//   };
//   editable = true;
//   currentSalonIndex = 0;
//   receivedElement: DataGenes[] = []

//   constructor(private sharedDataService: SharedDataService, private router: Router){
//     const data = this.sharedDataService.getData();
//     if(data){
//       this.receivedElement = data;
//     } else {
//       this.router.navigate(['scheduler/generate'])
//     }
//   }

//   ngOnInit() {
    
//   }

//   get currentSalon() {
//     if(!this.receivedElement || this.receivedElement.length === 0) return null;

//     return this.receivedElement[this.currentSalonIndex];
//   }

//   nextSalon() {
//     if (this.currentSalonIndex < this.receivedElement.length - 1) {
//       this.currentSalonIndex++;
//     } else {
//       this.currentSalonIndex = 0;
//     }
//   }
  
//   prevSalon() {
//     if (this.currentSalonIndex > 0) {
//       this.currentSalonIndex--;
//     } else {
//       this.currentSalonIndex = this.receivedElement.length - 1;
//     }
//   }
// }
