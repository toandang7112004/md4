import { Component } from '@angular/core';

@Component({
  selector: 'app-i-template',
  templateUrl: './i-template.component.html',
  styleUrls: ['./i-template.component.css']
})
export class ITemplateComponent {
  handleClick(name:any):void{
    alert(name)
  }
}
