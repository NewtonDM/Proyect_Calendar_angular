import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = URL_API + 'api/registro';

  constructor(private http:HttpClient) { }

  getRegistrosBySede() {    
    const params = new HttpParams().set('idSede', "1");
    return this.http.get<any>(this.apiUrl + '/sede',{params});
  }
}
