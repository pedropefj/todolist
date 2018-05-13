import { UsuariosServiceProvider } from './../../providers/usuarios-service/usuarios-service';
import { Component} from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {ProjetosServiceProvider} from '../../providers/projetos-service/projetos-service';
import {TarefasServiceProvider} from '../../providers/tarefas-service/tarefas-service';

@Component({
  selector: 'page-tarefa',
  templateUrl: 'tarefa.html',
})
export class TarefaPage {

projetos: any[];
usuarios: any[];
novo: boolean;

codigoTarefa: number;
codigoProjeto: number;
descricao: string;
prioridade: number;
codigoProprietario: number;
data: string;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public TarefasServiceProvider: TarefasServiceProvider,
    public ProjetosServiceProvider: ProjetosServiceProvider,
    public UsuariosServiceProvider: UsuariosServiceProvider) {
        this.projetos = ProjetosServiceProvider.getProjetos();
        this.usuarios = UsuariosServiceProvider.getUsuarios();
        this.novo = this.navParams.get('novo');
        this.codigoTarefa = this.navParams.get('codigo');

        if(!this.novo){
            let tarefas = TarefasServiceProvider.getTarefas();
            for(let i=0;i<tarefas.length;i++){
              if(tarefas[i].codigo == this.codigoTarefa){
                this.codigoProjeto =tarefas[i].projeto;
                this.descricao = tarefas[i].descricao;
                this.prioridade = tarefas[i].prioridade;
                this.codigoProprietario = tarefas[i].proprietario;
                let d = tarefas[i].data;
                this.data = d.getFullYear()+"-"+("0"+(d.getMonth()+1)).substr(-2,2)+"-"
                +("0"+(d.getDate())).substr(-2,2);
              }
            }
        }else{
          this.codigoProjeto =this.projetos[0].codigo;
          this.descricao = "";
          this.prioridade = 3;
          this.codigoProprietario = this.usuarios[0].codigo;
          let d = new Date();
          this.data = d.getFullYear()+"-"+("0"+(d.getMonth()+1)).substr(-2,2)+"-"
          +("0"+(d.getDate())).substr(-2,2);
        }
}

alterar(){
  let d = new Date(parseInt(this.data.substr(0,4)),
                    parseInt(this.data.substr(5,2))-1,
                    parseInt(this.data.substr(8,2)));
  this.TarefasServiceProvider.editTarefa(this.codigoTarefa,this.codigoProjeto,this.descricao,d,this.prioridade,this.codigoProprietario);
  this.navCtrl.pop();
}
excluir(){
  this.TarefasServiceProvider.deleteTarefa(this.codigoTarefa);
  this.navCtrl.pop();    
}

incluir(){
  
  let d = new Date(parseInt(this.data.substr(0,4)),
  parseInt(this.data.substr(5,2)),
  parseInt(this.data.substr(8,2)));

  this.TarefasServiceProvider.addTarefa(this.codigoProjeto,this.descricao,d,this.prioridade,this.codigoProprietario);
  this.navCtrl.pop();  
}

}


