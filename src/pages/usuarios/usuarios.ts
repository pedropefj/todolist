import { UsuarioPage } from './../usuario/usuario';
import { UsuariosServiceProvider } from './../../providers/usuarios-service/usuarios-service';
import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

  usuarios: any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public usuariosServiceProvider: UsuariosServiceProvider) {
                    this.usuarios = usuariosServiceProvider.getUsuarios();
              }

  novoUsuario(){
    this.navCtrl.push(UsuarioPage,{codigo: 0,novo:true});
  }

  selecionaUsuario(c){
    let cn = parseInt(c);
    this.navCtrl.push(UsuarioPage,{codigo: cn,novo: false});

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosPage');
  }

}
