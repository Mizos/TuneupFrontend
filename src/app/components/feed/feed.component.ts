import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Dz } from './../../services/music.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit,OnDestroy {

  constructor(private dz:Dz) { }
  tunes=[];
  tunesSub:Subscription;
  @Output() feedLoaded:EventEmitter<any>=new EventEmitter();

  
  ngOnInit() {
   this.tunesSub = this.dz.getTunes('New').subscribe(data=>{
     this.tunes=data.slice(0,12);
   });
  }

  imgLoaded(){
    this.feedLoaded.emit();
  }


  ngOnDestroy(){
    this.tunesSub.unsubscribe();
  }

}
