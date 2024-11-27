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