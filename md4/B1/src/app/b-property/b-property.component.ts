import { Component } from '@angular/core';

@Component({
  selector: 'app-b-property',
  templateUrl: './b-property.component.html',
  styleUrls: ['./b-property.component.css']
})
export class BPropertyComponent {
  imageUrl:string = 'https://media.techmaster.vn/api/fileman/Uploads/ImageBlog/hoc-lap-trinh-web-nodejs-truc-tuyen-12112015.png';
  imageAlt:string = 'node js';
  link:string = 'https://james.codegym.vn/mod/page/view.php?id=10863';
}
