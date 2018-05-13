import { UsuariosPage } from './../pages/usuarios/usuarios';
import { UsuarioPage } from './../pages/usuario/usuario';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProjetosPage } from '../pages/projetos/projetos';
import { TabsPage } from '../pages/tabs/tabs';
import {ProjetoPage} from '../pages/projeto/projeto'
import{ TarefasPage} from '../pages/tarefas/tarefas';
import{ TarefaPage } from'../pages/tarefa/tarefa'

import { ProjetosServiceProvider } from '../providers/projetos-service/projetos-service';
import { TarefasServiceProvider } from '../providers/tarefas-service/tarefas-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import{Filtro} from '../pages/tarefas/filtro'
import { UsuariosServiceProvider } from '../providers/usuarios-service/usuarios-service';


@NgModule({
  declarations: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TarefasPage,
    TarefaPage,
    Filtro,
    TabsPage,
    UsuarioPage,
    UsuariosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TarefasPage,
    TarefaPage,
    TabsPage,
    UsuarioPage,
    UsuariosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProjetosServiceProvider,
    TarefasServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosServiceProvider,
    
  ]
})
export class AppModule {}
