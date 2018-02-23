import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor() { }

  loading:boolean=true;
  imgCount:number=0;

  ngOnInit() {
  }

  loaded(){
    this.imgCount++
    if(this.imgCount>=12){
      this.loading=false;
    }
  }
}
