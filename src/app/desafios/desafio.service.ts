import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Desafio } from './desafio/desafio';

const API = "http://localhost:8082/"

@Injectable({
  providedIn: 'root'
})
export class DesafioService {

  constructor(private http: HttpClient) { 

  }

  searchByPergunta(pergunta: string) {
    return this.http.get<Desafio[]>(API + "desafios/" + pergunta);
  }
}
