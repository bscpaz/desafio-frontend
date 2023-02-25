import { Component, OnInit } from '@angular/core';

import { DesafioService } from '../desafio.service';
import { Desafio } from '../desafio/desafio';

@Component({
  selector: 'app-desafio-list',
  templateUrl: './desafio-list.component.html',
  styleUrls: ['./desafio-list.component.css']
})
export class DesafioListComponent implements OnInit {

  desafios: Desafio[] = [];

  constructor(private desafioService: DesafioService) {

  }

  ngOnInit(): void {
    this.desafioService.searchByPergunta("syra")
      .subscribe(dados => {
        this.desafios = dados;
      });
    console.log(this.desafios);
  }
}
