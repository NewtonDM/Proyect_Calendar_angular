import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  private apiUrl = URL_API + 'api/horarios';

  constructor(private http:HttpClient) { }

  getHorarios(id) {    
    const params = new HttpParams().set('idRegistro', id);
    return this.http.get<any>(this.apiUrl,{params});
  }

  getHorarioDetalle() {    
    const params = new HttpParams().set('idHorario', "22");
    return this.http.get<any>(this.apiUrl + '/detalle',{params});
  }
}
