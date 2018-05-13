import { UsuariosServiceProvider } from './../../providers/usuarios-service/usuarios-service';
import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Injectable()
@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {

  codigoUsuario: number;
  nomeUsuario: string;
  novo: boolean;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public usuariosServiceProvider: UsuariosServiceProvider) {
    this.codigoUsuario = navParams.get("codigo");
    this.novo = navParams.get('novo');
    
        
    if(!this.novo){
        let usuarios = usuariosServiceProvider.getUsuarios();
        
        for(let i=0;i<usuarios.length;i++){
          if(usuarios[i].codigo==this.codigoUsuario){
              this.nomeUsuario = usuarios[i].nome.toString();
              break;
          }
        }
      }
  }

  alterar(){
    this.usuariosServiceProvider.editUsuario(this.codigoUsuario,this.nomeUsuario);
    this.navCtrl.pop();
  }
  excluir(){
    this.usuariosServiceProvider.deleteUsuario(this.codigoUsuario);
    this.navCtrl.pop();    
  }

  incluir(){
    this.usuariosServiceProvider.addUsuario(this.nomeUsuario);
    this.navCtrl.pop();  
  }
}
