import { Component } from '@angular/core';
import { GreetingsService } from './greetings.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public myName:string = "Ruddy Cruceta";
  public titleStyle:{};

constructor(private greetings:GreetingsService){
  }

  onSayHello(message){
   this.greetings.handleGreeting(message);
   this.updateTitleStyles();
  }

updateTitleStyles(){
  this.titleStyle={
   'margin-top':'40px',
    'color': this.greetings.counter < 3 ? 'green' : 'goldenrod'
  }
}
  updateNameClasses(name:string){
    return{
      'error': name.length <= 3,
      'warning': name.length >3 && name.length <=6,
      'success': name.length > 6,
      'bold': name.length > 8
    }
  }
}