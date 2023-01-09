import { Component } from '@angular/core';

@Component({
  selector: 'app-k-life-cycle',
  templateUrl: './k-life-cycle.component.html',
  styleUrls: ['./k-life-cycle.component.css']
})
export class KLifeCycleComponent {
  numbers:any[] = [];
  point:number = 0;
  next_number:number = 1;
  play:boolean = true;
  time_left:number = 60;
  time_interval:any = null;
  // Chạy lần đầu
  constructor(){
    console.log('constructor');
  }
  // Khi có input được truyền vào, hoặc giá trị input thay đổi
  ngOnChanges(){
    console.log('ngOnChanges');
  }
  // Chạy lần đầu
  ngOnInit(){
    for( let i = 1; i <= 100; i++ ){
      this.numbers.push(i);
    }
    console.log('ngOnInit');

    this.time_interval = setInterval(() => {
      this.time_left--;
    }, 1000);
  }
  playGame(number:any){
    // Gọi giảm thời gian
    if( this.next_number != number ){
      alert('Game over');
    }else{
      this.next_number += 1;
      this.point += 1;
    }

    // Xáo mảng
    this.numbers = this.shuffle(this.numbers);
  }

  shuffle(array:any[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  setClasses(number:any){
    return {
      'btn' : true,
      'btn-info':true,
      'btn-danger': (number < this.next_number) ? true : false
    }
  }

  // Khi có sự thay đổi của GTTT
  ngDoCheck(){
    console.log('ngOnDoCheck');
    if( this.time_left <= 0 ){
      alert('Game over');
      clearInterval(this.time_interval);
      this.time_left = 60;
    }
  }
  ngOnDestroy(){
    console.log('ngOnDestroy');
  }
}