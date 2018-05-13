import { Injectable } from '@angular/core';

/*
  Generated class for the UsuariosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosServiceProvider {

  usuarios = [{codigo: 1, nome:'Pedro'},
              {codigo: 2, nome:'Adilson'},
              {codigo:3, nome: 'Cid'},
              {codigo:4, nome: 'Thiago'}

  ];
  ultimoCodigo = 4;
  getUsuarios():any[]{
    return this.usuarios; 
  }

  editUsuario(codigo,nome){
    for(let i = 0;i<this.usuarios.length;i++){
      if(this.usuarios[i].codigo==codigo){
        this.usuarios[i].nome = nome;
        break;
      }
    }
  }
  addUsuario(nome){
    this.ultimoCodigo ++;
    this.usuarios.push({codigo:this.ultimoCodigo,nome});    
  }
  deleteUsuario(c){
    let codigo = parseInt(c);
    for(let i = 0;i<this.usuarios.length;i++){
      if(this.usuarios[i].codigo==codigo){
        this.usuarios.splice(i,1);
        break;
      }
    }
  }
}
