import { Injectable } from '@angular/core';
// import { HttpModule } from '@angular/http';
// import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    console.log('data service connected');
  }
  getPosts(){
//    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map(res => res.json()));
    }
}
