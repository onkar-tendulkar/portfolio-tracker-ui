import { Component, Input } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router';
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
        this.portfolio = this.route.snapshot.data['portfolio'];
    }

    addSecurity()
    {
        this.addMode=true;
    }

    cancelNewSecurity()
    {
        this.addMode=false;
    }

    saveNewSecurity(event)
    {
        this.portfolioService.addSecurityToPortfolio(this.portfolio, event);   
        this.addMode=false;
    }
}