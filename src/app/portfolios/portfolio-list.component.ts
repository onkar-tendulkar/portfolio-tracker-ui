import { Component } from '@angular/core'
import { ISecurity } from '../securities/shared/security.model';
import { PortfolioService } from './shared/portfolio.service';
import { IPortfolio } from './shared/portfolio.model';
import { AuthService } from '../user/auth.service';

@Component ({
    selector:'portfolios-list',
    template: `<div>
                <h1>Portfolios</h1>
                <portfolio *ngFor="let portfolio of portfolios" [portfolio]="portfolio"></portfolio>
                </div>`
})
export class PortfolioListComponent
{
    portfolios:IPortfolio[];

    constructor(private portfolioService:PortfolioService,private authService:AuthService)
    {}

    ngOnInit()
    {
        this.portfolios = this.portfolioService.getPortfoliosForUser(this.authService.currentUser.id);
    }
}