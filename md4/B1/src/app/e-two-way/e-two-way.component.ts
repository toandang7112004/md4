import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-e-two-way',
  templateUrl: './e-two-way.component.html',
  styleUrls: ['./e-two-way.component.css']
})
export class ETwoWayComponent {
  name:string = '';
  reset():void{
    this.name = '';
  }
}
