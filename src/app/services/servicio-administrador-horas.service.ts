import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Peticion } from '../modelos/Peticion';

@Injectable({
  providedIn: 'root'
})
export class ServicioAdministradorHorasService {

  private url: string = "http://localhost:9403/";
  constructor(public http: HttpClient) {

  }

  getIngresosArchivo(ruta: string): Observable<any> {
    return this.http.get(this.url + ruta);
  }

  postPeticion(ruta: string, parametros: Peticion): Observable<any> {
    let json = JSON.stringify(parametros);
    let params = json;
    let headers = new HttpHeaders({'Content-Type':'application/json;charset=UTF-8'});
    return this.http.post(this.url + ruta, params, { headers: headers });
  }
}
