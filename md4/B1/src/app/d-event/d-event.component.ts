import { Component } from '@angular/core';

@Component({
  selector: 'app-d-event',
  templateUrl: './d-event.component.html',
  styleUrls: ['./d-event.component.css']
})
export class DEventComponent {
  name:string = '';
  handleclick():void{
    alert(123);
  }
  handlekeyup(event:any):void{
    console.log(event);
    console.log(event.target.value);
    this.name = event.target.value;
  }
}
