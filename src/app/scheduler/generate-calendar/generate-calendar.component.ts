import { Component, OnInit } from "@angular/core";
import swal from "sweetalert2";
import PerfectScrollbar from "perfect-scrollbar";


declare const $: any;

@Component({
  selector: "app-calendar-cmp",
  templateUrl: "generate-calendar.component.html",
  styleUrls: ["generate-calendar.component.scss"],
})
export class GenerateCalendarComponent implements OnInit {
  scheduleData = {
    // salones -codigo
    lbeAulas: [
      { Id: 1, Codigo: "S01", Capacidad: 60, isLaboratorio: 0, Estado: 1 },
      { Id: 2, Codigo: "S02", Capacidad: 60, isLaboratorio: 0, Estado: 1 },
      { Id: 3, Codigo: "S05", Capacidad: 60, isLaboratorio: 1, Estado: 1 },
    ],
    lbeProfesores: [
      {
        Id: 1,
        Nombre: "Profesor 1",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 2,
        Nombre: "Profesor 2",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 3,
        Nombre: "Profesor 3",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 4,
        Nombre: "Profesor 4",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 5,
        Nombre: "Profesor 5",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 6,
        Nombre: "Profesor 6",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 7,
        Nombre: "Profesor 7",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 8,
        Nombre: "Profesor 8",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 9,
        Nombre: "Profesor 9",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 10,
        Nombre: "Profesor 10",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 11,
        Nombre: "Profesor 11",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 12,
        Nombre: "Profesor 12",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 13,
        Nombre: "Profesor 13",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 14,
        Nombre: "Profesor 14",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 15,
        Nombre: "Profesor 15",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 16,
        Nombre: "Profesor 16",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 17,
        Nombre: "Profesor 17",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 18,
        Nombre: "Profesor 18",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 19,
        Nombre: "Profesor 19",
        HoraSem: 3,
        Estado: 1,
      },
      {
        Id: 20,
        Nombre: "Profesor 20",
        HoraSem: 3,
        Estado: 1,
      },
      // Más profesores...
    ],
    lbeCursos: [
      {
        Id: 1,
        Codigo: "AP122",
        Descripcion: "ORGANIZACI\u00D3N Y DIRECCI\u00D3N DE EMPRESAS",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 2,
        Codigo: "CE82",
        Descripcion: "MATEM\u00C1TICA B\u00C1SICA",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 3,
        Codigo: "HE59",
        Descripcion: "ESTRATEGIAS DE REDACCI\u00D3N",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 4,
        Codigo: "IS274",
        Descripcion: "FUNDAMENTOS DE PROGRAMACI\u00D3N 1",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 5,
        Codigo: "IS277",
        Descripcion: "ARQ. DE COMPUTADORAS Y SIST. OPERATIVOS",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 6,
        Codigo: "CE84",
        Descripcion: "C\u00C1LCULO 1",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 7,
        Codigo: "HE60",
        Descripcion: "ESTRATEGIAS DE COMUNICACI\u00D3N",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 8,
        Codigo: "IS208",
        Descripcion: "DISE\u00D1O DE BASE DE DATOS",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 9,
        Codigo: "IS275",
        Descripcion: "FUNDAMENTOS DE PROGRAMACI\u00D3N 2",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 10,
        Codigo: "IS278",
        Descripcion: "REDES Y COMUNICACI\u00D3N DE DATOS I",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 11,
        Codigo: "CE85",
        Descripcion: "C\u00C1LCULO 2",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 12,
        Codigo: "CE88",
        Descripcion: "F\u00CDSICA 1",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 1,
      },
      {
        Id: 13,
        Codigo: "HE61",
        Descripcion: "\u00C9TICA Y CIUDADAN\u00CDA",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 14,
        Codigo: "IS207",
        Descripcion: "ESTRUCTURA DE DATOS Y ALGORITMOS",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 15,
        Codigo: "IS212",
        Descripcion: "IMPLEMENTACI\u00D3N DE BASE DE DATOS",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 16,
        Codigo: "CE90",
        Descripcion: "F\u00CDSICA 2",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 1,
      },
      {
        Id: 17,
        Codigo: "CE91",
        Descripcion: "MATEM\u00C1TICA DISCRETA",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 18,
        Codigo: "IS255",
        Descripcion: "INGENIER\u00CDA DE REQUERIMIENTOS",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 19,
        Codigo: "IS282",
        Descripcion: "DISE\u00D1O Y TECNOLOG\u00CDAS UX",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 20,
        Codigo: "CE143",
        Descripcion: "MATEM\u00C1TICA COMPUTACIONAL",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 21,
        Codigo: "CP37",
        Descripcion: "COSTEO DE OPERACIONES",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 22,
        Codigo: "IS211",
        Descripcion: "DESARROLLO PARA ENTORNO WEB",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 23,
        Codigo: "IS254",
        Descripcion: "DISE\u00D1O DE PROCESOS",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 24,
        Codigo: "IS279",
        Descripcion: "REDES Y COMUNICACI\u00D3N DE DATOS II",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 25,
        Codigo: "CE86",
        Descripcion: "ESTAD\u00CDSTICA APLICADA 1",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 26,
        Codigo: "IS276",
        Descripcion: "PLATAFORMA M\u00D3VILES Y AN\u00C1LISIS CLOUD",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 27,
        Codigo: "IS283",
        Descripcion: "DESARROLLO \u00C1GIL",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 28,
        Codigo: "IS284",
        Descripcion: "FORMULACI\u00D3N Y EVALUACI\u00D3N DE PROYECTOS",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 29,
        Codigo: "IS221",
        Descripcion: "GERENCIA DE PROYECTOS",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 30,
        Codigo: "IS281",
        Descripcion: "ANAL\u00CDTICA DE DATOS Y SISTEMAS PREDICTIVOS",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
      {
        Id: 31,
        Codigo: "IS309",
        Descripcion: "ARQUITECTURA EMPRESARIAL",
        Estado: 1,
        HorasSem: 1,
        reqLaboratorio: 0,
      },
    ],
    lbeDias: [
      {
        Id: 1,
        Nombre: "Lunes",
        NombreCorto: "Lun",
        Fecha: "2024-11-25",
        Estado: 1,
      },
      {
        Id: 2,
        Nombre: "Martes",
        NombreCorto: "Mar",
        Fecha: "2024-11-26",
        Estado: 1,
      },
      {
        Id: 3,
        Nombre: "Miércoles",
        NombreCorto: "Mie",
        Fecha: "2024-11-27",
        Estado: 1,
      },
      {
        Id: 4,
        Nombre: "Jueves",
        NombreCorto: "Jue",
        Fecha: "2024-11-28",
        Estado: 1,
      },
      {
        Id: 5,
        Nombre: "Viernes",
        Fecha: "2024-11-29",
        NombreCorto: "Vie",
        Estado: 1,
      },
    ],
    lbePeriodos: [
      {
        Id: 1,
        Hora: 9,
        Estado: 1,
      },
      {
        Id: 2,
        Hora: 10,
        Estado: 1,
      },
      {
        Id: 3,
        Hora: 11,
        Estado: 1,
      },
      {
        Id: 4,
        Hora: 12,
        Estado: 1,
      },
      {
        Id: 5,
        Hora: 13,
        Estado: 1,
      },
    ],
    lbeProfesorCurso: [
      {
        IdProfesor: 1,
        IdCurso: 2,
      },
      {
        IdProfesor: 1,
        IdCurso: 6,
      },
      {
        IdProfesor: 1,
        IdCurso: 11,
      },
      {
        IdProfesor: 2,
        IdCurso: 12,
      },
      {
        IdProfesor: 2,
        IdCurso: 16,
      },
      {
        IdProfesor: 2,
        IdCurso: 31,
      },
      {
        IdProfesor: 3,
        IdCurso: 1,
      },
      {
        IdProfesor: 3,
        IdCurso: 5,
      },
      {
        IdProfesor: 3,
        IdCurso: 3,
      },
      {
        IdProfesor: 4,
        IdCurso: 27,
      },
      {
        IdProfesor: 4,
        IdCurso: 8,
      },
      {
        IdProfesor: 4,
        IdCurso: 9,
      },
      {
        IdProfesor: 10,
        IdCurso: 17,
      },
      {
        IdProfesor: 10,
        IdCurso: 13,
      },
      {
        IdProfesor: 10,
        IdCurso: 18,
      },
      {
        IdProfesor: 11,
        IdCurso: 22,
      },
      {
        IdProfesor: 11,
        IdCurso: 30,
      },
      {
        IdProfesor: 11,
        IdCurso: 29,
      },
      {
        IdProfesor: 13,
        IdCurso: 7,
      },
      {
        IdProfesor: 13,
        IdCurso: 15,
      },
      {
        IdProfesor: 13,
        IdCurso: 26,
      },
      {
        IdProfesor: 19,
        IdCurso: 10,
      },
      {
        IdProfesor: 19,
        IdCurso: 24,
      },
      {
        IdProfesor: 19,
        IdCurso: 25,
      },
      {
        IdProfesor: 20,
        IdCurso: 21,
      },
      {
        IdProfesor: 20,
        IdCurso: 28,
      },
      {
        IdProfesor: 20,
        IdCurso: 23,
      },
      {
        IdProfesor: 5,
        IdCurso: 4,
      },
      {
        IdProfesor: 5,
        IdCurso: 14,
      },
      {
        IdProfesor: 5,
        IdCurso: 19,
      },
    ],
    lbeProfesorPeriodo: [
      {
        IdProfesor: 1,
        IdDia: 1,
        IdPeriodo: 1,
      },
      {
        IdProfesor: 1,
        IdDia: 3,
        IdPeriodo: 5,
      },
      {
        IdProfesor: 1,
        IdDia: 4,
        IdPeriodo: 1,
      },
      {
        IdProfesor: 1,
        IdDia: 5,
        IdPeriodo: 1,
      },
      {
        IdProfesor: 2,
        IdDia: 1,
        IdPeriodo: 3,
      },
      {
        IdProfesor: 2,
        IdDia: 2,
        IdPeriodo: 3,
      },
    ],
  };
  editable = true;
  updatedEvents = [];
  viewDate: Date = new Date();

  data = [
    { id: 1, dia: 1, hora: 8, profesor: 1, curso: 1, salon: 1, activo: 1 },  // Lunes 8:00 - 11:00
    { id: 2, dia: 1, hora: 14, profesor: 2, curso: 2, salon: 2, activo: 1 }, // Lunes 14:00 - 17:00
    { id: 3, dia: 2, hora: 10, profesor: 3, curso: 3, salon: 3, activo: 1 }, // Martes 10:00 - 13:00
    { id: 4, dia: 2, hora: 16, profesor: 4, curso: 4, salon: 1, activo: 1 }, // Martes 16:00 - 19:00
    { id: 5, dia: 3, hora: 9, profesor: 5, curso: 5, salon: 2, activo: 1 },  // Miércoles 9:00 - 12:00
    { id: 6, dia: 3, hora: 13, profesor: 6, curso: 6, salon: 3, activo: 1 }, // Miércoles 13:00 - 16:00
    { id: 7, dia: 4, hora: 11, profesor: 7, curso: 7, salon: 1, activo: 1 }, // Jueves 11:00 - 14:00
    { id: 8, dia: 4, hora: 17, profesor: 1, curso: 1, salon: 2, activo: 1 }, // Jueves 17:00 - 20:00
    { id: 9, dia: 5, hora: 8, profesor: 2, curso: 2, salon: 3, activo: 1 },  // Viernes 8:00 - 11:00
    { id: 10, dia: 5, hora: 15, profesor: 3, curso: 3, salon: 1, activo: 1 },// Viernes 15:00 - 18:00
    { id: 11, dia: 6, hora: 10, profesor: 4, curso: 4, salon: 2, activo: 1 },// Sábado 10:00 - 13:00
    { id: 12, dia: 6, hora: 14, profesor: 5, curso: 5, salon: 3, activo: 1 },// Sábado 14:00 - 17:00
    { id: 13, dia: 7, hora: 9, profesor: 6, curso: 6, salon: 1, activo: 1 }, // Domingo 9:00 - 12:00
    { id: 14, dia: 7, hora: 13, profesor: 7, curso: 7, salon: 2, activo: 1 },// Domingo 13:00 - 16:00
  ];

  ngOnInit() {
   //  this.renderCalendarForSalon(1);
  }

  renderCalendarForSalon(salonId: number) {
    const $calendar = $("#fullCalendar");
    const today = new Date();

    const salon = this.scheduleData.lbeAulas.find(
      (a: any) => a.Id === salonId
    );
    const salonNombre = salon ? salon.Codigo : "Unknown Salon";

    const events = this.processScheduleData(
      this.scheduleData,
      this.data,
      salonId
    );

    if ($calendar.data('fullCalendar')) {
      $calendar.fullCalendar('destroy');
    }

    if ($calendar.length) {
      $calendar.fullCalendar({
        timeZone: 'local',
        viewRender: function (view: any, element: any) {
          if (view.name !== "month") {
            const elem = $(element).find(".fc-scroller")[0];
            new PerfectScrollbar(elem);
          }
        },
        header: {
          left: "prev,next today",
          center: salonNombre,
          right: "agendaWeek",
        },
        defaultView: "agendaWeek",
        defaultDate: today,
        selectable: true,
        selectHelper: true,
        views: {
          month: { // name of view
              titleFormat: 'MMMM YYYY'
              // other view-specific options here
          },
          week: {
              titleFormat: ' MMMM D YYYY'
          },
          day: {
              titleFormat: 'D MMM, YYYY'
          }
        },

        select: function(start: any, end: any) {

            // on select we show the Sweet Alert modal with an input
            swal.fire({
                title: 'Create an Event',
                html: '<div class="form-group">' +
                        '<input class="form-control" placeholder="Event Title" id="input-field">' +
                    '</div>',
                showCancelButton: true,
                customClass:{
                  confirmButton: 'btn btn-success',
                  cancelButton: 'btn btn-danger',
                },
                buttonsStyling: false
            }).then(function(result: any) {

                let eventData;
                const event_title = $('#input-field').val();

                if (event_title) {
                    eventData = {
                        title: event_title,
                        start: start,
                        end: end
                    };
                    $calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
                }

                $calendar.fullCalendar('unselect');

            });
        },
        editable: !this.editable, // Controla si es editable
        eventLimit: true,
        events: events,
        eventDrop: this.updateEvent.bind(this), // Almacena cambios al mover eventos
        eventResize: this.updateEvent.bind(this),
        debug: true
      });
    }
    
  }
  processScheduleData(scheduleData: any, inputData: any, salonId: number) {
    const events = [];
    const datafilter = inputData
    .filter((entry: any) => entry.salon === salonId);
    for (let i = 0; i < datafilter.length; i++) {
      const entry = datafilter[i];
      const profesor = scheduleData.lbeProfesores.find(
        (p: any) => p.Id === entry.profesor
      );
      const curso = scheduleData.lbeCursos.find(
        (c: any) => c.Id === entry.curso
      );
      const dia = scheduleData.lbeDias.find((d: any) => d.Id === entry.dia);
      const aula = scheduleData.lbeAulas.find(
        (a: any) => a.Id === entry.salon
      );

      if (profesor && curso && dia) {
        const [year, month, day] = dia.Fecha.split("-").map(Number);
        const startDate = new Date(year, month - 1, day, entry.hora);
        const endDate = new Date(startDate);
        endDate.setHours(startDate.getHours() + 3);
        console.log("Start:", startDate.toISOString(), "End:", endDate.toISOString());

        events.push({
          title:  `${entry.id}|${curso.Codigo} - ${profesor.Nombre} (${aula.Codigo})`,
          start: startDate,
          end: endDate,
          allDay: false,
          className: aula.isLaboratorio ? "event-lab" : "event-regular",
          extendedProps: { entryId: entry.id },
        });
      }
    }

    return events;
  }

  updateEvent(event: any) {
    const updatedEvent = {
      title: event.title,
      start: event.start.format(),
      end: event.end.format(),
      id: event.extendedProps?.entryId, // Asegúrate de que 'entryId' exista
    };
  
    if (!updatedEvent.id) {
      console.error("Error: event ID is missing!", updatedEvent);
      return;
    }
  
    const existingEventIndex = this.updatedEvents.findIndex(
      (e) => e.id === updatedEvent.id
    );
  
    if (existingEventIndex > -1) {
      this.updatedEvents[existingEventIndex] = updatedEvent;
    } else {
      this.updatedEvents.push(updatedEvent);
    }
  
    console.log("Updated events:", this.updatedEvents);
  }
}
