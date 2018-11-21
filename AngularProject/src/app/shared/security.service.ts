import { Injectable } from '@angular/core';
import { User } from './interfaces/user';

@Injectable({
    providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  securityProcess(type : number) : boolean {
    let result : boolean = false;
    let user : User = <User> JSON.parse(sessionStorage.getItem("user"));
    if(user != null){
      if(user.type == type)
        result = true;
    }
    return result;
  }

}
