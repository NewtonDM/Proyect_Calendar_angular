import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  private apiUrl = URL_API + 'api/profesores';

  constructor(private http:HttpClient) { }

  getProfesores() {    
    const params = new HttpParams().set('id', "1");
    return this.http.get<any>(this.apiUrl,{params});
  }
}
