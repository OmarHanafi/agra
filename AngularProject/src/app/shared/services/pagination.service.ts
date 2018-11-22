import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  getPage<T>(list : Array<T>, page : number, perpage : number) : Array<T> {
    let firstindex : number = (page-1)*perpage;
    let result = new Array<T>();
    for(let _i = firstindex; _i < firstindex+12; _i++){
      if(list[_i] === undefined)
        break;
      result.push(list[_i]);
    }
    return result;
  }

}
