import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SecurityService } from '../shared/services/security.service';

@Injectable({
  providedIn: 'root'
})

export class ClientAuthGuard implements CanActivate {

    constructor(private router: Router
        , private securityService: SecurityService) {}

    canActivate () : boolean {

        if(this.securityService.securityProcess(3))
            return true;
        else {
            this.router.navigate(['login']);
            return false;
        }

    }


}
