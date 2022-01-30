import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {


  constructor(private http: HttpClient) { 
    
  }

  consultarDatosLibros(filtro:any){
    let urlConsultaDatos = 'https://api.itbook.store/1.0/search/' + filtro;
    return this.http.get(urlConsultaDatos);
  }

  consultarLibrosNuevos(){
    let urlConsultaLibros = 'https://api.itbook.store/1.0/new';
    return this.http.get(urlConsultaLibros);
  }

  consultarInformacionLibros(filtro: any){
    let urlConsultaInformacion = 'https://api.itbook.store/1.0/books/' + filtro;
    return this.http.get(urlConsultaInformacion);
  }

}
