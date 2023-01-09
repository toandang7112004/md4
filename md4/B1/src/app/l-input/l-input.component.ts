import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-l-input',
  templateUrl: './l-input.component.html',
  styleUrls: ['./l-input.component.css']
})
export class LInputComponent {
  @Input('title') title: any;
  @Output('GateOne') GateOne = new EventEmitter<any>();
  ngOnInit() {
    console.log(this.title);
  }
  HandleClick(){
    // alert('HandleClick')
    this.GateOne.emit(this.title);  
  }
}