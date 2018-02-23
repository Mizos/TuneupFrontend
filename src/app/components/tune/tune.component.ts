import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tune',
  templateUrl: './tune.component.html',
  styleUrls: ['./tune.component.scss']
})
export class TuneComponent implements OnInit {

  @Input() tune;
  @Output() loadedEvent: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  imgLoaded(){
    this.loadedEvent.emit();
  }

  ngOnInit() {
   
  }

}
