import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CursosService {
  private apiUrl = URL_API + 'api/cursos';

  constructor(private http:HttpClient) { }

  getCursos() {        
    return this.http.get<any>(this.apiUrl);
  }

  getCursosByProfesor(idProfesor) {      
    let params = new HttpParams();
    params = params.append('idPlan', "1");
    params = params.append('idProfesor', idProfesor);
  

    return this.http.get<any>(this.apiUrl + '/profesor', {params});
  }
}




