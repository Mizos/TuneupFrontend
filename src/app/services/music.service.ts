import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import Tune  from '../tune.modal';


@Injectable()
export class Dz{

  baseUrl:string = 'https://api.deezer.com/';
  limit:string = '20&output=jsonp';
  id:number=0;
  
  constructor(private http:HttpClient){}


  getTunes(genre:string){
    switch (genre) {
      case 'Top': this.id = 1313621735;
        break;
      case 'Pop': this.id = 1963962142;
        break;
      case 'Rock': this.id = 1057779131;
        break;
      case 'Edm': this.id = 1902101402;
        break;
      case 'New': this.id = 1282495565;
        break;
      case 'Rap': this.id = 1996494362;
        break;
      default: this.id=0;
        break;
    }

    const url = `${this.baseUrl}playlist/${this.id}/tracks?limit=${this.limit}`;
    return this.http.jsonp(url, 'callback')
      .map(res => {
        return res['data'];
      }); 

  }

  getGenres(){
    let url = `${this.baseUrl}editorial?limit=${this.limit}`;
    return this.http.jsonp(url, 'callback')
      .map(res => {
        return res['data'];
      })
  }

  search(term:string){
    let url =`${this.baseUrl}search?q=${term}&output=jsonp`;
    return this.http.jsonp(url,'callback')
    .map(res=>{
      const tunes=res['data'].map(t=>{
        return new Tune(t.title, t.album.cover_small,
          t.artist.name, t.preview);
      });
      return tunes;
    })
  }
}