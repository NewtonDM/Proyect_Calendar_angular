export interface Classroom {
    id: number;
    codigo: string;
    descripcion: string;
    capacidad: number;
    esLaboratorio: string;
    esActivo: string;
    
  }

  export interface Course {
    id: number;
    codigo: string;
    descripcion: string;
    horasSem: number;
    reqLab: string;
    esActivo: string;
  }

  export interface Teacher{
    id : number; 
    codigo : string;
    nombres : string; 
    numerodoc : string; 
    horaSem : number;
    esActivo : string; 
  }

  export interface Schedules {
    id : number; 
    fcreacion : string; 
    sede : string; 
    plan : string; 
    faprobacion :string; 
    estado : string; 
  }


  export interface Registro{
    id : number;
    fregistro : string;
    idsede : number; 
    sede : string;
    idplan : number; 
    periodo : string; 
    usuarioreg :string; 
    usuarioaprob : string; 
    usuariocierra : string;    
    fcierre : string; 
    faprobacion : string; 
    EstadoNombre : string; 
  }

  export interface Horario{
    id : number; 
    idregistro : number; 
    sede : string; 
    periodo : string; 
    numrd : number; 
    numrb : number; 
    fitness : number; 
    lbeGenes: HorarioDetalle[];
  }

  export interface HorarioDetalle {
    salon: string;
    dataCalendar: HorarioCalendario[];
  }

  export interface HorarioCalendario {  
    day: number;  
    startHour: number;  
    durationHour: number;  
    durationDay: number,
    title: string;
    description: string;
    horario: string;
    color: string; 
    index: number;
  }  

  // export interface HorarioDetalle{
  //   iddia : number; 
  //   idhoraini : number; 
  //   idprofesor : number; 
  //   profesor : string; 
  //   idcurso : number; 
  //   curso : string; 
  //   idaula : number; 
  //   aula : string; 

  //   salon: string; 
  // }

