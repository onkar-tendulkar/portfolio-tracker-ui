import { Component } from '@angular/core'
import { ISecurity } from '../securities/shared/security.model';
import { PortfolioService } from './shared/portfolio.service';
import { IPortfolio } from './shared/portfolio.model';
import { AuthService } from '../user/auth.service';
import { Observable } from 'rxjs';

@Component ({
    selector:'portfolios-list',
    templateUrl: 'portfolio-list.component.html'
})
export class PortfolioListComponent
{
    portfolios:IPortfolio[];
    addMode:boolean=false;

    constructor(private portfolioService:PortfolioService,private authService:AuthService)
    {}

    ngOnInit()
    {
        var portfoliosObservable:Observable<IPortfolio[]> = this.portfolioService.getHardcodedPortfolios(this.authService.currentUser.id);
        portfoliosObservable.subscribe(p =>
            {
                this.portfolios = p;
            });
    }

    addPortfolioMode()
    {
        this.addMode=true;
    }

    saveNewPortfolio(event)
    {
        //this.portfolioService.addPortfolio(this.portfolio, event); 
        console.log(event);  
        this.addMode=false;
    }
}