import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PortfolioService } from './portfolio.service';


@Injectable()
export class PortfolioSecurityResolver implements Resolve<any>
{
    constructor(private portfolioService: PortfolioService){}

    resolve(route: ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot)
    {
        return this.portfolioService.getSecuritiesForPortfolio(+route.params['id']);
    }
}
