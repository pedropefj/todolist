import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TarefasServiceProvider {

  tarefas = [
    {codigo: 1,projeto: 1, proprietario: 1,descricao: 'Elaborar primeira prova', data: new Date(2018,4,20),prioridade: 1},
    {codigo: 2,projeto: 1, proprietario: 2,descricao: 'Fechar diário', data: new Date(2018,4,15),prioridade: 2},
    {codigo: 3,projeto: 2, proprietario: 3,descricao: 'Gravar video de apresentação', data: new Date(2018,11,1),prioridade: 1},
    {codigo: 4,projeto: 3, proprietario: 4,descricao: 'Planejar campanha', data: new Date(2018,11,30),prioridade: 3}
  ];
  ultimoCodigo = 4;

  getTarefas():any[]{
    return this.tarefas; 
  }

  editTarefa(codigo,projeto,descricao,data,prioridade,proprietario){
    for(let i = 0;i<this.tarefas.length;i++){
      if(this.tarefas[i].codigo==codigo){
        this.tarefas[i].projeto = projeto;
        this.tarefas[i].descricao = descricao;
        this.tarefas[i].data = data;
        this.tarefas[i].prioridade = prioridade;
        this.tarefas[i].proprietario = proprietario;
        break;
      }
    }
  }
  addTarefa(projeto,descricao,data,prioridade,proprietario){

    this.ultimoCodigo ++;
    this.tarefas.push({codigo:this.ultimoCodigo,projeto: projeto,descricao: descricao,data,prioridade:prioridade,proprietario: proprietario});    
  }
  deleteTarefa(c){
    let codigo = parseInt(c);
    for(let i = 0;i<this.tarefas.length;i++){
      if(this.tarefas[i].codigo==codigo){
        this.tarefas.splice(i,1);
        break;
      }
    }
  }
}
