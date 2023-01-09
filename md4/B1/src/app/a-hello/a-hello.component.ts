import { Component } from '@angular/core';

@Component({
  selector: 'app-a-hello',
  templateUrl: './a-hello.component.html',
  styleUrls: ['./a-hello.component.css']
})
export class AHelloComponent {
  name:string = "ngyuen van a";
  age:number = 18;
  handleclick():void{
    alert(123);
  }
}
