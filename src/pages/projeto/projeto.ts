import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service'
@IonicPage()
@Component({
  selector: 'page-projeto',
  templateUrl: 'projeto.html',
})
export class ProjetoPage {

  codigoProjeto: number;
  nomeProjeto: string;
  novo: boolean;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public ProjetosServiceProvider: ProjetosServiceProvider) {
    this.codigoProjeto = navParams.get("codigo");
    this.novo = navParams.get('novo');
    
        
    if(!this.novo){
        let projetos = ProjetosServiceProvider.getProjetos();
        
        for(let i=0;i<projetos.length;i++){
          if(projetos[i].codigo==this.codigoProjeto){
              this.nomeProjeto = projetos[i].nome.toString();
              break;
          }
        }
      }
  }

  alterar(){
    this.ProjetosServiceProvider.editProjeto(this.codigoProjeto,this.nomeProjeto);
    this.navCtrl.pop();
  }
  excluir(){
    this.ProjetosServiceProvider.deleteProjeto(this.codigoProjeto);
    this.navCtrl.pop();    
  }

  incluir(){
    this.ProjetosServiceProvider.addProjeto(this.nomeProjeto);
    this.navCtrl.pop();  
  }

}
