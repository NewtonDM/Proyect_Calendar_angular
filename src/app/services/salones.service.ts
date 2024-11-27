import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from '../../environments/environment';
//import { URL_API } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SalonesService {
  private apiUrl = URL_API + 'api/aulas';
  
  constructor(private http:HttpClient) { }

  getSalones() {    
    const params = new HttpParams().set('id', "1");
    return this.http.get<any>(this.apiUrl,{params});
  }
}
