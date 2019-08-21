import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  
{
  private nome:String='Arthur';
  maiusculo():void
  {
    this.nome=this.nome.toUpperCase();
  }  
  minusculo():void
  {
    this.nome=this.nome.toLowerCase();
  }
}
