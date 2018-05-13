import { Pipe, PipeTransform } from "@angular/core";
   
  @Pipe({
      name: "filtro",
      pure: false
  })
  export class Filtro implements PipeTransform {
   
    public transform(itens:any[],filtroTarefas:any):any[]{
        itens.sort((a,b) => a.data-b.data);  
        if(filtroTarefas!=null){
          if(filtroTarefas.projeto>=0){
            return itens.filter(item=> item.projeto == filtroTarefas.projeto);
          }else if(filtroTarefas.proprietario>=0){
            return itens.filter(item=> item.proprietario == filtroTarefas.proprietario);
          }else if(filtroTarefas.dias>=0) {  
              var dataAux  = new Date((new Date()).getTime() + filtroTarefas.dias*24*60*60*1000).setHours(0,0,0,0)
              let d = new Date(dataAux);
             var  items = itens.filter(
                item => item.data <= d);
              return items
          }else{
            return itens;
          }
        }else{
          return itens;
        }
      }
  }