import { UsuariosServiceProvider } from './../../providers/usuarios-service/usuarios-service';
import { Component,Pipe,PipeTransform } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import{ TarefasServiceProvider} from '../../providers/tarefas-service/tarefas-service';
import{ ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';
import{ TarefaPage } from '../tarefa/tarefa';
import{Filtro} from '../tarefas/filtro'
@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html',
})
export class TarefasPage {

  tarefas: any[];
  projetos: any[];
  usuarios: any[];
  filtroTarefas: {}={};
  //rootPage: null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public TarefasServiceProvider: TarefasServiceProvider,
              public ProjetosServiceProvider: ProjetosServiceProvider,
              public UsuariosSerivceProvider: UsuariosServiceProvider,
              public MenuController: MenuController) {
                  this.projetos = ProjetosServiceProvider.getProjetos();
                  this.tarefas = TarefasServiceProvider.getTarefas();
                  this.usuarios = UsuariosSerivceProvider.getUsuarios();
  }

  nomeProjeto(c):string{
    let codigo = parseInt(c);
    for(let i=0;i<this.projetos.length;i++){
      if(this.projetos[i].codigo==codigo){
        return this.projetos[i].nome;
      }
    }
    return 'Codigo invalido!';
  }
  nomeProprietario(c):string{
    let codigo = parseInt(c);
    for(let i=0;i<this.usuarios.length;i++){
      if(this.usuarios[i].codigo==codigo){
        return this.usuarios[i].nome;
      }
    }
    return 'Codigo invalido!';
  }
  selecionarTarefa(c){
    let t:number = parseInt(c);
    this.navCtrl.push(TarefaPage,{codigo:t,novo:false});
  }
  novaTarefa(){
    this.navCtrl.push(TarefaPage,{codigo:0,novo:true});
    
  }

  filtroProjeto(c){
    this.filtroTarefas = {projeto: c};
    this.MenuController.close();
  }
  filtroProprietario(c){
    this.filtroTarefas = {proprietario: c};
    this.MenuController.close();
  }


  limpaFiltros(){
    this.filtroTarefas={};
    this.MenuController.close();
  }

  filtroDias(d){
    this.filtroTarefas = {dias: d};
    this.MenuController.close();
  }

}

