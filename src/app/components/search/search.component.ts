import { Component, OnInit } from '@angular/core';
import { Dz } from '../../services/music.service';
import Tune from '../../tune.modal';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchData:Tune[];

  constructor(private dz:Dz) { }

  ngOnInit() {
  }


  doSearch(inp){
    this.dz.search(inp.value).subscribe(data=>{
      this.searchData=data;
      console.log(this.searchData);
    })
  }

}
