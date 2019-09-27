import { Component } from '@angular/core'
import { ISecurity } from '../securities/shared/security.model';
import { PortfolioService } from './shared/portfolio.service';
import { IPortfolio } from './shared/portfolio.model';
import { AuthService } from '../user/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component ({
    selector:'portfolios-list',
    templateUrl: 'portfolio-list.component.html'
})
export class PortfolioListComponent
{
    portfolios:IPortfolio[];
    addMode:boolean=false;

    constructor(private portfolioService:PortfolioService,private authService:AuthService,
                    private router:Router)
    {}

    ngOnInit()
    {
        this.loadPortfolios();
    }

    loadPortfolios()
    {
        var portfoliosObservable:Observable<IPortfolio[]> = this.portfolioService.getPortfoliosForUser(this.authService.currentUser.id);
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
        this.portfolioService.createPortfolio(event).subscribe(r =>
            {
                if(r!=undefined)
                {
                    this.addMode=false;
                    this.router.navigate(['/portfolios']);
                }
            });         
    }
}