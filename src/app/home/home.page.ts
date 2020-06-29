import { Component } from '@angular/core';
import { Tarefa } from './lista-tarefas.modules';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  itemLista: string;
  tarefas: Tarefa[]=[];
  tarefa: Tarefa={itemLista:""};

  constructor() {}
  adicionar() {
    this.tarefas.push(this.tarefa);
    this.tarefa={itemLista:""};
  }

  limpar() {
    this.itemLista = '';
  }
  populaLista(palavra, lista){
    lista.push(palavra,lista);      
    return lista;
  }
  mudaCor(tarefa: Tarefa){
    tarefa.concluido = true;
  }

}
