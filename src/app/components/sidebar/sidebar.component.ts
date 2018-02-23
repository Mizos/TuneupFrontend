import { Component, OnInit } from '@angular/core';
import { Dz } from '../../services/music.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  tunes=[];

  constructor(private dz:Dz) { }

  ngOnInit() {
    this.dz.getTunes('Top').subscribe(data=>{
      this.tunes=data;
    })
  }

}
