import {Router, ActivatedRouteSnapshot, CanActivate} from "@angular/router"
import { Injectable } from '@angular/core';
import { SecurityService } from './shared/security.service';

@Injectable()
export class SecurityRouteActivator implements CanActivate
{
    constructor(private service : SecurityService, private router : Router) 
    {}

    canActivate(route: ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        const securityExists = !!this.service.getSecurity(+route.params['id'])

        if(!securityExists)
            this.router.navigate(['/404']);
        
        return securityExists;

    }
    
}