import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { IPortfolio } from './shared/portfolio.model';
import { PortfolioService } from './shared/portfolio.service';

@Component ({
    template: `<h1>Portfolio : {{portfolio.name}}</h1>
                <portfolio-securities-list [securities]="portfolio?.securities"></portfolio-securities-list>`
})
export class PortfolioDetailsComponent
{
    portfolio:IPortfolio;

    constructor(private portfolioService:PortfolioService,private route:ActivatedRoute)
    {}

    ngOnInit()
    {
        /* + is just to type cast to number*/
        this.portfolio = this.portfolioService.getPortfolio(
            +this.route.snapshot.params['id']
        );
        console.log(this.portfolio.securities);
    }

}