import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { DesafioService } from '../desafio.service';
import { Desafio } from '../desafio/desafio';

@Component({
  selector: 'app-desafio-list',
  templateUrl: './desafio-list.component.html'
})
export class DesafioListComponent implements OnInit {

  filter: string = '';
  desafios: Desafio[] = [];
  debounce: Subject<string> = new Subject<string>();

  constructor(private desafioService: DesafioService) {  }

  ngOnInit(): void {
    this.debounce.subscribe(filter => this.filter = filter);
  }

  search(): void {
    this.desafioService.searchByPergunta(this.filter)
      .subscribe(dados => {
        this.desafios = dados;
      });
  }
}
