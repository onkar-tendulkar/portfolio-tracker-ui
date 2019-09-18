import {Router, ActivatedRouteSnapshot, CanActivate} from "@angular/router"
import { Injectable } from '@angular/core';
import { PortfolioService } from './shared/portfolio.service';

@Injectable()
export class PortfolioRouteActivator implements CanActivate
{
    constructor(private service : PortfolioService, private router : Router) 
    {}

    canActivate(route: ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        const portfolioExists = !!this.service.getPortfolio(+route.params['id'])

        if(!portfolioExists)
            this.router.navigate(['/404']);
        
        return portfolioExists;

    }
    
}