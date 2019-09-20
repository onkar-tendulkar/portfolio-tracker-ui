import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { IPortfolio } from './shared/portfolio.model';
import { PortfolioService } from './shared/portfolio.service';

@Component ({
    templateUrl: 'portfolio-details.component.html'
})
export class PortfolioDetailsComponent
{
    portfolio:IPortfolio;
    addMode:boolean;

    constructor(private portfolioService:PortfolioService,private route:ActivatedRoute)
    {}

    ngOnInit()
    {
        /* + is just to type cast to number*/
        this.addMode=false;
        this.portfolio = this.portfolioService.getPortfolio(
            +this.route.snapshot.params['id']
        );
        console.log(this.portfolio.securities);
    }

    addSecurity()
    {
        this.addMode=true;
    }
}