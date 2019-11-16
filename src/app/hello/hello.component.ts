import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GreetingsService } from '../greetings.service';

@Component({
  selector:'custom-hello',
  templateUrl:'./hello.component.html',
  styleUrls:['./hello.component.css'],
  providers: [ GreetingsService ]
})

export class HelloComponent{
    @Input() name:string;
    @Output() sayHello:EventEmitter<string> = new EventEmitter<string>();
    public nameList:Array<string> = [];
    public inputName:string = '';
    
    constructor(private greetings: GreetingsService){

  }

    onNameClick(){
      console.log("counter in HelloComponet is: " + this.greetings.counter);
      this.sayHello.emit('Hello!');
      }

    addName(){
      this.nameList.push(this.inputName);
      this.inputName = '';
      console.log(this.nameList);
    }
}