import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  
{
  private nome:String='Arthur';

  //aqui ele cria um array e manda para o codigo
  private lista:string[]=['Ana','Pedro','José'];

  maiusculo():void
  {
    this.nome=this.nome.toUpperCase();
  }  
  minusculo():void
  {
    this.nome=this.nome.toLowerCase();
  }

  add():void{
    this.lista.push(this.nome);
  }
}
