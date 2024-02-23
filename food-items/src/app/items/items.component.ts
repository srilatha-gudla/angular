import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
@Input() img!:string
@Input() title!:string
count:number=0;
isDisabled =false;

incr(){
  if(this.count>=10){
    this.isDisabled=true
  }
  else
  this.count++;
}
decr(){
  if(this.count<=0){
    this.isDisabled=true
  }
  else
  this.count--;
}
reset(){
  this.count=0;
}
}
