import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import{ProjetosServiceProvider} from'../../providers/projetos-service/projetos-service'
import{ ProjetoPage } from'../projeto/projeto'
@IonicPage()
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
})
export class ProjetosPage {

  projetos: any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public projetosServiceProvider: ProjetosServiceProvider) {
                    this.projetos = projetosServiceProvider.getProjetos();
              }

  novoProjeto(){
    this.navCtrl.push(ProjetoPage,{codigo: 0,novo:true});
  }

  selecionaProjeto(c){
    let cn = parseInt(c);
    this.navCtrl.push(ProjetoPage,{codigo: cn,novo: false});

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjetosPage');
  }

}
